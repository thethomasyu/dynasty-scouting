import { orderedFor, heldFor } from '../data/players'
import { hasPortrait } from './Portrait'
import { cutoutOf } from '../lib/images'
import type { Position } from '../data/types'
import { classTitle, positionLabel } from '../lib/routes'
import { featuredFor } from '../data/players'

/**
 * The class cover. For the WR class, three cutouts layer like a program cover.
 * The QB class ships without cutouts yet, so the stage collapses gracefully and
 * the copy carries the cover on its own. The trio implies no order.
 */
const WR_COVER = ['cam-coleman', 'jeremiah-smith', 'bryant-wesco-jr']

function coverFor(position: Position): string[] {
  const slugs = position === 'WR' ? WR_COVER : featuredFor(position).slice(0, 3).map((p) => p.slug)
  return slugs.filter((s) => hasPortrait(s, 'cutout'))
}

const NUMBER_WORDS: Record<number, string> = {
  12: 'Twelve', 23: 'Twenty-three', 24: 'Twenty-four',
}

export default function ClassHero({ position }: { position: Position }) {
  const ordered = orderedFor(position)
  const held = heldFor(position)
  const cover = coverFor(position)
  const [left, center, right] = cover
  const count = ordered.length
  const countWord = NUMBER_WORDS[count] ?? String(count)
  const label = positionLabel(position)

  const stand =
    position === 'QB'
      ? `${countWord} early quarterback profiles, written before the season. These are provisional: the facts are verified and the evaluation record is in, with the film work still ahead.`
      : `${countWord} early scouting profiles, written before the season. No grades and no rankings yet; it's too early for that.`

  return (
    <section className={`class-hero on-ink${cover.length === 0 ? ' class-hero--nostage' : ''}`} aria-label={`2027 ${label} class, early evaluation`}>
      <div className="class-hero__field" aria-hidden="true" />
      <div className="wrap class-hero__inner">
        <div className="class-hero__copy">
          <p className="kicker kicker--dot class-hero__kicker">Early evaluation · Summer 2026</p>
          <h1 className="class-hero__title" aria-label={`2027 ${position} class`}>
            <span aria-hidden="true" className="class-hero__year">2027</span>
            <span aria-hidden="true" className="class-hero__pos">{classTitle(position)}</span>
          </h1>
          <p className="class-hero__stand">{stand}</p>
          <dl className="class-hero__facts">
            <div>
              <dt className="kicker">Profiles</dt>
              <dd>{count}</dd>
            </div>
            <div>
              <dt className="kicker">{position === 'QB' ? 'Status' : 'Held for evidence'}</dt>
              <dd>{position === 'QB' ? 'Provisional' : held.length}</dd>
            </div>
            <div>
              <dt className="kicker">Rankings</dt>
              <dd>None yet</dd>
            </div>
          </dl>
        </div>
        {cover.length > 0 && (
          <div className="class-hero__stage" aria-hidden="true">
            <div className="class-hero__ring" />
            {right && <img className="class-hero__cut class-hero__cut--right" src={cutoutOf(right)} alt="" loading="eager" />}
            {left && <img className="class-hero__cut class-hero__cut--left" src={cutoutOf(left)} alt="" loading="eager" />}
            {center && <img className="class-hero__cut class-hero__cut--center" src={cutoutOf(center)} alt="" loading="eager" />}
          </div>
        )}
      </div>
    </section>
  )
}
