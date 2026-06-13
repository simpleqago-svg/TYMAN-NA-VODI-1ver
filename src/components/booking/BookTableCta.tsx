"use client";

import { motion } from "framer-motion";
import { BookButton } from "@/components/booking/BookButton";
import { useBooking } from "@/components/booking/BookingProvider";
import { useBookCtaPlacement } from "@/components/booking/useBookCtaPlacement";
import { springSmooth } from "@/lib/motion";

const isMinimal = process.env.NEXT_PUBLIC_SITE_THEME === "minimal";

type BookCtaSlotProps = {
  variant: "hero" | "floating";
  className?: string;
};

export function BookCtaSlot({ variant, className = "" }: BookCtaSlotProps) {
  const { isOpen } = useBooking();
  const placement = useBookCtaPlacement(isOpen);

  if (isMinimal && variant === "floating") return null;
  if (placement !== variant) return null;

  if (variant === "floating") {
    return (
      <motion.div
        layout
        layoutId="book-table-cta"
        transition={springSmooth}
        className={`floating-book-cta pointer-events-none fixed z-40 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 sm:right-7 md:bottom-7 md:right-10 lg:right-14 ${className}`.trim()}
        aria-label="Быстрое бронирование"
      >
        <BookButton
          floating
          className="btn-primary pointer-events-auto min-w-[210px] px-5 py-3 text-[0.68rem] sm:min-w-[230px] md:min-w-[250px]"
        >
          Забронировать стол
        </BookButton>
      </motion.div>
    );
  }

  if (isMinimal) {
    return (
      <div className={className}>
        <BookButton className="btn-secondary">Забронировать стол</BookButton>
      </div>
    );
  }

  return (
    <motion.div
      layout
      layoutId="book-table-cta"
      transition={springSmooth}
      className={className}
    >
      <BookButton className="btn-primary">Забронировать стол</BookButton>
    </motion.div>
  );
}

export function BookTableCta() {
  if (isMinimal) return null;
  return <BookCtaSlot variant="floating" />;
}
