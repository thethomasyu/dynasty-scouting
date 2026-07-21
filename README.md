# Dynasty Scouting

The web home of the Dynasty Scouting project. This first version carries the complete 2027 wide receiver class: 23 reader-facing Early Scouting Profiles, a class page for browsing and search, and two prospects held open until the evidence supports a real evaluation. QB, RB, and TE will join the same structure when their research exists.

Everything in this repository is self-contained. It does not need the wider Dynasty Scouting research folders to install, run, build, or deploy.

## What's inside

The site has two main experiences.

The class page (the home page) opens with the 2027 WR class, offers five editorial entry points into the class, and then lists all 23 profiles in a searchable, alphabetical directory. Order never implies rank; there are no rankings or grades yet anywhere in the product, on purpose. A "More evidence needed" section covers Junior Sherrill and Braylon Staley, who are being watched but do not have enough evidence for full profiles.

Each player page turns that player's Early Scouting Profile into an editorial reading experience: a hero built around the player cutout, the profile prose with section navigation, a pull-quote treatment for the file's central question where one exists, a distinct NFL translation module (including split-path projections for players whose profile genuinely forks), a "What would change my mind" panel, and an evaluation history that today holds the single real entry: Early Evaluation, Summer 2026. Bryant Wesco Jr. and Nick Marsh additionally carry the Trait Lab visual experiment, a compact seven-category read using the project's qualitative tiers.

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
│   ├── data/                   Player manifest, Trait Lab data, types
│   ├── lib/                    Profile parser, image lookup, scroll hooks
│   ├── components/             Interface components
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

It copies any changed profiles into `src/content/`. In the standalone repository the script simply reports that no research folder exists and exits; the committed snapshot keeps working either way. After adding a brand-new player, also add an entry for them in `src/data/players.ts` (name, school, slug, teaser, and any section treatments).

The editorial treatments on player pages (which section is the NFL translation, where the pull quote sits, how a forked projection splits) are declared per player in `src/data/players.ts`. The site never guesses from heading names, because heading names vary across profiles by design.

## How player imagery works

The master images are the transparent PNGs under `Assets/Players/2027/WR/<Player Name>/` (`Headshot.png` and `Cutout.png`). They are the source of truth and are never modified by the app.

The site itself loads small webp copies from `src/assets/players/`, which are committed to the repository, so nothing needs regenerating for a normal clone-and-run. If you replace or add master images, regenerate the web copies with:

```
npm install --no-save sharp
npm run derive-images
```

Five old asset folders with non-canonical player names (`Nick March`, `Nyck Harbor`, `Jaden Greathouse`, `Duce Robinson`, `Ryan Coleman-Williams`) are superseded by correctly named folders and are listed in `.gitignore`. If they are still on your disk, they can be deleted whenever convenient.

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

No rankings, no numerical grades, no invented statistics, and no fabricated evaluations anywhere in the interface. Unknowns stay visible as unknowns (the Trait Lab renders them distinctly rather than averaging them away). The two held prospects get an honest holding treatment instead of fake profiles. When the research updates, evaluation history entries get added rather than silently rewriting the past.
