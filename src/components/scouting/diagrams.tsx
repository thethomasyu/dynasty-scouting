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

/* ================================================================== */
/* Quarterback concept diagrams.                                       */
/* Same vocabulary as the WR set: the quarterback is the accent circle */
/* (QB), rushers and defenders are open ink circles, the offensive line */
/* is a faint block row, accent strokes are the quarterback's movement  */
/* or the ball, muted strokes are the rush. Every diagram carries a     */
/* title/description for screen readers and the module restates it in   */
/* text, so nothing meaningful lives only in the picture.               */
/* ================================================================== */

function QBMark({ x, y, label = 'QB' }: { x: number; y: number; label?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={5.4} className="dg-wr" />
      <text x={x + 8.5} y={y + 3} className="dg-tag">
        {label}
      </text>
    </g>
  )
}

/** Faint offensive-line block row centered on cx. */
function OLine({ cx, y }: { cx: number; y: number }) {
  return (
    <g>
      {[-24, -12, 0, 12, 24].map((d) => (
        <rect key={d} x={cx + d - 3.4} y={y - 3.4} width={6.8} height={6.8} className="dg-ol" />
      ))}
    </g>
  )
}

/** A pass rusher: open ink circle, optional single-letter tag inside. */
function Rusher({ x, y, label = '' }: { x: number; y: number; label?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={5.2} className="dg-db" />
      {label && (
        <text x={x} y={y + 2.9} textAnchor="middle" className="dg-tag dg-tag--db">
          {label}
        </text>
      )}
    </g>
  )
}

/* ---- 12. Climb and reset (Arch Manning) --------------------------- */

function PocketClimb() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="Backing off the platform"
          desc="When the pocket tightens, a quarterback who drifts straight back off his platform lets the edge rush run him down; the deeper he retreats, the sooner the arc reaches him."
        >
          <defs>
            <Arrow id="pc-a" />
          </defs>
          <line x1={8} y1={52} x2={162} y2={52} className="dg-los" />
          <text x={10} y={46} className="dg-note">LOS</text>
          <OLine cx={85} y={62} />
          <Rusher x={40} y={58} label="E" />
          <Rusher x={130} y={58} label="E" />
          {/* edge arcs converge on the deep spot */}
          <path d="M40 64 C56 104 68 132 80 150" className="dg-rush" markerEnd="url(#pc-a)" />
          <path d="M130 64 C114 104 102 132 90 150" className="dg-rush" markerEnd="url(#pc-a)" />
          {/* drift back */}
          <path d="M85 104 L85 150" className="dg-gap" markerEnd="url(#pc-a)" />
          <QBMark x={85} y={158} />
          <text x={26} y={128} className="dg-note dg-note--strong">DRIFTS</text>
          <text x={26} y={138} className="dg-note dg-note--strong">OFF THE</text>
          <text x={26} y={148} className="dg-note dg-note--strong">PLATFORM</text>
          <text x={100} y={186} className="dg-note">RUSH RUNS</text>
          <text x={100} y={196} className="dg-note">HIM DOWN</text>
        </Frame>
        <figcaption className="dg-cap">What he avoids: retreat into the rush</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="Climb and reset"
          desc="Manning steps up into the space the edge rush vacates, resets his feet between the tackles, and delivers over the line. The rushers overrun behind him and the sack stays off."
        >
          <defs>
            <Arrow id="pc-b" />
          </defs>
          <line x1={8} y1={52} x2={162} y2={52} className="dg-los" />
          <text x={10} y={46} className="dg-note">LOS</text>
          <OLine cx={85} y={62} />
          <Rusher x={40} y={58} label="E" />
          <Rusher x={130} y={58} label="E" />
          {/* edges overrun past the pocket */}
          <path d="M40 64 C54 100 52 132 44 160" className="dg-rush" markerEnd="url(#pc-b)" />
          <path d="M130 64 C116 100 118 132 126 160" className="dg-rush" markerEnd="url(#pc-b)" />
          {/* climb up into the vacated interior */}
          <path d="M85 120 L85 82" className="dg-route dg-route--speed" markerEnd="url(#pc-b)" />
          <QBMark x={85} y={124} />
          {/* delivery over the line */}
          <path d="M85 78 Q112 44 132 30" className="dg-ballpath" />
          <Catch x={134} y={28} />
          <text x={92} y={104} className="dg-note dg-note--accent">CLIMB INTO</text>
          <text x={92} y={114} className="dg-note dg-note--accent">THE SPACE</text>
          <text x={20} y={150} className="dg-note">RESET ·</text>
          <text x={20} y={160} className="dg-note">DELIVER</text>
        </Frame>
        <figcaption className="dg-cap">What he does: step up, reset, deliver. The sack stays off.</figcaption>
      </figure>
    </div>
  )
}

