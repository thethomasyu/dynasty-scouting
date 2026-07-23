import type {
  CompareModule,
  FlowModule,
  HowHeWinsModule,
  IconName,
  MovementModule,
  NuggetModule,
  QuestionModule,
  RoleMapModule,
  RolePos,
  SnapshotModule,
  StatModule,
  TraitCategory,
  TraitRead,
  WatchModule,
  WatchStatus,
} from '../../data/presentation/types'
import type { Player } from '../../data/types'
import { cutoutOf } from '../../lib/images'
import Icon, { ArrowIcon } from './Icons'

/* ---- Trait readout (the scouting snapshot) ------------------------ */

/** Ordinal scale, worst to best. Unknown, Mixed, and Limited evidence sit
 *  outside the scale on purpose; they get distinct honest treatments. */
const SCALE = ['Major Concern', 'Concern', 'Adequate', 'Strength', 'Major Strength', 'Elite'] as const

const TIER_CLASS: Record<string, string> = {
  Elite: 'is-elite',
  'Major Strength': 'is-major-strength',
  Strength: 'is-strength',
  Adequate: 'is-adequate',
  Mixed: 'is-mixed',
  Concern: 'is-concern',
  'Major Concern': 'is-major-concern',
  Unknown: 'is-unknown',
  'Limited evidence': 'is-unknown',
}

const CATEGORY_ICON: Record<TraitCategory, IconName> = {
  // WR
  'Route Craft': 'route',
  'Ball Skills': 'ball',
  'Release & Press': 'release',
  'Functional Athleticism': 'speed',
  'YAC Ability': 'yac',
  'Football IQ / Spatial Awareness': 'iq',
  'Physicality / Blocking': 'physical',
  // QB (finalized model, all twelve). 'Accuracy & Placement' and
  // 'Processing & Anticipation' are shared with the WR-side keys above only in name.
  'Accuracy & Placement': 'target',
  'Processing & Anticipation': 'iq',
  'Pocket Management': 'shield',
  'Arm Strength & Throw Flexibility': 'bolt',
  'Creation Outside Structure': 'compass',
  'Decision-Making & Risk': 'flag',
  'Rushing Value': 'speed',
}

function TraitTrack({ tier }: { tier: TraitRead['tier'] }) {
  const pos = (SCALE as readonly string[]).indexOf(tier)
  const offScale = pos === -1
  return (
    <span className={`trail${offScale ? ' trail--off' : ''}`} aria-hidden="true">
      {SCALE.map((t, i) => (
        <span key={t} className={`trail__cell${i === pos ? ' is-on' : ''}${offScale && tier === 'Mixed' ? ' is-hatch' : ''}`} />
      ))}
    </span>
  )
}

export function TraitReadout({ spec, traits }: { spec: SnapshotModule; traits: TraitRead[] }) {
  return (
    <div className="snapshot">
      <ul className="snapshot__list" role="list">
        {traits.map((t) => (
          <li key={t.category} className={`trow ${TIER_CLASS[t.tier]}`}>
            <span className="trow__cat">
              <Icon name={CATEGORY_ICON[t.category]} className="trow__ic" />
              {t.category}
            </span>
            <TraitTrack tier={t.tier} />
            <span className="trow__tier">{t.tier}</span>
            <span className="trow__note">{t.note}</span>
          </li>
        ))}
      </ul>
      <div className="snapshot__legend" aria-hidden="true">
        <span className="snapshot__legend-item">
          <span className="trail trail--legend">
            {SCALE.map((t, i) => (
              <span key={t} className={`trail__cell${i === 5 ? ' is-on' : ''}`} />
            ))}
          </span>
          Major Concern → Elite
        </span>
        <span className="snapshot__legend-item snapshot__legend-item--dash">Dashed = Unknown stays unknown</span>
      </div>
      {spec.contextNote && <p className="snapshot__context">{spec.contextNote}</p>}
    </div>
  )
}

/* ---- How he wins --------------------------------------------------- */

