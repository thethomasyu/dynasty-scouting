import type { Presentation } from './types'

/**
 * Jeremiah Smith. Deep file. The page follows the profile's own argument:
 * the settled part, the one real question (route detail), the contact
 * habit, then translation and the season ahead.
 */
const smith: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Concern',
      note: 'Behind the athleticism. Too many routes at one speed, and hitches and comebacks still lose at the break.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Strength',
      note: 'Wins the ball in the air, finishes through contact, tracks naturally, and no drop pattern exists anywhere on his film.',
    },
    {
      category: 'Release & Press',
      tier: 'Strength',
      note: 'Strong enough to run through a jam, with enough release variety that he rarely needs to.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Elite',
      note: 'The film says low-4.4 receiver at 225 plus. No verified testing exists yet, so it stays a film call.',
    },
    {
      category: 'YAC Ability',
      tier: 'Adequate',
      note: 'Big and fast is the whole method. Fifteen missed tackles anyway, but no wiggle and no open-field creativity.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'Attacks back downfield when a break loses, which saves his quarterback from interceptions. Full-speed decoy routes.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Mixed',
      note: 'Willing but unfinished. Real perimeter flashes next to a badly missed reach block that became a defensive touchdown.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Vertical explosion',
          icon: 'bolt',
          detail:
            'Real speed at 225 plus, not build-up speed. His strides cover so much ground that a backpedaling corner is losing the race before he finishes turning around.',
        },
        {
          name: 'Catch-point strength',
          icon: 'target',
          detail:
            'Wins the ball in the air and finishes through contact. There is a 2025 catch where he absorbs a car crash of a hit in traffic and the ball never moves.',
        },
        {
          name: 'Late hands',
          icon: 'hands',
          detail:
            'His hands stay down until the last possible beat, so the corner never gets a timing cue telling him when to play the ball.',
        },
      ],
    },
    {
      kind: 'diagram',
      diagram: 'late-hands',
      title: 'Why late hands matter',
      lead: 'If a receiver’s arms come up early, the corner gets a free timer telling him exactly when to play the ball. Smith keeps them down, and the corner is guessing until it’s too late.',
      expands: ['The part nobody argues about'],
    },
    {
      kind: 'diagram',
      diagram: 'route-pacing',
      title: 'Route pacing, and what’s missing',
      lead: 'Pacing is changing speeds inside a route, selling vertical and then throttling down into the break, so the corner can never get calibrated to you. It’s the single biggest lever Smith has left for converting his athletic edge into maximum separation.',
      caption:
        'His breaks are explosive rather than crisp: violent out of the cut, without the clean stop that creates instant space. Cam Coleman is better on the stop-route family right now.',
      expands: ['The route running'],
    },
    {
      kind: 'question',
      kicker: 'The 2026 question',
      question:
        'Does the fine-grain route work start showing up, and what happens the first time a corner disrupts him with technique instead of muscle?',
      facets: [
        {
          label: 'What’s settled',
          body: 'The athletic tier. Two seasons of college corners have taken their shot at him, and the ones who held up fit on one hand.',
        },
        {
          label: 'The open issue',
          body: 'Pacing and stop-route detail. Nothing ever forced the fine-grain stuff to develop, so the details show it.',
        },
        {
          label: 'Why it matters',
          body: 'If a team hands him a full route tree in September of his rookie year, pro corners will make him live in the part of his game that’s still under construction.',
        },
        {
          label: 'Where I land',
          body: 'Closer to the reading that says the gap barely costs him. Everything in the concern column is technique and habit, none of it is effort or physical, and I’d rather argue about a timeline than a ceiling.',
        },
      ],
    },
    {
      kind: 'flow',
      title: 'The contact habit',
      lead: 'Press at the line mostly isn’t a problem. The wrinkle shows up deeper into routes, and it runs on cause and effect.',
      steps: [
        { label: 'The setup', text: 'Coverage gets physical in the middle of the route.' },
        { label: 'His answer', text: 'Smith starts the collision himself, dropping a shoulder into the defender. The collision always worked, so it became the answer.' },
        { label: 'The cost', text: 'He wins the strength exchange, and the contact knocks his own route off schedule.' },
        { label: 'The NFL test', text: 'Pro corners will happily invite the contact, absorb it, and let the route die while the officials keep their flags in their pockets.' },
      ],
      resolution: {
        label: 'The fix',
        text: 'Hands and lean. Stay on schedule through contact instead of stopping to win a fight nobody is scoring.',
      },
      expands: ['The contact habit'],
    },
    {
      kind: 'read',
      title: 'The rest of his game',
      line: 'After the catch you’re getting a battering ram with a head start, not a YAC creator. Blocking is willing and unfinished. And there is nothing bad to say about his hands.',
      expands: ['The rest of his game'],
    },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'X', primary: true }],
      note: 'Where he lines up is the least interesting question in this profile. The conditional part is what his first couple of seasons look like, and that’s a range about the first two years, not about the destination.',
      immediate: [
        'Vertical routes and isolation matchups',
        'Back-shoulder throws',
        'Red zone and contested-catch work',
        'An immediate outside starting job',
      ],
      unlock:
        'The full route tree. If the tempo work and stop-route detail arrive, the only real gap in his game closes.',
      limitation:
        'A full-tree feature role in year one would expose the refinement gap for stretches. Deployed first as a deep and contested-catch weapon, the transition looks smooth.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      title: 'What 2026 can settle',
      items: [
        {
          topic: 'Tempo inside routes',
          question: 'Does he change speeds inside a route instead of running everything at one blazing gear?',
          status: 'open',
        },
        {
          topic: 'Stop routes',
          question: 'Do hitches and comebacks start winning at the break instead of getting rescued by his work back to the ball?',
          status: 'open',
        },
        {
          topic: 'Mid-route physicality',
          question: 'When somebody plays him physical for sixty minutes, does he answer with hands and leverage or another shoulder?',
          status: 'open',
        },
        {
          topic: 'Blocking execution',
          question: 'Does the execution catch up to the effort? The effort was never the issue.',
          status: 'open',
        },
      ],
      expands: ['What 2026 can settle'],
    },
    {
      kind: 'movement',
      up: [
        'Visible tempo manipulation inside routes',
        'Stop routes that win at the break itself. That closes the only real gap in his game.',
      ],
      down: [
        'Another season of one-speed routes and shoulder-first answers. That moves the slow-start scenario from possible to likely.',
      ],
      unknown: [
        'Verified testing, in either direction. Right now the athletic tier is a film verdict with no numbers behind it.',
      ],
      expands: ['What would move this evaluation'],
    },
  ],
}

export default smith
