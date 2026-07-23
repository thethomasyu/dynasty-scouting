import type { Presentation } from './types'

/**
 * LaNorris Sellers. Visual-first QB presentation, calibrated alongside Arch
 * Manning as the finalized QB template. Same category order and components as
 * Manning with a very different tier pattern: physical traits high, operation
 * traits a real concern. Qualitative tiers only; the markdown profile stays the
 * source of scouting truth.
 */
const lanorrisSellers: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Concern', note: 'High sack exposure and navigation that turns jumpy under pressure, even though he breaks a tackle once one arrives.' },
    { category: 'Processing & Anticipation', tier: 'Concern', note: 'Waits for the receiver to come open instead of throwing on schedule; the trigger is the underdeveloped part.' },
    { category: 'Accuracy & Placement', tier: 'Mixed', note: 'A high-end deep ball with short-area touch that lags; some read the accuracy itself as better than its public reputation.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Major Strength', note: 'Rare arm strength that is not in dispute; the deep ball is a real weapon.' },
    { category: 'Creation Outside Structure', tier: 'Major Strength', note: 'Turns broken protection into positive yardage and keeps a play alive through contact once the pocket fails.' },
    { category: 'Decision-Making & Risk', tier: 'Concern', note: 'The late trigger and the checkdown he leaves sitting show up as third-down interceptions on the down that demands an on-time answer.' },
    { category: 'Rushing Value', tier: 'Major Strength', note: 'Explosive on designed keepers and on scrambles; a running threat a defense has to account for.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Explosive legs', icon: 'compass', detail: 'A designed-run and scramble threat a defense has to put a body on every down.' },
        { name: 'Rare arm', icon: 'bolt', detail: 'First-round arm strength; the deep ball stresses a defense vertically.' },
        { name: 'Plays big', icon: 'shield', detail: 'Strong enough to take a free rusher and keep the down alive when the protection fails.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'diagram',
      diagram: 'rescue-creation',
      kicker: 'The pocket, drawn up',
      title: 'A good play out of a bad one',
      lead: 'When the protection caves he slips the rush and keeps the down alive, turning a broken snap into positive yardage. The talent bailing out unstable snaps is the productive part; how many of those snaps he creates himself is the question underneath it.',
    },
    {
      kind: 'question',
      kicker: 'The open question',
      question: 'How much of the good comes on schedule, and how much is rescue?',
      facets: [
        { label: 'On schedule', body: 'The quick game and the timing windows are the underdeveloped part; he tends to wait for a receiver to come open.' },
        { label: 'Rescued', body: 'The arm and the legs turn late or broken downs into positive plays, which keeps the tape productive while the operation lags.' },
      ],
      expands: ['The open questions', 'Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'The trigger', question: 'Does he throw before the receiver has clearly won, or does the late release survive a scheme change?', status: 'open' },
        { topic: 'Outlet access', question: 'Does the checkdown become a dependable answer instead of coming and going?', status: 'open' },
        { topic: 'Sack responsibility', question: 'Do the sacks fall through faster recognition rather than tackle-breaking?', status: 'open' },
      ],
      expands: ['What I\'m watching in 2026'],
    },
    {
      kind: 'movement',
      up: ['He starts throwing on schedule and the sacks fall through recognition.'],
      down: ['The late trigger survives the scheme change and the sacks keep coming.'],
      unknown: ['How much of last year was protection and design versus him.'],
    },
  ],
}

export default lanorrisSellers