/* ---- 13. Rescue from a broken pocket (LaNorris Sellers) ----------- */

function RescueCreation() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 190"
        title="A good play out of a bad one"
        desc="Protection caves and a free rusher arrives. Sellers slips the pressure to his right, keeps the down alive, and turns a broken snap into positive yardage with his legs or an off-platform throw."
        className="dg--wide"
      >
        <defs>
          <Arrow id="rc-a" />
        </defs>
        <line x1={8} y1={54} x2={332} y2={54} className="dg-los" />
        <text x={10} y={48} className="dg-note">LOS</text>
        <OLine cx={150} y={64} />
        {/* free interior rusher breaks through */}
        <Rusher x={132} y={58} label="" />
        <path d="M132 64 C136 82 140 96 150 108" className="dg-rush" markerEnd="url(#rc-a)" />
        <text x={70} y={92} className="dg-note dg-note--strong">PROTECTION CAVES</text>
        {/* QB escapes right */}
        <QBMark x={150} y={118} />
        <path d="M150 118 C196 116 226 104 252 96" className="dg-route dg-route--speed" markerEnd="url(#rc-a)" />
        <text x={196} y={132} className="dg-note dg-note--accent">SLIPS IT RIGHT</text>
        {/* positive outcome: run upfield or throw on the move */}
        <path d="M256 92 L286 40" className="dg-route" markerEnd="url(#rc-a)" />
        <path d="M258 96 Q300 78 326 96" className="dg-ballpath" />
        <text x={250} y={150} className="dg-note">A PLAY FROM</text>
        <text x={250} y={160} className="dg-note">A BROKEN DOWN</text>
      </Frame>
      <figcaption className="dg-cap">The talent bails out an unstable snap. The question is how many start that way.</figcaption>
    </figure>
  )
}

/* ---- 14. First read, open and removed (Julian Sayin) -------------- */

function FirstReadWindow() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="First read open"
          desc="With the first window open, Sayin is on time and anticipatory: the ball is out on schedule and the operation looks clean."
        >
          <defs>
            <Arrow id="fr-a" />
          </defs>
          <UpfieldPanel w={170} los={168} />
          <QBMark x={78} y={190} />
          {/* route to an open window */}
          <path d="M112 162 L120 96" className="dg-route dg-route--speed" markerEnd="url(#fr-a)" />
          <ellipse cx={122} cy={84} rx={26} ry={17} className="dg-zone dg-zone--soft" />
          <path d="M80 184 Q104 132 118 92" className="dg-ballpath" />
          <Catch x={122} y={84} />
          <text x={40} y={120} className="dg-note dg-note--accent">ON TIME,</text>
          <text x={40} y={130} className="dg-note dg-note--accent">ON SCHEDULE</text>
        </Frame>
        <figcaption className="dg-cap">First window open: the best of the tape</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="First read taken away"
          desc="When the first answer is covered, the progression slows, the rush arrives, and the sacks come. An NFL defense removes that first window far more often than his college one did."
        >
          <defs>
            <Arrow id="fr-b" />
          </defs>
          <UpfieldPanel w={170} los={168} />
          <QBMark x={78} y={190} />
          {/* window covered */}
          <path d="M112 162 L120 96" className="dg-chase" />
          <DB x={122} y={86} label="" />
          <text x={100} y={74} className="dg-note dg-note--strong">COVERED</text>
          {/* rush reaches him */}
          <Rusher x={44} y={176} label="" />
          <path d="M50 176 C64 186 70 188 74 190" className="dg-rush" markerEnd="url(#fr-b)" />
          <path d="M66 200 L90 200 M70 196 l-6 4 6 4 M86 196 l6 4 -6 4" className="dg-block" />
          <text x={30} y={150} className="dg-note">PROGRESSION</text>
          <text x={30} y={160} className="dg-note">SLOWS · SACK</text>
        </Frame>
        <figcaption className="dg-cap">First window gone: where the projection lives</figcaption>
      </figure>
    </div>
  )
}

