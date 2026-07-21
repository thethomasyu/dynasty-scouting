import type { Player, PlayerBio } from '../data/types'
import { EVALUATION_DATE } from '../data/players'
import { ageAt, formatDob, formatHeight } from '../lib/bio'
import { cutoutOf } from '../lib/images'

/**
 * Line icons for the bio strip. Inline on purpose: four small monochrome
 * glyphs are not worth an icon dependency. One stroke style (1.7, round),
 * currentColor only, visually subordinate to the values they label.
 */
function Icon({ d, extra }: { d: string; extra?: React.ReactNode }) {
  return (
    <svg
      className="bio-strip__ic"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
      {extra}
    </svg>
  )
}

const icHeight = 'M9 3h6v18H9zM15 7h-3M15 11h-3M15 15h-3'
const icWeight =
  'M9.5 6.5a2.5 2.5 0 1 1 5 0M6.8 8h10.4a2 2 0 0 1 1.95 1.55l2 8.9A2 2 0 0 1 19.2 21H4.8a2 2 0 0 1-1.95-2.55l2-8.9A2 2 0 0 1 6.8 8Z'
const icClass = 'M22 9.2 12 4.5 2 9.2l10 4.7 10-4.7ZM6 11.8V16c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4.2M22 9.2V14'
const icAge = 'M8 3v3.5M16 3v3.5M3.5 10h17M5.5 4.8h13a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2Z'

function BioStrip({ bio }: { bio: PlayerBio }) {
  const listed = bio.measurementStatus === 'school-listed'
  const age = ageAt(bio.dateOfBirth, EVALUATION_DATE)
  const ageTitle = bio.dateOfBirth
    ? `Age at evaluation, Summer 2026. Born ${formatDob(bio.dateOfBirth)}.`
    : 'No verified birthdate. Unknown stays unknown.'
  return (
    <div className="p-hero__bio">
      <dl className="bio-strip">
        <div className="bio-strip__item">
          <dt className="bio-strip__label">
            <Icon d={icHeight} />
            Height
          </dt>
          <dd className="bio-strip__value">{formatHeight(bio)}</dd>
        </div>
        <div className="bio-strip__item">
          <dt className="bio-strip__label">
            <Icon d={icWeight} />
            Weight
          </dt>
          <dd className="bio-strip__value">
            {bio.weightLbs}
            <span className="bio-strip__unit"> lbs</span>
            {listed && <span className="bio-strip__mark">*</span>}
          </dd>
        </div>
        <div className="bio-strip__item">
          <dt className="bio-strip__label">
            <Icon d={icClass} />
            Class
          </dt>
          <dd className="bio-strip__value bio-strip__value--word">{bio.rosterClass}</dd>
        </div>
        <div className="bio-strip__item bio-strip__item--help" title={ageTitle}>
          <dt className="bio-strip__label">
            <Icon d={icAge} />
            Age
          </dt>
          <dd className={`bio-strip__value${age === null ? ' bio-strip__value--unknown' : ''}`}>
            {age ?? '—'}
            <span className="visually-hidden">
              {age ? ` (${ageTitle})` : ' (no verified birthdate)'}
            </span>
          </dd>
        </div>
      </dl>
      {listed && (
        <p className="bio-strip__note">*School-listed measurements unless otherwise noted.</p>
      )}
    </div>
  )
}

export default function PlayerHero({ player }: { player: Player }) {
  return (
    <section
      className="p-hero on-ink"
      style={{ '--school': player.accent } as React.CSSProperties}
      aria-label={`${player.name}, ${player.school}, wide receiver`}
    >
      <div className="p-hero__bg" aria-hidden="true">
        <div className="p-hero__field" />
        <div className="p-hero__halo" />
      </div>
      <div className="wrap p-hero__inner">
        <div className="p-hero__copy">
          <p className="kicker kicker--dot p-hero__kicker">
            2027 WR class · {player.school}
            {player.via ? ` · ${player.via}` : ''}
          </p>
          <h1 className="p-hero__name">{player.name}</h1>
          <div className="p-hero__meta">
            <span className="p-hero__badge">
              <span className="p-hero__badge-dot" aria-hidden="true" />
              {player.stage} · {player.stageDate}
            </span>
          </div>
          {player.bio && <BioStrip bio={player.bio} />}
          <p className="p-hero__thesis">{player.thesis}</p>
        </div>
        <div className="p-hero__stage" aria-hidden="true">
          <img
            className="p-hero__cut"
            src={cutoutOf(player.slug)}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
