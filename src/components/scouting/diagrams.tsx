import type { DiagramType } from '../../data/presentation/types'

/**
 * Football concept diagrams. Custom SVG, one visual vocabulary:
 * offense is an accent-filled circle, defenders are open ink circles,
 * routes are accent strokes (wide dashes = full speed, tight dashes =
 * throttled tempo, solid = the break), field furniture stays faint.
 * Every diagram carries a title and description for screen readers, and
 * the surrounding module always restates the point in text, so nothing
 * meaningful lives only in the picture.
 *
 * One concept, one owner. These are teaching graphics for a specific
 * player's evaluation, not clip art; no diagram repeats across players.
 */

/* ---- shared primitives ------------------------------------------- */

function WR({ x, y, label = 'WR' }: { x: number; y: number; label?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={5.2} className="dg-wr" />
      <text x={x + 8.5} y={y + 3} className="dg-tag">
        {label}
      </text>
    </g>
  )
}

function DB({ x, y, label = 'CB', tagDx = 8.5 }: { x: number; y: number; label?: string; tagDx?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={5.2} className="dg-db" />
      <text x={x + tagDx} y={y + 3} className="dg-tag dg-tag--db">
        {label}
      </text>
    </g>
  )
}

function Catch({ x, y }: { x: number; y: number }) {
  return <path d={`M${x - 4} ${y - 4} l8 8 M${x + 4} ${y - 4} l-8 8`} className="dg-catch" />
}

function Arrow({ id }: { id: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="7.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M0.8 1.2 8.6 5 0.8 8.8" fill="none" stroke="context-stroke" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </marker>
  )
}

function Frame({ children, viewBox, title, desc, className }: { children: React.ReactNode; viewBox: string; title: string; desc: string; className?: string }) {
  return (
    <svg className={`dg ${className ?? ''}`} viewBox={viewBox} role="img" aria-label={`${title}. ${desc}`}>
      <title>{title}</title>
      <desc>{desc}</desc>
      {children}
    </svg>
  )
}

/** Faint upfield panel: LOS at the bottom, yard ticks going away. */
function UpfieldPanel({ w, los }: { w: number; los: number }) {
  const ticks = []
  for (let y = los - 40; y > 12; y -= 40) ticks.push(y)
  return (
    <g>
      {ticks.map((y) => (
        <line key={y} x1={6} y1={y} x2={w - 6} y2={y} className="dg-yard" />
      ))}
      <line x1={4} y1={los} x2={w - 4} y2={los} className="dg-los" />
      <text x={6} y={los + 10.5} className="dg-note">
        LOS
      </text>
    </g>
  )
}

/* ---- 1. Route pacing (Jeremiah Smith) ----------------------------- */