/* ---- 15. Backward drift into a sack (Sam Leavitt) ----------------- */

function BackwardDrift() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 200"
        title="Drift turns a rush into a sack"
        desc="Under pressure Leavitt drifts straight back instead of climbing. The retreat deepens the edge rush's angle and a manageable rush becomes a sack. The faint lane is the climb he skips."
        className="dg--wide"
      >
        <defs>
          <Arrow id="bd-a" />
        </defs>
        <line x1={8} y1={50} x2={332} y2={50} className="dg-los" />
        <text x={10} y={44} className="dg-note">LOS</text>
        <OLine cx={170} y={60} />
        <Rusher x={96} y={54} label="E" />
        <Rusher x={244} y={54} label="E" />
        {/* the climb he skips */}
        <path d="M170 110 L170 74" className="dg-block" strokeDasharray="4 5" />
        <text x={178} y={92} className="dg-note">THE CLIMB HE SKIPS</text>
        {/* drift straight back */}
        <path d="M170 110 L170 168" className="dg-gap" markerEnd="url(#bd-a)" />
        {/* edges catch the deepened spot */}
        <path d="M96 60 C118 112 140 150 162 166" className="dg-rush" markerEnd="url(#bd-a)" />
        <path d="M244 60 C222 112 200 150 178 166" className="dg-rush" markerEnd="url(#bd-a)" />
        <QBMark x={170} y={176} />
        <path d="M158 186 l24 0 M162 182 l-6 4 6 4 M178 182 l6 4 -6 4" className="dg-block" />
        <text x={38} y={140} className="dg-note dg-note--strong">DRIFTS</text>
        <text x={38} y={150} className="dg-note dg-note--strong">STRAIGHT BACK</text>
        <text x={228} y={140} className="dg-note">MANAGEABLE RUSH</text>
        <text x={228} y={150} className="dg-note">BECOMES A SACK</text>
      </Frame>
      <figcaption className="dg-cap">The sacks are a movement story, not a protection one. Movement is coachable.</figcaption>
    </figure>
  )
}

/* ---- 16. Pressure with no escape (Drake Lindsey) ------------------ */

function NoEscape() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 200"
        title="Pressure with no movement answer"
        desc="Lindsey cannot solve pressure by leaving the pocket. Both escape lanes are shut, so the only response is faster processing, and under heat the process speeds up in the wrong direction into a rushed throw."
        className="dg--wide"
      >
        <defs>
          <Arrow id="ne-a" />
        </defs>
        <line x1={8} y1={50} x2={332} y2={50} className="dg-los" />
        <text x={10} y={44} className="dg-note">LOS</text>
        <OLine cx={170} y={60} />
        <Rusher x={104} y={54} label="" />
        <Rusher x={236} y={54} label="" />
        <Rusher x={170} y={56} label="" />
        {/* rush collapses from three spots */}
        <path d="M104 60 C124 90 140 104 158 116" className="dg-rush" markerEnd="url(#ne-a)" />
        <path d="M236 60 C216 90 200 104 182 116" className="dg-rush" markerEnd="url(#ne-a)" />
        <path d="M170 62 L170 108" className="dg-rush" markerEnd="url(#ne-a)" />
        <QBMark x={170} y={126} />
        {/* both escape lanes blocked */}
        <path d="M120 132 l28 0 M124 128 l-6 4 6 4 M144 128 l6 4 -6 4" className="dg-block" />
        <path d="M192 132 l28 0 M196 128 l-6 4 6 4 M216 128 l6 4 -6 4" className="dg-block" />
        <text x={44} y={150} className="dg-note">NO LANE</text>
        <text x={250} y={150} className="dg-note">NO LANE</text>
        {/* rushed throw: wobbly */}
        <path d="M170 132 q10 22 -6 34 q-16 12 4 24" className="dg-ballpath" />
        <text x={120} y={192} className="dg-note dg-note--strong">PROCESS SPEEDS UP → RUSHED THROW</text>
      </Frame>
      <figcaption className="dg-cap">The whole structural bet: can he make pressure survivable without his feet.</figcaption>
    </figure>
  )
}

/* ---- 17. Bail to legs vs reset (John Mateer) ---------------------- */

