import { useId, useRef, useState } from 'react'
import type { Player } from '../../../data/types'
import type { DefenseTier, GameStat, PlayerStatProfile, SplitStats } from '../../../data/stats'
import {
  chronologicalSeasons,
  fmtDec,
  fmtInt,
  fmtPct,
  getApprovedStatCopy,
  getPlayerStats,
  isThinSample,
  latestSeason,
  orderedTierSplits,
  TIER_RANK_LABEL,
} from '../../../data/stats'
import { reconcilePassDefense } from '../../../data/stats/validate'

/**
 * The statistical layer for a completed 2027 WR profile.
 *
 * LEVEL ONE, visible by default: a compact six-field 2025 snapshot
 * (GP, REC, YDS, TD, YPR, receiving-yard share). Numbers, not narrative.
 *
 * LEVEL TWO, on demand: the full statistical breakdown, using the same inline
 * expansion behavior as the rest of the page. Career table, 2025 consistency,
 * pass-defense-tier splits, ranked/winning context, game-by-game production,
 * and a sources/methodology drawer.
 *
 * Hard rules: no generated prose or automated insight; null is unavailable and
 * never renders as zero; DNP games stay unavailable but count as played only
 * where the source counts them; percentages are stored as fractions and
 * formatted here.
 */

interface Props {
  player: Player
}

const TIER_MOD: Record<DefenseTier, string> = {
  Strong: 'strong',
  Average: 'average',
  Weak: 'weak',
  FCS: 'fcs',
}

