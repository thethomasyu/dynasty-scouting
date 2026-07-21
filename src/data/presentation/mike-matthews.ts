import type { Presentation } from './types'

/**
 * Mike Matthews. Moderate file. His profile is one collision, so the
 * page is one collision: what the routes earn against what the hands
 * keep, with the undiagnosed part called out honestly.
 */
const matthews: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Major Strength',
      note: 'Runs the full menu, not one cut family, with separation coming from footwork and selling rather than raw speed. The seam double move might be the prettiest route in the class’s middle tier.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Concern',
      note: 'A drop rate above fifteen percent and a contested rate below thirty, and both hold up from any angle you check. No sample-size argument to hide behind.',
    },
    {
      category: 'Release & Press',
      tier: 'Concern',
      note: 'The same feet that create mid-route separation get him knocked around by press, and that transfer failing needs explaining.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Adequate',
      note: 'Instant acceleration to top gear and quality movement for the size. Nothing freakish, and the routes don’t need it.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Not on record.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'Not on record.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Unknown',
      note: 'Not separately on record; the press struggles file under the release game.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'compare',
      kicker: 'The collision',
      title: 'What the routes earn, what the hands keep',
      lead: 'No receiver in this class has a wider gap between the two. His profile is that collision and not much else.',
      layout: 'panels',
      sides: [
        {
          label: 'The routes',
          status: 'The case for him',
          body: 'Deep hitches set up with a convincing vertical sell, clean deep outs, a seam double move that ruins safeties. Full-menu route running at this age is rare, and it’s the specific skill NFL teams keep discovering they can’t teach.',
        },
        {
          label: 'The hands',
          status: 'The case against',
          body: 'Above fifteen percent drops, below thirty percent contested. Enough dropped and lost catchable balls to make the routes almost beside the point.',
        },
      ],
      verdict: {
        label: 'The difference between the framings',
        body: 'The optimistic frame treats it as consistency and comfort, correctable with volume. The pessimistic frame says catch reliability this poor disqualifies him from the tier his routes deserve. Both fit the record. The difference between them is patience.',
      },
      expands: ['The route menu', 'The drops'],
    },
    {
      kind: 'nugget',
      kicker: 'Scouting nugget · why diagnosis matters',
      title: 'An undiagnosed problem is harder to price',
      body: 'Nobody has put a clean mechanism on his drops. Body catching? Concentration? Timing? The record doesn’t say, and that’s the detail that actually worries me: you can’t tell whether you’re buying a technique fix or a chronic condition.',
    },
    {
      kind: 'read',
      title: 'The press oddity',
      line: 'Route footwork usually transfers to the line of scrimmage. His doesn’t, and something needs explaining. Part of the explanation may be environmental, and part of it is on him, because skill this obvious shouldn’t stay this shy against contact.',
      expands: ['The press problem'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Z' },
      ],
      note: 'If the catching stabilizes to merely average, a full-menu separator with adequate athleticism is a starting, slot-capable NFL receiver. If it doesn’t, the routes stop mattering.',
      immediate: ['Separation on the full route menu, today'],
      unlock: 'A normal-drop season, which flips this evaluation faster than any player in the class’s middle tier.',
      limitation: 'Another fifteen-percent year probably ends the argument.',
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'The drop count at volume',
          question: 'The third-year season is the trial, with real targets behind it.',
          status: 'open',
        },
        {
          topic: 'Press answers',
          question: 'Do they ever start borrowing from the route footwork?',
          status: 'open',
        },
      ],
    },
    {
      kind: 'movement',
      up: ['A normal-drop season. The five-star pedigree stops looking like a punchline.'],
      down: ['Another fifteen-percent drop year, which probably ends the argument.'],
    },
  ],
}

export default matthews
