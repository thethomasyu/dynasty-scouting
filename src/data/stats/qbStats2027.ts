/**
 * Typed access layer for the 2027 QB statistical foundation.
 *
 * Source of truth: the QB Verified Research package (01_VERIFICATION_MASTER and
 * the per-player research files). Only verified 2025 production is stored here.
 * Fields the verified package left "Pending" stay null; they are NOT backfilled
 * from the lower-tier Advanced Context package, and nothing is estimated.
 *
 * Missing-value rule (shared with the WR layer):
 *   null = unavailable / not verified -> renders as an em dash, never 0.
 *   0    = a recorded zero -> renders as 0.
 * Completion percentage and yards per attempt are derived at the edge from the
 * stored completions/attempts/yards; nothing pre-computed is stored.
 */

export interface QbSeason2025 {
  season: 2025
  /** The school where the 2025 line was produced (may differ from current school). */
  school: string
  games: number
  starts: number
  completions: number | null
  attempts: number | null
  passingYards: number | null
  passingTouchdowns: number | null
  interceptions: number | null
  rushAttempts: number | null
  rushYards: number | null
  rushTouchdowns: number | null
}

export interface QbStatProfile {
  slug: string
  displayName: string
  currentSchool: string
  season2025: QbSeason2025
  /** Verified eligibility caveat, reader-safe. */
  eligibilityNote: string
  /** Honest provenance / caveat lines shown in the methodology drawer. */
  dataNotes: string[]
}

export interface QbStatsDataset {
  schemaVersion: string
  dataset: string
  asOf: string
  /** Only the 2025 line is verified for every QB; career depth is pending. */
  scope: string
  playerOrder: string[]
  players: Record<string, QbStatProfile>
}

