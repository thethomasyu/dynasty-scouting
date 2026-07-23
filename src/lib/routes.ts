import type { Position } from '../data/types'

/**
 * Route + label helpers so the position prefix ("wr" / "qb") lives in one place.
 * Slugs are unique across positions, but the URL still carries the group so the
 * two classes read as distinct sections.
 */

export function classPath(position: Position): string {
  return `/2027/${position.toLowerCase()}`
}

export function playerPath(position: Position, slug: string): string {
  return `/2027/${position.toLowerCase()}/${slug}`
}

/** Full position name for prose/aria ("wide receiver", "quarterback"). */
export function positionLabel(position: Position): string {
  return position === 'QB' ? 'quarterback' : 'wide receiver'
}

/** The class-cover title ("WR Class" / "QB Class"). */
export function classTitle(position: Position): string {
  return `${position} Class`
}
