import type { EvalEvent, Player } from '../data/types'
import Portrait from './Portrait'

/**
 * Evaluation history. One real entry exists today; updates are event-driven
 * and get added here only when the picture actually changes. The hollow
 * future state stays understated on purpose: the profile is alive, not on
 * a schedule.
 */
const events: EvalEvent[] = [
  {
    stage: 'Early Evaluation',
    date: 'Summer 2026',
    note: 'First full evaluation, written in the summer before the season.',
  },
]

export default function EvalHistory({ player }: { player?: Player }) {
  return (
    <section className="eval-history" id="eval-history" aria-label="Evaluation history">
      <div className="eval-history__head">
        {player && <Portrait slug={player.slug} name={player.name} className="eval-history__shot" />}
        <div>
          <p className="kicker eval-history__kicker">Evaluation history</p>
          <p className="eval-history__intro">This profile is a living file. The line below grows when the evidence does.</p>
        </div>
      </div>
      <ol className="eval-history__list" role="list">
        {events.map((e) => (
          <li key={`${e.stage}-${e.date}`} className="eval-history__item">
            <span className="eval-history__dot" aria-hidden="true" />
            <div>
              <p className="eval-history__stage">
                {e.stage} <span className="eval-history__date">· {e.date}</span>
              </p>
              <p className="eval-history__note">{e.note}</p>
            </div>
          </li>
        ))}
        <li className="eval-history__item eval-history__item--future" aria-hidden="true">
          <span className="eval-history__dot eval-history__dot--hollow" />
          <p className="eval-history__future">Updates get added when something real changes, not on a schedule.</p>
        </li>
      </ol>
    </section>
  )
}
