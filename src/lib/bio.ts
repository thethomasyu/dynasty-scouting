import type { PlayerBio } from '../data/types'

/**
 * Bio display helpers for the hero strip.
 *
 * The one rule that matters here: age is computed from a verified date of
 * birth as of the evaluation date, so an old evaluation always shows the
 * age the player was when it was written. Nothing in this file estimates.
 */

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000

/**
 * Age in years at `onIso`, truncated (not rounded) to one decimal, so a
 * player is 20.9 until the day he turns 21. Returns null without a verified
 * date of birth.
 */
export function ageAt(dobIso: string | undefined, onIso: string): string | null {
  if (!dobIso) return null
  const dob = Date.parse(`${dobIso}T00:00:00Z`)
  const on = Date.parse(`${onIso}T00:00:00Z`)
  if (Number.isNaN(dob) || Number.isNaN(on) || on <= dob) return null
  const years = (on - dob) / MS_PER_YEAR
  return (Math.floor(years * 10) / 10).toFixed(1)
}

/** 6 + 5 -> 6'5" */
export function formatHeight(bio: PlayerBio): string {
  return `${bio.heightFt}'${bio.heightIn}"`
}

/** 2005-11-29 -> Nov 29, 2005 (for the age tooltip only). */
export function formatDob(dobIso: string): string {
  const d = new Date(`${dobIso}T00:00:00Z`)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
