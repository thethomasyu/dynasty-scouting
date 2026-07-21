/* Optional QA harness: renders every player page from the production build
   and checks hero names, bio strip values, imagery, routes, search, prev/next,
   and horizontal overflow at 1440/1024/768/390/360. Not a project dependency;
   install the driver once with `npm i --no-save playwright-core`, run
   `npm run preview` in another terminal, then `node scripts/qa-heroes.mjs`.
   Point PW_CHROMIUM at a Chromium binary if the default is not found. */
import { chromium } from 'playwright-core'
import { mkdirSync } from 'node:fs'

const BASE = process.env.QA_BASE ?? 'http://localhost:4173'
const OUT = process.env.QA_SHOTS ?? 'qa-shots'
mkdirSync(OUT, { recursive: true })

const expectations = {
  'cooper-barkate': { name: 'Cooper Barkate', h: `6'1"`, w: '195', c: 'Redshirt Senior', age: null },
  'charlie-becker': { name: 'Charlie Becker', h: `6'4"`, w: '207', c: 'Junior', age: null },
  'cam-coleman': { name: 'Cam Coleman', h: `6'3"`, w: '204', c: 'Junior', age: '19.9' },
  'mario-craver': { name: 'Mario Craver', h: `5'9"`, w: '165', c: 'Junior', age: null },
  'kj-duff': { name: 'KJ Duff', h: `6'6"`, w: '225', c: 'Junior', age: '20.6' },
  'jordan-faison': { name: 'Jordan Faison', h: `5'11"`, w: '185', c: 'Senior', age: null },
  'jaden-greathouse': { name: 'Jaden Greathouse', h: `6'1"`, w: '215', c: 'Junior', age: '21.7' },
  'nyck-harbor': { name: 'Nyck Harbor', h: `6'5"`, w: '239', c: 'Senior', age: '21.0' },
  'reed-harris': { name: 'Reed Harris', h: `6'5"`, w: '217', c: 'Redshirt Junior', age: null },
  'kenny-johnson': { name: 'Kenny Johnson', h: `6'1"`, w: '200', c: 'Senior', age: null },
  'nick-marsh': { name: 'Nick Marsh', h: `6'3"`, w: '213', c: 'Junior', age: null },
  'mike-matthews': { name: 'Mike Matthews', h: `6'1"`, w: '198', c: 'Junior', age: '20.7' },
  'devin-mccuin': { name: 'Devin McCuin', h: `6'0"`, w: '189', c: 'Senior', age: '21.1' },
  'omarion-miller': { name: 'Omarion Miller', h: `6'2"`, w: '210', c: 'Senior', age: null },
  'tj-moore': { name: 'TJ Moore', h: `6'3"`, w: '200', c: 'Junior', age: '20.2' },
  'deuce-robinson': { name: 'Deuce Robinson', h: `6'6"`, w: '230', c: 'Senior', age: '21.5' },
  'eric-singleton-jr': { name: 'Eric Singleton Jr.', h: `5'10"`, w: '182', c: 'Senior', age: null },
  'jeremiah-smith': { name: 'Jeremiah Smith', h: `6'3"`, w: '223', c: 'Junior', age: '20.6' },
  'amari-thomas': { name: 'Amari Thomas', h: `6'0"`, w: '205', c: 'Senior', age: '20.6' },
  'bryant-wesco-jr': { name: 'Bryant Wesco Jr.', h: `6'2"`, w: '195', c: 'Junior', age: '20.8' },
  'ryan-coleman-williams': { name: 'Ryan Coleman Williams', h: `6'0"`, w: '182', c: 'Junior', age: '19.4' },
  'ryan-wingo': { name: 'Ryan Wingo', h: `6'2"`, w: '214', c: 'Junior', age: '20.4' },
  'wyatt-young': { name: 'Wyatt Young', h: `6'0"`, w: '199', c: 'Junior', age: null },
}

const widths = [
  { w: 1440, h: 900 },
  { w: 1024, h: 800 },
  { w: 768, h: 900 },
  { w: 390, h: 844 },
  { w: 360, h: 800 },
]

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
)
const failures = []
const note = (ok, msg) => {
  if (!ok) failures.push(msg)
}

// ---- Per-player checks at 1440 ----
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const consoleErrors = []
page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text())
})
page.on('pageerror', (e) => consoleErrors.push(String(e)))

