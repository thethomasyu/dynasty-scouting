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
  /** 2025 game-by-game passing log with opponent pass-defense tiers. */
  gameLog2025?: QbGameStat[]
  /** Verified 2025 production against AP-ranked and FBS winning opponents (rate only). */
  opponentContext2025?: QbSplitRate[]
  /** Verified 2025 situational splits (game state, down and distance, location). */
  situationalSplits2025?: QbSplitRate[]
  /** Verified 2025 red-zone passing. */
  redZone2025?: QbRedZone
  /** Verified 2025 explosive-completion shares. */
  explosive2025?: QbExplosive
  /** Per-player statistical source links. */
  statsSources?: QbStatSource[]
}

export type QbDefenseTier = 'Strong' | 'Average' | 'Weak' | 'FCS'

export interface QbGameStat {
  gameNumber: number
  /** MM/DD game date. */
  date: string
  /** Opponent school as published (Miami (FL) / Miami (OH) preserved). */
  opponent: string
  location: 'home' | 'away' | 'neutral'
  status: 'Played' | 'DNP'
  completions: number | null
  attempts: number | null
  passingYards: number | null
  passingTouchdowns: number | null
  interceptions: number | null
  /** Opponent's 2025 pass-efficiency-defense tier. */
  defenseTier: QbDefenseTier
  /** Opponent's 2025 final FBS pass-efficiency-defense rank (null for FCS or ranks 122-136 outside the published top-121). */
  passEfficiencyDefenseRank: number | null
}

/** A rate-only situational or opponent split. Completion pct is a fraction. */
export interface QbSplitRate {
  label: string
  completionPct: number | null
  yardsPerAttempt: number | null
  passingTouchdowns: number | null
  interceptions: number | null
}

export interface QbRedZone {
  attempts: number
  completionPct: number
  passingTouchdowns: number
  interceptions: number
}

export interface QbExplosive {
  comp15: number
  share15: number
  comp25: number
  share25: number
}

export interface QbStatSource {
  label: string
  url: string
}

