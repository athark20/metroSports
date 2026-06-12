import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ArrowRightIcon, MedalIcon, ShieldIcon, TruckIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our story",
  description: `About ${SITE.name} — cricket bat specialists since 1969.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-pitch-deep text-paper">
        <div className="container-wide py-16 md:py-24">
          <span className="eyebrow text-gold">Est. 2025 · Pune</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl">
            Started by a player, for players
          </h1>
          <p className="mt-5 max-w-xl text-lg text-paper/80">
            {SITE.name} began in 2025 with one aim — that people should get a genuinely good bat
            at an affordable price, where ping, balance and weight come first.
          </p>
        </div>
      </section>

      <section className="container-wide grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[5/4] overflow-hidden rounded-xl2 bg-willow/40">
          <Image src="/products/bat-02.jpeg" alt="MetroSports cricket bats" fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
        </div>
        <div>
          <span className="eyebrow text-pitch">Why I started this</span>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            The right bat changes your game
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            It started in my own corporate cricket circle. Everyone wanted a good bat under
            ₹10–15k, and they cared about the things that actually win games — pick-up, weight, and
            most of all ping. But no one was sourcing bats around a player&apos;s real needs.
          </p>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Being a player myself, I knew that pain. So I started buying from the trusted
            manufacturers I use for my own bats — the same bats people kept asking me to get for
            them because of their balance and ping. Those requests turned into MetroSports. Every
            bat I sell is one I&apos;d be happy to walk out and bat with myself.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Every bat hand-picked for ping, balance & weight",
              "Sourced from the makers I trust for my own bats",
              "Genuine, brand-authentic stock — SS, DSC, SG, NB, TON",
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
        </div>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="container-wide grid gap-8 py-14 sm:grid-cols-3">
          <Value icon={<MedalIcon className="h-6 w-6" />} title="Pro-grade willow" text="Hand-selected English willow chosen for genuine grain, ping and balance." />
          <Value icon={<ShieldIcon className="h-6 w-6" />} title="100% genuine" text="Brand-authentic stock, never seconds or fakes — guaranteed." />
          <Value icon={<TruckIcon className="h-6 w-6" />} title="Safe delivery" text="Carefully packed and shipped across the country." />
        </div>
      </section>

      <section className="container-wide py-16 text-center md:py-20">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Ready to find yours?
        </h2>
        <Link href="/shop" className="btn btn-primary mt-6 px-8 py-4 text-sm">
          Shop the collection <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-pitch/10 text-pitch">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
