Anurag Deshmukh — Portfolio
A personal portfolio site built with React, Vite, and React Router. Backend-leaning,
Spring Boot–flavored projects on the frontend of a fast, static React app.
Live stack: live GitHub and LeetCode stats cards, a hand-picked tech stack with real
brand logos, and a resume that opens and downloads on click.
---
Pages
Route	Description
`/`	Hero, short bio, grouped tech stack, live GitHub + LeetCode stats
`/projects`	Project log — stack, status, and description for each build
`/about`	Education, honors & certifications (with links), how I work
`/contact`	Email, phone, GitHub, LinkedIn, LeetCode, resume download
Tech stack
React 19 + Vite — build tooling and dev server
React Router — client-side routing between pages
Plain CSS with design tokens as CSS custom properties (no CSS framework)
IBM Plex Sans / IBM Plex Mono for type
Brand logos via the Devicon and
Simple Icons CDNs, with hand-drawn
fallback icons for the handful of entries (SQL, REST APIs, Mockito) that don't have one
Getting started
```bash
npm install
npm run dev
```
Opens at http://localhost:5173.
Scripts
Command	What it does
`npm run dev`	Start the Vite dev server with hot reload
`npm run build`	Production build, output to `dist/`
`npm run preview`	Serve the production build locally to sanity-check
`npm run lint`	Lint the project with oxlint
Project structure
```
public/
  assets/                 resume PDF, served as a static file
src/
  components/
    Header.jsx            nav bar + mobile menu toggle
    Footer.jsx             social links footer
    Layout.jsx             shared page shell (header + <Outlet/> + footer)
    ResumeLink.jsx         resume button: opens in a new tab AND forces a download
    StackIcon.jsx           renders a brand logo <img> or a generic outline <svg>
  pages/
    Home.jsx, Projects.jsx, About.jsx, Contact.jsx
  data/
    stack.js               tech stack, grouped, with icon sources
    projects.js             project list — name, stack, status, bullets, link
  index.css                design tokens (colors/type/spacing) + all component styles
  App.jsx                  route definitions
  main.jsx                  entry point, wraps <App/> in <BrowserRouter>
```
Editing content
Almost everything lives in data files or CSS variables, not scattered across JSX —
edit these and nothing else, unless you're changing structure:
Tech stack — `src/data/stack.js`. Each group is `{ title, items: [{ name, icon }] }`.
`icon` is either `{ type: 'img', src }` for a real brand logo, or
`{ type: 'generic', path, extra? }` for a hand-drawn SVG path (used when no brand logo exists).
Projects — `src/data/projects.js`. Each entry is `{ name, stack, status, bullets, link }`.
Resume — replace `public/assets/Anurag_Deshmukh_Resume.pdf` (keep the filename, or
update the path in `src/components/ResumeLink.jsx`).
Colors / type / spacing — all design tokens are CSS variables at the top of
`src/index.css` (`:root { --bg, --ink, --accent, ... }`). Changing them re-themes the
whole site.
Live stats cards — the GitHub and LeetCode `<img>` sources are in `src/pages/Home.jsx`
inside the `StatCard` calls. Both fail gracefully to a text fallback if the widget service
is ever down.
Deployment
```bash
npm run build
```
Deploy the resulting `dist/` folder to any static host — Vercel, Netlify, Cloudflare
Pages, or GitHub Pages all work with zero extra config.
GitHub Pages / any subpath deploy: if the site won't live at the domain root
(e.g. `username.github.io/repo-name`), set `base` in `vite.config.js`:
```js
export default defineConfig({
  base: '/repo-name/',
  plugins: [react()],
})
```
Contact
Email: anuragdeshmukh2575@gmail.com
GitHub: @Deshmukh-Anurag-25
LinkedIn: anurag-deshmukh
LeetCode: Anurag-Deshmukh-27
