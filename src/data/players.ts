import type { HeldProspect, Player } from './types'

/**
 * The 2027 WR manifest. Names, schools, and transfer paths follow the
 * canonical research names in the class index. Teasers and theses reuse or
 * closely track each profile's own language; nothing here adds a scouting
 * claim the profile does not make.
 *
 * Per-player visual presentation (trait reads, modules, watch boards,
 * expansion mapping) lives in src/data/presentation/, one file per slug.
 * Forks stay here because their content mirrors the profile's translation
 * section and must be resynced whenever that section changes.
 *
 * Bio blocks carry the school-listed 2026 roster measurements and roster
 * class designations, verified against each school's official roster in
 * July 2026 (provenance in 02_Player Research/2027/WR/05_Bio Data
 * Verification.md). Dates of birth appear only where a credible source
 * verified the exact date; missing dateOfBirth renders as an unknown age,
 * never an estimate.
 *
 * Order in this file is irrelevant; the UI sorts by sortKey (alphabetical).
 */

/**
 * The reference date every Summer 2026 age is computed against: the date
 * this Early Evaluation set was completed. Ages on these profiles stay
 * fixed to this date; a future evaluation stage gets its own date.
 */
export const EVALUATION_DATE = '2026-07-21'
export const players: Player[] = [
  {
    slug: 'cooper-barkate',
    name: 'Cooper Barkate',
    sortKey: 'barkate',
    school: 'Miami',
    via: 'via Duke and Harvard',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#f47321',
    bio: {
      heightFt: 6, heightIn: 1, weightLbs: 195,
      rosterClass: 'Redshirt Senior',
      measurementStatus: 'school-listed',
    },
    teaser: 'Produced at Harvard, then Duke, now Miami. Precision without an outlier trait, and one variable left.',
    thesis: 'He might have the most professional route-level game in the middle of this class, attached to the kind of athletic profile NFL offenses have a habit of throwing away.',
  },
  {
    slug: 'charlie-becker',
    name: 'Charlie Becker',
    sortKey: 'becker',
    school: 'Indiana',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#990000',
    bio: {
      heightFt: 6, heightIn: 4, weightLbs: 207,
      rosterClass: 'Junior',
      measurementStatus: 'school-listed',
    },
    teaser: 'The loudest per-target numbers in the class, produced inside the smallest job description.',
    thesis: 'Some of the loudest per-target numbers in the class, produced inside the smallest job description in the class. The efficiency is real, and so is the caveat.',
  },
  {
    slug: 'cam-coleman',
    name: 'Cam Coleman',
    sortKey: 'coleman',
    school: 'Texas',
    via: 'via Auburn',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bf5700',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 204,
      rosterClass: 'Junior',
      dateOfBirth: '2006-08-14',
      measurementStatus: 'school-listed',
    },
    teaser: 'Maybe the most polished big receiver in the class, and two years of Auburn quarterback play kept it quiet.',
    thesis: "He might be the most polished big receiver in this class right now, and there's really only one open argument in his evaluation. The 2026 season is set up to settle it.",
    featuredHook: 'Maybe the most polished big receiver in the class, hidden behind two years of bad Auburn quarterback play. One argument left, and Texas should settle it.',
  },
  {
    slug: 'mario-craver',
    name: 'Mario Craver',
    sortKey: 'craver',
    school: 'Texas A&M',
    via: 'via Mississippi State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#500000',
    bio: {
      heightFt: 5, heightIn: 9, weightLbs: 165,
      rosterClass: 'Junior',
      measurementStatus: 'school-listed',
    },
    teaser: 'One of the fastest players in the class, listed anywhere from 165 to 180 pounds. The scale decides.',
    thesis: 'One of the fastest players in the class, listed anywhere from 165 to 180 pounds. Every serious question about him eventually comes back to the scale.',
  },
  {
    slug: 'kj-duff',
    name: 'KJ Duff',
    sortKey: 'duff',
    school: 'Rutgers',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#cc0033',
    bio: {
      heightFt: 6, heightIn: 6, weightLbs: 225,
      rosterClass: 'Junior',
      dateOfBirth: '2005-12-06',
      measurementStatus: 'school-listed',
    },
    teaser: 'Gets open the way a power forward gets a rebound: the work happens before the ball goes up.',
    thesis: "The question with him was never skill. It's whether the job he's built for still produces NFL difference-makers, and whether he's the exception.",
    featuredHook: "A legitimate 6'5-plus with receiver hands and none of the usual stiffness. The best current version of the giant-receiver archetype, and a test of whether that job still pays.",
  },
  {
    slug: 'jordan-faison',
    name: 'Jordan Faison',
    sortKey: 'faison',
    school: 'Notre Dame',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#c99700',
    bio: {
      heightFt: 5, heightIn: 11, weightLbs: 185,
      rosterClass: 'Senior',
      measurementStatus: 'school-listed',
    },
    teaser: 'The case is about direction, not where he is today. Football finally gets all of him.',
    thesis: 'A national-champion lacrosse player whose routes stopped looking borrowed the moment football got most of his year. The bet is the direction.',
  },
  {
    slug: 'jaden-greathouse',
    name: 'Jaden Greathouse',
    sortKey: 'greathouse',
    school: 'Notre Dame',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#c99700',
    bio: {
      heightFt: 6, heightIn: 1, weightLbs: 215,
      rosterClass: 'Junior',
      dateOfBirth: '2004-10-29',
      measurementStatus: 'school-listed',
    },
    teaser: 'A bet that habits outrun a stopwatch, with a lost season stacked on top.',
    thesis: 'A professional-habits receiver at a dense 213 pounds. The evaluation is a bet that habits can outrun a stopwatch, and a lost season stacked a second bet on top.',
  },
  {
    slug: 'nyck-harbor',
    name: 'Nyck Harbor',
    sortKey: 'harbor',
    school: 'South Carolina',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#73000a',
    bio: {
      heightFt: 6, heightIn: 5, weightLbs: 239,
      rosterClass: 'Senior',
      dateOfBirth: '2005-07-05',
      measurementStatus: 'school-listed',
    },
    teaser: 'Tight end mass at burner speed, and three seasons where the tools and the results never met.',
    thesis: "Tight end mass moving at burner speed, a combination the sport barely has a name for. Three seasons in, the tools and the results still haven't met.",
    fork: {
      heading: 'NFL translation',
      layout: 'panels',
      paths: [
        {
          label: 'If it comes together',
          body: 'The projection is simple: a boundary vertical mismatch X with a deliberately narrow route menu, the big-body deep threat teams scheme shots for, plus red zone gravity. That player starts in the NFL even with a limited tree.',
        },
        {
          label: 'If it never comes together',
          body: "He's a body the league keeps auditioning, a combine star whose college film never stopped being an argument about potential.",
        },
      ],
      outro: [
        "There isn't much middle ground, which is what makes him one of the most volatile evaluations in the class.",
        'The measurables sit oddly for such a physically defined prospect: two different listed weights, no verified forty, and a GPS number doing all the speed testimony. His testing, whenever it happens, will move his stock more than most.',
      ],
    },
  },
  {
    slug: 'reed-harris',
    name: 'Reed Harris',
    sortKey: 'harris',
    school: 'Arizona State',
    via: 'via Boston College',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#8c1d40',
    bio: {
      heightFt: 6, heightIn: 5, weightLbs: 217,
      rosterClass: 'Redshirt Junior',
      measurementStatus: 'school-listed',
    },
    teaser: "An outline, not a finished evaluation. 6'4 and 220, hidden in one of the worst passing offenses around.",
    thesis: "A spring-verified 6'4 and 220 who spent his college career hidden in plain sight. One good look, plenty still dark.",
  },
  {
    slug: 'kenny-johnson',
    name: 'Kenny Johnson',
    sortKey: 'johnson',
    school: 'Texas Tech',
    via: 'via Pittsburgh',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#cc0000',
    bio: {
      heightFt: 6, heightIn: 1, weightLbs: 200,
      rosterClass: 'Senior',
      measurementStatus: 'school-listed',
    },
    teaser: 'Manufactures separation with geometry. Around that one rare skill, mostly fog.',
    thesis: "One proven, unusual thing: he manufactures separation with geometry, other people's bodies included. Around it, mostly fog.",
  },
  {
    slug: 'nick-marsh',
    name: 'Nick Marsh',
    sortKey: 'marsh',
    school: 'Indiana',
    via: 'via Michigan State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#990000',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 213,
      rosterClass: 'Junior',
      measurementStatus: 'school-listed',
    },
    teaser: "Looks like the finished product, and still doesn't get open enough. The why is the whole evaluation.",
    thesis: "He has real route skill and real strength and still doesn't get open enough. The why matters more than the outcome, because the why decides whether coaching can fix it.",
    fork: {
      heading: 'How the projection branches',
      layout: 'branches',
      intro: ['Two questions dominate this evaluation, so the projection has to branch.'],
      paths: [
        {
          label: 'Branch one',
          body: "If the speed is better than the film suggests and the catch point gets retrained, you're looking at a big, violent, complete boundary receiver, and the breakout story gets proven right in full.",
        },
        {
          label: 'Branch two',
          body: "If the speed is capped but he learns to attack the ball, he's a chain-moving possession X with rare after-catch power for the position: a starter who wins ugly and moves the sticks.",
        },
        {
          label: 'Branch three',
          body: 'If the hands improve while the speed stays merely adequate, that possession profile still plays, tilted toward the middle of the field.',
        },
        {
          label: 'Branch four',
          body: "And if neither improves, what's left is strength, blocking, and YAC on manufactured touches: an NFL contributor whose target volume never matches his build.",
        },
      ],
      outro: [
        "That's a wide range. It's supposed to be. The reason to name the branches now is so we know exactly which evidence trims them.",
      ],
    },
    featuredHook: 'Real route skill, real strength, and still not open enough. The separation gap has two candidate explanations, and only one of them can be coached.',
  },
  {
    slug: 'mike-matthews',
    name: 'Mike Matthews',
    sortKey: 'matthews',
    school: 'Tennessee',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#ff8200',
    bio: {
      heightFt: 6, heightIn: 1, weightLbs: 198,
      rosterClass: 'Junior',
      dateOfBirth: '2005-10-25',
      measurementStatus: 'school-listed',
    },
    teaser: 'No wider gap in the class between what his routes earn and what his hands keep.',
    thesis: 'No receiver in this class has a wider gap between what his routes earn and what his hands keep. His profile is that collision, and not much else.',
  },
  {
    slug: 'devin-mccuin',
    name: 'Devin McCuin',
    sortKey: 'mccuin',
    school: 'Ohio State',
    via: 'via UTSA',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bb0000',
    bio: {
      heightFt: 6, heightIn: 0, weightLbs: 189,
      rosterClass: 'Senior',
      dateOfBirth: '2005-05-21',
      measurementStatus: 'school-listed',
    },
    teaser: 'The most reliable hands in the transfer market, walking into a one-season natural experiment.',
    thesis: 'The best receiver program in the sport made an exception for a Group of Five slot with the most reliable hands in the transfer market. One season answers almost everything.',
  },
  {
    slug: 'omarion-miller',
    name: 'Omarion Miller',
    sortKey: 'miller',
    school: 'Arizona State',
    via: 'via Colorado',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#8c1d40',
    bio: {
      heightFt: 6, heightIn: 2, weightLbs: 210,
      rosterClass: 'Senior',
      measurementStatus: 'school-listed',
    },
    teaser: "The body was never the question. The diagnosis of what's missing is.",
    thesis: "What he is physically was never the question. The question is the diagnosis of what's missing, and the two candidate diagnoses lead to two completely different careers.",
  },
  {
    slug: 'tj-moore',
    name: 'TJ Moore',
    sortKey: 'moore',
    school: 'Clemson',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#f56600',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 200,
      rosterClass: 'Junior',
      dateOfBirth: '2006-04-14',
      measurementStatus: 'school-listed',
    },
    teaser: 'A receiver waiting on his body. The craft is ahead of the tools, and the fix is pounds.',
    thesis: 'Most of this class is athletes learning to play receiver. Moore is the opposite: a receiver waiting on his body, and the strengths, the flaw, and the fix all point at the same place.',
  },
  {
    slug: 'deuce-robinson',
    name: 'Deuce Robinson',
    sortKey: 'robinson',
    school: 'Florida State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#782f40',
    bio: {
      heightFt: 6, heightIn: 6, weightLbs: 230,
      rosterClass: 'Senior',
      dateOfBirth: '2005-01-19',
      measurementStatus: 'school-listed',
    },
    teaser: 'Crafty where the frame promises crude, soft where it promises hard. Which position is he?',
    thesis: "6'6 and 222 comes with a job description, and his film reads it backwards: crafty where the frame promises crude, soft where the body promises hard.",
  },
  {
    slug: 'eric-singleton-jr',
    name: 'Eric Singleton Jr.',
    sortKey: 'singleton',
    school: 'Florida',
    via: 'via Auburn and Georgia Tech',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#fa4616',
    bio: {
      heightFt: 5, heightIn: 10, weightLbs: 182,
      rosterClass: 'Senior',
      measurementStatus: 'school-listed',
    },
    teaser: 'May be the fastest player in the class. Short record, short profile, on purpose.',
    thesis: 'He may be the fastest player in the class. The book on him is thin, so the profile stays thin with it, on purpose.',
  },
  {
    slug: 'jeremiah-smith',
    name: 'Jeremiah Smith',
    sortKey: 'smith',
    school: 'Ohio State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bb0000',
    bio: {
      heightFt: 6, heightIn: 3, weightLbs: 223,
      rosterClass: 'Junior',
      dateOfBirth: '2005-11-29',
      measurementStatus: 'school-listed',
    },
    teaser: "I went hunting for cracks and didn't find much. The one question is how fast the route detail arrives.",
    thesis: "I went hunting for cracks and didn't find much. What's left is a timeline question, not a ceiling question.",
    featuredHook: "The most famous receiver in college football, and I couldn't find much to argue with. What's left is a timeline question, and 2026 starts the clock.",
  },
  {
    slug: 'amari-thomas',
    name: 'Amari Thomas',
    sortKey: 'thomas',
    school: 'Houston',
    via: 'via UAB',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#c8102e',
    bio: {
      heightFt: 6, heightIn: 0, weightLbs: 205,
      rosterClass: 'Senior',
      dateOfBirth: '2005-11-18',
      measurementStatus: 'school-listed',
    },
    teaser: 'One outstanding weapon, one blank page. Nobody has seen him against press.',
    thesis: "One outstanding weapon, one blank page, and one paradox worth working through slowly. The anonymity won't survive his film.",
  },
  {
    slug: 'bryant-wesco-jr',
    name: 'Bryant Wesco Jr.',
    sortKey: 'wesco',
    school: 'Clemson',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#f56600',
    bio: {
      heightFt: 6, heightIn: 2, weightLbs: 195,
      rosterClass: 'Junior',
      dateOfBirth: '2005-09-22',
      measurementStatus: 'school-listed',
    },
    teaser: "Nobody argues about the craft. The argument is over what kind of receiver it's attached to.",
    thesis: 'A 190-pound receiver with the most advanced route and release craft of the top names, and evidence pointing in two opposite directions about what kind of receiver he is.',
    fork: {
      heading: 'NFL translation: two different players',
      layout: 'panels',
      intro: ['Because of the identity question, I have to write this section twice.'],
      paths: [
        {
          label: 'If the deep speed is real',
          body: 'Complete outside X, release craft that beats press, routes that beat zone, a vertical game that keeps safeties honest.',
        },
        {
          label: "If it isn't",
          body: 'A craft receiver who wins underneath and intermediate, needs a smart deployment plan, and gives back some value against physical press until the mass arrives.',
        },
      ],
      outro: [
        "Both versions are draftable starters. They're just not the same player, and I'd rather admit that both are still on the table than average them into a receiver who doesn't exist.",
        'Either way, the strength curve matters as much as the speed answer. At 190 pounds with a surgically repaired back, the weight room is not optional.',
      ],
    },
    featuredHook: 'The most advanced route and release craft of the top names, in a 190-pound frame with an unresolved identity: deep threat, or craft receiver who needs protecting from the vertical role?',
  },
  {
    slug: 'ryan-coleman-williams',
    name: 'Ryan Coleman Williams',
    sortKey: 'coleman williams',
    school: 'Alabama',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#9e1b32',
    bio: {
      heightFt: 6, heightIn: 0, weightLbs: 182,
      rosterClass: 'Junior',
      dateOfBirth: '2007-02-09',
      measurementStatus: 'school-listed',
    },
    teaser: 'Two seasons, two different players. The whole job is refusing to average them.',
    thesis: 'Two seasons of evidence pointing in opposite directions, two completely different players wearing the same jersey. The whole job is refusing to average them.',
    fork: {
      heading: 'NFL translation',
      layout: 'panels',
      intro: ["The range here is wide, and that's just where the evidence leaves it."],
      paths: [
        {
          label: 'If the freshman version returns',
          body: 'He projects as a featured outside receiver whose speed bends coverage and whose route feel was already advanced for his age, a three-level starter with true number-one upside.',
        },
        {
          label: 'If the 2025 version persists',
          body: 'The projection collapses toward a situational vertical weapon, the boom-only deep threat whose drops and blocking keep him off the field on schedule downs, and whose snap count caps everything else.',
        },
      ],
      outro: [
        "The tiebreaker nobody should skip: he plays this college season at nineteen. Even a partial rebound would make him one of the youngest premium receivers available in any class, with two full SEC seasons already banked. Age doesn't catch drops. It does buy development time most prospects never get.",
      ],
    },
  },
  {
    slug: 'ryan-wingo',
    name: 'Ryan Wingo',
    sortKey: 'wingo',
    school: 'Texas',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bf5700',
    bio: {
      heightFt: 6, heightIn: 2, weightLbs: 214,
      rosterClass: 'Junior',
      dateOfBirth: '2006-02-15',
      measurementStatus: 'school-listed',
    },
    teaser: "The purest tools bet in the class. What's special is special, what's missing is missing.",
    thesis: "The purest tools bet in the class. What's special about him is emphatically special. What's missing is emphatically missing. There's no mystery, just an argument about the price.",
    fork: {
      heading: 'NFL translation',
      layout: 'panels',
      intro: [
        "Day one, he's a vertical stressor and a manufactured-touch weapon, and that package alone gets a roster spot and a role: go routes, sweeps, shot plays, the gravity that keeps safeties honest. The full-tree X projection only exists on the other side of the hands rebuild, and the feel question decides whether he ever becomes more than a straight-line problem.",
        'So the projection forks the way tools bets always fork.',
      ],
      paths: [
        {
          label: 'If the catching stabilizes',
          body: "If the catching stabilizes and even average feel arrives, he's a high-end NFL starter, because nobody can match the frame-speed combination.",
        },
        {
          label: 'If neither arrives',
          body: "If neither arrives, he's a decade of coaches getting fired for believing they'd be the ones to fix him.",
        },
      ],
    },
  },
  {
    slug: 'wyatt-young',
    name: 'Wyatt Young',
    sortKey: 'young',
    school: 'Oklahoma State',
    via: 'via North Texas',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#ff7300',
    bio: {
      heightFt: 6, heightIn: 0, weightLbs: 199,
      rosterClass: 'Junior',
      measurementStatus: 'school-listed',
    },
    teaser: 'The best player in this class who might not be in it.',
    thesis: 'The skills are loud and specific. The questions are structural: the level, the stopwatch, and the calendar itself, because he may not be in this class at all.',
  },
]

