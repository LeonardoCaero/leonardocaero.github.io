# leonardocaero.github.io

My personal portfolio: a bento grid in English, Spanish and Japanese, built with Astro and Tailwind CSS.

**Live:** https://leonardocaero.github.io

## Features

- **Bento layout** with work, experience, stack, contact and an "off the clock" section.
- **Three languages** (`/`, `/es/`, `/ja/`) generated from one set of components. Each page has `hreflang` alternates.
- **Case studies** open as sheets over the bento. The grid stays mounted, so its scroll, focus and marquee position are kept.
- **Carousel transitions:** switching language slides the grid sideways; switching between work and off the clock slides it vertically.
- **Static and light:** no UI framework, little client JS, WebP images, Japanese fonts loaded only on `/ja/`.

## Stack

Astro 7 · Tailwind CSS 4 · TypeScript · Fontsource · Phosphor Icons · Simple Icons · GitHub Actions / GitHub Pages

## Development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the build locally
npx astro check    # type-check
```

Run Lighthouse against `preview`, not `dev`: the dev server ships unminified code and the Astro toolbar.

## Structure

```
src/
  pages/[...path].astro   every route: locale × page
  i18n/                   copy per locale + routes, timeline, stack, projects
  layouts/Base.astro      head, fonts, client router, transitions
  layouts/Sheet.astro     modal layout for case studies and about
  components/             tiles and views (Work, Life, About, Case, ...)
  styles/global.css       theme tokens and base styles
public/
  photos/                 WebP images, loaded by name through <Photo>
  cv.pdf
```

Pages are listed in `pages` in `src/i18n/index.ts`. Every `work/<key>` page renders `Case.astro` with the matching entry from `projects`.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages using `.github/workflows/deploy.yml`.
