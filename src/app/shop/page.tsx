import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, BRANDS, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shop cricket bats",
  description: "Browse every English & Kashmir willow cricket bat at MetroSports.",
};

type SearchParams = { [key: string]: string | string[] | undefined };

const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "name", label: "Name A–Z" },
];

function one(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

function buildHref(base: SearchParams, patch: Record<string, string | undefined>) {
  const params = new URLSearchParams();
  const merged: Record<string, string | undefined> = {
    brand: one(base.brand),
    willow: one(base.willow),
    sort: one(base.sort),
    ...patch,
  };
  for (const [k, v] of Object.entries(merged)) if (v) params.set(k, v);
  const q = params.toString();
  return q ? `/shop?${q}` : "/shop";
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const brand = one(sp.brand);
  const willow = one(sp.willow);
  const sort = one(sp.sort) ?? "featured";

  let items: Product[] = [...PRODUCTS];
  if (brand) items = items.filter((p) => p.brand === brand);
  if (willow) items = items.filter((p) => p.willow === willow);

  items.sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return Number(b.featured ?? false) - Number(a.featured ?? false);
    }
  });

  const willows = ["English Willow", "Kashmir Willow"] as const;

  return (
    <div className="container-wide py-10 md:py-14">
      {/* heading */}
      <div className="border-b border-line pb-7">
        <p className="eyebrow text-pitch">The collection</p>
        <h1 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          {willow ? willow : brand ? `${brand} bats` : "All cricket bats"}
        </h1>
        <p className="mt-2 text-ink-soft">
          {items.length} bat{items.length === 1 ? "" : "s"} · genuine, hand-checked willow
        </p>
      </div>

      <div className="grid gap-8 pt-7 lg:grid-cols-[15rem_1fr]">
        {/* filters */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <FilterGroup title="Willow">
            <FilterChip href={buildHref(sp, { willow: undefined })} active={!willow}>
              All
            </FilterChip>
            {willows.map((w) => (
              <FilterChip
                key={w}
                href={buildHref(sp, { willow: w })}
                active={willow === w}
              >
                {w}
              </FilterChip>
            ))}
          </FilterGroup>

          <FilterGroup title="Brand">
            <FilterChip href={buildHref(sp, { brand: undefined })} active={!brand}>
              All brands
            </FilterChip>
            {BRANDS.map((b) => (
              <FilterChip
                key={b}
                href={buildHref(sp, { brand: b })}
                active={brand === b}
              >
                {b}
              </FilterChip>
            ))}
          </FilterGroup>

          {(brand || willow) && (
            <Link
              href="/shop"
              className="mt-2 inline-block text-sm font-medium text-pitch underline-offset-2 hover:underline"
            >
              Clear filters
            </Link>
          )}
        </aside>

        {/* products */}
        <div>
          {/* sort */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-ink-mute">Sort:</span>
            {SORTS.map((s) => (
              <Link
                key={s.key}
                href={buildHref(sp, { sort: s.key === "featured" ? undefined : s.key })}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
                  sort === s.key
                    ? "border-pitch bg-pitch text-paper"
                    : "border-line text-ink-soft hover:border-ink/40",
                )}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {items.length === 0 ? (
            <div className="card-surface grid place-items-center px-6 py-20 text-center">
              <p className="font-display text-xl font-semibold">No bats match those filters</p>
              <p className="mt-1 text-sm text-ink-soft">Try clearing a filter to see more.</p>
              <Link href="/shop" className="btn btn-primary mt-5 px-6 py-3 text-sm">
                View all bats
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-9 xl:grid-cols-3">
              {items.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={i < 2} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="eyebrow mb-3 text-ink-mute">{title}</h2>
      <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">{children}</div>
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-ink text-paper"
          : "bg-ink/[0.04] text-ink-soft hover:bg-ink/[0.08] hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}
