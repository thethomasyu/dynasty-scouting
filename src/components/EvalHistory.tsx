import type { EvalEvent } from '../data/types'

/**
 * Evaluation history. One real entry exists today; updates are event-driven
 * and get added here only when the picture actually changes.
 */
const events: EvalEvent[] = [
  {
    stage: 'Early Evaluation',
    date: 'Summer 2026',
    note: 'Baseline profile from the summer research pass.',
  },
]

export default function EvalHistory() {
  return (
    <section className="eval-history" aria-label="Evaluation history">
      <p className="kicker eval-history__kicker">Evaluation history</p>
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
          <p className="eval-history__future">Updates land here when the picture actually changes.</p>
        </li>
      </ol>
    </section>
  )
}
