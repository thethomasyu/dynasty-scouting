import type { Presentation } from './types'

/**
 * Arch Manning. Visual-first QB presentation, calibrated alongside LaNorris
 * Sellers as the finalized QB template. Qualitative tiers only, no numeric
 * grades; the markdown profile stays the single source of scouting truth and
 * this config adds no conclusion it does not contain.
 */
const archManning: Presentation = {
  traits: [
    { category: 'Pocket Management', tier: 'Strength', note: 'Climbs and resets in traffic and makes throwing room without drifting back; the sacks stay low. A straight interior rush can still knock the timing off.' },
    { category: 'Processing & Anticipation', tier: 'Strength', note: 'Moves off the first read with his eyes and feet connected and throws before the man has come open.' },
    { category: 'Accuracy & Placement', tier: 'Mixed', note: 'Layered deep touch and window placement, next to short-area throws that come out careless when he rushes the footwork.' },
    { category: 'Arm Strength & Throw Flexibility', tier: 'Strength', note: 'Real touch and arm-slot flexibility, including off platform; the compact release leaves the pure drive velocity the one unsettled part.' },
    { category: 'Creation Outside Structure', tier: 'Strength', note: 'Buys time and delivers off balance from a muddy pocket, not only from a clean base.' },
    { category: 'Decision-Making & Risk', tier: 'Strength', note: 'Sound choices under duress and willing to take the checkdown; the lapses are careless easy throws rather than reckless ones.' },
    { category: 'Rushing Value', tier: 'Adequate', note: 'A short-yardage and goal-line runner who picks up the sneak and the scramble first down, not a designed-run centerpiece.' },
  ],
  ledeCount: 1,
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        { name: 'Layered deep ball', icon: 'bolt', detail: 'Touch to drop it over one defender and in front of the help, changing arm slot to fit the window instead of driving every ball flat.' },
        { name: 'Off-platform delivery', icon: 'compass', detail: 'Keeps the ball accurate from a base the scramble left him, not just from a clean setup.' },
        { name: 'On-time reads', icon: 'iq', detail: 'Gets off the first read without his feet coming apart and lets it go before the receiver uncovers.' },
      ],
      expands: ['Where the evaluations agree'],
    },
    {
      kind: 'question',
      kicker: 'The open question',
      question: 'How much does the compact release cost the deep ball?',
      facets: [
        { label: 'What travels', body: 'The touch and the arm-slot flexibility; he can move the ball around a defender from platforms that should not allow it.' },
        { label: 'What is unsettled', body: 'The compact, near-sidearm motion leaves the pure drive velocity on the deep out and the tightening dig less certain.' },
      ],
      expands: ['The open questions', 'Where the evaluations split'],
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Short-area placement', question: 'Does it steady without costing him the compact release?', status: 'open' },
        { topic: 'Interior pressure', question: 'Does the timing hold across a full year of straight interior rush?', status: 'open' },
        { topic: 'Ball outside the numbers', question: 'Does the current release keep enough velocity on the boundary throws?', status: 'open' },
      ],
      expands: ['What I\'m watching in 2026'],
    },
    {
      kind: 'movement',
      up: ['The short-area placement steadies without him lengthening the release.'],
      down: ['Interior pressure keeps breaking the timing and the careless easy throws stay.'],
      unknown: ['What the ball does outside the numbers, and whether the compact release was coached.'],
    },
  ],
}

export default archManning
