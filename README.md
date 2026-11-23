# Four Colour Energy Assessment

React + Vite. Candidate-facing only (no admin, database or auth). Results are NOT stored centrally.

## Run locally
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/

## Structure
    src/data/words.js        word lists (unchanged from brief)
    src/utils/scoring.js     counts, %, dominant/secondary
    src/utils/export.js      CSV + PDF (jsPDF)
    src/components/          Assessment, EnergyCircle, Stats, Result
    src/App.jsx              landing -> assessment -> report

## Deploy: Vercel
1. Push this folder to a GitHub repo.
2. vercel.com > Add New > Project > import the repo.
3. Framework preset "Vite" is auto-detected (build `npm run build`, output `dist`). Click Deploy.

## Deploy: GitHub Pages
1. Push to GitHub. `base: './'` is already set in vite.config.js.
2. `npm run build`, then publish the dist/ folder, e.g. `npx gh-pages -d dist`.
3. Repo Settings > Pages > Source: branch `gh-pages`, folder `/ (root)`.

## Future versions
Replace the `onSubmit` handler in src/App.jsx with an API/Supabase call, and add admin routes beside the views.
