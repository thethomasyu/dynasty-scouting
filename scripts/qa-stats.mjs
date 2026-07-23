// QA for the WR statistics integration. Dependency-free: reads the verified
// export as JSON and cross-checks it against the app player manifest.
//
// Checks, per player:
//   1. the app slug resolves to exactly one statistics record
//   2. the four pass-defense tiers reconcile to the 2025 season totals
//   3. career seasons are chronological
//   4. played game-log games equal the 2025 games total (DNP excluded)
//   5. DNP games carry null production (never zero)
//   6. at least one source URL is present
// Plus: the three known app/source name mappings are preserved.
//
// Run: node scripts/qa-stats.mjs   (exit code 1 on any failure)

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const statsPath = resolve(here, '../src/data/stats/wrStats2027.ts')
const playersPath = resolve(here, '../src/data/players.ts')

function loadStats() {
  const src = readFileSync(statsPath, 'utf8')
  const start = src.indexOf('{', src.indexOf('WrStatsDataset = '))
  const end = src.lastIndexOf('} as const')
  if (start < 0 || end < 0) throw new Error('Could not locate the stats object literal.')
  return JSON.parse(src.slice(start, end + 1))
}

function appSlugs() {
  const src = readFileSync(playersPath, 'utf8')
  const slugs = []
  const re = /slug:\s*'([^']+)'/g
  let m
  // The WR player array is everything before the held list (wrHeld); stop there
  // so held prospects and the imported QB manifest are excluded.
  const cut = src.indexOf('wrHeld')
  const scope = cut > 0 ? src.slice(0, cut) : src
  while ((m = re.exec(scope)) !== null) slugs.push(m[1])
  return slugs
}

const NAME_MAP = {
  'ryan-coleman-williams': 'Ryan Williams',
  'amari-thomas': 'Amare Thomas',
  'deuce-robinson': 'Duce Robinson',
}

const data = loadStats()
const players = data.players
const slugs = appSlugs()

let failures = 0
const fail = (msg) => {
  failures++
  console.log('  FAIL: ' + msg)
}

console.log(`App WR profiles: ${slugs.length}`)
console.log(`Stats records:  ${Object.keys(players).length}\n`)

for (const slug of slugs) {
  const p = players[slug]
  if (!p) {
    fail(`${slug} has no statistics record`)
    continue
  }
  const s = p.summary2025
  const tiers = p.opponentSplits2025.passDefenseTier

  const acc = tiers.reduce(
    (a, t) => ({
      games: a.games + t.games,
      rec: a.rec + t.receptions,
      yds: a.yds + t.receivingYards,
      td: a.td + t.receivingTouchdowns,
    }),
    { games: 0, rec: 0, yds: 0, td: 0 },
  )
  if (acc.games !== s.games) fail(`${slug} tier games ${acc.games} != season ${s.games}`)
  if (acc.rec !== s.receptions) fail(`${slug} tier rec ${acc.rec} != season ${s.receptions}`)
  if (acc.yds !== s.receivingYards) fail(`${slug} tier yds ${acc.yds} != season ${s.receivingYards}`)
  if (acc.td !== s.receivingTouchdowns) fail(`${slug} tier td ${acc.td} != season ${s.receivingTouchdowns}`)

  const seasons = p.careerSeasons.map((c) => c.season)
  for (let i = 1; i < seasons.length; i++) {
    if (seasons[i] < seasons[i - 1]) fail(`${slug} career seasons not chronological: ${seasons}`)
  }

  const played = p.gameLog2025.filter((g) => g.status === 'Played').length
  if (played !== s.games) fail(`${slug} played log games ${played} != season games ${s.games}`)

  for (const g of p.gameLog2025) {
    if (g.status === 'DNP' && (g.receivingYards !== null || g.receptions !== null || g.receivingTouchdowns !== null)) {
      fail(`${slug} DNP game ${g.gameNumber} carries non-null production`)
    }
  }

  if (!p.sources.some((src) => typeof src.url === 'string' && src.url.length > 0)) {
    fail(`${slug} has no source URL`)
  }

  if (NAME_MAP[slug] && p.sourceName !== NAME_MAP[slug]) {
    fail(`${slug} source name "${p.sourceName}" != expected "${NAME_MAP[slug]}"`)
  }
}

// Every stats record should correspond to an app profile.
for (const slug of Object.keys(players)) {
  if (!slugs.includes(slug)) fail(`stats record ${slug} has no app profile`)
}

console.log('')
if (failures === 0) {
  console.log(`All checks passed for ${slugs.length} profiles.`)
  process.exit(0)
} else {
  console.log(`${failures} check(s) failed.`)
  process.exit(1)
}
