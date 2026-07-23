import { useId, useRef, useState } from 'react'
import type { Player } from '../../../data/types'
import { DASH, fmtDec, fmtInt, fmtPct } from '../../../data/stats'
import {
  careerSeasonLines,
  completionRate,
  getQbStats,
  hasCareerHistory,
  hasRushing,
  interceptionRate,
  isThinQbSample,
  playedGames,
  qbTierSplits,
  QB_TIER_RANK_LABEL,
  touchdownRate,
  totalsLine,
  yardsPerAttempt,
  yardsPerGame,
  type QbDefenseTier,
  type QbGameStat,
  type QbSeasonLine,
  type QbSplitRate,
  type QbStatProfile,
  type QbTierSplit,
} from '../../../data/stats/qbStats2027'

/**
 * The statistical layer for a provisional 2027 QB profile.
 *
 * LEVEL ONE, visible by default: a compact 2025 passing snapshot plus a rushing
 * line. Verified totals only. Numbers, not narrative.
 *
 * LEVEL TWO, on demand: the full record. Career passing and rushing tables, a
 * derived 2025 efficiency grid, production by opponent pass-defense tier,
 * verified situational and opponent-quality splits, red-zone and explosive
 * shares, a game-by-game log tagged with each opponent's pass defense, and a
 * sources/methodology drawer.
 *
 * Hard rules (shared with the WR layer): no generated prose; null is unavailable
 * and never renders as zero; DNP games stay unavailable but count as played only
 * where the source counts them; percentages are stored as fractions and formatted
 * here. Tier splits and game logs reconcile to the verified 2025 line.
 */

interface Props {
  player: Player
}

const TIER_MOD: Record<QbDefenseTier, string> = {
  Strong: 'strong',
  Average: 'average',
  Weak: 'weak',
  FCS: 'fcs',
}

function schoolLabel(l: QbSeasonLine): string {
  return l.level === 'Division II' ? `${l.school} · D-II` : l.school
}

function TierTag({ tier, rank }: { tier: QbDefenseTier; rank?: number | null }) {
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

function Snapshot({ profile }: { profile: QbStatProfile }) {
  const s = profile.season2025
  const cells: Array<{ label: string; value: string }> = [
    { label: 'GP', value: fmtInt(s.games) },
    { label: 'Cmp-Att', value: s.completions != null && s.attempts != null ? `${fmtInt(s.completions)}-${fmtInt(s.attempts)}` : DASH },
    { label: 'Cmp%', value: fmtPct(completionRate(s)) },
    { label: 'Yds', value: fmtInt(s.passingYards) },
    { label: 'TD', value: fmtInt(s.passingTouchdowns) },
    { label: 'INT', value: fmtInt(s.interceptions) },
  ]
  const context =
    s.starts != null && s.starts < s.games
      ? `${s.school} · 2025 · ${fmtInt(s.starts)} of ${fmtInt(s.games)} starts`
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
      {hasRushing(s) && (
        <p className="pstat-snap__note">
          Rushing · {fmtInt(s.rushAttempts)} att · {fmtInt(s.rushYards)} yds · {fmtInt(s.rushTouchdowns)} TD
        </p>
      )}
    </div>
  )
}

/* ---- Career passing table --------------------------------------------- */

