# Asset Manifest

## Preserved Assets

The archive includes local handover copies so a future agent does not depend solely on existing storage links. Their current runtime URLs remain listed below; a new host may either upload the local copies and update the references or serve them from its own static directory.

| Local archive file | Current runtime reference | Current use | Notes |
|---|---|---|---|
| `handover/assets/clientflow-medspa-cropped_5326c33c.png` | `/images/medspa-cropped.webp` | Featured testimonial background | Served as compressed WebP from `client/public/images/`. |
| `handover/assets/dr-golla_313053c9.png` | `/images/dr-golla.webp` | Dr. Dinakar Golla testimonial avatar | Compressed WebP. |
| `handover/assets/dr-worry_35b8abe2.png` | `/images/dr-worry.webp` | Dr. James Worry testimonial avatar | Compressed WebP. |
| `handover/assets/external/amanda-chen-stock.jpg` | `/images/amanda-chen.jpg` | Dr. Amanda Chen avatar | Local copy; Unsplash URL no longer used at runtime. |
| `handover/assets/external/michael-thornton-stock.jpg` | `/images/michael-thornton.jpg` | Michael Thornton avatar | Local copy; Unsplash URL no longer used at runtime. |
| `handover/assets/external/rachel-nguyen-stock.jpg` | `/images/rachel-nguyen.jpg` | Dr. Rachel Nguyen avatar | Local copy; Unsplash URL no longer used at runtime. |

## Font Assets

Fonts are loaded from Google Fonts in `client/index.html` and are not bundled locally: **Plus Jakarta Sans**, **Inter**, and **JetBrains Mono**. If an offline or self-hosted deployment is required, download and self-host the relevant font files before removing the external font stylesheet.

## Asset Replacement Guidance

When replacing the featured medical-spa image, preserve the wide crop and use `object-fit: cover`. Avoid a high ceiling/wall-heavy crop, since it leaves too much empty space behind the testimonial content. The card’s visual balance depends on active architecture and furniture remaining visible behind the centered text.
