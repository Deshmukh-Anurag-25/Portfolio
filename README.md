<div align="center">

# Anurag Deshmukh — Portfolio

Backend-leaning full-stack developer. Spring Boot on the server, React on the frontend,
and this site to show the work.

**[anurag25portfolio.netlify.app →](https://anurag25portfolio.netlify.app/)**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)

</div>

---

## Contents

- [Overview](#overview)
- [Pages](#pages)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Editing content](#editing-content)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

A single-page-app portfolio built with React, Vite, and React Router — four routed pages,
a tech stack section with real brand logos, live GitHub and LeetCode stats cards, and a
resume link that opens and downloads in one click. No CSS framework: the whole visual
system is a small set of CSS custom properties in `src/index.css`.

## Pages

| Route       | Description                                                       |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Hero, short bio, grouped tech stack, live GitHub + LeetCode stats  |
| `/projects` | Project log — stack, status, and description for each build       |
| `/about`    | Education, honors & certifications (with links), how I work        |
| `/contact`  | Email, phone, GitHub, LinkedIn, LeetCode, resume download          |

## Tech stack

- **React 19** + **Vite** — build tooling and dev server
- **React Router** — client-side routing between pages
- Plain CSS, design tokens as CSS custom properties — no framework
- **IBM Plex Sans** / **IBM Plex Mono** for type
- Brand logos via the [Devicon](https://github.com/devicons/devicon) and
  [Simple Icons](https://github.com/simple-icons/simple-icons) CDNs, with hand-drawn
  fallback icons for entries that don't have one (SQL, REST APIs, Mockito)
- Deployed on **Netlify**

## Getting started

```bash
git clone <this-repo>
cd portfolio-react
npm install
npm run dev
```

Opens at **http://localhost:5173**.

## Scripts

| Command            | What it does                                        |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with hot reload            |
| `npm run build`     | Production build, output to `dist/`                  |
| `npm run preview`   | Serve the production build locally to sanity-check   |
| `npm run lint`      | Lint the project with oxlint                         |

## Project structure

```
public/
  assets/                  resume PDF, served as a static file
src/
  components/
    Header.jsx             nav bar + mobile menu toggle
    Footer.jsx              social links footer
    Layout.jsx              shared page shell (header + <Outlet/> + footer)
    ResumeLink.jsx          resume button — opens in a new tab AND forces a download
    StackIcon.jsx            renders a brand logo <img> or a generic outline <svg>
  pages/
    Home.jsx, Projects.jsx, About.jsx, Contact.jsx
  data/
    stack.js                tech stack, grouped, with icon sources
    projects.js              project list — name, stack, status, bullets, link
  index.css                 design tokens (colors/type/spacing) + all component styles
  App.jsx                   route definitions
  main.jsx                   entry point, wraps <App/> in <BrowserRouter>
```

## Editing content

Everything content-related lives in data files or CSS variables, not scattered across JSX:

- **Tech stack** — `src/data/stack.js`. Each group is `{ title, items: [{ name, icon }] }`.
  `icon` is `{ type: 'img', src }` for a real brand logo, or `{ type: 'generic', path, extra? }`
  for a hand-drawn SVG path.
- **Projects** — `src/data/projects.js`. Each entry is `{ name, stack, status, bullets, link }`.
- **Resume** — replace `public/assets/Anurag_Deshmukh_Resume.pdf` (keep the filename, or
  update the path in `src/components/ResumeLink.jsx`).
- **Colors / type / spacing** — CSS variables at the top of `src/index.css`
  (`:root { --bg, --ink, --accent, ... }`). Changing them re-themes the whole site.
- **Live stats cards** — GitHub and LeetCode `<img>` sources are in `src/pages/Home.jsx`,
  inside the `StatCard` calls. Both fail gracefully to a text fallback if the widget
  service is ever down.

## Deployment

Live at **[anurag25portfolio.netlify.app](https://anurag25portfolio.netlify.app/)**, built
and deployed on Netlify.

```bash
npm run build
```

deploys the `dist/` folder — connect the repo to Netlify (or Vercel, Cloudflare Pages,
GitHub Pages) with:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

**GitHub Pages / any subpath deploy:** if the site won't live at the domain root
(e.g. `username.github.io/repo-name`), set `base` in `vite.config.js`:

```js
export default defineConfig({
  base: '/repo-name/',
  plugins: [react()],
})
```

## Contact

- Email: anuragdeshmukh2575@gmail.com
- GitHub: [@Deshmukh-Anurag-25](https://github.com/Deshmukh-Anurag-25)
- LinkedIn: [anurag-deshmukh](https://www.linkedin.com/in/anurag-deshmukh-bb3b53309/)
- LeetCode: [Anurag-Deshmukh-27](https://leetcode.com/u/Anurag-Deshmukh-27/)
