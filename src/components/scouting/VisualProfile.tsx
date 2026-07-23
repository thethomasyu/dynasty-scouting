import { Fragment, useMemo, useState } from 'react'
import type { Player } from '../../data/types'
import type { ParsedProfile } from '../../lib/parseProfile'
import { normalizeHeading } from '../../lib/parseProfile'
import type { ModuleSpec, Presentation } from '../../data/presentation/types'
import { groupSections, Runs, type ProfileSection } from './Prose'
import LongformExpansion from './Expand'
import FootballDiagram from './diagrams'
import {
  CentralQuestion,
  DiagnosticFlow,
  EvaluationMovement,
  EvidenceComparison,
  HowHeWins,
  NFLRoleMap,
  ScoutingNugget,
  StatSpotlight,
  TraitReadout,
  WatchBoard,
} from './modules'
import EvalHistory from '../EvalHistory'
import StatsSection from './stats/StatsSection'
import QbStatsSection from './stats/QbStatsSection'
import { hasStats } from '../../data/stats'
import { hasQbStats } from '../../data/stats/qbStats2027'

/**
 * The visual-first player page body. Two levels:
 *
 * LEVEL ONE, open by default: the visual scouting experience. Snapshot,
 * mechanisms, diagrams, diagnostics, role map, watch board, movement.
 * Everything essential to the current evaluation is readable here.
 *
 * LEVEL TWO, on demand: Thomas's complete long-form analysis, attached
 * section by section to the modules it belongs with, expanding inline.
 * A global control opens the whole report at once. Any canonical section
 * a config forgets to map still renders in "The rest of the file", so no
 * analysis can silently disappear.
 */

interface Props {
  player: Player
  profile: ParsedProfile
  pres: Presentation
}

function moduleAnchor(m: ModuleSpec, i: number): { id: string; label: string } | null {
  const id = `vm-${i}`
  switch (m.kind) {
    case 'snapshot':
      return { id, label: 'Snapshot' }
    case 'howHeWins':
      return { id, label: m.title ?? 'How he wins' }
    case 'question':
      return { id, label: 'The question' }
    case 'roleMap':
    case 'fork':
      return { id, label: 'NFL translation' }
    case 'watch':
      return { id, label: 'Watch board' }
    case 'movement':
      return { id, label: 'What moves it' }
    default:
      return null
  }
}

/** Does this player have a statistics section, whatever the position? */
function playerHasStats(player?: Pick<Player, 'slug' | 'position'>): boolean {
  if (!player) return false
  return player.position === 'QB' ? hasQbStats(player.slug) : hasStats(player.slug)
}

/** Nav anchors for the rail: the visual chapters, not the markdown headings. */
export function computeAnchors(pres: Presentation, player?: Pick<Player, 'slug' | 'position'>): Array<{ text: string; id: string }> {
  const seen = new Set<string>()
  const out: Array<{ text: string; id: string }> = []
  pres.modules.forEach((m, i) => {
    const a = moduleAnchor(m, i)
    if (a && !seen.has(a.label)) {
      seen.add(a.label)
      out.push({ text: a.label, id: a.id })
    }
  })
  if (playerHasStats(player)) out.push({ text: 'Production', id: 'vm-stats' })
  out.push({ text: 'Evaluation history', id: 'eval-history' })
  return out
}

const VM_KICKER: Partial<Record<ModuleSpec['kind'], string>> = {
  snapshot: 'Scouting snapshot',
  howHeWins: 'The mechanisms',
  diagram: 'Football concept',
  flow: 'Diagnostic',
  compare: 'The evidence',
  roleMap: 'NFL translation',
  fork: 'NFL translation',
  watch: '2026 watch board',
  movement: 'What moves this evaluation',
}

