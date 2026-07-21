/** Section roles drive the editorial treatment a parsed section receives. */
export type SectionRole =
  | 'core'        // standard editorial prose
  | 'translation' // NFL translation module
  | 'question'    // closing machinery: the next question + watch items
  | 'change'      // what would change my mind
  | 'medical'     // quarantined medical context

/** A conditional NFL-translation fork, rendered as split paths. */
export interface Fork {
  /** Heading of the section this fork replaces (exact text). */
  heading: string
  /** Sentences rendered as plain prose before the paths. */
  intro?: string[]
  paths: Array<{ label: string; body: string }>
  /** Sentences rendered as plain prose after the paths. */
  outro?: string[]
  /** 'panels' = side-by-side two-path fork; 'branches' = stacked branch list. */
  layout: 'panels' | 'branches'
}

/** The one question given a large editorial pullout, when a profile has one. */
export interface QuestionPull {
  /** Verbatim text pulled from the profile. */
  text: string
  /** Small label above the pull. */
  kicker: string
  /** Exact heading text the pull is placed before. */
  beforeHeading: string
}

export interface Player {
  slug: string
  name: string
  /** Sort key for the neutral alphabetical ordering. */
  sortKey: string
  school: string
  /** Transfer path, phrased for chrome ("via Michigan State"). */
  via?: string
  position: 'WR'
  classYear: '2027'
  stage: 'Early Evaluation'
  stageDate: 'Summer 2026'
  /** School color used only as a restrained accent. */
  accent: string
  /** One-line identity for cards and search. Grounded in the profile. */
  teaser: string
  /** Hero standfirst. Grounded in the profile's own thesis language. */
  thesis: string
  /** Exact H2 text -> treatment. Anything unlisted renders as core prose. */
  sectionRoles?: Record<string, SectionRole>
  question?: QuestionPull
  fork?: Fork
  /** Membership in the editorial entry row (not a ranking). */
  featuredHook?: string
}

export interface HeldProspect {
  slug: string
  name: string
  school: string
  accent: string
  /** Why the file stays open, in reader-facing language. */
  line: string
}

export interface EvalEvent {
  stage: string
  date: string
  note: string
}
