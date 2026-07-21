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

/**
 * Verified prospect bio for the hero strip. Measurements are the school's
 * current listed figures for the evaluation period (early cycle); verified
 * combine/pro-day numbers replace listed figures when they exist. Date of
 * birth is stored only when verified against a credible source, and age is
 * always computed as of the evaluation date, never hardcoded. Unknown stays
 * unknown.
 */
export interface PlayerBio {
  /** Listed height, feet component (6 in 6'5"). */
  heightFt: number
  /** Listed height, inches component (5 in 6'5"). */
  heightIn: number
  /** Listed weight in pounds. */
  weightLbs: number
  /**
   * Class/eligibility designation from the school's current roster, redshirt
   * status preserved ("Junior", "Redshirt Senior"). Never inferred.
   */
  rosterClass: string
  /** ISO date (YYYY-MM-DD), only when verified. Absent = unknown, never estimated. */
  dateOfBirth?: string
  /** Provenance of the height/weight figures. */
  measurementStatus: 'school-listed' | 'verified'
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
  /** Verified bio data rendered in the hero strip. */
  bio?: PlayerBio
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
  /** Verified bio data, kept ready for wherever held prospects surface. */
  bio?: PlayerBio
}

export interface EvalEvent {
  stage: string
  date: string
  note: string
}
