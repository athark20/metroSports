import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MetroSports home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-pitch text-paper transition-colors group-hover:bg-pitch-deep">
        {/* Cricket bat mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 4.2a2 2 0 0 1 2.8 2.8l-8.2 8.2-2.8-2.8z" />
          <path d="M8.3 12.4l-4 4a1.6 1.6 0 0 0 0 2.3l1 1a1.6 1.6 0 0 0 2.3 0l4-4" />
          <circle cx="17.6" cy="17.6" r="2.1" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold uppercase tracking-tight">
          Metro<span className="text-pitch">Sports</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-ink-mute">
          Cricket Co.
        </span>
      </span>
    </Link>
  );
}