function BailToLegs() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="The bail"
          desc="With the first read covered, Mateer's instinct is to break contain and run, leaving a second read that was about to come open unthrown."
        >
          <defs>
            <Arrow id="bl-a" />
          </defs>
          <UpfieldPanel w={170} los={158} />
          <QBMark x={92} y={182} />
          {/* first read covered */}
          <DB x={118} y={92} label="" />
          <text x={100} y={80} className="dg-note dg-note--strong">COVERED</text>
          {/* open second read left behind */}
          <ellipse cx={44} cy={104} rx={22} ry={15} className="dg-zone dg-zone--soft" />
          <text x={22} y={106} className="dg-note">OPEN,</text>
          <text x={22} y={116} className="dg-note">UNTHROWN</text>
          {/* bail out to run */}
          <path d="M92 176 C70 178 52 182 38 190" className="dg-route dg-route--speed" markerEnd="url(#bl-a)" />
          <text x={40} y={172} className="dg-note dg-note--accent">BAILS TO RUN</text>
        </Frame>
        <figcaption className="dg-cap">The instinct: take off at the first covered read</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="The reset"
          desc="The missing habit: climb and come to the second read instead of running. The throw that was there gets made."
        >
          <defs>
            <Arrow id="bl-b" />
          </defs>
          <UpfieldPanel w={170} los={158} />
          <QBMark x={92} y={182} />
          <DB x={118} y={92} label="" />
          {/* climb and deliver the second read */}
          <path d="M92 176 L92 150" className="dg-route dg-route--speed" markerEnd="url(#bl-b)" />
          <ellipse cx={48} cy={104} rx={22} ry={15} className="dg-zone dg-zone--soft" />
          <path d="M92 150 Q66 122 52 108" className="dg-ballpath" />
          <Catch x={48} y={104} />
          <text x={22} y={132} className="dg-note dg-note--accent">THE THROW</text>
          <text x={22} y={142} className="dg-note dg-note--accent">THAT WAS THERE</text>
        </Frame>
        <figcaption className="dg-cap">The reset he skips: the second read was open</figcaption>
      </figure>
    </div>
  )
}

/* ---- 18. Release length at the line (Trinidad Chambliss) ---------- */

function ReleaseExposure() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 168"
          title="A long release dips into the hands"
          desc="An elongated throwing motion brings the ball down and back before it comes forward, so it passes through the reach of the defensive line's hands at the line of scrimmage and a batted pass becomes a live risk on a timing throw."
        >
          <defs>
            <Arrow id="re-a" />
          </defs>
          {/* line of hands */}
          {[70, 88, 106, 124].map((x) => (
            <path key={x} d={`M${x} 96 l0 -16`} className="dg-hands" />
          ))}
          <text x={62} y={112} className="dg-note">HANDS AT THE LINE</text>
          <QBMark x={40} y={110} label="" />
          {/* long low release path dipping into the hands */}
          <path d="M40 104 C40 128 60 96 96 84 C120 76 140 60 150 44" className="dg-route" markerEnd="url(#re-a)" />
          <circle cx={62} cy={92} r={3} className="dg-ball" />
          <path d="M56 86 l12 12 M68 86 l-12 12" className="dg-block" />
          <text x={54} y={40} className="dg-note dg-note--strong">BALL DIPS</text>
          <text x={54} y={50} className="dg-note dg-note--strong">INTO THE LANE</text>
        </Frame>
        <figcaption className="dg-cap">The long release exposes the ball to hands at the line</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 168"
          title="A compact release clears the line"
          desc="A shorter, over-the-top motion keeps the ball high and out of the linemen's reach. The tradeoff is that shortening the motion cannot come at the cost of the touch the long release helps produce."
        >
          <defs>
            <Arrow id="re-b" />
          </defs>
          {[70, 88, 106, 124].map((x) => (
            <path key={x} d={`M${x} 96 l0 -16`} className="dg-hands" />
          ))}
          <text x={62} y={112} className="dg-note">HANDS AT THE LINE</text>
          <QBMark x={40} y={110} label="" />
          {/* high over-the-top path clearing the hands */}
          <path d="M40 102 C46 78 70 58 100 50 C124 44 142 44 152 42" className="dg-route dg-route--speed" markerEnd="url(#re-b)" />
          <text x={70} y={36} className="dg-note dg-note--accent">OVER THE TOP,</text>
          <text x={70} y={46} className="dg-note dg-note--accent">CLEARS THE HANDS</text>
        </Frame>
        <figcaption className="dg-cap">Compact clears it, but the motion is doing double duty as touch</figcaption>
      </figure>
    </div>
  )
}

