# Asset Manifest

## Preserved Assets

The archive includes local handover copies so a future agent does not depend solely on existing storage links. Their current runtime URLs remain listed below; a new host may either upload the local copies and update the references or serve them from its own static directory.

| Local archive file | Current runtime reference | Current use | Notes |
|---|---|---|---|
| `handover/assets/clientflow-medspa-cropped_5326c33c.png` | `/manus-storage/clientflow-medspa-cropped_5326c33c.png` | Featured testimonial background | Cropped medical-spa interior. Replace runtime reference if moving outside the current host. |
| `handover/assets/dr-golla_313053c9.png` | `/manus-storage/dr-golla_313053c9.png` | Dr. Dinakar Golla testimonial avatar | User-supplied image preserved locally. |
| `handover/assets/dr-worry_35b8abe2.png` | `/manus-storage/dr-worry_35b8abe2.png` | Dr. James Worry testimonial avatar | User-supplied image preserved locally. |
| `handover/assets/external/amanda-chen-stock.jpg` | Unsplash URL in `TestimonialsSection.tsx` | Dr. Amanda Chen avatar | Current source retains external URL; local copy is archival. |
| `handover/assets/external/michael-thornton-stock.jpg` | Unsplash URL in `TestimonialsSection.tsx` | Michael Thornton avatar | Current source retains external URL; local copy is archival. |
| `handover/assets/external/rachel-nguyen-stock.jpg` | Unsplash URL in `TestimonialsSection.tsx` | Dr. Rachel Nguyen avatar | Current source retains external URL; local copy is archival. |

## Font Assets

Fonts are loaded from Google Fonts in `client/index.html` and are not bundled locally: **Plus Jakarta Sans**, **Inter**, and **JetBrains Mono**. If an offline or self-hosted deployment is required, download and self-host the relevant font files before removing the external font stylesheet.

## Asset Replacement Guidance

When replacing the featured medical-spa image, preserve the wide crop and use `object-fit: cover`. Avoid a high ceiling/wall-heavy crop, since it leaves too much empty space behind the testimonial content. The card’s visual balance depends on active architecture and furniture remaining visible behind the centered text.
