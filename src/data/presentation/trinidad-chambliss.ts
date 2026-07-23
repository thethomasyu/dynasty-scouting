import type { Presentation } from './types'

/**
 * Trinidad Chambliss. Visual-first QB presentation on the finalized QB trait
 * model. The clearest feel-versus-thresholds case in the class, so the single
 * player-specific visual is a tradeoff between what travels (the feel and the
 * ball security) and what caps it (size and release). No movement grid: film
 * will not move the size or the instincts, and the watch board carries the look
 * ahead. Qualitative tiers only.
 */
const trinidadChambliss: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Strength', note: 'Natural pocket presence and poise that shows up most right after a mistake, when he answers with a good rep instead of a worse one.' },
    { category: 'Processing & Anticipation', tier: 'Strength', note: 'Plays the position with feel, layering touch and anticipation onto hard throws.' },
    { category: 'Accuracy & Placement', tier: 'Mixed', note: 'Touch and anticipation on the difficult throws, with short-area placement that can lag the intermediate and deep work, which is backwards and awkward for a rhythm offense.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Adequate', note: 'Enough to go after throws most quarterbacks his size would leave alone; the elongated release, not the arm, is the throwing concern.' },
    { category: 'Creation Outside Structure', tier: 'Strength', note: 'A genuine mover, pass-first, buying time to throw before he thinks about running.' },
    { category: 'Decision-Making & Risk', tier: 'Major Strength', note: 'Almost never gives the ball away, and he does it while chasing aggressive throws. The ball security held near zero even against ranked opponents.' },
    { category: 'Rushing Value', tier: 'Adequate', note: 'An effective scrambler, though the instinct keeps the play a pass first.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Quarterback feel', icon: 'flag', detail: 'Natural pocket presence and the habit of answering a mistake with a good rep instead of a worse one.' },
        { name: 'Aggression without the giveaways', icon: 'iq', detail: 'Touch and anticipation on hard throws, and near-zero interceptions even against ranked opponents, where a gambler’s aggression usually catches up.' },
        { name: 'Pass-first legs', icon: 'compass', detail: 'A real mover who buys time to throw before he thinks about running.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'compare',
      kicker: 'The case in one frame',
      title: 'The feel and the thresholds',
      lead: 'Aggression without the turnovers is a rare pairing, and it carried a Division II transfer onto SEC tape. The catch is the body it comes in.',
      layout: 'stack',
      sides: [
        { label: 'What travels', status: 'The product', body: 'Natural pocket feel, poise after a mistake, and ball security that held even against ranked opponents. The instincts are not in question.' },
        { label: 'What caps it', status: 'The bar', body: 'The low end of the position’s size, and a release long enough to expose the ball to hands at the line, so a batted pass is a live risk on a timing throw. Neither is small where the edges are longer and the windows tighter.' },
      ],
      verdict: { label: 'The question nobody can answer yet', body: 'Whether the first survives the second. No amount of film changes either one, and a summer is not going to settle it.' },
      expands: ['The open questions', 'Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'A shorter release', question: 'Can he tighten the motion without draining the touch out of it, since it is doing double duty as a strength and a liability?', status: 'open' },
        { topic: 'Short-area placement', question: 'Does the underneath accuracy climb to meet the rest of his game?', status: 'open' },
        { topic: 'Poise across a season', question: 'Does the pressure feel hold over a full year rather than a stretch, since it is the load-bearing trait in his case?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
  ],
}

export default trinidadChambliss
