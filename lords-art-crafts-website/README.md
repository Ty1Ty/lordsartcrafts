# Lord's Art & Crafts

Static website for Lord's Art & Crafts: handmade Kenyan paintings, moulds, candles, soaps, liquid handwash and custom art. Open 24/7, delivery countrywide and worldwide, WhatsApp ordering, M-Pesa and card payments. No build tools or edits needed.

## Deploy

**GitHub**
```bash
git init
git add .
git commit -m "Launch Lord's Art & Crafts website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

**Netlify**
1. Add new site > Import an existing project > choose the GitHub repo (or drag the folder onto Netlify Drop).
2. Leave build settings as they are (they come from `netlify.toml`).
3. In Site configuration, set the site name to `lordsartcrafts` so the address is lordsartcrafts.netlify.app.
4. In Forms, turn on email notifications to tyronejohn001@gmail.com for the contact form.

## Payments
- **M-Pesa:** customers send money to 0792 381 698 and share the confirmation on WhatsApp.
- **Card:** customers choose Card at checkout and you send them a secure payment link on WhatsApp or email. For fully automatic card checkout later, connect a gateway (Paystack, Pesapal, Flutterwave or Stripe).

## Optional
- Replace the placeholder pictures in `images/` with your own photos (same file names). `images/og-image.jpg` is the link-share picture.
- Logo files: `logo.svg` (full), `logo-icon.svg` (icon).
- Add prices by replacing "Price on request" in `index.html`.
- After going live, add the site to Google Search Console and submit `sitemap.xml`.
