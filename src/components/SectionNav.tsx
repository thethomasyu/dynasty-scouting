import { useEffect, useRef } from 'react'
import { useActiveSection } from '../lib/hooks'

interface Props {
  sections: Array<{ text: string; id: string }>
  ids: string[]
}

/**
 * Chapter navigation. Desktop: a sticky rail beside the article.
 * Mobile: a sticky, horizontally scrollable strip under the header.
 */
export default function SectionNav({ sections, ids }: Props) {
  const active = useActiveSection(ids)
  const listRef = useRef<HTMLUListElement | null>(null)

  // In the horizontal (chip) mode, keep the active chip in view.
  useEffect(() => {
    const list = listRef.current
    if (!list || list.scrollWidth <= list.clientWidth) return
    const link = list.querySelector<HTMLElement>('.section-nav__link.is-active')
    if (!link) return
    const target = link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2
    list.scrollTo({ left: target, behavior: 'smooth' })
  }, [active])

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ block: 'start' })
    history.replaceState(null, '', `#${location.hash.slice(1).split('#')[0]}`)
  }

  return (
    <nav className="section-nav" aria-label="Sections of this profile">
      <p className="kicker section-nav__label">In this file</p>
      <ul className="section-nav__list" role="list" ref={listRef}>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={go(s.id)}
              className={`section-nav__link${active === s.id ? ' is-active' : ''}`}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
