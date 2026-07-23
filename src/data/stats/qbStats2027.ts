/**
 * Typed access layer for the 2027 QB statistical foundation.
 *
 * Source of truth for the 2025 line: the QB Verified Research package
 * (01_VERIFICATION_MASTER and the per-player research files). Prior-season
 * lines (career history) are transcribed from public college-statistics tables
 * and cross-checked against that verified 2025 line, which stays authoritative
 * where a public source disagrees (e.g. Drake Lindsey's 2025 completion line).
 *
 * Missing-value rule (shared with the WR layer):
 *   null = unavailable / not verified -> renders as an em dash, never 0.
 *   0    = a recorded zero -> renders as 0.
 * Completion percentage, yards per attempt, yards per game and TD/INT rates are
 * derived at the edge from stored totals; nothing pre-computed is stored.
 *
 * NCAA rushing includes sack yardage, so net rushing understates designed-run
 * value and can be negative. Game-by-game logs and opponent-quality splits are
 * a deeper layer that is not verified for every quarterback yet and is
 * deliberately absent rather than estimated.
 */

export interface QbSeasonLine {
  season: number
  /** The school where the line was produced (may differ from current school). */
  school: string
  /** Competition level, when it is not FBS. */
  level?: 'FBS' | 'Division II'
  games: number
  starts: number | null
  completions: number | null
  attempts: number | null
  passingYards: number | null
  passingTouchdowns: number | null
  interceptions: number | null
  rushAttempts: number | null
  rushYards: number | null
  rushTouchdowns: number | null
}

export type QbSeason2025 = QbSeasonLine & { season: 2025 }

export interface QbStatProfile {
  slug: string
  displayName: string
  currentSchool: string
  season2025: QbSeason2025
  /** Earlier seasons, chronological, excluding the 2025 line. Redshirt/DNP years omitted. */
  priorSeasons: QbSeasonLine[]
  /** Verified eligibility caveat, reader-safe. */
  eligibilityNote: string
  /** Honest provenance / caveat lines shown in the methodology drawer. */
  dataNotes: string[]
}

export interface QbStatsDataset {
  schemaVersion: string
  dataset: string
  asOf: string
  scope: string
  playerOrder: string[]
  players: Record<string, QbStatProfile>
}

