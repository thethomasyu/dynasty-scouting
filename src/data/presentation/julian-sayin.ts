import type { Presentation } from './types'

/**
 * Julian Sayin. Visual-first QB presentation on the finalized QB trait model.
 * First-read efficiency is loud and the life after it is the projection, so the
 * player-specific visuals are a mechanism sequence for what happens once the
 * initial answer is removed and the him-versus-the-cast question. Qualitative tiers.
 */
const julianSayin: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Mixed', note: 'A small quarterback with little room to absorb a hit or a bad platform; the sacks come when the first answer disappears.' },
    { category: 'Processing & Anticipation', tier: 'Mixed', note: 'On time and anticipatory while the first read is open; once it is covered the progression slows.' },
    { category: 'Accuracy & Placement', tier: 'Major Strength', note: 'There is no arguing with how accurate he was. He places the clean-pocket ball and throws the seam with anticipation.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Adequate', note: 'Adequate rather than big. The deep ball and the drive throw take his whole body to make, a useful trick that still shows visible effort.' },
    { category: 'Creation Outside Structure', tier: 'Concern', note: 'Little creation value; a lot of his best tape arrives with the first window open on schedule.' },
    { category: 'Decision-Making & Risk', tier: 'Mixed', note: 'Mostly stays out of trouble once he is past the first read, but the giveaways climbed against ranked opponents.' },
    { category: 'Rushing Value', tier: 'Limited evidence', note: 'Not part of his game, and the 2025 rushing line is left unverified rather than estimated.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Clean-pocket accuracy', icon: 'target', detail: 'He places the ball and throws the seam with anticipation, and the operation stays on time.' },
        { name: 'Whole-body velocity', icon: 'bolt', detail: 'Gets more on the ball than his build suggests by driving with his whole body, even when it takes visible effort.' },
        { name: 'Stays out of trouble', icon: 'iq', detail: 'Once past his first read he mostly avoids the reckless throw.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'diagram',
      diagram: 'first-read-window',
      kicker: 'The read, drawn up',
      title: 'After the first answer is removed',
      lead: 'With the first read open he is on time, accurate, and anticipatory, and most of the best tape lives there. Once it is covered the progression slows and the sacks come, and against ranked opponents the completion rate slid and the giveaways climbed. Ohio State keeps handing him that first window; an NFL defense will not.',
      expands: ['The open questions'],
    },
    {
      kind: 'question',
      kicker: 'The argument',
      question: 'The passer, or one of the best supporting casts in the country?',
      facets: [
        { label: 'What is real', body: 'The accuracy and the on-time anticipation are on the tape and hard to fake.' },
        { label: 'What is disputed', body: 'Strip the protection and the early separation his receivers won, and either the accuracy still stands on its own or it was leaning on them the whole time. Nobody knows until the margin gets thinner.' },
      ],
      expands: ['Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Off-schedule offense', question: 'Can he keep the offense on schedule once the first read is taken away?', status: 'open' },
        { topic: 'The middle under pressure', question: 'Will he drive the middle of the field when rushed instead of drifting off it?', status: 'open' },
        { topic: 'Production without the net', question: 'How much of it is still there once his receivers stop winning early for him?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['The processing grows past the first read and the accuracy carries, and the production reads as skill, not scheme.'],
      down: ['Pressure and the physical margin expose the game once the supporting cast normalizes.'],
      unknown: ['How much of the raw accuracy is his versus the protection and the separation his receivers won.'],
    },
  ],
}

export default julianSayin
