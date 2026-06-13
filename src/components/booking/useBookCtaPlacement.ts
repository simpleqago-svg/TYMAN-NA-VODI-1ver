"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const INTERSECTION_THRESHOLD = 0.12;

export type BookCtaPlacement = "hero" | "floating" | "hidden";

const isMinimalTheme = process.env.NEXT_PUBLIC_SITE_THEME === "minimal";

export function useBookCtaPlacement(isModalOpen: boolean): BookCtaPlacement {
  const pathname = usePathname();
  const [heroVisible, setHeroVisible] = useState(pathname === "/");
  const [inPageCtaVisible, setInPageCtaVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      { threshold: [0, 0.2, 0.45], rootMargin: "-10% 0px -20% 0px" },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-book-table-cta]"),
    );

    if (targets.length === 0) {
      setInPageCtaVisible(false);
      return;
    }

    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= INTERSECTION_THRESHOLD) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        });
        setInPageCtaVisible(visible.size > 0);
      },
      {
        threshold: [0, INTERSECTION_THRESHOLD, 0.35],
        rootMargin: "-8% 0px -8% 0px",
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  if (isModalOpen || inPageCtaVisible) return "hidden";
  if (isMinimalTheme) {
    if (pathname === "/" && heroVisible) return "hero";
    return "hidden";
  }
  if (pathname === "/" && heroVisible) return "hero";
  return "floating";
}
