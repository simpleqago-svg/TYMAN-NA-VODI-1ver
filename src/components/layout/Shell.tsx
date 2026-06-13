"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { BookButton } from "@/components/booking/BookButton";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal } from "@/components/ui/Reveal";
import { springSmooth } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-border-green bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          href="/"
          className="section-label shrink-0 text-foreground text-glow-hover transition"
        >
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          <Link href="/menu" className="section-label text-glow-hover transition">
            Меню
          </Link>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="section-label text-glow-hover transition"
          >
            Instagram
          </a>
        </nav>

        <BookButton className="btn-primary shrink-0 px-4 py-2.5 text-[0.65rem]">
          Забронировать стол
        </BookButton>
      </div>
    </header>
  );
}

export function StickyBooking() {
  const { isOpen } = useBooking();

  if (isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ ...springSmooth, delay: 0.6 }}
      className="sticky-booking pointer-events-none fixed bottom-0 right-0 z-40 p-4 pr-5 pb-[max(1rem,env(safe-area-inset-bottom))] sm:pr-7 md:pr-10 lg:pr-14"
      aria-label="Быстрое бронирование"
    >
      <BookButton className="btn-primary pointer-events-auto w-auto min-w-[220px] max-w-[calc(100vw-2.5rem)] px-5 py-3 text-[0.68rem] shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_24px_var(--brand-green-glow)] sm:min-w-[240px] md:min-w-[260px]">
        Забронировать стол
      </BookButton>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer id="contacts" className="section-shell section-tone-light border-t border-border pb-28 md:pb-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-2 md:px-8">
        <Reveal>
          <div>
          <p className="section-label mb-6">Контакты</p>
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            {siteConfig.name}
          </h2>

          <ul className="mt-10 space-y-6 text-sm text-muted">
            <li>
              <span className="section-label mb-1 block">Адрес</span>
              {siteConfig.address}
            </li>
            <li>
              <span className="section-label mb-1 block">Телефон</span>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-glow-hover transition">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <span className="section-label mb-1 block">Instagram</span>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-glow-hover transition"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <span className="section-label mb-1 block">Часы работы</span>
              {siteConfig.hours.label}: {siteConfig.hours.weekdays}
              <br />
              Пт — Сб: {siteConfig.hours.weekend}
            </li>
          </ul>

          <p className="mt-12 text-xs text-muted/60">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden border border-border">
          <iframe
            title="Карта Tyman na Vodi"
            src={siteConfig.mapEmbedUrl}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-[1.05] opacity-80"
          />
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