function TierTag({ tier, rank }: { tier: DefenseTier; rank?: number | null }) {
  return (
    <span className={`pstat-tier pstat-tier--${TIER_MOD[tier]}`}>
      {tier}
      {rank != null && <span className="pstat-tier__rank">#{rank}</span>}
    </span>
  )
}

function ThinTag() {
  return <span className="pstat-thin" title="Fewer than three games">Thin</span>
}

/* ---- Snapshot (level one) --------------------------------------------- */

function Snapshot({ profile }: { profile: PlayerStatProfile }) {
  const s = profile.summary2025
  const cells: Array<{ label: string; value: string }> = [
    { label: 'GP', value: fmtInt(s.games) },
    { label: 'Rec', value: fmtInt(s.receptions) },
    { label: 'Yds', value: fmtInt(s.receivingYards) },
    { label: 'TD', value: fmtInt(s.receivingTouchdowns) },
    { label: 'Y/Rec', value: fmtDec(s.yardsPerReception) },
    { label: 'Rec yd share', value: fmtPct(s.receivingYardShare) },
  ]
  const approved = getApprovedStatCopy(profile.slug)
  const context =
    s.availability != null && s.games < s.teamGames
      ? `${s.school} · 2025 · ${fmtInt(s.games)} of ${fmtInt(s.teamGames)} team games`
      : `${s.school} · 2025 season`

  return (
    <div className="pstat-snap">
      <ul className="pstat-snap__grid" role="list">
        {cells.map((c) => (
          <li key={c.label} className="pstat-snap__cell">
            <span className="pstat-snap__val">{c.value}</span>
            <span className="pstat-snap__lbl">{c.label}</span>
          </li>
        ))}
      </ul>
      <p className="pstat-snap__context">{context}</p>
      {approved && <p className="pstat-snap__note">{approved}</p>}
    </div>
  )
}

/* ---- Career production table ------------------------------------------ */

function CareerTable({ profile }: { profile: PlayerStatProfile }) {
  const seasons = chronologicalSeasons(profile)
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-career`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-career`}>Career production</h3>
      <div className="pstat-scroll">
        <table className="pstat-table">
          <thead>
            <tr>
              <th scope="col" className="pstat-table__lhs">Season</th>
              <th scope="col" className="pstat-table__lhs">School</th>
              <th scope="col">GP</th>
              <th scope="col">Rec</th>
              <th scope="col">Yds</th>
              <th scope="col">TD</th>
              <th scope="col">Y/Rec</th>
              <th scope="col">Y/G</th>
              <th scope="col">Rec yd share</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((row) => (
              <tr key={`${row.season}-${row.school}`}>
                <th scope="row" className="pstat-table__lhs">{row.season}</th>
                <td className="pstat-table__lhs">{row.school}</td>
                <td>{fmtInt(row.games)}</td>
                <td>{fmtInt(row.receptions)}</td>
                <td>{fmtInt(row.receivingYards)}</td>
                <td>{fmtInt(row.receivingTouchdowns)}</td>
                <td>{fmtDec(row.yardsPerReception)}</td>
                <td>{fmtDec(row.yardsPerGame)}</td>
                <td>{fmtPct(row.receivingYardShare)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ---- 2025 consistency -------------------------------------------------- */

function Consistency({ profile }: { profile: PlayerStatProfile }) {
  const s = profile.summary2025
  const metrics: Array<{ label: string; value: string }> = [
    { label: 'Median yds / game', value: fmtDec(s.medianReceivingYards) },
    { label: '100-yard games', value: fmtInt(s.hundredYardGames) },
    { label: 'Games under 30 yds', value: fmtInt(s.gamesUnder30Yards) },
    { label: 'Top-3 game yd share', value: fmtPct(s.topThreeGameYardShare) },
    { label: 'Reception share', value: fmtPct(s.receptionShare) },
    { label: 'Rec TD share', value: fmtPct(s.receivingTouchdownShare) },
  ]
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-consistency`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-consistency`}>2025 consistency</h3>
      <ul className="pstat-metrics" role="list">
        {metrics.map((m) => (
          <li key={m.label} className="pstat-metrics__item">
            <span className="pstat-metrics__val">{m.value}</span>
            <span className="pstat-metrics__lbl">{m.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ---- Split table (shared by tier + record context) --------------------- */

function SplitTable({
  rows,
  headLabel,
  renderHead,
}: {
  rows: SplitStats[]
  headLabel: string
  renderHead: (row: SplitStats) => React.ReactNode
}) {
  return (
    <div className="pstat-scroll">
      <table className="pstat-table">
        <thead>
          <tr>
            <th scope="col" className="pstat-table__lhs">{headLabel}</th>
            <th scope="col">GP</th>
            <th scope="col">Rec</th>
            <th scope="col">Yds</th>
            <th scope="col">TD</th>
            <th scope="col">Y/Rec</th>
            <th scope="col">Y/G</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <th scope="row" className="pstat-table__lhs">
                <span className="pstat-table__headcell">
                  {renderHead(row)}
                  {isThinSample(row.games) && <ThinTag />}
                </span>
              </th>
              <td>{fmtInt(row.games)}</td>
              <td>{fmtInt(row.receptions)}</td>
              <td>{fmtInt(row.receivingYards)}</td>
              <td>{fmtInt(row.receivingTouchdowns)}</td>
              <td>{fmtDec(row.yardsPerReception)}</td>
              <td>{fmtDec(row.yardsPerGame)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---- Pass-defense-tier splits ----------------------------------------- */

function TierSplits({ profile }: { profile: PlayerStatProfile }) {
  const rows = orderedTierSplits(profile)
  const recon = reconcilePassDefense(profile)
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-tiers`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-tiers`}>Production by pass-defense tier</h3>
      <SplitTable
        rows={rows}
        headLabel="Opponent tier"
        renderHead={(row) => (
          <span className="pstat-splitname">
            {row.tier && <TierTag tier={row.tier} />}
            {row.tier && <span className="pstat-splitname__sub">{TIER_RANK_LABEL[row.tier]}</span>}
          </span>
        )}
      />
      <p className="pstat-foot">
        2025 final FBS pass-efficiency-defense ranking. A team measure, not a cornerback grade.
        {recon.ok && ' Tiers reconcile to the season total.'}
      </p>
    </section>
  )
}

/* ---- Ranked / winning-team context (secondary) ------------------------- */

function RecordContext({ profile }: { profile: PlayerStatProfile }) {
  const rows = profile.opponentSplits2025.recordContext
  if (!rows.length) return null
  return (
    <section className="pstat-block pstat-block--secondary" aria-labelledby={`${profile.slug}-record`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-record`}>
        Ranked and winning-team context <span className="pstat-block__tag">Secondary</span>
      </h3>
      <SplitTable
        rows={rows}
        headLabel="Split"
        renderHead={(row) => <span className="pstat-splitname__label">{row.split}</span>}
      />
    </section>
  )
}

/* ---- Game-by-game production ------------------------------------------- */

function GameLog({ profile }: { profile: PlayerStatProfile }) {
  const games = profile.gameLog2025
  const maxYards = Math.max(
    1,
    ...games.map((g) => (g.status === 'Played' && g.receivingYards != null ? g.receivingYards : 0)),
  )
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-log`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-log`}>Game by game · 2025</h3>
      <ol className="pstat-log" role="list">
        {games.map((g) => (
          <GameRow key={g.gameNumber} g={g} maxYards={maxYards} />
        ))}
      </ol>
      <p className="pstat-foot">
        Bars scale to receiving yards. DNP games are unavailable, not zero. Tier tag reflects the opponent's 2025 pass defense.
      </p>
    </section>
  )
}

function GameRow({ g, maxYards }: { g: GameStat; maxYards: number }) {
  const dnp = g.status === 'DNP' || g.receivingYards == null
  const width = dnp ? 0 : Math.max(2, Math.round((g.receivingYards! / maxYards) * 100))
  return (
    <li className={`pstat-log__row${dnp ? ' pstat-log__row--dnp' : ''}`}>
      <span className="pstat-log__opp">
        <span className="pstat-log__oppname">{g.opponent}</span>
        <TierTag tier={g.defenseTier} rank={g.passEfficiencyDefenseRank} />
      </span>
      <span className="pstat-log__bar" aria-hidden="true">
        {dnp ? (
          <span className="pstat-log__dnptrack" />
        ) : (
          <span className={`pstat-log__fill pstat-log__fill--${TIER_MOD[g.defenseTier]}`} style={{ width: `${width}%` }} />
        )}
      </span>
      <span className="pstat-log__yds">
        {dnp ? (
          <span className="pstat-log__dnp">DNP</span>
        ) : (
          <>
            <strong>{fmtInt(g.receivingYards)}</strong> yds
            <span className="pstat-log__line">
              {fmtInt(g.receptions)} rec{g.receivingTouchdowns ? ` · ${fmtInt(g.receivingTouchdowns)} TD` : ''}
            </span>
          </>
        )}
      </span>
    </li>
  )
}

/* ---- Sources & methodology -------------------------------------------- */

function SourcesDrawer({ profile }: { profile: PlayerStatProfile }) {
  const nameDiffers = profile.sourceName && profile.sourceName !== profile.displayName
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-sources`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-sources`}>Sources and methodology</h3>
      <dl className="pstat-meta">
        <div className="pstat-meta__row">
          <dt>Pass-defense tiers</dt>
          <dd>Strong 1–34 · Average 35–102 · Weak 103–136 · FCS separate. 2025 final FBS pass-efficiency-defense ranks.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>Percentages</dt>
          <dd>Share fields are fractions of team totals, formatted to one decimal.</dd>
        </div>
        {nameDiffers && (
          <div className="pstat-meta__row">
            <dt>Statistical record</dt>
            <dd>Filed under the verified public name {profile.sourceName}.</dd>
          </div>
        )}
        {profile.audit && (
          <div className="pstat-meta__row">
            <dt>Audit</dt>
            <dd>
              {[profile.audit.status, profile.audit.discrepancy, profile.audit.resolution]
                .filter(Boolean)
                .join(' · ')}
            </dd>
          </div>
        )}
      </dl>
      {profile.sources.length > 0 && (
        <ul className="pstat-sources" role="list">
          {profile.sources.map((src, i) => (
            <li key={i} className="pstat-sources__item">
              <span className="pstat-sources__meta">
                {[src.season, src.school, src.type].filter(Boolean).join(' · ')}
                {src.purpose ? ` — ${src.purpose}` : ''}
              </span>
              {src.url && (
                <a className="pstat-sources__link" href={src.url} target="_blank" rel="noreferrer noopener">
                  View source
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/* ---- Section shell (collapsible level two) ---------------------------- */

export default function StatsSection({ player }: Props) {
  const profile = getPlayerStats(player.slug)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const panelId = useId()

  if (!profile) return null

  if (import.meta.env && import.meta.env.DEV) {
    const recon = reconcilePassDefense(profile)
    if (!recon.ok) console.warn(`[wr-stats] pass-defense splits do not reconcile for ${profile.slug}`, recon)
  }

  const collapseFromBottom = () => {
    setOpen(false)
    requestAnimationFrame(() => {
      const el = rootRef.current
      if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' })
    })
  }

  const latest = latestSeason(profile)

  return (
    <section className="vm vm--stats reveal" id="vm-stats" aria-labelledby="vm-stats-t">
      <header className="vm__head">
        <p className="kicker vm__kicker">2025 production</p>
        <h2 id="vm-stats-t" className="vm__title">By the numbers</h2>
      </header>

      <div className="pstat">
        <Snapshot profile={profile} />

        <div className="xp pstat-xp" ref={rootRef}>
          <button
            type="button"
            className="xp__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="xp__toggle-label">{open ? 'Collapse statistics' : 'Full statistical breakdown'}</span>
            <span className="xp__toggle-mark" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          <div id={panelId} className="xp__panel" data-open={open || undefined}>
            <div className="xp__clip" inert={!open}>
              <div className="xp__inner pstat-panel">
                <p className="kicker xp__kicker">
                  Statistical record{latest ? ` · through ${latest.season}` : ''}
                </p>
                <CareerTable profile={profile} />
                <Consistency profile={profile} />
                <TierSplits profile={profile} />
                <RecordContext profile={profile} />
                <GameLog profile={profile} />
                <SourcesDrawer profile={profile} />
                <button type="button" className="xp__close" onClick={collapseFromBottom} aria-controls={panelId}>
                  Collapse statistics <span aria-hidden="true">−</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
