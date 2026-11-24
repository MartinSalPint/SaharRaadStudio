# Sahar Raad Studio

One-page portfolio site for couture designer Sahar Raad. Plain static HTML/CSS/JS, no build step.

- `index.html` — hero, collection gallery (with lightbox), atelier/about, appointment enquiry
- `styles.css`, `script.js`
- `assets/img/` — **placeholder image slots** (labelled tonal fields, no artwork). They get replaced with real photos of Sahar's work.

Anything marked `PLACEHOLDER` in the source (copy, collection name, bio, address, `STUDIO_EMAIL` in `script.js`) is a guess and needs real content.

The enquiry form has no backend: it opens the visitor's email app pre-filled. Swap for Formspree/Netlify Forms later if wanted.

Run locally: `python3 -m http.server` and open http://localhost:8000.

## Design direction

Built from Sahar's own portfolio and the painting it draws on, Daniel Bérard's *Portrait de la princesse Demetre-Stirbey, née de Soyka (en habit Louis XV)* (1884, Musée des Beaux-Arts de Nice): teal satin, blush bows, cream.

- Warm off-white paper ground, taupe display caps in Marcellus with wide tracking, Cormorant/EB Garamond text
- Pencil-line botanical drawings, torn-paper hero edge, moodboard-style photo mats, oval cameo portrait
- Her three collections, each with its colour story: The Fairy Tale (sage), In Bloom (blush), Teal & Roses (turquoise, deep teal, off-white, blush)

## Swapping in real images

Each slot is a labelled SVG in `assets/img/`. Drop the real photo next to it (e.g. `look-01.jpg`), then in `index.html` replace `look-01.svg` with `look-01.jpg` (looks appear twice: `src` and `data-full`). Update the `alt` text too.

| Slot | File | Shape | Suggested size |
|---|---|---|---|
| Hero | `hero` | portrait 4:5 | 1600 × 2000 |
| The Fairy Tale | `look-01`, `look-02` | portrait 3:4 | 1200 × 1600 |
| In Bloom | `look-03`, `look-04` | portrait 3:4 | 1200 × 1600 |
| Teal & Roses | `look-05`, `look-06` | portrait 3:4 | 1200 × 1600 |
| Process (moodboard, sketch, execution) | `process-1` … `process-3` | landscape 4:3 | 1600 × 1200 |
| Portrait of Sahar | `atelier` | portrait 4:5 (shown as an oval) | 1400 × 1750 |

Images are cropped to those ratios with `object-fit: cover`, so other sizes still work. Export JPGs around 300–500 KB.
