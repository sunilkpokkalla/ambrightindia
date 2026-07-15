# AmBrightTech LLC — Website Redesign

A modern, animated single-page site for **AmBrightTech LLC** (IT consulting,
staffing & workforce solutions — McKinney, TX), built to replace the current
WordPress site at www.ambrighttech.com.

**Stack:** React 18 · TypeScript · Vite · Tailwind CSS 3.4 · `shaders` (WebGL
hero background) · `lucide-react` icons.

## Full multi-page site — every original URL preserved

The site recreates **all 31 URLs** of the old WordPress site at the same
paths, so no existing link, bookmark or search result breaks:

- **Home** (`/`) — animated shader hero, About intro, service cards, latest news.
- **15 content pages** — `/aboutus/`, `/it-services/`, `/workforce-solutions/`,
  `/technology-practices/`, `/technology/`, `/architecture/`, `/cloud/`,
  `/devops/`, `/data-analytics/`, `/agile/`, `/labs/`, `/careers/`,
  `/project-staffing/`, `/direct-hire/`, `/product/support/`.
- **12 articles** — 7 `/news/…` posts, 1 `/blog/…` post, 2 `/policy/…` pages,
  2 `/product/…` pages.
- **Indexes & utility** — `/blog/`, `/job-openings/`, `/contact/`,
  `/contact-us/`, `/2025/07/` archive, plus a styled 404.

Routing is a tiny dependency-free client-side router (`src/router.tsx`);
`public/_redirects` makes Cloudflare Pages serve the SPA on every path.

### ⚠️ Draft copy notice

Page and article text is **professionally written draft copy** based on each
original page's title and purpose (the old site could not be fetched due to
its broken SSL). To restore the original wording verbatim: WordPress admin →
Tools → Export → All content, then replace the strings in
`src/data/pages.ts` and `src/data/posts.ts`. Job listings in
`src/pages/JobsPage.tsx` are sample placeholders.

## Run locally

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build in dist/
```

## Deploy to Cloudflare Pages (recommended)

1. Push this folder to a GitHub/GitLab repo (or use Direct Upload below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, pick the repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. **Custom domain:** in the Pages project → *Custom domains* → add
   `www.ambrighttech.com` (and `ambrighttech.com`). If the domain's DNS is
   already on Cloudflare this is one click; otherwise move the nameservers
   to Cloudflare first.
   - This also fixes the current **self-signed-certificate problem** — 
     Cloudflare issues a valid TLS certificate automatically.

**Direct Upload alternative (no git):** `npm run build`, then
**Workers & Pages → Create → Pages → Upload assets** and drop the `dist/`
folder.

### Keeping WordPress content

The old WordPress site (news posts, career pages) can stay available at a
subdomain, e.g. `blog.ambrighttech.com` or `news.ambrighttech.com`, by
pointing that subdomain's DNS at the existing host while the apex/`www` goes
to Cloudflare Pages.

## Swap in your real branding (marked with `TODO` in the code)

| What | Where |
|---|---|
| Logo (currently an "AB" monogram) | `src/components/Navbar.tsx` |
| About photos (2 placeholder URLs) | `src/components/About.tsx` |
| Service card videos (2 placeholder URLs) | `src/components/Work.tsx` |
| Nav links / copy | `src/components/Navbar.tsx`, `Hero.tsx`, `About.tsx`, `Work.tsx` |
| Contact email | `src/App.tsx` |

Drop image/video files into `public/` and change the constants at the top of
those components to `/your-file.jpg` — no other changes needed.

## Note on the `shaders` package

The hero imports `Swirl`, `ChromaFlow`, `FlutedGlass`, `FilmGrain` from
`shaders/react`. If `npm install` ever fails to resolve the `shaders`
package, install `@paper-design/shaders-react` instead and change the import
in `src/components/ShaderBackdrop.tsx` accordingly. The page never breaks
either way — an error boundary swaps in the CSS fallback background.
