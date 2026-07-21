import type { Presentation } from './types'

/**
 * Deuce Robinson. Moderate file. The whole evaluation is an inversion,
 * so the page is built around one comparison and one genuine position
 * fork. Kept compact on purpose.
 */
const robinson: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'Works to spots like a receiver who’s been taught, with real finesse in how he stems and arrives. For a "raw tools" recruiting profile, a complete reversal.',
    },
    {
      category: 'Ball Skills',
      tier: 'Adequate',
      note: '18 of 38 contested tries is decent. The volume is the real finding.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'No specific line-of-scrimmage read on file.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Adequate',
      note: 'Tight-end-flavored movement, without top-end speed or receiver-grade elusiveness. The frame could plausibly carry 235.',
    },
    {
      category: 'YAC Ability',
      tier: 'Adequate',
      note: 'On screens he reliably runs through the first tackle, the one context where the size actually cashes in as force.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'Attacks zone coverage with a clarity most jumbo receivers never develop. He knows where to be, when, and why.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Major Concern',
      note: 'Gets bumped around on routes far too easily for a man his size, and the blocking too often comes without fire. The single most backwards fact about him.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'compare',
      kicker: 'The inversion',
      title: 'The job description, read backwards',
      lead: '6\'6" and 222 comes with a job description: bully corners, own the catch point, drag people. Then you watch him.',
      layout: 'panels',
      sides: [
        {
          label: 'What the frame promises',
          body: 'Crude craft, physical dominance, contact that barely registers, blocking with menace.',
        },
        {
          label: 'What the film shows',
          body: 'Intelligence and finesse: taught stems, zone clarity, working to spots. And contact he should barely feel moves him off his line, because corners have figured out that the giant is the one who can be muscled.',
        },
      ],
      verdict: {
        label: 'The development question',
        body: 'Unusually specific: can you coach violence into a player who has never needed any? The five-star, two-sport pedigree lowers the odds that what’s missing is ability.',
      },
      expands: ['The craft', 'The play-strength problem'],
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The volume finding',
      stats: [{ value: '38', label: 'Contested targets, on 56 catches' }],
      context:
        'Roughly a third of his catches were contested. A receiver who lives at the catch point that much isn’t choosing to. The separation isn’t coming, and the 6\'6" strike zone gives corners a big, legal target to play through.',
    },
    {
      kind: 'compare',
      kicker: 'Conditional projection',
      title: 'Which position is he?',
      lead: 'Part of the industry viewed him as a tight end coming out of high school. The play style says receiver. The body would accept either.',
      layout: 'panels',
      sides: [
        {
          label: 'Add mass and fire',
          body: 'A matchup tight end, the flex piece who feasts on linebackers.',
        },
        {
          label: 'Add play strength at 222',
          body: 'A jumbo X or big slot.',
        },
      ],
      verdict: {
        label: 'Either way',
        body: 'Both futures charge admission in physicality he hasn’t shown yet.',
      },
      expands: ['The position question'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Big Slot', primary: true },
        { pos: 'TE flex', label: 'If mass and fire arrive' },
      ],
      note: 'His value depends on the team more than most: an offense hunting a jumbo mismatch piece would board him far higher than any general ranking implies. A team with no such role has little use for the archetype.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      lead: 'What I’m watching is really one thing wearing three outfits.',
      items: [
        { topic: 'The contact', question: 'Does contact stop moving him off his line?', status: 'open' },
        { topic: 'The fire', question: 'Does the blocking edge show up weekly instead of sometimes?', status: 'open' },
        { topic: 'The mass', question: 'Does added weight arrive without dulling the movement?', status: 'open' },
      ],
    },
    {
      kind: 'movement',
      up: ['A stronger Robinson changes everything, because the craft is already ahead of schedule.'],
      down: ['Another finesse season at 222 turns the tight end idea from background chatter into a plan.'],
    },
  ],
}

export default robinson
