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
          <span className="eyebrow text-gold">Since 1969</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl">
            We live and breathe willow
          </h1>
          <p className="mt-5 max-w-xl text-lg text-paper/80">
            {SITE.name} has spent decades helping cricketers — from weekend gully stars to
            club openers — find a bat that feels like an extension of their hands.
          </p>
        </div>
      </section>

      <section className="container-wide grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[5/4] overflow-hidden rounded-xl2 bg-willow/40">
          <Image src="/products/bat-02.jpeg" alt="MetroSports cricket bats" fill sizes="(max-width:1024px) 90vw, 45vw" className="object-cover" />
        </div>
        <div>
          <span className="eyebrow text-pitch">What we believe</span>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            The right bat changes your game
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            A great innings starts long before you walk out to bat. It starts with willow that&apos;s
            been chosen for grain, pressed for ping and balanced for your style of play. That&apos;s the
            only kind of bat we&apos;re willing to sell.
          </p>
          <p className="mt-3 leading-relaxed text-ink-soft">
            We stock genuine bats from the makers players trust — SS, DSC, SG, New Balance, TON and
            more — and we check every single one before it reaches you.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {[
              "Every cleft hand-checked for grain & weight",
              "Only genuine, brand-authentic stock",
              "Knock-in & care guidance with every bat",
              "Honest advice — we'll talk you out of the wrong bat",
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
          <Value icon={<MedalIcon className="h-6 w-6" />} title="Pro-grade willow" text="Hand-selected English & Kashmir willow with genuine grain and ping." />
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