/** A production line aggregated across a set of games (used for pass-defense-tier splits). */
export interface QbTierSplit {
  tier: QbDefenseTier
  games: number
  completions: number
  attempts: number
  passingYards: number
  passingTouchdowns: number
  interceptions: number
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Ohio State", location: 'away', status: 'Played', completions: 17, attempts: 30, passingYards: 170, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 1 },
        { gameNumber: 2, date: '09/06', opponent: "San Jose State", location: 'home', status: 'Played', completions: 19, attempts: 30, passingYards: 295, passingTouchdowns: 4, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: 115 },
        { gameNumber: 3, date: '09/13', opponent: "UTEP", location: 'home', status: 'Played', completions: 11, attempts: 25, passingYards: 114, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 71 },
        { gameNumber: 4, date: '09/20', opponent: "Sam Houston State", location: 'home', status: 'Played', completions: 18, attempts: 21, passingYards: 309, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 5, date: '10/04', opponent: "Florida", location: 'away', status: 'Played', completions: 16, attempts: 29, passingYards: 263, passingTouchdowns: 2, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 76 },
        { gameNumber: 6, date: '10/11', opponent: "Oklahoma", location: 'home', status: 'Played', completions: 21, attempts: 27, passingYards: 166, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 32 },
        { gameNumber: 7, date: '10/18', opponent: "Kentucky", location: 'away', status: 'Played', completions: 12, attempts: 27, passingYards: 132, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 105 },
        { gameNumber: 8, date: '10/25', opponent: "Mississippi State", location: 'away', status: 'Played', completions: 29, attempts: 46, passingYards: 346, passingTouchdowns: 3, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 78 },
        { gameNumber: 9, date: '11/01', opponent: "Vanderbilt", location: 'home', status: 'Played', completions: 25, attempts: 33, passingYards: 328, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 118 },
        { gameNumber: 10, date: '11/15', opponent: "Georgia", location: 'away', status: 'Played', completions: 27, attempts: 43, passingYards: 251, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 60 },
        { gameNumber: 11, date: '11/22', opponent: "Arkansas", location: 'home', status: 'Played', completions: 18, attempts: 30, passingYards: 389, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 104 },
        { gameNumber: 12, date: '11/28', opponent: "Texas A&M", location: 'home', status: 'Played', completions: 14, attempts: 29, passingYards: 179, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 16 },
        { gameNumber: 13, date: '12/31', opponent: "Michigan", location: 'home', status: 'Played', completions: 21, attempts: 34, passingYards: 221, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 54 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.638, yardsPerAttempt: 6.71, passingTouchdowns: 9, interceptions: 2 },
        { label: "vs FBS winning teams", completionPct: 0.638, yardsPerAttempt: 6.71, passingTouchdowns: 9, interceptions: 2 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.656, yardsPerAttempt: 8.73, passingTouchdowns: 14, interceptions: 3 },
        { label: "Third down", completionPct: 0.541, yardsPerAttempt: 7.29, passingTouchdowns: 6, interceptions: 2 },
        { label: "Third and 7+", completionPct: 0.54, yardsPerAttempt: 7.49, passingTouchdowns: 4, interceptions: 0 },
        { label: "Road / neutral", completionPct: 0.606, yardsPerAttempt: 6.56, passingTouchdowns: 10, interceptions: 5 },
      ],
      redZone2025: { attempts: 53, completionPct: 0.491, passingTouchdowns: 14, interceptions: 2 },
      explosive2025: { comp15: 80, share15: 0.323, comp25: 33, share25: 0.133 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/703/2001506/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/703/2001506/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/703/2001506/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Montana State", location: 'home', status: 'Played', completions: 18, attempts: 23, passingYards: 213, passingTouchdowns: 3, interceptions: 0, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 2, date: '09/06', opponent: "Oklahoma State", location: 'home', status: 'Played', completions: 16, attempts: 21, passingYards: 266, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 121 },
        { gameNumber: 3, date: '09/13', opponent: "Northwestern", location: 'away', status: 'Played', completions: 16, attempts: 20, passingYards: 178, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 30 },
        { gameNumber: 4, date: '09/20', opponent: "Oregon State", location: 'home', status: 'Played', completions: 21, attempts: 31, passingYards: 305, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 73 },
        { gameNumber: 5, date: '09/27', opponent: "Penn State", location: 'away', status: 'Played', completions: 29, attempts: 39, passingYards: 248, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 20 },
        { gameNumber: 6, date: '10/11', opponent: "Indiana", location: 'home', status: 'Played', completions: 21, attempts: 34, passingYards: 186, passingTouchdowns: 1, interceptions: 2, defenseTier: 'Strong', passEfficiencyDefenseRank: 24 },
        { gameNumber: 7, date: '10/18', opponent: "Rutgers", location: 'away', status: 'Played', completions: 15, attempts: 20, passingYards: 290, passingTouchdowns: 4, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 76 },
        { gameNumber: 8, date: '10/25', opponent: "Wisconsin", location: 'home', status: 'Played', completions: 9, attempts: 15, passingYards: 86, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 62 },
        { gameNumber: 9, date: '11/08', opponent: "Iowa", location: 'away', status: 'Played', completions: 13, attempts: 21, passingYards: 112, passingTouchdowns: 0, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 10 },
        { gameNumber: 10, date: '11/14', opponent: "Minnesota", location: 'home', status: 'Played', completions: 27, attempts: 30, passingYards: 306, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 51 },
        { gameNumber: 11, date: '11/22', opponent: "USC", location: 'home', status: 'Played', completions: 22, attempts: 30, passingYards: 257, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 47 },
        { gameNumber: 12, date: '11/29', opponent: "Washington", location: 'away', status: 'Played', completions: 20, attempts: 29, passingYards: 286, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 52 },
        { gameNumber: 13, date: '12/20', opponent: "James Madison", location: 'home', status: 'Played', completions: 19, attempts: 27, passingYards: 313, passingTouchdowns: 4, interceptions: 2, defenseTier: 'Strong', passEfficiencyDefenseRank: 19 },
        { gameNumber: 14, date: '01/01', opponent: "Texas Tech", location: 'home', status: 'Played', completions: 26, attempts: 33, passingYards: 234, passingTouchdowns: 0, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 26 },
        { gameNumber: 15, date: '01/09', opponent: "Indiana", location: 'home', status: 'Played', completions: 24, attempts: 39, passingYards: 285, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 24 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.679, yardsPerAttempt: 7.54, passingTouchdowns: 9, interceptions: 8 },
        { label: "vs FBS winning teams", completionPct: 0.719, yardsPerAttempt: 7.96, passingTouchdowns: 16, interceptions: 9 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.698, yardsPerAttempt: 8.35, passingTouchdowns: 12, interceptions: 7 },
        { label: "Third down", completionPct: 0.708, yardsPerAttempt: 10.93, passingTouchdowns: 7, interceptions: 2 },
        { label: "Third and 7+", completionPct: 0.741, yardsPerAttempt: 11.93, passingTouchdowns: 3, interceptions: 2 },
        { label: "Road / neutral", completionPct: 0.711, yardsPerAttempt: 8.12, passingTouchdowns: 11, interceptions: 5 },
      ],
      redZone2025: { attempts: 44, completionPct: 0.568, passingTouchdowns: 14, interceptions: 2 },
      explosive2025: { comp15: 82, share15: 0.277, comp25: 31, share25: 0.105 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/529/2000295/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/529/2000295/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/529/2000295/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/31', opponent: "Virginia Tech", location: 'home', status: 'Played', completions: 12, attempts: 19, passingYards: 209, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 81 },
        { gameNumber: 2, date: '09/06', opponent: "South Carolina State", location: 'home', status: 'Played', completions: 11, attempts: 19, passingYards: 128, passingTouchdowns: 1, interceptions: 0, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 3, date: '09/13', opponent: "Vanderbilt", location: 'home', status: 'Played', completions: 6, attempts: 7, passingYards: 94, passingTouchdowns: 0, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: 118 },
        { gameNumber: 4, date: '09/20', opponent: "Missouri", location: 'away', status: 'Played', completions: 18, attempts: 28, passingYards: 302, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 11 },
        { gameNumber: 5, date: '09/27', opponent: "Kentucky", location: 'home', status: 'Played', completions: 11, attempts: 14, passingYards: 153, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 105 },
        { gameNumber: 6, date: '10/11', opponent: "LSU", location: 'away', status: 'Played', completions: 15, attempts: 27, passingYards: 124, passingTouchdowns: 0, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 42 },
        { gameNumber: 7, date: '10/18', opponent: "Oklahoma", location: 'home', status: 'Played', completions: 17, attempts: 25, passingYards: 124, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 32 },
        { gameNumber: 8, date: '10/25', opponent: "Alabama", location: 'home', status: 'Played', completions: 18, attempts: 32, passingYards: 222, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 9 },
        { gameNumber: 9, date: '11/01', opponent: "Ole Miss", location: 'away', status: 'Played', completions: 16, attempts: 30, passingYards: 180, passingTouchdowns: 1, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 37 },
        { gameNumber: 10, date: '11/15', opponent: "Texas A&M", location: 'away', status: 'Played', completions: 15, attempts: 30, passingYards: 246, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 16 },
        { gameNumber: 11, date: '11/22', opponent: "Coastal Carolina", location: 'home', status: 'Played', completions: 16, attempts: 20, passingYards: 274, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 101 },
        { gameNumber: 12, date: '11/29', opponent: "Clemson", location: 'home', status: 'Played', completions: 23, attempts: 42, passingYards: 381, passingTouchdowns: 2, interceptions: 2, defenseTier: 'Weak', passEfficiencyDefenseRank: 120 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.581, yardsPerAttempt: 6.98, passingTouchdowns: 5, interceptions: 5 },
        { label: "vs FBS winning teams", completionPct: 0.579, yardsPerAttempt: 7.57, passingTouchdowns: 9, interceptions: 8 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.585, yardsPerAttempt: 7.92, passingTouchdowns: 4, interceptions: 4 },
        { label: "Third down", completionPct: 0.493, yardsPerAttempt: 6.85, passingTouchdowns: 2, interceptions: 4 },
        { label: "Third and 7+", completionPct: 0.531, yardsPerAttempt: 8.16, passingTouchdowns: 2, interceptions: 4 },
        { label: "Road / neutral", completionPct: 0.567, yardsPerAttempt: 7.92, passingTouchdowns: 6, interceptions: 4 },
      ],
      redZone2025: { attempts: 18, completionPct: 0.556, passingTouchdowns: 2, interceptions: 1 },
      explosive2025: { comp15: 52, share15: 0.292, comp25: 23, share25: 0.129 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/648/2002443/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/648/2002443/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/648/2002443/passing/split.html' },
      ],
    },
    'cj-carr': {
      slug: 'cj-carr',
      displayName: 'CJ Carr',
      currentSchool: 'Notre Dame',
      season2025: { season: 2025, school: 'Notre Dame', games: 12, starts: 12, completions: 195, attempts: 293, passingYards: 2741, passingTouchdowns: 24, interceptions: 6, rushAttempts: 41, rushYards: 33, rushTouchdowns: 3 },
      priorSeasons: [],
      eligibilityNote: 'Appears eligible for the 2027 NFL Draft after 2026 on timeline; declaration not assumed.',
      dataNotes: ['Redshirted in 2024; 2025 was his first year of college production, which is why there is no career history behind it.'],
    
      gameLog2025: [
        { gameNumber: 1, date: '08/31', opponent: "Miami (FL)", location: 'away', status: 'Played', completions: 19, attempts: 30, passingYards: 221, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 43 },
        { gameNumber: 2, date: '09/13', opponent: "Texas A&M", location: 'home', status: 'Played', completions: 20, attempts: 32, passingYards: 293, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 16 },
        { gameNumber: 3, date: '09/20', opponent: "Purdue", location: 'home', status: 'Played', completions: 10, attempts: 12, passingYards: 223, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 110 },
        { gameNumber: 4, date: '09/27', opponent: "Arkansas", location: 'away', status: 'Played', completions: 22, attempts: 30, passingYards: 354, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 104 },
        { gameNumber: 5, date: '10/04', opponent: "Boise State", location: 'home', status: 'Played', completions: 15, attempts: 23, passingYards: 189, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 15 },
        { gameNumber: 6, date: '10/11', opponent: "NC State", location: 'home', status: 'Played', completions: 19, attempts: 31, passingYards: 342, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 7, date: '10/18', opponent: "USC", location: 'home', status: 'Played', completions: 16, attempts: 26, passingYards: 136, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 47 },
        { gameNumber: 8, date: '11/01', opponent: "Boston College", location: 'away', status: 'Played', completions: 18, attempts: 25, passingYards: 299, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 9, date: '11/08', opponent: "Navy", location: 'home', status: 'Played', completions: 13, attempts: 16, passingYards: 218, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 91 },
        { gameNumber: 10, date: '11/15', opponent: "Pittsburgh", location: 'away', status: 'Played', completions: 21, attempts: 32, passingYards: 212, passingTouchdowns: 2, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 100 },
        { gameNumber: 11, date: '11/22', opponent: "Syracuse", location: 'home', status: 'Played', completions: 5, attempts: 9, passingYards: 49, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 12, date: '11/29', opponent: "Stanford", location: 'away', status: 'Played', completions: 17, attempts: 27, passingYards: 205, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.654, yardsPerAttempt: 8.35, passingTouchdowns: 7, interceptions: 3 },
        { label: "vs FBS winning teams", completionPct: 0.647, yardsPerAttempt: 8.48, passingTouchdowns: 13, interceptions: 6 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.647, yardsPerAttempt: 8.85, passingTouchdowns: 10, interceptions: 2 },
        { label: "Third down", completionPct: 0.691, yardsPerAttempt: 7.75, passingTouchdowns: 5, interceptions: 2 },
        { label: "Third and 7+", completionPct: 0.744, yardsPerAttempt: 9.6, passingTouchdowns: 3, interceptions: 0 },
        { label: "Road / neutral", completionPct: 0.674, yardsPerAttempt: 8.97, passingTouchdowns: 12, interceptions: 3 },
      ],
      redZone2025: { attempts: 43, completionPct: 0.535, passingTouchdowns: 14, interceptions: 2 },
      explosive2025: { comp15: 63, share15: 0.323, comp25: 31, share25: 0.159 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/513/50310480/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/513/50310480/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/513/50310480/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Lamar", location: 'home', status: 'Played', completions: 24, attempts: 32, passingYards: 329, passingTouchdowns: 3, interceptions: 0, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 2, date: '09/06', opponent: "Western Michigan", location: 'away', status: 'Played', completions: 18, attempts: 33, passingYards: 224, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 18 },
        { gameNumber: 3, date: '09/13', opponent: "Washington State", location: 'home', status: 'Played', completions: 24, attempts: 29, passingYards: 211, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 13 },
        { gameNumber: 4, date: '09/20', opponent: "Army", location: 'away', status: 'Played', completions: 26, attempts: 36, passingYards: 249, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 27 },
        { gameNumber: 5, date: '09/27', opponent: "South Alabama", location: 'home', status: 'Played', completions: 14, attempts: 26, passingYards: 234, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 44 },
        { gameNumber: 6, date: '10/10', opponent: "USF", location: 'home', status: 'Played', completions: 30, attempts: 46, passingYards: 336, passingTouchdowns: 2, interceptions: 3, defenseTier: 'Weak', passEfficiencyDefenseRank: 112 },
        { gameNumber: 7, date: '10/18', opponent: "UTSA", location: 'home', status: 'Played', completions: 22, attempts: 35, passingYards: 277, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 75 },
        { gameNumber: 8, date: '10/24', opponent: "Charlotte", location: 'away', status: 'Played', completions: 37, attempts: 49, passingYards: 608, passingTouchdowns: 4, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 9, date: '11/01', opponent: "Navy", location: 'home', status: 'Played', completions: 19, attempts: 24, passingYards: 234, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 91 },
        { gameNumber: 10, date: '11/15', opponent: "UAB", location: 'away', status: 'Played', completions: 18, attempts: 25, passingYards: 298, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 94 },
        { gameNumber: 11, date: '11/22', opponent: "Rice", location: 'away', status: 'Played', completions: 19, attempts: 23, passingYards: 469, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 106 },
        { gameNumber: 12, date: '11/28', opponent: "Temple", location: 'home', status: 'Played', completions: 20, attempts: 24, passingYards: 366, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 38 },
        { gameNumber: 13, date: '12/05', opponent: "Tulane", location: 'away', status: 'Played', completions: 21, attempts: 34, passingYards: 294, passingTouchdowns: 2, interceptions: 3, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 14, date: '12/27', opponent: "San Diego State", location: 'neutral', status: 'Played', completions: 27, attempts: 47, passingYards: 250, passingTouchdowns: 3, interceptions: 2, defenseTier: 'Strong', passEfficiencyDefenseRank: 6 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.69, yardsPerAttempt: 9.1, passingTouchdowns: 2, interceptions: 3 },
        { label: "vs FBS winning teams", completionPct: 0.658, yardsPerAttempt: 7.31, passingTouchdowns: 18, interceptions: 8 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.727, yardsPerAttempt: 10.1, passingTouchdowns: 17, interceptions: 6 },
        { label: "Third down", completionPct: 0.674, yardsPerAttempt: 8.07, passingTouchdowns: 6, interceptions: 3 },
        { label: "Third and 7+", completionPct: 0.625, yardsPerAttempt: 9.45, passingTouchdowns: 2, interceptions: 1 },
        { label: "Road / neutral", completionPct: 0.672, yardsPerAttempt: 9.68, passingTouchdowns: 17, interceptions: 6 },
      ],
      redZone2025: { attempts: 83, completionPct: 0.627, passingTouchdowns: 19, interceptions: 4 },
      explosive2025: { comp15: 106, share15: 0.332, comp25: 39, share25: 0.122 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/497/50259623/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/497/50259623/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/497/50259623/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/28', opponent: "Elon", location: 'home', status: 'Played', completions: 27, attempts: 34, passingYards: 389, passingTouchdowns: 3, interceptions: 0, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 2, date: '09/06', opponent: "Illinois", location: 'home', status: 'Played', completions: 23, attempts: 34, passingYards: 334, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 63 },
        { gameNumber: 3, date: '09/13', opponent: "Tulane", location: 'away', status: 'Played', completions: 30, attempts: 51, passingYards: 313, passingTouchdowns: 3, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 4, date: '09/20', opponent: "NC State", location: 'home', status: 'Played', completions: 19, attempts: 28, passingYards: 269, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 5, date: '09/27', opponent: "Syracuse", location: 'away', status: 'Played', completions: 22, attempts: 28, passingYards: 268, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 6, date: '10/04', opponent: "California", location: 'away', status: 'Played', completions: 22, attempts: 30, passingYards: 265, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 45 },
        { gameNumber: 7, date: '10/18', opponent: "Georgia Tech", location: 'home', status: 'Played', completions: 32, attempts: 44, passingYards: 373, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 98 },
        { gameNumber: 8, date: '11/01', opponent: "Clemson", location: 'away', status: 'Played', completions: 27, attempts: 41, passingYards: 361, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 120 },
        { gameNumber: 9, date: '11/08', opponent: "Connecticut", location: 'away', status: 'Played', completions: 22, attempts: 31, passingYards: 222, passingTouchdowns: 3, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 64 },
        { gameNumber: 10, date: '11/15', opponent: "Virginia", location: 'home', status: 'Played', completions: 18, attempts: 35, passingYards: 213, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 33 },
        { gameNumber: 11, date: '11/22', opponent: "North Carolina", location: 'away', status: 'Played', completions: 20, attempts: 33, passingYards: 175, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 52 },
        { gameNumber: 12, date: '11/29', opponent: "Wake Forest", location: 'home', status: 'Played', completions: 24, attempts: 35, passingYards: 268, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 46 },
        { gameNumber: 13, date: '12/06', opponent: "Virginia", location: 'home', status: 'Played', completions: 19, attempts: 25, passingYards: 196, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 33 },
        { gameNumber: 14, date: '12/31', opponent: "Arizona State", location: 'home', status: 'Played', completions: 29, attempts: 51, passingYards: 327, passingTouchdowns: 4, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 95 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.604, yardsPerAttempt: 6.5, passingTouchdowns: 6, interceptions: 2 },
        { label: "vs FBS winning teams", completionPct: 0.654, yardsPerAttempt: 7.76, passingTouchdowns: 28, interceptions: 6 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.651, yardsPerAttempt: 7.81, passingTouchdowns: 17, interceptions: 1 },
        { label: "Third down", completionPct: 0.592, yardsPerAttempt: 7.92, passingTouchdowns: 7, interceptions: 0 },
        { label: "Third and 7+", completionPct: 0.603, yardsPerAttempt: 8.57, passingTouchdowns: 3, interceptions: 0 },
        { label: "Road / neutral", completionPct: 0.659, yardsPerAttempt: 7.33, passingTouchdowns: 21, interceptions: 5 },
      ],
      redZone2025: { attempts: 63, completionPct: 0.635, passingTouchdowns: 24, interceptions: 0 },
      explosive2025: { comp15: 100, share15: 0.299, comp25: 36, share25: 0.108 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/193/2000040/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/193/2000040/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/193/2000040/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Georgia State", location: 'home', status: 'Played', completions: 4, attempts: 6, passingYards: 59, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 109 },
        { gameNumber: 2, date: '09/06', opponent: "Kentucky", location: 'away', status: 'Played', completions: 0, attempts: 0, passingYards: 0, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 105 },
        { gameNumber: 3, date: '09/13', opponent: "Arkansas", location: 'home', status: 'Played', completions: 21, attempts: 29, passingYards: 353, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 104 },
        { gameNumber: 4, date: '09/20', opponent: "Tulane", location: 'home', status: 'Played', completions: 17, attempts: 27, passingYards: 307, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 5, date: '09/27', opponent: "LSU", location: 'home', status: 'Played', completions: 23, attempts: 39, passingYards: 314, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 42 },
        { gameNumber: 6, date: '10/11', opponent: "Washington State", location: 'home', status: 'Played', completions: 20, attempts: 29, passingYards: 253, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 13 },
        { gameNumber: 7, date: '10/18', opponent: "Georgia", location: 'away', status: 'Played', completions: 19, attempts: 36, passingYards: 263, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 60 },
        { gameNumber: 8, date: '10/25', opponent: "Oklahoma", location: 'away', status: 'Played', completions: 24, attempts: 44, passingYards: 315, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 32 },
        { gameNumber: 9, date: '11/01', opponent: "South Carolina", location: 'home', status: 'Played', completions: 12, attempts: 21, passingYards: 159, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 59 },
        { gameNumber: 10, date: '11/08', opponent: "The Citadel", location: 'home', status: 'Played', completions: 29, attempts: 33, passingYards: 333, passingTouchdowns: 3, interceptions: 0, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 11, date: '11/15', opponent: "Florida", location: 'home', status: 'Played', completions: 26, attempts: 35, passingYards: 301, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 76 },
        { gameNumber: 12, date: '11/28', opponent: "Mississippi State", location: 'away', status: 'Played', completions: 23, attempts: 34, passingYards: 359, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 78 },
        { gameNumber: 13, date: '12/20', opponent: "Tulane", location: 'home', status: 'Played', completions: 23, attempts: 29, passingYards: 282, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 14, date: '01/01', opponent: "Georgia", location: 'neutral', status: 'Played', completions: 30, attempts: 46, passingYards: 362, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 60 },
        { gameNumber: 15, date: '01/08', opponent: "Miami (FL)", location: 'neutral', status: 'Played', completions: 23, attempts: 37, passingYards: 277, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 43 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.621, yardsPerAttempt: 8.25, passingTouchdowns: 8, interceptions: 0 },
        { label: "vs FBS winning teams", completionPct: 0.624, yardsPerAttempt: 8.27, passingTouchdowns: 11, interceptions: 1 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.598, yardsPerAttempt: 9.62, passingTouchdowns: 12, interceptions: 1 },
        { label: "Third down", completionPct: 0.523, yardsPerAttempt: 6.87, passingTouchdowns: 8, interceptions: 0 },
        { label: "Third and 7+", completionPct: 0.512, yardsPerAttempt: 9.02, passingTouchdowns: 4, interceptions: 0 },
        { label: "Road / neutral", completionPct: 0.604, yardsPerAttempt: 8.0, passingTouchdowns: 9, interceptions: 0 },
      ],
      redZone2025: { attempts: 52, completionPct: 0.596, passingTouchdowns: 13, interceptions: 0 },
      explosive2025: { comp15: 93, share15: 0.316, comp25: 38, share25: 0.129 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/433/1136057/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/433/1136057/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/433/1136057/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Missouri State", location: 'home', status: 'Played', completions: 15, attempts: 18, passingYards: 295, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 89 },
        { gameNumber: 2, date: '09/06', opponent: "Georgia Southern", location: 'home', status: 'Played', completions: 16, attempts: 24, passingYards: 412, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 108 },
        { gameNumber: 3, date: '09/13', opponent: "Purdue", location: 'away', status: 'Played', completions: 17, attempts: 28, passingYards: 282, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 110 },
        { gameNumber: 4, date: '09/20', opponent: "Michigan State", location: 'home', status: 'Played', completions: 20, attempts: 26, passingYards: 234, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 93 },
        { gameNumber: 5, date: '09/27', opponent: "Illinois", location: 'away', status: 'Played', completions: 30, attempts: 43, passingYards: 364, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 63 },
        { gameNumber: 6, date: '10/11', opponent: "Michigan", location: 'home', status: 'Played', completions: 25, attempts: 32, passingYards: 265, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 54 },
        { gameNumber: 7, date: '10/18', opponent: "Notre Dame", location: 'away', status: 'Played', completions: 22, attempts: 42, passingYards: 328, passingTouchdowns: 2, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 56 },
        { gameNumber: 8, date: '11/01', opponent: "Nebraska", location: 'away', status: 'Played', completions: 9, attempts: 23, passingYards: 135, passingTouchdowns: 0, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 3 },
        { gameNumber: 9, date: '11/07', opponent: "Northwestern", location: 'home', status: 'Played', completions: 24, attempts: 33, passingYards: 299, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 30 },
        { gameNumber: 10, date: '11/15', opponent: "Iowa", location: 'home', status: 'Played', completions: 23, attempts: 32, passingYards: 254, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 10 },
        { gameNumber: 11, date: '11/22', opponent: "Oregon", location: 'away', status: 'Played', completions: 25, attempts: 43, passingYards: 306, passingTouchdowns: 3, interceptions: 2, defenseTier: 'Strong', passEfficiencyDefenseRank: 4 },
        { gameNumber: 12, date: '11/29', opponent: "UCLA", location: 'home', status: 'Played', completions: 21, attempts: 29, passingYards: 257, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 35 },
        { gameNumber: 13, date: '12/30', opponent: "TCU", location: 'neutral', status: 'Played', completions: 18, attempts: 30, passingYards: 280, passingTouchdowns: 1, interceptions: 2, defenseTier: 'Weak', passEfficiencyDefenseRank: 116 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.631, yardsPerAttempt: 8.01, passingTouchdowns: 9, interceptions: 7 },
        { label: "vs FBS winning teams", completionPct: 0.647, yardsPerAttempt: 9.18, passingTouchdowns: 19, interceptions: 10 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.642, yardsPerAttempt: 8.7, passingTouchdowns: 11, interceptions: 7 },
        { label: "Third down", completionPct: 0.589, yardsPerAttempt: 9.36, passingTouchdowns: 6, interceptions: 3 },
        { label: "Third and 7+", completionPct: 0.5, yardsPerAttempt: 9.08, passingTouchdowns: 2, interceptions: 3 },
        { label: "Road / neutral", completionPct: 0.579, yardsPerAttempt: 8.11, passingTouchdowns: 8, interceptions: 8 },
      ],
      redZone2025: { attempts: 61, completionPct: 0.639, passingTouchdowns: 16, interceptions: 2 },
      explosive2025: { comp15: 85, share15: 0.321, comp25: 40, share25: 0.151 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/657/1177721/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/657/1177721/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/657/1177721/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Texas", location: 'home', status: 'Played', completions: 13, attempts: 20, passingYards: 126, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 97 },
        { gameNumber: 2, date: '09/06', opponent: "Grambling State", location: 'home', status: 'Played', completions: 18, attempts: 19, passingYards: 306, passingTouchdowns: 4, interceptions: 1, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 3, date: '09/13', opponent: "Ohio", location: 'home', status: 'Played', completions: 25, attempts: 32, passingYards: 347, passingTouchdowns: 3, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 48 },
        { gameNumber: 4, date: '09/27', opponent: "Washington", location: 'away', status: 'Played', completions: 22, attempts: 28, passingYards: 208, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 52 },
        { gameNumber: 5, date: '10/04', opponent: "Minnesota", location: 'home', status: 'Played', completions: 23, attempts: 27, passingYards: 326, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 51 },
        { gameNumber: 6, date: '10/11', opponent: "Illinois", location: 'away', status: 'Played', completions: 19, attempts: 27, passingYards: 166, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 63 },
        { gameNumber: 7, date: '10/18', opponent: "Wisconsin", location: 'away', status: 'Played', completions: 36, attempts: 42, passingYards: 393, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 62 },
        { gameNumber: 8, date: '11/01', opponent: "Penn State", location: 'home', status: 'Played', completions: 20, attempts: 23, passingYards: 316, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 20 },
        { gameNumber: 9, date: '11/08', opponent: "Purdue", location: 'away', status: 'Played', completions: 27, attempts: 33, passingYards: 303, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: 110 },
        { gameNumber: 10, date: '11/15', opponent: "UCLA", location: 'home', status: 'Played', completions: 23, attempts: 31, passingYards: 184, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 35 },
        { gameNumber: 11, date: '11/22', opponent: "Rutgers", location: 'home', status: 'Played', completions: 13, attempts: 19, passingYards: 157, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 76 },
        { gameNumber: 12, date: '11/29', opponent: "Michigan", location: 'away', status: 'Played', completions: 19, attempts: 26, passingYards: 233, passingTouchdowns: 3, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 54 },
        { gameNumber: 13, date: '12/06', opponent: "Indiana", location: 'neutral', status: 'Played', completions: 21, attempts: 29, passingYards: 258, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 24 },
        { gameNumber: 14, date: '12/31', opponent: "Miami (FL)", location: 'neutral', status: 'Played', completions: 22, attempts: 35, passingYards: 287, passingTouchdowns: 1, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 43 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.682, yardsPerAttempt: 8.22, passingTouchdowns: 6, interceptions: 4 },
        { label: "vs FBS winning teams", completionPct: 0.745, yardsPerAttempt: 9.18, passingTouchdowns: 20, interceptions: 6 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.771, yardsPerAttempt: 8.9, passingTouchdowns: 13, interceptions: 3 },
        { label: "Third down", completionPct: 0.736, yardsPerAttempt: 7.14, passingTouchdowns: 10, interceptions: 2 },
        { label: "Third and 7+", completionPct: 0.842, yardsPerAttempt: 9.03, passingTouchdowns: 5, interceptions: 1 },
        { label: "Road / neutral", completionPct: 0.755, yardsPerAttempt: 8.4, passingTouchdowns: 14, interceptions: 5 },
      ],
      redZone2025: { attempts: 64, completionPct: 0.672, passingTouchdowns: 21, interceptions: 2 },
      explosive2025: { comp15: 67, share15: 0.223, comp25: 31, share25: 0.103 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/518/50310418/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/518/50310418/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/518/50310418/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Northern Arizona", location: 'home', status: 'Played', completions: 25, attempts: 39, passingYards: 257, passingTouchdowns: 2, interceptions: 1, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 2, date: '09/06', opponent: "Mississippi State", location: 'away', status: 'Played', completions: 10, attempts: 22, passingYards: 82, passingTouchdowns: 1, interceptions: 2, defenseTier: 'Average', passEfficiencyDefenseRank: 78 },
        { gameNumber: 3, date: '09/13', opponent: "Texas State", location: 'home', status: 'Played', completions: 15, attempts: 25, passingYards: 188, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 61 },
        { gameNumber: 4, date: '09/20', opponent: "Baylor", location: 'away', status: 'Played', completions: 22, attempts: 32, passingYards: 221, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 31 },
        { gameNumber: 5, date: '09/26', opponent: "TCU", location: 'home', status: 'Played', completions: 27, attempts: 39, passingYards: 291, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Weak', passEfficiencyDefenseRank: 116 },
        { gameNumber: 6, date: '10/11', opponent: "Utah", location: 'away', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Strong', passEfficiencyDefenseRank: 17 },
        { gameNumber: 7, date: '10/18', opponent: "Texas Tech", location: 'home', status: 'Played', completions: 28, attempts: 47, passingYards: 319, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 26 },
        { gameNumber: 8, date: '10/25', opponent: "Houston", location: 'home', status: 'Played', completions: 18, attempts: 35, passingYards: 270, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 66 },
        { gameNumber: 9, date: '11/01', opponent: "Iowa State", location: 'away', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Average', passEfficiencyDefenseRank: 64 },
        { gameNumber: 10, date: '11/15', opponent: "West Virginia", location: 'home', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
        { gameNumber: 11, date: '11/22', opponent: "Colorado", location: 'away', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Average', passEfficiencyDefenseRank: 41 },
        { gameNumber: 12, date: '11/28', opponent: "Arizona", location: 'home', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Strong', passEfficiencyDefenseRank: 7 },
        { gameNumber: 13, date: '12/31', opponent: "Duke", location: 'neutral', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Weak', passEfficiencyDefenseRank: null },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.603, yardsPerAttempt: 7.27, passingTouchdowns: 4, interceptions: 0 },
        { label: "vs FBS winning teams", completionPct: 0.603, yardsPerAttempt: 7.32, passingTouchdowns: 6, interceptions: 0 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.635, yardsPerAttempt: 6.68, passingTouchdowns: 7, interceptions: 2 },
        { label: "Third down", completionPct: 0.418, yardsPerAttempt: 5.71, passingTouchdowns: 2, interceptions: 1 },
        { label: "Third and 7+", completionPct: 0.355, yardsPerAttempt: 5.61, passingTouchdowns: 0, interceptions: 1 },
        { label: "Road / neutral", completionPct: 0.593, yardsPerAttempt: 5.61, passingTouchdowns: 2, interceptions: 2 },
      ],
      redZone2025: { attempts: 32, completionPct: 0.594, passingTouchdowns: 7, interceptions: 0 },
      explosive2025: { comp15: 36, share15: 0.248, comp25: 13, share25: 0.09 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/28/2000773/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/28/2000773/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/28/2000773/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/30', opponent: "Illinois State", location: 'home', status: 'Played', completions: 30, attempts: 37, passingYards: 392, passingTouchdowns: 3, interceptions: 1, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 2, date: '09/06', opponent: "Michigan", location: 'home', status: 'Played', completions: 21, attempts: 34, passingYards: 270, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 54 },
        { gameNumber: 3, date: '09/13', opponent: "Temple", location: 'away', status: 'Played', completions: 20, attempts: 34, passingYards: 282, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 38 },
        { gameNumber: 4, date: '09/20', opponent: "Auburn", location: 'home', status: 'Played', completions: 24, attempts: 36, passingYards: 271, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 90 },
        { gameNumber: 5, date: '10/04', opponent: "Kent State", location: 'home', status: 'DNP', completions: null, attempts: null, passingYards: null, passingTouchdowns: null, interceptions: null, defenseTier: 'Average', passEfficiencyDefenseRank: 102 },
        { gameNumber: 6, date: '10/11', opponent: "Texas", location: 'neutral', status: 'Played', completions: 20, attempts: 38, passingYards: 202, passingTouchdowns: 0, interceptions: 3, defenseTier: 'Average', passEfficiencyDefenseRank: 97 },
        { gameNumber: 7, date: '10/18', opponent: "South Carolina", location: 'away', status: 'Played', completions: 18, attempts: 26, passingYards: 150, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 59 },
        { gameNumber: 8, date: '10/25', opponent: "Ole Miss", location: 'home', status: 'Played', completions: 17, attempts: 31, passingYards: 223, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 37 },
        { gameNumber: 9, date: '11/01', opponent: "Tennessee", location: 'away', status: 'Played', completions: 19, attempts: 29, passingYards: 159, passingTouchdowns: 0, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: 113 },
        { gameNumber: 10, date: '11/15', opponent: "Alabama", location: 'away', status: 'Played', completions: 15, attempts: 23, passingYards: 138, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 9 },
        { gameNumber: 11, date: '11/22', opponent: "Missouri", location: 'home', status: 'Played', completions: 14, attempts: 30, passingYards: 173, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 11 },
        { gameNumber: 12, date: '11/29', opponent: "LSU", location: 'home', status: 'Played', completions: 23, attempts: 38, passingYards: 318, passingTouchdowns: 2, interceptions: 3, defenseTier: 'Average', passEfficiencyDefenseRank: 42 },
        { gameNumber: 13, date: '12/19', opponent: "Alabama", location: 'home', status: 'Played', completions: 26, attempts: 41, passingYards: 307, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 9 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.593, yardsPerAttempt: 6.83, passingTouchdowns: 4, interceptions: 5 },
        { label: "vs FBS winning teams", completionPct: 0.587, yardsPerAttempt: 6.78, passingTouchdowns: 8, interceptions: 9 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.598, yardsPerAttempt: 7.29, passingTouchdowns: 7, interceptions: 5 },
        { label: "Third down", completionPct: 0.593, yardsPerAttempt: 8.64, passingTouchdowns: 3, interceptions: 4 },
        { label: "Third and 7+", completionPct: 0.651, yardsPerAttempt: 10.89, passingTouchdowns: 2, interceptions: 2 },
        { label: "Road / neutral", completionPct: 0.613, yardsPerAttempt: 6.21, passingTouchdowns: 2, interceptions: 5 },
      ],
      redZone2025: { attempts: 20, completionPct: 0.65, passingTouchdowns: 6, interceptions: 0 },
      explosive2025: { comp15: 72, share15: 0.291, comp25: 23, share25: 0.093 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/522/1180523/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/522/1180523/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/522/1180523/passing/split.html' },
      ],
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
    
      gameLog2025: [
        { gameNumber: 1, date: '08/28', opponent: "Buffalo", location: 'home', status: 'Played', completions: 19, attempts: 35, passingYards: 290, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Strong', passEfficiencyDefenseRank: 23 },
        { gameNumber: 2, date: '09/06', opponent: "Northwestern State", location: 'home', status: 'Played', completions: 8, attempts: 9, passingYards: 139, passingTouchdowns: 1, interceptions: 0, defenseTier: 'FCS', passEfficiencyDefenseRank: null },
        { gameNumber: 3, date: '09/13', opponent: "California", location: 'away', status: 'Played', completions: 19, attempts: 32, passingYards: 205, passingTouchdowns: 1, interceptions: 1, defenseTier: 'Average', passEfficiencyDefenseRank: 45 },
        { gameNumber: 4, date: '09/27', opponent: "Rutgers", location: 'home', status: 'Played', completions: 31, attempts: 41, passingYards: 324, passingTouchdowns: 3, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 76 },
        { gameNumber: 5, date: '10/04', opponent: "Ohio State", location: 'away', status: 'Played', completions: 15, attempts: 26, passingYards: 94, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 1 },
        { gameNumber: 6, date: '10/11', opponent: "Purdue", location: 'home', status: 'Played', completions: 21, attempts: 45, passingYards: 232, passingTouchdowns: 2, interceptions: 1, defenseTier: 'Weak', passEfficiencyDefenseRank: 110 },
        { gameNumber: 7, date: '10/17', opponent: "Nebraska", location: 'home', status: 'Played', completions: 16, attempts: 20, passingYards: 153, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 3 },
        { gameNumber: 8, date: '10/25', opponent: "Iowa", location: 'away', status: 'Played', completions: 16, attempts: 28, passingYards: 109, passingTouchdowns: 0, interceptions: 3, defenseTier: 'Strong', passEfficiencyDefenseRank: 10 },
        { gameNumber: 9, date: '11/01', opponent: "Michigan State", location: 'home', status: 'Played', completions: 26, attempts: 39, passingYards: 197, passingTouchdowns: 0, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 93 },
        { gameNumber: 10, date: '11/14', opponent: "Oregon", location: 'away', status: 'Played', completions: 19, attempts: 32, passingYards: 138, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 4 },
        { gameNumber: 11, date: '11/22', opponent: "Northwestern", location: 'away', status: 'Played', completions: 20, attempts: 30, passingYards: 264, passingTouchdowns: 4, interceptions: 0, defenseTier: 'Strong', passEfficiencyDefenseRank: 30 },
        { gameNumber: 12, date: '11/29', opponent: "Wisconsin", location: 'home', status: 'Played', completions: 18, attempts: 24, passingYards: 90, passingTouchdowns: 1, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 62 },
        { gameNumber: 13, date: '12/26', opponent: "New Mexico", location: 'neutral', status: 'Played', completions: 18, attempts: 28, passingYards: 147, passingTouchdowns: 2, interceptions: 0, defenseTier: 'Average', passEfficiencyDefenseRank: 86 },
      ],
      opponentContext2025: [
        { label: "vs AP-ranked", completionPct: 0.581, yardsPerAttempt: 3.97, passingTouchdowns: 1, interceptions: 3 },
        { label: "vs FBS winning teams", completionPct: 0.628, yardsPerAttempt: 5.66, passingTouchdowns: 9, interceptions: 4 },
      ],
      situationalSplits2025: [
        { label: "Second half / OT", completionPct: 0.656, yardsPerAttempt: 6.2, passingTouchdowns: 11, interceptions: 4 },
        { label: "Third down", completionPct: 0.575, yardsPerAttempt: 5.41, passingTouchdowns: 4, interceptions: 2 },
        { label: "Third and 7+", completionPct: 0.5, yardsPerAttempt: 5.39, passingTouchdowns: 2, interceptions: 2 },
        { label: "Road / neutral", completionPct: 0.608, yardsPerAttempt: 5.44, passingTouchdowns: 8, interceptions: 4 },
      ],
      redZone2025: { attempts: 54, completionPct: 0.63, passingTouchdowns: 13, interceptions: 0 },
      explosive2025: { comp15: 44, share15: 0.179, comp25: 15, share25: 0.061 },
      statsSources: [
        { label: 'Game-by-game passing log', url: 'https://cfbstats.com/2025/player/428/50216959/passing/gamelog.html' },
        { label: 'Situational splits', url: 'https://cfbstats.com/2025/player/428/50216959/passing/situational.html' },
        { label: 'Competition (opponent) splits', url: 'https://cfbstats.com/2025/player/428/50216959/passing/split.html' },
      ],
    },
  },
}


/* ---- Situational / game-log helpers ----------------------------------- */

export const QB_TIER_ORDER: QbDefenseTier[] = ['Strong', 'Average', 'Weak', 'FCS']

export const QB_TIER_RANK_LABEL: Record<QbDefenseTier, string> = {
  Strong: 'FBS pass D 1-34',
  Average: 'FBS pass D 35-102',
  Weak: 'FBS pass D 103-136',
  FCS: 'FCS opponent',
}

/** True when a split covers fewer than three games. */
export function isThinQbSample(games: number): boolean {
  return games < 3
}

/** Aggregate the played game log into pass-defense-tier splits, strongest first. */
export function qbTierSplits(profile: QbStatProfile): QbTierSplit[] {
  const log = profile.gameLog2025
  if (!log) return []
  const by = new Map<QbDefenseTier, QbTierSplit>()
  for (const g of log) {
    if (g.status !== 'Played' || g.attempts == null) continue
    const cur = by.get(g.defenseTier) ?? { tier: g.defenseTier, games: 0, completions: 0, attempts: 0, passingYards: 0, passingTouchdowns: 0, interceptions: 0 }
    cur.games += 1
    cur.completions += g.completions ?? 0
    cur.attempts += g.attempts ?? 0
    cur.passingYards += g.passingYards ?? 0
    cur.passingTouchdowns += g.passingTouchdowns ?? 0
    cur.interceptions += g.interceptions ?? 0
    by.set(g.defenseTier, cur)
  }
  return QB_TIER_ORDER.map((t) => by.get(t)).filter((s): s is QbTierSplit => !!s)
}

/** Count of played games in the log (DNP excluded). */
export function playedGames(profile: QbStatProfile): number {
  return (profile.gameLog2025 ?? []).filter((g) => g.status === 'Played').length
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