function RoutePacing() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="The tendency today: a one-speed route"
          desc="The receiver runs the whole stem at one blazing speed and breaks on pure violence. The corner never has to recalibrate, so he stays in phase until the break."
        >
          <defs>
            <Arrow id="rp-a" />
          </defs>
          <UpfieldPanel w={170} los={205} />
          {/* one-speed stem: uniform wide dashes */}
          <path d="M60 198 L60 74" className="dg-route dg-route--speed" />
          <path d="M60 74 L112 46" className="dg-route" markerEnd="url(#rp-a)" />
          <WR x={60} y={205} />
          {/* corner runs in phase */}
          <path d="M76 180 L76 84" className="dg-chase" />
          <DB x={76} y={172} />
          <text x={88} y={130} className="dg-note">
            ONE SPEED,
          </text>
          <text x={88} y={140} className="dg-note">
            EASY TO READ
          </text>
          <text x={12} y={26} className="dg-note dg-note--strong">
            BREAK WINS ON
          </text>
          <text x={12} y={36} className="dg-note dg-note--strong">
            VIOLENCE ALONE
          </text>
        </Frame>
        <figcaption className="dg-cap">Today: one gear, explosive break</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="The concept: pacing"
          desc="Full speed sells the vertical route, then the receiver throttles down before the break. The corner keeps sprinting to protect deep, and the break happens into open space."
        >
          <defs>
            <Arrow id="rp-b" />
          </defs>
          <UpfieldPanel w={170} los={205} />
          {/* sell vertical: wide dashes, then throttle: tight dashes */}
          <path d="M60 198 L60 122" className="dg-route dg-route--speed" />
          <path d="M60 122 L60 84" className="dg-route dg-route--throttle" />
          <path d="M60 84 L114 62" className="dg-route" markerEnd="url(#rp-b)" />
          <WR x={60} y={205} />
          {/* corner keeps bailing deep */}
          <path d="M76 180 L76 46" className="dg-chase" markerEnd="url(#rp-b)" />
          <DB x={76} y={172} />
          <text x={72} y={152} className="dg-note">
            SELL VERTICAL
          </text>
          <text x={72} y={104} className="dg-note dg-note--strong">
            THROTTLE
          </text>
          <text x={88} y={40} className="dg-note">
            CORNER KEEPS
          </text>
          <text x={88} y={50} className="dg-note">
            RUNNING
          </text>
        </Frame>
        <figcaption className="dg-cap">The concept: change speeds inside the route</figcaption>
      </figure>
    </div>
  )
}

/* ---- 2. Late hands (Jeremiah Smith) ------------------------------- */

function LateHands() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 168"
        title="Late hands at the catch point"
        desc="The ball travels while the receiver tracks it with his hands still down, so the trailing corner gets no visual cue for when to play the ball. The hands attack at the last beat, right at the catch point."
        className="dg--wide"
      >
        <defs>
          <Arrow id="lh-a" />
        </defs>
        {/* ball flight */}
        <path d="M18 38 Q170 6 296 96" className="dg-ballpath" />
        <circle cx={296} cy={96} r={3.2} className="dg-ball" />
        <text x={18} y={26} className="dg-note">
          BALL IN THE AIR
        </text>
        {/* receiver track along the bottom */}
        <path d="M30 138 C120 132 220 126 288 112" className="dg-route dg-route--speed" markerEnd="url(#lh-a)" />
        <WR x={30} y={142} />
        {/* trailing corner */}
        <path d="M52 156 C140 150 216 146 268 134" className="dg-chase" />
        <DB x={52} y={158} />
        {/* hands-down ticks */}
        <path d="M120 130 l0 9 M126 129.6 l0 9" className="dg-hands" />
        <path d="M196 125 l0 9 M202 124.6 l0 9" className="dg-hands" />
        <text x={112} y={155.5} className="dg-note">
          HANDS STAY DOWN · NO TIMING CUE
        </text>
        {/* late attack */}
        <path d="M276 112 L290 100 M282 116 L295 105" className="dg-hands dg-hands--up" />
        <line x1={268} y1={22} x2={268} y2={148} className="dg-beat" />
        <text x={196} y={16} className="dg-note dg-note--strong">
          THE LAST BEAT
        </text>
        <text x={246} y={34} className="dg-note">
          HANDS ATTACK LATE,
        </text>
        <text x={246} y={44} className="dg-note">
          CORNER GUESSING
        </text>
      </Frame>
      <figcaption className="dg-cap">Early hands hand the corner a timer. Late hands leave him guessing.</figcaption>
    </figure>
  )
}

/* ---- 3. Release sequencing (Bryant Wesco Jr.) --------------------- */