for (const [slug, exp] of Object.entries(expectations)) {
  await page.goto(`${BASE}/#/2027/wr/${slug}`, { waitUntil: 'networkidle' })
  await page.waitForSelector('.p-hero__name')
  const got = await page.evaluate(async () => {
    const q = (s) => document.querySelector(s)?.textContent?.trim() ?? null
    const vals = [...document.querySelectorAll('.bio-strip__value')].map((n) => {
      const clone = n.cloneNode(true)
      clone.querySelectorAll('.visually-hidden').forEach((x) => x.remove())
      return clone.textContent.trim()
    })
    const cut = document.querySelector('.p-hero__cut')
    try {
      if (cut) await cut.decode()
    } catch {}
    return {
      name: q('.p-hero__name'),
      kicker: q('.p-hero__kicker'),
      badge: q('.p-hero__badge'),
      thesis: q('.p-hero__thesis'),
      note: q('.bio-strip__note'),
      vals,
      cutoutLoaded: !!cut && cut.naturalWidth > 50 && !!cut.getAttribute('src'),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    }
  })
  note(got.name === exp.name, `${slug}: hero name "${got.name}" != "${exp.name}"`)
  note(got.vals.length === 4, `${slug}: expected 4 bio values, got ${got.vals.length}`)
  const [hv, wv, cv, av] = got.vals
  note(hv === exp.h, `${slug}: height "${hv}" != "${exp.h}"`)
  note(wv === `${exp.w} lbs*`, `${slug}: weight "${wv}" != "${exp.w} lbs*"`)
  note(cv === exp.c, `${slug}: class "${cv}" != "${exp.c}"`)
  if (exp.age === null) note(av === '—', `${slug}: age "${av}" != "—"`)
  else note(av === exp.age, `${slug}: age "${av}" != "${exp.age}"`)
  note(!!got.note && got.note.startsWith('*School-listed'), `${slug}: disclaimer note missing`)
  note(got.cutoutLoaded, `${slug}: cutout image failed to load`)
  note(got.overflow <= 0, `${slug}: horizontal overflow ${got.overflow}px at 1440`)
  note(!!got.badge && got.badge.includes('Early Evaluation'), `${slug}: stage badge missing`)
  note(!!got.thesis && got.thesis.length > 40, `${slug}: thesis missing`)
}

// ---- Corrected-name routes 404 the old slugs ----
for (const dead of ['nick-harbor', 'jayden-greathouse']) {
  await page.goto(`${BASE}/#/2027/wr/${dead}`, { waitUntil: 'networkidle' })
  const nf = await page.evaluate(() => !!document.querySelector('.notfound'))
  note(nf, `old slug ${dead} did not 404`)
}

// ---- Search finds corrected names ----
await page.goto(`${BASE}/#/2027/wr`, { waitUntil: 'networkidle' })
for (const [term, expName] of [
  ['Nyck', 'Nyck Harbor'],
  ['Harbor', 'Nyck Harbor'],
  ['Jaden', 'Jaden Greathouse'],
  ['Greathouse', 'Jaden Greathouse'],
]) {
  await page.fill('#player-search', term)
  await page.waitForTimeout(120)
  const names = await page.evaluate(() =>
    [...document.querySelectorAll('.player-card__name')].map((n) => n.textContent.trim()),
  )
  note(names.includes(expName), `search "${term}" -> ${JSON.stringify(names)} (missing ${expName})`)
}
await page.fill('#player-search', '')

// ---- Prev/next around the corrected players ----
const pn = async (slug) => {
  await page.goto(`${BASE}/#/2027/wr/${slug}`, { waitUntil: 'networkidle' })
  return page.evaluate(() => [...document.querySelectorAll('.pn-card__name')].map((n) => n.textContent.trim()))
}
note(JSON.stringify(await pn('nyck-harbor')) === JSON.stringify(['Jaden Greathouse', 'Reed Harris']), 'nyck-harbor neighbors wrong: ' + JSON.stringify(await pn('nyck-harbor')))
note(JSON.stringify(await pn('jaden-greathouse')) === JSON.stringify(['Jordan Faison', 'Nyck Harbor']), 'jaden-greathouse neighbors wrong: ' + JSON.stringify(await pn('jaden-greathouse')))

// ---- Screenshots + overflow at all widths ----
const shotPlayers = ['nyck-harbor', 'jaden-greathouse', 'jeremiah-smith', 'reed-harris', 'ryan-coleman-williams']
for (const { w, h } of widths) {
  const p2 = await browser.newPage({ viewport: { width: w, height: h } })
  for (const slug of shotPlayers) {
    await p2.goto(`${BASE}/#/2027/wr/${slug}`, { waitUntil: 'networkidle' })
    await p2.waitForSelector('.p-hero__cut')
    await p2.waitForTimeout(250)
    const overflow = await p2.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    note(overflow <= 0, `${slug}: horizontal overflow ${overflow}px at ${w}`)
    if (slug === 'nyck-harbor' || slug === 'jaden-greathouse' || (slug === 'jeremiah-smith' && (w === 1440 || w === 390))) {
      await p2.screenshot({ path: `${OUT}/${slug}-${w}.png`, clip: undefined, fullPage: false })
    }
  }
  await p2.close()
}

console.log(consoleErrors.length ? `CONSOLE ERRORS:\n${consoleErrors.join('\n')}` : 'console clean')
console.log(failures.length ? `FAILURES (${failures.length}):\n${failures.join('\n')}` : 'ALL CHECKS PASSED')
await browser.close()
process.exit(failures.length || consoleErrors.length ? 1 : 0)