export default function VisualProfile({ player, profile, pres }: Props) {
  const sections = useMemo(() => groupSections(profile.blocks), [profile])
  const byNorm = useMemo(() => {
    const m = new Map<string, ProfileSection>()
    for (const s of sections) if (s.heading) m.set(normalizeHeading(s.heading.text), s)
    return m
  }, [sections])

  // Which canonical sections each module expands, and which are claimed.
  const claimed = useMemo(() => {
    const set = new Set<string>()
    for (const m of pres.modules) {
      if ('expands' in m && m.expands) for (const h of m.expands) set.add(normalizeHeading(h))
      if (m.kind === 'fork' && player.fork) set.add(normalizeHeading(player.fork.heading))
      if (m.kind === 'medical') set.add(normalizeHeading(m.heading))
    }
    return set
  }, [pres, player.fork])

  const opening = sections[0]
  const ledeCount = pres.ledeCount ?? opening.paragraphs.length
  const ledeParas = opening.paragraphs.slice(0, ledeCount)
  const overflowParas = opening.paragraphs.slice(ledeCount)

  const restSections = useMemo(
    () => sections.slice(1).filter((s) => s.heading && !claimed.has(normalizeHeading(s.heading.text))),
    [sections, claimed],
  )

  // Expansion ids: one per expandable module + rest-zone entries.
  const allIds = useMemo(() => {
    const ids: string[] = []
    pres.modules.forEach((m, i) => {
      if ('expands' in m && m.expands?.length) ids.push(`xp-${i}`)
    })
    if (overflowParas.length) ids.push('xp-lede-rest')
    restSections.forEach((s) => ids.push(`xp-rest-${s.heading!.id}`))
    return ids
  }, [pres, overflowParas.length, restSections])

  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set())
  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  const allOpen = allIds.length > 0 && allIds.every((id) => openIds.has(id))
  const setAll = () => setOpenIds(allOpen ? new Set() : new Set(allIds))

  const sectionsFor = (headings?: string[]): ProfileSection[] =>
    (headings ?? []).map((h) => byNorm.get(normalizeHeading(h))).filter((s): s is ProfileSection => !!s)

  const expansionFor = (m: ModuleSpec, i: number) => {
    if (!('expands' in m) || !m.expands?.length) return null
    const secs = sectionsFor(m.expands)
    if (!secs.length) return null
    return <LongformExpansion id={`xp-${i}`} open={openIds.has(`xp-${i}`)} onToggle={toggle} sections={secs} />
  }

  const renderModule = (m: ModuleSpec, i: number) => {
    const anchor = moduleAnchor(m, i)
    const id = anchor?.id ?? `vm-${i}`
    const kicker = VM_KICKER[m.kind]
    const xp = expansionFor(m, i)

    switch (m.kind) {
      case 'snapshot':
        return (
          <section key={i} id={id} className="vm vm--snapshot reveal" aria-label="Scouting snapshot">
            <header className="vm__head">
              <p className="kicker vm__kicker">{kicker}</p>
            </header>
            <TraitReadout spec={m} traits={pres.traits} />
            {xp}
          </section>
        )
      case 'howHeWins':
        return (
          <section key={i} id={id} className="vm vm--hww reveal" aria-labelledby={`${id}-t`}>
            <header className="vm__head">
              <p className="kicker vm__kicker">{kicker}</p>
              <h2 id={`${id}-t`} className="vm__title">
                {m.title ?? 'How he wins'}
              </h2>
            </header>
            <HowHeWins spec={m} />
            {xp}
          </section>
        )
      case 'diagram':
        return (
          <section key={i} id={id} className="vm vm--diagram reveal" aria-labelledby={`${id}-t`}>
            <header className="vm__head">
              <p className="kicker vm__kicker">{m.kicker ?? kicker}</p>
              <h2 id={`${id}-t`} className="vm__title">
                {m.title}
              </h2>
              {m.lead && <p className="vm__lead">{m.lead}</p>}
            </header>
            <FootballDiagram type={m.diagram} />
            {m.caption && <p className="vm__caption">{m.caption}</p>}
            {xp}
          </section>
        )
      case 'nugget':
        return (
          <div key={i} className="vm vm--nugget reveal">
            <ScoutingNugget spec={m} />
          </div>
        )
      case 'stat':
        return (
          <section key={i} id={id} className="vm vm--stat reveal" aria-label={m.kicker ?? 'Statistic in context'}>
            <StatSpotlight spec={m} />
            {xp}
          </section>
        )
      case 'question':
        return (
          <section key={i} id={id} className="vm vm--question reveal" aria-label="The central question">
            <CentralQuestion spec={m} />
            {xp && <div className="vm__band-xp">{xp}</div>}
          </section>
        )
      case 'flow':
        return (
          <section key={i} id={id} className="vm vm--flow reveal" aria-labelledby={`${id}-t`}>
            <header className="vm__head">
              <p className="kicker vm__kicker">{m.kicker ?? kicker}</p>
              <h2 id={`${id}-t`} className="vm__title">
                {m.title}
              </h2>
            </header>
            <DiagnosticFlow spec={m} />
            {xp}
          </section>
        )
      case 'compare':
        return (
          <section key={i} id={id} className="vm vm--compare reveal" aria-labelledby={`${id}-t`}>
            <header className="vm__head">
              <p className="kicker vm__kicker">{m.kicker ?? kicker}</p>
              <h2 id={`${id}-t`} className="vm__title">
                {m.title}
              </h2>
            </header>
            <EvidenceComparison spec={m} />
            {xp}
          </section>
        )
      case 'roleMap':
        return (
          <section key={i} id={id} className="vm vm--rolemap reveal" aria-label="NFL role map">
            <header className="vm__head">
              <p className="kicker vm__kicker">{kicker}</p>
            </header>
            <NFLRoleMap spec={m} player={player} />
            {xp}
          </section>
        )
      case 'fork': {
        const f = player.fork
        if (!f) return null
        return (
          <section key={i} id={id} className="vm vm--fork reveal" aria-labelledby={`${id}-t`}>
            <div className="fork-shell">
              <p className="kicker vm__kicker">{kicker}</p>
              {normalizeHeading(f.heading) !== 'nfl translation' ? (
                <h2 id={`${id}-t`} className="vm__title">
                  {f.heading}
                </h2>
              ) : (
                <h2 id={`${id}-t`} className="visually-hidden">
                  {f.heading}
                </h2>
              )}
              <div className={`fork fork--${f.layout}`}>
                {f.intro?.map((t, k) => (
                  <p key={`i${k}`} className="fork__intro">
                    {t}
                  </p>
                ))}
                <div className="fork__paths">
                  {f.paths.map((p, k) => (
                    <div key={k} className="fork__path">
                      <p className="fork__label kicker">{p.label}</p>
                      <p className="fork__body">{p.body}</p>
                    </div>
                  ))}
                </div>
                {f.outro?.map((t, k) => (
                  <p key={`o${k}`} className="fork__outro">
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )
      }
      case 'medical': {
        const sec = byNorm.get(normalizeHeading(m.heading))
        if (!sec) return null
        return (
          <section key={i} className="vm vm--medical reveal" aria-labelledby={sec.heading!.id}>
            <div className="medical-panel">
              <p className="kicker medical-panel__kicker">Medical file</p>
              <h2 className="profile__h2" id={sec.heading!.id}>
                {sec.heading!.text}
              </h2>
              <div className="prose medical-panel__prose">
                {sec.paragraphs.map((p, k) => (
                  <p key={k}>
                    <Runs runs={p.runs} />
                  </p>
                ))}
              </div>
            </div>
          </section>
        )
      }
      case 'watch':
        return (
          <section key={i} id={id} className="vm vm--watch reveal" aria-labelledby={`${id}-t`}>
            <div className="watch-band">
              <div className="watch-band__inner">
                <header className="vm__head">
                  <p className="kicker vm__kicker vm__kicker--band">{kicker}</p>
                  <h2 id={`${id}-t`} className="vm__title">
                    {m.title ?? "What I'm watching in 2026"}
                  </h2>
                </header>
                <WatchBoard spec={m} />
                {xp}
              </div>
            </div>
          </section>
        )
      case 'movement':
        return (
          <section key={i} id={id} className="vm vm--movement reveal" aria-labelledby={`${id}-t`}>
            <header className="vm__head">
              <p className="kicker vm__kicker">{kicker}</p>
              <h2 id={`${id}-t`} className="vm__title">
                Which evidence matters next
              </h2>
            </header>
            <EvaluationMovement spec={m} />
            {xp}
          </section>
        )
      case 'read':
        return (
          <section key={i} className="vm vm--read reveal" aria-labelledby={`${id}-t`}>
            <header className="vm__head vm__head--read">
              {m.kicker && <p className="kicker vm__kicker">{m.kicker}</p>}
              <h2 id={`${id}-t`} className="vm__title vm__title--read">
                {m.title}
              </h2>
            </header>
            <p className="vm__line">{m.line}</p>
            {xp}
          </section>
        )
      default:
        return null
    }
  }

  const wordLabel = `${profile.words.toLocaleString('en-US')} words`

  return (
    <article className="vprofile" style={{ '--school': player.accent } as React.CSSProperties}>
      {profile.dateline && (
        <p className="profile__dateline">
          <span className="profile__dateline-mark" aria-hidden="true" />
          {profile.dateline}
        </p>
      )}

      <div className="vprofile__lede prose">
        {ledeParas.map((p, i) => (
          <p key={i} className={i < 2 ? 'prose__lede' : undefined}>
            <Runs runs={p.runs} />
          </p>
        ))}
      </div>

      <div className="report-bar" data-active={allOpen || undefined}>
        <p className="report-bar__note">
          {allOpen ? 'Full report open. Every section of the analysis is expanded on this page.' : `The complete scouting report (${wordLabel}) lives inside this page.`}
        </p>
        <button type="button" className="report-bar__btn" onClick={setAll} aria-pressed={allOpen}>
          {allOpen ? 'Collapse full report' : 'Expand full report'}
        </button>
      </div>

      {pres.modules.map((m, i) => (
        <Fragment key={i}>{renderModule(m, i)}</Fragment>
      ))}

      {(restSections.length > 0 || overflowParas.length > 0) && (
        <section className="vm vm--rest reveal" aria-label="The rest of the file">
          <header className="vm__head">
            <p className="kicker vm__kicker">From the full report</p>
          </header>
          {overflowParas.length > 0 && (
            <LongformExpansion
              id="xp-lede-rest"
              open={openIds.has('xp-lede-rest')}
              onToggle={toggle}
              sections={[{ heading: null, paragraphs: overflowParas }]}
              label={pres.restLabel ?? 'Read the complete file'}
              showHeadings={false}
            />
          )}
          {restSections.map((s) => (
            <LongformExpansion
              key={s.heading!.id}
              id={`xp-rest-${s.heading!.id}`}
              open={openIds.has(`xp-rest-${s.heading!.id}`)}
              onToggle={toggle}
              sections={[s]}
              label={s.heading!.text}
              showHeadings={false}
            />
          ))}
        </section>
      )}

      {player.position === 'QB' ? <QbStatsSection player={player} /> : <StatsSection player={player} />}

      <EvalHistory player={player} />
    </article>
  )
}