function ReleaseCell({ id, jab, go, note, mirror }: { id: string; jab: 'in' | 'out'; go: 'in' | 'out' | 'slant' | 'fade'; note: string; mirror?: boolean }) {
  // Inside = toward x=120 (field), outside = toward x=10 (sideline).
  const jabX = jab === 'in' ? 92 : 40
  let path = ''
  if (go === 'out') path = 'M66 84 C60 66 42 52 24 40'
  if (go === 'in') path = 'M66 84 C72 66 92 52 110 40'
  if (go === 'slant') path = 'M66 84 C70 72 94 58 116 48'
  if (go === 'fade') path = 'M66 84 C60 64 46 46 40 26'
  return (
    <figure className="dg-fig dg-fig--cell">
      <Frame viewBox="0 0 132 108" title={note} desc={note} className="dg--cell">
        <defs>
          <Arrow id={id} />
        </defs>
        <line x1={4} y1={92} x2={128} y2={92} className="dg-los" />
        <DB x={66} y={30} label="" />
        {/* jab step */}
        <path d={`M66 84 L${jabX} 74`} className="dg-jab" />
        <text x={jab === 'in' ? jabX + 3 : jabX - 3} y={70} className="dg-note" textAnchor={jab === 'in' ? 'start' : 'end'}>
          JAB
        </text>
        {/* actual release */}
        <path d={path} className="dg-route" markerEnd={`url(#${id})`} />
        <WR x={66} y={88} label="" />
        {mirror && <text x={126} y={12} className="dg-note dg-note--strong" textAnchor="end">LATER…</text>}
      </Frame>
      <figcaption className="dg-cap dg-cap--cell">{note}</figcaption>
    </figure>
  )
}

function ReleaseSequencing() {
  return (
    <div className="dg-grid4">
      <ReleaseCell id="rs-1" jab="in" go="out" note="Inside jab, outside release" />
      <ReleaseCell id="rs-2" jab="out" go="in" note="The mirror image, later in the game" mirror />
      <ReleaseCell id="rs-3" jab="in" go="slant" note="Diamond picture into a slant" />
      <ReleaseCell id="rs-4" jab="in" go="fade" note="Same picture, next snap: fade" mirror />
    </div>
  )
}

/* ---- 4. Tracking split (Cam Coleman) ------------------------------ */

function TrackingSplit() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 190"
        title="Tracking is two skills"
        desc="A 45-yard shot has two phases. Skill one is locating the ball the moment the head comes around and running the right path to it; that is where Coleman's shaky reps live. Skill two is adjusting and finishing once the ball is close, and that part of his game is proven."
        className="dg--wide"
      >
        <defs>
          <Arrow id="ts-a" />
        </defs>
        {/* deep shot */}
        <path d="M22 150 Q150 8 306 118" className="dg-ballpath" />
        <text x={14} y={170} className="dg-note">
          THE SHOT GOES UP
        </text>
        {/* skill one zone */}
        <rect x={78} y={26} width={128} height={118} className="dg-zone dg-zone--open" rx={6} />
        <text x={88} y={44} className="dg-note dg-note--strong">
          SKILL ONE
        </text>
        <text x={88} y={55} className="dg-note">
          LOCATE + RUN THE
        </text>
        <text x={88} y={65} className="dg-note">
          RIGHT PATH
        </text>
        <text x={88} y={80} className="dg-note dg-note--accent">
          THE OPEN ARGUMENT
        </text>
        {/* skill two zone */}
        <rect x={216} y={66} width={116} height={92} className="dg-zone" rx={6} />
        <text x={226} y={84} className="dg-note dg-note--strong">
          SKILL TWO
        </text>
        <text x={226} y={95} className="dg-note">
          ADJUST + FINISH
        </text>
        <text x={226} y={110} className="dg-note">
          PROVEN, IN TRAFFIC
        </text>
        {/* receiver path */}
        <path d="M60 176 C140 172 220 160 288 132" className="dg-route dg-route--speed" markerEnd="url(#ts-a)" />
        <WR x={60} y={178} />
        <Catch x={300} y={122} />
      </Frame>
      <figcaption className="dg-cap">Adjust-and-finish is proven. The first look from 45 yards out is the argument.</figcaption>
    </figure>
  )
}

