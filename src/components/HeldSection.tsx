import { heldProspects } from '../data/players'
import { headshotOf } from '../lib/images'

/**
 * Prospects being monitored without a full profile. Unknown is allowed here;
 * these entries only say what the record actually holds.
 */
export default function HeldSection() {
  return (
    <section className="held" aria-labelledby="held-title">
      <div className="wrap">
        <div className="held__head reveal">
          <h2 id="held-title" className="held__title">
            More evidence needed
          </h2>
          <p className="held__note">
            Two names are on the watch list without full profiles. There isn't enough evidence
            to write them yet, and I'm not going to invent any.
          </p>
        </div>
        <ul className="held__list" role="list">
          {heldProspects.map((h) => (
            <li key={h.slug} className="held-card reveal" style={{ '--school': h.accent } as React.CSSProperties}>
              <div className="held-card__media" aria-hidden="true">
                <img src={headshotOf(h.slug)} alt="" loading="lazy" />
              </div>
              <div className="held-card__body">
                <p className="held-card__status kicker">On the watch list · no profile yet</p>
                <h3 className="held-card__name">{h.name}</h3>
                <p className="held-card__school">{h.school}</p>
                <p className="held-card__line">{h.line}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
