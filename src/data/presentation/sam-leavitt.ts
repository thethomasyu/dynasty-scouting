import type { Presentation } from './types'

/**
 * Sam Leavitt. Visual-first QB presentation on the finalized QB trait model.
 * The sacks trace to his feet, so the player-specific visuals are a mechanism
 * sequence from backward drift to sack and the coachable-or-not question that
 * the move to LSU is meant to answer. Qualitative tiers only. Four watch items
 * because availability is its own separate thread.
 */
const samLeavitt: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Major Concern', note: 'Drifts backward instead of climbing, which turns a manageable rush into a sack and a clean platform into an off-balance heave. The sacks are more a movement story than a protection one.' },
    { category: 'Processing & Anticipation', tier: 'Concern', note: 'Hunts the big play; when the first read is gone the scramble drill keeps extending instead of resolving into an answer.' },
    { category: 'Accuracy & Placement', tier: 'Concern', note: 'Throws nearly everything at one speed, and a checkdown or a five-yard hook does not want a fastball. The completion rate cratered on third down and in long-yardage.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Mixed', note: 'Real arm strength for his size and dangerous throwing on the move to his right, with almost no changeup, which is the flexibility half of the trait.' },
    { category: 'Creation Outside Structure', tier: 'Strength', note: 'The legs are a functional weapon and he tries the hard throw when a play breaks, though the extended play is also where the turnover-worthy throws live.' },
    { category: 'Decision-Making & Risk', tier: 'Concern', note: 'An extended play with this arm and this decision-making is where the giveaways come.' },
    { category: 'Rushing Value', tier: 'Strength', note: 'A functional running weapon rather than only an escape hatch.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Arm for his size', icon: 'bolt', detail: 'Drives the ball with real strength, most dangerous throwing on the move to his right.' },
        { name: 'Escapability', icon: 'compass', detail: 'Functional mobility that keeps plays alive and attacks the hard throw when the structure breaks.' },
        { name: 'Starter’s raw material', icon: 'flag', detail: 'Whatever else is wrong, the tools are a starting NFL quarterback’s, which is why the file stays open after a bad season.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'flow',
      kicker: 'Where the sacks come from',
      title: 'Drift, broken platform, sack',
      lead: 'The sacks are less a protection story than a movement one, and movement is coachable, which is the hopeful part.',
      steps: [
        { label: 'Pressure arrives', text: 'Instead of climbing into the space the rush leaves, he drifts backward.' },
        { label: 'The platform breaks', text: 'A manageable rush becomes a sack, and a clean base becomes an off-balance heave.' },
        { label: 'The extended play', text: 'When the scramble drill does not resolve, this arm and this decision-making produce the turnover-worthy throws.' },
      ],
      resolution: { label: 'The reason to keep it open', text: 'Backward drift is a habit, not a physical limit, and the move to LSU is the bet that a new offense can pull it out of him.' },
      expands: ['The open questions'],
    },
    {
      kind: 'question',
      kicker: 'The whole thing',
      question: 'Coached out, or just how he plays?',
      facets: [
        { label: 'Never the question', body: 'The arm and the escapability. The raw material is not in doubt.' },
        { label: 'What decides him', body: 'Whether the drift and the fastballs can be coached out, or whether that is simply his style. The new offense is the bet, and nobody has seen it work yet.' },
      ],
      expands: ['Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Climbing the pocket', question: 'Does backward drift turn into climbing, since that single habit drives most of the sacks?', status: 'open' },
        { topic: 'Taking the outlet', question: 'Does he take the checkdown before flipping into scramble mode?', status: 'open' },
        { topic: 'The new offense', question: 'Does LSU’s structure actually pull the turnover-worthy throws down?', status: 'open' },
        { topic: 'Availability', question: 'Does the foot hold, and how does LSU choose to use him?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['The drift turns into climbing and the offense organizes the chaos, and the arm finally has a plan around it.'],
      down: ['The drift, the fastballs and the sacks survive the scheme change, and it stays a highlight reel without a floor.'],
      unknown: ['How much of last year was the style versus the situation, and how LSU deploys him.'],
    },
  ],
}

export default samLeavitt
