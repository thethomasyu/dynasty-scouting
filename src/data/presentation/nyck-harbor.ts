import type { Presentation } from './types'

/**
 * Nyck Harbor. Deep file about a gap: every tool checks out alone, and
 * the results never arrive together. The page leads with the number
 * doing all the speed testimony, then runs the assembly problem as the
 * central diagnostic.
 */
const harbor: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Concern',
      note: 'On routes that require gearing down, the separation never shows up. And yet the clean hard cut exists on film, in space.',
    },
    {
      category: 'Ball Skills',
      tier: 'Concern',
      note: 'Boxes defenders away and owns red zone space, and the results still run below the frame, with a drop rate above nine percent.',
    },
    {
      category: 'Release & Press',
      tier: 'Major Concern',
      note: 'Quality press has straight up locked him up. He leans a shoulder into the corner without ever converting the contact into space.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Major Strength',
      note: 'Near 24 miles per hour of in-game tracking at 235-plus, and a real hard-cut in-breaker in space that almost nobody his size can run.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Nearly unexamined, because decoys don’t get touches. Straight-line power and speed is the reasonable expectation.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'The decoy year hid it. No read on record either way.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'The strength is obvious, the blocking willing, the effort spotless through a wasted season. He wore the captaincy like he meant it.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The speed testimony',
      stats: [{ value: '~24', label: 'Miles per hour, in-game tracking' }],
      context:
        'Tight end mass moving at burner speed, a combination so rare the sport barely has a name for it. And the measurables sit oddly for such a physically defined prospect: two different listed weights, no verified forty, and that one GPS number doing all the speed testimony. His testing, whenever it happens, moves his stock more than most.',
    },
    {
      kind: 'flow',
      kicker: 'The whole evaluation',
      title: 'All the tools, none of the separation',
      lead: 'Every ingredient checks out on its own. The failures live exactly where the ingredients are supposed to combine, because separation for a big receiver is a sequence: movement skill and strength arriving in the same rep, at the right beat.',
      steps: [
        { label: 'Piece one, verified', text: 'The movement. In space he can sink his hips and run a real hard-cut in-breaker at 6\'5", which almost nobody his size can do.' },
        { label: 'Piece two, obvious', text: 'The strength, plus verified speed and spotless effort. Any one of these, at his dimensions, should produce open receivers by accident.' },
        { label: 'The missing part', text: 'The assembly. Against press he leans a shoulder without converting contact into space; on gear-down routes the separation never shows up. He owns both pieces and almost never gets them to arrive together.' },
      ],
      resolution: {
        label: 'Two explanations, two price tags',
        text: 'Stiffness is a ceiling; no coach adds bend. A missing assembly is a coaching problem, and a coaching problem attached to this much raw material is what receiver coaches dream about. The clean cut existing on film at all argues against pure stiffness, so I lean toward assembly. Leaning is all the evidence allows.',
      },
      expands: ['All the tools, none of the separation'],
    },
    {
      kind: 'read',
      title: 'The decoy season',
      line: 'A 17-yard average target depth, endless vertical clear-outs, almost no designed touches, a fired coordinator. How much of the failure belongs to that scheme is unresolved, and the new quick-game offense means whatever happens next season won’t be hidden.',
      expands: ['The decoy season'],
    },
    {
      kind: 'read',
      title: 'The catch point, same story',
      line: 'Tools present, results behind, in miniature: he boxes defenders away and owns red zone space, and the contested results still run below what the frame promises.',
      expands: ['The catch point, same story'],
    },
    { kind: 'fork' },
    {
      kind: 'watch',
      title: 'What year four has to show',
      lead: 'The question, in one line: does anyone get the strength and the movement to show up in the same rep?',
      items: [
        {
          topic: 'One route per game',
          question: 'The cut and the contact answer arriving together, even once a game, would be a revolution by his standards.',
          status: 'open',
        },
        {
          topic: 'Press with a plan',
          question: 'Hands and a plan instead of a leaned shoulder.',
          status: 'open',
        },
        {
          topic: 'The quick-game touches',
          question: 'The new offense finally tests whether an after-catch weapon lives in that body.',
          status: 'open',
        },
        {
          topic: 'The contested rate',
          question: 'No excuse left at his size.',
          status: 'open',
        },
      ],
      expands: ['What year four has to show'],
    },
    {
      kind: 'movement',
      up: [
        'Real September separation, even in flashes. The physical case needs no further proof, so the climb starts immediately.',
      ],
      down: [
        'Another season of clear-outs and blind faith. Four years is a career, and unexplained doesn’t get to mean unlucky forever.',
      ],
      unknown: [
        'His testing, in both directions: confirm the freak and someone drafts the ceiling anyway; miss the numbers and the whole case was resting on one GPS reading.',
      ],
    },
  ],
}

export default harbor
