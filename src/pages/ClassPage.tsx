import { useEffect } from 'react'
import AppHeader from '../components/AppHeader'
import ClassHero from '../components/ClassHero'
import FeaturedSection from '../components/FeaturedSection'
import Explorer from '../components/Explorer'
import HeldSection from '../components/HeldSection'
import SiteFooter from '../components/SiteFooter'
import type { Position } from '../data/types'
import { useRevealRoot } from '../lib/hooks'

export default function ClassPage({ position }: { position: Position }) {
  const root = useRevealRoot<HTMLDivElement>()
  useEffect(() => {
    document.title = `Dynasty Scouting · 2027 ${position} Class`
  }, [position])
  return (
    <div ref={root}>
      <AppHeader position={position} />
      <main id="main">
        <ClassHero position={position} />
        <FeaturedSection position={position} />
        <Explorer position={position} />
        <HeldSection position={position} />
      </main>
      <SiteFooter />
    </div>
  )
}
