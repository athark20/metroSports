// ───────────────────────────────────────────────────────────────────────────
// MetroSports — product catalog.
//
// 👉 PRICES ARE PLACEHOLDERS. Replace each `price` (and `mrp` if you show a
//    strike-through) with your real numbers. Everything else (images, specs,
//    descriptions) is wired up and ready.
//
// `images` point at files in /public/products. Add more angles any time.
// ───────────────────────────────────────────────────────────────────────────

export type Willow = "English Willow" | "Kashmir Willow";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  willow: Willow;
  price: number; // ← EDIT ME
  mrp?: number; // optional original price for a strike-through
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  images: string[];
  badges?: string[];
  featured?: boolean;
  inStock: boolean;
};

export const BRANDS = ["SS", "DSC", "SG", "New Balance", "TON", "Somi"] as const;

export const PRODUCTS: Product[] = [
  {
    slug: "ss-master-1959-premium",
    name: "SS Master 1959 Premium",
    brand: "SS",
    willow: "English Willow",
    price: 18999,
    mrp: 22999,
    shortDescription:
      "Grade-1 English willow with a mid-blade sweet spot — SS's flagship all-rounder.",
    description:
      "The SS Master 1959 Premium is hand-crafted from Grade-1 English willow with a thick edge profile and a mid-to-low sweet spot. Big-stroke balance with a traditional round handle, it's built for players who want power without sacrificing pick-up. Comes ready to knock-in with a premium camo bat cover.",
    features: [
      "Grade-1 English willow, 5–7 straight grains",
      "Thick edges (38–40mm) with a full spine",
      "Mid sweet spot for front and back-foot play",
      "Singapore cane handle with premium grip",
      "Includes SS camo full-length cover",
    ],
    specs: [
      { label: "Willow", value: "Grade-1 English Willow" },
      { label: "Weight", value: "1180–1230 g" },
      { label: "Handle", value: "Round, Singapore cane" },
      { label: "Sweet spot", value: "Mid" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-19.jpeg", "/products/bat-15.jpeg", "/products/bat-17.jpeg"],
    badges: ["Flagship", "Free cover"],
    featured: true,
    inStock: true,
  },
  {
    slug: "new-balance-tc-650i",
    name: "New Balance TC 650i",
    brand: "New Balance",
    willow: "English Willow",
    price: 21999,
    mrp: 25999,
    shortDescription:
      "Premium English willow with NB's signature concaved profile and huge edges.",
    description:
      "The New Balance TC 650i is the choice of stroke-makers — Grade-1 English willow, hand-selected for grain and ping. A concaved back redistributes weight for an explosive yet balanced pick-up, while the swelled edges add forgiveness on mistimed shots. Delivered in the iconic NB full-length carry bag.",
    features: [
      "Grade-1 English willow, low-density cleft",
      "Concaved back for power-to-weight balance",
      "Swelled edges with a mid-low sweet spot",
      "Premium octagonal handle",
      "Includes New Balance full-length bag",
    ],
    specs: [
      { label: "Willow", value: "Grade-1 English Willow" },
      { label: "Weight", value: "1170–1220 g" },
      { label: "Handle", value: "Semi-oval, premium cane" },
      { label: "Sweet spot", value: "Mid-low" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-14.jpeg", "/products/bat-09.jpeg", "/products/bat-10.jpeg"],
    badges: ["Premium", "Free bag"],
    featured: true,
    inStock: true,
  },
  {
    slug: "sg-nexus-xtreme",
    name: "SG Nexus Xtreme",
    brand: "SG",
    willow: "English Willow",
    price: 15999,
    mrp: 18499,
    shortDescription:
      "Tournament-grade English willow tuned for explosive timing and pick-up.",
    description:
      "Believe. Become. The SG Nexus Xtreme is a tournament-ready blade made from naturally air-dried English willow. A full profile with a slightly bowed face concentrates mass behind the ball for explosive timing. Traditionally shaped with a comfortable round handle and finished with SG's premium toe guard.",
    features: [
      "Naturally seasoned English willow",
      "Full profile with bowed face for timing",
      "Thick edges and prominent spine",
      "Sarawak cane handle with cushioned grip",
      "Includes SG premium bat cover",
    ],
    specs: [
      { label: "Willow", value: "English Willow" },
      { label: "Weight", value: "1160–1210 g" },
      { label: "Handle", value: "Round, Sarawak cane" },
      { label: "Sweet spot", value: "Mid" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-23.jpeg", "/products/bat-22.jpeg", "/products/bat-10.jpeg"],
    badges: ["Free cover"],
    featured: true,
    inStock: true,
  },
  {
    slug: "dsc-blu-222",
    name: "DSC Blu 222",
    brand: "DSC",
    willow: "English Willow",
    price: 14499,
    mrp: 16999,
    shortDescription:
      "Bold blue English willow blade with massive edges and a low middle.",
    description:
      "The DSC Blu 222 is built for the modern power-hitter. Grade-2 English willow with a chunky profile, big edges and a low sweet spot that rewards aggressive, ground-striking play. Lightweight pick-up thanks to a contoured back, finished with DSC's striking blue livery.",
    features: [
      "Grade-2 English willow, 6+ grains",
      "Big edges (38mm+) with a low middle",
      "Contoured back for easy pick-up",
      "Premium cane handle with chevron grip",
      "Fearless DSC finish",
    ],
    specs: [
      { label: "Willow", value: "Grade-2 English Willow" },
      { label: "Weight", value: "1180–1230 g" },
      { label: "Handle", value: "Round cane" },
      { label: "Sweet spot", value: "Low" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-12.jpeg", "/products/bat-15.jpeg"],
    badges: ["Power profile"],
    featured: false,
    inStock: true,
  },
  {
    slug: "dsc-blu-200",
    name: "DSC Blu 200",
    brand: "DSC",
    willow: "English Willow",
    price: 12999,
    mrp: 14999,
    shortDescription:
      "Balanced English willow all-rounder — clean ping, easy pick-up.",
    description:
      "An everyday tournament bat that punches above its price. The DSC Blu 200 pairs Grade-2 English willow with a mid sweet spot and a balanced profile, making it equally at home driving on the up or pulling off the back foot. A reliable first leather-ball bat for the serious club cricketer.",
    features: [
      "Grade-2 English willow",
      "Balanced profile with a mid sweet spot",
      "Medium edges for control and ping",
      "Comfortable round handle",
      "Pre-prepared face, light knock-in needed",
    ],
    specs: [
      { label: "Willow", value: "Grade-2 English Willow" },
      { label: "Weight", value: "1150–1200 g" },
      { label: "Handle", value: "Round cane" },
      { label: "Sweet spot", value: "Mid" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-15.jpeg", "/products/bat-12.jpeg", "/products/bat-08.jpeg"],
    badges: ["Best value"],
    featured: false,
    inStock: true,
  },
  {
    slug: "dsc-split-200",
    name: "DSC Split 200",
    brand: "DSC",
    willow: "English Willow",
    price: 9999,
    mrp: 11999,
    shortDescription:
      "Entry English willow with a lively green finish — a brilliant first leather bat.",
    description:
      "The DSC Split 200 brings English willow performance to an entry price. A clean, lightweight blade with a mid-high sweet spot ideal for younger and developing batters stepping up to the leather ball. The unmistakable green Split livery makes it a crowd favourite at the crease.",
    features: [
      "Entry-grade English willow",
      "Light pick-up, mid-high sweet spot",
      "Rounded edges for forgiveness",
      "Quality cane handle with grip",
      "Ideal step-up to leather-ball cricket",
    ],
    specs: [
      { label: "Willow", value: "English Willow (entry)" },
      { label: "Weight", value: "1130–1180 g" },
      { label: "Handle", value: "Round cane" },
      { label: "Sweet spot", value: "Mid-high" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-10.jpeg", "/products/bat-08.jpeg"],
    badges: ["Great starter"],
    featured: false,
    inStock: true,
  },
  {
    slug: "ton-sunridges-player",
    name: "TON Sunridges Player",
    brand: "TON",
    willow: "English Willow",
    price: 16999,
    mrp: 19999,
    shortDescription:
      "Classic TON craftsmanship — premium English willow with a traditional profile.",
    description:
      "From Sunridges, one of the most storied names in cricket, the TON Player is a traditionally shaped English willow blade with a full spine and balanced weight distribution. Beautifully clean grains and a generous middle make it a connoisseur's bat for players who value timing over brute force.",
    features: [
      "Premium English willow, clean grains",
      "Traditional profile with full spine",
      "Balanced weight for effortless timing",
      "Treble-spring cane handle",
      "Hand-finished by Sunridges",
    ],
    specs: [
      { label: "Willow", value: "Premium English Willow" },
      { label: "Weight", value: "1170–1220 g" },
      { label: "Handle", value: "Treble-spring cane" },
      { label: "Sweet spot", value: "Mid" },
      { label: "Ball type", value: "Leather" },
    ],
    images: ["/products/bat-12.jpeg", "/products/bat-01.jpeg"],
    badges: ["Heritage"],
    featured: false,
    inStock: true,
  },
  {
    slug: "sg-skipper-kashmir",
    name: "SG Skipper Kashmir",
    brand: "SG",
    willow: "Kashmir Willow",
    price: 3499,
    mrp: 4299,
    shortDescription:
      "Durable Kashmir willow for tennis & soft-ball cricket — superb everyday value.",
    description:
      "The SG Skipper is a tough, dependable Kashmir willow bat built for gully, tennis-ball and soft-ball cricket. Full-size profile with a meaty middle and a hard-wearing finish that shrugs off heavy use. The perfect bat for weekend cricket and practice.",
    features: [
      "Solid Kashmir willow construction",
      "Full size with a generous middle",
      "Ready to play — no knock-in needed",
      "Strong cane handle with grip",
      "Great for tennis & soft-ball cricket",
    ],
    specs: [
      { label: "Willow", value: "Kashmir Willow" },
      { label: "Weight", value: "1200–1260 g" },
      { label: "Handle", value: "Round cane" },
      { label: "Sweet spot", value: "Mid" },
      { label: "Ball type", value: "Tennis / Soft" },
    ],
    images: ["/products/bat-02.jpeg", "/products/bat-07.jpeg"],
    badges: ["Tennis ball"],
    featured: false,
    inStock: true,
  },
  {
    slug: "somi-storm-kashmir",
    name: "Somi Storm Kashmir",
    brand: "Somi",
    willow: "Kashmir Willow",
    price: 2999,
    mrp: 3699,
    shortDescription:
      "Lightweight Kashmir willow built for fast hands and big tennis-ball hitting.",
    description:
      "The Somi Storm is a lively, lightweight Kashmir willow bat made for tennis-ball cricket where bat speed wins games. A slim pick-up and a high sweet spot make it easy to throw the hands at it, while a robust finish keeps it going season after season.",
    features: [
      "Seasoned Kashmir willow",
      "Lightweight, fast pick-up",
      "High sweet spot for tennis-ball play",
      "Durable, ready-to-play finish",
      "Comfortable rubber grip",
    ],
    specs: [
      { label: "Willow", value: "Kashmir Willow" },
      { label: "Weight", value: "1150–1210 g" },
      { label: "Handle", value: "Round cane" },
      { label: "Sweet spot", value: "High" },
      { label: "Ball type", value: "Tennis / Soft" },
    ],
    images: ["/products/bat-07.jpeg", "/products/bat-03.jpeg"],
    badges: ["Lightweight"],
    featured: false,
    inStock: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeatured(): Product[] {
  const featured = PRODUCTS.filter((p) => p.featured);
  return featured.length ? featured : PRODUCTS.slice(0, 3);
}

export function relatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(
    (p) => p.slug !== slug && (p.brand === current.brand || p.willow === current.willow),
  )
    .concat(PRODUCTS.filter((p) => p.slug !== slug))
    .filter((p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i)
    .slice(0, limit);
}
