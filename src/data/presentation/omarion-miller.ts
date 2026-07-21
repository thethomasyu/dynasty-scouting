import type { Presentation } from './types'

/**
 * Omarion Miller. Deep file organized around a diagnosis: one missing
 * habit, or a whole missing discipline. The route-family split is the
 * teaching visual.
 */
const miller: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Concern',
      note: 'The nuance sits below the athleticism, and the argument worth having is about the shape of the gap. That split gets the middle of this page.',
    },
    {
      category: 'Ball Skills',
      tier: 'Mixed',
      note: 'Above 60% contested with real comfort in traffic, next to a double-digit concentration drop rate. His hard-catch tape is better than his easy-catch tape.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'College never forced him to develop answers at the line. The pros will ask in week one.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Major Strength',
      note: 'At a weight in the 71st percentile for the position, the burst and gliding stride are special rather than merely good. The top gear is undocumented.',
    },
    {
      category: 'YAC Ability',
      tier: 'Strength',
      note: 'Sturdy and fluid at the same time: absorbs the first hit and keeps going. A fair argument says the numbers undersell it.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Mixed',
      note: 'Settles into soft spots on some reps, drifts into coverage on others. He may own one behavior and lack the other. No verdict yet.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Unknown',
      note: 'Not separately on record.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Explosion at 210',
          icon: 'bolt',
          detail:
            'The foundation of everything. Heavy for the position and he moves in a way that makes you double-check the listing. The two-sport background backs it up: 26 points a game as a high school basketball player.',
        },
        {
          name: 'Comfort in traffic',
          icon: 'target',
          detail:
            'He’ll adjust, absorb the contact, and finish with people hanging on him. Big athletes usually aren’t this calm in crowds.',
        },
        {
          name: 'Through the first hit',
          icon: 'yac',
          detail: 'Sturdy and fluid after the catch. The first tackler rarely ends the play alone.',
        },
      ],
      expands: ['The tools'],
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'A number and its shadow',
      stats: [{ value: '60%+', label: 'Contested-catch rate, 2025' }],
      context:
        'Winning those balls is a real skill. Needing to win that many of them tells you something, because part of his contested volume exists precisely because he wasn’t separating downfield. The number and its shadow both belong in the evaluation.',
    },
    {
      kind: 'question',
      kicker: 'The diagnosis',
      question: 'Is the nuance gap one missing habit or a whole missing discipline?',
      facets: [
        {
          label: 'The wide reading',
          body: 'The nuance just isn’t there, anywhere: a big, explosive athlete who never had to sell a route in his life, with the whole deception layer still to build. Receivers who start that late have a long history of never finishing.',
        },
        {
          label: 'The narrow reading',
          body: 'The nuance already exists, selectively. On slants and posts his head fakes are real and they fool people. The absence lives in one specific place: he doesn’t sell vertical before hard-stop routes.',
        },
        {
          label: 'Why both fit',
          body: 'They describe the same film, because they’re describing different route families. That’s what makes this a real open question instead of a disagreement to wave off.',
        },
        {
          label: 'Where I lean',
          body: 'The narrow reading, held loosely until September, because the angled-route deception is too specific to be an accident.',
        },
      ],
    },
    {
      kind: 'diagram',
      diagram: 'stop-route-sell',
      title: 'The route-family split',
      lead: 'Corners sit on his hitches like they know what’s coming, because nothing sells vertical first. One of those sat-on hitches turned into an interception. Meanwhile the angled routes carry real deception.',
      caption: 'If the stop-route sell is the last missing piece, he’s one fix from the class’s upper tier. If it’s the visible edge of a general absence, he’s a multi-year project on a senior’s clock.',
      expands: ['The route problem, two ways to read it'],
    },
    {
      kind: 'read',
      title: 'Context, and the clock',
      line: 'Three quarterbacks in 2025 alone, a leg fracture in 2024, and a senior season at a receiver-development program that has earned its reputation, opposite Reed Harris. He will not lack opportunity or coaching. Which is a polite way of saying the excuses are used up.',
      expands: ['Context, and the clock'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Big Slot', primary: true },
        { pos: 'X' },
      ],
      note: 'Big slot or power outside receiver. Whether he’s an every-down starter or a situational size piece rides almost entirely on the route diagnosis above.',
      immediate: [
        'Contested catching and comfort in traffic',
        'Third downs, red zone, the friendly-window throws',
        'After-catch physicality',
      ],
      unlock: 'Stop routes that win at the break. Everything else is already NFL-shaped.',
      limitation: 'Release variety is its own open item, because college never forced answers at the line.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'Hitches and comebacks',
          question: 'Do corners keep sitting on them, or do they start getting sold vertical first?',
          status: 'open',
        },
        {
          topic: 'First real press answers',
          question: 'The line-of-scrimmage book is still unwritten.',
          status: 'open',
        },
        {
          topic: 'The drop count',
          question: 'Concentration drops should move immediately if he’s serious.',
          status: 'open',
        },
        {
          topic: 'The explosion itself',
          question: 'Measured against his own pre-injury standard across a full season.',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: [
        'A September where stop routes start winning at the break. The diagnosis settles the good way and his tier changes fast.',
      ],
      down: [
        'Another season where the only routes that win are the ones his body wins for him. The projection hardens into a role player with a great frame.',
      ],
      unknown: [
        'A verified speed number, whenever one shows up. It settles the long-speed question for good.',
      ],
    },
  ],
}

export default miller