/* ---- 5. The whip route (Amari Thomas) ----------------------------- */

function WhipRoute() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 62 340 118"
        title="The whip route"
        desc="From the slot, the route sells hard inside and drags the defender with it. Then a violent plant reverses the route flat back toward the sideline, and the receiver reaccelerates to full speed instantly while the defender's momentum is still carrying inside."
        className="dg--wide"
      >
        <defs>
          <Arrow id="wh-a" />
        </defs>
        <line x1={8} y1={152} x2={332} y2={152} className="dg-los" />
        <text x={10} y={164} className="dg-note">
          LOS · SLOT ALIGNMENT
        </text>
        {/* sell inside */}
        <path d="M96 144 C126 128 158 114 190 106" className="dg-route dg-route--speed" />
        <text x={128} y={140} className="dg-note">
          SELL INSIDE HARD
        </text>
        {/* plant */}
        <circle cx={193} cy={105} r={6.5} className="dg-plant" />
        <text x={200} y={92} className="dg-note dg-note--strong">
          PLANT
        </text>
        <text x={200} y={102} className="dg-note">
          ZERO IN AN INSTANT
        </text>
        {/* reverse flat */}
        <path d="M190 110 C150 122 96 126 40 124" className="dg-route" markerEnd="url(#wh-a)" />
        <text x={52} y={112} className="dg-note dg-note--accent">
          REVERSE FLAT · BACK TO FULL SPEED
        </text>
        {/* defender momentum carries inside */}
        <path d="M120 158 C160 142 200 132 238 126" className="dg-chase" markerEnd="url(#wh-a)" />
        <DB x={118} y={160} />
        <text x={244} y={122} className="dg-note">
          MOMENTUM STILL
        </text>
        <text x={244} y={132} className="dg-note">
          GOING INSIDE
        </text>
        <WR x={96} y={148} />
      </Frame>
      <figcaption className="dg-cap">A stop-and-reverse route that lives on deceleration. For Thomas it's a stage.</figcaption>
    </figure>
  )
}

/* ---- 6. Separation by geometry (Kenny Johnson) -------------------- */

function Geometry() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 200"
        title="Separation by geometry"
        desc="In a crowded zone, Johnson steers his route so another body ends up parked in his defender's recovery path. The defender has to bend around the traffic, so his path to the catch point gets longer while Johnson's gets shorter."
        className="dg--wide"
      >
        <defs>
          <Arrow id="ge-a" />
        </defs>
        {/* zone bodies */}
        <DB x={172} y={92} label="" />
        <text x={146} y={76} className="dg-note dg-note--strong">
          TRAFFIC
        </text>
        <DB x={252} y={44} label="" />
        {/* Johnson's route bends the pursuit into the traffic */}
        <path d="M36 168 C104 150 148 122 186 108 C222 94 258 92 292 96" className="dg-route dg-route--speed" markerEnd="url(#ge-a)" />
        <WR x={36} y={172} />
        <Catch x={300} y={97} />
        <text x={220} y={116} className="dg-note dg-note--accent">
          HIS PATH: SHORTER
        </text>
        {/* corner forced around the parked body */}
        <path d="M58 186 C120 176 150 160 166 134 C158 112 168 98 190 84 C222 66 254 62 284 74" className="dg-chase" markerEnd="url(#ge-a)" />
        <DB x={58} y={188} />
        <text x={74} y={128} className="dg-note">
          RECOVERY PATH:
        </text>
        <text x={74} y={138} className="dg-note">
          LONGER, AROUND
        </text>
        <text x={74} y={148} className="dg-note">
          THE TRAFFIC
        </text>
      </Frame>
      <figcaption className="dg-cap">Other people's bodies, weaponized. The corner's route to the ball grows; his shrinks.</figcaption>
    </figure>
  )
}

/* ---- 7. The stop-route sell (Omarion Miller) ---------------------- */

