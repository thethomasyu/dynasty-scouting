import { Link } from 'react-router-dom'
import { featuredPlayers } from '../data/players'
import { headshotOf } from '../lib/images'

/**
 * Editorial entry points. Five files that show the range of the class.
 * Explicitly not a ranking; the copy says so and the layout avoids numbers.
 */
export default function FeaturedSection() {
  const [lead, ...rest] = featuredPlayers
  return (
    <section className="featured on-ink" aria-labelledby="featured-title">
      <div className="wrap">
        <div className="featured__head reveal">
          <h2 id="featured-title" className="featured__title">
            Start here
          </h2>
          <p className="featured__note">
            Five profiles that show the range of the class. Not a ranking.
          </p>
        </div>
        <div className="featured__grid">
          <Link to={`/2027/wr/${lead.slug}`} className="feature-card feature-card--lead reveal" style={{ '--school': lead.accent } as React.CSSProperties}>
            <div className="feature-card__media">
              <img src={headshotOf(lead.slug)} alt="" loading="lazy" />
            </div>
            <div className="feature-card__body">
              <p className="kicker feature-card__school">{lead.school}</p>
              <h3 className="feature-card__name">{lead.name}</h3>
              <p className="feature-card__hook">{lead.featuredHook}</p>
              <span className="feature-card__cta">Read the profile</span>
            </div>
          </Link>
          <div className="featured__rest">
            {rest.map((p) => (
              <Link key={p.slug} to={`/2027/wr/${p.slug}`} className="feature-card reveal" style={{ '--school': p.accent } as React.CSSProperties}>
                <div className="feature-card__media">
                  <img src={headshotOf(p.slug)} alt="" loading="lazy" />
                </div>
                <div className="feature-card__body">
                  <p className="kicker feature-card__school">{p.school}</p>
                  <h3 className="feature-card__name">{p.name}</h3>
                  <p className="feature-card__hook">{p.featuredHook}</p>
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
