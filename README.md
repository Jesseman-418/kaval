# Kaval website repository

The root `app/` folder contains an earlier Next.js concept. The currently deployed
`kaval.chat` website is a separate Astro build. Its original Astro source is not
available in this repository.

## Current public website snapshot

`live-snapshot/kaval.chat/` contains the HTML, CSS, JavaScript, fonts, and images
served publicly by `https://kaval.chat/` on 20 September 2026. It covers the
linked public pages, including the homepage, pricing, tools, scam guides, blog,
privacy, and terms. The files are compiled output captured from the live site,
not the original editable Astro components or any private server code.

To inspect the snapshot locally:

```bash
python3 -m http.server 4173 --directory live-snapshot/kaval.chat
```

Then open `http://localhost:4173/`. Some features, including login, WhatsApp,
analytics, and tools that call remote APIs, depend on live services and may not
work in the local snapshot. Update the snapshot from the original Astro project
when that source becomes available.

## Earlier Next.js concept

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
