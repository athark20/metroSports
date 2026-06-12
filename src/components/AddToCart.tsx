"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { SITE } from "@/lib/site";
import { CartIcon, PlusIcon, MinusIcon, WhatsAppIcon, CheckIcon } from "./icons";

export function AddToCart({ product }: { product: Product }) {
  const { add, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const waText = encodeURIComponent(
    `Hi MetroSports, I'd like to order: ${product.name} (${product.brand}) × ${qty}.`,
  );

  if (!product.inStock) {
    return (
      <div className="mt-6">
        <button disabled className="btn w-full cursor-not-allowed bg-ink/10 py-4 text-sm text-ink-mute">
          Sold out
        </button>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
            `Hi MetroSports, when will ${product.name} be back in stock?`,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline mt-3 w-full py-3.5 text-sm"
        >
          Notify me on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex items-stretch gap-3">
        <div className="flex items-center rounded-full border border-line">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="grid h-12 w-12 place-items-center rounded-full transition-colors hover:bg-ink/6"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="w-9 text-center font-display text-lg font-semibold tabular-nums">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="grid h-12 w-12 place-items-center rounded-full transition-colors hover:bg-ink/6"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            add(product, qty);
            setAdded(true);
            setTimeout(() => setAdded(false), 1600);
          }}
          className="btn btn-primary flex-1 py-4 text-sm"
        >
          {added ? (
            <>
              <CheckIcon className="h-5 w-5" /> Added to bag
            </>
          ) : (
            <>
              <CartIcon className="h-5 w-5" /> Add to bag
            </>
          )}
        </button>
      </div>

      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => {
            add(product, qty);
            openCart();
          }}
          className="btn btn-outline flex-1 py-3.5 text-sm"
        >
          Buy it now
        </button>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Order on WhatsApp"
          className="btn btn-gold px-5 py-3.5 text-sm"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>

      <Link
        href="/cart"
        className="mt-3 block text-center text-sm font-medium text-pitch underline-offset-2 hover:underline"
      >
        View bag &amp; checkout →
      </Link>
    </div>
  );
}
