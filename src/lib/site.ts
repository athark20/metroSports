// ───────────────────────────────────────────────────────────────────────────
// MetroSports — global store settings. Edit these in one place.
// ───────────────────────────────────────────────────────────────────────────
export const SITE = {
  name: "MetroSports",
  tagline: "Hand-picked cricket bats since 1969",
  description:
    "MetroSports crafts and curates premium English & Kashmir willow cricket bats from the game's most trusted makers — SS, DSC, SG, New Balance, TON and more.",

  // Currency shown across the store. Change symbol + code together.
  currency: { symbol: "₹", code: "INR", locale: "en-IN" },

  // Contact details — used in the footer, contact page and order confirmations.
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // digits only, with country code — used for order links
  email: "orders@metrosports.shop",
  address: "MetroSports Cricket Co., Sialkot Road, Jalandhar, Punjab",
  instagram: "https://instagram.com/metrosports",
  facebook: "https://facebook.com/metrosports",
};

export type Currency = typeof SITE.currency;
