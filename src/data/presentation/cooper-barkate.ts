import type { Presentation } from './types'

/**
 * Cooper Barkate. Moderate file. The signature visual is the production
 * that keeps traveling: three levels, three seasons, one variable left.
 */
const barkate: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Major Strength',
      note: 'Maybe the most professional route-level game in the middle of this class: leverage, spacing, and tempo from any alignment.',
    },
    {
      category: 'Ball Skills',
      tier: 'Unknown',
      note: 'The record on file runs through routes and toughness. No specific catch-point read exists yet either way.',
    },
    {
      category: 'Release & Press',
      tier: 'Strength',
      note: 'Quick, efficient releases without wasted motion. Separation created through quickness, which is the efficient way and the version with the least margin for error.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Adequate',
      note: 'No outlier trait, and that’s the whole nervous part. The speed is probably better than the stereotype assumes; a burner projection isn’t on the table.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Not on record.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Major Strength',
      note: 'Always where he’s supposed to be, exactly when the timing wants him there. The trait quarterbacks reward most and highlight reels ignore completely.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Mixed',
      note: 'Zero fear of the middle and constant availability on money downs, next to play strength that grades ordinary.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'steps',
      kicker: 'Production that keeps traveling',
      stats: [
        { value: '1,000+', label: 'Yards at Harvard' },
        { value: '1,100+', label: 'First season at Duke' },
        { value: '?', label: 'Miami, 2026' },
      ],
      context:
        'Guys who produce at every level they visit are giving you a kind of evidence the stat sheet alone can’t. Production that has already traveled twice usually travels the third time too, and his quarterback made the trip alongside him.',
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'On schedule',
          icon: 'route',
          detail:
            'Quick, efficient releases, a real understanding of leverage and spacing, and timing a quarterback can set a watch to.',
        },
        {
          name: 'Money-down toughness',
          icon: 'shield',
          detail:
            'Zero fear of the middle of the field and constant availability when the down matters. 51 first downs last season is a chain-moving workload.',
        },
        {
          name: 'Quickness, not burst',
          icon: 'compass',
          detail:
            'Separation created without elite burst: the efficient way to get open, and the version with the least margin for error.',
        },
      ],
      expands: ['The precision'],
    },
    {
      kind: 'read',
      title: 'The athletic question',
      line: 'No outlier trait, ordinary play strength, and an age that compresses the window a team is buying. Skill-first receivers without a physical edge risk getting schemed out of NFL offenses entirely unless a staff deliberately builds them in.',
      expands: ['The athletic question'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Z' },
      ],
      note: 'A high-volume second or third receiver in a timing-and-rhythm offense, where he produces immediately because his game needs no development, only trust. In a traits-first offense, the same player might barely dress. Scheme shapes his projection more than talent does.',
      immediate: [
        'Chain-moving volume in a rhythm passing game',
        'Inside-outside alignment flexibility',
        'Reliability on money downs',
      ],
      limitation: 'The archetype’s line between reliable pro and camp story is thinner than his college production suggests.',
      showCutout: true,
      expands: ['NFL translation, and the last variable'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'Coverage quality',
          question: 'Does the precision keep producing against corners who can recover from a lost half-step?',
          status: 'open',
        },
        {
          topic: 'Any testing number',
          question: 'A fast forty would change his archetype overnight.',
          status: 'open',
        },
        {
          topic: 'The verified age',
          question: 'Nobody seems to have verified the birthday, and confirmation of a mid-20s rookie age would harden the discount.',
          status: 'open',
        },
      ],
    },
    {
      kind: 'movement',
      up: [
        'A fast forty, which rewrites the athletic assumption overnight.',
        'A third 1,000-yard season at a third level: its own kind of evidence.',
      ],
      down: ['Confirmation of a mid-20s rookie age, which hardens the discount.'],
    },
  ],
}

export default barkate
