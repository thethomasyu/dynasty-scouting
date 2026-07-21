import { Fragment } from 'react'
import type { InlineRun, ProfileBlock } from '../../lib/parseProfile'

/** Inline markdown runs -> spans. Canonical text passes through untouched. */
export function Runs({ runs }: { runs: InlineRun[] }) {
  return (
    <>
      {runs.map((r, i) =>
        r.bold ? (
          <strong key={i}>{r.text}</strong>
        ) : r.italic ? (
          <em key={i}>{r.text}</em>
        ) : (
          <Fragment key={i}>{r.text}</Fragment>
        ),
      )}
    </>
  )
}

export interface ProfileSection {
  heading: { text: string; id: string } | null
  paragraphs: Extract<ProfileBlock, { kind: 'paragraph' }>[]
}

/** Groups parsed blocks into heading-led sections. Index 0 is the opening. */
export function groupSections(blocks: ProfileBlock[]): ProfileSection[] {
  const sections: ProfileSection[] = []
  let current: ProfileSection = { heading: null, paragraphs: [] }
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

/** Full canonical prose for one or more sections, headings included. */
export function SectionProse({ sections, showHeadings = true }: { sections: ProfileSection[]; showHeadings?: boolean }) {
  return (
    <>
      {sections.map((s, si) => (
        <Fragment key={s.heading?.id ?? `s${si}`}>
          {showHeadings && s.heading && (
            <h3 className="xp__h" id={s.heading.id}>
              {s.heading.text}
            </h3>
          )}
          {s.paragraphs.map((p, i) => (
            <p key={i}>
              <Runs runs={p.runs} />
            </p>
          ))}
        </Fragment>
      ))}
    </>
  )
}
