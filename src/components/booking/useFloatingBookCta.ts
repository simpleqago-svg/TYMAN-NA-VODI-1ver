"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SCROLL_THRESHOLD = 360;
const INTERSECTION_THRESHOLD = 0.12;

export function useFloatingBookCta(isModalOpen: boolean) {
  const pathname = usePathname();
  const [inPageCtaVisible, setInPageCtaVisible] = useState(false);
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolledEnough(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  return scrolledEnough && !inPageCtaVisible && !isModalOpen;
}