/** Neutral ordering: alphabetical by surname. Never a board. */
export const orderedPlayers: Player[] = [...players].sort((a, b) =>
  a.sortKey.localeCompare(b.sortKey),
)

export const featuredPlayers: Player[] = ['jeremiah-smith', 'cam-coleman', 'bryant-wesco-jr', 'nick-marsh', 'kj-duff']
  .map((slug) => players.find((p) => p.slug === slug)!)

export function getPlayer(slug: string): Player | undefined {
  return players.find((p) => p.slug === slug)
}

export function neighborsOf(slug: string): { prev: Player; next: Player } | null {
  const i = orderedPlayers.findIndex((p) => p.slug === slug)
  if (i === -1) return null
  const n = orderedPlayers.length
  return {
    prev: orderedPlayers[(i - 1 + n) % n],
    next: orderedPlayers[(i + 1) % n],
  }
}

/**
 * Held for more evidence: real prospects, no full profile yet.
 * Unknown is allowed. These lines only describe what the record holds.
 */
export const heldProspects: HeldProspect[] = [
  {
    slug: 'junior-sherrill',
    name: 'Junior Sherrill',
    school: 'Vanderbilt',
    accent: '#a8996e',
    bio: {
      heightFt: 5, heightIn: 11, weightLbs: 200,
      rosterClass: 'Senior',
      dateOfBirth: '2005-06-14',
      measurementStatus: 'school-listed',
    },
    line: "What exists so far is all intangibles: motor, density, special-teams value. Routes, hands, and press are unexamined, and I can't write a profile on intangibles alone.",
  },
  {
    slug: 'braylon-staley',
    name: 'Braylon Staley',
    school: 'Tennessee',
    accent: '#ff8200',
    bio: {
      heightFt: 6, heightIn: 0, weightLbs: 190,
      rosterClass: 'Redshirt Sophomore',
      dateOfBirth: '2006-04-27',
      measurementStatus: 'school-listed',
    },
    line: 'The early book is real explosiveness and long speed with the finishing behind it. No deep look exists yet, and he may not be in this class at all.',
  },
]
