import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import SiteFooter from '../components/SiteFooter'
import PlayerHero from '../components/PlayerHero'
import SectionNav from '../components/SectionNav'
import PrevNext from '../components/PrevNext'
import VisualProfile, { computeAnchors } from '../components/scouting/VisualProfile'
import NotFound from './NotFound'
import { getPlayer } from '../data/players'
import type { Position } from '../data/types'
import { classPath, positionLabel } from '../lib/routes'
import { presentations } from '../data/presentation'
import { loadProfile, type ParsedProfile } from '../lib/parseProfile'
import { useReadingProgress, useRevealRoot } from '../lib/hooks'

export default function PlayerPage({ position }: { position: Position }) {
  const { slug = '' } = useParams()
  const player = getPlayer(slug)
  const [profile, setProfile] = useState<ParsedProfile | null>(null)
  const progress = useReadingProgress()
  const root = useRevealRoot<HTMLDivElement>()

  useEffect(() => {
    let alive = true
    setProfile(null)
    if (player) {
      loadProfile(player.slug).then((p) => {
        if (alive) setProfile(p)
      })
    }
    return () => {
      alive = false
    }
  }, [player?.slug])

  useEffect(() => {
    if (player) document.title = `${player.name} · Dynasty Scouting`
  }, [player?.slug])

  const pres = player ? presentations[player.slug] : undefined
  const anchors = useMemo(() => (pres ? computeAnchors(pres, player) : []), [pres, player])

  // A slug only resolves under its own position's route.
  if (!player || player.position !== position) return <NotFound />

  const showNav = profile !== null && anchors.length >= 4

  return (
    <div ref={root} key={player.slug}>
      <div className="progress-hairline" aria-hidden="true">
        <div className="progress-hairline__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <AppHeader position={position} backTo={{ to: classPath(position), label: `All ${positionLabel(position)}s` }} />
      <main id="main">
        <PlayerHero player={player} />
        {profile && pres && (
          <div className="player-body">
            {showNav && (
              <div className="rail-slot">
                <SectionNav sections={anchors} ids={anchors.map((a) => a.id)} />
              </div>
            )}
            <VisualProfile player={player} profile={profile} pres={pres} />
          </div>
        )}
        <PrevNext slug={player.slug} />
      </main>
      <SiteFooter />
    </div>
  )
}
