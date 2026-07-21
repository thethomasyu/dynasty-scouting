import type { Player } from '../data/types'
import { cutoutOf } from '../lib/images'

export default function PlayerHero({ player }: { player: Player }) {
  return (
    <section
      className="p-hero on-ink"
      style={{ '--school': player.accent } as React.CSSProperties}
      aria-label={`${player.name}, ${player.school}, wide receiver`}
    >
      <div className="p-hero__bg" aria-hidden="true">
        <div className="p-hero__field" />
        <div className="p-hero__halo" />
      </div>
      <div className="wrap p-hero__inner">
        <div className="p-hero__copy">
          <p className="kicker kicker--dot p-hero__kicker">
            2027 WR class · {player.school}
            {player.via ? ` · ${player.via}` : ''}
          </p>
          <h1 className="p-hero__name">{player.name}</h1>
          <div className="p-hero__meta">
            <span className="p-hero__badge">
              <span className="p-hero__badge-dot" aria-hidden="true" />
              {player.stage} · {player.stageDate}
            </span>
          </div>
          <p className="p-hero__thesis">{player.thesis}</p>
        </div>
        <div className="p-hero__stage" aria-hidden="true">
          <img
            className="p-hero__cut"
            src={cutoutOf(player.slug)}
            alt=""
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
