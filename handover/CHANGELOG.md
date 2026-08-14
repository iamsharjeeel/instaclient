# Handover Changelog

This is a condensed continuity record of the most meaningful site decisions. The full Git history remains available in the repository.

| Version / period | Change preserved in current source |
|---|---|
| `8d66728e` | Removed all free-trial language from the Pricing header and Terms of Service billing section. |
| `ff29474b` → `d4ffffbf` | Updated industry positioning and descriptions, equalized card lengths, and reduced industry heading size to prevent wrapping. |
| `dea16506` | Changed visible 90-day ROI benchmark from 640% to 380% for a more conservative, believable presentation. |
| `f96bd92e` | Reordered and tightened Scale feature copy; removed lower pricing-note content and reduced gap before FAQ. |
| `a00dc6cd` | Removed trademark symbols from pricing feature names. |
| `c46f5754` | Updated TextConnect payoff to “Convert website visitors into leads with texting.” |
| `abce5b88` → `53a64986` | Centered featured testimonial content; re-uploaded the medical-spa background to resolve prior expiring-asset failure; unified pricing CTAs. |
| `1ac1e241` → `1340c677` | Removed White-Glove Onboarding from Scale; emphasized green pricing check marks; moved the $499 one-time setup fee into boxed card footers; cropped customer-story image. |
| `9113c98e` → `85b173c9` | Restored the original colored hero trust-badge layout; third statement changed to “Live in under 7 days.” |
| `da56c6fc` | Updated hero subheadline to the current existing-customer/revenue-without-ads wording. |
| `5dd4d783` | Tested a pricing typography increase and testimonial metadata-size increase; pricing feature typography was later reverted due wrapping and density. |
| `d5151c68` onward | Rebuilt pricing from Starter/Growth/Scale into Recover/Convert/Scale; progressively refined feature framing, plan values, and Scale white-glove positioning. |

## Intentional Decisions to Preserve

The hero phone mockup must remain static, not floating. The logo bar and testimonial header should avoid unverifiable “500+” customer-count claims. Pricing cards use a single “Most Popular” badge on Convert; do not stack a separate “Best Value” label on that card. Feature terms in pricing intentionally have no ™ symbols. “Free demo” may remain in CTA copy, while “free trial” language has been removed.

## Important Historical Failure

The featured testimonial image previously failed because a temporary asset URL returned `403`. The current source uses a `/manus-storage/` asset and the archive includes a local backup. If migrating to another host, upload the local asset and update `MEDSPA_IMG` rather than relying on the existing Manus path.