function StopRouteSell() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="Angled routes: the fakes work"
          desc="On slants and posts, Miller's head fakes are real. The defender bites the wrong way and the angled break wins."
        >
          <defs>
            <Arrow id="sr-a" />
          </defs>
          <UpfieldPanel w={170} los={205} />
          <path d="M64 198 L64 130" className="dg-route dg-route--speed" />
          <path d="M64 130 L122 84" className="dg-route" markerEnd="url(#sr-a)" />
          <path d="M58 124 L44 112" className="dg-jab" />
          <text x={16} y={100} className="dg-note">
            HEAD FAKE
          </text>
          {/* defender bites outside */}
          <path d="M80 160 C74 146 62 136 48 128" className="dg-chase" markerEnd="url(#sr-a)" />
          <DB x={82} y={164} />
          <text x={96} y={110} className="dg-note dg-note--accent">
            DEFENDER BITES,
          </text>
          <text x={96} y={120} className="dg-note dg-note--accent">
            SLANT WINS
          </text>
          <WR x={64} y={205} />
        </Frame>
        <figcaption className="dg-cap">Slants and posts: real deception</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="Stop routes: no vertical sell"
          desc="Before hitches, nothing sells vertical, so the corner sits at the break depth, drives on the throw, and one sat-on hitch already became an interception."
        >
          <defs>
            <Arrow id="sr-b" />
          </defs>
          <UpfieldPanel w={170} los={205} />
          <path d="M64 198 L64 128" className="dg-route dg-route--throttle" />
          <path d="M64 128 L64 148 L58 152" className="dg-route" markerEnd="url(#sr-b)" />
          <text x={72} y={172} className="dg-note">
            NO VERTICAL SELL
          </text>
          {/* corner sitting on the route */}
          <DB x={80} y={118} />
          <path d="M80 124 L68 140" className="dg-chase" markerEnd="url(#sr-b)" />
          <text x={92} y={100} className="dg-note dg-note--strong">
            SITTING ON IT,
          </text>
          <text x={92} y={110} className="dg-note dg-note--strong">
            DRIVING FIRST
          </text>
          <WR x={64} y={205} />
        </Frame>
        <figcaption className="dg-cap">Hitches: the corner already knows</figcaption>
      </figure>
    </div>
  )
}

/* ---- 8. The body-catch tax (Nick Marsh) --------------------------- */

function BodyCatch() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="Into the frame"
          desc="The throw is allowed to arrive into the receiver's chest, down in the crowd, and the trailing defender gets a full extra beat to play through the catch."
        >
          <defs>
            <Arrow id="bc-a" />
          </defs>
          <path d="M14 40 Q86 76 96 148" className="dg-ballpath" />
          <circle cx={96} cy={148} r={3.2} className="dg-ball" />
          <WR x={90} y={168} />
          <DB x={112} y={178} />
          <path d="M110 170 L100 154" className="dg-chase" markerEnd="url(#bc-a)" />
          <text x={26} y={196} className="dg-note dg-note--strong">
            BALL COMES DOWN
          </text>
          <text x={26} y={206} className="dg-note dg-note--strong">
            INTO THE CROWD
          </text>
          <text x={112} y={140} className="dg-note">
            THE FREE
          </text>
          <text x={112} y={150} className="dg-note">
            EXTRA BEAT
          </text>
        </Frame>
        <figcaption className="dg-cap">The habit: let it arrive</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="At full extension"
          desc="The receiver attacks the ball in the air with his hands, taking it above the crowd at full reach, before the defender can play through it."
        >
          <defs>
            <Arrow id="bc-b" />
          </defs>
          <path d="M14 40 Q78 60 104 104" className="dg-ballpath" />
          <circle cx={104} cy={104} r={3.2} className="dg-ball" />
          <path d="M96 152 L102 112 M104 154 L110 116" className="dg-hands dg-hands--up" />
          <WR x={94} y={166} />
          <DB x={116} y={180} />
          <Catch x={104} y={104} />
          <text x={26} y={196} className="dg-note dg-note--accent">
            TAKEN ABOVE
          </text>
          <text x={26} y={206} className="dg-note dg-note--accent">
            THE CROWD
          </text>
          <text x={118} y={92} className="dg-note">
            DEFENDER NEVER
          </text>
          <text x={118} y={102} className="dg-note">
            GETS A PLAY
          </text>
        </Frame>
        <figcaption className="dg-cap">The fix: attack at extension</figcaption>
      </figure>
    </div>
  )
}

