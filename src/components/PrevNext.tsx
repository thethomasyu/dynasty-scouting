import { Link } from 'react-router-dom'
import { neighborsOf, orderedFor } from '../data/players'
import { classPath, playerPath } from '../lib/routes'
import Portrait from './Portrait'

/** Keep the reader moving. Neutral class order; no rank implied. */
export default function PrevNext({ slug }: { slug: string }) {
  const n = neighborsOf(slug)
  if (!n) return null
  const position = n.prev.position
  const count = orderedFor(position).length
  return (
    <nav className="prevnext" aria-label="More prospects">
      <div className="wrap prevnext__inner">
        <Link to={playerPath(position, n.prev.slug)} className="pn-card" style={{ '--school': n.prev.accent } as React.CSSProperties}>
          <span className="pn-card__dir kicker">← Previous</span>
          <span className="pn-card__row">
            <Portrait slug={n.prev.slug} name={n.prev.name} />
            <span>
              <span className="pn-card__name">{n.prev.name}</span>
              <span className="pn-card__school">{n.prev.school}</span>
            </span>
          </span>
        </Link>
        <Link to={classPath(position)} className="prevnext__all">
          <span className="kicker">All {count} profiles</span>
        </Link>
        <Link to={playerPath(position, n.next.slug)} className="pn-card pn-card--next" style={{ '--school': n.next.accent } as React.CSSProperties}>
          <span className="pn-card__dir kicker">Next →</span>
          <span className="pn-card__row">
            <span>
              <span className="pn-card__name">{n.next.name}</span>
              <span className="pn-card__school">{n.next.school}</span>
            </span>
            <Portrait slug={n.next.slug} name={n.next.name} />
          </span>
        </Link>
      </div>
    </nav>
  )
}
