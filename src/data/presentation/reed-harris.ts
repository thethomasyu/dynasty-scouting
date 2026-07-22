import type { Presentation } from './types'

/**
 * Reed Harris. Thin file: an outline, not a finished evaluation. The
 * page's job is to show exactly what's lit and what's dark, and to
 * resist inflating either. No headings in the profile; the complete
 * file opens as one expansion.
 */
const harris: Presentation = {
  ledeCount: 1,
  restLabel: 'Read the complete file',
  traits: [
    {
      category: 'Route Craft',
      tier: 'Concern',
      note: 'Wins through mass and momentum rather than craft. The smoothness and consistency aren’t there yet, and he’s been a full-time receiver for less time than most of this class.',
    },
    {
      category: 'Ball Skills',
      tier: 'Mixed',
      note: 'Real vertical leaping, long arms, big hands, and repeated unusual adjustments to badly placed throws. The contested results that exist ran behind what the usage demanded, with terrible quarterback play in the story.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'Unexamined.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Unknown',
      note: 'The mid-to-high 4.4s figure is an informal estimate. If it’s anywhere close, receivers at 6\'4" and 220 with that gear are scarce.',
    },
    {
      category: 'YAC Ability',
      tier: 'Unknown',
      note: 'Unexamined.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'Unexamined.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'Boston College used him extensively as an H-back and tight-end-style blocker. Coaching staffs don’t hand that job to soft receivers.',
    },
  ],
  modules: [
    {
      kind: 'snapshot',
      contextNote: 'One good look, plenty still dark. This is a go-check-on-this-guy note, sized like one.',
    },
    {
      kind: 'compare',
      kicker: 'The outline',
      title: 'What’s lit, what’s dark',
      layout: 'panels',
      sides: [
        {
          label: 'On the record',
          body: 'A catch-radius game: leaping, long arms, adjustments practiced constantly by necessity. A power game through coverage. Blocking duty that doubles as toughness testimony. A spring-verified 6\'4" and 220.',
        },
        {
          label: 'Still dark',
          body: 'Press answers, after-catch value, spatial feel, real speed, real contested numbers. All unexamined or estimated, inside one of the country’s worst passing situations.',
        },
      ],
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'The radius',
          icon: 'target',
          detail: 'Uses his full catch radius the way big receivers are supposed to and often don’t, with bad quarterbacking as the involuntary training program.',
        },
        {
          name: 'Mass and momentum',
          icon: 'physical',
          detail: 'Muscles through coverage where refined receivers slip through it. The development question, out loud: how do you refine a player who has always won by being bigger and faster than the problem?',
        },
        {
          name: 'The toughness résumé',
          icon: 'shield',
          detail: 'H-back blocking work that suppressed his receiving numbers and doubles as testimony. A former Montana high school quarterback still learning the position.',
        },
      ],
    },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'X', primary: true }],
      note: 'If the outline fills in kindly, a boundary size-speed receiver whose toughness is already proven and whose polish arrives late. He lands in a dramatically better offense with a real chance at the featured season he’s never had.',
    },
    {
      kind: 'watch',
      items: [
        { topic: 'Craft beyond collision', question: 'Do the routes gain anything past mass and momentum?', status: 'open' },
        { topic: 'The contested numbers', question: 'Do they climb with a functional quarterback?', status: 'open' },
        { topic: 'The speed estimate', question: 'Does it survive being measured?', status: 'open' },
      ],
    },
    {
      kind: 'movement',
      up: ['A breakout, which wouldn’t surprise anyone who’s seen the build.'],
      down: ['Another year of mass-and-momentum football. The difference between those two outcomes is most of his draft value.'],
    },
  ],
}

export default harris
