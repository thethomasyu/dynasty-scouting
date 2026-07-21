import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import SiteFooter from '../components/SiteFooter'
import PlayerHero from '../components/PlayerHero'
import SectionNav from '../components/SectionNav'
import ProfileArticle from '../components/ProfileArticle'
import PrevNext from '../components/PrevNext'
import NotFound from './NotFound'
import { getPlayer } from '../data/players'
import { loadProfile, type ParsedProfile } from '../lib/parseProfile'
import { useReadingProgress, useRevealRoot } from '../lib/hooks'

export default function PlayerPage() {
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

  const sectionIds = useMemo(() => profile?.sections.map((s) => s.id) ?? [], [profile])

  if (!player) return <NotFound />

  const showNav = profile !== null && profile.sections.length >= 3 && profile.words > 650

  return (
    <div ref={root} key={player.slug}>
      <div className="progress-hairline" aria-hidden="true">
        <div className="progress-hairline__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <AppHeader backTo={{ to: '/2027/wr', label: 'All prospects' }} />
      <main id="main">
        <PlayerHero player={player} />
        {profile && (
          <div className="player-body">
            {showNav && (
              <div className="rail-slot">
                <SectionNav sections={profile.sections} ids={sectionIds} />
              </div>
            )}
            <ProfileArticle player={player} profile={profile} />
          </div>
        )}
        <PrevNext slug={player.slug} />
      </main>
      <SiteFooter />
    </div>
  )
}
