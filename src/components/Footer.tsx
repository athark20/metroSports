import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <div className="container-wide grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            {SITE.description}
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-ink-mute">Shop</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-soft">
            <li><Link href="/shop" className="hover:text-ink">All bats</Link></li>
            <li><Link href="/shop?sort=price-desc" className="hover:text-ink">Monsoon sale</Link></li>
            <li><Link href="/shop?brand=SS" className="hover:text-ink">Shop by brand</Link></li>
            <li><Link href="/shop?sort=price-asc" className="hover:text-ink">Best value</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-ink-mute">Company</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-soft">
            <li><Link href="/about" className="hover:text-ink">Our story</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
            <li><Link href="/shipping" className="hover:text-ink">Shipping &amp; returns</Link></li>
            <li><a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-ink">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-ink-mute">Get in touch</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-soft">
            <li><a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-ink">{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a></li>
            <li className="max-w-[16rem] leading-relaxed">{SITE.address}</li>
          </ul>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-4 px-4 py-2.5 text-xs"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-mute sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted for cricketers · Premium English willow specialists</p>
        </div>
      </div>
    </footer>
  );
}
