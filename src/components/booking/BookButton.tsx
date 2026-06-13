"use client";

import { motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

type BookButtonProps = {
  type?: "table" | "vip";
  className?: string;
  children: React.ReactNode;
};

export function BookButton({ type = "table", className = "", children }: BookButtonProps) {
  const { openBooking } = useBooking();

  return (
    <motion.button
      type="button"
      onClick={() => openBooking(type)}
      className={className || "btn-primary"}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
