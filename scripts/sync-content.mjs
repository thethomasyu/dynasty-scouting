#!/usr/bin/env node
/**
 * Syncs repository-local profile content from the full Dynasty Scouting
 * project. Optional: the repo already contains a committed snapshot of every
 * profile, so this script is only useful when the app folder lives inside
 * the full project and a profile has been updated.
 *
 * It copies:
 *   ../02_Player Research/2027/WR/<Canonical Name>/Early Scouting Profile.md
 * into:
 *   src/content/2027/wr/<slug>.md
 *
 * Run from the repo root:  npm run sync-content
 * If the research folder is not found (standalone repo), it exits politely.
 */
import { copyFileSync, existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const researchDir = resolve(root, '..', '02_Player Research', '2027', 'WR')

/** slug -> canonical research folder name */
const PLAYERS = {
  'amari-thomas': 'Amari Thomas',
  'bryant-wesco-jr': 'Bryant Wesco Jr',
  'cam-coleman': 'Cam Coleman',
  'charlie-becker': 'Charlie Becker',
  'cooper-barkate': 'Cooper Barkate',
  'deuce-robinson': 'Deuce Robinson',
  'devin-mccuin': 'Devin McCuin',
  'eric-singleton-jr': 'Eric Singleton Jr',
  'jaden-greathouse': 'Jaden Greathouse',
  'jeremiah-smith': 'Jeremiah Smith',
  'jordan-faison': 'Jordan Faison',
  'kenny-johnson': 'Kenny Johnson',
  'kj-duff': 'KJ Duff',
  'mario-craver': 'Mario Craver',
  'mike-matthews': 'Mike Matthews',
  'nyck-harbor': 'Nyck Harbor',
  'nick-marsh': 'Nick Marsh',
  'omarion-miller': 'Omarion Miller',
  'reed-harris': 'Reed Harris',
  'ryan-coleman-williams': 'Ryan Coleman Williams',
  'ryan-wingo': 'Ryan Wingo',
  'tj-moore': 'TJ Moore',
  'wyatt-young': 'Wyatt Young',
}

if (!existsSync(researchDir)) {
  console.log('No research folder found at:')
  console.log('  ' + researchDir)
  console.log('That is expected in the standalone repository. The committed')
  console.log('content snapshot in src/content/ is already complete.')
  process.exit(0)
}

let copied = 0
let skipped = 0
for (const [slug, folder] of Object.entries(PLAYERS)) {
  const src = join(researchDir, folder, 'Early Scouting Profile.md')
  const dest = join(root, 'src', 'content', '2027', 'wr', `${slug}.md`)
  if (!existsSync(src)) {
    console.warn(`missing profile, skipped: ${folder}`)
    skipped++
    continue
  }
  const before = existsSync(dest) ? readFileSync(dest, 'utf8') : null
  const after = readFileSync(src, 'utf8')
  if (before === after) {
    skipped++
    continue
  }
  copyFileSync(src, dest)
  console.log(`updated: ${slug}.md`)
  copied++
}
console.log(`done. ${copied} updated, ${skipped} unchanged or missing.`)
