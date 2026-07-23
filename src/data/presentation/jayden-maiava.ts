import type { Presentation } from './types'

/**
 * Jayden Maiava. Visual-first QB presentation on the finalized QB trait model.
 * The whole evaluation comes down to one mechanism, so the player-specific
 * visual is a tradeoff between the catchable ball as a choice and the catchable
 * ball as compensation. Qualitative tiers only; the markdown stays the source
 * of scouting truth.
 */
const jaydenMaiava: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Strength', note: 'Keeps the sack count low and controls the line of scrimmage before the snap, so the offense stays ahead of the chains.' },
    { category: 'Processing & Anticipation', tier: 'Mixed', note: 'Pre-snap command is real; the hot-read timing, the sideline throw, and anything that asks him to move to his left are unfinished.' },
    { category: 'Accuracy & Placement', tier: 'Strength', note: 'Throws a ball that is easy to catch, layering it into space so his receivers keep running to daylight instead of stopping to adjust.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Concern', note: 'Functional rather than explosive, the fact the whole evaluation keeps circling back to.' },
    { category: 'Creation Outside Structure', tier: 'Concern', note: 'An ordinary burst that pressure exposes; broken-structure creation is not part of his game.' },
    { category: 'Decision-Making & Risk', tier: 'Mixed', note: 'The interception count looks clean but undersells how many throws he put in danger; the shaky-decision volume runs higher than the number admits.' },
    { category: 'Rushing Value', tier: 'Adequate', note: 'Big enough to steal a few yards without being a designed-run threat.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Catchable ball', icon: 'target', detail: 'Real touch and consistent layering that put the ball where a receiver can run to daylight.' },
        { name: 'On-schedule operation', icon: 'shield', detail: 'A low sack rate and pre-snap command that keep the offense out of the long-yardage downs.' },
        { name: 'Answers the down', icon: 'flag', detail: 'Big enough to steal a few yards and reliable on the throw a third or fourth down asks for.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'diagram',
      diagram: 'touch-or-velocity',
      kicker: 'The throw, drawn up',
      title: 'The ball he throws, and the one he doesn’t',
      lead: 'The soft, catchable, layered ball is all over the tape. If he could drive it and chose touch, he is a starter who protects the ball; if soft is the only setting the arm has, the ceiling sits about where the floor is. The velocity throws that would separate the two are the ones he passed up, so they are not on the tape.',
      expands: ['The open questions', 'Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Cutting the risk', question: 'Do the shaky throws come down without him going passive and trading one problem for another?', status: 'open' },
        { topic: 'Trusting velocity', question: 'Will he drive a throw instead of lofting it, the clearest tell for the choice-or-necessity question?', status: 'open' },
        { topic: 'Pressure response', question: 'Does it improve without costing him the sack avoidance that is his best trait?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['He starts driving throws and cuts the risky ones without going passive, and the touch reads as a choice.'],
      down: ['Pressure keeps taking a bite out of the efficiency and the ordinary burst caps the ceiling where the floor is.'],
      unknown: ['Whether the soft ball is manipulation or the only setting the arm has.'],
    },
  ],
}

export default jaydenMaiava
