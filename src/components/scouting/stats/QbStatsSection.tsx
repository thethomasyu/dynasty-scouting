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
  touchdownRate,
  totalsLine,
  yardsPerAttempt,
  yardsPerGame,
  type QbSeasonLine,
  type QbStatProfile,
} from '../../../data/stats/qbStats2027'

/**
 * The statistical layer for a provisional 2027 QB profile.
 *
 * LEVEL ONE, visible by default: a compact 2025 passing snapshot plus a rushing
 * line. Verified totals only. Numbers, not narrative.
 *
 * LEVEL TWO, on demand: the full record. A season-by-season career passing table
 * and a career rushing table, a derived 2025 efficiency grid, and a
 * sources/methodology drawer. Game-by-game logs and opponent-quality splits are
 * a deeper layer that is not verified for every quarterback yet and stays out of
 * the reader-facing view rather than being estimated.
 *
 * Hard rules: no generated prose; null is unavailable and never renders as zero;
 * every percentage and rate is derived here from stored totals.
 */

interface Props {
  player: Player
}

function schoolLabel(l: QbSeasonLine): string {
  return l.level === 'Division II' ? `${l.school} · D-II` : l.school
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

/* ---- Sources & methodology -------------------------------------------- */

function SourcesDrawer({ profile }: { profile: QbStatProfile }) {
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-sources`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-sources`}>Sources and methodology</h3>
      <dl className="pstat-meta">
        <div className="pstat-meta__row">
          <dt>Status</dt>
          <dd>Provisional. Verified 2025 line and season-by-season career history. Game-by-game logs and opponent-quality splits are pending and are not shown rather than estimated.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>2025 line</dt>
          <dd>From the project's verified research package; kept authoritative where a public source disagrees.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>Career history</dt>
          <dd>Prior-season lines transcribed from public college-statistics tables and cross-checked against the verified 2025 line.</dd>
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
            <span className="xp__toggle-label">{open ? 'Collapse statistics' : career ? 'Full statistical record' : 'Full 2025 line'}</span>
            <span className="xp__toggle-mark" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          <div id={panelId} className="xp__panel" data-open={open || undefined}>
            <div className="xp__clip" inert={!open}>
              <div className="xp__inner pstat-panel">
                <p className="kicker xp__kicker">Statistical record{career ? ' · career through 2025' : ' · 2025'}</p>
                <CareerPassingTable profile={profile} />
                <CareerRushingTable profile={profile} />
                <Efficiency profile={profile} />
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
