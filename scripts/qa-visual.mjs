/* QA harness for the visual-first player pages. Renders every profile from
   the production build and checks: modules render, long-form starts
   collapsed, section expansion and full-report mode work, no canonical
   paragraph is unreachable (content-loss audit against src/content), no
   horizontal overflow across widths, zero console errors.
   Setup: `npm i --no-save playwright-core`, `npm run preview`, then
   `node scripts/qa-visual.mjs`. */
import { chromium } from 'playwright-core'
import { mkdirSync, readFileSync, readdirSync } from 'node:fs'

const BASE = process.env.QA_BASE ?? 'http://localhost:4173'
const OUT = process.env.QA_SHOTS ?? 'qa-shots-visual'
mkdirSync(OUT, { recursive: true })

const slugs = readdirSync('src/content/2027/wr').filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))

/** Canonical paragraphs per slug, normalized the way the page renders them. */
function paragraphsOf(slug) {
  const raw = readFileSync(`src/content/2027/wr/${slug}.md`, 'utf8').replace(/\r\n/g, '\n')
  const out = []
  let para = []
  let sawTitle = false
  for (const line of raw.split('\n')) {
    const t = line.trim()
    if (!t) {
      if (para.length) out.push(para.join(' ')), (para = [])
      continue
    }
    if (t.startsWith('# ') && !sawTitle) {
      sawTitle = true
      continue
    }
    if (t.startsWith('## ')) {
      if (para.length) out.push(para.join(' ')), (para = [])
      continue
    }
    para.push(t)
  }
  if (para.length) out.push(para.join(' '))
  return out
    .map((p) => p.replace(/\*/g, '').replace(/\s+/g, ' ').trim())
    .filter((p) => p.length > 0)
}

const norm = (s) => s.replace(/\*/g, '').replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim()

const browser = await chromium.launch(
  process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {},
)
const failures = []
const note = (ok, msg) => {
  if (!ok) failures.push(msg)
}

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const consoleErrors = []
page.on('console', (m) => {
  if (m.type() === 'error') consoleErrors.push(m.text())
})
page.on('pageerror', (e) => consoleErrors.push(String(e)))

let totalParas = 0
for (const slug of slugs) {
  await page.goto(`${BASE}/#/2027/wr/${slug}`, { waitUntil: 'networkidle' })
  await page.waitForSelector('.vprofile')

  const shape = await page.evaluate(() => ({
    traitRows: document.querySelectorAll('.trow').length,
    watch: !!document.querySelector('.wb__grid'),
    movement: !!document.querySelector('.mv'),
    history: !!document.querySelector('.eval-history'),
    reportBar: !!document.querySelector('.report-bar__btn'),
    toggles: document.querySelectorAll('.xp__toggle').length,
    openPanels: document.querySelectorAll('.xp__panel[data-open]').length,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    heroName: document.querySelector('.p-hero__name')?.textContent?.trim() ?? '',
  }))
  note(shape.traitRows === 7, `${slug}: expected 7 trait rows, got ${shape.traitRows}`)
  note(shape.watch, `${slug}: watch board missing`)
  note(shape.movement, `${slug}: evaluation movement missing`)
  note(shape.history, `${slug}: evaluation history missing`)
  note(shape.reportBar, `${slug}: full-report control missing`)
  note(shape.toggles > 0, `${slug}: no expansion toggles`)
  note(shape.openPanels === 0, `${slug}: ${shape.openPanels} expansions open on load (must be collapsed)`)
  note(shape.overflow <= 0, `${slug}: horizontal overflow ${shape.overflow}px at 1440`)

  // Section-level expansion: first toggle opens inline, aria wired, no route change.
  const before = await page.evaluate(() => location.hash)
  await page.click('.xp__toggle')
  const xp = await page.evaluate(() => {
    const t = document.querySelector('.xp__toggle')
    return {
      expanded: t?.getAttribute('aria-expanded'),
      controls: t?.getAttribute('aria-controls'),
      panelOpen: !!document.querySelector('.xp__panel[data-open]'),
      hash: location.hash,
    }
  })
  note(xp.expanded === 'true', `${slug}: toggle aria-expanded not true after click`)
  note(!!xp.controls, `${slug}: toggle missing aria-controls`)
  note(xp.panelOpen, `${slug}: panel did not open`)
  note(xp.hash === before, `${slug}: route changed on expansion`)
  await page.click('.xp__toggle')

  // Full-report mode: every panel opens, then the content-loss audit runs.
  await page.click('.report-bar__btn')
  await page.waitForTimeout(450)
  const open = await page.evaluate(() => ({
    panels: document.querySelectorAll('.xp__panel').length,
    opened: document.querySelectorAll('.xp__panel[data-open]').length,
    label: document.querySelector('.report-bar__btn')?.textContent?.trim(),
  }))
  note(open.panels === open.opened, `${slug}: full report opened ${open.opened}/${open.panels} panels`)
  note(open.label === 'Collapse full report', `${slug}: full-report button label "${open.label}"`)

  const bodyText = norm(await page.evaluate(() => document.body.innerText))
  const paras = paragraphsOf(slug)
  totalParas += paras.length
  for (const p of paras) {
    const probe = norm(p)
    const tail = probe.slice(-60)
    const head = probe.slice(0, 60)
    if (!bodyText.includes(tail) && !bodyText.includes(head)) {
      failures.push(`${slug}: canonical paragraph unreachable: "${probe.slice(0, 70)}..."`)
    }
  }

  // Collapse full report again.
  await page.click('.report-bar__btn')
}

// ---- Responsive sweep ----
const widths = [
  { w: 1440, h: 900 },
  { w: 1024, h: 800 },
  { w: 768, h: 900 },
  { w: 390, h: 844 },
  { w: 360, h: 800 },
]
const deepFive = ['jeremiah-smith', 'cam-coleman', 'bryant-wesco-jr', 'nick-marsh', 'charlie-becker']
const sweep = [...new Set([...deepFive, 'nyck-harbor', 'kenny-johnson', 'mario-craver', 'reed-harris', 'eric-singleton-jr'])]
for (const { w, h } of widths) {
  const p2 = await browser.newPage({ viewport: { width: w, height: h } })
  const targets = w === 1440 || w === 390 ? slugs : sweep
  for (const slug of targets) {
    await p2.goto(`${BASE}/#/2027/wr/${slug}`, { waitUntil: 'networkidle' })
    await p2.waitForSelector('.vprofile')
    await p2.waitForTimeout(150)
    const overflow = await p2.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
    note(overflow <= 0, `${slug}: horizontal overflow ${overflow}px at ${w}`)
  }
  await p2.close()
}

console.log(`checked ${slugs.length} profiles, ${totalParas} canonical paragraphs`)
console.log(consoleErrors.length ? `CONSOLE ERRORS:\n${consoleErrors.join('\n')}` : 'console clean')
console.log(failures.length ? `FAILURES (${failures.length}):\n${failures.join('\n')}` : 'ALL CHECKS PASSED')
await browser.close()
process.exit(failures.length || consoleErrors.length ? 1 : 0)
