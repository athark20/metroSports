"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { PlusIcon, MinusIcon, ArrowRightIcon, CartIcon } from "@/components/icons";

export default function CartPage() {
  const { items, subtotal, count, setQty, remove } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-wide py-20">
        <div className="card-surface mx-auto grid max-w-lg place-items-center px-6 py-16 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-ink/5 text-ink-mute">
            <CartIcon className="h-7 w-7" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">
            Your bag is empty
          </h1>
          <p className="mt-2 text-ink-soft">Find your next match-winner in the collection.</p>
          <Link href="/shop" className="btn btn-primary mt-6 px-7 py-3.5 text-sm">
            Shop cricket bats <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-wide py-10 md:py-14">
      <h1 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Your bag
      </h1>
      <p className="mt-2 text-ink-soft">{count} item{count === 1 ? "" : "s"}</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <ul className="divide-y divide-line border-y border-line">
          {items.map((item) => (
            <li key={item.slug} className="flex gap-4 py-5">
              <Link
                href={`/product/${item.slug}`}
                className="relative h-32 w-[6.5rem] shrink-0 overflow-hidden rounded-xl bg-willow/40"
              >
                <Image src={item.image} alt={item.name} fill sizes="104px" className="object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-pitch">
                      {item.brand}
                    </p>
                    <Link
                      href={`/product/${item.slug}`}
                      className="font-display text-lg font-semibold leading-tight hover:underline"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <span className="font-display text-lg font-bold tabular-nums">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-mute tabular-nums">
                  {formatPrice(item.price)} each
                </p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="flex items-center rounded-full border border-line">
                    <button
                      onClick={() => setQty(item.slug, item.qty - 1)}
                      aria-label="Decrease quantity"
                      className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-ink/6"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold tabular-nums">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => setQty(item.slug, item.qty + 1)}
                      aria-label="Increase quantity"
                      className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-ink/6"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(item.slug)}
                    className="text-sm font-medium text-ink-mute underline-offset-2 hover:text-danger hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="card-surface bg-cream p-6">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">Summary</h2>
            <dl className="mt-4 flex flex-col gap-2.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-soft">Subtotal</dt>
                <dd className="font-medium tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-soft">Shipping</dt>
                <dd className="font-medium text-pitch">Calculated at checkout</dd>
              </div>
            </dl>
            <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
              <span className="font-display text-base font-bold uppercase">Total</span>
              <span className="font-display text-2xl font-bold tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Link href="/checkout" className="btn btn-primary mt-5 w-full py-4 text-sm">
              Checkout <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/shop" className="btn btn-ghost mt-1 w-full py-2.5 text-xs">
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