export function HowHeWins({ spec }: { spec: HowHeWinsModule }) {
  return (
    <div className="hww">
      {spec.lead && <p className="vm__lead">{spec.lead}</p>}
      <ol className="hww__list" role="list">
        {spec.items.map((m, i) => (
          <li key={m.name} className="hww__item">
            <span className="hww__n" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <Icon name={m.icon} className="hww__ic" />
            <h3 className="hww__name">{m.name}</h3>
            <p className="hww__detail">{m.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ---- Stat spotlight ------------------------------------------------ */

export function StatSpotlight({ spec }: { spec: StatModule }) {
  return (
    <div className={`stat stat--${spec.layout}`}>
      {spec.kicker && <p className="kicker stat__kicker">{spec.kicker}</p>}
      {spec.layout === 'range' ? (
        <div className="stat__range" role="img" aria-label={`${spec.stats[0].value} to ${spec.stats[1].value}, ${spec.stats[0].label}`}>
          <span className="stat__value">{spec.stats[0].value}</span>
          <span className="stat__band" aria-hidden="true">
            <span className="stat__band-line" />
          </span>
          <span className="stat__value">{spec.stats[1].value}</span>
          <span className="stat__range-label">{spec.stats[0].label}</span>
        </div>
      ) : spec.layout === 'steps' ? (
        <ol className="stat__steps" role="list">
          {spec.stats.map((s, i) => (
            <li key={i} className="stat__step">
              <span className="stat__value stat__value--step">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ol>
      ) : (
        <div className="stat__row">
          {spec.stats.map((s, i) => (
            <div key={i} className="stat__cell">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      )}
      <p className="stat__context">{spec.context}</p>
    </div>
  )
}

/* ---- Central question ---------------------------------------------- */

export function CentralQuestion({ spec }: { spec: QuestionModule }) {
  return (
    <div className="cq">
      <div className="cq__inner">
        <p className="kicker cq__kicker">{spec.kicker}</p>
        <p className="cq__q">{spec.question}</p>
        <dl className="cq__facets">
          {spec.facets.map((f) => (
            <div key={f.label} className="cq__facet">
              <dt className="cq__facet-label">{f.label}</dt>
              <dd className="cq__facet-body">{f.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/* ---- Diagnostic flow ----------------------------------------------- */

export function DiagnosticFlow({ spec }: { spec: FlowModule }) {
  return (
    <div className="flow">
      {spec.lead && <p className="vm__lead">{spec.lead}</p>}
      <ol className="flow__steps" role="list">
        {spec.steps.map((s, i) => (
          <li key={i} className="flow__step">
            {s.label && <span className="flow__label">{s.label}</span>}
            <span className="flow__text">{s.text}</span>
          </li>
        ))}
      </ol>
      {spec.resolution && (
        <div className="flow__res">
          <span className="flow__label flow__label--res">{spec.resolution.label}</span>
          <span className="flow__text">{spec.resolution.text}</span>
        </div>
      )}
    </div>
  )
}

/* ---- Evidence comparison ------------------------------------------- */

export function EvidenceComparison({ spec }: { spec: CompareModule }) {
  return (
    <div className={`cmp cmp--${spec.layout}`}>
      {spec.lead && <p className="vm__lead">{spec.lead}</p>}
      <div className="cmp__sides">
        {spec.sides.map((s) => (
          <div key={s.label} className="cmp__side">
            <p className="cmp__side-head">
              <span className="cmp__side-label">{s.label}</span>
              {s.status && <span className="cmp__status">{s.status}</span>}
            </p>
            <p className="cmp__body">{s.body}</p>
          </div>
        ))}
      </div>
      {spec.verdict && (
        <div className="cmp__verdict">
          <p className="kicker cmp__verdict-label">{spec.verdict.label}</p>
          <p className="cmp__verdict-body">{spec.verdict.body}</p>
        </div>
      )}
    </div>
  )
}

/* ---- Scouting nugget ----------------------------------------------- */

export function ScoutingNugget({ spec }: { spec: NuggetModule }) {
  return (
    <aside className="nug" aria-label={spec.title}>
      <p className="kicker nug__kicker">{spec.kicker}</p>
      <h3 className="nug__title">{spec.title}</h3>
      <p className="nug__body">{spec.body}</p>
    </aside>
  )
}

/* ---- NFL role map --------------------------------------------------- */

/** Alignment slots on the simplified field. on = on the line of scrimmage. */
const SLOTS: Record<RolePos, { x: number; on: boolean; short: string }> = {
  X: { x: 30, on: true, short: 'X' },
  Slot: { x: 96, on: false, short: 'SLOT' },
  'TE flex': { x: 238, on: true, short: 'TE' },
  'Big Slot': { x: 270, on: false, short: 'BIG SLOT' },
  Movement: { x: 148, on: false, short: 'MOTION' },
  Z: { x: 330, on: false, short: 'Z' },
}

export function NFLRoleMap({ spec, player }: { spec: RoleMapModule; player: Player }) {
  const active = new Map(spec.alignments.map((a) => [a.pos, a]))
  const primary = spec.alignments.find((a) => a.primary) ?? spec.alignments[0]
  const desc = `Simplified offensive alignment. ${player.name}'s projected home: ${spec.alignments
    .map((a) => `${a.pos}${a.label ? ` (${a.label})` : ''}`)
    .join(', ')}.`
  return (
    <div className="rmap">
      <div className="rmap__stage">
        <svg className="rmap__field" viewBox="0 0 360 128" role="img" aria-label={desc}>
          <title>NFL alignment map</title>
          <desc>{desc}</desc>
          {/* field slice */}
          <rect x={2} y={6} width={356} height={116} rx={8} className="rmap__turf" />
          <line x1={10} y1={64} x2={350} y2={64} className="rmap__los" />
          <text x={14} y={58} className="dg-note">
            LOS
          </text>
          {/* offensive line */}
          {[158, 172, 186, 200, 214].map((x) => (
            <rect key={x} x={x - 4} y={68} width={8} height={8} className="rmap__ol" />
          ))}
          <text x={166} y={92} className="dg-note">
            OL
          </text>
          {(Object.keys(SLOTS) as RolePos[]).map((pos) => {
            const s = SLOTS[pos]
            const a = active.get(pos)
            const y = s.on ? 72 : 88
            if (pos === 'Movement') {
              // motion arc rendered only when the player projects there
              if (!a) return null
              return (
                <g key={pos}>
                  <path d="M310 100 C260 114 200 114 150 102" className="rmap__motion" markerEnd="url(#rm-a)" />
                  <text x={206} y={124} className={`dg-note${a ? ' dg-note--accent' : ''}`}>
                    {s.short}
                  </text>
                </g>
              )
            }
            return (
              <g key={pos} className={a ? 'rmap__pos is-active' : 'rmap__pos'}>
                {a && <circle cx={s.x} cy={y} r={11} className={`rmap__ring${a.primary ?? spec.alignments.length === 1 ? ' rmap__ring--primary' : ''}`} />}
                <circle cx={s.x} cy={y} r={5.4} className="rmap__dot" />
                <text x={s.x} y={y + 24} textAnchor="middle" className="rmap__lbl">
                  {s.short}
                </text>
                {a?.label && (
                  <text x={Math.min(Math.max(s.x, 68), 292)} y={s.on ? 40 : 34} textAnchor="middle" className="rmap__cond">
                    {a.label.toUpperCase()}
                  </text>
                )}
              </g>
            )
          })}
          <defs>
            <marker id="rm-a" viewBox="0 0 10 10" refX="7.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0.8 1.2 8.6 5 0.8 8.8" fill="none" stroke="context-stroke" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
          </defs>
        </svg>
        {spec.showCutout && (
          <div className="rmap__figure" aria-hidden="true">
            <img src={cutoutOf(player.slug)} alt="" loading="lazy" />
          </div>
        )}
      </div>
      <div className="rmap__facts">
        <p className="rmap__home">
          <span className="kicker rmap__home-kicker">Projected home</span>
          <span className="rmap__home-pos">{primary.pos}</span>
          {spec.note && <span className="rmap__home-note">{spec.note}</span>}
        </p>
        {spec.immediate && (
          <div className="rmap__col">
            <p className="kicker rmap__col-kicker">Immediate value</p>
            <ul className="rmap__list" role="list">
              {spec.immediate.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        )}
        {spec.unlock && (
          <div className="rmap__col">
            <p className="kicker rmap__col-kicker">Developmental unlock</p>
            <p className="rmap__col-body">{spec.unlock}</p>
          </div>
        )}
        {spec.limitation && (
          <div className="rmap__col">
            <p className="kicker rmap__col-kicker">Role limitation</p>
            <p className="rmap__col-body">{spec.limitation}</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ---- Watch board ---------------------------------------------------- */

const WATCH_LABEL: Record<WatchStatus, string> = {
  open: 'Open',
  'trending-up': 'Trending up',
  'trending-down': 'Trending down',
  resolved: 'Resolved',
}

export function WatchBoard({ spec }: { spec: WatchModule }) {
  return (
    <div className="wb">
      {spec.lead && <p className="vm__lead">{spec.lead}</p>}
      <ol className="wb__grid" role="list">
        {spec.items.map((w, i) => (
          <li key={w.topic} className={`wb__item wb__item--${w.status}`}>
            <span className="wb__n" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={`wb__status wb__status--${w.status}`}>
              <span className="wb__status-dot" aria-hidden="true" />
              {WATCH_LABEL[w.status]}
            </span>
            <h3 className="wb__topic">{w.topic}</h3>
            <p className="wb__q">{w.question}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ---- Evaluation movement -------------------------------------------- */

export function EvaluationMovement({ spec }: { spec: MovementModule }) {
  const cols: Array<{ dir: 'up' | 'down' | 'open'; title: string; items: string[] }> = []
  if (spec.up?.length) cols.push({ dir: 'up', title: 'Moves it up', items: spec.up })
  if (spec.down?.length) cols.push({ dir: 'down', title: 'Moves it down', items: spec.down })
  if (spec.unknown?.length) cols.push({ dir: 'open', title: 'Still open', items: spec.unknown })
  return (
    <div className="mv" data-cols={cols.length}>
      {cols.map((c) => (
        <div key={c.dir} className={`mv__col mv__col--${c.dir}`}>
          <p className="mv__head">
            <ArrowIcon dir={c.dir} />
            {c.title}
          </p>
          <ul className="mv__list" role="list">
            {c.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
