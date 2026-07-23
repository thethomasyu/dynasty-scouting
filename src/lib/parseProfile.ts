/**
 * Parses an Early Scouting Profile (markdown) into typed blocks the editorial
 * renderer can stage. The profiles are the canonical content; this parser
 * never rewrites text, it only reads structure:
 *
 *   # Title
 *   *Dateline in italics.*
 *   opening paragraphs ... then ## sections with paragraphs.
 *
 * Heading names vary across profiles by design, so nothing here keys on
 * specific heading strings. Per-player editorial treatments are declared in
 * the manifest and matched via normalizeHeading().
 */

export interface InlineRun {
  text: string
  bold?: boolean
  italic?: boolean
}

export type ProfileBlock =
  | { kind: 'heading'; text: string; id: string }
  | { kind: 'paragraph'; runs: InlineRun[] }

export interface ParsedProfile {
  title: string
  dateline: string
  /** Paragraph count before the first heading (used for lede styling). */
  openingCount: number
  blocks: ProfileBlock[]
  sections: Array<{ text: string; id: string }>
  words: number
}

/** Curly/straight apostrophes and stray spacing must never break matching. */
export function normalizeHeading(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

export function headingId(text: string): string {
  return normalizeHeading(text)
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
}

/** Minimal inline markdown: **bold** and *italic*. Everything else is text. */
export function parseInline(text: string): InlineRun[] {
  const runs: InlineRun[] = []
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push({ text: text.slice(last, m.index) })
    if (m[2] !== undefined) runs.push({ text: m[2], bold: true })
    else if (m[4] !== undefined) runs.push({ text: m[4], italic: true })
    last = re.lastIndex
  }
  if (last < text.length) runs.push({ text: text.slice(last) })
  return runs.length ? runs : [{ text }]
}

export function parseProfile(raw: string): ParsedProfile {
  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  let title = ''
  let dateline = ''
  const blocks: ProfileBlock[] = []
  const sections: Array<{ text: string; id: string }> = []
  const usedIds = new Set<string>()

  let paragraph: string[] = []
  let sawHeading = false
  let openingCount = 0

  const flush = () => {
    if (!paragraph.length) return
    const text = paragraph.join(' ').trim()
    paragraph = []
    if (!text) return
    // The italic dateline is the first full-italic paragraph after the title.
    if (!dateline && !sawHeading && /^\*[^*]+\*$/.test(text)) {
      dateline = text.slice(1, -1)
      return
    }
    blocks.push({ kind: 'paragraph', runs: parseInline(text) })
    if (!sawHeading) openingCount++
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      flush()
      continue
    }
    if (trimmed.startsWith('# ') && !title) {
      flush()
      title = trimmed.slice(2).trim()
      continue
    }
    if (trimmed.startsWith('## ')) {
      flush()
      sawHeading = true
      const text = trimmed.slice(3).trim()
      let id = headingId(text) || 'section'
      while (usedIds.has(id)) id = `${id}-x`
      usedIds.add(id)
      blocks.push({ kind: 'heading', text, id })
      sections.push({ text, id })
      continue
    }
    paragraph.push(trimmed)
  }
  flush()

  const words = blocks.reduce(
    (n, b) => (b.kind === 'paragraph' ? n + b.runs.reduce((w, r) => w + r.text.split(/\s+/).length, 0) : n),
    0,
  )

  return { title, dateline, openingCount, blocks, sections, words }
}

/** Lazy access to the repository-local profile content, both positions. */
const contentModules = import.meta.glob(['../content/2027/wr/*.md', '../content/2027/qb/*.md'], {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

export async function loadProfile(slug: string): Promise<ParsedProfile | null> {
  const loader =
    contentModules[`../content/2027/wr/${slug}.md`] ?? contentModules[`../content/2027/qb/${slug}.md`]
  if (!loader) return null
  const raw = await loader()
  return parseProfile(raw)
}
