# InstaClient — Project Handover

This folder is the operational handover for the **InstaClient** marketing site. It accompanies the complete React/Vite project source in this archive and is intended for a new AI agent or developer taking ownership of future work.

## What Is Included

| Item | Location | Purpose |
|---|---|---|
| Complete editable application source | `client/`, `server/`, `shared/` | React components, styles, routes, and the minimal server scaffold. |
| Project configuration | Root configuration files | Dependencies, Vite configuration, TypeScript settings, and lockfile. |
| Source snapshot in Markdown | `handover/COMPLETE_CODE.md` | One-file readable copy of all custom project source. |
| Preserved visual assets | `handover/assets/` | Local copies of the medical-spa image and testimonial portraits currently referenced through storage or external URLs. |
| Brand and visual direction | `handover/BRAND_VISION.md` | Product positioning, visual system, copy rules, and design guardrails. |
| Takeover instructions | `handover/AI_AGENT_TAKEOVER.md` | How to install, run, validate, and safely evolve the site. |
| Current content and product state | `handover/CONTENT_AND_PRODUCT_STATE.md` | Current approved messaging, pricing, features, integrations, and behavioral details. |
| Asset map | `handover/ASSET_MANIFEST.md` | Asset filenames, original runtime references, and use locations. |
| Change history | `handover/CHANGELOG.md` | Recent evolution of the current site and decisions preserved for continuity. |
| Validation record | `handover/VALIDATION.md` | Type-check/build results and known non-blocking build note. |

## Fast Start

This is a **React 19 + TypeScript + Vite + Tailwind CSS 4** static marketing site. Run the following from the project root after extracting the archive:

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

The local development server is configured to bind to the host. Use the preview URL that Vite prints. For a production validation pass, run:

```bash
pnpm run check
pnpm run build
```

## Important Handover Rule

The owner is highly sensitive to **unrequested visual changes**. Preserve the existing white/indigo/teal visual language, layout rhythm, card geometry, component ordering, and approved copy unless a requested edit clearly requires a change. When uncertain, ask before making a major visual or content decision.

> **Use this handover as the source of truth for continuity.** The `client/` directory remains the authoritative editable source; `COMPLETE_CODE.md` is a convenience snapshot only.

## Repository Hygiene

The archive intentionally excludes `node_modules`, built output, runtime logs, Git metadata, and local secrets. These are recreated by installation or supplied by the host environment. The preserved handover assets are self-contained, but their current runtime references are documented in `ASSET_MANIFEST.md`.
