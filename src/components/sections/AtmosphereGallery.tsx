"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { crossfade, quickTween } from "@/lib/motion";
import { atmosphereGallery, scenarios } from "@/lib/content";

type ViewMode = "scenario" | "gallery";

export function AtmosphereGallery() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [mode, setMode] = useState<ViewMode>("scenario");
  const stripRef = useRef<HTMLDivElement>(null);

  const scenario = scenarios[scenarioIndex];
  const galleryItem = atmosphereGallery[galleryIndex];

  const isScenarioView = mode === "scenario";
  const activeImage = isScenarioView
    ? { src: scenario.image, alt: scenario.imageAlt, key: scenario.id }
    : { src: galleryItem.src, alt: galleryItem.alt, key: galleryItem.id };

  const selectScenario = useCallback((index: number) => {
    setScenarioIndex(index);
    setMode("scenario");
    const linked = scenarios[index].galleryId;
    const galleryIdx = atmosphereGallery.findIndex((item) => item.id === linked);
    if (galleryIdx >= 0) setGalleryIndex(galleryIdx);
  }, []);

  const selectGallery = useCallback((index: number) => {
    setGalleryIndex(index);
    setMode("gallery");
  }, []);

  const next = useCallback(() => {
    if (isScenarioView) {
      selectScenario((scenarioIndex + 1) % scenarios.length);
      return;
    }
    selectGallery((galleryIndex + 1) % atmosphereGallery.length);
  }, [galleryIndex, isScenarioView, scenarioIndex, selectGallery, selectScenario]);

  const prev = useCallback(() => {
    if (isScenarioView) {
      selectScenario((scenarioIndex - 1 + scenarios.length) % scenarios.length);
      return;
    }
    selectGallery(
      (galleryIndex - 1 + atmosphereGallery.length) % atmosphereGallery.length,
    );
  }, [galleryIndex, isScenarioView, scenarioIndex, selectGallery, selectScenario]);

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.querySelector<HTMLElement>(
      `[data-index="${galleryIndex}"]`,
    );
    thumb?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [galleryIndex]);

  return (
    <div className="mt-6">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="section-label">Ваш сценарий</p>

        <div className="atmosphere-scroll flex gap-2 overflow-x-auto pb-0.5">
          {scenarios.map((item, index) => {
            const isActive = isScenarioView && index === scenarioIndex;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectScenario(index)}
                className={`shrink-0 border px-4 py-2.5 text-left transition ${
                  isActive
                    ? "border-border-green bg-brand-green-dim text-foreground"
                    : "border-border bg-surface text-muted hover:border-border-green hover:text-foreground"
                }`}
              >
                <span className="block whitespace-nowrap font-display text-sm md:text-base">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden border border-border bg-surface">
        <div className="relative aspect-[16/10] md:aspect-[21/9]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeImage.key}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={crossfade}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority={scenarioIndex === 0 && isScenarioView}
                quality={92}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-8">
            <AnimatePresence mode="wait" initial={false}>
              {isScenarioView ? (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={quickTween}
                  className="max-w-2xl"
                >
                  <h3 className="font-display text-2xl text-foreground md:text-3xl">
                    {scenario.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {scenario.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={galleryItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={quickTween}
                >
                  <p className="section-label text-brand-green-muted/90">Атмосфера</p>
                  <p className="mt-2 font-display text-xl text-foreground md:text-2xl">
                    {galleryItem.mood}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Предыдущий кадр"
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center border border-border/80 bg-background/60 text-foreground/80 backdrop-blur-sm transition hover:border-border-green hover:text-foreground"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Следующий кадр"
                onClick={next}
                className="flex h-9 w-9 items-center justify-center border border-border/80 bg-background/60 text-foreground/80 backdrop-blur-sm transition hover:border-border-green hover:text-foreground"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-5 py-3 md:px-8">
          <p className="section-label text-muted/70">Ещё кадры атмосферы</p>
        </div>

        <div
          ref={stripRef}
          className="atmosphere-scroll flex gap-px overflow-x-auto bg-border"
        >
          {atmosphereGallery.map((item, index) => {
            const isActive = !isScenarioView && index === galleryIndex;
            const isScenarioPhoto = scenarios.some(
              (entry) => entry.galleryId === item.id,
            );

            return (
              <button
                key={item.id}
                type="button"
                data-index={index}
                aria-label={item.alt}
                aria-current={isActive}
                onClick={() => selectGallery(index)}
                className={`relative h-20 w-28 shrink-0 overflow-hidden bg-surface transition md:h-24 md:w-36 ${
                  isActive
                    ? "ring-1 ring-inset ring-brand-green-muted/70"
                    : "opacity-55 hover:opacity-85"
                }`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  quality={80}
                  className="object-cover"
                  sizes="144px"
                  aria-hidden
                />
                {isScenarioPhoto && (
                  <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-green-muted" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
