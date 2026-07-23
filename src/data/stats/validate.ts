/**
 * Integration validation for the WR statistics.
 *
 * The core check: each player's four pass-defense-tier splits must reconcile to
 * his 2025 season totals (games, receptions, yards, touchdowns). DNP games are
 * unavailable and excluded from the tier splits, so the tier sum equals the
 * played-game season total, not the raw game-log length.
 *
 * These functions are pure. The runnable QA lives in scripts/qa-stats.mjs; the
 * app also calls reconcilePassDefense in dev to surface any drift at runtime.
 */

import { wrStats2027 } from './wrStats2027'
import type { PlayerStatProfile } from './wrStats2027'

export interface ReconResult {
  slug: string
  games: boolean
  receptions: boolean
  receivingYards: boolean
  receivingTouchdowns: boolean
  ok: boolean
}

export function reconcilePassDefense(profile: PlayerStatProfile): ReconResult {
  const s = profile.summary2025
  const acc = profile.opponentSplits2025.passDefenseTier.reduce(
    (a, t) => ({
      games: a.games + t.games,
      receptions: a.receptions + t.receptions,
      receivingYards: a.receivingYards + t.receivingYards,
      receivingTouchdowns: a.receivingTouchdowns + t.receivingTouchdowns,
    }),
    { games: 0, receptions: 0, receivingYards: 0, receivingTouchdowns: 0 },
  )
  const games = acc.games === s.games
  const receptions = acc.receptions === s.receptions
  const receivingYards = acc.receivingYards === s.receivingYards
  const receivingTouchdowns = acc.receivingTouchdowns === s.receivingTouchdowns
  return {
    slug: profile.slug,
    games,
    receptions,
    receivingYards,
    receivingTouchdowns,
    ok: games && receptions && receivingYards && receivingTouchdowns,
  }
}

export function reconcileAll(): ReconResult[] {
  return wrStats2027.playerOrder.map((slug) => reconcilePassDefense(wrStats2027.players[slug]))
}
