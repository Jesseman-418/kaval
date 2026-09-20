# Kaval website

This repository runs the current public design of [kaval.chat](https://kaval.chat/). The old Next.js concept has been removed from the runnable app.

## Run locally

```bash
npm run dev
```

Open `http://127.0.0.1:4173`. No dependency installation is required.

```bash
npm run build
npm run preview
```

The build copies `site/` to `dist/`. Deploy `dist/` with a static host that serves directory `index.html` files and the `.html` pages for clean links such as `/login`.

## Edit the website

- `site/index.html`: homepage content and markup
- `site/_astro/*.css`: homepage and other public page styles
- `site/_astro/*.js`: homepage interactions and analytics bundle
- `site/landing-v3/`, `site/experiment/`, `site/fonts/`: images and fonts
- `site/pricing/`, `site/tools/`, `site/scams/`, `site/blog/`: other public pages

These files are the compiled public frontend captured from the live website on 20 September 2026. They reproduce the design, but they are not the original Astro components. The owner-supplied browser save is retained in `browser-save/` for reference.

The site’s authenticated dashboard, AI features, payments, and WhatsApp actions depend on backend services that are not contained in a browser save. The local server returns an explicit 501 response for `/api/*`; it does not impersonate the live backend. See `LIVE-SITE-INSPECTION.md` for the page inventory and inspection limits.
