import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="container-wide grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-pitch">404</p>
        <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight">
          Played and missed
        </h1>
        <p className="mt-2 text-ink-soft">We couldn&apos;t find that page.</p>
        <Link href="/shop" className="btn btn-primary mt-6 px-7 py-3.5 text-sm">
          Back to the shop <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
