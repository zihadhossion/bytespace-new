# ByteSpace New

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://bytespace-new-peach.vercel.app)

Marketing site for **ByteSpace**, an online learning platform — built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4, pixel-matched to the [Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0).

**Live demo:** https://bytespace-new-peach.vercel.app · **Repository:** https://github.com/zihadhossion/bytespace-new

![ByteSpace landing page hero](docs/screenshot.png)

## About

A complete marketing website for an online course platform. The landing page covers the full design — hero, partner logos, course categories, featured courses, learning paths, growth section, creator CTA and testimonials — with scroll-driven motion and responsive layouts from mobile to desktop.

Beyond the landing page, the site also includes a course catalog with search and filtering, course detail pages (curriculum, lessons, reviews), creator profiles, and authentication screens.

## Tech stack

| Layer    | Choice                                          |
| -------- | ----------------------------------------------- |
| Framework| [Next.js 16](https://nextjs.org) (App Router)   |
| UI       | React 19, Server Components                     |
| Styling  | Tailwind CSS v4 (`@theme` design tokens)        |
| Language | TypeScript                                       |
| Fonts    | Poppins (headings), Satoshi (body) — self-hosted|
| Deploy   | [Vercel](https://vercel.com)                    |

## Getting started

```bash
git clone https://github.com/zihadhossion/bytespace-new.git
cd bytespace-new
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
  (site)/            # Public routes
    page.tsx         # Landing page
    courses/         # Course catalog + detail, lessons, reviews
    creators/        # Creator list + profile
  (auth)/            # Login / signup routes
    login/           # Sign in
    register/        # Create account
  layout.tsx         # Root layout, fonts, metadata
  globals.css        # Design tokens (@theme) + base styles
  not-found.tsx      # 404 page
components/
  layout/            # Header, FixedHeader, Footer, MobileNav
  home/              # Hero, PartnerLogos, LearningPaths, GrowthSection,
                     # CreatorCTA, Testimonials
  course/            # CourseHero, CourseCard, CourseCardContent, CourseLayout,
                     # CourseSection, CourseTabs, EnrollCard, StickyEnroll,
                     # ShareButton
  search/            # CatalogHero, CatalogList, CategoryTabs, FilterBar,
                     # SearchPill, Pagination, CatalogEmptyState
  creator/           # CreatorCard
  auth/              # AuthShell, AuthForm, AuthFormHeader, AuthFormFooter,
                     # AuthField, LoginForm, RegisterForm
  newsletter/        # NewsletterForm
  ui/                # Button, CardShell, MetaChip, StatCards, AvatarStack,
                     # AppImage, Reveal, Glow, CountUp, FloatOrnament, Title,
                     # Icon, GridOverlay
data/                # Courses, categories, lessons, reviews, creators,
                     # testimonials, nav, growth, avatars
lib/                 # Utils, catalog, validation, form hooks, routing helpers
public/
  fonts/             # Local Satoshi (400/500/700)
  images/            # Logos and design assets (webp)
docs/
  screenshot.png     # Landing page screenshot
```

## Design system

Tokens live in `app/globals.css` under `@theme` and map directly to the Figma style guide:

- **Primary** — Persian Blue (`brand-*`), **Secondary** — Electric Lime (`volt-*`), **Neutral** — Shuttle Gray (`steel-*`)
- **Semantic** — `ink`, `muted`, `surface`, `accent`, `price`
- **Typography** — Poppins (headings) / Satoshi (body); scale tokens `text-display`, `text-title`, `text-heading`, `text-subheading`, body and label sizes
- **Grid** — 12 columns, 1200px content width (`max-w-page`), 24px card radius (`rounded-card`)

Shared UI primitives live in `components/ui/` so sections stay presentational and easy to reuse.

## Development

Work happens on feature branches and lands on `main` through pull requests:

```bash
git checkout -b feat/<short-description>
# ... commit changes
git push -u origin feat/<short-description>
# open a PR against main
```

Branches used so far: `feat/landing-page`, `feat/dynamic-catalog`, `feat/motion-polish`, `feat/seo-metadata`.

## Deployment

The site is deployed on Vercel: https://bytespace-new-peach.vercel.app

To deploy your own fork:

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected.
3. Deploy with default settings; the live URL is publicly accessible.

## Notes

- Landing page sections are server components; per-section data is separated under `data/` for easy swapping.
- Login and signup pages are fully built UI with client-side validation (no backend/auth wired up).
- Course catalog, course detail, lessons, reviews and creator pages are static-data driven.
- Images are optimized `.webp` assets served through `next/image`.