/* ---- 19. Touch or velocity (Jayden Maiava) ------------------------ */

function TouchOrVelocity() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="The lofted, catchable ball"
          desc="What is on the tape: a soft, layered ball dropped into space so the receiver can run under it and keep going. It is easy to catch and it moves the offense."
        >
          <defs>
            <Arrow id="tv-a" />
          </defs>
          <UpfieldPanel w={170} los={176} />
          <QBMark x={64} y={196} />
          <path d="M66 190 Q104 96 132 74" className="dg-ballpath" />
          <path d="M96 176 L128 78" className="dg-route dg-route--speed" markerEnd="url(#tv-a)" />
          <Catch x={132} y={72} />
          <text x={30} y={120} className="dg-note dg-note--accent">SOFT, LAYERED,</text>
          <text x={30} y={130} className="dg-note dg-note--accent">CATCHABLE</text>
        </Frame>
        <figcaption className="dg-cap">On the tape: the ball he chooses</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="The driven ball he did not throw"
          desc="The question mark: the flat, driven velocity throw. If he could make it and chose touch, he is a starter; if the arm cannot, the ceiling sits at the floor. Those throws are not on the tape, so the diagram shows it dashed."
        >
          <defs>
            <Arrow id="tv-b" />
          </defs>
          <UpfieldPanel w={170} los={176} />
          <QBMark x={64} y={196} />
          <path d="M70 190 L128 96" className="dg-block" strokeDasharray="6 5" markerEnd="url(#tv-b)" />
          <circle cx={100} cy={142} r={3} className="dg-ball" />
          <text x={40} y={120} className="dg-note dg-note--strong">THE VELOCITY</text>
          <text x={40} y={130} className="dg-note dg-note--strong">THROW, DASHED:</text>
          <text x={40} y={140} className="dg-note">NOT ON TAPE</text>
        </Frame>
        <figcaption className="dg-cap">The throws he passed up would answer choice or necessity</figcaption>
      </figure>
    </div>
  )
}

/* ---- 20. The deep boundary throw (Darian Mensah) ------------------ */

function BoundaryArm() {
  return (
    <figure className="dg-fig">
      <Frame
        viewBox="0 0 340 200"
        title="Inside the numbers versus outside them"
        desc="Inside about fifty yards, the placement arrives. The throw the arm has to answer for is the deep ball outside the numbers, toward the boundary, where the drive power fades and the ball can lose its legs before it gets there."
        className="dg--wide"
      >
        <defs>
          <Arrow id="ba-a" />
        </defs>
        <line x1={40} y1={12} x2={40} y2={188} className="dg-los" />
        <text x={46} y={22} className="dg-note">BOUNDARY</text>
        <QBMark x={286} y={150} />
        {/* inside the numbers: arrives */}
        <path d="M280 146 Q210 120 150 118" className="dg-ballpath" />
        <Catch x={150} y={118} />
        <text x={166} y={108} className="dg-note dg-note--accent">INSIDE ~50: ARRIVES</text>
        {/* deep boundary: dies short */}
        <path d="M282 144 Q180 60 92 92" className="dg-drive" />
        <circle cx={92} cy={92} r={3.2} className="dg-ball" />
        <path d="M64 78 L60 62 M60 78 L56 62" className="dg-rush" />
        <DB x={58} y={62} label="" />
        <text x={70} y={116} className="dg-note dg-note--strong">DEEP BOUNDARY:</text>
        <text x={70} y={126} className="dg-note dg-note--strong">LOSES STEAM SHORT</text>
      </Frame>
      <figcaption className="dg-cap">His game lives on placement. The boundary throw is what the arm has to answer for.</figcaption>
    </figure>
  )
}

/* ---- 21. Eyes under pressure (Dante Moore) ------------------------ */

