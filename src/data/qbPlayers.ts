import type { HeldProspect, Player } from './types'

/**
 * The 2027 QB manifest. INTERNAL STATUS: PROVISIONAL.
 *
 * Foundation facts (names, current schools, class, school-listed measurements,
 * transfer history, 2025 production) are verified against the QB Verified
 * Research package (02_Player Research/2027/QB/..._Verified_Research_v1).
 * Everything evaluative is synthesized from the analyst extraction record and
 * has NOT been film-validated yet, so every record carries `provisional: true`.
 * Teasers and theses stay grounded in that record and add no scouting claim the
 * research does not support. Numbers, athletic testing, grades, comps and draft
 * capital are deliberately absent until the film work is done.
 *
 * Canonical spelling is Darian Mensah; the earlier misspelling is corrected.
 * Trinidad Chambliss is the only QB with a verified date of birth; every other
 * age renders as unknown.
 *
 * Order here is irrelevant; the UI sorts by sortKey (alphabetical by surname).
 */
export const qbPlayers: Player[] = [
  {
    slug: 'arch-manning',
    name: 'Arch Manning',
    sortKey: 'manning',
    school: 'Texas',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#bf5700',
    bio: {
      heightFt: 6, heightIn: 4, weightLbs: 222,
      rosterClass: 'Junior',
      measurementStatus: 'school-listed',
    },
    teaser: "One season as the starter and already the class's consensus QB1. The debate is about degree, not direction.",
    thesis: 'A top-of-draft quarterback who already handles a collapsing pocket like a veteran. What is left to settle is the short-area placement and how much the compact release caps the deep ball.',
    featuredHook: 'One season as the starter and already the consensus top quarterback of the class. The only argument left is how high the ceiling goes.',
  },
  {
    slug: 'dante-moore',
    name: 'Dante Moore',
    sortKey: 'moore',
    school: 'Oregon',
    via: 'via UCLA',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#154733',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 206,
      rosterClass: 'Redshirt Junior',
      measurementStatus: 'school-listed',
    },
    teaser: 'Maybe the cleanest mechanical foundation in the group. What happens when the pocket stops being clean is the whole question.',
    thesis: 'Accuracy, timing and a quick repeatable release nobody disputes. His ranking swings on one thing: whether the pressure dip is an experience problem or a ceiling.',
    featuredHook: 'The cleanest mechanical foundation in the group, and a projection that lives or dies on how he plays when the pocket breaks.',
  },
  {
    slug: 'lanorris-sellers',
    name: 'LaNorris Sellers',
    sortKey: 'sellers',
    school: 'South Carolina',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#73000a',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 238,
      rosterClass: 'Redshirt Junior',
      measurementStatus: 'school-listed',
    },
    teaser: "The class's loudest traits-versus-quarterbacking debate. The frame and arm are first-round; the operation is not there yet.",
    thesis: 'A rare arm and explosive legs attached to timing, short-area touch and a sack profile that have not caught up. How much of that belongs to him and how much to the offense around him is the argument.',
    featuredHook: 'First-round size and arm strength attached to quarterbacking that has not caught up. The most important traits-versus-operation case in the class.',
  },
  {
    slug: 'cj-carr',
    name: 'CJ Carr',
    sortKey: 'carr',
    school: 'Notre Dame',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#0c2340',
    bio: {
      heightFt: 6, heightIn: 2, weightLbs: 215,
      rosterClass: 'Sophomore',
      measurementStatus: 'school-listed',
    },
    teaser: 'A young, clean passer with a real first-round path and the widest ranking spread in the upper group.',
    thesis: 'The timing, touch and pocket structure look the part after twelve starts. The disagreement is how much projection you grant a passer who has not shown much adverse-condition tape yet.',
  },
  {
    slug: 'drew-mestemaker',
    name: 'Drew Mestemaker',
    sortKey: 'mestemaker',
    school: 'Oklahoma State',
    via: 'via North Texas',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#ff7300',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 215,
      rosterClass: 'Redshirt Sophomore',
      measurementStatus: 'school-listed',
    },
    teaser: 'The biggest projection bet in the group, and a real 2027-or-2028 question sitting underneath it.',
    thesis: 'Natural velocity, deep-ball shape and progression flashes on an unusual resume. One evaluator ranks him first in the class; another files him as a 2028 name. The gap is that wide.',
    featuredHook: 'A 4,300-yard breakout on an unusual resume. Ranked first in the class by one room and filed as a 2028 name by another.',
  },
  {
    slug: 'darian-mensah',
    name: 'Darian Mensah',
    sortKey: 'mensah',
    school: 'Miami',
    via: 'via Duke and Tulane',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#f47321',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 205,
      rosterClass: 'Redshirt Junior',
      measurementStatus: 'school-listed',
    },
    teaser: 'A command-and-touch passer, not a traits bet. Even the accuracy reputation is disputed, which makes him a real test case.',
    thesis: 'The touch, placement and pocket calm show up. Whether that game survives an arm the evaluators call adequate, and whether the accuracy label holds up, is where they split hard.',
  },
  {
    slug: 'trinidad-chambliss',
    name: 'Trinidad Chambliss',
    sortKey: 'chambliss',
    school: 'Ole Miss',
    via: 'via Ferris State',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#14213d',
    bio: {
      heightFt: 6, heightIn: 0, weightLbs: 205,
      rosterClass: 'Senior',
      dateOfBirth: '2002-08-24',
      measurementStatus: 'school-listed',
    },
    teaser: 'A Division II transfer whose quarterback feel is loud and whose measurables set the ceiling debate.',
    thesis: 'Natural pocket feel, poise and a three-interception season pulling evaluators in. Sub-six-foot listed size, an elongated release and short-area placement pulling them back. He is the clearest feel-versus-thresholds case in the class.',
    featuredHook: 'A Division II transfer who put natural quarterback feel on SEC tape. The measurables decide how far it travels.',
  },
  {
    slug: 'jayden-maiava',
    name: 'Jayden Maiava',
    sortKey: 'maiava',
    school: 'USC',
    via: 'via UNLV',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#990000',
    bio: {
      heightFt: 6, heightIn: 4, weightLbs: 225,
      rosterClass: 'Redshirt Senior',
      measurementStatus: 'school-listed',
    },
    teaser: 'A big, experienced touch passer with a stable floor and a ceiling nobody agrees on.',
    thesis: 'The catchable ball and low sack rate give him a floor. The open question is whether the touch is a choice or a workaround for drive power, and the turnover-worthy plays under pressure keep it open.',
  },
  {
    slug: 'julian-sayin',
    name: 'Julian Sayin',
    sortKey: 'sayin',
    school: 'Ohio State',
    via: 'via Alabama',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#bb0000',
    bio: {
      heightFt: 6, heightIn: 1, weightLbs: 208,
      rosterClass: 'Redshirt Sophomore',
      measurementStatus: 'school-listed',
    },
    teaser: 'A 77% college season, and a projection every evaluator prices differently once the environment is stripped away.',
    thesis: "The accuracy and production are real. The disagreement is how much survives when the size, the arm and Ohio State's supporting cast stop covering for the first-read dependence.",
  },
  {
    slug: 'sam-leavitt',
    name: 'Sam Leavitt',
    sortKey: 'leavitt',
    school: 'LSU',
    via: 'via Arizona State and Michigan State',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#461d7c',
    bio: {
      heightFt: 6, heightIn: 2, weightLbs: 216,
      rosterClass: 'Redshirt Junior',
      measurementStatus: 'school-listed',
    },
    teaser: 'Real arm talent wrapped in a frenetic, risk-heavy style, now betting on a new home to organize it.',
    thesis: 'The arm and the escapability keep him relevant after a seven-game, foot-injury season. The drift, the fastball-everything touch and the sack habit are why the new offense matters more than the tools right now.',
  },
  {
    slug: 'john-mateer',
    name: 'John Mateer',
    sortKey: 'mateer',
    school: 'Oklahoma',
    via: 'via Washington State',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#841617',
    bio: {
      heightFt: 6, heightIn: 1, weightLbs: 224,
      rosterClass: 'Redshirt Senior',
      measurementStatus: 'school-listed',
    },
    teaser: 'A volatile gamer with real movement and creativity, and a hand injury tangled into the 2025 tape.',
    thesis: 'Quick feet, a fast release and genuine playmaking keep him draftable. Below-average arm strength, fastball-everything mechanics and turnover-worthy decisions cap it, and September hand surgery complicates the read.',
  },
  {
    slug: 'drake-lindsey',
    name: 'Drake Lindsey',
    sortKey: 'lindsey',
    school: 'Minnesota',
    position: 'QB', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    provisional: true,
    accent: '#7a0019',
    bio: {
      heightFt: 6, heightIn: 5, weightLbs: 230,
      rosterClass: 'Redshirt Sophomore',
      measurementStatus: 'school-listed',
    },
    teaser: 'The widest evaluator split in the class: effortless pocket passer to one room, nowhere near it to another.',
    thesis: "Prototype size, wrist-flick arm and anticipation flashes inside a quick-game offense that hides most of it. Whether that's a legitimate pocket quarterback or a projection the environment is inflating is the sharpest disagreement in the group.",
  },
]

/**
 * No held QB prospects are published yet. The research holds three watchlist
 * names (Josh Hoover, Demond Williams Jr., DJ Lagway) outside the core twelve,
 * but this package carries no verified school, bio or evaluation for them, and
 * unknown stays unknown rather than becoming a fabricated card.
 */
export const qbHeld: HeldProspect[] = []
