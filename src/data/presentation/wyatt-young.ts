import type { Presentation } from './types'

/**
 * Wyatt Young. Mid-depth file with three structural qualifiers that are
 * not traits: the level, the stopwatch, the calendar. The context line
 * on the snapshot keeps the whole page honest.
 */
const young: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'Real wiggle and sharp cuts with burst on both sides of the break. He runs everything at top speed, though, and gear changes are the cheapest upgrade available to him.',
    },
    {
      category: 'Ball Skills',
      tier: 'Mixed',
      note: 'Reliable hands with a body-catch habit underneath, and one out-of-character afternoon where he simply never found several deep balls.',
    },
    {
      category: 'Release & Press',
      tier: 'Mixed',
      note: 'From the slot his releases produce instant short-range separation, snap after snap. The outside-press version of him hasn’t been written at all.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Strength',
      note: 'The burst is proven: top speed almost immediately. Fast or game-fast? Nobody knows, and I mean that literally. No measurement exists.',
    },
    {
      category: 'YAC Ability',
      tier: 'Major Strength',
      note: '32 forced missed tackles, a number that stands with the best in this class regardless of competition level, built on a sturdy lower body and real balance.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'An exceptional zone radar, plus second-level leverage re-wins ten yards downfield, a skill most slot receivers at his level never develop.',
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
      contextNote:
        '93% of snaps from the slot, with free releases, against Group of Five coverage. Keep that sentence underneath everything above it. And the calendar: he may not be in this class at all.',
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The number that travels',
      stats: [{ value: '32', label: 'Forced missed tackles, 2025' }],
      context:
        'It stands with the best in this class regardless of competition level, and it isn’t pure elusiveness: sturdy base, real balance. Plenty of his ten 40-yard catches started as a free release, a found window, and a missed tackle.',
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Instant burst, instant space',
          icon: 'bolt',
          detail: 'Top speed almost immediately, and slot releases that produce short-range separation snap after snap.',
        },
        {
          name: 'The second-level re-win',
          icon: 'iq',
          detail: 'He re-wins leverage against defenders lurking ten yards downfield, its own skill and a rare one at his level.',
        },
        {
          name: 'After the catch',
          icon: 'yac',
          detail: 'A zone radar finds the window, the base breaks the tackle, and the explosive-play volume follows.',
        },
      ],
      expands: ["What's real regardless of level"],
    },
    {
      kind: 'read',
      title: 'The vertical question',
      line: 'One bad game complicates the deep-ball projection: several deep balls he simply never found. Until the tracking question answers itself, the cautious projection keeps his work between the numbers, and the body-catch habit points the same direction.',
      expands: ['The vertical question'],
    },
    {
      kind: 'compare',
      kicker: 'Not traits. Structure.',
      title: 'The three qualifiers',
      layout: 'stack',
      sides: [
        {
          label: 'The level',
          body: 'Everything above happened against Group of Five coverage. 2026 moves the whole act to the Big 12, trait for trait, as a validation exercise.',
        },
        {
          label: 'The stopwatch',
          body: 'The burst is proven. The last gear is a question that testing, or a power-conference safety’s pursuit angle, will eventually answer. Until then the only defensible read is a shrug.',
        },
        {
          label: 'The calendar',
          body: 'He’s a true junior, and returning to school is a live possibility, arguably the likelier one. Every projection here carries that footnote.',
        },
      ],
      expands: ['The three qualifiers'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Z' },
      ],
      note: 'An inside-out separator and chain-mover built on instant acceleration, second-level savvy, and after-catch value. A middle-of-the-field weapon in any modern offense.',
      immediate: ['Instant separation underneath', 'Zone windows found and finished', 'After-catch offense'],
      unlock: 'Clean deep tracking plus a verified gear. That reopens the ceiling conversation.',
      limitation: 'The vertical role is unproven in both directions, and the outside-press version of him hasn’t been written.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      title: 'The audition year',
      lead: 'The whole package has to survive the jump in competition with the traits intact. That matters more than any single trait.',
      items: [
        { topic: 'The deep balls first', question: 'Found and finished, or middle-of-the-field for good?', status: 'open' },
        { topic: 'Gear changes', question: 'Any evidence of pacing layered on top of the burst.', status: 'open' },
        { topic: 'The new exams', question: 'Outside snaps, press exposure, anything his college role never tested.', status: 'open' },
        { topic: 'The declare decision', question: 'The dateline on this profile isn’t a joke. He might belong to the next class.', status: 'open' },
      ],
      expands: ['The audition year'],
    },
    {
      kind: 'movement',
      up: ['A power-conference season that looks like the North Texas tape settles most of the doubts at once.'],
      down: ['A season where the separation thins against real coverage recalibrates everything backward.'],
    },
  ],
}

export default young
