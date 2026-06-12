// ───────────────────────────────────────────────────────────────────────────
// MetroSports — global store settings. Edit these in one place.
// ───────────────────────────────────────────────────────────────────────────
export const SITE = {
  name: "MetroSports",
  tagline: "Premium willow, picked by a player",
  description:
    "MetroSports hand-sources premium English willow cricket bats — chosen for ping, balance and pick-up — from trusted makers like SS, DSC, SG, New Balance and TON. Started in 2025 by a player who knows what a good bat feels like.",
  founded: "2025",
  saleNote: "Off-season monsoon sale — every bat flat ₹10,000",

  // Currency shown across the store. Change symbol + code together.
  currency: { symbol: "₹", code: "INR", locale: "en-IN" },

  // Contact details — used in the footer, contact page and order confirmations.
  phone: "+91 81778 33697",
  whatsapp: "918177833697", // digits only, with country code — used for order links
  email: "orders@metrosports.shop",
  address: "Flat No 25, B Wing, Sarita Garden Apartment, Shastrinagar, Kasarwadi, Pune 411034",
  instagram: "https://instagram.com/metrosports",
  facebook: "https://facebook.com/metrosports",
};

export type Currency = typeof SITE.currency;
