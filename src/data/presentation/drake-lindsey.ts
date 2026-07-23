import type { Presentation } from './types'

/**
 * Drake Lindsey. Visual-first QB presentation on the finalized QB trait model.
 * He has no movement answer, so the player-specific visuals are a mechanism
 * sequence for what pressure does with no escape and the player-or-situation
 * question that is the widest split in the class. Four watch items because the
 * calendar sits under the evaluation. Qualitative tiers only.
 */
const drakeLindsey: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Concern', note: 'He cannot solve pressure by leaving the pocket, so when the rush gets home the response has to come from processing, and the processing speeds up in the wrong direction.' },
    { category: 'Processing & Anticipation', tier: 'Mixed', note: 'Anticipation flashes and high-end throws show up even in losing games, but pressure rushes the process into poor decisions, and a quick-game scheme starves the film of true-progression reps.' },
    { category: 'Accuracy & Placement', tier: 'Mixed', note: 'Layers a gorgeous seam, then sprays the next one. The lower body and the release come and go.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Strength', note: 'A big passer with natural wrist acceleration who layers the seam and the deep ball with touch.' },
    { category: 'Creation Outside Structure', tier: 'Major Concern', note: 'No movement answer. He does not have a way to buy time when the pocket fails.' },
    { category: 'Decision-Making & Risk', tier: 'Mixed', note: 'Poor decisions arrive when pressure speeds him up, next to high-end throws in bad spots.' },
    { category: 'Rushing Value', tier: 'Concern', note: 'Not a runner, and the missing movement answer is the structural bet against him.' },
  ],
  ledeCount: 2,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Wrist-flick arm', icon: 'bolt', detail: 'Prototype size and natural wrist acceleration, layering the seam and the deep ball with touch.' },
        { name: 'Pro-style reps', icon: 'iq', detail: 'Takes the snap under center, turns his back on play-action, and reestablishes his eyes downfield after the fake.' },
        { name: 'Contact toughness', icon: 'shield', detail: 'Strong enough to take a hit and still deliver from a crowded pocket, with the high-end throws showing up even in games his team was losing.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'flow',
      kicker: 'The structural bet',
      title: 'Pressure, no answer, rushed throw',
      lead: 'The whole projection rides on whether he can make pressure survivable without a way to leave the pocket.',
      steps: [
        { label: 'Pressure arrives', text: 'He cannot escape it, so the answer has to come from processing.' },
        { label: 'The process speeds up', text: 'In exactly the wrong way, into rushed throws and poor decisions.' },
        { label: 'The result', text: 'The same quarterback who layers a gorgeous seam sprays the next one as the lower body loosens.' },
      ],
      expands: ['The open questions'],
    },
    {
      kind: 'question',
      kicker: 'The widest split in the class',
      question: 'The player, or the situation?',
      facets: [
        { label: 'Read it as the player', body: 'His yards per attempt collapsed against ranked opponents, less than half of an already modest rate, the touchdowns gone and the interceptions up. Read that way he is nowhere close.' },
        { label: 'Read it as the situation', body: 'A thin front and a scheme that rarely let him drop back and throw, and it barely counts as evidence. From the outside those two cannot be separated.' },
      ],
      expands: ['Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Pressure without mobility', question: 'Can he make pressure survivable with no movement answer, the whole structural bet on him?', status: 'open' },
        { topic: 'A real dropback sample', question: 'Does true dropback tape, if the offense ever hands him one, back the anticipation or expose it?', status: 'open' },
        { topic: 'Repeatable lower body', question: 'Does it repeat on the short and touch throws the way it does on the seam?', status: 'open' },
        { topic: 'The calendar', question: 'If the best of him is a year away, which direction is he trending?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['A real dropback sample backs the anticipation and the mechanics settle, and the pocket-passer case gets real.'],
      down: ['Pressure keeps rushing the process with no movement answer, and the size stays a tease.'],
      unknown: ['Whether this is a 2027 evaluation at all, or a 2028 one for a quarterback who has not really been seen yet.'],
    },
  ],
}

export default drakeLindsey
