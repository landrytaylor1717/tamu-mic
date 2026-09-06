# Maroon Investment Club — Next.js site

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires Node 18+ (built and tested on Node 22).

To build for production:

```bash
npm run build
npm start
```

## Structure

- `app/` — one folder per route (App Router). `app/page.js` is the homepage.
- `components/` — shared `Nav`, `Footer`, and `Ticker`, used across every page.
- `app/globals.css` — the whole design system: colors, type, and every
  reusable class (`.division`, `.program`, `.photo-index`, etc.) live here,
  not scattered per-page.
- `public/logo-icon.png` / `public/logo-full.png` — the real club logo,
  background removed.

## Pages included

- `/` — Home
- `/about` — History, mission, leadership (placeholder names)
- `/maroon-fund/equities`
- `/maroon-fund/quant`
- `/travel-series`

## What's still a placeholder — swap these out before this goes live

1. **Hero photo** — currently hotlinked from `tamumic.com`'s live site
   (see the note in `next.config.mjs`). Drop the real file into `/public`
   and point `app/page.js` at it, then delete the `remotePatterns` entry.
2. **All `.swatch` gray blocks** — Programs, Socials, and Travel Series
   photos. Replace the `<div className="swatch">` elements with real
   `<img>` or `next/image` tags once you have photos. The grayscale +
   hairline-border treatment (see `.program-figure img` in globals.css)
   will make real photos look consistent with the rest of the site.
3. **Sponsor names** — currently `[Sponsor One]` etc. in `app/page.js`.
4. **Founding year** — flagged inline in the History copy on `/` and `/about`.
5. **Leadership names** — placeholder in `app/about/page.js`.
6. **Ticker figures** (fund performance, Sharpe ratio) — in
   `components/Ticker.jsx`. Either hand-edit these periodically or wire
   the component up to a real data source later.
7. **Apply button** — currently links to `#`. Point it at the real
   Google Form / application link.

## Notes on the build

- Fonts (Fraunces, Inter, IBM Plex Mono) load via `next/font/google` in
  `app/layout.js` — this needs normal internet access at build time to
  fetch them (works out of the box on Vercel or any machine with regular
  internet; it won't work behind a fully offline/sandboxed network).
- Deploys cleanly to Vercel with zero config (`vercel deploy`), since
  that's the default target for Next.js. Any other Node host works too.
