# Kitchen Pilot Consulting

A lightweight, responsive restaurant consulting website. Plain HTML and CSS; no installation, build process, JavaScript dependency, login or API keys. The repository was empty at the start; the wordmark and favicon interpret the supplied charcoal, muted-gold and off-white brief rather than reproduce an unavailable Facebook logo.

## Publish on GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Select **Deploy from a branch**, choose **main** and **/(root)**, then Save.
3. Wait for the Pages deployment to finish. Open **https://kmarshall94.github.io/KitchenPilot/** and enable **Enforce HTTPS** if it is not already enabled.
4. Complete the form activation below before promoting the website.

## Required one-time form activation

The contact page uses [FormSubmit](https://formsubmit.co/documentation), an HTTPS form relay to **kitchenpilotconsulting@gmail.com**. No credentials are stored in the website. The visitor completes FormSubmit's spam check before returning to the thank-you page. Default reCAPTCHA remains enabled, and a hidden honeypot provides another spam filter. There is also a direct email fallback.

1. From the **published contact page**, submit a test enquiry using an email address you can check. Complete the spam check.
2. Open **kitchenpilotconsulting@gmail.com**, check the inbox and spam folder, and follow FormSubmit's activation link. Only the mailbox owner can complete this step.
3. Submit a **second** test enquiry after activation. Verify delivery, confirm the Reply-To address is the one entered, and confirm the return to `thanks.html`. Do not assume the initial activation submission was delivered as a normal enquiry.
4. Optional: FormSubmit supplies a random endpoint token after confirmation. Replace the email portion of the form's `action` with that token if desired. The public contact email is still intentionally visible on the site.

Email delivery has **not** been verified from this development environment. Browser testing intercepted submission without contacting the provider or sending mail. FormSubmit is an external dependency; if delivery fails, check activation/spam and use direct email while investigating. It retains submission archives for 30 days according to its current documentation. Review provider terms/privacy for your business before launch. Never add SMTP credentials or other secrets to this public repository.

## Content and maintenance

- Edit `index.html` for homepage copy, scope and price; `contact.html` for enquiries; `assets/style.css` for appearance.
- The brief gives $3,000 but does not specify currency. The website says scope, currency and full fee are confirmed before work begins. Set a specific currency in both pages when confirmed. No currency was invented in structured data.
- The only experience claim is the supplied “over a decade of restaurant industry experience.” No invented testimonials, locations, results or guarantees.
- `privacy.html` explains contact data processing; `thanks.html` and `404.html` are marked `noindex`.
- The SVG mark and 1200 × 630 PNG social card are local, original assets. System fonts avoid external font requests. The site has no analytics or advertising scripts.

## SEO and domain strategy

The canonical base is `https://kmarshall94.github.io/KitchenPilot/`. Home links use `./`; the canonical homepage omits `index.html`. Titles and descriptions are unique, content is semantic and crawlable, and Organization JSON-LD contains only supplied facts. Open Graph and Twitter metadata use the local PNG social card. The sitemap lists only indexable pages.

Submit `https://kmarshall94.github.io/KitchenPilot/sitemap.xml` in Google Search Console after verifying a URL-prefix property. Verification tokens must come from your account. No search ranking or rich-result eligibility is guaranteed.

**Project-site robots limitation:** search engines read `/robots.txt` at the origin root, not `/KitchenPilot/robots.txt`. This repo includes a deployment-ready file, but it cannot control the origin root. If you also maintain `KMarshall94.github.io`, place or merge the sitemap declaration in that repository's root robots.txt. Otherwise submit the sitemap directly in Search Console; do not rely on the project-level robots file.

If adopting a custom domain, configure it in Pages and update all canonical URLs, `og:url`, `og:image`, JSON-LD URLs, sitemap URLs, robots sitemap declaration, the form `_next` URL and the absolute `/KitchenPilot/` links in `404.html` together. Enable HTTPS and test the form again. Do not add a CNAME until the domain is actually configured.

## Validation performed

Automated Chromium/Edge checks at **320, 375, 390, 680, 768, 1024 and 1440 pixels** across all five pages: no horizontal overflow, one H1 per page, working internal links, no browser JavaScript errors. Verified required fields, invalid email rejection, valid form acceptance, the POST destination/data through an intercepted request, and keyboard skip-link focus. Desktop homepage and mobile contact screenshots were visually inspected. This is not a full assistive-technology audit or a live inbox delivery test.

## Research informing the implementation

Reviewed September 23, 2026:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): people-first service copy, descriptive titles, semantic content and crawlable links.
- [Google title links](https://developers.google.com/search/docs/appearance/title-link): concise, distinct page titles that match visible content.
- [web.dev form design](https://web.dev/learn/forms/design-basics): visible labels above fields, single-column form, appropriate email keyboard, 16px inputs and generous targets. These informed enquiry usability; no conversion uplift is claimed.
- [FormSubmit documentation](https://formsubmit.co/documentation) and [help](https://formsubmit.co/help): email activation, Reply-To, absolute return URL and spam protection.
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): direct deployment from the main branch root.
