import { cutoutOf, headshotOf } from '../lib/images'

/**
 * A player image with a graceful fallback. When the derived webp exists (every
 * WR today), it renders the same <img> the cards always used. When it does not
 * (the QB class ships without cutouts yet), it renders an initials monogram
 * tinted with the school accent, so a missing asset never becomes a broken
 * image. No placeholder art is fabricated.
 */

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')
}

interface Props {
  slug: string
  name: string
  kind?: 'headshot' | 'cutout'
  className?: string
  eager?: boolean
}

export default function Portrait({ slug, name, kind = 'headshot', className, eager }: Props) {
  const url = kind === 'cutout' ? cutoutOf(slug) : headshotOf(slug)
  if (url) {
    return (
      <img
        src={url}
        alt=""
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        {...(eager ? { fetchPriority: 'high' as const } : null)}
      />
    )
  }
  return (
    <span className={`portrait-mono${className ? ` ${className}` : ''}`} aria-hidden="true">
      <span className="portrait-mono__txt">{initials(name)}</span>
    </span>
  )
}

/** True when a real image asset exists for this slug/kind. */
export function hasPortrait(slug: string, kind: 'headshot' | 'cutout' = 'headshot'): boolean {
  return Boolean(kind === 'cutout' ? cutoutOf(slug) : headshotOf(slug))
}
