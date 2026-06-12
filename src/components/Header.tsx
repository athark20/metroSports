"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CartIcon, MenuIcon, CloseIcon } from "./icons";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";
import { CartDrawer } from "./CartDrawer";

const NAV = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop?sort=price-desc", label: "Sale" },
  { href: "/about", label: "Our Story" },
  { href: "/shipping", label: "Shipping" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const { count, openCart } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-paper",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-pitch transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
              className="relative grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/6"
            >
              <CartIcon className="h-[22px] w-[22px]" />
              {count > 0 && (
                <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-pitch px-1 text-[11px] font-bold text-paper">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-ink/6 lg:hidden"
            >
              {mobileOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          className={cn(
            "overflow-hidden border-t border-line bg-paper lg:hidden",
            mobileOpen ? "max-h-96" : "max-h-0 border-t-0",
          )}
          style={{ transition: "max-height 0.3s ease" }}
        >
          <nav className="container-wide flex flex-col py-2" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-line/70 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <CartDrawer />
    </>
  );
}
