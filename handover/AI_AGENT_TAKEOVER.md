# AI Agent Takeover Guide

## Mission

Maintain and extend **InstaClient**, an AI-powered speed-to-lead, missed-call recovery, appointment-booking, and reactivation platform for consult-driven local businesses. The public site is designed for med spas and cosmetic clinics, surgical and specialty practices, and home-service businesses.

## Technical Map

| Area | Current implementation | Notes |
|---|---|---|
| Framework | React 19, TypeScript, Vite | Frontend-only marketing application. |
| Styling | Tailwind CSS 4 with project utilities in `client/src/index.css` | Color variables use OKLCH. Do not rewrite them casually. |
| Motion | Framer Motion | Used for restrained viewport-triggered section entrances. |
| Routing | Wouter | Routes: `/`, `/privacy`, `/terms`, `/404`. |
| Icons | Lucide React | Continue using it for new UI iconography. |
| Form behavior | `CTASection.tsx` | Validates required fields, fires GoHighLevel tracking if available, then redirects after two seconds. |
| Tracking | `client/index.html` | External GoHighLevel tracking script uses ID `tk_fae0a0e3567a4e3fa237a910fbb5747a`. |
| Analytics | `client/index.html` | Host-injected `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID`. |

## Essential Commands

```bash
pnpm install --frozen-lockfile
pnpm run dev
pnpm run check
pnpm run build
```

The build is expected to pass without adding a backend. Do not add server dependencies unless the requested feature truly needs one. A GoHighLevel webhook has **not** been added; the current form tracks client-side and redirects to `https://book.instaclient.io/introcall`.

## Component Ownership

| Component | Responsibility | High-risk details |
|---|---|---|
| `Navbar.tsx` | Header navigation and brand lockup | Brand is `InstaClient`, one word; “Insta” is black and “Client” is blue. |
| `HeroSection.tsx` | Hero copy, CTA buttons, phone mockup, three trust badges | Phone mockup is intentionally static and visible above the fold. Do not convert it to a floating animation. |
| `LogoBar.tsx` | “Trusted by” industry name strip | No numerical customer-count claim. Keep the responsive rows balanced on small screens. |
| `IndustriesSection.tsx` | Three industry cards and revenue/ticket illustrations | Card headings were reduced to fit one line and align their stat rows. |
| `HowItWorks.tsx` and `SpeedBanner.tsx` | Core mechanism and speed proof | Setup language is “under 7 days,” not minutes. |
| `FeaturesSection.tsx` | Feature benefits | Use “leads,” not “inquiries.” |
| `ROISection.tsx` | ROI benchmark and calculator modal | Current key benchmark is **380% ROI in the first 90 days**; keep calculator math and stated benchmarks consistent. |
| `PricingSection.tsx` | Recover / Convert / Scale pricing cards | Convert is marked “Most Popular.” All card CTAs say “Get Started.” No free-trial language. |
| `TestimonialsSection.tsx` | Customer stories and featured image card | Maintain the featured-card image geometry exactly; see the visual warning below. |
| `CTASection.tsx` | Demo request form and calendar handoff | Redirect and GHL event are current behavior. |
| `Footer.tsx` | Product/legal links | No social links or HIPAA/security/cookie badges. |

## Visual Warning: Featured Customer Story

The featured Dr. Amanda Chen card in `TestimonialsSection.tsx` is intentionally implemented with direct inline positioning styles:

```tsx
style={{ position: 'relative', minHeight: '520px' }}
```

The background image and overlay are absolute children, and the content is vertically centered. This was used because previous CSS-class-only attempts led to display failures in the browser. Preserve the parent `position`, `minHeight`, image `objectFit: 'cover'`, overlay, and centered content structure when editing this card.

## Browser Tab Title

The source title in `client/index.html` is currently:

```html
<title>InstaClient — Turn Every Missed Call Into a Booked Appointment</title>
```

If a hosted Manus preview continues to show “ClientFlow,” the host project’s display name or injected `VITE_APP_TITLE` may override the source-level title. Update the hosting/project setting to **InstaClient** as well as preserving the source title.

## Quality Controls

Before handing back a material site change, run `pnpm run check` and `pnpm run build`. Inspect the hero, industry cards, pricing cards, testimonials, CTA form, Privacy page, and Terms page at both desktop and mobile widths. Check live visual assets instead of assuming that an external or storage URL still resolves.

## Content and Compliance Caution

The current testimonial copy, business names, outcomes, and revenue figures are legacy site content approved in the preceding workstream. Before using the site for a public campaign, the owner should independently validate all customer names, images, quotes, results, and business affiliations. Do not create new fictional customer reviews, ratings, or testimonials.