function CareerPassingTable({ profile }: { profile: QbStatProfile }) {
  const lines = careerSeasonLines(profile)
  const showTotals = lines.length > 1
  const t = totalsLine(lines)
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-passing`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-passing`}>Career passing</h3>
      <div className="pstat-scroll">
        <table className="pstat-table">
          <thead>
            <tr>
              <th scope="col" className="pstat-table__lhs">Season</th>
              <th scope="col" className="pstat-table__lhs">School</th>
              <th scope="col">GP</th>
              <th scope="col">Cmp</th>
              <th scope="col">Att</th>
              <th scope="col">Cmp%</th>
              <th scope="col">Yds</th>
              <th scope="col">Y/A</th>
              <th scope="col">TD</th>
              <th scope="col">INT</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((l) => (
              <tr key={`${l.season}-${l.school}`}>
                <th scope="row" className="pstat-table__lhs">{l.season}</th>
                <td className="pstat-table__lhs">{schoolLabel(l)}</td>
                <td>{fmtInt(l.games)}</td>
                <td>{fmtInt(l.completions)}</td>
                <td>{fmtInt(l.attempts)}</td>
                <td>{fmtPct(completionRate(l))}</td>
                <td>{fmtInt(l.passingYards)}</td>
                <td>{fmtDec(yardsPerAttempt(l))}</td>
                <td>{fmtInt(l.passingTouchdowns)}</td>
                <td>{fmtInt(l.interceptions)}</td>
              </tr>
            ))}
            {showTotals && (
              <tr className="pstat-table__total">
                <th scope="row" className="pstat-table__lhs">Career</th>
                <td className="pstat-table__lhs">{DASH}</td>
                <td>{fmtInt(t.games)}</td>
                <td>{fmtInt(t.completions)}</td>
                <td>{fmtInt(t.attempts)}</td>
                <td>{fmtPct(completionRate(t))}</td>
                <td>{fmtInt(t.passingYards)}</td>
                <td>{fmtDec(yardsPerAttempt(t))}</td>
                <td>{fmtInt(t.passingTouchdowns)}</td>
                <td>{fmtInt(t.interceptions)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {lines.some((l) => l.level === 'Division II') && (
        <p className="pstat-foot">Seasons marked D-II were played at the Division II level and are not FBS production.</p>
      )}
    </section>
  )
}

/* ---- Career rushing table --------------------------------------------- */

function CareerRushingTable({ profile }: { profile: QbStatProfile }) {
  const lines = careerSeasonLines(profile).filter(hasRushing)
  if (!lines.length) return null
  const showTotals = lines.length > 1
  const t = totalsLine(lines)
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-rushing`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-rushing`}>Career rushing</h3>
      <div className="pstat-scroll">
        <table className="pstat-table">
          <thead>
            <tr>
              <th scope="col" className="pstat-table__lhs">Season</th>
              <th scope="col" className="pstat-table__lhs">School</th>
              <th scope="col">Att</th>
              <th scope="col">Yds</th>
              <th scope="col">TD</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((l) => (
              <tr key={`${l.season}-${l.school}`}>
                <th scope="row" className="pstat-table__lhs">{l.season}</th>
                <td className="pstat-table__lhs">{schoolLabel(l)}</td>
                <td>{fmtInt(l.rushAttempts)}</td>
                <td>{fmtInt(l.rushYards)}</td>
                <td>{fmtInt(l.rushTouchdowns)}</td>
              </tr>
            ))}
            {showTotals && (
              <tr className="pstat-table__total">
                <th scope="row" className="pstat-table__lhs">Career</th>
                <td className="pstat-table__lhs">{DASH}</td>
                <td>{fmtInt(t.rushAttempts)}</td>
                <td>{fmtInt(t.rushYards)}</td>
                <td>{fmtInt(t.rushTouchdowns)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="pstat-foot">NCAA rushing includes sack losses, so net yardage understates designed-run value.</p>
    </section>
  )
}

/* ---- 2025 efficiency (derived) ---------------------------------------- */

function Efficiency({ profile }: { profile: QbStatProfile }) {
  const s = profile.season2025
  const metrics: Array<{ label: string; value: string }> = [
    { label: 'Completion %', value: fmtPct(completionRate(s)) },
    { label: 'Yards / attempt', value: fmtDec(yardsPerAttempt(s)) },
    { label: 'Pass yds / game', value: fmtDec(yardsPerGame(s)) },
    { label: 'TD rate', value: fmtPct(touchdownRate(s)) },
    { label: 'INT rate', value: fmtPct(interceptionRate(s)) },
    {
      label: 'TD–INT',
      value: s.passingTouchdowns != null && s.interceptions != null ? `${fmtInt(s.passingTouchdowns)}–${fmtInt(s.interceptions)}` : DASH,
    },
  ]
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-efficiency`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-efficiency`}>2025 efficiency</h3>
      <ul className="pstat-metrics" role="list">
        {metrics.map((m) => (
          <li key={m.label} className="pstat-metrics__item">
            <span className="pstat-metrics__val">{m.value}</span>
            <span className="pstat-metrics__lbl">{m.label}</span>
          </li>
        ))}
      </ul>
      <p className="pstat-foot">Rates are derived from the verified 2025 completions, attempts, yards and touchdowns.</p>
    </section>
  )
}

/* ---- Production by pass-defense tier ----------------------------------- */

