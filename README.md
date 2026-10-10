# Rajkumar U — Portfolio

A premium, dark-luxury recruiter-facing portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The build output goes to `dist/` — upload that folder's contents to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Before you publish

1. **Profile photo** — `src/assets/profile.jpg` is currently a generated placeholder with your initials. Swap it for a real headshot when you have one.
2. **LinkedIn URL** — `src/data/portfolioData.js` currently points `linkedin` to a generic feed URL; update it to your actual profile link (e.g. `https://www.linkedin.com/in/your-handle/`).
3. **Project links** — the three BI/Python projects in `src/data/portfolioData.js` have empty `github` fields since no repo links were provided. Add them once the repos are public, or add a `demo` field to show a "Live Demo" button.
4. **Contact form** — it currently opens the visitor's email client with a pre-filled message (no backend needed). If you'd rather collect submissions directly, wire the `handleSubmit` function in `src/components/Contact.jsx` to a form service (e.g. Formspree) or your own API.

## Structure

```
src/
  components/   one file per section (Hero, About, Education, ...)
  data/         all copy and content lives in portfolioData.js
  hooks/        scroll-spy + scroll-progress hooks
  assets/       profile photo
public/
  resume.pdf    your resume — replace with an updated version whenever it changes
```

All content lives in `src/data/portfolioData.js`, so future edits (new project, new role, updated skills) usually only require editing that one file.
