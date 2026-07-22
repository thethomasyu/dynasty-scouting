import type { Presentation } from './types'

/**
 * TJ Moore. Mid-depth file, unusually steady: a receiver waiting on his
 * body. The signature visual is the bridge between two facts that don't
 * seem to fit: great hands, grim contested numbers.
 */
const moore: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'Sinks and flips his hips at the top of comeback-family routes, which long-legged receivers mostly can’t do. Executed rather than invented, and that’s a fair note.',
    },
    {
      category: 'Ball Skills',
      tier: 'Strength',
      note: 'Clean, full-extension hands with spectacular reach catches on tape. The contested losses file under strength, not hands.',
    },
    {
      category: 'Release & Press',
      tier: 'Major Strength',
      note: 'Plays the line with educated hands: sets corners up, breaks the punch before it lands, and owns a two-step diamond release. Most guys learn this at 24, in the pros, expensively.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Concern',
      note: 'Not a special athlete, and the film doesn’t argue otherwise. Build-up speed, functional burst, a top gear that arrives late.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Not on record either way.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'Knows where the soft spots in zone live and settles into them.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Concern',
      note: 'Coverage bumps him off his spots through contact he should be too big to feel. The blocking effort is already fine; the complaint is his own routes, never his willingness.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Educated hands at the line',
          icon: 'release',
          detail:
            'He sets corners up and breaks their punch away before it lands, winning with a plan instead of a burst. Clean mandatory releases plus a two-step diamond with instant separation attached.',
        },
        {
          name: 'Hips tall receivers don’t have',
          icon: 'route',
          detail:
            'At 6\'3" he can sink and flip at the top of comeback-family routes, and he holds speed through bending in-breakers instead of gearing down. Exactly how a non-burner stays on schedule.',
        },
        {
          name: 'The soft spots',
          icon: 'iq',
          detail: 'Understands where zone coverage leaves grass and settles into it.',
        },
      ],
      expands: ['Craft first'],
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The number that looks like a typo',
      stats: [{ value: '6 of 18', label: 'Contested chances won, 2025' }],
      context:
        'At 6\'3", that needs explaining, because his hands are clean. The bridge is play strength: coverage bumps him off his spots before the ball arrives, so the catch never gets to be about his hands. The positioning battle was already lost a beat earlier.',
    },
    {
      kind: 'flow',
      title: 'Great hands, bad contested numbers',
      lead: 'Both facts are true, and his game only makes sense once you split them apart.',
      steps: [
        { label: 'Before the ball', text: 'Coverage bumps Moore off his spot, through contact he should be too big to feel this much.' },
        { label: 'At the ball', text: 'The position is already gone, so the rep never becomes a hands rep. Catching the ball and holding your ground are different skills. He has the first one and not the second.' },
      ],
      resolution: {
        label: 'Why I stay warm anyway',
        text: 'A hands problem at 20 is scary. A strength problem at 20, on a 6\'3" frame that’s been listed as low as 195, is a nutrition plan and two offseasons. Every failure he has routes back to the same missing pounds.',
      },
      expands: ['Great hands, bad contested numbers'],
    },
    {
      kind: 'read',
      title: 'The athletic ceiling',
      line: 'One fair reading says he’s close to a finished product. The other says a 20-year-old this good at the hard parts jumps a tier when the mass arrives. I lean toward the second, because betting against players who are already good at the hard parts is historically bad business.',
      expands: ['The athletic ceiling'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'X', primary: true },
        { pos: 'Slot' },
      ],
      note: 'A starter-caliber outside receiver whose margin is craft: releases, spacing, timing, catching in space. He’s played outside, inside, on and off the line.',
      immediate: [
        'Press-beating craft that should show up weekly',
        'On-schedule route running a quarterback can trust',
        'A realistic early role as a trusted second or third receiver',
      ],
      unlock: 'The pounds. A visibly stronger Moore winning half his contested chances moves him up a tier, because the craft is already there waiting.',
      limitation: 'The ceiling question is athletic, unresolved, and easy to state: even with the mass, is there enough juice for more? Nobody knows yet, including him.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'The August scale',
          question: 'Whatever number Clemson lists him at, the whole evaluation starts there.',
          status: 'open',
        },
        {
          topic: 'The collision reps',
          question: 'Does contact still move him off his stem, and do the contested balls start splitting even?',
          status: 'open',
        },
        {
          topic: 'Press craft vs the best',
          question: 'His NFL meal ticket, and it should show up weekly.',
          status: 'open',
        },
        {
          topic: 'Any verified testing',
          question: 'It either confirms the ceiling or deletes it.',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['A visibly stronger Moore winning half his contested chances. The craft is already there waiting.'],
      down: ['The same losses at the same weight, which confirms the ceiling and shifts the projection toward a complementary role for good.'],
      unknown: ['A surprise in the speed department, in either direction. It rewrites the one sentence in this profile I’m not sure about.'],
    },
  ],
}

export default moore
