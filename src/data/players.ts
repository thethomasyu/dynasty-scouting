import type { HeldProspect, Player } from './types'

/**
 * The 2027 WR manifest. Names, schools, and transfer paths follow the
 * canonical research names in the class index. Teasers and theses reuse or
 * closely track each profile's own language; nothing here adds a scouting
 * claim the profile does not make.
 *
 * Order in this file is irrelevant; the UI sorts by sortKey (alphabetical).
 */
export const players: Player[] = [
  {
    slug: 'cooper-barkate',
    name: 'Cooper Barkate',
    sortKey: 'barkate',
    school: 'Miami',
    via: 'via Duke and Harvard',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#f47321',
    teaser: 'Produced at Harvard, then Duke, now Miami. Precision without an outlier trait, and one variable left.',
    thesis: 'Maybe the most professional route-level game in the class’s middle tier, attached to the kind of athletic profile NFL offenses have a habit of discarding.',
    sectionRoles: {
      'Translation and the last variable': 'translation',
    },
  },
  {
    slug: 'charlie-becker',
    name: 'Charlie Becker',
    sortKey: 'becker',
    school: 'Indiana',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#990000',
    teaser: 'The loudest per-target numbers in the class, produced inside the smallest job description.',
    thesis: 'Some of the loudest per-target numbers in the class, produced inside the smallest job description in the class. Both facts are real, and the profile is about holding them at once.',
    sectionRoles: {
      'NFL translation': 'translation',
      'The 2026 syllabus': 'question',
    },
    question: {
      text: 'Was the late-season deep dominance real top-end speed, or acceleration and scheme leverage dressed up as speed?',
      kicker: 'The speed fork',
      beforeHeading: 'What isn’t on film yet',
    },
  },
  {
    slug: 'cam-coleman',
    name: 'Cam Coleman',
    sortKey: 'coleman',
    school: 'Texas',
    via: 'via Auburn',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bf5700',
    teaser: 'Maybe the most polished big receiver in the class, and two years of Auburn quarterback play kept it quiet.',
    thesis: 'He might be the most polished big receiver in this class right now, and the file contains exactly one real argument. The 2026 season is built to settle it.',
    sectionRoles: {
      'NFL translation': 'translation',
      'What I’m watching in 2026': 'question',
      'What would change the evaluation': 'change',
    },
    question: {
      text: '“Tracking” is two skills wearing one name.',
      kicker: 'The tracking question',
      beforeHeading: 'The one real argument: the deep ball',
    },
    featuredHook: 'The most polished big receiver in the class, hidden behind two years of Auburn quarterback play. One argument is left, and Texas is built to settle it.',
  },
  {
    slug: 'mario-craver',
    name: 'Mario Craver',
    sortKey: 'craver',
    school: 'Texas A&M',
    via: 'via Mississippi State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#500000',
    teaser: 'One of the fastest players in the class, listed anywhere from 165 to 180 pounds. The scale decides.',
    thesis: 'One of the fastest players in the class, listed anywhere from 165 to 180 pounds. Every serious question on the file eventually routes back to the scale.',
    sectionRoles: {
      'NFL translation': 'translation',
      'The weigh-in season': 'question',
    },
  },
  {
    slug: 'kj-duff',
    name: 'KJ Duff',
    sortKey: 'duff',
    school: 'Rutgers',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#cc0033',
    teaser: 'Gets open the way a power forward gets a rebound: before the ball goes up.',
    thesis: 'The question with him was never skill. It’s whether the job he’s built for still produces NFL difference-makers, and whether he’s the exception.',
    sectionRoles: {
      'NFL translation': 'translation',
      '2026: the season that grades the archetype': 'question',
      'What would change the evaluation': 'change',
    },
    question: {
      text: 'Where you land on Duff will say nearly as much about how you feel about giant receivers as it says about Duff.',
      kicker: 'What’s actually being graded',
      beforeHeading: 'The archetype referendum',
    },
    featuredHook: 'A legitimate 6’5-plus with receiver hands and none of the usual stiffness. The class’s premier big-frame archetype, and a referendum on whether the archetype still pays.',
  },
  {
    slug: 'jordan-faison',
    name: 'Jordan Faison',
    sortKey: 'faison',
    school: 'Notre Dame',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#c99700',
    teaser: 'The argument is a slope, not a level. Football finally gets all of him.',
    thesis: 'The argument for Faison is a slope, not a level: a national-champion lacrosse player whose routes stopped looking borrowed the moment football got most of his year.',
  },
  {
    slug: 'jayden-greathouse',
    name: 'Jayden Greathouse',
    sortKey: 'greathouse',
    school: 'Notre Dame',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#c99700',
    teaser: 'A bet that habits outrun a stopwatch, with a lost season stacked on top.',
    thesis: 'A professional-habits receiver at a dense 213 pounds. The evaluation is a bet that habits can outrun a stopwatch, and a lost season added a second bet on top.',
    sectionRoles: {
      'Translation and the fall test': 'translation',
    },
  },
  {
    slug: 'nick-harbor',
    name: 'Nick Harbor',
    sortKey: 'harbor',
    school: 'South Carolina',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#73000a',
    teaser: 'Tight-end mass at burner speed, and three seasons where the tools and the results never met.',
    thesis: 'Tight-end mass moving at burner speed, a combination the sport has no shelf for. Three seasons in, the tools and the results still haven’t met.',
    sectionRoles: {
      'NFL translation': 'translation',
      'What year four has to show': 'question',
    },
    question: {
      text: 'Three college seasons in, the tools and the results still haven’t met.',
      kicker: 'The whole evaluation',
      beforeHeading: 'The riddle',
    },
    fork: {
      heading: 'NFL translation',
      layout: 'panels',
      paths: [
        {
          label: 'If it assembles',
          body: 'The projection is simple: a boundary vertical mismatch X with a deliberately narrow route menu, the big-body deep threat teams scheme shots for, plus red zone gravity. That player starts in the NFL even with a limited tree.',
        },
        {
          label: 'If it never assembles',
          body: 'He’s a body the league keeps auditioning, a testing-season star whose college film reads like an unfinished sentence.',
        },
      ],
      outro: [
        'There isn’t much middle ground, which is what makes him one of the most volatile evaluations in the class.',
        'The measurables sit oddly for such a physically defined prospect: two different listed weights, no verified forty, a GPS number doing all the speed testimony. His testing, whenever it happens, will move his stock more than most.',
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
    teaser: 'A sketch, not a portrait. 6’4 and 220, hidden in one of the worst passing offenses around.',
    thesis: 'A sketch, not a portrait: a spring-verified 6’4 and 220 who spent his college career hidden in plain sight, with plenty of the file still dark.',
  },
  {
    slug: 'kenny-johnson',
    name: 'Kenny Johnson',
    sortKey: 'johnson',
    school: 'Texas Tech',
    via: 'via Pittsburgh',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#cc0000',
    teaser: 'Manufactures separation with geometry. Around that one rare skill, mostly fog.',
    thesis: 'One proven, unusual thing: separation manufactured with geometry, other people’s bodies included. Around it, mostly fog.',
    sectionRoles: {
      'What would fill in the file': 'question',
    },
  },
  {
    slug: 'nick-marsh',
    name: 'Nick Marsh',
    sortKey: 'marsh',
    school: 'Indiana',
    via: 'via Michigan State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#990000',
    teaser: 'Looks like the finished product, and still doesn’t get open enough. The why owns the file.',
    thesis: 'He has real route skill and real strength and still doesn’t get open enough. The why matters more than the outcome, because the why decides whether coaching can fix it.',
    sectionRoles: {
      'How the futures branch': 'translation',
      'Biggest question entering 2026': 'question',
      'What would change the evaluation': 'change',
    },
    question: {
      text: 'Marsh has real route skill and real strength and still doesn’t get open enough.',
      kicker: 'The puzzle',
      beforeHeading: 'So why isn’t he open more?',
    },
    fork: {
      heading: 'How the futures branch',
      layout: 'branches',
      intro: ['Two questions dominate this evaluation, so the projection is a branch.'],
      paths: [
        {
          label: 'Branch one',
          body: 'If the speed is better than the film suggests and the catch point gets retrained, you’re looking at a big, violent, complete boundary receiver, and the breakout narrative gets vindicated in full.',
        },
        {
          label: 'Branch two',
          body: 'If the speed is capped but he learns to attack the ball, he’s a chain-moving possession X with rare after-catch power for the position: a starter who wins ugly and moves sticks.',
        },
        {
          label: 'Branch three',
          body: 'If the hands improve while the speed stays merely adequate, that possession profile still plays, tilted toward the middle of the field.',
        },
        {
          label: 'Branch four',
          body: 'And if neither improves, the profile thins to strength, blocking, and YAC on manufactured touches: an NFL contributor whose target volume never matches his build.',
        },
      ],
      outro: [
        'That’s a wide range. It’s supposed to be. The point of naming the branches now is knowing exactly which evidence prunes them.',
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
    teaser: 'No wider gap in the class between what his routes earn and what his hands keep.',
    thesis: 'No receiver in this class has a wider gap between what his routes earn and what his hands keep. The profile is that collision, and not much else.',
    sectionRoles: {
      'Translation and the trial': 'translation',
    },
  },
  {
    slug: 'devin-mccuin',
    name: 'Devin McCuin',
    sortKey: 'mccuin',
    school: 'Ohio State',
    via: 'via UTSA',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bb0000',
    teaser: 'The most reliable hands in the transfer market, walking into a one-season natural experiment.',
    thesis: 'The best receiver program in the sport made an exception for a Group of Five slot with the most reliable hands in the transfer market. One season answers almost everything.',
    sectionRoles: {
      'NFL translation': 'translation',
      'One season, four answers': 'question',
    },
  },
  {
    slug: 'omarion-miller',
    name: 'Omarion Miller',
    sortKey: 'miller',
    school: 'Arizona State',
    via: 'via Colorado',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#8c1d40',
    teaser: 'The body was never the question. The diagnosis of what’s missing is.',
    thesis: 'What he is physically was never the question. The open question is the diagnosis of what’s missing, and the two candidate diagnoses lead to two completely different careers.',
    sectionRoles: {
      'NFL translation': 'translation',
      'The senior-year exam': 'question',
    },
    question: {
      text: 'Is the nuance gap one missing habit or a whole missing discipline?',
      kicker: 'The diagnosis',
      beforeHeading: 'Two versions of the same flaw',
    },
  },
  {
    slug: 'tj-moore',
    name: 'TJ Moore',
    sortKey: 'moore',
    school: 'Clemson',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#f56600',
    teaser: 'A receiver waiting on his body. The craft is ahead of the tools, and the fix is pounds.',
    thesis: 'Most of this class is athletes learning to play receiver. Moore is a receiver waiting on his body, and the strengths, the flaw, and the fix all point at the same place.',
    sectionRoles: {
      'NFL translation': 'translation',
      '2026, in two measurements': 'question',
    },
  },
  {
    slug: 'deuce-robinson',
    name: 'Deuce Robinson',
    sortKey: 'robinson',
    school: 'Florida State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#782f40',
    teaser: 'Crafty where the frame promises crude, soft where it promises hard. Which position is he?',
    thesis: '6’6 and 222 comes with a job description, and his film reads it backwards: crafty where the frame promises crude, soft where the body promises hard.',
    sectionRoles: {
      'Translation, sized to team': 'translation',
    },
  },
  {
    slug: 'eric-singleton-jr',
    name: 'Eric Singleton Jr.',
    sortKey: 'singleton',
    school: 'Florida',
    via: 'via Auburn and Georgia Tech',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#fa4616',
    teaser: 'May be the fastest player in the class. Short file, short profile, on purpose.',
    thesis: 'He may be the fastest player in the class. The book on him is thin, so the profile stays thin with it, on purpose.',
  },
  {
    slug: 'jeremiah-smith',
    name: 'Jeremiah Smith',
    sortKey: 'smith',
    school: 'Ohio State',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#bb0000',
    teaser: 'The case is about as clean as it gets. The one question is how fast the route detail arrives.',
    thesis: 'The hunt for cracks came up mostly empty; the case is about as clean as these things get. What’s left is a timeline question, not a ceiling question.',
    sectionRoles: {
      'NFL translation': 'translation',
      'What 2026 can settle': 'question',
      'What would move this evaluation': 'change',
    },
    question: {
      text: 'Does the fine-grain route work start showing up, and what happens the first time a corner disrupts him with technique instead of muscle?',
      kicker: 'The 2026 question',
      beforeHeading: 'The contact habit',
    },
    featuredHook: 'The most famous receiver in college football, and the hunt for cracks came up mostly empty. What’s left is a timeline question, and 2026 starts the clock.',
  },
  {
    slug: 'amari-thomas',
    name: 'Amari Thomas',
    sortKey: 'thomas',
    school: 'Houston',
    via: 'via UAB',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#c8102e',
    teaser: 'One outstanding weapon, one blank page. Nobody has seen him against press.',
    thesis: 'One outstanding weapon, one blank page, and one paradox worth untangling slowly. The anonymity won’t survive contact with his film.',
    sectionRoles: {
      'NFL translation': 'translation',
      'What the senior year has to write': 'question',
    },
    question: {
      text: 'Does anything here survive outside the slot?',
      kicker: 'Untested, not failed',
      beforeHeading: 'The blank page',
    },
  },
  {
    slug: 'bryant-wesco-jr',
    name: 'Bryant Wesco Jr.',
    sortKey: 'wesco',
    school: 'Clemson',
    position: 'WR', classYear: '2027', stage: 'Early Evaluation', stageDate: 'Summer 2026',
    accent: '#f56600',
    teaser: 'The skill is settled. The species is not.',
    thesis: 'The skill is settled. The species is not. A 190-pound receiver with the most advanced craft of the top names, and evidence pointing two opposite directions about what he is.',
    sectionRoles: {
      'The medical file': 'medical',
      'NFL translation: two different players': 'translation',
      'What 2026 has to answer': 'question',
      'What would change the evaluation': 'change',
    },
    question: {
      text: 'Is he an NFL deep threat?',
      kicker: 'One question, two receivers',
      beforeHeading: 'The fork: what kind of receiver is this?',
    },
    fork: {
      heading: 'NFL translation: two different players',
      layout: 'panels',
      intro: ['Because of the fork, the translation section has to be written twice.'],
      paths: [
        {
          label: 'Player A · the deep speed is real',
          body: 'Complete outside X, release craft that beats press, routes that beat zone, a vertical game that holds safeties honest.',
        },
        {
          label: 'Player B · the capped version',
          body: 'A craft receiver who wins underneath and intermediate, needs a smart deployment plan, and gives back some value against physical press until the mass arrives.',
        },
      ],
      outro: [
        'Both players are draftable starters. They’re just not the same player, and I’d rather admit the file currently contains both than average them into a receiver who doesn’t exist.',
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
    teaser: 'Two seasons, two different players. The discipline is refusing to average them.',
    thesis: 'Two seasons of evidence, pointing opposite directions. The file contains two players wearing the same number, and the entire discipline of evaluating him is refusing to average them.',
    sectionRoles: {
      'NFL translation': 'translation',
      'The rebound checklist': 'question',
    },
    question: {
      text: 'Which season is the player?',
      kicker: 'The question over everything',
      beforeHeading: 'The harder read',
    },
    fork: {
      heading: 'NFL translation',
      layout: 'panels',
      intro: ['The fork is wide and honest.'],
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
        'The tiebreaker nobody should skip: he plays this college season at nineteen. Even a partial rebound would make him one of the youngest premium receivers available in any class, with two full SEC seasons already banked. Age doesn’t catch drops. It does buy development time that most prospects never get.',
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
    teaser: 'The class’s purest tools bet. What’s special is special, what’s missing is missing.',
    thesis: 'The class’s purest bet on tools. What’s special about him is emphatically special. What’s missing is emphatically missing. There’s no mystery here, just a price argument.',
    sectionRoles: {
      'NFL translation': 'translation',
      'What 2026 has to show': 'question',
    },
    question: {
      text: 'Does he attack the ball?',
      kicker: 'The gate',
      beforeHeading: 'The catching problem',
    },
    fork: {
      heading: 'NFL translation',
      layout: 'panels',
      intro: [
        'Day one, he’s a vertical stressor and a manufactured-touch weapon, and that package alone gets a roster spot and a role: go routes, sweeps, shot plays, the gravity that makes safeties honest. The full-tree X projection exists only on the other side of the hands rebuild, and the feel question decides whether he ever becomes more than a straight-line problem.',
        'So the projection forks the way tools bets always do.',
      ],
      paths: [
        {
          label: 'If the catching stabilizes',
          body: 'The version where the catching stabilizes and even average feel arrives is a high-end NFL starter, because nobody can match the frame-speed combination.',
        },
        {
          label: 'If neither arrives',
          body: 'The version where neither arrives is a decade of coaches getting fired for believing they’d be the ones to fix it.',
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
    teaser: 'The best player in this class who might not be in it.',
    thesis: 'The skills are loud and specific. The questions are structural: the level, the stopwatch, and the calendar itself, because he may not be in this class at all.',
    sectionRoles: {
      'NFL translation': 'translation',
      'The audition year': 'question',
    },
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
    line: 'What exists so far is an intangibles case: motor, density, special-teams value. Routes, hands, and press are unexamined, and a profile can’t run on intangibles alone.',
  },
  {
    slug: 'braylon-staley',
    name: 'Braylon Staley',
    school: 'Tennessee',
    accent: '#ff8200',
    line: 'The early book is real explosiveness and long speed with the finishing behind it. No deep look exists yet, and he may not be in this class at all.',
  },
]