function TierSplits({ profile }: { profile: QbStatProfile }) {
  const rows = qbTierSplits(profile)
  if (!rows.length) return null
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-tiers`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-tiers`}>Production by pass-defense tier</h3>
      <div className="pstat-scroll">
        <table className="pstat-table">
          <thead>
            <tr>
              <th scope="col" className="pstat-table__lhs">Opponent tier</th>
              <th scope="col">GP</th>
              <th scope="col">Cmp-Att</th>
              <th scope="col">Cmp%</th>
              <th scope="col">Yds</th>
              <th scope="col">Y/A</th>
              <th scope="col">TD</th>
              <th scope="col">INT</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r: QbTierSplit) => (
              <tr key={r.tier}>
                <th scope="row" className="pstat-table__lhs">
                  <span className="pstat-splitname">
                    <TierTag tier={r.tier} />
                    <span className="pstat-splitname__sub">{QB_TIER_RANK_LABEL[r.tier]}</span>
                    {isThinQbSample(r.games) && <ThinTag />}
                  </span>
                </th>
                <td>{fmtInt(r.games)}</td>
                <td>{`${fmtInt(r.completions)}-${fmtInt(r.attempts)}`}</td>
                <td>{fmtPct(r.attempts ? r.completions / r.attempts : null)}</td>
                <td>{fmtInt(r.passingYards)}</td>
                <td>{fmtDec(r.attempts ? r.passingYards / r.attempts : null)}</td>
                <td>{fmtInt(r.passingTouchdowns)}</td>
                <td>{fmtInt(r.interceptions)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="pstat-foot">
        Aggregated from the game log by the opponent's 2025 final FBS pass-efficiency-defense rank. A team measure, not a coverage grade, and it reconciles to the season total.
      </p>
    </section>
  )
}

/* ---- Rate split table (situational + opponent context) ----------------- */

