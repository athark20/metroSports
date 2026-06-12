import Image from "next/image";
import Link from "next/link";
import { getFeatured, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRightIcon, ShieldIcon, TruckIcon, MedalIcon, StarIcon, CheckIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

const BRAND_NAMES = ["SS", "DSC", "SG", "New Balance", "TON", "Sunridges"];

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative overflow-hidden bg-pitch-deep text-paper">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
          <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-[26rem] w-[26rem] rounded-full bg-pitch-light blur-3xl" />
        </div>

        <div className="container-wide relative grid items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-paper/25 px-3.5 py-1.5 text-paper/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Est. 2025 · Pune
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Bats that <span className="text-gold">find</span> the boundary
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
              Premium English willow, hand-picked by a player for ping, balance and pick-up.
              Right now — <span className="font-semibold text-gold">every bat flat ₹10,000</span> in
              our off-season monsoon sale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/shop" className="btn btn-gold px-7 py-3.5 text-sm">
                Shop all bats <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/shop?willow=English+Willow"
                className="btn px-7 py-3.5 text-sm text-paper ring-1 ring-inset ring-paper/30 hover:bg-paper/10"
              >
                English willow
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Stat value={`${PRODUCTS.length}`} label="Bats in stock" />
              <span className="hidden h-9 w-px bg-paper/20 sm:block" />
              <Stat value="5" label="Trusted brands" />
              <span className="hidden h-9 w-px bg-paper/20 sm:block" />
              <div className="flex items-center gap-2">
                <span className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <span className="text-sm text-paper/80">Rated 4.9 by players</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl2 shadow-lift ring-1 ring-paper/10">
              <Image
                src={featured[0].images[0]}
                alt={featured[0].name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  Featured
                </p>
                <p className="font-display text-xl font-bold">{featured[0].name}</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 hidden rounded-xl bg-paper px-4 py-3 text-ink shadow-lift sm:flex sm:items-center sm:gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-pitch/10 text-pitch">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-bold">100% Genuine</p>
                <p className="text-xs text-ink-soft">Brand-authentic willow</p>
              </div>
            </div>
          </div>
        </div>

        {/* brand marquee */}
        <div className="relative border-t border-paper/10 py-4">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
              {[...BRAND_NAMES, ...BRAND_NAMES].map((b, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-paper/45"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12" aria-hidden>
              {[...BRAND_NAMES, ...BRAND_NAMES].map((b, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-paper/45"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── TRUST BAR ───────────────────────── */}
      <section className="border-b border-line bg-cream">
        <div className="container-wide grid gap-6 py-8 sm:grid-cols-3">
          <Feature icon={<TruckIcon className="h-6 w-6" />} title="Fast, safe delivery" text="Carefully packed, shipped pan-India." />
          <Feature icon={<MedalIcon className="h-6 w-6" />} title="Pro-grade willow" title2 text="Hand-selected grain &amp; ping." />
          <Feature icon={<ShieldIcon className="h-6 w-6" />} title="7-day easy returns" text="Not happy? Send it back." />
        </div>
      </section>

      {/* ───────────────────────── FEATURED ───────────────────────── */}
      <section className="container-wide py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow text-pitch">The line-up</span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Featured bats
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-pitch hover:text-pitch-deep sm:inline-flex"
          >
            View all <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* ───────────────────────── OFFER BANNER ───────────────────────── */}
      <section className="container-wide pb-4">
        <div className="relative overflow-hidden rounded-xl2 bg-pitch-deep text-paper">
          <div className="pointer-events-none absolute inset-0 opacity-[0.09]" aria-hidden>
            <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-gold blur-3xl" />
            <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-pitch-light blur-3xl" />
          </div>

          <div className="relative grid items-center gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1.5 text-ink">
                Off-season · Monsoon sale
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Every bat,
                <br />
                flat <span className="text-gold">₹10,000</span>
              </h2>
              <p className="mt-4 max-w-md text-paper/80">
                The rain&apos;s rolling into India and the season&apos;s winding down — so every
                premium English willow blade in the store is now a flat ₹10,000. Same ping,
                same balance, off-season price.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/shop" className="btn btn-gold px-7 py-3.5 text-sm">
                  Shop the sale <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn px-7 py-3.5 text-sm text-paper ring-1 ring-inset ring-paper/30 hover:bg-paper/10"
                >
                  Ask for a recommendation
                </a>
              </div>
            </div>

            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-xl2 ring-1 ring-paper/10 md:block">
              <Image
                src={featured[1]?.images[0] ?? featured[0].images[0]}
                alt="Cricket bats on monsoon-sale at MetroSports"
                fill
                sizes="30vw"
                className="object-cover"
              />
              <div className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-ink">
                Flat ₹10,000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── STORY ───────────────────────── */}
      <section className="container-wide py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-xl2 bg-willow/40 lg:order-1">
            <Image
              src="/products/bat-03.jpeg"
              alt="The MetroSports cricket bat collection"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow text-pitch">Our story · Est. 2025</span>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
              Started by a player,<br />for players.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              I started MetroSports in 2025 with one simple aim — that people should get a
              genuinely good bat at an affordable price, where ping, balance and weight matter
              above everything else.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              It began in my own corporate cricket circle. Everyone wanted a bat under ₹10–15k and
              they cared about the things that actually win games — pick-up, weight, and most of all
              ping — but no one was sourcing bats around a player&apos;s real needs. Being a player
              myself, I knew that pain. So I started buying from the trusted manufacturers I use for
              my own bats — the ones people kept asking me to get for them because of their balance
              and ping. That&apos;s how MetroSports was born.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Every bat hand-picked for ping, balance & weight",
                "Sourced from the makers I trust for my own bats",
                "Honest, player-to-player advice on what suits you",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pitch/10 text-pitch">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn btn-outline mt-8 px-6 py-3 text-sm">
              More about us <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="container-wide pb-8">
        <div className="relative overflow-hidden rounded-xl2 bg-pitch px-6 py-14 text-center text-paper md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
            <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Not sure which bat?
            </h2>
            <p className="mt-3 text-paper/80">
              Tell me your game and how you like your pick-up — I&apos;ll help you choose the right one.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/shop" className="btn btn-gold px-7 py-3.5 text-sm">
                Browse the range
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn px-7 py-3.5 text-sm text-paper ring-1 ring-inset ring-paper/30 hover:bg-paper/10"
              >
                Ask an expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold leading-none">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-paper/60">{label}</p>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  title2?: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pitch/10 text-pitch">
        {icon}
      </span>
      <div>
        <p className="font-display text-sm font-bold uppercase tracking-wide">{title}</p>
        <p className="text-sm text-ink-soft" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

