# InstaClient

Marketing site for InstaClient — AI speed-to-lead, missed-call recovery, booking, and reactivation for consult-driven local businesses.

React 19 + TypeScript + Vite + Tailwind CSS 4. Static SPA, deployed on Vercel.

## Local

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

```bash
pnpm run check
pnpm run build
pnpm run preview
```

## Vercel

Git-push to `main` deploys. Framework is Vite; output directory is `dist/public`; SPA routes rewrite to `index.html`.

Optional env vars (all environments if used):

| Variable | Purpose |
|---|---|
| `VITE_ANALYTICS_ENDPOINT` | Umami origin, no trailing slash |
| `VITE_ANALYTICS_WEBSITE_ID` | Umami website id |

Omit both to disable analytics. Copy `.env.example` to `.env.local` for local overrides.

After first deploy: add `instaclient.io` and `www.instaclient.io` in the Vercel domain settings.
