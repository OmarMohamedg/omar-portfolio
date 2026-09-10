# Omar Eltawapty — Portfolio

A personal portfolio for **Omar Mohamed Eltawapty** — Cybersecurity & Software Engineer,
Full-Stack Developer — built around a "Secure Engineering Command Center" concept.

Built with React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.

---

## 1. Installation

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
```

## 2. Running locally

```bash
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) with hot reload.

To build a production version:

```bash
npm run build
```

The output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## 3. Project architecture

```
src/
├── components/       Reusable UI building blocks (Navbar, cards, cursor, etc.)
├── sections/         One file per page section (Hero, About, Projects, ...)
├── data/
│   └── portfolioData.ts   ← EVERYTHING you'll want to edit lives here
├── types/             TypeScript shapes for the data above
├── hooks/             Small reusable React hooks
├── App.tsx            Assembles all sections in order
├── main.tsx           React entry point
└── index.css          Design tokens (colors, fonts) + global styles
```

The rule of thumb: **content lives in `src/data/portfolioData.ts`, components only
render it.** You should rarely need to touch a component file just to change text,
a project, a skill, or a status.

---

## 4. Editing personal information

Open `src/data/portfolioData.ts` and edit the `personal` object:

```ts
export const personal: PersonalInfo = {
  name: "Omar Mohamed Eltawapty",
  title: "Cybersecurity & Software Engineer",
  location: "Mansoura, Egypt",
  email: "engomar030@gmail.com",
  // ...
};
```

This feeds the hero, about section, footer, and page metadata automatically.

## 5. Adding or editing projects ("Security Cases")

Still in `portfolioData.ts`, edit the `projects` array. Each project follows the
`Project` type in `src/types/index.ts`:

```ts
{
  id: "my-new-project",         // unique, URL-safe
  caseNumber: "CASE-05",
  title: "My New Project",
  domain: "Web Security",
  status: "Active",             // "Active" | "Completed" | "In Progress"
  securityFocus: "Access control",
  technologies: ["Node.js", "PostgreSQL"],
  description: "One or two sentences shown on the card.",
  features: ["Feature one", "Feature two"],
  github: "https://github.com/OmarMohamedg/my-new-project", // optional
  demo: "https://...",          // optional
  details: {
    overview: "...",
    problem: "...",
    solution: "...",
    architecture: "...",
    technologies: ["..."],
    securityConcepts: ["..."],
    engineeringDecisions: ["..."],
    challenges: "...",
    lessonsLearned: "...",
  },
}
```

Adding an entry automatically creates a new card in the Projects grid and a new
detail modal — no component changes needed. The `Stats` section's "Projects"
count updates automatically too, since it's derived from `projects.length`.

## 6. Editing skills

Edit the `skillGroups` array. Each group is a category (Programming, Frontend,
Cybersecurity, etc.) with a list of items:

```ts
{
  category: "Cybersecurity",
  description: "Security discipline",
  items: ["Web Application Security", "OWASP Principles", "..."],
}
```

Add a new object to create a whole new category card. The "Technologies" and
"Security Domains" stats are derived from this array automatically.

## 7. Adding certifications

Edit the `credentials` array:

```ts
{
  id: "unique-id",
  name: "Certificate name",
  issuer: "Issuing organization",
  status: "IN PROGRESS", // "COMPLETED" | "IN PROGRESS" | "TRAINING" | "WORKSHOP"
}
```

Only mark something `COMPLETED` once it actually is — the status badge is driven
entirely by this field.

## 8. Editing the timeline ("Journey")

Edit the `timeline` array:

```ts
{
  year: "2027",
  label: "What this year is about",
  items: ["Specific thing one", "Specific thing two"],
}
```

## 9. Editing social links

Edit the `social` object:

```ts
export const social: SocialLinks = {
  github: "https://github.com/OmarMohamedg",
  linkedin: "https://linkedin.com/in/omar-m-eltwapty",
  email: "engomar030@gmail.com",
};
```

These flow into the Navbar, Contact section, and Footer.

## 10. Changing colors

Colors are defined once, as CSS variables, at the top of `src/index.css` inside
the `@theme` block:

```css
@theme {
  --color-base: #0b0d12;     /* page background */
  --color-surface: #12151b;  /* panel background */
  --color-signal: #5b8ff9;   /* primary accent */
  --color-ok: #45c97a;       /* "online" / success */
  --color-warn: #e8a33d;     /* warnings */
  /* ... */
}
```

Change a hex value and every component using that token (e.g. `bg-signal`,
`text-ok`, `border-border`) updates automatically — no need to hunt through
component files.

## 11. Replacing images

The project currently uses no raster photos (by design — it's an interface-led,
not photo-led, portfolio). If you want to add a profile photo or project
screenshots:

1. Drop image files into `src/assets/`.
2. Import them in the relevant section/component: `import photo from "../assets/photo.jpg"`.
3. Render with `<img src={photo} alt="..." loading="lazy" />`.

The Open Graph share image is `public/og-image.svg` — replace it with a PNG/JPG
of your choosing (update the `og:image` tag in `index.html` if you rename it).

## 12. Managing animations

Most animations use [Framer Motion](https://motion.dev). A few notes:

- The page-load sequence is `src/components/BootSequence.tsx` (capped ~1.6s).
- Scroll reveals use the shared `<RevealOnScroll>` wrapper in `src/components/ui.tsx`.
- All animations respect `prefers-reduced-motion` — reduced-motion users see the
  boot sequence skip instantly and counters/typing effects resolve immediately.
- The custom cursor (`src/components/CustomCursor.tsx`) is automatically disabled
  on touch devices and small screens.

To adjust timing, look for `transition={{ duration: ..., delay: ... }}` props in
the relevant component or section file.

## 13. Deploying the website

This is a static site after `npm run build` — deploy the `dist/` folder to any
static host:

**Vercel / Netlify**
- Build command: `npm run build`
- Output directory: `dist`

**GitHub Pages**
```bash
npm run build
# push the contents of dist/ to a gh-pages branch, or use an action like
# peaceiris/actions-gh-pages
```

Before deploying, update:
- `public/sitemap.xml` — replace `https://your-domain.example` with your real domain.
- `index.html` — update the `og:image` URL if you host it elsewhere.

---

## Notes on content accuracy

Every stat, status badge, and number in this site is derived from the data file
or explicitly set to a real value — nothing is fabricated (no invented employers,
metrics, or completion statuses). When you don't know a number yet, leave the
relevant field out rather than inventing one; the `Stats` section already
computes counts from real array lengths instead of hardcoded figures.
