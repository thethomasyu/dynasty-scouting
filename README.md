# Dynasty Scouting

The web home of the Dynasty Scouting project. This first version carries the complete 2027 wide receiver class: 23 reader-facing Early Scouting Profiles, a class page for browsing and search, and two prospects held open until the evidence supports a real evaluation. QB, RB, and TE will join the same structure when their research exists.

Everything in this repository is self-contained. It does not need the wider Dynasty Scouting research folders to install, run, build, or deploy.

## What's inside

The site has two main experiences.

The class page (the home page) opens with the 2027 WR class, offers five editorial entry points into the class, and then lists all 23 profiles in a searchable, alphabetical directory. Order never implies rank; there are no rankings or grades yet anywhere in the product, on purpose. A "More evidence needed" section covers Junior Sherrill and Braylon Staley, who are being watched but do not have enough evidence for full profiles.

Each player page is a visual-first scouting experience built on two levels. Level one, open by default, is the visual layer: the hero (cutout, school-listed measurements, roster class, age at the evaluation date, thesis), a seven-category scouting snapshot using the project's qualitative tiers (Unknown stays visibly unknown; nothing is ever a number), the player's winning mechanisms, custom football-concept diagrams where the evaluation teaches one (route pacing, late hands, release sequencing, and so on; one concept, one owner, no repeats), diagnostics and evidence comparisons where the file genuinely contains them, statistics in context only where the profile carries a verified number, an NFL role map on a simplified alignment field (with split-path projections for players whose file genuinely forks), a 2026 watch board, an evaluation-movement panel, and the living evaluation history. Level two is Thomas's complete long-form analysis: every section of the canonical profile is attached to the module it belongs with and expands inline through "Read full analysis" controls, with an "Expand full report" switch that opens the whole report at once. Nothing essential is hidden, and no canonical paragraph is unreachable; the visual layer is a different way of entering the report, never a replacement for it. Composition varies by player because the evaluations vary: thin files get thin pages on purpose.

## Technology

React 19, TypeScript, and Vite 8, with React Router in hash mode so routing works reliably on GitHub Pages with zero configuration. Styling is hand-written CSS (no UI framework). Fonts are self-hosted through Fontsource packages: Archivo Black and Archivo for display and interface text, Source Serif 4 for long-form reading, IBM Plex Mono for datelines and labels. There is no backend, no database, and no account system; the site is fully static.

## Repository layout

```
├── index.html                  Entry page
├── package.json                Dependencies and commands
├── vite.config.ts              Build configuration (relative URLs for Pages)
├── public/                     Favicon and other static files
├── Assets/Players/2027/WR/     Master player imagery (transparent PNGs)
│   └── <Player Name>/Headshot.png + Cutout.png
├── scripts/
│   ├── sync-content.mjs        Optional: refresh profiles from the research folders
│   └── derive-images.mjs       Optional: regenerate web images from the masters
├── src/
│   ├── content/2027/wr/        The 23 profiles as markdown (committed snapshot)
│   ├── assets/players/         Small webp images the site actually loads
│   ├── data/                   Player manifest and types
│   ├── data/presentation/      Per-player visual presentation configs (one file per slug)
│   ├── lib/                    Profile parser, image lookup, scroll hooks
│   ├── components/             Interface components
│   ├── components/scouting/    The visual module system: snapshot, diagrams, boards, expansion
│   ├── pages/                  Class page, player page, not-found page
│   └── styles/                 Design tokens and stylesheets
└── .github/workflows/deploy.yml   GitHub Pages deployment
```

## Running it locally

You need Node.js 20 or newer (22 recommended). Then, from this folder:

