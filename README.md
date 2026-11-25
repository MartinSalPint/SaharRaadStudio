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

## Media

Photos and films are Sahar's own work (from her Instagram, supplied by Martin). Each photo exists at 1600px (`name.jpg`, used in the lightbox) and 800px (`name-800.jpg`, used on the page).

- `assets/img/<piece>/` — `fairy-tale`, `in-bloom`, `teal-roses`, `bridal`: `look-*`, `detail-*`, `moodboard`, `sketch*`, `process`, and `worn-*` (The Fairy Tale on its owner's engagement day)
- `assets/video/` — `intro` (opening film), `outro` (closing film), one film per piece; each has a `-poster.jpg`. All muted, no audio track, H.264 with fast start.
- `assets/img/sahar.jpg` — portrait of Sahar (About section, 400×400; a larger original would look sharper).

To swap a photo, replace both sizes with the same names. To re-encode a video: `ffmpeg -i in.mp4 -an -vf scale=540:-2 -c:v libx264 -crf 30 -movflags +faststart out.mp4`.
