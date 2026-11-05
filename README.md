# SRM卝SAMIヅ — Personal Portfolio (single-file site)

Md. Sami Miah's portfolio built with HTML5, CSS3 and vanilla JavaScript. The whole site lives in `index.html`; a hash router provides eight views (`#home`, `#about`, `#services`, `#portfolio`, `#case-studies`, `#testimonials`, `#skills`, `#contact`) plus `#services/<id>`, `#case-studies/<id>`, `#contact/<service-id>` and a 404 view.

> Status: code-checked with a Node/jsdom smoke test (all routes render, filters, theme toggle, menu and form validation respond). It has **not** been deployed or tested in real browsers, on real devices or with Lighthouse. Do those checks yourself using the checklist below.

## Files

| File | Purpose |
|---|---|
| `index.html` | The complete website (HTML + CSS + JS). Edit the `CONFIG` object at the top of the script. |
| `assets/portrait.jpg` | Your portrait (already included, resized). |
| `robots.txt`, `sitemap.xml` | Optional SEO files. Update the domain if you use a different URL. |
| `assets/og-image.jpg` | **Optional, you create it.** 1200×630 px social-share image referenced in the meta tags. |
| `assets/projects/*.jpg` | **Optional.** Project thumbnails (set the `thumb` path of each project). |
| `assets/certificates/*.jpg` | **Optional.** Certificate images. |

## Deploy on GitHub Pages
1. You already own a repository named `srmsami-fl.github.io`. Either use it (replace its contents) or create a new repository.
2. Upload `index.html`, `robots.txt`, `sitemap.xml` and the `assets/` folder to the repository root on the `main` branch.
3. Open **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute or two the site appears at `https://srmsami-fl.github.io/`. If you use another URL, update `CONFIG.site.url`, the `<link rel="canonical">`, the Open Graph URLs, `robots.txt` and `sitemap.xml`.
5. Optional: add a custom domain under Settings → Pages and enable HTTPS.

## Make the contact form work
1. Create a free form at formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Paste it into `CONFIG.contact.formEndpoint`.
3. Submit a real test message and confirm it reaches your inbox.

Until an endpoint is set, the form validates and then offers a pre-filled email and WhatsApp link. It never claims a message was sent.

## Customisation checklist
- [ ] `CONFIG.person`: name, title, bio paragraphs, location, headline.
- [ ] Confirm `person.availability` ("Open to international clients") is accurate.
- [ ] Confirm `person.education` entries (taken from your GitHub README).
- [ ] Confirm `contact.whatsappNumber` is active on WhatsApp.
- [ ] Fill `socials` for Instagram and Facebook (your sources disagree on `srmsami.fl` vs `srmsami_fl`), LinkedIn, Behance, Dribbble. Empty URLs stay hidden.
- [ ] Replace the three "sample" projects and the sample case study with real work, then set `status: "real"`.
- [ ] Add project thumbnails and set `thumb` paths.
- [ ] Add real testimonials (`CONFIG.testimonials`) only with permission and a source link.
- [ ] Add certifications and achievements only when verifiable.
- [ ] Turn on `skills` items you can confirm (Premiere Pro, Canva, Google Analytics, Meta Business Suite are currently hidden).
- [ ] Review each service's tools list; delete anything you are not comfortable claiming.
- [ ] Set `pricing.enabled` and plans only with prices you have decided on.
- [ ] Create `assets/og-image.jpg`.

## Testing checklist
- [ ] Open every route directly by URL, e.g. `/#skills`, and refresh the page.
- [ ] Use browser Back/Forward between routes.
- [ ] Try an unknown route such as `/#nothing` (should show the 404 view).
- [ ] Check widths 320, 375, 768, 1024 and 1440 px: no sideways scrolling.
- [ ] Keyboard only: Tab through nav, menu button, filters, form; focus rings visible; Esc closes the mobile menu.
- [ ] Switch light/dark theme and reload.
- [ ] Portfolio filters and search work.
- [ ] Submit the form empty (errors), then with valid data (success, or the unconfigured notice).
- [ ] Click every external link; each should open in a new tab.
- [ ] Run Lighthouse and the WAVE accessibility checker and record real scores.
- [ ] Test with reduced-motion enabled in your OS.

## SEO limits (important)
Hash-routed views inside one HTML file are **not** independently crawlable pages. Search engines treat `site/#about` and `site/#services` as the same URL as `site/`. Title and meta description are updated by JavaScript per view, which helps users and social sharing but does not give each view its own search listing. The static fallback content and JSON-LD in the HTML help the home URL.

If search visibility for individual pages becomes a priority, a future upgrade is to split the site into separate files (`about.html`, `services.html`, `portfolio.html`, ...) sharing one CSS file, each with its own title, description, canonical URL and sitemap entry. The single-file version can remain as your simple edition.

## Research notes (what was verified)
Confirmed from your own pages (srmsamifl.vercel.app, GitHub, Linktree, bito.li): name and brand, email, phone, location label, services wording, social links listed in the Linktree/bito.li pages, GitHub repositories (3), CV link, Medium and DEV profiles, education/training lines in your GitHub README.

Not verified: Instagram and Facebook URLs (Instagram blocks automated access; README uses `srmsami_fl`), any client work, reviews, certificates, earnings, traffic or audience numbers, years of experience. None of these appear on the site.
