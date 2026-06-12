"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4 sm:flex-row-reverse sm:gap-5">
      <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-xl2 bg-willow/40">
        <Image
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 sm:flex-col">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-willow/40 ring-2 transition-all sm:h-24 sm:w-20",
                active === i ? "ring-pitch" : "ring-transparent hover:ring-line",
              )}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
