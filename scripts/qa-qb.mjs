#!/usr/bin/env node
/**
 * QA for the 2027 QB integration. Pure string/structure checks against the
 * source files, so it runs with plain node and no build step.
 *
 *   node scripts/qa-qb.mjs
 *
 * Verifies: the 12 slugs exist as QB records, each has a content profile, a
 * registered presentation and a stats record; every module `expands` heading
 * exists in the matching markdown; schools are correct; Darian Mensah is spelled
 * correctly everywhere; and no QB slug leaked into the WR content folder.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'src')

const QB = [
  ['arch-manning', 'Arch Manning', 'Texas'],
  ['dante-moore', 'Dante Moore', 'Oregon'],
  ['lanorris-sellers', 'LaNorris Sellers', 'South Carolina'],
  ['cj-carr', 'CJ Carr', 'Notre Dame'],
  ['drew-mestemaker', 'Drew Mestemaker', 'Oklahoma State'],
  ['darian-mensah', 'Darian Mensah', 'Miami'],
  ['trinidad-chambliss', 'Trinidad Chambliss', 'Ole Miss'],
  ['jayden-maiava', 'Jayden Maiava', 'USC'],
  ['julian-sayin', 'Julian Sayin', 'Ohio State'],
  ['sam-leavitt', 'Sam Leavitt', 'LSU'],
  ['john-mateer', 'John Mateer', 'Oklahoma'],
  ['drake-lindsey', 'Drake Lindsey', 'Minnesota'],
]

const norm = (s) => s.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim()

let fails = 0
let checks = 0
const fail = (m) => { fails++; console.log('  FAIL: ' + m) }
const ok = () => { checks++ }

const playersTs = readFileSync(join(src, 'data', 'qbPlayers.ts'), 'utf8')
const statsTs = readFileSync(join(src, 'data', 'stats', 'qbStats2027.ts'), 'utf8')
const presIndex = readFileSync(join(src, 'data', 'presentation', 'index.ts'), 'utf8')
const wrPlayersTs = readFileSync(join(src, 'data', 'players.ts'), 'utf8')

// Spelling: no "Darien" anywhere under src.
function walk(dir, acc = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, acc)
    else acc.push(p)
  }
  return acc
}
const darien = walk(src).filter((f) => /Darien/.test(readFileSync(f, 'utf8')))
if (darien.length) fail(`"Darien" found in: ${darien.map((f) => f.replace(root, '.')).join(', ')}`); else ok()

for (const [slug, name, school] of QB) {
  const label = `[${slug}]`

  // record present and QB + provisional
  const recRe = new RegExp(`slug: '${slug}'[\\s\\S]*?thesis:`, 'm')
  const rec = playersTs.match(recRe)?.[0] ?? ''
  if (!rec) fail(`${label} not found in qbPlayers.ts`); else ok()
  if (rec && !/position: 'QB'/.test(rec)) fail(`${label} not position QB`); else ok()
  if (rec && !/provisional: true/.test(rec)) fail(`${label} missing provisional flag`); else ok()
  if (rec && !rec.includes(`name: '${name}'`)) fail(`${label} name mismatch`); else ok()
  if (rec && !rec.includes(`school: '${school}'`)) fail(`${label} school mismatch (expected ${school})`); else ok()

  // content profile
  const md = join(src, 'content', '2027', 'qb', `${slug}.md`)
  if (!existsSync(md)) { fail(`${label} missing content md`); continue }
  ok()
  const mdText = readFileSync(md, 'utf8')
  if (!mdText.startsWith(`# ${name}`)) fail(`${label} md title mismatch`); else ok()
  const headings = new Set([...mdText.matchAll(/^##\s+(.+)$/gm)].map((m) => norm(m[1])))

  // must NOT exist in WR content dir
  if (existsSync(join(src, 'content', '2027', 'wr', `${slug}.md`))) fail(`${label} also present in WR content`); else ok()

  // presentation registered + file + expands headings resolve
  if (!presIndex.includes(`'${slug}':`)) fail(`${label} not registered in presentation index`); else ok()
  const presFile = join(src, 'data', 'presentation', `${slug}.ts`)
  if (!existsSync(presFile)) { fail(`${label} missing presentation file`); continue }
  ok()
  const presText = readFileSync(presFile, 'utf8')
  const expands = [...presText.matchAll(/expands:\s*\[([^\]]*)\]/g)].flatMap((m) =>
    [...m[1].matchAll(/'((?:[^'\\]|\\')*)'/g)].map((x) => norm(x[1].replace(/\\'/g, "'"))),
  )
  for (const h of expands) {
    if (!headings.has(h)) fail(`${label} expands heading not found in md: "${h}"`); else ok()
  }
  // has exactly 7 trait categories
  const traitCount = (presText.match(/category:/g) || []).length
  if (traitCount !== 7) fail(`${label} expected 7 traits, found ${traitCount}`); else ok()

  // stats record
  if (!statsTs.includes(`'${slug}': {`)) fail(`${label} missing stats record`); else ok()
}

// no QB slug is present in the WR players list
for (const [slug] of QB) {
  if (new RegExp(`slug: '${slug}'`).test(wrPlayersTs.split('const wrPlayers')[1]?.split('export const players')[0] ?? '')) {
    fail(`[${slug}] appears inside wrPlayers`)
  } else ok()
}

// Mensah spelled correctly, present
if (!/Darian Mensah/.test(playersTs)) fail('Darian Mensah not found in qbPlayers.ts'); else ok()

console.log(`\nqa-qb: ${checks} checks passed, ${fails} failed.`)
process.exit(fails ? 1 : 0)
