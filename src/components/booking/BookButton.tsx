"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

type BookButtonProps = {
  type?: "table" | "vip";
  floating?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function BookButton({
  type = "table",
  floating = false,
  className = "",
  children,
}: BookButtonProps) {
  const { openBooking } = useBooking();

  return (
    <motion.button
      type="button"
      onClick={() => openBooking(type)}
      className={className || "btn-primary"}
      data-book-table-cta={type === "table" && !floating ? "" : undefined}
      data-floating-book={floating ? "" : undefined}
      whileHover={{ scale: 1.015, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.button>
  );
}
