"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { HookahSmokeBackground } from "@/components/ui/animated-shader-hero";
import { BookButton } from "@/components/booking/BookButton";
import { heroCycleWords, heroSlides } from "@/lib/content";
import { easeInOutSmooth, staggerContainer } from "@/lib/motion";

const SLIDE_INTERVAL = 5500;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-background">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.4, ease: easeInOutSmooth }}
              aria-hidden={!isActive}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ scale: isActive ? 1.06 : 1 }}
                transition={{
                  duration: SLIDE_INTERVAL / 1000,
                  ease: "linear",
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index < 2}
                  quality={92}
                  className="object-cover"
                  style={{ objectPosition: slide.objectPosition }}
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          );
        })}

        <HookahSmokeBackground />
        <div className="pointer-events-none absolute inset-0 bg-background/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-background/35" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-36 md:px-8 md:pb-36">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1, ease: easeInOutSmooth },
              },
            }}
            className="font-display text-[2.5rem] font-light leading-none tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Tyman na Vodi
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: easeInOutSmooth },
              },
            }}
            className="mt-8 text-left text-lg font-light leading-snug text-foreground/85 sm:text-xl md:text-2xl"
          >
            Lounge-пространство для{" "}
            <AnimatedTextCycle
              words={[...heroCycleWords]}
              interval={SLIDE_INTERVAL}
              onIndexChange={setActiveIndex}
              className="font-display font-medium text-brand-green-muted"
            />
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.85, ease: easeInOutSmooth },
              },
            }}
            className="mt-12"
          >
            <BookButton className="btn-primary">Забронировать стол</BookButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
