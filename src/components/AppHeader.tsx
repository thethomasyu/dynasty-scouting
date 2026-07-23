import { Link } from 'react-router-dom'
import type { Position } from '../data/types'
import { classPath } from '../lib/routes'

interface Props {
  /** Which class the reader is in. Drives the active tab and the wordmark link. */
  position?: Position
  /** Compact context shown on player pages after the name. */
  context?: string
  backTo?: { to: string; label: string }
}

const POSITIONS: Position[] = ['WR', 'QB']

export default function AppHeader({ position = 'WR', context, backTo }: Props) {
  return (
    <header className="app-header on-ink">
      <div className="app-header__inner wrap">
        <Link to={classPath(position)} className="wordmark" aria-label="Dynasty Scouting, 2027 class">
          <span className="wordmark__text">Dynasty Scouting</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </Link>
        <nav className="posnav" aria-label="Position group">
          {POSITIONS.map((p) => (
            <Link
              key={p}
              to={classPath(p)}
              className={`posnav__link${p === position ? ' is-active' : ''}`}
              aria-current={p === position ? 'page' : undefined}
            >
              {p}
            </Link>
          ))}
        </nav>
        <div className="app-header__right">
          {backTo ? (
            <Link to={backTo.to} className="app-header__back">
              <span aria-hidden="true">←</span> {backTo.label}
            </Link>
          ) : (
            <span className="app-header__meta kicker">{context ?? `2027 class · ${position}`}</span>
          )}
        </div>
      </div>
    </header>
  )
}
