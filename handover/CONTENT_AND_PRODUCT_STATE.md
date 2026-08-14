# Current Content and Product State

## Live Brand and Metadata

The site source uses the title **“InstaClient — Turn Every Missed Call Into a Booked Appointment.”** Its source-level meta description positions InstaClient as an AI-powered speed-to-lead and missed-call recovery platform for med spas, plastic surgeons, and home-service businesses.

Current project domains are `instaclient.io`, `www.instaclient.io`, and the Manus preview domain. The source title is correct; a different hosted tab label is a project-settings issue rather than a component-copy issue.

## Hero

| Item | Current state |
|---|---|
| Headline | “Turn Every Missed Call and Slow Follow-Up Into an Instant Booked Appointment.” |
| Subheadline | “InstaClient helps consult-driven local businesses stop losing appointments to missed calls and slow follow-up, and turn existing customers into more immediate revenue without spending more on ads.” |
| Trust row | Original colored-icon row is preserved. The third badge states “Live in under 7 days.” |
| Phone presentation | Static mockup; avoid floating animation. |

## Industry Cards

| Card | Current approved direction |
|---|---|
| Med Spas & Cosmetic Clinics | High-ticket Botox, fillers, laser treatments, and cosmetic procedures; missed-call value modeled at $300–$1,500. |
| Surgical & Specialty Practices | Specialty procedures range from $3,000 to $25,000+; missed calls must be captured before prospects call another provider. |
| Home Services | Average ticket displayed as $850, with $6,300 monthly recovery illustration. |

The heading size was reduced to prevent the first two card labels from wrapping and misaligning the ticket rows. Preserve one-line alignment where possible.

## Pricing

| Plan | Monthly | Annual | Current differentiators |
|---|---:|---:|---|
| Recover | $297 | $247 | CallSaver, InstaForm, InstaClient Inbox, Automated Lead Nurture, Reporting & Analytics. |
| Convert | $497 | $413 | Everything in Recover, plus TextConnect, AI Appointment Setter, Reactivation Engine, Missed Appointment Recovery, and Conversion Tracking. Marked “Most Popular.” |
| Scale | $797 | $663 | Everything in Convert, plus Custom AI Playbook, Multi-Location Support, Monthly ROI Report + Strategy Call, and Dedicated Account Manager. |

Every plan has a **one-time setup fee of $499**, presented in a muted boxed row at the bottom of its card. There is **no free-trial language** on the site. Every pricing CTA says **“Get Started.”**

## ROI and Testimonial State

The visible ROI benchmark is **380% in the first 90 days**. Primary industry-recovery illustrations use $8,400 for med spas/cosmetic clinics, $12,600 for surgery/specialty practices, and $6,300 for home services. Keep displayed ticket values, ROI explanations, and calculator assumptions aligned when one figure changes.

The customer-story section uses one large featured customer-story card at left and four smaller cards at right. The featured image crop is intentionally focused on the lower, visually active part of the medical-spa interior and its content is vertically centered.

## CTA, Tracking, and Data Flow

The CTA validates name, email, and phone. It attempts to fire a GoHighLevel event using `window.__ghl_track` with `first_name`, `last_name`, `email`, `phone`, and `business.name`, then redirects after two seconds to:

```text
https://book.instaclient.io/introcall
```

There is no server-side webhook or lead-storage endpoint. If CRM capture is required beyond client-side tracking, add a verified webhook or backend endpoint in a separate scoped change.

## Explicitly Excluded Elements

The footer has no social media links and no HIPAA, security, or cookie badges. Do not reintroduce them without owner approval. The legal routes remain available at `/privacy` and `/terms`.
