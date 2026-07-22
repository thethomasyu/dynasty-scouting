import type { Presentation } from './types'

/**
 * Jordan Faison. Thin file about a direction. One stat carries the
 * bankable skill; the development curve carries the argument. No
 * headings in the profile; the complete file opens as one expansion.
 */
const faison: Presentation = {
  ledeCount: 1,
  restLabel: 'Read the complete file',
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'The routes went from an athlete’s routes to a route runner’s in one year, with detail and intention showing up where raw movement used to be.',
    },
    {
      category: 'Ball Skills',
      tier: 'Strength',
      note: 'The hands jumped with the routes, down to a sub-four-percent drop rate. Three career muffed punts in the return game sit on the other side of the ledger.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'Nobody has really jammed him yet. Nothing about the frame suggests he’d enjoy it, and that’s a projection, not an observation.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Strength',
      note: 'Quick-twitch burst and real shiftiness from a national-champion lacrosse athlete.',
    },
    {
      category: 'YAC Ability',
      tier: 'Major Strength',
      note: '19 forced missed tackles on just 49 receptions, an outlier rate built on burst and an instant catcher-to-runner conversion.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'Real spatial awareness and a knack for finding the soft spots in zone.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Unknown',
      note: 'Not on record.',
    },
  ],
  modules: [
    {
      kind: 'snapshot',
      contextNote: 'A thin file about direction: football finally gets all of him for the first time.',
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The bankable skill',
      stats: [{ value: '19', label: 'Forced missed tackles on 49 catches' }],
      context:
        'An outlier rate on modest volume, built on quick-twitch burst, real shiftiness, and an instant catcher-to-runner conversion he’s now shown two years running. He beats the first man like it’s a habit.',
    },
    {
      kind: 'flow',
      kicker: 'The bet',
      title: 'The direction, not the position',
      steps: [
        { label: 'Two years ago', text: 'A national-champion lacrosse player moonlighting as a two-star receiver afterthought.' },
        { label: 'Last season', text: 'The moonlighting stopped looking like moonlighting: routes with detail and intention, hands down to a sub-four-percent drop rate.' },
        { label: 'Now', text: 'Lacrosse is behind him and football gets all of him for the first time. Development curves that steep are rare.' },
      ],
      resolution: {
        label: 'The wager, stated',
        text: 'If the 2024-to-2025 improvement continues, the current evaluation is too low and I’ll happily rewrite it. If the curve flattens, he’s a useful rotational slot with a great story.',
      },
    },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'Slot', primary: true }],
      note: 'A free-release slot with real after-catch juice and a development arrow pointing sharply up, in an offense that should feed exactly that.',
      immediate: ['After-catch offense on quick game and screens', 'Soft-spot work against zone'],
      limitation: 'The press question is a projection rather than an observed failure, since nobody has jammed him yet.',
    },
    {
      kind: 'watch',
      items: [
        { topic: 'The route detail', question: 'Does it deepen again now that football has all of him?', status: 'open' },
        { topic: 'The first real jam', question: 'What happens when somebody finally presses him?', status: 'open' },
        { topic: 'The muffs', question: 'Three career muffed punts complicate the special-teams value his athleticism advertises.', status: 'open' },
      ],
    },
    {
      kind: 'movement',
      up: ['A third straight year of steep improvement. Two in a row already earn him the benefit of the doubt.'],
      down: ['The curve flattening, which settles him in as a rotational slot with a great story.'],
    },
  ],
}

export default faison
