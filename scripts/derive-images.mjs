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
const POSITIONS = ['WR', 'QB']
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

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
mkdirSync(OUT, { recursive: true })

let anySrc = false
for (const pos of POSITIONS) {
  const SRC = join(root, 'Assets', 'Players', '2027', pos)
  if (!existsSync(SRC)) continue
  anySrc = true
  for (const dir of readdirSync(SRC)) {
    const dirPath = join(SRC, dir)
    const headshot = join(dirPath, 'Headshot.png')
    const cutout = join(dirPath, 'Cutout.png')
    if (!existsSync(headshot) || !existsSync(cutout)) {
      // Empty QB folders are expected today; only warn when a master is half-present.
      if (existsSync(headshot) || existsSync(cutout)) {
        console.warn(`skipped ${pos}/${dir}: expected both Headshot.png and Cutout.png`)
      }
      continue
    }
    const slug = slugify(dir)
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
}
if (!anySrc) {
  console.error('No master image folders found under Assets/Players/2027/')
  process.exit(1)
}
console.log('done.')
