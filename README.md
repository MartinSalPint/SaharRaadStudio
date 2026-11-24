# Sahar Raad Studio

One-page portfolio site for couture designer Sahar Raad. Plain static HTML/CSS/JS, no build step.

- `index.html` — hero, collection gallery (with lightbox), atelier/about, appointment enquiry
- `styles.css`, `script.js`
- `assets/img/` — **placeholder** images. Swap in real photos with the same names (or update the `src`/`data-full` paths).

Anything marked `PLACEHOLDER` in the source (copy, collection name, bio, address, `STUDIO_EMAIL` in `script.js`) is a guess and needs real content.

The enquiry form has no backend: it opens the visitor's email app pre-filled. Swap for Formspree/Netlify Forms later if wanted.

Run locally: `python3 -m http.server` and open http://localhost:8000.
