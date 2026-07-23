import type { Presentation } from './types'

/**
 * CJ Carr. Visual-first QB presentation on the finalized QB trait model. The
 * evaluation is a sample problem more than a player one, so the player-specific
 * visual contrasts what the tape has against what it is missing. Qualitative
 * tiers only; the markdown profile stays the source of scouting truth.
 */
const cjCarr: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Mixed', note: 'Climbs away from the rush in rhythm and avoids the sack; pressure can still flip the calm into panic, a reckless extension, or a throw that sails.' },
    { category: 'Processing & Anticipation', tier: 'Strength', note: 'Full-field progression work and accurate third-read throws, early for a first-year starter, though how much Notre Dame put on his plate is an open question.' },
    { category: 'Accuracy & Placement', tier: 'Strength', note: 'On time and placed from a clean pocket; he can overdrive a short in-breaker and lose the touch that defines his best work.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Adequate', note: 'Enough to challenge an NFL window; not framed as a top-tier driver.' },
    { category: 'Creation Outside Structure', tier: 'Limited evidence', note: 'A pocket-mover more than a creator, and the out-of-structure reps barely exist across a single year of tape.' },
    { category: 'Decision-Making & Risk', tier: 'Mixed', note: 'Calm and on schedule inside structure; pressure is where the reckless extension and the spray show up.' },
    { category: 'Rushing Value', tier: 'Limited evidence', note: 'Not part of how he moves an offense on the current tape, and the rushing detail is incomplete.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Timing and touch', icon: 'target', detail: 'A low-effort delivery with natural touch that turns structured concepts into easy completions.' },
        { name: 'Full-field reads', icon: 'iq', detail: 'Climbs the pocket, works to a third read, and delivers an intermediate ball from the far hash.' },
        { name: 'Sack avoidance', icon: 'shield', detail: 'Feels the rush in rhythm and gets the ball out instead of eating the loss.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'compare',
      kicker: 'The uncertainty is the sample',
      title: 'On the tape, and not on the tape',
      lead: 'The structured passing is real and it is on the tape. What sits next to it is how little hard evidence there is.',
      layout: 'stack',
      sides: [
        { label: 'On the tape', status: 'Real', body: 'Clean-pocket timing, natural touch, and full-field reads a passer with one year of starts is not supposed to own yet.' },
        { label: 'Not on the tape', status: 'The gap', body: 'The pressured and out-of-structure reps that would tell you how much of the clean-pocket version survives contact with the rest of the position. His comfort even looks uneven by field direction.' },
      ],
      verdict: { label: 'Until that film exists', body: 'Most of the case for him is still projection, and one season is a thin place to be certain from.' },
      expands: ['The open questions', 'Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Touch under pressure', question: 'Do the accuracy and the touch survive when the pocket heats up? The floor-to-ceiling gap lives almost entirely there.', status: 'open' },
        { topic: 'Directional comfort', question: 'Does the left-right placement even out with more starts?', status: 'open' },
        { topic: 'Reading it out', question: 'Does he look settled turning his back on play-action and re-finding the coverage?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['The pressured and out-of-structure tape catches up to the clean-pocket tape, and the case stops being a projection.'],
      down: ['Pressure keeps producing panic and sprays, and the operation turns out to be the scheme’s more than his.'],
      unknown: ['How much Notre Dame put on him pre- and post-snap, which reframes how much of the processing is already his.'],
    },
  ],
}

export default cjCarr
