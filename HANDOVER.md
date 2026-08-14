# Handover

InstaClient marketing site is a **static Vite SPA**. Do not add a Node server unless a feature needs one.

## 2026-08-14 — Vercel publish prep

- Removed Manus runtime, storage proxy, debug collector, and Express production server.
- Build is `vite build` → `dist/public`. `vercel.json` sets Vite + SPA rewrite.
- Testimonial images now ship from `client/public/images/` (no `/manus-storage/`).
- Analytics loads only when `VITE_ANALYTICS_*` are set.
- Legal emails updated from `@clientflow.ai` to `@instaclient.io`.

## Files touched

- `vite.config.ts`, `package.json`, `vercel.json`, `client/index.html`, `client/src/main.tsx`
- `client/src/components/TestimonialsSection.tsx`, `Footer.tsx`, `ErrorBoundary.tsx`
- `client/src/pages/PrivacyPolicy.tsx`, `TermsOfService.tsx`
- `client/public/images/`, `favicon.svg`, `robots.txt`, `sitemap.xml`

## Pending (manual)

- Attach `instaclient.io` / `www` on the Vercel project.
- Create `privacy@`, `legal@`, `hello@` mailboxes on instaclient.io.
- Owner should validate testimonial names, quotes, and results before a public campaign.
- Optional: set Umami `VITE_ANALYTICS_*` in Vercel env.
