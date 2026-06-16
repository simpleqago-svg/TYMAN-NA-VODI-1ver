"use client";

import { useEffect, useState } from "react";

export function LovableStickyBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
      setVisible(scrolled && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("resos-table")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href="#resos-table"
      onClick={handleClick}
      aria-label="Забронировать стол"
      className={`fixed right-5 bottom-5 z-40 inline-flex items-center justify-center bg-burgundy px-6 py-4 text-[11px] tracking-[0.2em] text-foreground uppercase shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)] transition-all duration-300 hover:bg-burgundy-hover md:right-8 md:bottom-8 md:px-7 md:py-4 md:text-xs ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Забронировать стол
    </a>
  );
}
