// QA for the 2027 QB statistics depth layer. Dependency-free: evaluates the
// verified data object and cross-checks the game logs and tier splits against
// the verified 2025 line.
//
// Checks, per QB:
//   1. game-log played totals (games, comp, att, yds, TD, INT) == the 2025 line
//   2. pass-defense-tier splits reconcile to the 2025 line
//   3. every game carries a valid tier; a numeric rank matches its tier band
//      (Strong 1-34, Average 35-102, Weak 103-136); a null rank is only FCS or Weak
//   4. DNP games carry null production (never zero)
//   5. situational, opponent-context, red-zone, explosive and source fields present
//   6. completion-percentage split fields are stored as fractions (0-1)
//
// Run: node scripts/qa-qb-stats.mjs   (exit code 1 on any failure)

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const statsPath = resolve(here, '../src/data/stats/qbStats2027.ts')

function loadDataset() {
  const src = readFileSync(statsPath, 'utf8')
  const marker = 'qbStats2027: QbStatsDataset = '
  const start = src.indexOf('{', src.indexOf(marker))
  if (start < 0) throw new Error('Could not locate the qbStats2027 object literal.')
  let depth = 0
  let end = -1
  for (let i = start; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }
  const literal = src.slice(start, end + 1)
  // The data object is plain JS values (strings, numbers, null, arrays, objects).
  return new Function(`return (${literal})`)()
}

const data = loadDataset()
const players = data.players
const slugs = Object.keys(players)

let fails = 0
const fail = (m) => { fails++; console.log('  FAIL: ' + m) }

const bandTier = (r) => (r <= 34 ? 'Strong' : r <= 102 ? 'Average' : 'Weak')

console.log(`QB stats records: ${slugs.length}\n`)

for (const slug of slugs) {
  const p = players[slug]
  const s = p.season2025
  const log = p.gameLog2025 || []
  if (!log.length) { fail(`${slug} has no game log`); continue }

  const played = log.filter((g) => g.status === 'Played')
  const sum = (k) => played.reduce((n, g) => n + (g[k] ?? 0), 0)
  const line = {
    games: played.length,
    completions: sum('completions'),
    attempts: sum('attempts'),
    passingYards: sum('passingYards'),
    passingTouchdowns: sum('passingTouchdowns'),
    interceptions: sum('interceptions'),
  }
  for (const k of Object.keys(line)) {
    if (line[k] !== s[k]) fail(`${slug} game-log ${k} ${line[k]} != season ${s[k]}`)
  }

  // tier aggregation
  const byTier = {}
  for (const g of played) {
    const t = (byTier[g.defenseTier] ||= { games: 0, completions: 0, attempts: 0, passingYards: 0, passingTouchdowns: 0, interceptions: 0 })
    t.games++; t.completions += g.completions; t.attempts += g.attempts
    t.passingYards += g.passingYards; t.passingTouchdowns += g.passingTouchdowns; t.interceptions += g.interceptions
  }
  const agg = Object.values(byTier)
  const tsum = (k) => agg.reduce((n, t) => n + t[k], 0)
  if (tsum('games') !== s.games) fail(`${slug} tier games ${tsum('games')} != ${s.games}`)
  if (tsum('completions') !== s.completions) fail(`${slug} tier comp mismatch`)
  if (tsum('passingYards') !== s.passingYards) fail(`${slug} tier yards mismatch`)
  if (tsum('passingTouchdowns') !== s.passingTouchdowns) fail(`${slug} tier TD mismatch`)
  if (tsum('interceptions') !== s.interceptions) fail(`${slug} tier INT mismatch`)

  for (const g of log) {
    if (!['Strong', 'Average', 'Weak', 'FCS'].includes(g.defenseTier)) fail(`${slug} ${g.opponent} invalid tier`)
    if (g.passEfficiencyDefenseRank != null) {
      if (bandTier(g.passEfficiencyDefenseRank) !== g.defenseTier) fail(`${slug} ${g.opponent} rank ${g.passEfficiencyDefenseRank} != tier ${g.defenseTier}`)
    } else if (g.defenseTier !== 'FCS' && g.defenseTier !== 'Weak') {
      fail(`${slug} ${g.opponent} null rank but tier ${g.defenseTier}`)
    }
    if (g.status === 'DNP' && (g.completions !== null || g.attempts !== null || g.passingYards !== null)) {
      fail(`${slug} DNP game ${g.gameNumber} carries non-null production`)
    }
  }

  if (!(p.situationalSplits2025 && p.situationalSplits2025.length)) fail(`${slug} missing situationalSplits2025`)
  if (!(p.opponentContext2025 && p.opponentContext2025.length)) fail(`${slug} missing opponentContext2025`)
  if (!p.redZone2025) fail(`${slug} missing redZone2025`)
  if (!p.explosive2025) fail(`${slug} missing explosive2025`)
  if (!(p.statsSources && p.statsSources.length)) fail(`${slug} missing statsSources`)

  for (const r of [...(p.situationalSplits2025 || []), ...(p.opponentContext2025 || [])]) {
    if (r.completionPct != null && r.completionPct > 1.001) fail(`${slug} split "${r.label}" completionPct not a fraction`)
  }
}

console.log('')
if (fails === 0) {
  console.log(`All checks passed for ${slugs.length} QB stat records.`)
  process.exit(0)
} else {
  console.log(`${fails} check(s) failed.`)
  process.exit(1)
}
