/**
 * Typed access layer for the 2027 WR statistical foundation.
 *
 * The workbook (2027_WR_Statistical_Foundation_Complete.xlsx) is the auditable
 * source of truth; wrStats2027.ts is its verified export. Nothing in the UI
 * recalculates the locked research. This module only resolves records by the
 * app's canonical player slug and formats stored values for display.
 *
 * Missing-value rule (held throughout the UI):
 *   null = unavailable or not applicable -> renders as an em dash, never 0.
 *   0    = a recorded zero -> renders as 0.
 * Percentage fields are stored as decimal fractions and formatted at the edge.
 */

import { wrStats2027 } from './wrStats2027'
import type {
  DefenseTier,
  GameStat,
  PlayerStatProfile,
  SeasonStats,
  SplitStats,
  WrStatsDataset,
} from './wrStats2027'

export { wrStats2027 }
export type { DefenseTier, GameStat, PlayerStatProfile, SeasonStats, SplitStats, WrStatsDataset }

/** Resolve the statistics record for an app slug. Exactly one record or none. */
export function getPlayerStats(slug: string): PlayerStatProfile | undefined {
  return Object.prototype.hasOwnProperty.call(wrStats2027.players, slug)
    ? wrStats2027.players[slug]
    : undefined
}

export function hasStats(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(wrStats2027.players, slug)
}

/* ---- Pass-defense tiers ------------------------------------------------ */

/** Strongest FBS pass defenses first. FCS sits outside the FBS scale on purpose. */
export const TIER_ORDER: DefenseTier[] = ['Strong', 'Average', 'Weak', 'FCS']

/** The rank band each tier represents. A team measure, not a cornerback grade. */
export const TIER_RANK_LABEL: Record<DefenseTier, string> = {
  Strong: 'FBS pass D 1–34',
  Average: 'FBS pass D 35–102',
  Weak: 'FBS pass D 103–136',
  FCS: 'FCS opponent',
}

/** Tier splits in canonical order, present tiers only. */
export function orderedTierSplits(profile: PlayerStatProfile): SplitStats[] {
  const byTier = new Map<DefenseTier, SplitStats>()
  for (const s of profile.opponentSplits2025.passDefenseTier) if (s.tier) byTier.set(s.tier, s)
  return TIER_ORDER.map((t) => byTier.get(t)).filter((s): s is SplitStats => !!s)
}

/* ---- Sample-size rule -------------------------------------------------- */

/** A split of fewer than three games is thin. Fixed rule; carries no interpretation. */
export const THIN_SAMPLE_GAMES = 3
export function isThinSample(games: number): boolean {
  return games < THIN_SAMPLE_GAMES
}

/* ---- Career ordering --------------------------------------------------- */

/** Career seasons oldest-to-newest. The source is already chronological; this guarantees it. */
export function chronologicalSeasons(profile: PlayerStatProfile): SeasonStats[] {
  return [...profile.careerSeasons].sort((a, b) => a.season - b.season)
}

/** The most recent recorded season (used for the snapshot provenance line). */
export function latestSeason(profile: PlayerStatProfile): SeasonStats | undefined {
  const s = chronologicalSeasons(profile)
  return s.length ? s[s.length - 1] : undefined
}

/* ---- Formatting. null is unavailable, never zero. ---------------------- */

export const DASH = '—'

export function fmtInt(v: number | null | undefined): string {
  return v === null || v === undefined ? DASH : Math.round(v).toLocaleString('en-US')
}

export function fmtDec(v: number | null | undefined, digits = 1): string {
  return v === null || v === undefined ? DASH : v.toFixed(digits)
}

/** Decimal fraction -> one-place percent. 0.331025 -> "33.1%". Stored value never pre-multiplied. */
export function fmtPct(v: number | null | undefined, digits = 1): string {
  return v === null || v === undefined ? DASH : `${(v * 100).toFixed(digits)}%`
}

/* ---- Reserved copy slot ------------------------------------------------ */

/**
 * Reserved home for manually approved statistical copy, keyed by slug. It is
 * intentionally empty: no line is generated. When Thomas approves a sentence
 * by hand, it goes here and the snapshot renders it; until then there is none.
 */
export const approvedStatCopy: Record<string, string | undefined> = {}
export function getApprovedStatCopy(slug: string): string | undefined {
  return approvedStatCopy[slug]
}
