"use client";

import Image from "next/image";
import { HookahSmokeBackground } from "@/components/ui/animated-shader-hero";
import { BookButton } from "@/components/booking/BookButton";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/images/venue/main-hall.jpg"
          alt="Атмосфера Tyman na Vodi — вечерний зал"
          fill
          priority
          className="animate-hero-zoom object-cover"
          sizes="100vw"
        />
        <HookahSmokeBackground />
        <div className="pointer-events-none absolute inset-0 bg-background/56" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/25 via-background/48 to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-36 md:px-8 md:pb-36">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-5xl font-light leading-none tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
            {siteConfig.tagline}
          </p>

          <div className="mt-14">
            <BookButton className="btn-primary">Забронировать стол</BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
