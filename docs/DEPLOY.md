# Going live: free hosting + Sahar's own domain

The site is a static site (HTML/CSS/images), so hosting is free. The only real cost is the domain itself (~$10–15/year).

## 1. Pick the host

| Option | Free? | Works with private repo? | Notes |
|---|---|---|---|
| **GitHub Pages** | Yes | **No** (needs GitHub Pro, $4/mo) | Simplest if the repo is public |
| **Netlify** | Yes | Yes | Connects to GitHub, auto-deploys on every push |
| **Cloudflare Pages** | Yes | Yes | Same as Netlify, unlimited bandwidth |

The repo is currently private. Either make it public and use GitHub Pages, or keep it private and use Netlify.

## 2. Buy the domain

Buy at a registrar that sells at cost: **Cloudflare Registrar**, **Porkbun**, or **Namecheap**. Avoid add-ons (privacy is free at all three). Suggested: `saharraad.com` or `saharraadstudio.com`.

## 3a. GitHub Pages setup (public repo)

1. Repo **Settings → Pages → Source: GitHub Actions** (the workflow in `.github/workflows/deploy.yml` does the rest).
2. Same page, **Custom domain**: enter `www.saharraad.com` and save. This commits a `CNAME` file.
3. At the registrar's DNS settings add:
   - `CNAME` record: `www` → `martinsalpint.github.io`
   - `A` records for the bare domain (`@`), all four:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional IPv6) `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
4. Wait for DNS (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.
5. Recommended: **GitHub profile Settings → Pages → Verified domains**, add the domain. Stops anyone else hijacking it on Pages.

## 3b. Netlify setup (private repo)

1. Sign up at netlify.com with GitHub. **Add new site → Import from Git →** pick `SaharRaadStudio`.
2. Build command: empty. Publish directory: `/` (or whatever the site uses). Deploy.
3. **Domain management → Add a domain →** `saharraad.com`.
4. At the registrar, either point nameservers to Netlify (easiest, Netlify shows them), or add:
   - `A` record `@` → `75.2.60.5`
   - `CNAME` record `www` → `<your-site-name>.netlify.app`
5. HTTPS is issued automatically (Let's Encrypt) once DNS resolves.

## 4. Check it worked

- `https://saharraad.com` and `https://www.saharraad.com` both load with a padlock.
- One redirects to the other (both hosts do this automatically).
- Push a small change to `main` and confirm it appears within ~2 minutes.

## Email (optional, free)

To get `hello@saharraad.com` without paying for Google Workspace: Cloudflare Email Routing or ImprovMX forward to her Gmail for free.