function EyesUnderPressure() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="Clean pocket, eyes downfield"
          desc="Inside a clean pocket the picture stays in plan: the eyes stay up and the open downfield throw gets taken on time."
        >
          <defs>
            <Arrow id="eu-a" />
          </defs>
          <UpfieldPanel w={170} los={172} />
          <OLine cx={84} y={158} />
          <QBMark x={84} y={192} />
          <ellipse cx={112} cy={78} rx={24} ry={16} className="dg-zone dg-zone--soft" />
          <path d="M84 186 Q104 128 110 92" className="dg-ballpath" />
          <Catch x={112} y={78} />
          <text x={26} y={120} className="dg-note dg-note--accent">EYES STAY UP,</text>
          <text x={26} y={130} className="dg-note dg-note--accent">THROW TAKEN</text>
        </Frame>
        <figcaption className="dg-cap">Picture clean: the surest bet in the class</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 210"
          title="Pressure, eyes drop"
          desc="When pressure arrives the process can come apart: the eyes drop to the rush and the same open downfield throw goes unthrown. The drift shows up most in the higher-leverage games."
        >
          <defs>
            <Arrow id="eu-b" />
          </defs>
          <UpfieldPanel w={170} los={172} />
          <OLine cx={84} y={158} />
          <QBMark x={84} y={192} />
          {/* the still-open window, now left alone */}
          <ellipse cx={112} cy={78} rx={24} ry={16} className="dg-zone" />
          <text x={92} y={64} className="dg-note">STILL OPEN,</text>
          <text x={92} y={74} className="dg-note">UNTHROWN</text>
          {/* rusher + eyes dropping */}
          <Rusher x={50} y={168} label="" />
          <path d="M56 168 C66 178 72 184 76 190" className="dg-rush" markerEnd="url(#eu-b)" />
          <path d="M84 184 L64 176" className="dg-block" markerEnd="url(#eu-b)" />
          <text x={20} y={148} className="dg-note dg-note--strong">EYES DROP</text>
          <text x={20} y={158} className="dg-note">TO THE RUSH</text>
        </Frame>
        <figcaption className="dg-cap">Heat arrives, eyes drop, the open throw goes untaken</figcaption>
      </figure>
    </div>
  )
}

/* ---- 22. On and off the first read (Drew Mestemaker) -------------- */

function OffFirstRead() {
  return (
    <div className="dg-duo">
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 168"
          title="First read: base set"
          desc="While the first read is there, the base holds. The feet are set under him and the ball comes out with velocity and shape."
        >
          <defs>
            <Arrow id="of-a" />
          </defs>
          <QBMark x={70} y={104} label="" />
          {/* set feet */}
          <path d="M60 116 l8 0 M76 116 l8 0" className="dg-hands" />
          <text x={40} y={134} className="dg-note dg-note--accent">BASE SET</text>
          {/* clean ball */}
          <path d="M74 100 Q116 62 146 40" className="dg-ballpath" />
          <Catch x={148} y={38} />
          <text x={92} y={96} className="dg-note">CLEAN,</text>
          <text x={92} y={106} className="dg-note">ON SHAPE</text>
        </Frame>
        <figcaption className="dg-cap">First read there: velocity and shape</figcaption>
      </figure>
      <figure className="dg-fig">
        <Frame
          viewBox="0 0 170 168"
          title="Off the first read: base breaks"
          desc="The moment he has to come off the first read the feet get choppy, the mechanics loosen, and the ball starts to sail or die. The lower half is the tell, and added mass is what it waits on."
        >
          <defs>
            <Arrow id="of-b" />
          </defs>
          <QBMark x={70} y={104} label="" />
          {/* choppy feet */}
          <path d="M56 118 l6 3 M64 116 l6 4 M74 118 l6 -3 M84 115 l6 3" className="dg-block" />
          <text x={36} y={136} className="dg-note dg-note--strong">FEET CHOPPY</text>
          {/* sailed ball */}
          <path d="M74 98 Q112 44 150 34" className="dg-ballpath" />
          <text x={94} y={92} className="dg-note dg-note--strong">SAILS</text>
          <text x={110} y={26} className="dg-note">OFF TARGET</text>
        </Frame>
        <figcaption className="dg-cap">Off it: the lower half loosens and the ball sails</figcaption>
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
  // Quarterback concept diagrams
  'pocket-climb': PocketClimb,
  'rescue-creation': RescueCreation,
  'first-read-window': FirstReadWindow,
  'backward-drift': BackwardDrift,
  'no-escape': NoEscape,
  'bail-to-legs': BailToLegs,
  'release-exposure': ReleaseExposure,
  'touch-or-velocity': TouchOrVelocity,
  'boundary-arm': BoundaryArm,
  'eyes-under-pressure': EyesUnderPressure,
  'off-first-read': OffFirstRead,
}

export default function FootballDiagram({ type }: { type: DiagramType }) {
  const D = REGISTRY[type]
  return <div className="dg-wrap">{D()}</div>
}
