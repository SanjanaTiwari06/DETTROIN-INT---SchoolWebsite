# DETTROIN-INT-Sanjana-Website

Redesign of **Vasant Valley School** (https://www.vasantvalley.org/) — built as a
multi-page React application for the Dettroin Full Stack Developer Internship,
Round 1 assignment.

## Candidate Details
- **Full Name:** Sanjana <!-- add your surname -->
- **Intern ID:** <!-- add your Intern ID -->
- **Email Address:** <!-- add your email -->
- **GitHub Username:** <!-- add your GitHub username -->
- **Selected Website:** Vasant Valley School — https://www.vasantvalley.org/

## Live Demo
<!-- add your Vercel deployment link here once deployed -->

## Technologies Used
- **React 19** (Vite)
- **React Router v7** — each section is its own route/page, not a single scrolling page
- **Bootstrap 5** + **Bootstrap Icons** for layout primitives and components
- Custom CSS design system (tokens for colour, type, spacing) on top of Bootstrap
- Google Fonts — Fraunces (display), Work Sans (body), Space Mono (labels)

## Pages / Routes
| Route            | Page          |
|------------------|---------------|
| `/`              | Home          |
| `/about`         | About         |
| `/academics`     | Academics     |
| `/campus-life`   | Campus Life   |
| `/news`          | News & Events |
| `/contact`       | Contact       |
| any other path   | 404 Not Found |

## Key Improvements Over the Original
- **True multi-page structure** using React Router — About, Academics, Campus Life,
  News, and Contact each load as a dedicated page (not anchors on one long page),
  matching how a real school site is typically browsed and bookmarked.
- **Visual identity grounded in the school's own colours** (maroon & beige) instead
  of a generic template palette, paired with a serif display face for an
  institutional, heritage feel.
- **Sticky, route-aware navbar** — the active page is highlighted via
  `NavLink`, and the mobile menu auto-collapses on navigation.
- **Componentised architecture**: shared `SiteNavbar` / `SiteFooter`, and
  page-level components for each route, so content, styling and behaviour are
  cleanly separated.
- **Interactive tabs built with React state** (Academics pathways, News/Events/
  Notices/Achievements) rather than relying on Bootstrap's jQuery-style JS toggles.
- **Working contact form** (client-side validation + success state) — ready to be
  wired up to a real backend/email service later.
- **Responsive facilities grid**, scroll-to-top on route change, and accessible
  focus states throughout.

## Project Structure
```
├── index.html
├── vite.config.js
├── vercel.json
├── public/
│   └── images/            # placeholder images — replace before final submission
└── src/
    ├── main.jsx            # BrowserRouter + global CSS/Bootstrap imports
    ├── App.jsx             # <Routes> definitions
    ├── index.css           # design tokens + all component styles
    ├── components/
    │   ├── SiteNavbar.jsx
    │   ├── SiteFooter.jsx
    │   └── ScrollToTop.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Academics.jsx
        ├── CampusLife.jsx
        ├── News.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

## Running Locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Deployment (Vercel)
This is a standard Vite React app:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- `vercel.json` rewrites all routes to `index.html` so client-side routing
  (`/about`, `/academics`, etc.) works correctly on refresh/direct link.

## Notes
- Images under `public/images/` are **placeholders** generated for layout purposes
  and must be replaced with real/licensed photography before final submission.
- `node_modules/` is git-ignored and must not be uploaded, per assignment guidelines.
