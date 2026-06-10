"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { BookButton } from "@/components/booking/BookButton";

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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/88 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link
          href="/"
          className="section-label shrink-0 text-foreground transition hover:text-muted"
        >
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-6 md:gap-10">
          <Link href="/menu" className="section-label transition hover:text-foreground">
            Меню
          </Link>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="section-label transition hover:text-foreground"
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/94 p-4 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl justify-center">
        <BookButton className="btn-primary w-full max-w-md md:w-auto md:min-w-[280px]">
          Забронировать стол
        </BookButton>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-border pb-24 md:pb-20">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-2 md:px-8">
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
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <span className="section-label mb-1 block">Instagram</span>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
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
      </div>
    </footer>
  );
}
