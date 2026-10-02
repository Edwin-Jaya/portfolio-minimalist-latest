# Edwin Jaya — Portfolio

Personal portfolio built with Astro and Tailwind CSS v4.

## Requirements

- Node.js 22.12 or newer
- npm

## Getting started

```sh
npm ci
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

## Available commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local development server at `localhost:4321` |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Project case studies

Project information is maintained in `src/data/projects.ts`. The homepage cards and static case-study pages share this catalog. The homepage includes a semantic experience timeline and education summary.

Each project with a `slug` automatically receives a static page at:

```text
/projects/<slug>/
```

The reusable case-study layout is `src/components/ProjectCaseStudy.astro`, and the static route is `src/pages/projects/[slug].astro`. Optional project screenshots are stored under `public/images/projects/gallery/` and listed in each project record.

When adding a project, provide a unique slug, concise description, technology list, available links, and case-study copy. Only publish quantitative outcomes that can be substantiated.

The sitemap is generated at `/sitemap.xml` from the project catalog. The configured canonical domain is `https://edwinlionajaya.com` in `astro.config.mjs`; update it if the deployed domain changes.

## Environment variables

Copy `.env.example` to `.env` and fill in the public social profile URLs. The Medium feed is generated from `MEDIUM_USERNAME`; `MEDIUM_FEED_URL` can optionally override the default RSS URL.

Do not commit `.env` or other files containing secrets.


## Performance and accessibility

- Project imagery is stored locally as WebP and lazy-loaded in cards and galleries.
- Case-study hero images are prioritized; supporting gallery images are lazy-loaded.
- Social embeds are deferred until needed.
- The homepage avoids a blocking full-screen intro; the hero interaction is pointer-only and respects reduced-motion preferences.
- A skip-to-content link and visible focus styles are included.
- Check the deployed site with Lighthouse or PageSpeed Insights before treating performance targets as measured results.

## Brand intro splash

The homepage includes a minimalist, futuristic brand reveal. It types "Edwin Liona Jaya", micro-glitches left and right, renders a fast background code montage square, and seamlessly morphs into the navbar logo. It appears once per browser tab, can be skipped with the **Skip** button or `Escape`, and is skipped automatically when the visitor requests reduced motion.

To replay it during development, append `?intro` to the URL (e.g. `http://localhost:4321/?intro`), or open the browser console and run:

```js
sessionStorage.removeItem("edwin-brand-intro-v3");
location.reload();
```

To disable the intro, remove the `IntroSplash` import and `<IntroSplash />` from `src/pages/index.astro`.
