import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { QuickAdd } from "./QuickAdd";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const discount =
    product.mrp && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <div className="group flex flex-col">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-xl2 bg-willow/40"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="rounded-full bg-pitch px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-paper">
              -{discount}%
            </span>
          )}
          {product.badges?.slice(0, 1).map((b) => (
            <span
              key={b}
              className="rounded-full bg-paper/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink backdrop-blur"
            >
              {b}
            </span>
          ))}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 grid place-items-center bg-ink/40">
            <span className="rounded-full bg-paper px-4 py-1.5 text-xs font-bold uppercase tracking-wide">
              Sold out
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <QuickAdd product={product} />
        </div>
      </Link>

      <div className="mt-3.5 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pitch">
            {product.brand}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-mute">
            {product.willow}
          </span>
        </div>
        <Link href={`/product/${product.slug}`} className="mt-1">
          <h3 className="font-display text-[17px] font-semibold leading-tight transition-colors group-hover:text-pitch">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{product.shortDescription}</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.mrp && product.mrp > product.price && (
            <span className="text-sm text-ink-mute line-through tabular-nums">
              {formatPrice(product.mrp)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
