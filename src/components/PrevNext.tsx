import { Link } from 'react-router-dom'
import { neighborsOf } from '../data/players'
import { headshotOf } from '../lib/images'

/** Keep the reader moving. Neutral class order; no rank implied. */
export default function PrevNext({ slug }: { slug: string }) {
  const n = neighborsOf(slug)
  if (!n) return null
  return (
    <nav className="prevnext" aria-label="More prospects">
      <div className="wrap prevnext__inner">
        <Link to={`/2027/wr/${n.prev.slug}`} className="pn-card" style={{ '--school': n.prev.accent } as React.CSSProperties}>
          <span className="pn-card__dir kicker">← Previous file</span>
          <span className="pn-card__row">
            <img src={headshotOf(n.prev.slug)} alt="" loading="lazy" />
            <span>
              <span className="pn-card__name">{n.prev.name}</span>
              <span className="pn-card__school">{n.prev.school}</span>
            </span>
          </span>
        </Link>
        <Link to="/2027/wr" className="prevnext__all">
          <span className="kicker">All 23 files</span>
        </Link>
        <Link to={`/2027/wr/${n.next.slug}`} className="pn-card pn-card--next" style={{ '--school': n.next.accent } as React.CSSProperties}>
          <span className="pn-card__dir kicker">Next file →</span>
          <span className="pn-card__row">
            <span>
              <span className="pn-card__name">{n.next.name}</span>
              <span className="pn-card__school">{n.next.school}</span>
            </span>
            <img src={headshotOf(n.next.slug)} alt="" loading="lazy" />
          </span>
        </Link>
      </div>
    </nav>
  )
}
