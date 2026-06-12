# MetroSports — Cricket Bat Store

A premium e-commerce storefront for **MetroSports**, selling English & Kashmir willow
cricket bats from SS, DSC, SG, New Balance, TON, Somi and more.

Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.
Design direction from the `ui-ux-pro-max` skill — Barlow Condensed display type,
a willow-cream + pitch-green palette and a clean editorial layout.

## Features

- Homepage with hero, brand marquee, featured bats, category & story sections
- Shop with brand / willow filtering and sorting (shareable URL state)
- Product detail pages with image gallery, specs, highlights and related bats
- Slide-out cart + dedicated cart page (persisted to `localStorage`)
- Checkout form that records orders via `POST /api/order`
- WhatsApp quick-order links throughout
- Fully responsive, accessible, reduced-motion aware

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm run start    # respects the PORT env var (used by Railway)
```

## Editing the catalog & prices

Everything lives in **`src/lib/products.ts`**.

- **Prices** are placeholders — edit each product's `price` (and optional `mrp`).
- Product images are in `public/products/` (`bat-01.jpeg` … `bat-23.jpeg`).
  Add more angles to a product's `images` array any time.

Store-wide settings (currency, phone, WhatsApp number, email, address, socials)
live in **`src/lib/site.ts`**.

## Orders

`src/app/api/order/route.ts` validates and logs incoming orders. It currently keeps
them in memory and prints them to the server log. To make orders durable, plug a
database, email or webhook into that one file — the payload shape is already defined.

## Deployment (Railway)

The app deploys on Railway via Nixpacks. `railway.json` sets the start command and a
health check. Railway provides `PORT`, which `next start` reads automatically.
