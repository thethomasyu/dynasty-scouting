import type { Presentation } from './types'

/**
 * Charlie Becker. Deep file with a curated-sample warning. The page
 * leads with the numbers because the profile does, then spends its
 * space on what the numbers can and cannot prove.
 */
const becker: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Unknown',
      note: 'The full route tree is a blank, and nobody has shown he can’t run it. Indiana never asked.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Strength',
      note: 'Mid-70s contested rate, an empty drop column, and you can see how: he times the jump off the throw, not the defender. Small sample, said out loud.',
    },
    {
      category: 'Release & Press',
      tier: 'Mixed',
      note: 'A clean shoulder-dip speed release that works. The best press corner he faced won their matchups, so the press picture splits by opponent quality.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Mixed',
      note: 'The acceleration is real: long strides eat cushion in a hurry. Whether the top gear is real is the whole argument about him.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'About one meaningful run-after-catch play all season. Given the track explosiveness, unproven rather than disproven.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'The vertical-and-red-zone role never asked the question, so there’s no read on record either way.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'A core special teams gunner with over 300 career snaps of it, real blocking form, and a pick-play rep delivered with real violence.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'pair',
      kicker: 'The numbers that sound made up',
      stats: [
        { value: '20.0', label: 'Yards per catch, 2025' },
        { value: 'Mid-70s%', label: 'Contested chances converted' },
      ],
      context:
        '34 catches, ten of them for 20-plus yards, and a drop column that’s either empty or close to it. Now the caveat built into how Indiana used him: his menu was verticals and red zone work while the NFL-bound veterans handled everything underneath. That usage funneled his targets into exactly the situations he’s best at.',
      expands: ['The numbers first'],
    },
    {
      kind: 'nugget',
      kicker: 'Scouting nugget · reading a stat line',
      title: 'A test built in his favor',
      body: 'A contested-catch rate that gaudy on that sample is two things at once: elite production, and a test built in his favor. The NFL doesn’t build the test in your favor. Neither claim cancels the other, and holding both is the whole evaluation.',
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Above the rim, on time',
          icon: 'target',
          detail:
            'A state-champion hurdler’s leaping, sudden and repeatable. He climbs, times the jump off the throw rather than off the defender, and finishes with hands draped all over him.',
        },
        {
          name: 'Cushion, then gone',
          icon: 'bolt',
          detail:
            'A shoulder-dip speed release into long strides that eat cushion in a hurry. Once he’s even with a corner, the play is usually over.',
        },
        {
          name: 'The floor nobody projects',
          icon: 'shield',
          detail:
            'A core gunner who blocks with real form and plays physical without being asked. A vertical specialist who covers kicks is an NFL player even if the full-receiver questions come back ugly.',
        },
      ],
      expands: ['At the catch point', 'The floor'],
    },
    {
      kind: 'diagram',
      diagram: 'stacking',
      title: 'How he actually gets deep',
      lead: 'Man coverage in the Big Ten spent the back half of last season chasing him into the end zone. The mechanism is simple and it’s three beats long.',
      expands: ['How he actually gets deep'],
    },
    {
      kind: 'compare',
      kicker: 'The speed question',
      title: 'Is he fast? The film gives three answers',
      layout: 'stack',
      sides: [
        {
          label: 'The championship stretch',
          status: 'Says yes, loudly',
          body: 'He ran away from people, week after week, when everything mattered most.',
        },
        {
          label: 'One harder matchup',
          status: 'Says no',
          body: 'A quality corner stayed in phase with him and closed the separation windows late in the route.',
        },
        {
          label: 'The season-wide view',
          status: 'In between',
          body: 'A long strider with build-up speed who stretches the field once he gets rolling, not instantly.',
        },
      ],
      verdict: {
        label: 'Where I land',
        body: 'I’m not picking a winner in July, because the samples disagree and each comes with a plausible excuse. What I will say is which answer matters: if the top gear is real, the vertical dominance travels mostly as-is. If it was acceleration plus scheme leverage, he becomes a timing-and-positioning deep threat, a much more quarterback-dependent living.',
      },
    },
    {
      kind: 'read',
      title: 'What isn’t on film yet',
      line: 'The route tree, short-area movement, and the after-catch game are blanks about his usage, not about him. Nobody has shown he can’t. Indiana never asked.',
      expands: ["What isn't on film yet"],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Z', primary: true },
        { pos: 'X' },
      ],
      note: 'Today’s version is a vertical and red zone specialist with a special teams floor, a real NFL job with a long employment history. The Alec Pierce comp has the right shape: style and role only, and stop there.',
      immediate: [
        'Vertical routes off the speed release',
        'Red zone airspace, NFL-ready today',
        'Core special teams from week one',
      ],
      unlock: 'The full-receiver questions. The veterans are gone, the volume is his, and 2026 exists to answer whether a complete receiver sits underneath the specialist.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'The underneath menu',
          question: 'Hitches, digs, crossers: the routes he’s never been asked to run.',
          status: 'open',
        },
        {
          topic: 'Efficiency at volume',
          question: 'Does the contested efficiency survive triple the targets against coverage that keys on him?',
          status: 'open',
        },
        {
          topic: 'The counters',
          question: 'What happens the first time a good corner takes away the speed release?',
          status: 'open',
        },
        {
          topic: 'After the catch',
          question: 'Does an after-catch game show up now that some catches finally happen in front of defenders?',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: [
        'A full season at featured volume with the efficiency intact. The floor is already banked.',
        'One or two clean vertical wins against the best corners on the schedule, which would answer the speed question all by themselves. No stopwatch required.',
      ],
      down: [
        'A season of the same narrow brilliance, which settles him in as a specialist: valuable and capped.',
      ],
    },
  ],
}

export default becker
