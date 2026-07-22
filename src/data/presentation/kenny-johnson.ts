import type { Presentation } from './types'

/**
 * Kenny Johnson. Moderate file: one rare proven skill, fog around it.
 * The geometry diagram is the whole reason his page exists; the fog
 * stays fog, plainly labeled.
 */
const johnson: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Mixed',
      note: 'A well-bent in-route and a nearly-executed whip exist on tape, but the library runs on one reliable shake-fake, and corners catalog it.',
    },
    {
      category: 'Ball Skills',
      tier: 'Concern',
      note: 'Focus drops on record, turning upfield before securing the ball.',
    },
    {
      category: 'Release & Press',
      tier: 'Strength',
      note: 'Fights press in a distinctive way: converts contact into position, turning outside leverage into inside real estate.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Unknown',
      note: 'NFL-quick in some stretches, ordinary in others, no testing number to break the tie. I’ve stopped pretending the film settles it.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Close to empty once you throw out a couple of badly designed touches that mostly told you about the play-caller.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Major Strength',
      note: 'Understands space well enough to weaponize other people’s bodies, repeatedly, against elite coverage. Most receivers never show it once.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Unknown',
      note: 'Not on record.',
    },
  ],
  modules: [
    {
      kind: 'snapshot',
      contextNote: 'Thinner record than most, and sized accordingly. The one proven thing is unusual and real. Around it, mostly fog.',
    },
    {
      kind: 'diagram',
      diagram: 'geometry',
      title: 'Separation by geometry',
      lead: 'Against a corner who’ll hear his name called very early in a draft, Johnson kept steering his routes so that other bodies, defenders, teammates, once even an official, ended up parked in his defender’s recovery path.',
      caption: 'The corner’s path to the catch point got longer. Johnson’s got shorter. He was manufacturing separation with geometry instead of feet.',
      expands: ['How he gets open'],
    },
    {
      kind: 'flow',
      title: 'The one-move problem',
      steps: [
        { label: 'Early in games', text: 'The signature shake-fake wins.' },
        { label: 'Then', text: 'Corners catalog it and sit on it.' },
        { label: 'The bill', text: 'The wasted steps start costing him the exact separation the move used to buy.' },
      ],
      expands: ['The one-move problem'],
    },
    {
      kind: 'read',
      title: 'What we don’t know',
      line: 'The list is long: athletic caliber unsettled, whole quarters of invisibility, an after-catch record that’s close to empty, and even a reliable height and weight are hard to come by. This page stays short on purpose.',
      expands: ["What we don't know"],
    },
    {
      kind: 'compare',
      kicker: 'Conditional projection',
      title: 'The fork is exactly this narrow',
      layout: 'panels',
      sides: [
        {
          label: 'If the move library grows',
          body: 'The IQ and the press toughness underneath make him a starter-track piece who can play slot or boundary.',
        },
        {
          label: 'If it stays at one',
          body: 'A depth receiver whose best trick stops working roughly the moment NFL corners compare notes.',
        },
      ],
    },
    {
      kind: 'roleMap',
      alignments: [
        { pos: 'Slot', primary: true },
        { pos: 'X' },
      ],
      note: 'He threatens from the boundary and the slot with the same skill set, which is its own versatility argument. Which job he gets depends on the move library above.',
    },
    {
      kind: 'watch',
      title: "What I'm watching",
      items: [
        {
          topic: 'The move library',
          question: 'A second reliable fake by November changes his trajectory more than any stat line could.',
          status: 'open',
        },
        {
          topic: 'The vanishing acts',
          question: 'Does a better quarterback situation keep him present for four quarters?',
          status: 'open',
        },
        {
          topic: 'Measurements',
          question: 'Whenever they come, because the athletic tie needs breaking.',
          status: 'open',
        },
      ],
      expands: ["What I'm watching"],
    },
    {
      kind: 'movement',
      up: ['A diversified route game, which makes the geometry skill the bonus on top of a real starter.'],
      down: ['Another one-move season makes it the whole act, and one-trick receivers get drafted late.'],
    },
  ],
}

export default johnson
