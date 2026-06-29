# AGENTS.md

## Commands

| Command | What it does |
|---------|-------------|
| `pnpm run helper -- --pattern='*onic'` | CLI: find matches for a 5-char pattern |
| `pnpm run helper -- --pattern='*onic' --omissions='st'` | CLI: exclude letters |
| `node src/index '*onic'` | same, positional args |
| `pnpm run build` | `parcel build public/index.html --dist-dir dist` |
| `pnpm run dev` | `parcel serve public/index.html --dist-dir dist` (HMR dev server) |
| `npx eslint .` | lint (uses `eslint.config.mjs`) |
| `npm test` | **stub** — no test suite exists |

## Architecture

- **Core logic**: `src/main.js` — exports `findMatches(pattern, solutions, omissions)`, `patternIsValid()`, `patternToRegex()`
- **CLI entry**: `src/index.js` — uses `minimist` for arg parsing, `axios` to fetch solutions from a remote Gist
- **Browser entry**: `src/app.js` — Parcel entry; imports `main.js`, sets `window.findMatches`, loads the React app
- **Web UI**: `public/index.html` (Parcel entry) + `src/helperForm.js` — React 18 UMD from CDN (production), loaded as globals
- **Deployed via DigitalOcean App Platform** — publishes from `dist/`

## Gotchas

- **Only pnpm**: `pnpm-lock.yaml` is the lockfile. Never commit `package-lock.json`.
- **Build artifact**: Parcel outputs to `dist/` (gitignored). The old `public/helper.js` was removed.
- **No local solutions file**: the word list is fetched at runtime from a GitHub Gist URL hardcoded in `src/index.js` and `src/helperForm.js`. No network = no results.
- **No tests**: `npm test` exits with code 1. Add tests before making logic changes.
- **React from CDN**: React and ReactDOM are loaded as UMD globals in `index.html`. `src/helperForm.js` does not import them.
- **DO app spec**: `.do/app.yaml` defines the deployment. Build command is `pnpm ci && CI=true pnpm run build`. DO publishes from `dist/`.
- **Local dev build**: `doctl apps dev build` uses `no_cache: true` in `.do/dev-config.yaml` to work around a Docker volume permission issue.
