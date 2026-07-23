import type { Presentation } from './types'

/**
 * Darian Mensah. Visual-first QB presentation on the finalized QB trait model.
 * A command-and-touch passer whose arm and even his accuracy reputation are
 * disputed, so the player-specific visuals are an inside-versus-outside-the-
 * numbers tradeoff and the accuracy question that decides him. Qualitative tiers.
 */
const darianMensah: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Strength', note: 'A pocket calm that reads like a distributor who knows where the ball is going before the play tells him; a more tentative look shows up after a real hit.' },
    { category: 'Processing & Anticipation', tier: 'Strength', note: 'Anticipation, a feel for the soft spots in a zone, and a knack for diagnosing where pressure is coming from. He plays with his mind more than his measurables.' },
    { category: 'Accuracy & Placement', tier: 'Strength', note: 'The calling card. He drops the ball into a receiver and places it where the catch becomes yards, though one read holds the placement is not as good as its reputation.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Concern', note: 'Thin, with drive power no better than adequate and velocity outside the numbers I do not trust; a deep ball can lose its legs before it arrives.' },
    { category: 'Creation Outside Structure', tier: 'Concern', note: 'Gives an offense nothing as a runner, so there is no second way to move the ball when the passing structure stalls.' },
    { category: 'Decision-Making & Risk', tier: 'Mixed', note: 'Mostly sound, with some streakiness and a few missed hot answers when a rusher comes free.' },
    { category: 'Rushing Value', tier: 'Concern', note: 'Not a runner. There is no designed-run element to fall back on when the pass game bogs down.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Touch and placement', icon: 'target', detail: 'He drops the ball in rather than driving it, controls the spiral, and places it where the catch becomes yards.' },
        { name: 'Zone feel', icon: 'iq', detail: 'Anticipation and a read for the soft spots, plus a knack for diagnosing where the pressure is coming from.' },
        { name: 'Pocket calm', icon: 'flag', detail: 'Runs structure on time like a distributor, without needing a perfect base to be accurate.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'diagram',
      diagram: 'boundary-arm',
      kicker: 'The throw, drawn up',
      title: 'The throw the arm answers for',
      lead: 'Inside about fifty yards the placement arrives and there is not much argument about it. The deep ball outside the numbers, toward the boundary, is where the drive power fades and the ball can lose its legs before it gets there. There is no second way to move it as a runner when the passing structure stalls.',
      expands: ['The open questions'],
    },
    {
      kind: 'question',
      kicker: 'The real dispute',
      question: 'Is the placement as good as its reputation?',
      facets: [
        { label: 'The case for it', body: 'The whole profile rests on placement, and inside fifty yards there is not much argument about it.' },
        { label: 'The live read against it', body: 'One evaluation holds the placement is not as good as advertised, which is harder to shrug off than a middling arm because it leaves no mark in the box score.' },
      ],
      expands: ['Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Driving the out-breaker', question: 'Can he drive an NFL out route without over-forcing it or leaning on early anticipation to hide the arm?', status: 'open' },
        { topic: 'Quick-game accuracy', question: 'Does the short accuracy hold when the coverage tightens, the exact claim in dispute?', status: 'open' },
        { topic: 'Deep ball outside the numbers', question: 'Does the boundary throw arrive with something on it?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['The quick-game accuracy holds against tighter coverage and the placement reputation survives, and the command profile plays.'],
      down: ['The arm gets exposed outside the numbers and the accuracy turns out to be a step below its billing.'],
      unknown: ['Whether the outside-the-numbers velocity is a hard cap or a small-sample read; it is the swing trait.'],
    },
  ],
}

export default darianMensah
