#!/usr/bin/env node
/**
 * Regenerates the small webp images the app actually ships from the
 * transparent master PNGs in Assets/Players/. Optional: the derived webp
 * files are committed, so this only needs to run when a master image is
 * added or replaced.
 *
 * Requires the "sharp" package, which is deliberately not a project
 * dependency (it is a native module the app never needs at runtime):
 *
 *   npm install --no-save sharp
 *   npm run derive-images
 *
 * Masters are read only. Nothing in Assets/ is modified.
 */
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(root, 'Assets', 'Players', '2027', 'WR')
const OUT = join(root, 'src', 'assets', 'players')

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.log('The "sharp" package is not installed. Install it once with:')
  console.log('  npm install --no-save sharp')
  console.log('then re-run: npm run derive-images')
  process.exit(0)
}

if (!existsSync(SRC)) {
  console.error('No master images found at ' + SRC)
  process.exit(1)
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
mkdirSync(OUT, { recursive: true })

for (const dir of readdirSync(SRC)) {
  const slug = slugify(dir)
  const headshot = join(SRC, dir, 'Headshot.png')
  const cutout = join(SRC, dir, 'Cutout.png')
  if (!existsSync(headshot) || !existsSync(cutout)) {
    console.warn(`skipped ${dir}: expected Headshot.png and Cutout.png`)
    continue
  }
  await sharp(headshot)
    .resize({ width: 560, withoutEnlargement: true })
    .webp({ quality: 84, alphaQuality: 90 })
    .toFile(join(OUT, `${slug}-headshot.webp`))
  await sharp(cutout)
    .resize({ height: 1400, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90 })
    .toFile(join(OUT, `${slug}-cutout.webp`))
  console.log(`derived: ${slug}`)
}
console.log('done.')
