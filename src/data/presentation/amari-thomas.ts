import type { Presentation } from './types'

/**
 * Amari Thomas. Mid-depth file with the class's best single-route
 * teaching material. One weapon, one blank page, one paradox, and each
 * gets its own visual form.
 */
const amariThomas: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'A fully functional short-game weapon right now, and the whip route is the clinic: clean footwork, violent plant, instant reacceleration.',
    },
    {
      category: 'Ball Skills',
      tier: 'Strength',
      note: '56.3% contested with real away-from-the-frame technique. The drop rate doubles against man, 8.3 against 4.3 overall, because the easy ball stops existing.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: '71% of snaps from the slot with free releases. The press test simply never happened. Untested is different from failed.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Strength',
      note: 'He wins the first ten yards about as well as anyone in this class. The last forty are a fair fight.',
    },
    {
      category: 'YAC Ability',
      tier: 'Major Strength',
      note: 'Dense 205-pound build, 15 forced missed tackles, around 500 yards after the catch, and a catcher-to-runner transition with no stutter.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'Reliable zone feel: finds the soft spot and turns it into a positive play.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Mixed',
      note: 'A contact-absorbing build that runs through arm tackles, next to blocking effort that visibly disengages on screens.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'The first ten yards',
          icon: 'bolt',
          detail:
            'Top speed almost instantly, out of his stance and out of his breaks, with stop-start burst that looks like the film is skipping frames. Even his unorthodox first steps disappear inside the explosion.',
        },
        {
          name: 'Density into yardage',
          icon: 'yac',
          detail:
            'A stacked, contact-absorbing 205 that converts directly into after-catch value: arm tackles run through, fifteen missed tackles forced, about 500 yards after the catch.',
        },
        {
          name: 'The turn',
          icon: 'route',
          detail:
            'Deceleration, body control, and zero-to-full reacceleration. The exact skills stop-and-reverse routes are built on, which is why the whip is the one route that shows everything at once.',
        },
      ],
      expands: ['The first ten yards'],
    },
    {
      kind: 'diagram',
      diagram: 'whip-route',
      title: 'One route that explains him',
      lead: 'A whip sells hard inside, plants, and reverses flat toward the sideline. It’s a brutal route for most receivers because the turn bleeds away all their momentum. For Thomas the turn is exactly where his advantage lives.',
      caption: 'If I were teaching the route to a young receiver, his tape is what I’d pull up.',
      expands: ['One route that explains him'],
    },
    {
      kind: 'compare',
      kicker: 'The paradox',
      title: 'The man-coverage numbers',
      lead: 'Two things from last season look like they can’t both be true. The bridge between them is what kind of catches they were.',
      layout: 'panels',
      sides: [
        {
          label: 'Fact one',
          body: 'He was one of the most productive receivers in the country against man coverage by volume.',
        },
        {
          label: 'Fact two',
          body: 'His separation against man was inconsistent, and his drop rate doubled when the coverage was man: 8.3% against 4.3% overall.',
        },
      ],
      verdict: {
        label: 'The bridge',
        body: 'When the separation didn’t come, the targets kept coming anyway, and he won a lot of them contested, at 56.3%, through traffic instead of through space. I respect it and flag it in the same breath, because the NFL version of that fight is meaner, and a receiver his size would much rather be in the space-winning business.',
      },
      expands: ['The man-coverage numbers'],
    },
    {
      kind: 'question',
      kicker: 'Untested, not failed',
      question: 'Does anything here survive outside the slot?',
      facets: [
        {
          label: 'The blank page',
          body: 'Nobody knows whether he can beat press, because almost nobody has tried pressing him. 71% slot snaps, free releases.',
        },
        {
          label: 'The whole test',
          body: 'Press is the exact skill that decides whether anything he does works outside.',
        },
        {
          label: 'The minor tell',
          body: 'Blocking effort visibly disengages on screens to his side. Effort items are the cheapest fixes in football, and the first thing coaches notice.',
        },
      ],
      expands: ['The press question'],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'Movement' },
      ],
      note: 'A slot separator and after-catch weapon in an offense that gives him space to attack. The whip skill set suggests option routes and man-beating assignments could eventually be his specialty.',
      immediate: [
        'The underneath and intermediate game as his living',
        'After-catch offense on quick throws',
        'Zone-beating from the soft spots',
      ],
      unlock: 'Press answers. A month of outside snaps with real answers would reshape the entire projection, because everything else already works.',
      limitation: 'Outside work stays hypothetical until somebody actually presses him.',
      showCutout: true,
      expands: ['NFL translation'],
    },
    {
      kind: 'watch',
      items: [
        {
          topic: 'Any press reps at all',
          question: 'Even a handful would double the useful information about him.',
          status: 'open',
        },
        {
          topic: 'A vertical plan',
          question: 'Some evidence the last forty yards can at least stay honest.',
          status: 'open',
        },
        {
          topic: 'The man fight',
          question: 'More space wins, fewer traffic wins.',
          status: 'open',
        },
        {
          topic: 'The screens',
          question: 'The blocking effort tells on itself there first.',
          status: 'open',
        },
      ],
      expands: ["What I'm watching in 2026"],
    },
    {
      kind: 'movement',
      up: ['A month of outside snaps with real press answers, which reshapes the entire projection.'],
      down: ['No press exposure again keeps him a scheme-dependent slot with a high floor: valuable and capped.'],
      unknown: ['The burst showing up on a vertical plan, which would retire the paradox for good.'],
    },
  ],
}

export default amariThomas
