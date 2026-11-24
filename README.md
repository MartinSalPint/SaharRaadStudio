# Sahar Raad Studio

One-page portfolio site for couture designer Sahar Raad. Plain static HTML/CSS/JS, no build step.

- `index.html` — hero, collection gallery (with lightbox), atelier/about, appointment enquiry
- `styles.css`, `script.js`
- `assets/img/` — **placeholder image slots** (labelled tonal fields, no artwork). They get replaced with real photos of Sahar's work.

Anything marked `PLACEHOLDER` in the source (copy, collection name, bio, address, `STUDIO_EMAIL` in `script.js`) is a guess and needs real content.

The enquiry form has no backend: it opens the visitor's email app pre-filled. Swap for Formspree/Netlify Forms later if wanted.

Run locally: `python3 -m http.server` and open http://localhost:8000.

## Design direction

19th-century salon portraiture (painters who rendered satin, velvet and lace in oil) meets nature: primed-linen ground with canvas grain, varnish-dark hero, moss-green atelier section, gilt frames around every image, museum wall-label captions, laurel-sprig ornaments. Fonts: Cormorant Garamond / Cormorant SC (display) and EB Garamond (text).

## Swapping in real images

Each slot is a labelled SVG in `assets/img/`. Drop the real photo next to it (e.g. `look-01.jpg`), then in `index.html` replace `look-01.svg` with `look-01.jpg` (each look appears twice: `src` and `data-full`). Update the `alt` text too.

| Slot | File | Shape | Suggested size |
|---|---|---|---|
| Hero | `hero` | portrait 4:5 | 1600 × 2000 |
| Looks I–VI | `look-01` … `look-06` | portrait 3:4 | 1200 × 1600 |
| Atelier portrait | `atelier` | portrait 4:5 | 1400 × 1750 |

Images are cropped to those ratios with `object-fit: cover`, so other sizes still work. Export JPGs around 300–500 KB.
