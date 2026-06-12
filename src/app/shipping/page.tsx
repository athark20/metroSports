import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping & returns",
  description: `Shipping, delivery and returns at ${SITE.name}.`,
};

const SECTIONS = [
  {
    h: "Order confirmation",
    p: "After you place an order we'll call or WhatsApp you to confirm the bat, weight preference and delivery address before dispatch.",
  },
  {
    h: "Delivery",
    p: "Bats are carefully bubble-wrapped and boxed to protect the blade and toe. Most orders are dispatched within 1–2 business days and delivered within 3–7 days depending on your location.",
  },
  {
    h: "Payment",
    p: "Pay on delivery or via a secure payment link we share when we confirm your order. We'll always confirm the total — including any shipping — before you pay.",
  },
  {
    h: "7-day returns",
    p: "If a bat arrives damaged or isn't what you expected, tell us within 7 days of delivery for a replacement or refund. Bats must be unused and unknocked, with original stickers and cover.",
  },
  {
    h: "Knock-in & care",
    p: "English willow bats need knocking-in before facing a hard ball. We include guidance with every order — message us any time and we'll walk you through it.",
  },
];

export default function ShippingPage() {
  return (
    <div className="container-wide max-w-3xl py-12 md:py-16">
      <span className="eyebrow text-pitch">Good to know</span>
      <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Shipping &amp; returns
      </h1>
      <div className="mt-8 flex flex-col divide-y divide-line">
        {SECTIONS.map((s) => (
          <div key={s.h} className="py-6">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{s.p}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 card-surface bg-cream p-6">
        <p className="text-ink-soft">
          Still have a question? Message us on{" "}
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="font-medium text-pitch hover:underline">
            WhatsApp
          </a>{" "}
          or email{" "}
          <a href={`mailto:${SITE.email}`} className="font-medium text-pitch hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