/* ---- 9. The feel for space (Ryan Wingo) --------------------------- */

function ZoneFeel() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 200"
        title="The feel for space, against zone"
        desc="Four zone defenders leave soft windows of open grass between them. Wingo's current tendency is to run through the route at one speed, past the open window and into coverage. The developmental version throttles down and settles into the window, giving his quarterback a friendly target."
        className="dg--wide"
      >
        <defs>
          <Arrow id="zf-a" />
        </defs>
        {/* zone defenders */}
        <DB x={96} y={54} label="" />
        <DB x={230} y={44} label="" />
        <DB x={70} y={128} label="" />
        <DB x={250} y={126} label="" />
        <text x={288} y={40} className="dg-note">
          ZONE
        </text>
        {/* soft window */}
        <ellipse cx={162} cy={100} rx={44} ry={26} className="dg-zone dg-zone--soft" />
        <text x={136} y={97} className="dg-note">
          OPEN GRASS
        </text>
        <text x={136} y={107} className="dg-note">
          (THE WINDOW)
        </text>
        {/* one-speed path through and past */}
        <path d="M20 170 C70 150 120 122 158 104 C196 86 224 70 248 58" className="dg-route dg-route--speed" markerEnd="url(#zf-a)" />
        <text x={216} y={96} className="dg-note dg-note--strong">
          ONE SPEED: PAST THE
        </text>
        <text x={216} y={106} className="dg-note dg-note--strong">
          GRASS, INTO BODIES
        </text>
        {/* throttle and settle */}
        <path d="M20 186 C74 172 116 142 148 118" className="dg-route dg-route--throttle" markerEnd="url(#zf-a)" />
        <circle cx={156} cy={112} r={4.4} className="dg-settle" />
        <text x={52} y={196} className="dg-note dg-note--accent">
          THROTTLE, SETTLE, GIVE THE QB A WINDOW
        </text>
        <WR x={20} y={176} />
      </Frame>
      <figcaption className="dg-cap">Coverage isn't confused by one great speed. The soft spots pay the rent.</figcaption>
    </figure>
  )
}

/* ---- 10. Stacking a corner (Charlie Becker) ----------------------- */

