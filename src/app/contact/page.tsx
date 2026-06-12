import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}.`,
};

export default function ContactPage() {
  return (
    <div className="container-wide py-12 md:py-16">
      <span className="eyebrow text-pitch">Get in touch</span>
      <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Talk to MetroSports
      </h1>
      <p className="mt-3 max-w-xl text-ink-soft">
        Questions about a bat, your size, or an order? We&apos;re happy to help you pick the right
        willow. Reach us any of these ways.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ContactCard label="WhatsApp" value="Chat with us" href={`https://wa.me/${SITE.whatsapp}`} accent />
        <ContactCard label="Call us" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
        <ContactCard label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
      </div>

      <div className="mt-8 card-surface bg-cream p-6">
        <h2 className="eyebrow text-ink-mute">Visit / write to us</h2>
        <p className="mt-3 text-lg">{SITE.address}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn btn-outline px-5 py-2.5 text-xs">
            Instagram
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="btn btn-outline px-5 py-2.5 text-xs">
            Facebook
          </a>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-gold px-5 py-2.5 text-xs">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  label,
  value,
  href,
  accent = false,
}: {
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group rounded-xl2 border p-6 transition-all hover:-translate-y-0.5 hover:shadow-card ${
        accent ? "border-pitch bg-pitch text-paper" : "border-line bg-paper"
      }`}
    >
      <p className={`eyebrow ${accent ? "text-gold" : "text-ink-mute"}`}>{label}</p>
      <p className="mt-3 font-display text-xl font-bold">{value}</p>
    </a>
  );
}
