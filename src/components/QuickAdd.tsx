"use client";

import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { CartIcon } from "./icons";

export function QuickAdd({ product }: { product: Product }) {
  const { add } = useCart();
  if (!product.inStock) return null;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        add(product, 1);
      }}
      className="btn btn-primary pointer-events-auto w-full py-3 text-xs shadow-card"
    >
      <CartIcon className="h-4 w-4" /> Add to bag
    </button>
  );
}
