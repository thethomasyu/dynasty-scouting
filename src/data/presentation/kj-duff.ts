import type { Presentation } from './types'

/**
 * KJ Duff. Deep file. The page keeps the profile's discipline: which
 * parts are him, which parts are the archetype. The signature visual is
 * the two kinds of open, because positional receiving is the skill
 * broadcast crews mistake for "just being tall."
 */
const duff: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Adequate',
      note: 'The positioning craft is real. The drift on downfield routes bends his spacing toward coverage and shrinks his own window.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Strength',
      note: 'Attacks the ball at full extension and plucks it away from his frame. Stylistically the most trustworthy part of his game, statistically the least documented. Flagged.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'College corners rarely bothered pressing him. His answers are close to unscouted, and the NFL will ask immediately.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Mixed',
      note: 'Two true sentences: he is not a fast receiver, and he moves shockingly well. Keeping them separate is the whole trick.',
    },
    {
      category: 'YAC Ability',
      tier: 'Concern',
      note: 'Not his game, and honestly not his job either. Almost nobody his size is a run-after-catch player. Price it in.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Major Strength',
      note: 'Arrives at the spot first, walls defenders out before the throw commits, and knows exactly where the chains are while he does it.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Mixed',
      note: 'There’s a rep of him flattening a high-profile safety, so the punisher exists. The fire doesn’t show every week.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'The work before the throw',
          icon: 'iq',
          detail:
            'Gets open the way a power forward gets a rebound. He shields the ball with his frame, walls defenders out of the catch space, and treats the intermediate middle like personal property.',
        },
        {
          name: 'Receiver hands at 6\'6"',
          icon: 'hands',
          detail:
            'Catches like a receiver, not a converted tight end: full extension, plucked away from the frame, secured before he runs. At his size that expands the catchable area into places a defender physically cannot reach.',
        },
        {
          name: 'Fluid for the mass',
          icon: 'compass',
          detail:
            'What usually kills giant receivers is stiffness, not the stopwatch. Duff bends, redirects, and runs respectable in-breakers, so he’s exempt from the usual failure mode and exposed to the ordinary-speed one.',
        },
      ],
    },
    {
      kind: 'diagram',
      diagram: 'two-opens',
      title: 'Two kinds of open',
      lead: 'Positional receiving is a real skill. Tall is the raw material; knowing how to arrive first, establish position, and leave the defender playing through your back is craft, and Duff has it.',
      caption: 'The risk isn’t bust. It’s that he becomes only the second kind of open, which is a real NFL job whose ceiling belongs to the quarterback.',
      expands: ['How a receiver this size actually gets open', 'The hands'],
    },
    {
      kind: 'stat',
      layout: 'pair',
      kicker: 'The production, downfield',
      stats: [
        { value: '18+', label: 'Yards per catch, 2025' },
        { value: '30 of 60', label: 'Catches gaining 15-plus yards' },
      ],
      context:
        'Over 1,000 yards through quarterback play inconsistent enough to make his weekly stat lines a coin flip. Those aren’t screen-and-scamper numbers. That’s a chain-mover getting fed downfield.',
    },
    {
      kind: 'compare',
      title: 'Him against the archetype',
      lead: 'What’s being decided with Duff is bigger than one player, so I’m explicit about which parts are him and which parts are the job description.',
      layout: 'panels',
      sides: [
        {
          label: 'The history',
          status: 'The archetype',
          body: 'Receivers at 6\'5"-plus with ordinary speed have a poor NFL hit rate as difference-makers. The league keeps drafting them on the theory that size is a skill, and keeps getting reminded that separation is the skill and size is a bonus.',
        },
        {
          label: 'His film',
          status: 'The player',
          body: 'The positioning is real, the hands are real, and the movement is unusually clean for the mass. He passes the specific test, the stiffness test, that the archetype’s failures flunk.',
        },
      ],
      verdict: {
        label: 'My read',
        body: 'The best current version of this archetype in the class, which earns him a real projection instead of a category discount. The risk, precisely: catch-point dependence. Catch-point receivers with great quarterbacks look like stars. The same receiver with a scattershot passer disappears for a month at a time, and he already lived that life at Rutgers.',
      },
      expands: ['So is he a good athlete?', 'The history working against him'],
    },
    {
      kind: 'read',
      title: 'The nitpicks that matter',
      line: 'He drifts on downfield routes, one seam rep died with an unexplained slowdown, and there are days a corner he should bully locks him up anyway. Almost all of it is frequency, not ability, and receivers built like him only become stars at the every-rep setting.',
      expands: ['The nitpicks that matter'],
    },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'X', primary: true }],
      note: 'True X, three levels, with the intermediate middle and the red zone as his best real estate. A true junior who’d be one of the youngest receivers in the group, which buys the consistency curve some patience.',
      immediate: [
        'Chain-moving on third down from day one',
        'The intermediate middle, walled off',
        'Red zone positioning',
      ],
      unlock: 'Every-rep ruthlessness. When separation is scarce, that’s the margin between winning most reps and winning every rep.',
      limitation: 'He needs a quarterback willing to throw him open and an offense that treats contested completions as a feature rather than a bailout.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'Press, first and most',
          question: 'College rarely pressed him. The NFL will immediately, and his answers are close to unscouted.',
          status: 'open',
        },
        {
          topic: 'The drift',
          question: 'Does the downfield spacing discipline clean up, so the frame keeps the geometry it creates?',
          status: 'open',
        },
        {
          topic: 'The quiet games',
          question: 'Do the inexplicable locked-down afternoons disappear? That says more about his ceiling than another 1,000 yards.',
          status: 'open',
        },
        {
          topic: 'Eventually, the stopwatch',
          question: 'At his size, a 4.55 and a 4.7 describe two different NFL careers.',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: [
        'Every-rep catch-point violence plus cleaned-up route spacing.',
        'An early press answer, which would push it further.',
      ],
      down: [
        'More quiet games against beatable corners. Catch-point receivers don’t get to have quiet games.',
      ],
      unknown: [
        'One verified speed number, whenever it arrives. It changes the projection more than any highlight ever will.',
      ],
      expands: ['What would change the evaluation'],
    },
  ],
}

export default duff
