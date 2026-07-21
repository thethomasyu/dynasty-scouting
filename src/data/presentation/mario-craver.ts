import type { Presentation } from './types'

/**
 * Mario Craver. Mid-depth file where every question routes back to the
 * scale. The weight-range module leads because the profile does.
 */
const craver: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Adequate',
      note: 'The speed is still doing most of the work, with tempo manipulation showing up in flashes. If real pacing arrives, the speed plays at all three levels instead of mostly deep.',
    },
    {
      category: 'Ball Skills',
      tier: 'Unknown',
      note: 'No real catch record on file either way.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'Mostly free releases so far. The physical-coverage problem shows up after the snap, and it files under the frame.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Major Strength',
      note: 'One of the fastest players in the class, with a 10.74 hundred behind the film. The acceleration breaks pursuit angles before defenders finish choosing them.',
    },
    {
      category: 'YAC Ability',
      tier: 'Major Strength',
      note: '22 forced missed tackles, roughly 600 yards after the catch, a signature spin move, and zero fear of the middle.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'Not separately on record.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Concern',
      note: 'The compete is real: willing blocking at his size, visible effort. The mass is the issue, and it isn’t technique.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'range',
      kicker: 'The number that refuses to hold still',
      stats: [
        { value: '165', label: 'Listed weight range, in pounds' },
        { value: '180', label: '' },
      ],
      context:
        'A fifteen-pound spread, and it’s the least trivial listing dispute in the class. At 180, he’s a small receiver. At 165, he’s playing below the weight range where the NFL has any real history to price him with. Every serious question about him eventually comes back to the scale.',
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Two jobs of speed',
          icon: 'bolt',
          detail:
            'The top gear wins footraces outright: when he’s even, he’s gone. The acceleration is the sneakier weapon, turning eight yards into forty-eight because pursuit angles break early.',
        },
        {
          name: 'After the catch, precisely',
          icon: 'yac',
          detail:
            '22 forced missed tackles and a signature spin. Keep the claim precise: he stays upright through brushes. He doesn’t run through wrapped-up tacklers, and nobody should expect him to.',
        },
        {
          name: 'The compete',
          icon: 'shield',
          detail:
            'Willing blocking at his size, visible effort, zero fear of the middle. Small receivers who compete like this buy themselves real NFL patience.',
        },
      ],
      expands: ['The speed', 'After the catch'],
    },
    {
      kind: 'flow',
      title: 'The timing problem',
      lead: 'His most natural NFL home is the quick game, and the quick game is exactly where college corners already found his weakness.',
      steps: [
        { label: 'The contact', text: 'Physical slot coverage hangs him up. They rarely stopped him outright, and they didn’t need to.' },
        { label: 'The half beat', text: 'Being held up for half a beat breaks the play’s rhythm, and rhythm is the entire point of those routes.' },
        { label: 'Why it follows him', text: 'The vulnerability is mass, not technique, which is why I expect it to travel up a level.' },
      ],
      resolution: {
        label: 'The uncomfortable question',
        text: 'Can an offense built on schedule and spacing rely on a receiver whom slot defenders can legally bump off schedule? Role design has to answer before a team drafts the role.',
      },
      expands: ['The timing problem'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Movement' },
      ],
      note: 'A motion-and-space slot with vertical gravity: move him around, buy him free releases, let the acceleration do the damage. Role design decides a lot of his career.',
      immediate: [
        'Manufactured touches: screens, drags, motion',
        'Vertical gravity that bends coverage',
        'Return-game candidacy he ran in high school',
      ],
      unlock: 'Real route pacing. The tempo flashes growing up would make the three-level version of him real instead of theoretical.',
      limitation: 'A staff that asks him to win on-schedule timing routes against physical slot coverage inherits the college problem at NFL strength.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'Timing routes vs physical slots',
          question: 'The SEC version of this is the NFL exam in college clothing.',
          status: 'open',
        },
        {
          topic: 'Tempo flashes into pacing',
          question: 'Does the manipulation grow from flashes into a real layer?',
          status: 'open',
        },
        {
          topic: 'The return game',
          question: 'He ran it in high school and should finally get to run it here.',
          status: 'open',
        },
        {
          topic: 'Any verified weight',
          question: 'The one measurement that reprices everything.',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: [
        'A confirmed 180 with the same burst deletes half the concern column at once.',
        'Visible route pacing, which makes the three-level version of him real instead of theoretical.',
      ],
      down: [
        'A season of getting bodied off schedule in the quick game caps the projection at designed-touch specialist: a fun player and a much cheaper one.',
      ],
    },
  ],
}

export default craver
