import { Link } from 'react-router-dom'
import { featuredFor } from '../data/players'
import type { Position } from '../data/types'
import { playerPath } from '../lib/routes'
import Portrait from './Portrait'

/**
 * Editorial entry points. A handful of files that show the range of the class.
 * Explicitly not a ranking; the copy says so and the layout avoids numbers.
 */
export default function FeaturedSection({ position }: { position: Position }) {
  const featured = featuredFor(position)
  if (featured.length === 0) return null
  const [lead, ...rest] = featured
  return (
    <section className="featured on-ink" aria-labelledby="featured-title">
      <div className="wrap">
        <div className="featured__head reveal">
          <h2 id="featured-title" className="featured__title">
            Start here
          </h2>
          <p className="featured__note">
            {featured.length} profiles that show the range of the class. Not a ranking.
          </p>
        </div>
        <div className="featured__grid">
          <Link to={playerPath(position, lead.slug)} className="feature-card feature-card--lead reveal" style={{ '--school': lead.accent } as React.CSSProperties}>
            <div className="feature-card__media">
              <Portrait slug={lead.slug} name={lead.name} />
            </div>
            <div className="feature-card__body">
              <p className="kicker feature-card__school">{lead.school}</p>
              <h3 className="feature-card__name">{lead.name}</h3>
              <p className="feature-card__hook">{lead.featuredHook ?? lead.teaser}</p>
              <span className="feature-card__cta">Read the profile</span>
            </div>
          </Link>
          <div className="featured__rest">
            {rest.map((p) => (
              <Link key={p.slug} to={playerPath(position, p.slug)} className="feature-card reveal" style={{ '--school': p.accent } as React.CSSProperties}>
                <div className="feature-card__media">
                  <Portrait slug={p.slug} name={p.name} />
                </div>
                <div className="feature-card__body">
                  <p className="kicker feature-card__school">{p.school}</p>
                  <h3 className="feature-card__name">{p.name}</h3>
                  <p className="feature-card__hook">{p.featuredHook ?? p.teaser}</p>
                  <span className="feature-card__cta">Read the profile</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
