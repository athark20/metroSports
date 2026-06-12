import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, PRODUCTS, relatedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { ProductGallery } from "@/components/ProductGallery";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { CheckIcon, ShieldIcon, TruckIcon, MedalIcon, StarIcon } from "@/components/icons";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Bat not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(product.slug, 3);
  const discount =
    product.mrp && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <div className="container-wide py-8 md:py-12">
      {/* breadcrumb */}
      <nav className="mb-7 flex items-center gap-2 text-sm text-ink-mute" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-ink">Shop</Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div className="lg:py-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-pitch">
              {product.brand}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-mute" />
            <span className="text-sm font-medium uppercase tracking-wide text-ink-mute">
              {product.willow}
            </span>
          </div>

          <h1 className="mt-2 font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="text-sm text-ink-soft">4.9 · trusted by players</span>
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="font-display text-3xl font-bold tabular-nums">
              {formatPrice(product.price)}
            </span>
            {product.mrp && product.mrp > product.price && (
              <>
                <span className="text-lg text-ink-mute line-through tabular-nums">
                  {formatPrice(product.mrp)}
                </span>
                <span className="mb-1 rounded-full bg-pitch/10 px-2.5 py-0.5 text-xs font-bold uppercase text-pitch">
                  Save {discount}%
                </span>
              </>
            )}
          </div>
          <p className="mt-1 text-xs text-ink-mute">Inclusive of all taxes</p>

          <p className="mt-5 text-base leading-relaxed text-ink-soft">{product.description}</p>

          {product.badges && product.badges.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <AddToCart product={product} />

          {/* trust row */}
          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
            <MiniTrust icon={<ShieldIcon className="h-5 w-5" />} text="100% genuine" />
            <MiniTrust icon={<TruckIcon className="h-5 w-5" />} text="Fast delivery" />
            <MiniTrust icon={<MedalIcon className="h-5 w-5" />} text="Hand-checked" />
          </div>

          {/* specs + features */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="eyebrow text-ink-mute">Specifications</h2>
              <dl className="mt-3 divide-y divide-line">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between py-2.5 text-sm">
                    <dt className="text-ink-mute">{s.label}</dt>
                    <dd className="font-medium text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="eyebrow text-ink-mute">Highlights</h2>
              <ul className="mt-3 flex flex-col gap-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-pitch" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            You might also like
          </h2>
          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MiniTrust({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <span className="text-pitch">{icon}</span>
      <span className="text-xs font-medium text-ink-soft">{text}</span>
    </div>
  );
}
