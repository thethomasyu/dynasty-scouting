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
      kind: 'compare',
      kicker: 'The context that decides him',
      title: 'Clean pocket, then pressure',
      lead: 'Everything about Moore is settled except how he plays once the pocket stops cooperating, and that one split carries the whole disagreement.',
      layout: 'panels',
      sides: [
        { label: 'In structure', status: 'Surest bet in the class', body: 'Accuracy at every level, on-time rhythm, and processing that solves a read off one defender. Inside plan the operation looks like a pro’s.' },
        { label: 'Under pressure', status: 'The whole question', body: 'The eyes drop, the open downfield throw goes unthrown, and the drift arrives in the higher-leverage games. The interceptions leave the same fingerprint against ranked opponents.' },
      ],
      verdict: { label: 'What the tape can’t yet separate', body: 'Whether the drift is a young starter still learning to hold his platform, or the arm and the frame quietly setting a limit on how far the accuracy travels. A clean season does not produce enough hard reps to know.' },
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