function RateTable({ rows, headLabel }: { rows: QbSplitRate[]; headLabel: string }) {
  return (
    <div className="pstat-scroll">
      <table className="pstat-table">
        <thead>
          <tr>
            <th scope="col" className="pstat-table__lhs">{headLabel}</th>
            <th scope="col">Cmp%</th>
            <th scope="col">Y/A</th>
            <th scope="col">TD</th>
            <th scope="col">INT</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className="pstat-table__lhs">
                <span className="pstat-splitname__label">{r.label}</span>
              </th>
              <td>{fmtPct(r.completionPct)}</td>
              <td>{fmtDec(r.yardsPerAttempt)}</td>
              <td>{fmtInt(r.passingTouchdowns)}</td>
              <td>{fmtInt(r.interceptions)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SituationalSplits({ profile }: { profile: QbStatProfile }) {
  const rows = profile.situationalSplits2025
  if (!rows || !rows.length) return null
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-situational`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-situational`}>Situational splits · 2025</h3>
      <RateTable rows={rows} headLabel="Situation" />
      <p className="pstat-foot">Rate splits over the situation's attempts. Completion percentage and yards per attempt only; a split does not carry its own game count.</p>
    </section>
  )
}

function OpponentContext({ profile }: { profile: QbStatProfile }) {
  const rows = profile.opponentContext2025
  const rz = profile.redZone2025
  const ex = profile.explosive2025
  if ((!rows || !rows.length) && !rz && !ex) return null
  return (
    <section className="pstat-block pstat-block--secondary" aria-labelledby={`${profile.slug}-oppctx`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-oppctx`}>
        Opponent quality, red zone and explosives <span className="pstat-block__tag">Secondary</span>
      </h3>
      {rows && rows.length > 0 && <RateTable rows={rows} headLabel="Opponent split" />}
      {(rz || ex) && (
        <ul className="pstat-metrics" role="list">
          {rz && <li className="pstat-metrics__item"><span className="pstat-metrics__val">{fmtPct(rz.completionPct)}</span><span className="pstat-metrics__lbl">Red-zone Cmp% ({fmtInt(rz.attempts)} att)</span></li>}
          {rz && <li className="pstat-metrics__item"><span className="pstat-metrics__val">{`${fmtInt(rz.passingTouchdowns)}–${fmtInt(rz.interceptions)}`}</span><span className="pstat-metrics__lbl">Red-zone TD–INT</span></li>}
          {ex && <li className="pstat-metrics__item"><span className="pstat-metrics__val">{fmtPct(ex.share15)}</span><span className="pstat-metrics__lbl">15+ yd share ({fmtInt(ex.comp15)})</span></li>}
          {ex && <li className="pstat-metrics__item"><span className="pstat-metrics__val">{fmtPct(ex.share25)}</span><span className="pstat-metrics__lbl">25+ yd share ({fmtInt(ex.comp25)})</span></li>}
        </ul>
      )}
      <p className="pstat-foot">AP-ranked and FBS winning-team splits are rate only. Explosive shares are the fraction of completions gaining 15+ and 25+ yards.</p>
    </section>
  )
}

/* ---- Game-by-game passing ---------------------------------------------- */

function locMark(g: QbGameStat): string {
  return g.location === 'away' ? '@ ' : g.location === 'neutral' ? 'vs ' : ''
}

function GameRow({ g, maxYards }: { g: QbGameStat; maxYards: number }) {
  const dnp = g.status === 'DNP' || g.passingYards == null
  const width = dnp ? 0 : Math.max(2, Math.round((g.passingYards! / maxYards) * 100))
  return (
    <li className={`pstat-log__row${dnp ? ' pstat-log__row--dnp' : ''}`}>
      <span className="pstat-log__opp">
        <span className="pstat-log__oppname">{locMark(g)}{g.opponent}</span>
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
            <strong>{fmtInt(g.passingYards)}</strong> yds
            <span className="pstat-log__line">
              {fmtInt(g.completions)}/{fmtInt(g.attempts)}
              {g.passingTouchdowns ? ` · ${fmtInt(g.passingTouchdowns)} TD` : ''}
              {g.interceptions ? ` · ${fmtInt(g.interceptions)} INT` : ''}
            </span>
          </>
        )}
      </span>
    </li>
  )
}

function GameLog({ profile }: { profile: QbStatProfile }) {
  const games = profile.gameLog2025
  if (!games || !games.length) return null
  const maxYards = Math.max(
    1,
    ...games.map((g) => (g.status === 'Played' && g.passingYards != null ? g.passingYards : 0)),
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
        Bars scale to passing yards. DNP games are unavailable, not zero. The tag is the opponent's 2025 pass defense; a tier with no number sits outside the published top-121 (FCS opponents are untagged by rank).
      </p>
    </section>
  )
}

/* ---- Sources & methodology -------------------------------------------- */

function SourcesDrawer({ profile }: { profile: QbStatProfile }) {
  const log = profile.gameLog2025
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-sources`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-sources`}>Sources and methodology</h3>
      <dl className="pstat-meta">
        <div className="pstat-meta__row">
          <dt>Status</dt>
          <dd>Provisional. Verified 2025 line, career history, game-by-game log and situational splits. Advanced charting (pressure, air yards, coverage) is not yet included.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>2025 line</dt>
          <dd>From the project's verified research package; kept authoritative where a public source disagrees.</dd>
        </div>
        {log && log.length > 0 && (
          <div className="pstat-meta__row">
            <dt>Game log</dt>
            <dd>Per-game passing transcribed from public college-statistics tables and reconciled to the verified 2025 totals ({fmtInt(playedGames(profile))} games played).</dd>
          </div>
        )}
        <div className="pstat-meta__row">
          <dt>Pass-defense tiers</dt>
          <dd>Strong 1–34 · Average 35–102 · Weak 103–136 · FCS separate. 2025 final FBS pass-efficiency-defense ranks. A team measure, not a coverage grade.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>Situational splits</dt>
          <dd>Public down-and-distance, game-state, red-zone and opponent-quality splits. Rate only; they do not separate air yards from yards after the catch.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>Derived fields</dt>
          <dd>Completion percentage, yards per attempt, yards per game and TD/INT rates are computed from stored totals.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>Eligibility</dt>
          <dd>{profile.eligibilityNote}</dd>
        </div>
        {profile.dataNotes.map((n, i) => (
          <div className="pstat-meta__row" key={i}>
            <dt>Note</dt>
            <dd>{n}</dd>
          </div>
        ))}
      </dl>
      {profile.statsSources && profile.statsSources.length > 0 && (
        <ul className="pstat-sources" role="list">
          {profile.statsSources.map((src, i) => (
            <li key={i} className="pstat-sources__item">
              <span className="pstat-sources__meta">{src.label}</span>
              <a className="pstat-sources__link" href={src.url} target="_blank" rel="noreferrer noopener">View source</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default function QbStatsSection({ player }: Props) {
  const profile = getQbStats(player.slug)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const panelId = useId()

  if (!profile) return null

  const collapseFromBottom = () => {
    setOpen(false)
    requestAnimationFrame(() => {
      const el = rootRef.current
      if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' })
    })
  }

  const career = hasCareerHistory(profile)
  const hasDepth = !!(profile.gameLog2025 && profile.gameLog2025.length)

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
            <span className="xp__toggle-label">{open ? 'Collapse statistics' : hasDepth ? 'Full statistical record' : career ? 'Full statistical record' : 'Full 2025 line'}</span>
            <span className="xp__toggle-mark" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          <div id={panelId} className="xp__panel" data-open={open || undefined}>
            <div className="xp__clip" inert={!open}>
              <div className="xp__inner pstat-panel">
                <p className="kicker xp__kicker">Statistical record{career ? ' · career through 2025' : ' · 2025'}</p>
                <CareerPassingTable profile={profile} />
                <CareerRushingTable profile={profile} />
                <Efficiency profile={profile} />
                <TierSplits profile={profile} />
                <SituationalSplits profile={profile} />
                <OpponentContext profile={profile} />
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
