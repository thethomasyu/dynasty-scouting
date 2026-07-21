/**
 * Trait Lab: a visual experiment, deliberately small.
 *
 * The full trait-snapshot content system is not built yet. Two files carry a
 * compact seven-category read so the format can prove itself before it
 * scales. Statuses use the project's qualitative tiers only; nothing here is
 * a number, and Unknown stays visible instead of becoming a middle grade.
 *
 * Entries exist only for players listed in this file. Removing a player's
 * entry removes the module from their page; nothing else depends on it.
 */

export type TraitStatus =
  | 'Major Strength'
  | 'Strength'
  | 'Adequate'
  | 'Mixed'
  | 'Concern'
  | 'Major Concern'
  | 'Unknown'
  | 'Limited evidence'

export interface TraitReading {
  category: string
  status: TraitStatus
  /** One line, in voice, grounded in the profile and research record. */
  note: string
}

export const traitLab: Record<string, TraitReading[]> = {
  'bryant-wesco-jr': [
    {
      category: 'Route Craft',
      status: 'Major Strength',
      note: 'The class’s route technician among the top names. The hard cuts are excellent; the 45-degree family is merely good.',
    },
    {
      category: 'Release & Press',
      status: 'Mixed',
      note: 'The release plan is the best thing on his tape. Holding up against physical press at 190 pounds is the cost.',
    },
    {
      category: 'Ball Skills',
      status: 'Mixed',
      note: 'Tracking is good. The 2025 drops look like a one-bad-year story, and only a healthy season can confirm it.',
    },
    {
      category: 'Functional Athleticism',
      status: 'Unknown',
      note: 'Explosiveness and stop-start are real. The long speed is the biggest open question in the class.',
    },
    {
      category: 'YAC Ability',
      status: 'Limited evidence',
      note: 'After-catch play is barely on record either way. Nothing to grade yet.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      status: 'Strength',
      note: 'Keeps working after the design breaks down and adjusts routes into empty grass. Gets open on purpose.',
    },
    {
      category: 'Physicality / Blocking',
      status: 'Major Concern',
      note: '190 is doing damage everywhere: press, contested finishing, blocking. The motor is not the problem.',
    },
  ],
  'nick-marsh': [
    {
      category: 'Route Craft',
      status: 'Strength',
      note: 'Tempoed stems, hip sink, honest selling, and a late gear at the breakpoint. Deserves a re-check against better corners.',
    },
    {
      category: 'Release & Press',
      status: 'Strength',
      note: 'Clean off the line with real hand usage. Wins at the line don’t reliably become wins downfield.',
    },
    {
      category: 'Ball Skills',
      status: 'Major Concern',
      note: 'A body catcher. The contested and drop numbers both trace to the same posture, and the posture is behavior.',
    },
    {
      category: 'Functional Athleticism',
      status: 'Concern',
      note: 'The long speed keeps reading capped on film, and no verified number exists to argue back.',
    },
    {
      category: 'YAC Ability',
      status: 'Major Strength',
      note: 'Violent and instant, straight from his running back past. The most settled part of his game.',
    },
    {
      category: 'Football IQ / Spatial Awareness',
      status: 'Unknown',
      note: 'Nothing on record either way. What IQ evidence exists lives inside the route tempo.',
    },
    {
      category: 'Physicality / Blocking',
      status: 'Strength',
      note: 'Physically mature, with blocking that flashes best-in-class. The gap between best rep and average rep is effort.',
    },
  ],
}
