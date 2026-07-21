import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { orderedPlayers } from '../data/players'
import { headshotOf } from '../lib/images'

function matches(query: string, haystacks: string[]): boolean {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const hay = haystacks.join(' ').toLowerCase()
  return q.split(/\s+/).every((part) => hay.includes(part))
}

/** The full class, searchable, alphabetical. Never a board. */
export default function Explorer() {
  const [query, setQuery] = useState('')
  const shown = useMemo(
    () => orderedPlayers.filter((p) => matches(query, [p.name, p.school, p.teaser, p.via ?? ''])),
    [query],
  )

  return (
    <section className="explorer" aria-labelledby="explorer-title">
      <div className="wrap">
        <div className="explorer__head reveal">
          <div>
            <h2 id="explorer-title" className="explorer__title">
              Every file
            </h2>
            <p className="explorer__note">
              All {orderedPlayers.length} profiles. The order is the alphabet, nothing else.
            </p>
          </div>
          <div className="explorer__search">
            <label className="kicker explorer__search-label" htmlFor="player-search">
              Search
            </label>
            <input
              id="player-search"
              type="search"
              placeholder="Name or school"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="explorer__count" aria-live="polite">
              {shown.length} of {orderedPlayers.length}
            </span>
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="explorer__empty">
            No matches for “{query.trim()}”. Check the spelling, or clear it and browse.
          </p>
        ) : (
          <ul className="explorer__grid" role="list">
            {shown.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/2027/wr/${p.slug}`}
                  className="player-card"
                  style={{ '--school': p.accent } as React.CSSProperties}
                >
                  <div className="player-card__media">
                    <img src={headshotOf(p.slug)} alt="" loading="lazy" />
                  </div>
                  <div className="player-card__body">
                    <p className="player-card__status kicker">Early evaluation</p>
                    <h3 className="player-card__name">{p.name}</h3>
                    <p className="player-card__school">
                      {p.school}
                      {p.via ? <span className="player-card__via"> · {p.via}</span> : null}
                    </p>
                    <p className="player-card__teaser">{p.teaser}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
