import { useEffect } from 'react'
import AppHeader from '../components/AppHeader'
import ClassHero from '../components/ClassHero'
import FeaturedSection from '../components/FeaturedSection'
import Explorer from '../components/Explorer'
import HeldSection from '../components/HeldSection'
import SiteFooter from '../components/SiteFooter'
import { useRevealRoot } from '../lib/hooks'

export default function ClassPage() {
  const root = useRevealRoot<HTMLDivElement>()
  useEffect(() => {
    document.title = 'Dynasty Scouting · 2027 WR Class'
  }, [])
  return (
    <div ref={root}>
      <AppHeader />
      <main id="main">
        <ClassHero />
        <FeaturedSection />
        <Explorer />
        <HeldSection />
      </main>
      <SiteFooter />
    </div>
  )
}
