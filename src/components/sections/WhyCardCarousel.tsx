"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { crossfade } from "@/lib/motion";

type Slide = { src: string; alt: string };

export function WhyCardCarousel({ images }: { images: readonly Slide[] }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const count = images.length;
  const slide = images[index];

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + count) % count);
  }, [count]);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart === null) return;

    const diff = touchStart - event.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }

    setTouchStart(null);
  };

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={crossfade}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            quality={90}
            draggable={false}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Предыдущее фото"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border/80 bg-background/70 text-foreground/80 opacity-80 backdrop-blur-sm transition hover:border-border-green hover:text-foreground md:opacity-0 md:group-hover:opacity-100"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Следующее фото"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-border/80 bg-background/70 text-foreground/80 opacity-80 backdrop-blur-sm transition hover:border-border-green hover:text-foreground md:opacity-0 md:group-hover:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Фото ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(dotIndex);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  dotIndex === index
                    ? "w-5 bg-brand-green-muted"
                    : "w-1.5 bg-foreground/35 hover:bg-foreground/55"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
