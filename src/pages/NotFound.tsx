import { Link } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import SiteFooter from '../components/SiteFooter'

export default function NotFound() {
  return (
    <div>
      <AppHeader />
      <main id="main" className="notfound wrap">
        <p className="kicker kicker--dot">Nothing here</p>
        <h1 className="notfound__title">That page doesn’t exist.</h1>
        <p className="notfound__line">
          If you were looking for a prospect, the class page lists all of them.
        </p>
        <Link className="notfound__link" to="/2027/wr">
          Back to the 2027 WR class
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}