function Stacking() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 210"
        title="Stacking a corner"
        desc="Three beats of a vertical route. At the snap the corner has a cushion. The long strides erase it until receiver and corner are even. Then the receiver gets on top and holds the corner on his back hip, so the corner cannot undercut the throw and the deep window stays clean."
        className="dg--wide"
      >
        <defs>
          <Arrow id="st-a" />
        </defs>
        <line x1={8} y1={188} x2={332} y2={188} className="dg-los" />
        {/* beat 1: cushion */}
        <WR x={40} y={178} label="" />
        <DB x={40} y={128} label="" />
        <path d="M40 138 L40 168" className="dg-gap" />
        <text x={18} y={202} className="dg-note">
          1 · CUSHION
        </text>
        {/* beat 2: even */}
        <WR x={150} y={118} label="" />
        <DB x={166} y={118} label="" />
        <text x={128} y={140} className="dg-note">
          2 · EVEN. THE
        </text>
        <text x={128} y={150} className="dg-note">
          RACE IS OVER
        </text>
        {/* beat 3: stacked */}
        <path d="M258 96 L258 34" className="dg-route dg-route--speed" markerEnd="url(#st-a)" />
        <WR x={258} y={96} label="" />
        <DB x={254} y={132} label="" />
        <text x={266} y={106} className="dg-note dg-note--accent">
          3 · ON TOP,
        </text>
        <text x={266} y={116} className="dg-note dg-note--accent">
          PINNED TO HIS
        </text>
        <text x={266} y={126} className="dg-note dg-note--accent">
          BACK HIP
        </text>
        <ellipse cx={258} cy={52} rx={30} ry={17} className="dg-zone dg-zone--soft" />
        <text x={234} y={20} className="dg-note">
          CLEAN THROW WINDOW
        </text>
        {/* connective arcs */}
        <path d="M58 168 C92 152 116 136 138 124" className="dg-route dg-route--speed" />
        <path d="M170 110 C198 102 224 100 246 100" className="dg-route dg-route--speed" />
      </Frame>
      <figcaption className="dg-cap">Get even, get past, hold him behind you. Once Becker is even, the play is usually over.</figcaption>
    </figure>
  )
}

/* ---- 11. Two kinds of open (KJ Duff) ------------------------------ */

function TwoOpens() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="Open by separation"
          desc="The usual kind of open: the receiver breaks away and there is real space between him and the corner when the ball arrives."
        >
          <defs>
            <Arrow id="to-a" />
          </defs>
          <UpfieldPanel w={170} los={205} />
          <path d="M56 198 C56 160 68 130 96 110" className="dg-route dg-route--speed" markerEnd="url(#to-a)" />
          <WR x={56} y={205} />
          <DB x={52} y={78} />
          <path d="M70 100 L60 88" className="dg-gap" />
          <text x={78} y={86} className="dg-note">
            REAL SPACE
          </text>
          <Catch x={112} y={100} />
        </Frame>
        <figcaption className="dg-cap">Open in the geometric sense</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 225"
          title="Open by position"
          desc="Duff's kind of open: he arrives at the spot first, establishes body position, and walls the defender out, so the ball can be placed where only he can reach it even though nobody would call him separated."
        >
          <defs>
            <Arrow id="to-b" />
          </defs>
          <UpfieldPanel w={170} los={205} />
          <path d="M84 198 L84 132" className="dg-route dg-route--speed" />
          <WR x={84} y={124} />
          <DB x={84} y={148} tagDx={9.5} />
          <path d="M62 134 a26 26 0 0 0 44 0" className="dg-wall" />
          <text x={20} y={168} className="dg-note">
            WALLED OUT,
          </text>
          <text x={20} y={178} className="dg-note">
            PLAYING THROUGH
          </text>
          <text x={20} y={188} className="dg-note">
            HIS BACK
          </text>
          <Catch x={84} y={92} />
          <text x={16} y={58} className="dg-note dg-note--accent">
            BALL PLACED WHERE
          </text>
          <text x={16} y={68} className="dg-note dg-note--accent">
            ONLY HE CAN REACH
          </text>
        </Frame>
        <figcaption className="dg-cap">Open in the positioning sense: Duff's living</figcaption>
      </figure>
    </div>
  )
}

/* ---- registry ----------------------------------------------------- */

const REGISTRY: Record<DiagramType, () => React.ReactNode> = {
  'route-pacing': RoutePacing,
  'late-hands': LateHands,
  'release-sequencing': ReleaseSequencing,
  'tracking-split': TrackingSplit,
  'whip-route': WhipRoute,
  geometry: Geometry,
  'stop-route-sell': StopRouteSell,
  'body-catch': BodyCatch,
  'zone-feel': ZoneFeel,
  stacking: Stacking,
  'two-opens': TwoOpens,
}

export default function FootballDiagram({ type }: { type: DiagramType }) {
  const D = REGISTRY[type]
  return <div className="dg-wrap">{D()}</div>
}
