import { Fragment } from 'react'
import type { Player, SectionRole } from '../data/types'
import type { InlineRun, ParsedProfile, ProfileBlock } from '../lib/parseProfile'
import { normalizeHeading } from '../lib/parseProfile'
import TraitLab from './TraitLab'
import EvalHistory from './EvalHistory'
import { traitLab } from '../data/traitLab'

function Runs({ runs }: { runs: InlineRun[] }) {
  return (
    <>
      {runs.map((r, i) =>
        r.bold ? <strong key={i}>{r.text}</strong> : r.italic ? <em key={i}>{r.text}</em> : <Fragment key={i}>{r.text}</Fragment>,
      )}
    </>
  )
}

interface Section {
  heading: { text: string; id: string } | null
  paragraphs: Extract<ProfileBlock, { kind: 'paragraph' }>[]
}

function groupSections(blocks: ProfileBlock[]): Section[] {
  const sections: Section[] = []
  let current: Section = { heading: null, paragraphs: [] }
  for (const b of blocks) {
    if (b.kind === 'heading') {
      sections.push(current)
      current = { heading: { text: b.text, id: b.id }, paragraphs: [] }
    } else {
      current.paragraphs.push(b)
    }
  }
  sections.push(current)
  return sections
}

const ROLE_KICKER: Record<Exclude<SectionRole, 'core'>, string> = {
  translation: 'NFL translation',
  question: 'What comes next',
  change: 'What would change my mind',
  medical: 'Medical file',
}

export default function ProfileArticle({ player, profile }: { player: Player; profile: ParsedProfile }) {
  const sections = groupSections(profile.blocks)
  const roles = new Map<string, SectionRole>()
  for (const [heading, role] of Object.entries(player.sectionRoles ?? {})) {
    roles.set(normalizeHeading(heading), role)
  }
  const questionBefore = player.question ? normalizeHeading(player.question.beforeHeading) : null
  const forkHeading = player.fork ? normalizeHeading(player.fork.heading) : null
  const traits = traitLab[player.slug]

  // Trait Lab sits just before the translation module when the player has one.
  const translationIndex = sections.findIndex(
    (s) => s.heading && roles.get(normalizeHeading(s.heading.text)) === 'translation',
  )

  const opening = sections[0]

  return (
    <article className="profile" style={{ '--school': player.accent } as React.CSSProperties}>
      {profile.dateline && (
        <p className="profile__dateline">
          <span className="profile__dateline-mark" aria-hidden="true" />
          {profile.dateline}
        </p>
      )}

      <div className="profile__opening prose">
        {opening.paragraphs.map((p, i) => (
          <p key={i} className={i < 2 ? 'prose__lede' : undefined}>
            <Runs runs={p.runs} />
          </p>
        ))}
      </div>

      {sections.slice(1).map((section, idx) => {
        if (!section.heading) return null
        const norm = normalizeHeading(section.heading.text)
        const role = roles.get(norm) ?? 'core'
        const sectionIndex = idx + 1
        const pull =
          player.question && questionBefore === norm ? (
            <aside className="q-pull" aria-label="The central question">
              <div className="q-pull__inner">
                <p className="kicker q-pull__kicker">{player.question.kicker}</p>
                <p className="q-pull__text">{player.question.text}</p>
              </div>
            </aside>
          ) : null

        const lab =
          traits && translationIndex === sectionIndex ? <TraitLab player={player} readings={traits} /> : null

        const isFork = player.fork && forkHeading === norm

        let body: React.ReactNode
        if (isFork && player.fork) {
          const f = player.fork
          body = (
            <div className={`fork fork--${f.layout}`}>
              {f.intro?.map((t, i) => (
                <p key={`i${i}`} className="fork__intro">
                  {t}
                </p>
              ))}
              <div className="fork__paths">
                {f.paths.map((p, i) => (
                  <div key={i} className="fork__path">
                    <p className="fork__label kicker">{p.label}</p>
                    <p className="fork__body">{p.body}</p>
                  </div>
                ))}
              </div>
              {f.outro?.map((t, i) => (
                <p key={`o${i}`} className="fork__outro">
                  {t}
                </p>
              ))}
            </div>
          )
        } else {
          body = section.paragraphs.map((p, i) => (
            <p key={i}>
              <Runs runs={p.runs} />
            </p>
          ))
        }

        const headingEl = (
          <h2 id={section.heading.id} className="profile__h2">
            {section.heading.text}
          </h2>
        )

        return (
          <Fragment key={section.heading.id}>
            {pull}
            {lab}
            {role === 'core' && (
              <section className="profile-sec prose" aria-labelledby={section.heading.id}>
                {headingEl}
                {body}
              </section>
            )}
            {role === 'translation' && (
              <section className="profile-sec profile-sec--translation" aria-labelledby={section.heading.id}>
                <div className="module">
                  {norm !== normalizeHeading(ROLE_KICKER.translation) && (
                    <p className="kicker module__kicker">{ROLE_KICKER.translation}</p>
                  )}
                  {headingEl}
                  <div className="prose module__prose">{body}</div>
                </div>
              </section>
            )}
            {role === 'question' && (
              <section className="profile-sec profile-sec--next" aria-labelledby={section.heading.id}>
                <div className="next-band">
                  <div className="next-band__inner">
                    <p className="kicker next-band__kicker">{ROLE_KICKER.question}</p>
                    {headingEl}
                    <div className="prose next-band__prose">{body}</div>
                  </div>
                </div>
              </section>
            )}
            {role === 'change' && (
              <section className="profile-sec profile-sec--change" aria-labelledby={section.heading.id}>
                <div className="change-panel on-ink">
                  <p className="kicker change-panel__kicker">{ROLE_KICKER.change}</p>
                  {headingEl}
                  <div className="prose change-panel__prose">{body}</div>
                </div>
              </section>
            )}
            {role === 'medical' && (
              <section className="profile-sec profile-sec--medical" aria-labelledby={section.heading.id}>
                <div className="medical-panel">
                  <p className="kicker medical-panel__kicker">{ROLE_KICKER.medical}</p>
                  {headingEl}
                  <div className="prose medical-panel__prose">{body}</div>
                </div>
              </section>
            )}
          </Fragment>
        )
      })}

      <EvalHistory />
    </article>
  )
}
