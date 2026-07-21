import type { Presentation } from './types'

/**
 * Ryan Coleman Williams. Deep file with bimodal evidence. The page
 * refuses to average the two seasons, same as the profile: they get
 * presented side by side, then sorted into what broke and what didn't.
 */
const rcw: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'The route feel was already advanced for his age when the sport last saw him fully trusted. The 2025 tape muddies everything it touches.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Concern',
      note: 'Double-digit drops on around 80 targets. Spectacular difficult catches next to inexplicable easy drops points at concentration, not hand talent.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'No real read on record either way.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Elite',
      note: 'The movement is elite on any cut of the film: top speed, silky change of direction, stop-start quickness, live against SEC corners since seventeen.',
    },
    {
      category: 'YAC Ability',
      tier: 'Strength',
      note: '28 forced missed tackles across two seasons at 182 pounds is slipperiness, because there’s no other explanation available.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'Not separately on record. What exists lives inside the route feel note above.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Major Concern',
      note: '182 shows up exactly where you’d expect: contact disrupts him, congested areas swallow him. Courage is not the issue. The mindset writes checks the body can’t always cash.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'compare',
      kicker: 'The question over everything',
      title: 'Which season is the real player?',
      lead: 'The evidence contains two completely different players wearing the same jersey, and the whole discipline of evaluating him is refusing to average them together.',
      layout: 'panels',
      sides: [
        {
          label: '2024, at seventeen',
          status: 'Nearly impossible to fake',
          body: 'Started all thirteen games as a seventeen-year-old, put up nearly 900 yards at 18 a catch, made first-team All-SEC, and was briefly the most famous young player in the sport.',
        },
        {
          label: '2025',
          status: 'Impossible to ignore',
          body: 'Dropped his way out of the featured role, watched his snaps shrink in specific situations, and finished the season as its biggest cautionary tale.',
        },
      ],
      verdict: {
        label: 'What I can do',
        body: 'Sort what broke from what didn’t, because they aren’t the same kind of thing. The movement survived the harshest cut of the film. The hands and the habits are where the sorting gets hard.',
      },
      expands: ['What survived 2025'],
    },
    {
      kind: 'howHeWins',
      title: 'What survived 2025',
      items: [
        {
          name: 'Elite movement',
          icon: 'bolt',
          detail:
            'Great top speed, silky change of direction, stop-start quickness, all of it live against SEC corners since he was seventeen.',
        },
        {
          name: 'Corner gravity',
          icon: 'iq',
          detail:
            'Corners abandon their technique against him, bailing out of the pedal and turning to run earlier than they do against anyone else. That’s receiver gravity before the ball is even thrown.',
        },
        {
          name: 'Slipperiness at 182',
          icon: 'yac',
          detail:
            'Pure elusiveness rather than power in the open field, and it works: 28 forced missed tackles across two seasons.',
        },
      ],
    },
    {
      kind: 'read',
      title: 'The drops, diagnosed',
      line: 'Great difficult catches plus inexplicable easy drops points at concentration, at focus arriving and leaving, not at a hand-talent problem. Concentration has a much better repair history than bad hands. It also puts everything on his habits, which should make you a little uncomfortable.',
      expands: ['The drops'],
    },
    {
      kind: 'read',
      title: 'The 182-pound problem',
      line: 'Contact disrupts him, congested areas swallow him, and some finishing failures are just physics. Separate two things: courage is not the issue, mass is. A fear problem is close to unfixable; a mass problem on a frame this young is a weight-room project.',
      expands: ['The 182-pound problem'],
    },
    {
      kind: 'flow',
      kicker: 'Held as a hypothesis, on purpose',
      title: 'The harder read',
      lead: 'There’s a version of the 2025 story that goes past the hands, and I’d be hiding the ball if I left it out.',
      steps: [
        { label: 'The observation', text: 'On some film, you could tell from his route speed whether the play was coming to him.' },
        { label: 'The staff’s tell', text: 'Late in the year, Alabama started taking him off the field on run-blocking downs and some obvious passing situations.' },
        { label: 'The caution', text: 'Effort patterns observed across one miserable season can mislead, and a nineteen-year-old having a visible sulk during a collapsing year is not a scouting death sentence.' },
      ],
      resolution: {
        label: 'Why it stays flagged',
        text: 'It’s the one item here a normal statistical bounce-back wouldn’t disprove. A thousand yards with clean hands would answer the drops. Only the boring downs answer this.',
      },
      expands: ['The harder read'],
    },
    { kind: 'fork' },
    {
      kind: 'nugget',
      kicker: 'The tiebreaker nobody should skip',
      title: 'He plays this season at nineteen',
      body: 'Even a partial rebound would make him one of the youngest premium receivers available in any class, with two full SEC seasons already banked. Age doesn’t catch drops. It does buy development time most prospects never get.',
    },
    {
      kind: 'watch',
      title: 'The rebound checklist',
      items: [
        {
          topic: 'Four downs by October',
          question: 'Snap patterns are the staff telling you what the practices look like.',
          status: 'open',
        },
        {
          topic: 'The easy drops',
          question: 'The drop count, and specifically the routine ones with nobody near him.',
          status: 'open',
        },
        {
          topic: 'The reported muscle',
          question: 'Does it show up as finishing through contact instead of finishing on the ground?',
          status: 'open',
        },
        {
          topic: 'The boring reps',
          question: 'Route speed on plays designed for other people, and blocking when he’s asked.',
          status: 'open',
        },
      ],
      expands: ['The rebound checklist'],
    },
    {
      kind: 'movement',
      up: [
        'A clean-hands season at full usage removes the gate entirely, and this profile reads very differently next summer.',
      ],
      down: [
        'Another year of the 2025 pattern makes the freshman season the outlier instead of the baseline, and that’s a much cheaper player.',
        'Engagement questions resurfacing inside a healthy, featured role. That becomes the headline, because talent was never the thing at risk.',
      ],
    },
  ],
}

export default rcw
