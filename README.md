# kenjiher.com — Personal Website

Personal portfolio site for Kenji Her. Built with React, Vite, and Tailwind CSS. Deployed via GitHub Pages. Powered by Claude.

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — build tool and dev server
- **React Router v6** (HashRouter) — client-side routing, GitHub Pages compatible
- **Tailwind CSS v3** — responsive utility-first styling

## Project Structure

```
src/
  components/
    Navbar.jsx              # Responsive navbar with hamburger menu on mobile
    PageLayout.jsx          # Shared content wrapper — max-width, padding
    blog/
      BlogCard.jsx          # Card shown on the blog listing page
      BlogPost.jsx          # Full post view
  context/
    ThemeContext.jsx        # Dark mode state + localStorage persistence
  pages/
    Home.jsx                # Landing page with social links
    About.jsx               # About me + Frisbee Lore
    Resume.jsx              # Embedded PDF resume
    Blog.jsx                # Blog listing page
    BlogPostPage.jsx        # Individual blog post page
  data/
    blogPosts.js            # Blog post data — add new posts here
  App.jsx                   # Router + layout shell
  main.jsx                  # React entry point
  index.css                 # Tailwind directives

images/                     # Static image assets
resources/                  # Resume PDF
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

Output is written to `dist/`. To preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

Deploy the contents of `dist/` to the `gh-pages` branch (or configure GitHub Pages to serve from `dist/` on `main`). The site uses `HashRouter` so all routes work correctly without server-side configuration.

## Adding a Blog Post

Open `src/data/blogPosts.js` and append an object to the array:

```js
{
  id: 'my-post-slug',          // URL-safe slug → /blog/my-post-slug
  title: 'Post Title',
  date: '2025-06-01',          // ISO date, sorted newest-first on listing page
  tags: ['tag1', 'tag2'],
  excerpt: 'Short preview shown on the listing card.',
  content: '<p>Full HTML content rendered on the post page.</p>'
}
```

## Automated Resume Updates

The workflow in `.github/workflows/update-resume.yml` pulls the latest compiled PDF from Overleaf every Monday at 8 AM UTC and commits it if it changed. It can also be triggered manually from the GitHub Actions tab.

**One-time setup — add these three secrets to your GitHub repo:**

1. Go to your repo on GitHub → **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:

| Secret | Value |
|---|---|
| `OVERLEAF_EMAIL` | Your Overleaf account email |
| `OVERLEAF_PASSWORD` | Your Overleaf account password |
| `OVERLEAF_PROJECT_ID` | The ID from your Overleaf project URL: `overleaf.com/project/`**`<ID>`** |

Once the secrets are set, push this commit and the workflow will handle the rest.

## Changelog

### 2026-03-20 (session 2)
- **Button standardization** — Unified all CTAs (Home "About me →", Resume download on desktop and mobile) to a single outlined pill style: `rounded-full`, ghost with `border-2 border-dk-primary`, color-swap on hover
- **Blog placeholder posts** — Added 4 placeholder posts (dbt, ultimate frisbee stack offense, first production pipeline lessons, 2025 reading list) to make the blog page scrollable
- **PageLayout component** — Extracted shared `PageLayout.jsx` wrapper to enforce consistent max-width, horizontal padding, and vertical padding across all content pages
- **ThemeContext** — Added `src/context/ThemeContext.jsx` to manage dark mode state with localStorage persistence and system preference detection

### 2026-03-20
- **Dark mode** — Full dark theme across all pages with a sun/moon toggle in the navbar; preference persisted to localStorage; defaults to system preference
- **Home page** — Added tagline (*"I build data pipelines by day and chase discs by night."*) and an "About me →" CTA button
- **Resume automation** — Added GitHub Actions workflow (`.github/workflows/update-resume.yml`) that downloads the compiled PDF from Overleaf on a schedule and commits it automatically
- **Resume page** — Redesigned from a raw iframe to a clean layout with a header, download button, styled PDF viewer (desktop), and a mobile fallback card
- **About page** — Fixed headshot photo alignment; now stays vertically centered relative to text at all screen sizes

## Color Scheme

| Token    | Hex       | Usage                          |
|----------|-----------|--------------------------------|
| Primary  | `#52668d` | Text, headers, interactive UI  |
| Accent   | `#e6e0ba` | Greeting highlight             |
