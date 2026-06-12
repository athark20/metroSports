"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, cn } from "@/lib/utils";
import { CloseIcon, PlusIcon, MinusIcon, ArrowRightIcon, CartIcon } from "./icons";

export function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, setQty, remove } = useCart();

  useEffect(() => {
    if (isOpen) {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn("fixed inset-0 z-50", isOpen ? "" : "pointer-events-none")}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={cn(
          "absolute inset-0 bg-ink/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-lift transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide">
            Your Bag <span className="text-ink-mute">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-ink/6"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-ink/5 text-ink-mute">
              <CartIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold">Your bag is empty</p>
              <p className="mt-1 text-sm text-ink-soft">Time to pick a willow.</p>
            </div>
            <button onClick={closeCart} className="btn btn-primary px-6 py-3 text-sm">
              Browse bats
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.slug} className="flex gap-3.5">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-willow/40"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-pitch">
                            {item.brand}
                          </p>
                          <Link
                            href={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="font-display text-sm font-semibold leading-tight hover:underline"
                          >
                            {item.name}
                          </Link>
                        </div>
                        <button
                          onClick={() => remove(item.slug)}
                          aria-label={`Remove ${item.name}`}
                          className="text-xs font-medium text-ink-mute underline-offset-2 hover:text-danger hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-full border border-line">
                          <button
                            onClick={() => setQty(item.slug, item.qty - 1)}
                            aria-label="Decrease quantity"
                            className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-ink/6"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => setQty(item.slug, item.qty + 1)}
                            aria-label="Increase quantity"
                            className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-ink/6"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="font-display font-semibold tabular-nums">
                          {formatPrice(item.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-5 py-4">
              <div className="flex items-center justify-between pb-3">
                <span className="text-sm text-ink-soft">Subtotal</span>
                <span className="font-display text-xl font-bold tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="pb-3 text-xs text-ink-mute">
                Shipping &amp; taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn btn-primary w-full py-3.5 text-sm"
              >
                Checkout <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <button
                onClick={closeCart}
                className="btn btn-ghost mt-1 w-full py-2.5 text-xs"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
