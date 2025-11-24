<!-- .github/copilot-instructions.md for capstonedesignteam7website -->
# Copilot / AI Agent Instructions — Chem Lab AR Website

This file gives concise, actionable context so an AI coding agent can be immediately productive in this repository.

1) Purpose & Big Picture
- This is a React + Vite frontend for the "Chem Lab AR" app. The site provides marketing, student sign-in, class join (barcode), quiz reports, and a download page (see `README.md`).
- Frontend is in `src/`; server/backend-related code (if present) sits under `server/`.

2) Build / Run / Deploy (explicit)
- Install: the project uses `pnpm` per README (but npm also works). Recommended commands:
  - `npm install -g pnpm`
  - `pnpm install` (or `npm install` if pnpm unavailable)
  - `pnpm dev` (runs Vite dev server)
  - `pnpm build` → outputs `dist` (Netlify publish directory per README)

3) Project structure & important files
- `src/` — all frontend source code.
  - `src/App.jsx` — top-level app. Routing is handled via `react-router-dom` (app entry `src/main.jsx` wraps `App` in `BrowserRouter`).
  - `src/main.jsx` — React root + global CSS import (`styles.css`).
  - `src/pages/` — page-level folders. Pattern: `<PageName>/<PageName>Page.jsx` + `<PageName>Page.module.css` (example: `src/pages/Download/DownloadPage.jsx`).
  - `src/components/` — UI components, often nested (cards, feedback, spinner, etc.).
  - `src/api/` — thin API wrappers (e.g., `activity.js`); they import an `api` client (look for `src/api/client` or a shared HTTP utility).
  - `src/hooks/` — custom hooks.
  - `src/layout/` — header/footer components and layout wrappers.
  - `assets/` — images & mascot assets; update carefully (paths referenced directly in components).

4) Conventions & patterns to follow
- Styling: CSS Modules are used for scoped styles — filenames ending with `.module.css` (e.g., `Footer.module.css`). Prefer module styles for component-specific CSS.
- Pages: Keep page logic/local state inside the page component. Use `src/components/` for reusable UI pieces.
- API calls: Use functions under `src/api/*`. The repository uses a shared `api` client (imported as `api` in `activity.js`) — ALWAYS search for and update that client for base URLs, headers, and auth token handling. Example: `src/api/activity.js` uses `api.get('/activities?studentId=...')`.
- Routing: `main.jsx` mounts `BrowserRouter`. Add routes in `src/App.jsx` (current `App.jsx` is simple placeholder — when adding pages, register them here or in a dedicated `routes/` file).

5) Integration points & external dependencies
- Backend: README states a Swagger-backed Node API. API endpoints are consumed via `src/api/*`. Check for any missing `client` helper — if it's not in `src/api`, search `server/` or `src/` for an HTTP wrapper.
- Deployment: Netlify (build command `pnpm build`, publish `dist`).

6) Developer workflows & checks
- Quick dev: `pnpm dev` (Vite). Use `pnpm build` to verify production build output.
- Lint/format: README claims ESLint + Prettier, but the repository doesn't include configs or scripts in `package.json`. Before adding formatting or lint changes, verify `.eslintrc*` or `.prettierrc*` exist; otherwise add them as a separate task.

7) Common tasks & examples
- Add a new page: create `src/pages/MyFeature/MyFeaturePage.jsx` + `MyFeaturePage.module.css`, then import & add a `<Route path="/my-feature" element={<MyFeaturePage/>} />` in `src/App.jsx` (or route file used by this project).
- Add an API wrapper: put functions into `src/api/<feature>.js` and wire them through the shared client. Example pattern in `src/api/activity.js`:
  - `export const getActivitiesByStudent = (studentId) => api.get(`/activities?studentId=${encodeURIComponent(studentId)}`);

8) Files/places to check first if debugging
- `src/api/` (missing `client` is a common source of breakage) — locate or implement `api` HTTP client.
- `src/main.jsx` and `src/App.jsx` — routing and app shell.
- `assets/mascot/` and `src/layout/` — often referenced by pages; broken/missing assets will show runtime 404s.

9) PR / branch conventions
- README suggests feature branches: `feature/<short-desc>` (e.g., `feature/add-login-popup`). Follow that pattern and keep PRs small.

10) When you are uncertain
- If a dev dependency or config is missing (ESLint, Prettier, API `client`), call out the absence in your change and add a small, reversible change or a TODO, don't assume global configs.

If any of these sections are unclear or you'd like me to include concrete code examples (e.g., a minimal `src/api/client.js` or a route registration snippet), tell me which part and I will iterate.
