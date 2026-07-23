import type { Presentation } from './types'

/**
 * Dante Moore. Visual-first QB presentation on the finalized QB trait model.
 * The projection turns on the pressure response, so the player-specific visual
 * is a clean-pocket-versus-pressure context comparison. Qualitative tiers only;
 * the markdown profile stays the source of scouting truth and this config adds
 * no conclusion it does not contain.
 */
const danteMoore: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Concern', note: 'Comfortable while the picture holds; when pressure arrives the clean process can come apart, and the drift shows up most in the higher-leverage games.' },
    { category: 'Processing & Anticipation', tier: 'Strength', note: 'Confirms or discards a read off one defender instead of scanning the whole field, and keeps rhythm concepts on time so the throw beats the window.' },
    { category: 'Accuracy & Placement', tier: 'Major Strength', note: 'The least arguable part of his game. He places the ball rather than just completing it and drops touch into the levels that ask for it.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Adequate', note: 'Enough inside structure; the drive power reads no better than adequate, which is part of the lower-ceiling case some evaluators make.' },
    { category: 'Creation Outside Structure', tier: 'Concern', note: 'Accurate on movement throws while the play stays near its design; once the pocket breaks the eyes drop and the open downfield throw goes unthrown.' },
    { category: 'Decision-Making & Risk', tier: 'Mixed', note: 'Sound inside plan, but the interceptions bunch against ranked opponents and in second halves, when the pocket gets harder and the game speeds up.' },
    { category: 'Rushing Value', tier: 'Limited evidence', note: 'The case is built entirely as a pocket passer; his value as a runner is not established either way on this tape.' },
  ],
  ledeCount: 2,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'On-time release', icon: 'bolt', detail: 'The base stays under him and the ball comes out on rhythm, so structured concepts turn into easy completions.' },
        { name: 'Placement over completion', icon: 'target', detail: 'Layers touch into the level that asks for it instead of driving every throw at one speed.' },
        { name: 'Coverage shortcuts', icon: 'iq', detail: 'Reads a defender’s leverage and takes the shortcut rather than grinding through the whole progression.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'diagram',
      diagram: 'eyes-under-pressure',
      kicker: 'The pressure, drawn up',
      title: 'Where the eyes go under heat',
      lead: 'In a clean pocket the eyes stay up and the open downfield throw gets taken; that version is the surest bet in the class. When pressure arrives the eyes can drop to the rush and the same throw goes unthrown, most in the higher-leverage games. What the tape cannot yet separate is a young starter from a fixed ceiling.',
      expands: ['The open questions', 'Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Eyes under pressure', question: 'Do they stay downfield after the first hint of heat, or drop into check-and-drift?', status: 'open' },
        { topic: 'Broken-play aggression', question: 'Will he attack a tight window once the called plan has broken?', status: 'open' },
        { topic: 'Play strength', question: 'Can he add mass without pulling the clean mechanics out of tune?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['The pressure response steadies with reps while the accuracy holds, and he becomes the safest bet in the class.'],
      down: ['Pressure keeps collapsing the process and the drive-power ceiling keeps him under the top tier.'],
      unknown: ['How much of the 2025 pressure tape was youth versus a fixed trait, and whether the frame fills out.'],
    },
  ],
}

export default danteMoore
