# Alain Fils Niyomucamanza — Portfolio

A polished developer and IT portfolio for **Alain Fils Niyomucamanza**, a
freelance full-stack and systems developer based in **Kigali, Rwanda**.

Built with React 19, Vite, Tailwind CSS v4, and React Router. The site is a
single-page application with client-side routing, a Tailwind design-token
system, accessible components, and per-route metadata.

- **Live site:** https://portfolio-sigma-black-aa6aolxx26.vercel.app/
- **GitHub:** https://github.com/tonkyzone100m-ctrl
- **Location:** Kigali, Rwanda — open to remote and freelance work

## Projects

| Project | What it is | Stack | Links |
| --- | --- | --- | --- |
| **School Management System** | Role-based academic management platform for HR, Registrar, Head of Department, Lecturer, and Student workflows | PHP, MySQL, HTML5, CSS3, JavaScript | [Live](https://schoolms2026.ct.ws/login.php) |
| **ReportHub** | Community infrastructure reporting and tracking platform | React, TypeScript, PHP, MySQL REST API | [Source](https://github.com/tonkyzone100m-ctrl/reporthub-pro) · [Live](https://reporthub-pro.vercel.app/) |
| **CV Maker** | Full-stack resume builder with AI-assisted summaries | React, Vite, Tailwind CSS, Node.js, Express, Prisma, PostgreSQL (Neon) | [Source](https://github.com/tonkyzone100m-ctrl/CV_maker) · [Live](https://cv-maker-sigma-puce.vercel.app) |
| **UpliftRwanda** | Big-data analytics dashboard built for the NISR 2026 Big Data Hackathon | React, Python FastAPI, PostgreSQL (Neon) | [Source](https://github.com/tonkyzone100m-ctrl/UpliftRwanda) · [Live](https://uplift-frontend-ruby.vercel.app/) |
| **Personal Portfolio** | This responsive portfolio with dynamic case studies, searchable projects, and an accessible gallery | React, Vite, Tailwind CSS v4, React Router | [Source](https://github.com/tonkyzone100m-ctrl/portfolio) · [Live](https://portfolio-sigma-black-aa6aolxx26.vercel.app/) |

Each project has a dedicated case study at `/projects/:slug` with the
problem, solution, outcome, architecture, key features, and technical
highlights.

## Tech stack

- **Frontend:** React 19, Vite, React Router, React Icons (Lucide set)
- **Styling:** Tailwind CSS v4 with design tokens declared via `@theme` in
  `src/index.css` and shared utility strings in `src/lib/styles.js`
- **Type & color:** Inter (headings/UI) + Fira Code (code/badges), slate and
  emerald/teal palette, solid colors only
- **Theme:** light/dark toggle persisted in `localStorage`, defaulting to the
  saved choice, then the system preference, then dark
- **Tooling:** ESLint, Vite build, Vercel deployment

## Local development

```bash
npm install
npm run dev
```

The dev server runs on Vite's default port (usually `http://localhost:5173`).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
public/                 Static assets (favicon, og-image, robots, sitemap, gallery)
src/
  assets/               Project screenshots
  components/           Navbar, Footer, Gallery, SocialLinks, CopyEmailButton
  data/                 site config, projects, gallery
  hooks/                usePageMeta (per-route title/meta/canonical)
  lib/                  shared Tailwind utility strings (styles.js)
  pages/                Hero, About, Skills, Projects, ProjectCaseStudy, Contact, NotFound
  App.jsx               Layout + route definitions
  index.css             Tailwind entry + @theme design tokens
  main.jsx              Application entry point
vercel.json             SPA rewrite so nested routes never 404
```

## Gallery images

The gallery reads its items and image paths from `src/data/gallery.js` and
expects the files in `public/gallery/`:

```text
public/gallery/cv-maker.jpg
public/gallery/uplift-rwanda.jpg
public/gallery/reporthub.jpg
public/gallery/portfolio.jpg
public/gallery/ui-design.jpg
public/gallery/certificate.jpg
public/gallery/school-management.jpg
```

`public/gallery/` currently contains only a `.gitkeep`, so each card renders a
clean placeholder (and the lightbox shows a placeholder message) until the real
images are added. Drop the files in with those exact names — no code changes are
needed.

## Deployment

The site is designed for Vercel. `vercel.json` rewrites all routes to
`index.html`, so direct loads and refreshes on nested paths such as
`/projects/uplift-rwanda` work correctly.

1. Import the repository into Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## Configuration and content

Profile details, links, and contact information live in `src/data/site.js`.
The contact email and LinkedIn URL are already real values and are used by
`mailto:`, the copy-to-clipboard button, and the social links.

Static metadata in `index.html`, `public/robots.txt`, and `public/sitemap.xml`
uses `https://portfolio-sigma-black-aa6aolxx26.vercel.app/` as the canonical
domain. Update all three together if the production domain changes.

## Notes

- Per-route titles, descriptions, canonical URLs, and OpenGraph tags are
  updated client-side by `usePageMeta`. Social crawlers that do not execute
  JavaScript will use the static defaults in `index.html`.
- The design system uses solid colors only — no gradients.
- The navbar theme toggle applies `.light` or `.dark` to `<html>`, updates the
  browser `theme-color`, and persists the choice in `localStorage`.
- All interactive elements have visible `:focus-visible` styles, and the
  lightbox traps focus, locks body scroll, and restores focus on close.
