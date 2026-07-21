import type { IconName } from '../../data/presentation/types'

/**
 * Inline line-icon set for the scouting modules. Same drawing rules as the
 * hero bio icons: one stroke style (1.7, round), currentColor only, always
 * subordinate to the information they sit beside. No emoji anywhere.
 */

const PATHS: Record<IconName, string[]> = {
  // A route stem breaking to an arrowed cut.
  route: ['M6 21V10c0-2.2 1.8-4 4-4h7', 'M13.5 2.5 17 6l-3.5 3.5'],
  // Football: pointed ellipse with laces.
  ball: [
    'M12 4.5c4.6 0 7.5 3.4 7.5 7.5s-2.9 7.5-7.5 7.5S4.5 16.1 4.5 12 7.4 4.5 12 4.5Z',
    'M9.2 12h5.6M12 9.2v5.6',
  ],
  // Two exits from one spot: a release choice.
  release: ['M12 20V9', 'M12 9 6.5 3.5M12 9l5.5-5.5', 'M6.5 8V3.5H11', 'M17.5 8V3.5H13'],
  // Stopwatch.
  speed: ['M12 8v5l3 2', 'M12 21a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z', 'M10 2.5h4'],
  // Forward arrow punching through a tackle bracket.
  yac: ['M3 12h13', 'M12 7.5 16.5 12 12 16.5', 'M19.5 6v12'],
  // Field vision: an eye with a scan mark.
  iq: ['M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z', 'M12 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z'],
  // Shoulder pad / shield.
  physical: ['M12 21c-5-2-7.5-5-7.5-9.5V6L12 3l7.5 3v5.5C19.5 16 17 19 12 21Z'],
  watch: ['M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z', 'M12 12h.01'],
  // Catch point crosshair.
  target: ['M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'M12 2.5V7M12 17v4.5M2.5 12H7M17 12h4.5'],
  scale: ['M6 3h12', 'M12 3v18', 'M8 21h8', 'M6 3 3 10h6L6 3Z', 'M18 3l-3 7h6l-3-7Z'],
  calendar: ['M8 3v3.5M16 3v3.5M3.5 10h17', 'M5.5 4.8h13a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2Z'],
  flag: ['M6 21V4', 'M6 4h11l-2.5 4L17 12H6'],
  // Sideline-to-sideline field slice.
  field: ['M3 5h18v14H3z', 'M3 12h18', 'M8 5v2.5M8 16.5V19M16 5v2.5M16 16.5V19'],
  bolt: ['M13 2 5 13.5h5L10.5 22l8-11.5h-5L13 2Z'],
  hands: ['M12 21V11', 'M12 11 7 5.5M12 11l5-5.5', 'M4.5 9.5 7 5.5l3.5 1', 'M19.5 9.5 17 5.5l-3.5 1'],
  shield: ['M12 21c-5-2-7.5-5-7.5-9.5V6L12 3l7.5 3v5.5C19.5 16 17 19 12 21Z', 'M9 12l2 2 4-4.5'],
  compass: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M15.5 8.5 13.5 13.5 8.5 15.5l2-5 5-2Z'],
}

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className ?? 'sc-ic'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  )
}

/** Small directional arrows for the evaluation-movement module. */
export function ArrowIcon({ dir }: { dir: 'up' | 'down' | 'open' }) {
  return (
    <svg className="sc-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'up' && <path d="M12 19V5M6 11l6-6 6 6" />}
      {dir === 'down' && <path d="M12 5v14M6 13l6 6 6-6" />}
      {dir === 'open' && <path d="M9.2 9a2.9 2.9 0 1 1 4 2.7c-.9.4-1.2 1-1.2 1.9v.4M12 17.5h.01" />}
    </svg>
  )
}
