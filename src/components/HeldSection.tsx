import { heldFor } from '../data/players'
import type { Position } from '../data/types'
import Portrait from './Portrait'

/**
 * Prospects being monitored without a full profile. Unknown is allowed here;
 * these entries only say what the record actually holds. Renders nothing when
 * a class has no held names (the QB class today).
 */
export default function HeldSection({ position }: { position: Position }) {
  const held = heldFor(position)
  if (held.length === 0) return null
  const countWord = held.length === 2 ? 'Two names are' : held.length === 1 ? 'One name is' : `${held.length} names are`
  return (
    <section className="held" aria-labelledby="held-title">
      <div className="wrap">
        <div className="held__head reveal">
          <h2 id="held-title" className="held__title">
            More evidence needed
          </h2>
          <p className="held__note">
            {countWord} on the watch list without full profiles. There isn't enough evidence
            to write them yet, and I'm not going to invent any.
          </p>
        </div>
        <ul className="held__list" role="list">
          {held.map((h) => (
            <li key={h.slug} className="held-card reveal" style={{ '--school': h.accent } as React.CSSProperties}>
              <div className="held-card__media" aria-hidden="true">
                <Portrait slug={h.slug} name={h.name} />
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
