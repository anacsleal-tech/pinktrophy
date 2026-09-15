# PinkTrophy website — launch guide

This folder is ready for GitHub Pages. No build tools are required.

## 1. Preview locally
Open `index.html` in a browser. The site is static HTML/CSS/JS.

## 2. Create the GitHub repository
1. Sign in to GitHub.
2. Click **New repository**.
3. Name it `pinktrophy` (or `pinktrophy-website`).
4. Set it to **Public** if you are using standard GitHub Pages.
5. Create the repository without adding starter files.
6. Upload the complete contents of this folder — `index.html`, `styles.css`, `script.js`, `CNAME` (after domain purchase), and the `assets` folder.
7. Commit the files.

## 3. Turn on GitHub Pages
1. Repository → **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Branch: `main`; folder: `/ (root)`; click **Save**.
4. GitHub will provide a temporary `github.io` URL. Test the EN/PT switch and all images there first.

## 4. Buy the domain
Preferred order:
- `pinktrophy.com` — primary international domain.
- `pinktrophy.pt` — also buy if available and redirect it to `.com`.

Domain availability changes constantly. Check and purchase through a registrar; do not print a domain on the business card until registration is confirmed.

## 5. Connect the custom domain to GitHub Pages
After purchasing `pinktrophy.com`:
1. In the repository create/edit a file named `CNAME` containing only: `pinktrophy.com`
2. In the domain registrar DNS panel, add GitHub Pages DNS records following GitHub's current documentation.
3. In GitHub → Settings → Pages → Custom domain, enter `pinktrophy.com`.
4. Wait for DNS verification, then enable **Enforce HTTPS**.
5. Configure `www.pinktrophy.com` as instructed by GitHub/your registrar if you want both forms to work.

Do not copy old IP addresses from random tutorials; use GitHub's current Pages documentation when configuring DNS.

## 6. Professional email
GitHub Pages does not host email. Use a mailbox provider such as Microsoft 365, Google Workspace, or your registrar's business-email service.

Recommended addresses:
- `hugo@pinktrophy.com` — owner's direct business address.
- `hello@pinktrophy.com` — general commercial enquiries.

After choosing the provider, add the MX/TXT/CNAME records it supplies to the same domain DNS panel. Enable SPF, DKIM and DMARC when the provider offers them.

## 7. IMPORTANT before public launch
Replace the placeholder contact email if the final address is different. Search these files for `hello@pinktrophy.com`.

Confirm PinkTrophy has permission to publish every photograph. Some supplied images visibly contain third-party branding. The website copy deliberately avoids presenting those brands as PinkTrophy clients.

Confirm any claims about certifications, protective standards, sustainability, ethical production, production capacity, lead times or 24/7 service before adding them. They are intentionally not asserted as verified facts in this launch version.

## 8. Contact form
The launch version uses `mailto:` so it works without a server. It opens the visitor's email application. For a stronger production setup, replace it later with a proper form endpoint (for example a serverless form service or your own backend) after choosing the service and privacy approach.

## 9. Business card — recommended copy
Front: PinkTrophy logo + `GLOBAL SOURCING PARTNER`.
Back: Hugo [Surname], [Title], mobile, `hugo@pinktrophy.com`, `pinktrophy.com`, and a QR code to `https://pinktrophy.com` **only after the domain is registered and live**.

## 10. Content upgrades after the fair
The best next credibility additions are: 2–3 approved anonymized case studies with scope and outcome; verified factory/certification information; verified materials/compliance standards; a concise founder/company story; and a downloadable one-page capabilities PDF.
