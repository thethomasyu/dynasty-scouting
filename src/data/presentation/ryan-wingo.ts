import type { Presentation } from './types'

/**
 * Ryan Wingo. Deep file, the purest tools bet in the class. The page
 * translates the track time into football first, then gives the two
 * gaps their own visuals: the catching problem and the feel for space.
 */
const wingo: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Concern',
      note: 'Runs his routes at one speed, a great one coverage isn’t confused by. The fakes are inconsistent rather than absent.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Concern',
      note: 'A double-digit drop rate including wide-open misses, a contested rate under 30 percent, and a body-catching mechanism behind both.',
    },
    {
      category: 'Release & Press',
      tier: 'Unknown',
      note: 'The record is about the stem, not the line of scrimmage. No real press book exists on him yet.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Elite',
      note: 'A 10.55 hundred in a body now carrying 210-plus. Linear rather than lateral: a runaway train, not a joystick.',
    },
    {
      category: 'YAC Ability',
      tier: 'Strength',
      note: 'Twelve forced missed tackles on manufactured touches. The burst and mass are proven; balance through a squared-up tackler is game-to-game.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Major Concern',
      note: 'Little sense yet for space and timing: runs past open grass, carries routes into defenders, gives his quarterback few friendly windows.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'The stem power is real: he leans into corners and bursts off the contact. The application needs a legal version, because NFL crews will flag some of those reps.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The start of every conversation',
      stats: [{ value: '10.55', label: '100 meters, high school' }],
      context:
        'Track times don’t catch passes, so translate it: his acceleration arrives while corners are still opening their hips, the long speed is true home-run gear, and because 210-plus pounds arrives with it, his vertical stem is a physical event. Defenders have to honor the collision and the sprint at the same time.',
      expands: ['What 10.55 means at this size'],
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'Speed that changes schedules',
          icon: 'bolt',
          detail:
            'The cushion disappears on a timetable corners have never practiced against, and one missed jam or one blown leverage becomes seven points.',
        },
        {
          name: 'The stem as a weapon',
          icon: 'physical',
          detail:
            'He leans into corners mid-route and bursts off the contact. The strength is real; the legal version of it is a development item.',
        },
        {
          name: 'Manufactured chaos',
          icon: 'yac',
          detail:
            'Sweeps, screens, and handoffs, because size plus that speed in space is a fair fight for nobody. Twelve forced missed tackles and real chunk plays.',
        },
      ],
      expands: ['After the catch, with a caveat'],
    },
    {
      kind: 'stat',
      layout: 'pair',
      kicker: 'The least glamorous problem in scouting',
      stats: [
        { value: '10%+', label: 'Drop rate, 2025' },
        { value: '<30%', label: 'Contested chances converted' },
      ],
      context:
        'The misses include wide-open, uncontested throws, and I can’t defend that contested number for a receiver built like this. The mechanism is what makes it worse than a focus blip: he’s a body catcher, and body catching taxes everything. This is a technique rebuild, hands and posture, not a concentration story you wait out.',
      expands: ['The catching problem'],
    },
    {
      kind: 'diagram',
      diagram: 'zone-feel',
      title: 'The quieter gap: feel for space',
      lead: 'He shows little sense yet for space and timing: he’ll run past open grass, carry routes into defenders, and give his quarterback few friendly windows against zone. Feel is the trait that historically decides whether this archetype converts.',
      caption:
        'The league is littered with sprinters who never learned where the soft spots live, and it employs a small, rich club of the ones who did. Nothing in his film says which club he joins.',
      expands: ['The feel for space'],
    },
    { kind: 'fork' },
    {
      kind: 'watch',
      title: 'What 2026 has to show',
      lead: 'The question at the top: does he attack the ball? Everything else about him is negotiable. The catching is not. And the excuses are gone: real quarterback play, and Cam Coleman across the field pulling coverage.',
      items: [
        {
          topic: 'Hand technique first',
          question: 'Routine throws, because the fix shows up there before the stat line moves.',
          status: 'open',
        },
        {
          topic: 'The contested rate',
          question: 'A number that should embarrass a 214-pound sprinter into at least the fifties.',
          status: 'open',
        },
        {
          topic: 'Any throttle',
          question: 'One route a game where he changes speed into a window on purpose.',
          status: 'open',
        },
        {
          topic: 'Legal stem power',
          question: 'Wins without the push-off, because NFL officials will throw the flag college crews kept pocketed.',
          status: 'open',
        },
      ],
      expands: ['What 2026 has to show'],
    },
    {
      kind: 'movement',
      up: [
        'Visible catch-technique change, which moves this faster than production would, because the mechanism is the whole problem.',
        'A season of real zone feel would be the bigger surprise, the one that changes what kind of receiver we’re even talking about.',
      ],
      down: [
        'Another double-digit drop season at this usage. The tools conversation goes academic and the projection becomes a gadget role with special teams attached.',
      ],
    },
  ],
}

export default wingo
