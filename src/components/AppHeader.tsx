import { Link } from 'react-router-dom'

interface Props {
  /** Compact context shown on player pages after the name. */
  context?: string
  backTo?: { to: string; label: string }
}

export default function AppHeader({ context, backTo }: Props) {
  return (
    <header className="app-header on-ink">
      <div className="app-header__inner wrap">
        <Link to="/2027/wr" className="wordmark" aria-label="Dynasty Scouting, 2027 WR class">
          <span className="wordmark__text">Dynasty Scouting</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </Link>
        <div className="app-header__right">
          {backTo ? (
            <Link to={backTo.to} className="app-header__back">
              <span aria-hidden="true">←</span> {backTo.label}
            </Link>
          ) : (
            <span className="app-header__meta kicker">{context ?? '2027 class · WR'}</span>
          )}
        </div>
      </div>
    </header>
  )
}
