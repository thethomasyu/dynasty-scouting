import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ClassPage from './pages/ClassPage'
import PlayerPage from './pages/PlayerPage'
import NotFound from './pages/NotFound'

/** Scroll to top on route change (hash routing keeps no scroll state). */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollReset />
      <Routes>
        <Route path="/" element={<Navigate to="/2027/wr" replace />} />
        <Route path="/2027" element={<Navigate to="/2027/wr" replace />} />
        <Route path="/2027/wr" element={<ClassPage position="WR" />} />
        <Route path="/2027/wr/:slug" element={<PlayerPage position="WR" />} />
        <Route path="/2027/qb" element={<ClassPage position="QB" />} />
        <Route path="/2027/qb/:slug" element={<PlayerPage position="QB" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
