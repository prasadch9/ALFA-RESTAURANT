# ALFA Restaurant — Website (Next.js + Tailwind CSS)

Idi mee ALFA Restaurant logo theme (black + gold/yellow + white) ki match ayye
full-responsive, frontend-only website. Next.js `pages` router tho build
chesanu, files anni `.jsx` extension lo unnayi.

## Run cheyadam ela (local)

```bash
npm install
npm run dev
```

Tarwata browser lo `http://localhost:3000` open cheయandi.

Production build kosam:

```bash
npm run build
npm start
```

> Note: `npm run build` first time run cheసినప్పుడు internet కావాలి, ఎందుకంటే
> Google Fonts (Anton + Work Sans) fetch avutayi. Mee machine ki internet
> unte problem undadu.

## Pages

- `/` — Home: navbar, top lo auto-sliding image slider (5 images, prathi 2
  seconds ki auto-slide, left/right `<` `>` arrow buttons tho manual ga kuda
  slide cheyochu), "why guests come back" points, menu spotlight, CTA.
- `/about` — About Us: story section + brand values + quick stats.
- `/menu` — Menu: top na oka **Veg / Non-Veg** toggle button undi. Veg
  button click chesthe veg items (image + name + price) grid lo kanipistayi,
  Non-Veg click chesthe non-veg items vasthayi.
- `/contact` — Contact: address/phone/email/hours cards, contact form
  (frontend-only — backend/API connect cheskovali actual ga emails
  andukovadaniki), and **Instagram + Facebook** icons (spacing tho).

## Mee sొంత images pettuకోవడానికి

Anni menu items మరియు hero slider images ప్రస్తుతం placeholder
(picsum.photos) images. Vaatini replace cheయాలంటే:

- **Menu items:** `data/menuData.js` file open చేసి, prathi item లో unna
  `image` field లో మీ actual dish photo యొక్క URL లేదా local path pettandi
  (ఉదా: `/menu/paneer-tikka.jpg` — ఆ ఫైల్ ని `public/menu/` folder లో
  పెట్టాలి).
- **Home page slider images:** అదే file లో `heroSlides` array లో images
  మార్చండి.
- **Logo:** `public/logo.jpg` — మీరు ఇచ్చిన logo ఇప్పటికే ఇక్కడ save
  అయ్యింది. Kotha logo pettalante ee file ni replace cheయండి (అదే పేరుతో).

## Social links

`components/Footer.jsx` మరియు `pages/contact.jsx` లో Instagram/Facebook
`href="https://instagram.com"` మరియు `href="https://facebook.com"` — వీటిని
మీ actual page links తో replace చేయండి.

## Tech

- Next.js 14 (pages router), React 18
- Tailwind CSS (custom ALFA color tokens: `ink`, `char`, `gold`, `goldDeep`,
  `ember`, `bone` — `tailwind.config.js` లో ఉన్నాయి)
- react-icons (arrows, social icons, menu icons)
- next/image తో optimized images, next/font తో Google Fonts (Anton headings +
  Work Sans body)
- Fully responsive (mobile hamburger menu included)
