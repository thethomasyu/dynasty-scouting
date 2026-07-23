import type { Presentation } from './types'

/**
 * Drew Mestemaker. Visual-first QB presentation on the finalized QB trait model.
 * The tape wobbles in one specific place, so the player-specific visual is a
 * mechanism sequence for what happens the moment he leaves the first read, paired
 * with the calendar question that splits the evaluators. Qualitative tiers only.
 */
const drewMestemaker: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Mixed', note: 'Identifies the rush and can get the protection or the play changed; the base holds on the first read and loosens the moment he has to come off it.' },
    { category: 'Processing & Anticipation', tier: 'Strength', note: 'Works full-field and half-field progressions and keeps his eyes downfield on the later options, which a player this new to the position has no business already owning.' },
    { category: 'Accuracy & Placement', tier: 'Mixed', note: 'Throws to all three levels, but without more mass the drive throws lose steam and the deep ball that leaves clean will sometimes flutter or tail late.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Strength', note: 'Natural velocity and a deep ball that comes out with shape; the arm is the easy part of the study.' },
    { category: 'Creation Outside Structure', tier: 'Mixed', note: 'Can extend and keep the later reads alive, but the feet get choppy and the mechanics loosen once the first read is gone.' },
    { category: 'Decision-Making & Risk', tier: 'Concern', note: 'Decides too early. Predetermined throws and quick checkdowns cut concepts off before they develop, so the offense settles for the safe completion underneath.' },
    { category: 'Rushing Value', tier: 'Limited evidence', note: 'A modest movement element on tape; his value as a designed runner is not established on this sample.' },
  ],
  ledeCount: 2,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Natural velocity', icon: 'bolt', detail: 'Easy arm strength and a deep ball with real shape, thrown to all three levels without hesitating.' },
        { name: 'Reads for the résumé', icon: 'iq', detail: 'Full-field and half-field progressions, and eyes that stay downfield on the later options instead of dumping the ball early.' },
        { name: 'Pressure answers', icon: 'shield', detail: 'Identifies the rush and gets the protection or the play changed before it arrives.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'flow',
      kicker: 'Where it wobbles',
      title: 'Off the first read',
      lead: 'While the first read is there, the base holds. The moment he has to come off it, the lower half is the tell.',
      steps: [
        { label: 'First read there', text: 'The base stays under him and the ball comes out with velocity and shape.' },
        { label: 'Forced off it', text: 'The feet get choppy and the mechanics loosen.' },
        { label: 'The result', text: 'The ball starts to sail or die, and the shaky moments trace back to the body more than the arm.' },
      ],
      resolution: { label: 'What it waits on', text: 'Added mass and functional strength, which the drive throw and the late-game stability both need.' },
      expands: ['The open questions'],
    },
    {
      kind: 'question',
      kicker: 'The disagreement',
      question: 'A 2027 quarterback, or a 2028 one?',
      facets: [
        { label: 'What everyone sees', body: 'The arm and the reads that should not be there yet from a player who was punting and playing safety two seasons ago.' },
        { label: 'What is in dispute', body: 'How much a single thin season, at a Group of Five program, from a player this new to the job is allowed to prove. It is a patience question, and it lands on the calendar.' },
      ],
      expands: ['Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Added strength', question: 'Does more mass turn into more on the drive throw and steadier play late in games?', status: 'open' },
        { topic: 'Connected off the first read', question: 'Do the feet and the mechanics stay together when he is forced off the primary?', status: 'open' },
        { topic: 'Real defenses', question: 'How does he look against opponents who can actually challenge him, the test last year did not give him?', status: 'open' },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['The body fills out and the reads hold past the first look against real defenses, and a big arm turns into a real prospect.'],
      down: ['The predetermination and the choppy lower half persist against tougher competition, and it reads as a 2028 profile.'],
      unknown: ['Whether the honest read of him is a 2027 quarterback at all; the timeline leaves 2028 live.'],
    },
  ],
}

export default drewMestemaker
