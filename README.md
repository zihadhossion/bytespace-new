# ByteSpace New

Marketing site for **ByteSpace**, an online learning platform — built with Next.js 16 (App Router), React 19, and Tailwind CSS v4, following the [Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project structure

```
app/
  page.tsx            # Landing page
  layout.tsx          # Root layout, fonts, metadata
  globals.css         # Design tokens (@theme) + base styles
  not-found.tsx       # 404 page
  login/              # Login route (stub)
  register/           # Signup route (stub)
components/
  layout/             # Header, Footer
  home/               # Hero, PartnerLogos, CategoryTabs, CourseCard,
                      # GrowthSection, CreatorCTA, Testimonials
  ui/                 # Button, Badge, Input, StatCard, AvatarStack
data/                 # Courses, nav/footer links, categories, testimonials
public/
  fonts/              # Local Satoshi (400/500/700)
  images/             # Logos and design assets
```

## Design system

Tokens live in `app/globals.css` under `@theme` and map directly to the Figma style guide:

- **Primary** — Persian Blue (`brand-*`), **Secondary** — Electric Lime (`volt-*`), **Neutral** — Shuttle Gray (`steel-*`)
- **Semantic** — `ink`, `muted`, `surface`, `accent`, `price`
- **Typography** — Poppins (headings) / Satoshi (body); scale tokens `text-display`, `text-title`, `text-heading`, `text-subheading`, body and label sizes
- **Grid** — 12 columns, 1200px content width (`max-w-page`), 24px card radius (`rounded-card`)

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Deploy with default settings; the live URL is publicly accessible.

## Notes

- Landing page is built as server components; per-section data is separated under `data/` for easy swapping.
- Login and signup pages are UI placeholders (no backend/auth wired up).
