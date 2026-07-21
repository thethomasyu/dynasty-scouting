import type { Presentation } from './types'

/**
 * Nick Marsh. Deep file. The page is an investigation, same as the
 * profile: the settled violence, the real skill, then the puzzle at the
 * center (why isn't he open more?) run as a three-hypothesis diagnostic,
 * and the catch-point mechanism that annoys me most.
 */
const marsh: Presentation = {
  traits: [
    {
      category: 'Route Craft',
      tier: 'Strength',
      note: 'Tempoed stems, hip sink, honest selling, and a late gear at the breakpoint. Deserves a re-check against better corners.',
    },
    {
      category: 'Ball Skills',
      tier: 'Major Concern',
      note: 'A body catcher. The contested and drop numbers both trace to the same posture, and the posture is behavior.',
    },
    {
      category: 'Release & Press',
      tier: 'Strength',
      note: 'Clean off the line with real hand usage. Wins at the line don’t reliably become wins downfield.',
    },
    {
      category: 'Functional Athleticism',
      tier: 'Concern',
      note: 'The long speed keeps reading capped on film, and no verified number exists to argue back.',
    },
    {
      category: 'YAC Ability',
      tier: 'Major Strength',
      note: 'Violent and instant, straight from his running back past. The most settled part of his game.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      tier: 'Unknown',
      note: 'Nothing on record either way. What IQ evidence exists lives inside the route tempo.',
    },
    {
      category: 'Physicality / Blocking',
      tier: 'Strength',
      note: 'Physically mature, with blocking that flashes best-in-class. The gap between best rep and average rep is effort.',
    },
  ],
  modules: [
    { kind: 'snapshot' },
    {
      kind: 'stat',
      layout: 'pair',
      kicker: 'Two numbers that shouldn’t share a receiver',
      stats: [
        { value: '28', label: 'Forced missed tackles, 2025' },
        { value: '27.3%', label: 'Contested-catch rate, 2025' },
      ],
      context:
        'Roughly half of all tackle attempts against him failed, running back numbers from a receiver. And the same player converted barely a quarter of his contested chances at 6\'3" and 215, which for his size is not a weakness. Something is wrong, and the something is diagnosable.',
    },
    {
      kind: 'howHeWins',
      items: [
        {
          name: 'After-catch violence',
          icon: 'yac',
          detail:
            'Sheds defensive backs the way a running back does, because he was one in high school. No gather step, already downhill, with real creativity mixed into the violence.',
        },
        {
          name: 'Tempo and a late gear',
          icon: 'route',
          detail:
            'Changes speeds through the stem, sinks his hips at the top, and finds an extra burst exactly at the cut. Breakpoint re-acceleration is a high-end NFL separator trait, and it’s on his tape more than once.',
        },
        {
          name: 'Clean press wins',
          icon: 'release',
          detail:
            'Gets off the line cleanly with real hand usage, good enough that inside-outside versatility is a live possibility.',
        },
      ],
      expands: ['After the catch', 'The skill is real too'],
    },
    {
      kind: 'compare',
      kicker: 'The puzzle',
      title: 'So why isn’t he open more?',
      lead: 'Marsh has real route skill and real strength and still doesn’t get open enough. Separation is an outcome, and outcomes have mechanisms behind them. Three candidate explanations, and they don’t carry equal weight.',
      layout: 'stack',
      sides: [
        {
          label: 'The routes aren’t that refined',
          status: 'Weak lead',
          body: 'Can’t fully dismiss it, and the corner-quality caveat is real. But there’s too much specific, repeatable detail on tape for "unrefined" to carry the whole answer.',
        },
        {
          label: 'Long speed',
          status: 'Primary read',
          body: 'He gets caught from behind. Line wins don’t become stacked corners. His separation lives toward the middle of the field, where speed is negotiable. Corners who lose early keep recovering to close the space.',
        },
        {
          label: 'The optimist’s case',
          status: 'Alive: no number exists',
          body: 'Quick feet, real burst, development still coming. No verified testing exists, so every speed claim about Marsh, mine included, is an eyeball estimate.',
        },
      ],
      verdict: {
        label: 'Why the diagnosis matters',
        body: 'Coaching fixes technique. It doesn’t add a gear. If the gap is technical, the breakout story is probably right. If it’s athletic, his NFL game has to be built on winning through corners instead of away from them.',
      },
      expands: ["So why isn't he open more?"],
    },
    {
      kind: 'diagram',
      diagram: 'body-catch',
      title: 'The catch point, diagnosed',
      lead: 'He lets the throw arrive into his frame instead of attacking it in the air. Against tight coverage that gives away his entire advantage: the ball comes down into a crowd where the defender gets a full extra beat to play through it.',
      caption:
        'The drop rate (9.4%, poor) comes from the same posture. Balls into the body get juggled; balls attacked at extension get caught. Nothing physical explains it, which means it’s behavior, and behavior can be retrained. Don’t pay for the fix until you see it.',
      expands: ['The catch point'],
    },
    { kind: 'fork' },
    {
      kind: 'read',
      title: 'What Indiana changes',
      line: 'Michigan State’s quarterback play got the quarterback benched, and Marsh still produced. Indiana just cleared out target volume next to Charlie Becker. 2026 should finally be a fair trial, with one caution: box scores don’t measure separation, so the tape will have to answer.',
      expands: ['What Indiana changes'],
    },
    {
      kind: 'roleMap',
      alignments: [{ pos: 'X', primary: true }],
      note: 'A big, physical boundary receiver whose exact NFL job depends on the two questions above. The branches run from complete boundary starter to contributor on manufactured touches.',
      immediate: [
        'After-catch offense on anything short or manufactured',
        'Physical play and blocking that flash best-in-class',
        'Clean releases against press',
      ],
      unlock: 'A verified speed answer plus a retrained catch point. Either one rescues a branch; both together prove the breakout story in full.',
      showCutout: true,
    },
    {
      kind: 'watch',
      title: 'Biggest question entering 2026',
      lead: 'What is his actual long speed? Everything else bends around that answer, and no answer exists. He’s the receiver in this class a single verified number would restructure the most.',
      items: [
        {
          topic: 'One clean vertical win',
          question: 'Does he ever just run past a corner, once, with no scheme help?',
          status: 'open',
        },
        {
          topic: 'Attacking the ball',
          question: 'Full extension instead of the body, and do the contested and drop numbers move with the technique?',
          status: 'open',
        },
        {
          topic: 'Polish vs better corners',
          question: 'Does the route craft hold against the best coverage on the schedule?',
          status: 'open',
        },
        {
          topic: 'After-catch decisions',
          question: 'Fewer dances. Does the seven-yard gain stop turning into four?',
          status: 'open',
        },
      ],
      expands: ['Biggest question entering 2026'],
    },
    {
      kind: 'movement',
      up: [
        'Visible catch-point retraining, which rescues the most likely version of his NFL role.',
        'Attacking at extension while stacking somebody deep even once a month. The ceiling case stops being a leap.',
      ],
      down: [
        'A verified slow number, which caps the projection at the possession branches.',
      ],
      unknown: [
        'A big statistical season with the contested profile still broken. I’ll take the production seriously and keep the same questions.',
        'A verified fast number, which reopens everything upward. Either way, the number moves this evaluation more than any single game could.',
      ],
      expands: ['What would change the evaluation'],
    },
  ],
}

export default marsh
