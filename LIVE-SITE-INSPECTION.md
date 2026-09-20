# Live kaval.chat inspection (20 September 2026)

This report covers code and content delivered to an unauthenticated browser. It does not inspect the original Astro source, server implementation, database, or private deployment settings.

## What is deployed

- The marketing site is an Astro build. The page is largely rendered as HTML, with compiled CSS and a small amount of browser JavaScript for interactions.
- `/login` loads a separate client application from `/_app/assets/`. Its compiled JavaScript has additional modules for account and product screens. The local snapshot can show the login page, but authenticated features require live services.
- Assets include local WOFF2 fonts, WebP/PNG/SVG images, and one voice-note MP3.
- The browser bundle includes PostHog analytics. Public WhatsApp links leave the site.

## Homepage, section by section

1. **Opening scenario:** a simulated AI voice scam creates the problem context. A “Meet Kaval” button leads into the main page. This is illustrative content.
2. **Hero:** positions Kaval as a trusted WhatsApp contact. Primary action opens WhatsApp. The decorative cards show examples: a suspicious forward, bill, parcel, and reply.
3. **Bill interaction:** clicking the bill opens an illustrative answer panel. The browser script animates the bill into the panel, draws a connecting line, updates status text, supports Escape/close, and shortens motion when the visitor prefers reduced motion.
4. **Support logos:** lists cloud and tooling organizations; copy specifies startup programs, credits, and technical resources.
5. **Four capabilities:** protect, handle, watch, and help. Each gives concrete situations rather than a generic feature list.
6. **One-day story:** six selectable moments lead through a sample WhatsApp conversation about a flight, bill, voice note, parcel, dentist booking, and reminders. The page labels the conversation illustrative.
7. **Comparison:** contrasts a one-off ChatGPT answer with a continuing Kaval conversation. The page labels the replies as examples.
8. **Trust section:** says actions require approval, sharing can start small, and conversations are not sold for advertising. The privacy policy is linked.
9. **Final call to action:** repeats WhatsApp entry, shows the ₹999/month ongoing price, and includes a QR modal.
10. **Footer:** links to pricing, tools, scam guides, digital safety, blog, RSS, privacy, and terms.

## Other public sections

- **Pricing:** free start and paid membership explanation.
- **Tools:** free digital safety tools, with separate pages for link, WhatsApp, UPI, email breach, screenshot, and AI fact checks.
- **Scams and bank KYC:** index pages plus individual scam guides.
- **Digital safety:** educational hub and related guides.
- **Blog:** article index and individual articles.
- **About, privacy, terms:** company and legal information.

The `site/` folder contains 104 HTML files. Some routes have both slash and `.html` copies because the capture followed both forms of public links.

## SEO and delivery observations

- The homepage has a descriptive title, metadata, canonical URL, and alternate RSS/language links.
- The site serves readable HTML before JavaScript, so the main marketing copy is available to crawlers.
- Images and fonts are local assets. The hero preloads key fonts and images.
- The source visible in DevTools is compiled output. It is suitable for inspecting layout and browser behavior, but is not a maintainable replacement for Astro components.

## Snapshot verification

- Checked all local `src`, `href`, and `poster` references found in captured HTML: no missing local targets.
- Checked relative JavaScript module imports: no missing files after fetching modules loaded dynamically by the login app.
- Served the snapshot locally and received HTTP 200 for the homepage, its main stylesheet, and pricing page.

## Limits

The snapshot does not contain original `.astro` components, backend handlers, database schemas, secrets, build configuration, or authenticated data. Some interactive tools and login actions may depend on the live API. It should be used as a reference and archive until the actual source project is available.
