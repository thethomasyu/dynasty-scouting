import { useRef } from 'react'
import type { ProfileSection } from './Prose'
import { SectionProse } from './Prose'

/**
 * Inline long-form expansion. The visual layer stays where it is; Thomas's
 * complete analysis opens in place underneath it. No modal, no navigation,
 * no scroll reset. Collapsing from the bottom control keeps the module in
 * view instead of stranding the reader mid-page.
 */

interface Props {
  id: string
  open: boolean
  onToggle: (id: string) => void
  sections: ProfileSection[]
  /** Toggle label; default reads "Read full analysis". */
  label?: string
  showHeadings?: boolean
}

export default function LongformExpansion({ id, open, onToggle, sections, label = 'Read full analysis', showHeadings = true }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  if (!sections.length) return null

  const collapseFromBottom = () => {
    onToggle(id)
    requestAnimationFrame(() => {
      const el = rootRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      if (top < 0) el.scrollIntoView({ block: 'start' })
    })
  }

  return (
    <div className="xp" ref={rootRef}>
      <button
        type="button"
        className="xp__toggle"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => onToggle(id)}
      >
        <span className="xp__toggle-label">{open ? 'Collapse analysis' : label}</span>
        <span className="xp__toggle-mark" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      <div id={`${id}-panel`} className="xp__panel" data-open={open || undefined}>
        <div className="xp__clip" inert={!open}>
          <div className="xp__inner prose">
            <p className="kicker xp__kicker">Full analysis</p>
            <SectionProse sections={sections} showHeadings={showHeadings} />
            <button type="button" className="xp__close" onClick={collapseFromBottom} aria-controls={`${id}-panel`}>
              Collapse analysis <span aria-hidden="true">{'−'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
