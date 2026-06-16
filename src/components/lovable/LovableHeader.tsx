"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function LovableHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.14em] text-foreground uppercase"
          style={{ fontVariant: "small-caps" }}
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/menu" className="text-foreground transition-colors hover:text-accent-gold">
            Меню
          </Link>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-accent-gold"
          >
            Instagram
          </a>
        </nav>
        <a
          href="#resos-table"
          className="inline-flex items-center justify-center bg-burgundy px-5 py-2.5 text-xs tracking-[0.12em] text-foreground uppercase transition-colors duration-200 hover:bg-burgundy-hover md:text-sm"
        >
          Забронировать стол
        </a>
      </div>
    </header>
  );
}
