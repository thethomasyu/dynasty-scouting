import { useId, useRef, useState } from 'react'
import type { Player } from '../../../data/types'
import { DASH, fmtDec, fmtInt, fmtPct } from '../../../data/stats'
import {
  completionRate,
  getQbStats,
  yardsPerAttempt,
  type QbStatProfile,
} from '../../../data/stats/qbStats2027'

/**
 * The statistical layer for a provisional 2027 QB profile.
 *
 * LEVEL ONE, visible by default: a compact 2025 passing snapshot plus a rushing
 * line. Verified totals only. Numbers, not narrative.
 *
 * LEVEL TWO, on demand: the full verified 2025 line as passing and rushing
 * tables, plus a sources/methodology drawer. Only 2025 is verified for every
 * QB; career depth and situational splits are deliberately absent.
 *
 * Hard rules: no generated prose; null is unavailable and never renders as zero;
 * completion percentage and yards per attempt are derived here from stored
 * totals; measurements and eligibility caveats stay honest.
 */

interface Props {
  player: Player
}

function hasRushing(s: QbStatProfile['season2025']): boolean {
  return s.rushAttempts != null || s.rushYards != null || s.rushTouchdowns != null
}

function Snapshot({ profile }: { profile: QbStatProfile }) {
  const s = profile.season2025
  const cells: Array<{ label: string; value: string }> = [
    { label: 'GP', value: fmtInt(s.games) },
    { label: 'Cmp-Att', value: s.completions != null && s.attempts != null ? `${fmtInt(s.completions)}-${fmtInt(s.attempts)}` : DASH },
    { label: 'Cmp%', value: fmtPct(completionRate(s)) },
    { label: 'Pass yds', value: fmtInt(s.passingYards) },
    { label: 'Pass TD', value: fmtInt(s.passingTouchdowns) },
    { label: 'INT', value: fmtInt(s.interceptions) },
  ]
  const context =
    s.starts < s.games
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

function PassingTable({ profile }: { profile: QbStatProfile }) {
  const s = profile.season2025
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-passing`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-passing`}>2025 passing</h3>
      <div className="pstat-scroll">
        <table className="pstat-table">
          <thead>
            <tr>
              <th scope="col" className="pstat-table__lhs">School</th>
              <th scope="col">GP</th>
              <th scope="col">GS</th>
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
            <tr>
              <th scope="row" className="pstat-table__lhs">{s.school}</th>
              <td>{fmtInt(s.games)}</td>
              <td>{fmtInt(s.starts)}</td>
              <td>{fmtInt(s.completions)}</td>
              <td>{fmtInt(s.attempts)}</td>
              <td>{fmtPct(completionRate(s))}</td>
              <td>{fmtInt(s.passingYards)}</td>
              <td>{fmtDec(yardsPerAttempt(s))}</td>
              <td>{fmtInt(s.passingTouchdowns)}</td>
              <td>{fmtInt(s.interceptions)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

function RushingTable({ profile }: { profile: QbStatProfile }) {
  const s = profile.season2025
  if (!hasRushing(s)) return null
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-rushing`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-rushing`}>2025 rushing</h3>
      <div className="pstat-scroll">
        <table className="pstat-table">
          <thead>
            <tr>
              <th scope="col" className="pstat-table__lhs">School</th>
              <th scope="col">Att</th>
              <th scope="col">Yds</th>
              <th scope="col">TD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="pstat-table__lhs">{s.school}</th>
              <td>{fmtInt(s.rushAttempts)}</td>
              <td>{fmtInt(s.rushYards)}</td>
              <td>{fmtInt(s.rushTouchdowns)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="pstat-foot">NCAA rushing includes sack losses, so net yardage understates designed-run value.</p>
    </section>
  )
}

function SourcesDrawer({ profile }: { profile: QbStatProfile }) {
  return (
    <section className="pstat-block" aria-labelledby={`${profile.slug}-sources`}>
      <h3 className="pstat-block__h" id={`${profile.slug}-sources`}>Sources and methodology</h3>
      <dl className="pstat-meta">
        <div className="pstat-meta__row">
          <dt>Status</dt>
          <dd>Provisional. Verified 2025 passing and rushing line only; deeper career and situational data still to come.</dd>
        </div>
        <div className="pstat-meta__row">
          <dt>Derived fields</dt>
          <dd>Completion percentage and yards per attempt are computed from the stored completions, attempts and yards.</dd>
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
            <span className="xp__toggle-label">{open ? 'Collapse statistics' : 'Full 2025 line'}</span>
            <span className="xp__toggle-mark" aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
          <div id={panelId} className="xp__panel" data-open={open || undefined}>
            <div className="xp__clip" inert={!open}>
              <div className="xp__inner pstat-panel">
                <p className="kicker xp__kicker">Verified statistical record · 2025</p>
                <PassingTable profile={profile} />
                <RushingTable profile={profile} />
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