export const qbStats2027: QbStatsDataset = {
  schemaVersion: '1.0.0-provisional',
  dataset: '2027 QB Statistical Foundation',
  asOf: '2026-07-23',
  scope: 'Verified 2025 passing and rushing line only. Career depth and situational splits pending.',
  playerOrder: [
    'cj-carr',
    'trinidad-chambliss',
    'sam-leavitt',
    'drake-lindsey',
    'jayden-maiava',
    'arch-manning',
    'john-mateer',
    'darian-mensah',
    'drew-mestemaker',
    'dante-moore',
    'julian-sayin',
    'lanorris-sellers',
  ],
  players: {
    'arch-manning': {
      slug: 'arch-manning',
      displayName: 'Arch Manning',
      currentSchool: 'Texas',
      season2025: { season: 2025, school: 'Texas', games: 13, starts: 13, completions: 248, attempts: 404, passingYards: 3163, passingTouchdowns: 26, interceptions: 7, rushAttempts: 92, rushYards: 399, rushTouchdowns: 10 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['First full season as the Texas starter.'],
    },
    'dante-moore': {
      slug: 'dante-moore',
      displayName: 'Dante Moore',
      currentSchool: 'Oregon',
      season2025: { season: 2025, school: 'Oregon', games: 15, starts: 15, completions: 296, attempts: 412, passingYards: 3565, passingTouchdowns: 30, interceptions: 10, rushAttempts: null, rushYards: null, rushTouchdowns: null },
      eligibilityNote: 'Draft-eligible on timeline; confirmed a 2026 return, so a 2027 declaration is not assumed.',
      dataNotes: ['Official 2025 rushing line pending reconciliation; left unverified rather than estimated.'],
    },
    'lanorris-sellers': {
      slug: 'lanorris-sellers',
      displayName: 'LaNorris Sellers',
      currentSchool: 'South Carolina',
      season2025: { season: 2025, school: 'South Carolina', games: 12, starts: 12, completions: 178, attempts: 293, passingYards: 2437, passingTouchdowns: 13, interceptions: 8, rushAttempts: 149, rushYards: 270, rushTouchdowns: 5 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['NCAA rushing yardage includes sack losses and should not be read as designed-run production.'],
    },
    'cj-carr': {
      slug: 'cj-carr',
      displayName: 'CJ Carr',
      currentSchool: 'Notre Dame',
      season2025: { season: 2025, school: 'Notre Dame', games: 12, starts: 12, completions: 195, attempts: 293, passingYards: 2741, passingTouchdowns: 24, interceptions: 6, rushAttempts: null, rushYards: 33, rushTouchdowns: 3 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed.',
      dataNotes: ['Exact 2025 rush attempts pending; rush yards and touchdowns are verified.'],
    },
    'drew-mestemaker': {
      slug: 'drew-mestemaker',
      displayName: 'Drew Mestemaker',
      currentSchool: 'Oklahoma State',
      season2025: { season: 2025, school: 'North Texas', games: 14, starts: 14, completions: 319, attempts: 463, passingYards: 4379, passingTouchdowns: 34, interceptions: 9, rushAttempts: 57, rushYards: 89, rushTouchdowns: 5 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed, and 2028 remains open.',
      dataNotes: ['2025 production came at North Texas; he transferred to Oklahoma State in spring 2026.'],
    },
    'darian-mensah': {
      slug: 'darian-mensah',
      displayName: 'Darian Mensah',
      currentSchool: 'Miami',
      season2025: { season: 2025, school: 'Duke', games: 14, starts: 14, completions: 334, attempts: 500, passingYards: 3973, passingTouchdowns: 34, interceptions: 6, rushAttempts: 58, rushYards: -22, rushTouchdowns: 1 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['2025 production came at Duke; he transferred to Miami for 2026.', 'Net rush yardage is negative because sacks are included in NCAA rushing.'],
    },
    'trinidad-chambliss': {
      slug: 'trinidad-chambliss',
      displayName: 'Trinidad Chambliss',
      currentSchool: 'Ole Miss',
      season2025: { season: 2025, school: 'Ole Miss', games: 15, starts: 13, completions: 294, attempts: 445, passingYards: 3937, passingTouchdowns: 22, interceptions: 3, rushAttempts: 133, rushYards: 527, rushTouchdowns: 8 },
      eligibilityNote: 'Eligible by timeline; a 2027 declaration/entry decision is not assumed.',
      dataNotes: ['15 appearances, 13 of them starts.', 'Ferris State (Division II) transfer.'],
    },
    'jayden-maiava': {
      slug: 'jayden-maiava',
      displayName: 'Jayden Maiava',
      currentSchool: 'USC',
      season2025: { season: 2025, school: 'USC', games: 13, starts: 13, completions: 265, attempts: 403, passingYards: 3711, passingTouchdowns: 24, interceptions: 10, rushAttempts: 54, rushYards: 157, rushTouchdowns: 6 },
      eligibilityNote: 'Eligible by timeline; declaration not assumed.',
      dataNotes: ['Interception total is modest, but evaluators flag a higher turnover-worthy-play volume that this line does not capture.'],
    },
    'julian-sayin': {
      slug: 'julian-sayin',
      displayName: 'Julian Sayin',
      currentSchool: 'Ohio State',
      season2025: { season: 2025, school: 'Ohio State', games: 14, starts: 14, completions: 301, attempts: 391, passingYards: 3610, passingTouchdowns: 32, interceptions: 8, rushAttempts: null, rushYards: null, rushTouchdowns: null },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed.',
      dataNotes: ['Official 2025 rushing line pending reconciliation; left unverified rather than estimated.'],
    },
    'sam-leavitt': {
      slug: 'sam-leavitt',
      displayName: 'Sam Leavitt',
      currentSchool: 'LSU',
      season2025: { season: 2025, school: 'Arizona State', games: 7, starts: 7, completions: 145, attempts: 239, passingYards: 1628, passingTouchdowns: 10, interceptions: 3, rushAttempts: 73, rushYards: 306, rushTouchdowns: 5 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['2025 production came at Arizona State; a foot injury limited the season to seven games. Now at LSU.'],
    },
    'john-mateer': {
      slug: 'john-mateer',
      displayName: 'John Mateer',
      currentSchool: 'Oklahoma',
      season2025: { season: 2025, school: 'Oklahoma', games: 12, starts: 12, completions: 247, attempts: 397, passingYards: 2885, passingTouchdowns: 14, interceptions: 11, rushAttempts: 149, rushYards: 431, rushTouchdowns: 8 },
      eligibilityNote: 'Eligible by timeline; declaration not assumed.',
      dataNotes: ['Right-hand surgery after the September 2025 Auburn game; the line spans pre-injury and post-return work.'],
    },
    'drake-lindsey': {
      slug: 'drake-lindsey',
      displayName: 'Drake Lindsey',
      currentSchool: 'Minnesota',
      season2025: { season: 2025, school: 'Minnesota', games: 13, starts: 13, completions: 246, attempts: 389, passingYards: 2382, passingTouchdowns: 18, interceptions: 6, rushAttempts: null, rushYards: null, rushTouchdowns: 4 },
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed, and 2028 remains open.',
      dataNotes: ["Uses 246-of-389 (CFBStats and season databases); Minnesota's bio prints an incompatible 249-of-386. Rush attempts and yards pending."],
    },
  },
}

/** Resolve the QB statistics record for an app slug. Exactly one record or none. */
export function getQbStats(slug: string): QbStatProfile | undefined {
  return Object.prototype.hasOwnProperty.call(qbStats2027.players, slug) ? qbStats2027.players[slug] : undefined
}

export function hasQbStats(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(qbStats2027.players, slug)
}

/** Decimal fraction of completions / attempts, or null when either is missing. */
export function completionRate(s: QbSeason2025): number | null {
  return s.completions != null && s.attempts ? s.completions / s.attempts : null
}

/** Yards per attempt from stored yards / attempts, or null. */
export function yardsPerAttempt(s: QbSeason2025): number | null {
  return s.passingYards != null && s.attempts ? s.passingYards / s.attempts : null
}
