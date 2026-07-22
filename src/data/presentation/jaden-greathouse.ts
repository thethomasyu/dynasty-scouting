import type { Presentation } from './types'

/**
 * Jaden Greathouse. Moderate file: a habits bet with an injury bet
 * stacked on top. Compact page, two-bets diagnostic at the center,
 * medical panel visible because everything is conditional on the leg.
 */
const greathouse: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Unknown',
      note: 'Route technique is essentially unexamined. Unknown, not bad, and there’s a real difference.',
    },
    {
      category: 'Ball Skills',
      tier: 'Strength',
      note: 'Strong hands, and he catches through anticipated contact without flinching or shrinking the target.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'Press answers are essentially unexamined.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Concern',
      note: 'Not fast, maybe not notably explosive, with no athletic surplus to spend. The lost season taxes exactly that margin.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Essentially unexamined.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Major Strength',
      note: 'The core skill: a soft-spot radar in zone with a reliability that reads like a plan rather than luck.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'Blocks well and physically for a slot. Alignments near the line charge blocking as the entry fee, and he pays it willingly.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'The radar',
          icon: 'iq',
          detail: 'Sits down in zone and finds the soft spots over and over. Knowing where to be is his core skill, and everything else is built around it.',
        },
        {
          name: 'Nerve in the middle',
          icon: 'target',
          detail: 'Catches through the hit he knows is coming, without flinching or shrinking the target for his quarterback.',
        },
        {
          name: 'The entry fee, paid',
          icon: 'shield',
          detail: 'Dense 213 pounds and real slot blocking. Sounds minor, isn’t: it’s what keeps him on the field near the line.',
        },
      ],
      expands: ['How he wins'],
    },
    {
      kind: 'flow',
      kicker: 'Two bets, stacked',
      title: 'The shape of the evaluation',
      steps: [
        {
          label: 'Bet one',
          text: 'That professional habits can outrun a stopwatch. Receivers built on habits are volatile projections, because the margin between "always open by a step" and "never open" is thinner than it looks.',
        },
        {
          label: 'Bet two',
          text: 'That the burst comes back from a lost season and surgery. His game already runs on a thin athletic margin, and this is the kind of injury that taxes exactly that margin.',
        },
      ],
      resolution: {
        label: 'The uncomfortable part, out loud',
        text: 'The question is whether he’s enough of an athlete for the winning traits to survive NFL speed.',
      },
    },
    { kind: 'medical', heading: 'The injury' },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'Slot', primary: true }],
      note: 'A possession slot in a high-volume passing offense: a third-down living built on availability, position, and hands. Notre Dame should supply exactly that environment this fall.',
      immediate: ['Zone-beating from the soft spots', 'Trusted hands on money downs', 'Slot blocking from day one'],
      expands: ['NFL translation, and the fall test'],
    },
    {
      kind: 'watch',
      title: 'The fall test',
      lead: 'What I’m watching compresses into the season’s first month.',
      items: [
        { topic: 'The movement', question: 'Does he move like his 2024 self?', status: 'open' },
        { topic: 'The radar', question: 'Does the soft-spot instinct survive the rust?', status: 'open' },
      ],
    },
    {
      kind: 'movement',
      up: ['A healthy year with the savvy intact keeps the bet alive and starts filling in the rest of his game.'],
      down: ['Visibly reduced burst would thin a margin that was already the whole question.'],
    },
  ],
}

export default greathouse
