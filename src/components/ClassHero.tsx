import { cutoutOf } from '../lib/images'
import { orderedPlayers, heldProspects } from '../data/players'

/**
 * The class cover. Three cutouts layered like a program cover; the trio is
 * pulled from the editorial features, and implies no order.
 */
const COVER = ['cam-coleman', 'jeremiah-smith', 'bryant-wesco-jr']

export default function ClassHero() {
  const [left, center, right] = COVER
  return (
    <section className="class-hero on-ink" aria-label="2027 WR class, early evaluation">
      <div className="class-hero__field" aria-hidden="true" />
      <div className="wrap class-hero__inner">
        <div className="class-hero__copy">
          <p className="kicker kicker--dot class-hero__kicker">
            Early evaluation · Summer 2026
          </p>
          <h1 className="class-hero__title" aria-label="2027 WR class">
            <span aria-hidden="true" className="class-hero__year">
              2027
            </span>
            <span aria-hidden="true" className="class-hero__pos">
              WR Class
            </span>
          </h1>
          <p className="class-hero__stand">
            Twenty-three early scouting profiles. No grades and no rankings yet; those come when
            the evidence earns them.
          </p>
          <dl className="class-hero__facts">
            <div>
              <dt className="kicker">Profiles</dt>
              <dd>{orderedPlayers.length}</dd>
            </div>
            <div>
              <dt className="kicker">Held for evidence</dt>
              <dd>{heldProspects.length}</dd>
            </div>
            <div>
              <dt className="kicker">Rankings</dt>
              <dd>None yet</dd>
            </div>
          </dl>
        </div>
        <div className="class-hero__stage" aria-hidden="true">
          <div className="class-hero__ring" />
          <img className="class-hero__cut class-hero__cut--left" src={cutoutOf(left)} alt="" loading="eager" />
          <img className="class-hero__cut class-hero__cut--right" src={cutoutOf(right)} alt="" loading="eager" />
          <img className="class-hero__cut class-hero__cut--center" src={cutoutOf(center)} alt="" loading="eager" />
        </div>
      </div>
    </section>
  )
}
