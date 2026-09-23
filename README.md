# Kitchen Pilot Consulting

A lightweight, responsive restaurant consulting website. Plain HTML and CSS; no installation, build process, JavaScript dependency, login or API keys. The repository was empty at the start; the wordmark and favicon interpret the supplied charcoal, muted-gold and off-white brief rather than reproduce an unavailable Facebook logo.

## Publish on GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Select **Deploy from a branch**, choose **main** and **/(root)**, then Save.
3. Wait for the Pages deployment to finish. Open **https://kmarshall94.github.io/KitchenPilot/** and enable **Enforce HTTPS** if it is not already enabled.
4. Complete the Formspree delivery check below before promoting the website.

## Formspree integration and delivery check

The contact page uses basic HTML POST to **https://formspree.io/f/moevwnzo**, the endpoint supplied by Kirby. This matches the static GitHub Pages stack and works without JavaScript, a build process or credentials. The optional name, required email and required message retain their labels, validation and styling. FormSubmit-only fields have been removed. Formspree handles its confirmation page and any required spam challenge; no custom redirect or paid feature is assumed. The old thanks.html remains available but is not used by this integration.

In the Formspree dashboard for this form:

1. Confirm the account email is verified and email notifications are directed to **kitchenpilotconsulting@gmail.com**.
2. After deployment, submit a test from the published contact page and complete any required spam check.
3. Confirm the submission appears in the form dashboard, then verify the notification reaches Gmail (including Spam) and that Reply-To matches the submitted email.
4. If the dashboard receives it but Gmail does not, investigate notification settings/delivery. If it is absent from the dashboard, check the provider response, spam folder in Formspree and any domain restrictions or usage limits.

Browser tests intercept the POST to validate the endpoint and submitted fields without sending email. **Live inbox delivery is not yet verified.** Keep the direct email link as a fallback. Do not put passwords, SMTP credentials or private API keys in the repository. The public form endpoint is expected to be visible.

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

If adopting a custom domain, configure it in Pages and update all canonical URLs, `og:url`, `og:image`, JSON-LD URLs, sitemap URLs, robots sitemap declaration, any Formspree redirect/domain settings and the absolute `/KitchenPilot/` links in `404.html` together. Enable HTTPS and test the form again. Do not add a CNAME until the domain is actually configured.

## Validation performed

Automated Chromium/Edge checks at **320, 375, 390, 680, 768, 1024 and 1440 pixels** across all five pages: no horizontal overflow, one H1 per page, working internal links, no browser JavaScript errors. Verified required fields, invalid email rejection, valid form acceptance, the POST destination/data through an intercepted request, and keyboard skip-link focus. Desktop homepage and mobile contact screenshots were visually inspected. This is not a full assistive-technology audit or a live inbox delivery test.

## Research informing the implementation

Reviewed September 23, 2026:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): people-first service copy, descriptive titles, semantic content and crawlable links.
- [Google title links](https://developers.google.com/search/docs/appearance/title-link): concise, distinct page titles that match visible content.
- [web.dev form design](https://web.dev/learn/forms/design-basics): visible labels above fields, single-column form, appropriate email keyboard, 16px inputs and generous targets. These informed enquiry usability; no conversion uplift is claimed.
- [Formspree HTML integration](https://help.formspree.io/articles/building-your-form/building-an-html-form): basic HTML POST with named email and message fields. Replaces the original FormSubmit integration.
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): direct deployment from the main branch root.
