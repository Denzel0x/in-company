# Invorious Software Agency — Website (Phase 1)

Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## What's in this build

- Project scaffold (`app/`, `components/`, `public/`)
- Design tokens in `tailwind.config.ts` and `app/globals.css`
- Reusable components: `Navbar`, `Footer`, `Button`, `Section`, `Card`, `HeroDiagram`,
  `ContactForm`, `CareerForm`, `StartProjectForm`
- All six pages: **Home**, **Services** (Tech Consulting / Web2 / Web3), **About**,
  **Careers** (named open roles + application form), **Contact** (form + details),
  **Start a Project** (multi-step brief form)
- Working form validation, accessible success states, and API route stubs at
  `app/api/contact`, `app/api/careers`, `app/api/start-a-project`
- SEO: per-page `metadata` (title, description, Open Graph) on every route, plus
  `app/sitemap.ts` and `public/robots.txt`

## Design system

- **Colors** — `ink` #10131F (text/dark sections), `paper` #F6F7F5 (background), `steel` #1E3A5F
  (primary brand blue), `signal` #C4F135 (accent, used sparingly), `slate`/`line` for muted
  text and hairlines.
- **Type** — Space Grotesk (display/headings), IBM Plex Sans (body), IBM Plex Mono (labels,
  eyebrows, data).
- **Motif** — a blueprint/schematic visual language (hairline grid, node-and-line diagrams)
  that reflects the company's engineering focus, instead of generic stock icons.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Still to do

- The `/api/contact`, `/api/careers` and `/api/start-a-project` routes currently just log
  submissions to the server console — wire them to an email service (e.g. Resend,
  Postmark) or a CRM/ATS before going live.
- Add a real OG image at `public/og-image.png` (the path is already referenced in metadata).
- Swap the placeholder `hello@invorious.com` for the agency's real inbox if different.

## Notes

- No client logos or testimonials are included yet — add these once real ones are available
  rather than using placeholders, to keep the site trustworthy.
- Replace `hello@invorious.com` with the agency's real inbox if different.
