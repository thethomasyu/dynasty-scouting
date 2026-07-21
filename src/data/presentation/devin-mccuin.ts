import type { Presentation } from './types'

/**
 * Devin McCuin. Mid-depth file built as a natural experiment: same
 * player, elite program, real coverage, one season. The four exams are
 * both the diagnostic and the watch board.
 */
const mccuin: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'A manipulation instinct that’s hard to teach: the bent speed out, the late hip flip, the fake block that scored. All of it against American Conference coverage, which is the caveat stapled to everything.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Strength',
      note: 'A career drop rate under five percent, near two by the generous counts, with sideline toe-tap awareness already on tape.',
    },
    {
      category: 'Release & Press',
      tier: 'Concern',
      note: 'His habit is running around contact rather than through it, which stretches routes and breaks their timing. Avoidance dies against NFL-caliber corners.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Strength',
      note: 'Track-background acceleration and real twitch: instant stop-start, sharp cuts with burst attached. The deep gear hasn’t produced downfield separation as a weapon yet.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Not separately on record.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'He sets defenders up, and players who set defenders up at every level of football tend to keep doing it at the next one.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Mixed',
      note: 'The record holds two flatly opposite readings, feisty and anonymous. I don’t have a verdict and won’t fake one.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The signature trait',
      stats: [{ value: '<5%', label: 'Career drop rate' }],
      context:
        'The more generous counts put it near two. A natural catcher whose hands work the same on the move, above his frame, and at the sideline. In a class whose premium prospects keep failing the catching exam, a hands-first receiver is almost a novelty.',
      expands: ['The hands'],
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'The hands',
          icon: 'hands',
          detail: 'Catches everything, everywhere: on the move, above the frame, at the sideline with his toes down.',
        },
        {
          name: 'The setup instinct',
          icon: 'iq',
          detail:
            'A speed out accelerated out of a dead stop, a corner route finished with a late hip flip, a fake block that froze a defender and became a score. He sets people up.',
        },
        {
          name: 'The twitch',
          icon: 'bolt',
          detail: 'Track-background acceleration with instant stop-start and sharp horizontal cuts.',
        },
      ],
      expands: ['The twitch, and some it-factor'],
    },
    {
      kind: 'compare',
      kicker: 'One season, four answers',
      title: 'The four exams',
      lead: 'Ohio State doesn’t import receivers, and the best receiver program in the sport made an exception for him. Almost every open question gets answered by the same schedule.',
      layout: 'stack',
      sides: [
        {
          label: 'Press',
          status: 'The one that matters most',
          body: 'He was rarely pressed in his college role, and his habit was avoidance. The Big Ten will press him in September, repeatedly.',
        },
        {
          label: 'Arm length',
          status: 'A tape-measure question',
          body: 'An eyeball estimate puts his arms near the threshold a lot of teams use as an outside cutoff. Outside-capable changes his value; slot-only caps it. No amount of film settles it.',
        },
        {
          label: 'Top speed',
          status: 'Open',
          body: 'The twitch is proven. Fast enough to threaten over the top, or quick-and-reliable without that dimension?',
        },
        {
          label: 'Blocking',
          status: 'The coin flip',
          body: 'Feisty in one reading, anonymous in the other. The cheapest exam to pass, which is exactly why failing it would say something.',
        },
      ],
      expands: ['The four exams'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Z', label: 'If the arms measure' },
      ],
      note: 'The optimistic projection is the do-everything slot mold with more juice than the label usually implies. The capped version is slot-only, decided by the arms and the press answers rather than by his skill.',
      immediate: [
        'Money-down reliability and quarterback-friend hands',
        'All-alignment usage in the optimistic version',
        'On-schedule separation through manipulation',
      ],
      unlock: 'Working through contact instead of around it, against Big Ten corners.',
      limitation: 'Either way the hands set the floor high, because receivers who catch everything find employment.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      title: 'One season, four answers',
      lead: 'Watch the press reps above everything. If he starts working through contact against that conference, the projection unlocks. If the avoidance habit survives intact, the slot ceiling hardens no matter how many balls he catches.',
      items: [
        { topic: 'The press reps', question: 'Through contact, or around it?', status: 'open' },
        { topic: 'Deep speed as a weapon', question: 'Does downfield separation ever become part of the job?', status: 'open' },
        { topic: 'The blocking coin flip', question: 'Feisty or anonymous, week over week?', status: 'open' },
        { topic: 'The measuring tape', question: 'The arms get measured at the end either way.', status: 'open' },
      ],
      expands: ['One season, four answers'],
    },
    {
      kind: 'movement',
      up: ['Press answers through contact against the Big Ten. The projection unlocks and the spring buzz becomes a draft-season story.'],
      down: ['The avoidance habit surviving intact, which hardens the slot ceiling no matter how many balls he catches.'],
    },
  ],
}

export default mccuin
