import Link from "next/link";

export function AnnouncementBar() {
  return (
    <Link
      href="/shop"
      className="group block bg-gold text-ink"
      aria-label="Off-season monsoon sale — every bat flat ₹10,000. Shop now."
    >
      <div className="container-wide flex items-center justify-center gap-2 py-2 text-center">
        <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-ink/60 sm:inline-block" />
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
          Off-season monsoon sale · every bat flat{" "}
          <span className="font-bold">₹10,000</span>
          <span className="ml-2 hidden underline decoration-ink/40 underline-offset-2 group-hover:decoration-ink sm:inline">
            Shop now
          </span>
        </p>
        <span className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-ink/60 sm:inline-block" />
      </div>
    </Link>
  );
}