```
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). Changes to code or content reload automatically.

To produce the deployable site:

```
npm run build
```

The finished site lands in `dist/`. You can check the built version with `npm run preview`.

## How the scouting content works

The canonical scouting profiles live in the wider Dynasty Scouting project under `02_Player Research/2027/WR/<Player>/Early Scouting Profile.md`. This repository carries a direct snapshot of each one at `src/content/2027/wr/<slug>.md`. The snapshot is the file the site renders; nothing rewrites or edits the scouting text.

If this folder sits inside the full Dynasty Scouting project and a profile has been updated, run:

```
npm run sync-content
```

It copies any changed profiles into `src/content/`. In the standalone repository the script simply reports that no research folder exists and exits; the committed snapshot keeps working either way. After adding a brand-new player, also add an entry for them in `src/data/players.ts` (name, school, slug, teaser, thesis, bio) and a presentation config in `src/data/presentation/<slug>.ts`.

The visual presentation of each player page lives in `src/data/presentation/`: the seven trait reads, which modules appear and in what order, the watch items, and which canonical sections each module expands into. Expansion mapping keys on exact heading text (matched through the same normalizer the parser uses), and any section a config does not claim still renders automatically in a "From the full report" zone, so profile edits can never silently orphan analysis. Forked NFL projections stay in `src/data/players.ts` because their content mirrors the profile's translation section and must be resynced whenever that section changes. The trait tiers are the constitution's qualitative scale; there are no numerical grades anywhere in the system, and the configs are structure, never new scouting claims.

## How player imagery works

The master images are the transparent PNGs under `Assets/Players/2027/WR/<Player Name>/` (`Headshot.png` and `Cutout.png`). They are the source of truth and are never modified by the app.

The site itself loads small webp copies from `src/assets/players/`, which are committed to the repository, so nothing needs regenerating for a normal clone-and-run. If you replace or add master images, regenerate the web copies with:

```
npm install --no-save sharp
npm run derive-images
```

Five old asset folders with non-canonical player names (`Nick March`, `Nick Harbor`, `Jayden Greathouse`, `Duce Robinson`, `Ryan Coleman-Williams`) are superseded by correctly named folders and are listed in `.gitignore`. If they are still on your disk, they can be deleted whenever convenient. (Roster verification in July 2026 confirmed `Nyck Harbor` and `Jaden Greathouse` as the canonical names, reversing an earlier call in the other direction.)

## How the hero bio data works

Every player entry in `src/data/players.ts` carries a `bio` block: listed height, listed weight, the class designation exactly as the school's current roster renders it (redshirt status preserved), and a date of birth when one could be verified. The hero renders these as a four-item strip. The measurement philosophy is deliberate: during the early cycle these are the school's listed figures, marked with a small asterisk and a one-line note; when official combine or pro day measurements exist, they replace the listed figures (`measurementStatus: 'verified'`) and the asterisk goes away.

Age is never hardcoded. It is computed from the stored date of birth as of `EVALUATION_DATE` (exported from the manifest, currently 2026-07-21 for the Summer 2026 set), truncated to one decimal, so an old evaluation always shows the age the player was when it was written. Birthdates come only from credible sources; where none exists the age renders as an em dash, because unknown beats fake precision. Source provenance for every value lives in the research project at `02_Player Research/2027/WR/05_Bio Data Verification.md`, not in the app.

`scripts/qa-heroes.mjs` is an optional QA harness (like the other scripts, it needs a one-off install: `npm i --no-save playwright-core`). Run `npm run preview` in one terminal and the script in another; it walks all 23 player pages against the production build and checks names, bio values, imagery, routes, search, and horizontal overflow at the standard widths.

`scripts/qa-visual.mjs` does the same walk for the visual layer: every profile's modules render, long-form starts collapsed, section expansion and full-report mode work with correct ARIA state, no horizontal overflow at 1440/1024/768/390/360, and, most importantly, a content-loss audit that reads every canonical paragraph out of `src/content/` and verifies it is reachable on the page once the full report is expanded.

## Putting this on GitHub

Create a new, empty repository on GitHub (any name works). Then, from this folder on your computer:

```
git init
git add .
git commit -m "Dynasty Scouting: 2027 WR class"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploying to GitHub Pages

One check before the first push: the deployment workflow must live in a folder named `.github` (with a leading dot). If this project arrived with the folder named `github` instead, rename it to `.github` first. Everything inside stays the same.

One-time setup: in the GitHub repository, go to Settings, then Pages, and under "Build and deployment" set Source to "GitHub Actions".

That's it. The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site on every push to `main`. Your site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/`. The build uses relative URLs and hash-based routing, so it works under any repository name without editing any configuration, and player links can be bookmarked and shared directly.

## Adding future positions

The architecture already assumes more positions. Routes follow `/#/2027/wr` and `/#/2027/wr/<player>`, so a QB class becomes `/#/2027/qb` with its own manifest, content folder (`src/content/2027/qb/`), and assets, reusing the same page components. The universal player experience (identity, thesis, how he wins, central question, deep evaluation, NFL translation, what comes next, what would change the evaluation, evaluation history) is position-agnostic; only the football vocabulary underneath changes. Nothing about the WR implementation needs redesigning to add QB, RB, or TE, and the class page's masthead copy is the only place that currently assumes WR is the lone completed position.

## House rules encoded in this product

No rankings, no numerical grades, no invented statistics, and no fabricated evaluations anywhere in the interface. Unknowns stay visible as unknowns (the Trait Lab renders them distinctly rather than averaging them away, and a player without a verified birthdate shows an unknown age rather than a guessed one). The two held prospects get an honest holding treatment instead of fake profiles. When the research updates, evaluation history entries get added rather than silently rewriting the past.
