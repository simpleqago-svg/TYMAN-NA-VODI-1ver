"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { crossfade, quickTween } from "@/lib/motion";
import { vipContent } from "@/lib/content";

export function VipGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visuals = vipContent.visuals;
  const active = visuals[activeIndex];

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % visuals.length);
  }, [visuals.length]);

  const prev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + visuals.length) % visuals.length);
  }, [visuals.length]);

  return (
    <div className="relative overflow-hidden border border-brand-burgundy/15 bg-surface">
      <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={crossfade}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority={activeIndex === 0}
              quality={92}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="section-label text-brand-burgundy-light/90">{active.label}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {active.caption}
          </p>
        </div>

        <div className="absolute right-4 top-4 flex gap-2 md:right-6 md:top-6">
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={prev}
            className="flex h-8 w-8 items-center justify-center border border-border/80 bg-background/60 text-foreground/80 backdrop-blur-sm transition hover:border-border-green"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Следующее фото"
            onClick={next}
            className="flex h-8 w-8 items-center justify-center border border-border/80 bg-background/60 text-foreground/80 backdrop-blur-sm transition hover:border-border-green"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
        {visuals.map((visual, index) => (
          <button
            key={visual.id}
            type="button"
            aria-label={visual.label}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`relative h-16 overflow-hidden bg-surface transition md:h-20 ${
              index === activeIndex ? "opacity-100" : "opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={visual.src}
              alt=""
              fill
              quality={75}
              className="object-cover"
              sizes="120px"
              aria-hidden
            />
            <span className="absolute inset-x-0 bottom-0 bg-background/75 px-1 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-foreground/80">
              {visual.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
