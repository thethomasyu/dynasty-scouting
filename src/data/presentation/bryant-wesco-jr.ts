import type { Presentation } from './types'

/**
 * Bryant Wesco Jr. Deep file. Trait reads carry over verbatim from the
 * Trait Lab experiment, which this snapshot replaces. The page is built
 * around his two real stories: the release plan, and the identity
 * question the whole class argues about.
 */
const wesco: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Major Strength',
      note: 'The class’s route technician among the top names. The hard cuts are excellent; the 45-degree family is merely good.',
    },
    {
      category: 'Ball Skills',
      tier: 'Mixed',
      note: 'Tracking is good. The 2025 drops look like a one-bad-year story, and only a healthy season can confirm it.',
    },
    {
      category: 'Release & Press',
      tier: 'Mixed',
      note: 'The release plan is the best thing on his tape. Holding up against physical press at 190 pounds is the cost.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Unknown',
      note: 'Explosiveness and stop-start are real. The long speed is the biggest open question in the class.',
    },
    {
      category: 'YAC Ability',
      tier: 'Limited evidence',
      note: 'After-catch play is barely on record either way. Nothing to grade yet.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Strength',
      note: 'Keeps working after the design breaks down and adjusts routes into empty grass. Gets open on purpose.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Major Concern',
      note: '190 is doing damage everywhere: press, contested finishing, blocking. The motor is not the problem.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'A release plan, not releases',
          icon: 'release',
          detail:
            'He designs releases to play off the ones he showed earlier, attacking the corner’s memory instead of his feet. That’s veteran-receiver behavior, and it barely exists in college.',
        },
        {
          name: 'Routes a quarterback can trust',
          icon: 'route',
          detail:
            'Attacks leverage off the line, runs double moves without slowing down, and repeats his patterns consistently enough to be thrown open on trust. Lanky frames usually wobble. His doesn’t.',
        },
        {
          name: 'Open on purpose',
          icon: 'iq',
          detail:
            'Adjusts drags into the soft spot of a zone and keeps working for his quarterback after the play breaks down.',
        },
      ],
    },
    {
      kind: 'diagram',
      diagram: 'release-sequencing',
      title: 'The release plan, sequenced',
      lead: 'A corner keeps a running mental file on your feet. Show him the same release twice and he starts jumping it. Show him a release designed to play off the earlier one and you’re attacking his memory. Wesco ran this exact sequence against an elite corner, the kind who gets drafted very early.',
      caption:
        'Same setup, opposite route. Full-speed releases on running plays banked him hundreds of extra live reps nobody noticed.',
      expands: ['Route running and releases'],
    },
    {
      kind: 'read',
      title: 'The 190-pound problem',
      line: '190 is doing damage in every single concern he has: press coverage downfield, contested finishing, blocking. Notice what’s missing from that list, though. His actual ball skills are fine, which routes the fix to the weight room instead of the jugs machine.',
      expands: ['The 190-pound problem'],
    },
    {
      kind: 'stat',
      layout: 'single',
      kicker: 'The number I won’t spin',
      stats: [{ value: '13.9%', label: 'Drop rate, 2025' }],
      context:
        'Bad, and it happened inside a seven-game season that ended in back surgery. The drops look like focus drops rather than hands-quality drops, and his freshman hands were reportedly clean. That’s a real one-bad-year argument, and it stays an argument until a healthy season resets the number.',
      expands: ['The drops'],
    },
    {
      kind: 'nugget',
      kicker: 'Scouting nugget · two kinds of drops',
      title: 'Focus drops against hands-quality drops',
      body: 'A focus drop is concentration failing on a routine ball; it comes and goes with circumstances, and an injury-wrecked season is a circumstance. A hands-quality drop is technique or catch radius failing on a hard one, and that kind follows you for a career.',
    },
    {
      kind: 'compare',
      title: 'What kind of receiver is he?',
      lead: 'Nobody argues about the skill. The argument is what it’s attached to, and the evidence points in opposite directions.',
      layout: 'stack',
      sides: [
        {
          label: 'The technician',
          status: 'One elite corner',
          body: 'Against a corner who gets drafted very early, the vertical wins disappeared. No deep separation, everything earned underneath. That version belongs away from the go ball entirely.',
        },
        {
          label: 'The deep threat',
          status: 'Seven healthy games',
          body: 'Across the full healthy 2025 sample he kept running away from people, at more than 17 yards a catch for the second straight season, with acceleration that rolls into real long-range speed.',
        },
        {
          label: 'The middle reading',
          status: 'Splits the film',
          body: 'No sudden top gear, but real build-up speed. A long strider who runs away from coverage when the route gives him a runway.',
        },
      ],
      verdict: {
        label: 'Where I land',
        body: 'The middle reading, held loosely, because it fits the most film. The track pedigree settles nothing: all jumps, no sprints. The one measurable that would resolve this profile doesn’t exist yet, and 2026 is going to provide evidence either way.',
      },
      expands: ['What kind of receiver is he?'],
    },
    { kind: 'medical', heading: 'The back injury' },
    { kind: 'fork' },
    {
      kind: 'watch',
      title: 'What 2026 has to answer',
      items: [
        {
          topic: 'Vertical reps vs the best corners',
          question: 'Does he stack them, or does everything get earned underneath?',
          status: 'open',
        },
        {
          topic: 'The body',
          question: 'Does mass actually show up, and do the press and contested-catch problems shrink with it?',
          status: 'open',
        },
        {
          topic: 'The hands',
          question: 'Does a healthy season restore the freshman baseline and kill the drop conversation?',
          status: 'open',
        },
        {
          topic: 'The sanding list',
          question: 'The 45-degree cuts, and the one fade fake that kept failing against that elite corner.',
          status: 'open',
        },
      ],
    },
    {
      kind: 'movement',
      up: [
        'A healthy season of stacking good corners. That changes the shape of the projection, from role-protected craft receiver to complete X.',
        'A verified speed number, whenever one surfaces. It does more for him than for almost anyone in this class.',
      ],
      down: [
        'A second drop-heavy season, which kills the one-bad-year argument.',
        'Continued vertical struggles against quality corners. That settles the identity question the wrong way and caps the ceiling without touching the floor.',
        'Any recurrence of the back problem, which rewrites this entire profile.',
      ],
      expands: ['What would change the evaluation'],
    },
  ],
}

export default wesco
