import type { Presentation } from './types'

/**
 * Eric Singleton Jr. Thin file, single evaluator, and the page stays
 * thin with it, on purpose. Four Unknowns in the snapshot ARE the
 * scouting story. No headings in the profile; the complete file opens
 * as one expansion.
 */
const singleton: Presentation = {
  ledeCount: 2,
  restLabel: 'Read the complete file',
  traits: [
    {
      category: 'Route Craft',
      tier: 'Unknown',
      note: 'Two straight offenses ran him on a deliberately thin tree. Nobody has seen the routes, so the nuance claim stays a projection with no film behind it.',
    },
    {
      category: 'Ball Skills',
      tier: 'Strength',
      note: 'A reliable adjuster: good body control, tracks the deep ball well, a drop rate under five percent, with an occasional body-catch habit as the footnote.',
    },
    {
      category: 'Release & Press',
      tier: 'Mixed',
      note: 'The release game is all feet, good enough to play outside despite his size, with almost no hand usage. That works until corners start touching you, and NFL corners touch everyone.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Major Strength',
      note: 'He may be the fastest player in the class: state champion in the 100, 200, and 400, and the film agrees with the résumé on both ends.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Gadget usage, modest return production, no real read.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'Not on record.',
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
      contextNote: 'Short record, short profile, on purpose. The unknowns above are the point: three programs in four years and nobody has opened the menu.',
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'The loudest trait in the class',
          icon: 'bolt',
          detail: 'Elite acceleration and a real top gear at 5\'10" and 182, with the track résumé to match.',
        },
        {
          name: 'Feet-only releases',
          icon: 'release',
          detail: 'Footwork good enough to survive outside against press, done with almost no hand usage at the line. A checkable profile with a known failure mode.',
        },
        {
          name: 'The adjuster',
          icon: 'target',
          detail: 'Good body control, clean deep tracking, and a drop rate under five percent.',
        },
      ],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Movement' },
      ],
      note: 'A vertical and manufactured-touch slot whose ceiling depends on two things showing up: hands in the release game, and proof the route nuance actually exists.',
      immediate: ['Vertical stress and jet-sweep speed', 'Manufactured touches in space'],
      unlock: 'Florida is expected to finally open the menu, which makes this the rare senior season that could triple the useful information about a player.',
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Route diversity in September', question: 'If the tree shows up, this profile gets a real rewrite.', status: 'open' },
        { topic: 'Hand usage at the line', question: 'If the hands never show up, he lives in the slot.', status: 'open' },
      ],
    },
    {
      kind: 'movement',
      up: ['The tree showing up, which earns a real rewrite.'],
      down: ['Another gadget year leaves the evaluation where three years have left it: fast, intriguing, and unproven in the parts of the job that pay.'],
    },
  ],
}

export default singleton
