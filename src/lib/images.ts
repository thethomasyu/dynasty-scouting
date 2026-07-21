/**
 * Runtime imagery: small webp derivatives generated from the transparent
 * master PNGs in /Assets (see scripts/derive-images.mjs). Masters stay
 * untouched; the app only ships these optimized copies.
 */

const headshots = import.meta.glob('../assets/players/*-headshot.webp', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const cutouts = import.meta.glob('../assets/players/*-cutout.webp', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

function find(map: Record<string, string>, slug: string, kind: string): string | undefined {
  return map[`../assets/players/${slug}-${kind}.webp`]
}

export function headshotOf(slug: string): string | undefined {
  return find(headshots, slug, 'headshot')
}

export function cutoutOf(slug: string): string | undefined {
  return find(cutouts, slug, 'cutout')
}