export const qbStats2027: QbStatsDataset = {
  schemaVersion: '1.1.0-provisional',
  dataset: '2027 QB Statistical Foundation',
  asOf: '2026-07-23',
  scope: 'Verified 2025 line plus career season history. Game-by-game logs and opponent-quality splits pending.',
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
      priorSeasons: [
        { season: 2023, school: 'Texas', games: 2, starts: 0, completions: 2, attempts: 5, passingYards: 30, passingTouchdowns: 0, interceptions: 0, rushAttempts: 3, rushYards: 7, rushTouchdowns: 0 },
        { season: 2024, school: 'Texas', games: 10, starts: 2, completions: 61, attempts: 90, passingYards: 939, passingTouchdowns: 9, interceptions: 2, rushAttempts: 25, rushYards: 108, rushTouchdowns: 4 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['First full season as the Texas starter in 2025 after limited 2023–2024 work.'],
    },
    'dante-moore': {
      slug: 'dante-moore',
      displayName: 'Dante Moore',
      currentSchool: 'Oregon',
      season2025: { season: 2025, school: 'Oregon', games: 15, starts: 15, completions: 296, attempts: 412, passingYards: 3565, passingTouchdowns: 30, interceptions: 10, rushAttempts: 73, rushYards: 156, rushTouchdowns: 2 },
      priorSeasons: [
        { season: 2023, school: 'UCLA', games: 9, starts: null, completions: 114, attempts: 213, passingYards: 1610, passingTouchdowns: 11, interceptions: 9, rushAttempts: 45, rushYards: -84, rushTouchdowns: 0 },
        { season: 2024, school: 'Oregon', games: 3, starts: 0, completions: 7, attempts: 8, passingYards: 49, passingTouchdowns: 0, interceptions: 0, rushAttempts: 1, rushYards: 6, rushTouchdowns: 0 },
      ],
      eligibilityNote: 'Draft-eligible on timeline; confirmed a 2026 return, so a 2027 declaration is not assumed.',
      dataNotes: ['Started as a true freshman at UCLA in 2023, transferred to Oregon, and became the full-time starter in 2025.'],
    },
    'lanorris-sellers': {
      slug: 'lanorris-sellers',
      displayName: 'LaNorris Sellers',
      currentSchool: 'South Carolina',
      season2025: { season: 2025, school: 'South Carolina', games: 12, starts: 12, completions: 178, attempts: 293, passingYards: 2437, passingTouchdowns: 13, interceptions: 8, rushAttempts: 149, rushYards: 270, rushTouchdowns: 5 },
      priorSeasons: [
        { season: 2023, school: 'South Carolina', games: 3, starts: 0, completions: 4, attempts: 4, passingYards: 86, passingTouchdowns: 2, interceptions: 0, rushAttempts: 5, rushYards: 51, rushTouchdowns: 1 },
        { season: 2024, school: 'South Carolina', games: 12, starts: 12, completions: 196, attempts: 299, passingYards: 2534, passingTouchdowns: 18, interceptions: 7, rushAttempts: 166, rushYards: 674, rushTouchdowns: 7 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['NCAA rushing yardage includes sack losses and should not be read as designed-run production.'],
    },
    'cj-carr': {
      slug: 'cj-carr',
      displayName: 'CJ Carr',
      currentSchool: 'Notre Dame',
      season2025: { season: 2025, school: 'Notre Dame', games: 12, starts: 12, completions: 195, attempts: 293, passingYards: 2741, passingTouchdowns: 24, interceptions: 6, rushAttempts: 41, rushYards: 33, rushTouchdowns: 3 },
      priorSeasons: [],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed.',
      dataNotes: ['Redshirted in 2024; 2025 was his first year of college production, which is why there is no career history behind it.'],
    },
    'drew-mestemaker': {
      slug: 'drew-mestemaker',
      displayName: 'Drew Mestemaker',
      currentSchool: 'Oklahoma State',
      season2025: { season: 2025, school: 'North Texas', games: 14, starts: 14, completions: 319, attempts: 463, passingYards: 4379, passingTouchdowns: 34, interceptions: 9, rushAttempts: 57, rushYards: 89, rushTouchdowns: 5 },
      priorSeasons: [
        { season: 2024, school: 'North Texas', games: 5, starts: null, completions: 30, attempts: 46, passingYards: 462, passingTouchdowns: 2, interceptions: 2, rushAttempts: 14, rushYards: 87, rushTouchdowns: 1 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed, and 2028 remains open.',
      dataNotes: ['2025 production came at North Texas; he transferred to Oklahoma State in spring 2026. The starting résumé is one full season deep.'],
    },
    'darian-mensah': {
      slug: 'darian-mensah',
      displayName: 'Darian Mensah',
      currentSchool: 'Miami',
      season2025: { season: 2025, school: 'Duke', games: 14, starts: 14, completions: 334, attempts: 500, passingYards: 3973, passingTouchdowns: 34, interceptions: 6, rushAttempts: 58, rushYards: -22, rushTouchdowns: 1 },
      priorSeasons: [
        { season: 2024, school: 'Tulane', games: 13, starts: null, completions: 189, attempts: 287, passingYards: 2723, passingTouchdowns: 22, interceptions: 6, rushAttempts: 60, rushYards: 132, rushTouchdowns: 1 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['Redshirted at Tulane in 2023, started there in 2024, produced the 2025 line at Duke, and transferred to Miami for 2026.', 'Net rush yardage is negative because sacks are included in NCAA rushing. The verified 2025 line (58 carries, −22 yards) is kept over a public source printing 59 carries, −32.'],
    },
    'trinidad-chambliss': {
      slug: 'trinidad-chambliss',
      displayName: 'Trinidad Chambliss',
      currentSchool: 'Ole Miss',
      season2025: { season: 2025, school: 'Ole Miss', games: 15, starts: 13, completions: 294, attempts: 445, passingYards: 3937, passingTouchdowns: 22, interceptions: 3, rushAttempts: 133, rushYards: 527, rushTouchdowns: 8 },
      priorSeasons: [
        { season: 2023, school: 'Ferris State', level: 'Division II', games: 8, starts: null, completions: 21, attempts: 33, passingYards: 354, passingTouchdowns: 5, interceptions: 1, rushAttempts: 41, rushYards: 304, rushTouchdowns: 4 },
        { season: 2024, school: 'Ferris State', level: 'Division II', games: 15, starts: 15, completions: 226, attempts: 367, passingYards: 2925, passingTouchdowns: 26, interceptions: 6, rushAttempts: 171, rushYards: 1019, rushTouchdowns: 25 },
      ],
      eligibilityNote: 'Eligible by timeline; a 2027 declaration/entry decision is not assumed.',
      dataNotes: ['2023–2024 came at Ferris State (Division II) and are marked as such; the 2025 line was his first FBS season, at Ole Miss.', '15 appearances in 2025, 13 of them starts.'],
    },
    'jayden-maiava': {
      slug: 'jayden-maiava',
      displayName: 'Jayden Maiava',
      currentSchool: 'USC',
      season2025: { season: 2025, school: 'USC', games: 13, starts: 13, completions: 265, attempts: 403, passingYards: 3711, passingTouchdowns: 24, interceptions: 10, rushAttempts: 54, rushYards: 157, rushTouchdowns: 6 },
      priorSeasons: [
        { season: 2023, school: 'UNLV', games: 14, starts: 11, completions: 224, attempts: 353, passingYards: 3085, passingTouchdowns: 17, interceptions: 10, rushAttempts: 73, rushYards: 277, rushTouchdowns: 3 },
        { season: 2024, school: 'USC', games: 7, starts: 4, completions: 101, attempts: 169, passingYards: 1201, passingTouchdowns: 11, interceptions: 6, rushAttempts: 20, rushYards: 45, rushTouchdowns: 4 },
      ],
      eligibilityNote: 'Eligible by timeline; declaration not assumed.',
      dataNotes: ['Started at UNLV in 2023 before transferring to USC. The interception total is modest, but evaluators flag a higher turnover-worthy-play volume this line does not capture.'],
    },
    'julian-sayin': {
      slug: 'julian-sayin',
      displayName: 'Julian Sayin',
      currentSchool: 'Ohio State',
      season2025: { season: 2025, school: 'Ohio State', games: 14, starts: 14, completions: 301, attempts: 391, passingYards: 3610, passingTouchdowns: 32, interceptions: 8, rushAttempts: 42, rushYards: -44, rushTouchdowns: 0 },
      priorSeasons: [
        { season: 2024, school: 'Ohio State', games: 4, starts: 0, completions: 5, attempts: 12, passingYards: 84, passingTouchdowns: 1, interceptions: 0, rushAttempts: 2, rushYards: 24, rushTouchdowns: 0 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed.',
      dataNotes: ['Enrolled at Alabama in 2023, transferred to Ohio State, and broke out as the 2025 starter.', 'Net 2025 rushing is negative because sacks are included in NCAA rushing.'],
    },
    'sam-leavitt': {
      slug: 'sam-leavitt',
      displayName: 'Sam Leavitt',
      currentSchool: 'LSU',
      season2025: { season: 2025, school: 'Arizona State', games: 7, starts: 7, completions: 145, attempts: 239, passingYards: 1628, passingTouchdowns: 10, interceptions: 3, rushAttempts: 73, rushYards: 306, rushTouchdowns: 5 },
      priorSeasons: [
        { season: 2023, school: 'Michigan State', games: 4, starts: null, completions: 15, attempts: 23, passingYards: 139, passingTouchdowns: 2, interceptions: 2, rushAttempts: 13, rushYards: 67, rushTouchdowns: 0 },
        { season: 2024, school: 'Arizona State', games: 13, starts: 13, completions: 216, attempts: 350, passingYards: 2885, passingTouchdowns: 24, interceptions: 6, rushAttempts: 110, rushYards: 443, rushTouchdowns: 5 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft on timeline; declaration not assumed.',
      dataNotes: ['Michigan State in 2023, then Arizona State. A foot injury limited the 2025 season to seven games. Now at LSU.'],
    },
    'john-mateer': {
      slug: 'john-mateer',
      displayName: 'John Mateer',
      currentSchool: 'Oklahoma',
      season2025: { season: 2025, school: 'Oklahoma', games: 12, starts: 12, completions: 247, attempts: 397, passingYards: 2885, passingTouchdowns: 14, interceptions: 11, rushAttempts: 149, rushYards: 431, rushTouchdowns: 8 },
      priorSeasons: [
        { season: 2022, school: 'Washington State', games: 1, starts: 0, completions: 2, attempts: 2, passingYards: 32, passingTouchdowns: 1, interceptions: 0, rushAttempts: 4, rushYards: 58, rushTouchdowns: 0 },
        { season: 2023, school: 'Washington State', games: 12, starts: null, completions: 13, attempts: 17, passingYards: 235, passingTouchdowns: 2, interceptions: 1, rushAttempts: 21, rushYards: 92, rushTouchdowns: 3 },
        { season: 2024, school: 'Washington State', games: 12, starts: 12, completions: 224, attempts: 347, passingYards: 3139, passingTouchdowns: 29, interceptions: 7, rushAttempts: 178, rushYards: 826, rushTouchdowns: 15 },
      ],
      eligibilityNote: 'Eligible by timeline; declaration not assumed.',
      dataNotes: ['Backed up at Washington State before his 2024 breakout, then transferred to Oklahoma.', 'Right-hand surgery after the September 2025 Auburn game; the 2025 line spans pre-injury and post-return work.'],
    },
    'drake-lindsey': {
      slug: 'drake-lindsey',
      displayName: 'Drake Lindsey',
      currentSchool: 'Minnesota',
      season2025: { season: 2025, school: 'Minnesota', games: 13, starts: 13, completions: 246, attempts: 389, passingYards: 2382, passingTouchdowns: 18, interceptions: 6, rushAttempts: null, rushYards: null, rushTouchdowns: 4 },
      priorSeasons: [
        { season: 2024, school: 'Minnesota', games: 3, starts: 0, completions: 4, attempts: 5, passingYards: 50, passingTouchdowns: 1, interceptions: 0, rushAttempts: 1, rushYards: 6, rushTouchdowns: 0 },
      ],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed, and 2028 remains open.',
      dataNotes: ["The verified 2025 line uses 246-of-389 (CFBStats and season databases); other public sources print 249-of-386 and 228-of-361. The verified figure is kept. Rush attempts and yards are pending; four rushing touchdowns are confirmed."],
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

/** All season lines in chronological order, including the 2025 line. */
export function careerSeasonLines(profile: QbStatProfile): QbSeasonLine[] {
  return [...profile.priorSeasons, profile.season2025].sort((a, b) => a.season - b.season)
}

/** True when any prior season carries production worth a career table. */
export function hasCareerHistory(profile: QbStatProfile): boolean {
  return profile.priorSeasons.length > 0
}

function sum(values: Array<number | null>): number | null {
  const present = values.filter((v): v is number => v != null)
  return present.length ? present.reduce((n, v) => n + v, 0) : null
}

/** A summed totals line across the given season lines. Percentages derive from it. */
export function totalsLine(lines: QbSeasonLine[]): Omit<QbSeasonLine, 'season' | 'school' | 'starts' | 'level'> & { games: number } {
  return {
    games: lines.reduce((n, l) => n + l.games, 0),
    completions: sum(lines.map((l) => l.completions)),
    attempts: sum(lines.map((l) => l.attempts)),
    passingYards: sum(lines.map((l) => l.passingYards)),
    passingTouchdowns: sum(lines.map((l) => l.passingTouchdowns)),
    interceptions: sum(lines.map((l) => l.interceptions)),
    rushAttempts: sum(lines.map((l) => l.rushAttempts)),
    rushYards: sum(lines.map((l) => l.rushYards)),
    rushTouchdowns: sum(lines.map((l) => l.rushTouchdowns)),
  }
}

export function hasRushing(l: Pick<QbSeasonLine, 'rushAttempts' | 'rushYards' | 'rushTouchdowns'>): boolean {
  return l.rushAttempts != null || l.rushYards != null || l.rushTouchdowns != null
}

/** Decimal fraction of completions / attempts, or null when either is missing. */
export function completionRate(s: Pick<QbSeasonLine, 'completions' | 'attempts'>): number | null {
  return s.completions != null && s.attempts ? s.completions / s.attempts : null
}

/** Yards per attempt, or null. */
export function yardsPerAttempt(s: Pick<QbSeasonLine, 'passingYards' | 'attempts'>): number | null {
  return s.passingYards != null && s.attempts ? s.passingYards / s.attempts : null
}

/** Passing yards per game, or null. */
export function yardsPerGame(s: Pick<QbSeasonLine, 'passingYards' | 'games'>): number | null {
  return s.passingYards != null && s.games ? s.passingYards / s.games : null
}

/** Touchdown rate (TD / attempts), or null. */
export function touchdownRate(s: Pick<QbSeasonLine, 'passingTouchdowns' | 'attempts'>): number | null {
  return s.passingTouchdowns != null && s.attempts ? s.passingTouchdowns / s.attempts : null
}

/** Interception rate (INT / attempts), or null. */
export function interceptionRate(s: Pick<QbSeasonLine, 'interceptions' | 'attempts'>): number | null {
  return s.interceptions != null && s.attempts ? s.interceptions / s.attempts : null
}
