import type { Player } from '../data/types'
import type { TraitReading, TraitStatus } from '../data/traitLab'

const STATUS_CLASS: Record<TraitStatus, string> = {
  'Major Strength': 'is-major-strength',
  Strength: 'is-strength',
  Adequate: 'is-adequate',
  Mixed: 'is-mixed',
  Concern: 'is-concern',
  'Major Concern': 'is-major-concern',
  Unknown: 'is-unknown',
  'Limited evidence': 'is-unknown',
}

/**
 * Trait Lab, visual experiment. Qualitative tiers only, no numbers, and
 * Unknown stays visible. Renders only for players with entries in
 * src/data/traitLab.ts.
 */
export default function TraitLab({ player, readings }: { player: Player; readings: TraitReading[] }) {
  return (
    <section className="trait-lab" aria-label={`Trait Lab for ${player.name}`}>
      <div className="trait-lab__head">
        <p className="kicker trait-lab__kicker">Trait Lab · experiment</p>
        <p className="trait-lab__note">
          A compact read of the seven-category taxonomy, in the project’s qualitative language.
          No numbers. Unknown stays unknown. Two files carry this module while the format proves
          itself.
        </p>
      </div>
      <ul className="trait-lab__grid" role="list">
        {readings.map((t) => (
          <li key={t.category} className={`trait ${STATUS_CLASS[t.status]}`}>
            <div className="trait__top">
              <h3 className="trait__cat">{t.category}</h3>
              <span className="trait__status">{t.status}</span>
            </div>
            <p className="trait__note">{t.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
