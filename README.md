# Leadszz website (React + Vite)

One-page marketing site for Leadszz. Built with React 18 and Vite 5. No other libraries.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # opens on http://localhost:5173
```

## Build for hosting

```bash
npm run build      # outputs a static site to /dist
npm run preview    # optional: preview the built site
```

Upload the contents of `dist/` to any static host: Vercel, Netlify, Cloudflare Pages, Firebase Hosting, S3/CloudFront, cPanel, or Nginx/Apache.

- **Vercel / Netlify:** import the repo. Framework = Vite, build command = `npm run build`, output folder = `dist`.
- **cPanel / shared hosting:** run `npm run build`, then upload everything inside `dist/` to `public_html`.

## Where to edit things

| What | File |
|---|---|
| Booking link, phone, WhatsApp, email, office addresses, nav links | `src/config.js` |
| Pricing (prices, volumes, features, badges) | `src/data/pricing.js` |
| Services tabs (text, bullet points, sample previews) | `src/data/services.jsx` |
| Hero channel boxes, live pipeline feed, industries, Before/After lists, process steps, FAQ | `src/data/content.js` |
| Colours, fonts, layout, mobile rules | `src/styles.css` (colours are CSS variables at the top: `--ink`, `--paper`, `--lime`) |
| Logo (ZZ mark) | `src/components/Icons.jsx` (`#logo-zz`) and `public/favicon.svg` |
| Page sections | `src/components/*.jsx` (order is set in `src/App.jsx`) |

## Fonts

Loaded from Google Fonts in `index.html`: Inter Tight (headings and body), Instrument Serif (italic accents), JetBrains Mono (small labels).

## Notes

- All animations are plain CSS and `requestAnimationFrame`. There is no animation library.
- The database counters and industry chips animate even when the visitor's device has "Reduce motion" turned on (the site owner asked for this). Other scroll effects respect that setting.
- The site is responsive from 320px phones up to large desktops. On phones, pricing cards swipe sideways.
