/**
 * Presentation configuration types for the visual-first player pages.
 *
 * A player page is the canonical Early Scouting Profile plus a per-player
 * PRESENTATION: an ordered list of visual modules, each of which may attach
 * the relevant long-form sections as an inline "Read full analysis"
 * expansion. The canonical markdown stays the single source of scouting
 * truth; nothing in these configs is allowed to add a conclusion the
 * profile does not contain.
 *
 * Hard rules encoded here:
 * - Trait reads use the project's qualitative tiers only. No numbers.
 * - Unknown stays Unknown; Mixed and Limited evidence stay visible.
 * - `expands` arrays key on EXACT canonical heading text (matched through
 *   normalizeHeading, same as the old sectionRoles convention).
 * - Watch items default to 'open'; trend states exist for future
 *   evaluation updates and must not be used without real evidence.
 */

/** Qualitative tiers. The first seven are the constitution's scale;
 *  Mixed and Limited evidence carry over from the Trait Lab experiment. */
export type TraitTier =
  | 'Elite'
  | 'Major Strength'
  | 'Strength'
  | 'Adequate'
  | 'Mixed'
  | 'Concern'
  | 'Major Concern'
  | 'Unknown'
  | 'Limited evidence'

export type TraitCategory =
  // Wide receiver categories (the constitution's seven).
  | 'Route Craft'
  | 'Ball Skills'
  | 'Release & Press'
  | 'Functional Athleticism'
  | 'YAC Ability'
  | 'Football IQ / Spatial Awareness'
  | 'Physicality / Blocking'
  // Quarterback categories (finalized QB trait model, applied across all twelve
  // quarterbacks). Seven, to match the WR snapshot. 'Accuracy & Placement' and
  // 'Processing & Anticipation' are shared with the readout order below.
  | 'Accuracy & Placement'
  | 'Processing & Anticipation'
  | 'Pocket Management'
  | 'Arm Strength & Throw Flexibility'
  | 'Creation Outside Structure'
  | 'Decision-Making & Risk'
  | 'Rushing Value'

export interface TraitRead {
  category: TraitCategory
  tier: TraitTier
  /** One line, in voice, grounded in the profile. */
  note: string
}

/** Line-icon names available to modules. */
export type IconName =
  | 'route'
  | 'ball'
  | 'release'
  | 'speed'
  | 'yac'
  | 'iq'
  | 'physical'
  | 'watch'
  | 'target'
  | 'scale'
  | 'calendar'
  | 'flag'
  | 'field'
  | 'bolt'
  | 'hands'
  | 'shield'
  | 'compass'

/** The football concept diagrams. One concept, one owner; no repeats. */
export type DiagramType =
  | 'route-pacing'      // Smith: one-speed stem vs tempo change
  | 'late-hands'        // Smith: no timing cue for the corner
  | 'release-sequencing'// Wesco: paired releases attack memory
  | 'tracking-split'    // Coleman: locate vs adjust-and-finish
  | 'whip-route'        // Amari Thomas: the whip
  | 'geometry'          // Kenny Johnson: traffic in the recovery path
  | 'stop-route-sell'   // Miller: angled deception vs naked hitches
  | 'body-catch'        // Marsh: into the frame vs full extension
  | 'zone-feel'         // Wingo: past open grass vs into the window
  | 'stacking'          // Becker: cushion, even, on top
  | 'two-opens'         // Duff: separation window vs placement window

export type WatchStatus = 'open' | 'trending-up' | 'trending-down' | 'resolved'

export type RolePos = 'X' | 'Z' | 'Slot' | 'Big Slot' | 'Movement' | 'TE flex'

export interface Mechanism {
  name: string
  detail: string
  icon: IconName
}

interface Expandable {
  /** Exact canonical heading text of the sections this module expands into. */
  expands?: string[]
}

export interface SnapshotModule extends Expandable {
  kind: 'snapshot'
  /** Honest evidence-context line under the readout (thin files, level caveats). */
  contextNote?: string
}

export interface HowHeWinsModule extends Expandable {
  kind: 'howHeWins'
  title?: string
  lead?: string
  items: Mechanism[]
}

export interface DiagramModule extends Expandable {
  kind: 'diagram'
  diagram: DiagramType
  kicker?: string
  title: string
  /** Short direct read rendered beside/above the diagram. */
  lead?: string
  /** Small caption under the diagram. */
  caption?: string
}

export interface NuggetModule {
  kind: 'nugget'
  kicker: string
  title: string
  body: string
}

export interface StatModule extends Expandable {
  kind: 'stat'
  layout: 'single' | 'pair' | 'range' | 'steps'
  kicker?: string
  stats: Array<{ value: string; label: string }>
  /** Why the number needs context. Always present; numbers never float alone. */
  context: string
}

export interface QuestionModule extends Expandable {
  kind: 'question'
  kicker: string
  /** The question itself, profile-grounded. */
  question: string
  facets: Array<{ label: string; body: string }>
}

export interface FlowModule extends Expandable {
  kind: 'flow'
  kicker?: string
  title: string
  lead?: string
  steps: Array<{ label?: string; text: string }>
  resolution?: { label: string; text: string }
}

export interface CompareModule extends Expandable {
  kind: 'compare'
  kicker?: string
  title: string
  lead?: string
  layout: 'panels' | 'stack'
  sides: Array<{ label: string; body: string; status?: string }>
  verdict?: { label: string; body: string }
}

export interface RoleMapModule extends Expandable {
  kind: 'roleMap'
  alignments: Array<{ pos: RolePos; label?: string; primary?: boolean }>
  note?: string
  immediate?: string[]
  unlock?: string
  limitation?: string
  /** Render the player cutout beside the field (desktop only). */
  showCutout?: boolean
}

/** Renders the fork already declared in players.ts (its section's full content). */
export interface ForkModule {
  kind: 'fork'
}

/** Renders the named section visibly inside the quarantined medical panel. */
export interface MedicalModule {
  kind: 'medical'
  heading: string
}

export interface WatchModule extends Expandable {
  kind: 'watch'
  title?: string
  lead?: string
  items: Array<{ topic: string; question: string; status: WatchStatus }>
}

export interface MovementModule extends Expandable {
  kind: 'movement'
  up?: string[]
  down?: string[]
  unknown?: string[]
}

/** A short-form read: one direct conclusion with the full section behind it. */
export interface ReadModule extends Expandable {
  kind: 'read'
  kicker?: string
  title: string
  line: string
}

export type ModuleSpec =
  | SnapshotModule
  | HowHeWinsModule
  | DiagramModule
  | NuggetModule
  | StatModule
  | QuestionModule
  | FlowModule
  | CompareModule
  | RoleMapModule
  | ForkModule
  | MedicalModule
  | WatchModule
  | MovementModule
  | ReadModule

export interface Presentation {
  /** Seven-category qualitative snapshot, profile-grounded. */
  traits: TraitRead[]
  /**
   * How many opening paragraphs stay visible as the lede. Defaults to all
   * pre-heading paragraphs; heading-less short files set a small number and
   * the rest lands in the complete-file expansion.
   */
  ledeCount?: number
  /** Label for the fallback expansion holding unmapped sections. */
  restLabel?: string
  modules: ModuleSpec[]
}
