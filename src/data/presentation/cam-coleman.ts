import type { Presentation } from './types'

/**
 * Cam Coleman. Deep file. The page runs polish-first the way the profile
 * does, then spends its biggest visual on the one open argument: the
 * deep ball, and the two skills hiding inside the word "tracking".
 */
const coleman: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Major Strength',
      note: 'Maybe the most polished big receiver in the class. Sinks his hips into breaks that would look sudden on a 5\'10" slot.',
    },
    {
      category: 'Ball Skills',
      tier: 'Strength',
      note: 'Adjust-and-finish near the ball is elite. The first look on a true 45-yard shot is the one open argument in his file.',
    },
    {
      category: 'Release & Press',
      tier: 'Strength',
      note: 'Real answers against a jam, including a diamond release, and he wins downfield hand fights without losing momentum.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Strength',
      note: 'Change of direction far better than a 6\'3" frame should allow. Not the fastest receiver in this class, and his vertical game runs through length and finishing.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Auburn never manufactured him touches. Not rounding that up to "probably fine." It stays unknown until somebody hands him the ball in space.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'The quarterback-friendly kind. Keeps working after the design dies: widens windows, settles early against zone, re-routes himself open.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'Real blocking impact in the run and screen game, and he came back into a game hurt to help tie it.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Sudden breaks at 6\'3"',
          icon: 'route',
          detail:
            'No rounded breaks, no extra gather steps. He sinks his hips and comes out of cuts with a suddenness bigger receivers aren’t supposed to have, and it held up on his worst day of the season.',
        },
        {
          name: 'Release answers',
          icon: 'release',
          detail:
            'A real plan against the jam, including a diamond release that makes the corner guess. Downfield he wins a swim move without paying for it in speed.',
        },
        {
          name: 'Body control at the ball',
          icon: 'target',
          detail:
            'Might be the best single thing he does. Balls behind him, above him, one-handed, in traffic, with defenders hanging on. An acrobat with length.',
        },
      ],
      expands: ['The movement doesn’t match the height'],
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The catch point, with quarterback context',
      stats: [{ value: '59.1%', label: 'Contested targets converted, 2025' }],
      context:
        'Already a good number, and Auburn’s quarterback play made it look worse than it should have. When ball placement is bad all season, everything becomes a contested catch, including routes where he’d created real separation and the throw dragged him back into coverage.',
      expands: ['At the catch point'],
    },
    {
      kind: 'read',
      title: 'Two years of bad quarterback play',
      line: 'The quarterback situation does more damage than shrinking a stat line. It messes with the evaluation itself: deep tracking reps, contested rates, and the deception question all carry an asterisk when the ball rarely arrives where it’s supposed to.',
      expands: ['Two years of bad quarterback play'],
    },
    {
      kind: 'question',
      kicker: 'The one real argument',
      question: '"Tracking" is really two skills that get lumped into one word.',
      facets: [
        {
          label: 'Skill one · locate',
          body: 'Finding a 45-yard shot from the moment his head comes around, and running the right path to it. That’s where the shaky reps live, including a flat-out mistracked deep ball against Alabama.',
        },
        {
          label: 'Skill two · adjust and finish',
          body: 'Adjusting to a ball he can see and reach. Coleman is excellent at it, and when he’s near the ball, the finishing is elite.',
        },
        {
          label: 'Why it matters',
          body: 'He’s not a burner who can outrun a late locate and recover. His deep game needs to be on time.',
        },
      ],
    },
    {
      kind: 'diagram',
      diagram: 'tracking-split',
      title: 'The deep ball, split into its parts',
      lead: 'Every ingredient around the deep ball is already in place. He accelerates well, he can stack a corner, and the finishing is elite. If the early locate is clean, there is no missing piece left in his vertical game.',
      expands: ['The deep ball'],
    },
    {
      kind: 'nugget',
      kicker: 'Scouting nugget · what stacking means',
      title: 'Stacking a corner',
      body: 'Get even with him, get past him, then hold him on your back hip so the throwing window stays clean. Coleman already does this. It’s the last piece before the stack, the first look at the ball, that stays open.',
    },
    {
      kind: 'read',
      title: 'Loose ends',
      line: 'Two fumbles on 56 catches keeps ball security on the watch list. After the catch stays unknown. And the AJ Green comp is a style pointer only: how he moves, never how the career goes.',
      expands: ['Loose ends'],
    },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'X', primary: true }],
      note: 'Outside X with a true number-one ceiling, and the rare five-star whose technique won’t need a multi-year NFL apprenticeship.',
      immediate: [
        'Separation underneath that survives mediocre quarterback play',
        'Red zone finishing: length plus body control where speed matters least',
        'Boundary routes thrown on trust',
      ],
      unlock: 'One clean season of vertical tracking. Close that argument and it gets hard to name a hole in his game.',
      limitation: 'Until the locate question closes, the go ball is the one route family a team can’t fully bank on.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'The first look',
          question: 'The locate and the path when a shot goes up from 45 yards out. The highlight-reel adjustments are already proven.',
          status: 'open',
        },
        {
          topic: 'Production meets talent',
          question: 'Does the stat line finally match the player now that a real quarterback is throwing to him?',
          status: 'open',
        },
        {
          topic: 'Ball security',
          question: 'Does the ball stay off the ground? Fumbles are the small number that decides rookie-year snap counts.',
          status: 'open',
        },
        {
          topic: 'Deception layering',
          question: 'Does the manipulation keep deepening now that defenses game-plan him as the guy?',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: [
        'One clean season of vertical tracking. That closes the only real argument here.',
      ],
      down: [
        'Tracking mistakes that continue with good quarterback play. The projection shifts from complete X to everything-but-the-go-ball X, and that difference is worth a lot of draft capital.',
        'More fumbles, which would move ball security from footnote to problem.',
      ],
      unknown: [
        'Another year of 700 quiet yards at Texas. Everyone who leaned on the quarterback excuse, me included, would owe it a hard second look.',
      ],
      expands: ['What would change the evaluation'],
    },
  ],
}

export default coleman
