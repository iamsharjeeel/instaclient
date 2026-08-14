# Handover

InstaClient marketing site is a **static Vite SPA**. Do not add a Node server unless a feature needs one.

## 2026-08-14 — Luxury scroll / motion

- Desktop Lenis inertial scroll (`client/src/components/SmoothScroll.tsx`); native scroll on touch and `prefers-reduced-motion`.
- Shared motion contract in `client/src/lib/motion.ts` (ease `[0.22, 1, 0.36, 1]`, 12px enter, ~0.8s).
- Hash links use Lenis `scrollTo`. Featured testimonial image has a subtle scale on scroll.
- Below-fold Home sections are lazy-loaded. Large PNGs shipped as WebP.

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

## Live

- Production: https://instaclient-zeta.vercel.app
- Dashboard: https://vercel.com/iamsharjeeel-3966s-projects/instaclient

## Pending (manual)

- Attach `instaclient.io` / `www` on the Vercel project.
- Create `privacy@`, `legal@`, `hello@` mailboxes on instaclient.io.
- Owner should validate testimonial names, quotes, and results before a public campaign.
- Optional: set Umami `VITE_ANALYTICS_*` in Vercel env.
