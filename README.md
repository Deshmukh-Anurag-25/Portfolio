# Anurag Deshmukh — Portfolio (React)

A React + Vite rewrite of the portfolio site, using React Router for client-side routing
between the Home, Projects, About, and Contact pages.

## Structure

```
src/
  components/   Header, Footer, Layout, ResumeLink, StackIcon
  pages/        Home, Projects, About, Contact
  data/         stack.js (tech stack + icons), projects.js (project list)
  index.css     global stylesheet (design tokens as CSS variables in :root)
public/
  assets/       resume PDF
```

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/` — deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, etc).

### Deploying to GitHub Pages / a subpath

If you deploy under a subpath (e.g. `username.github.io/repo-name`), set `base`
in `vite.config.js`:

```js
export default defineConfig({
  base: '/repo-name/',
  plugins: [react()],
})
```

## Editing content

- **Tech stack**: edit `src/data/stack.js` — add/remove entries per category.
  Icons come from the Devicon CDN; entries without a real brand logo (SQL, REST APIs,
  Mockito) use a small hand-drawn outline icon instead.
- **Projects**: edit `src/data/projects.js`.
- **Resume**: replace `public/assets/Anurag_Deshmukh_Resume.pdf` (keep the same filename,
  or update the path in `src/components/ResumeLink.jsx`).
- **Colors/type**: all design tokens are CSS variables at the top of `src/index.css`.
