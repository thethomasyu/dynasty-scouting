import type { Presentation } from './types'

/**
 * John Mateer. Visual-first QB presentation on the finalized QB trait model.
 * Improvisational creation and giveaways arrive in about equal measure and the
 * same instinct feeds both, so the player-specific visuals are a mechanism
 * sequence from covered read to bail to giveaway and the hand-surgery confound
 * that clouds the read. Qualitative tiers only.
 */
const johnMateer: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Concern', note: 'His answer to early trouble is too often to take off rather than reset in the pocket and find the second option.' },
    { category: 'Processing & Anticipation', tier: 'Concern', note: 'A runner’s first instinct to leave at the first covered read gives up throws that were there for the taking.' },
    { category: 'Accuracy & Placement', tier: 'Mixed', note: 'A fast release, but he drives everything, so the soft, layered throw a checkdown or a touch window wants is not in his bag yet.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Concern', note: 'Adequate at best for the next level, and the compensation is to drive every ball.' },
    { category: 'Creation Outside Structure', tier: 'Major Strength', note: 'Escapes trouble and creates as a runner in a way the pocket passers on this list cannot, throwing from platforms and angles that should not work and sometimes do.' },
    { category: 'Decision-Making & Risk', tier: 'Concern', note: 'The aggression turns into turnover-worthy throws in about equal measure with the highlights.' },
    { category: 'Rushing Value', tier: 'Major Strength', note: 'Quick feet and a runner’s instinct to take off; a genuine running threat, not a manufactured one.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Fast operation', icon: 'bolt', detail: 'Quick feet and a fast release, with a competitive fearlessness that carries onto the tape.' },
        { name: 'Playmaking legs', icon: 'compass', detail: 'Escapes and creates as a runner in a way the pocket passers here cannot.' },
        { name: 'Real, not manufactured', icon: 'flag', detail: 'The big plays come from platforms and angles that should not work, and they are genuine rather than schemed.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'flow',
      kicker: 'Where the giveaways come from',
      title: 'Covered read, bail, giveaway',
      lead: 'The highlights and the giveaways arrive in about equal measure, and the same instinct feeds both.',
      steps: [
        { label: 'First read covered', text: 'Rather than reset in the pocket and climb to a second option, the instinct is to take off.' },
        { label: 'The extended play', text: 'He creates from platforms and angles that should not work, and the big plays are real.' },
        { label: 'The cost', text: 'The same aggression produces the turnover-worthy throw, and a below-average arm cannot layer a safer one.' },
      ],
      expands: ['The open questions'],
    },
    {
      kind: 'question',
      kicker: 'The confound',
      question: 'A compromised hand, or a compromised process?',
      facets: [
        { label: 'The timing problem', body: 'He had surgery on his throwing hand in the middle of the season, and the worst of the decision-making clustered right around it.' },
        { label: 'Why it matters', body: 'Last year’s film cannot separate a hurt hand from a shaky process, and those two carry completely different futures. Only a healthy season untangles it.' },
      ],
      expands: ['Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'A changeup', question: 'Is there any sign he can take something off a throw instead of drilling every one?', status: 'open' },
        { topic: 'A healthy hand', question: 'Does full hand function quiet the whole-body mechanics the compensation seems to feed?', status: 'open' },
        { topic: 'Creation in structure', question: 'Can the playmaking happen on schedule without sanding off the part that makes him dangerous?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['A healthy hand and a real changeup arrive, and the playmaking gets a floor under it.'],
      down: ['The recklessness and the fastball habit persist regardless of health, and the arm caps him.'],
      unknown: ['How much of the late-season volatility was the hand versus a stable play style.'],
    },
  ],
}

export default johnMateer
