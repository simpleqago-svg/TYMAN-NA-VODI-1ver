"use client";

import Image from "next/image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { heroCycleWords } from "@/lib/content";
import { lovableHeroImage } from "@/lib/lovable-content";
import { LovableCTA } from "./primitives";

export function LovableHero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <Image
        src={lovableHeroImage.src}
        alt={lovableHeroImage.alt}
        fill
        priority
        className="object-cover opacity-70"
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-background/75" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--background) 80%, transparent) 0%, transparent 40%, var(--background) 100%)",
        }}
      />
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <div className="mb-8 text-[11px] tracking-[0.32em] text-muted-foreground uppercase">
          Belgrade · Lounge у воды
        </div>
        <h1 className="font-display mb-10 text-5xl leading-[1.02] font-light tracking-tight md:text-7xl lg:text-8xl">
          Вечер для{" "}
          <AnimatedTextCycle
            words={[...heroCycleWords]}
            interval={5500}
            className="font-display text-5xl text-accent-gold italic md:text-7xl lg:text-8xl"
          />
        </h1>
        <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
          Lounge у воды в Белграде. Бар, кухня и кальяны — один вечер в одном месте.
        </p>
        <LovableCTA href="#resos-table">Забронировать стол</LovableCTA>
      </div>
    </section>
  );
}
