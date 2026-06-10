"use client";

import { useBooking } from "./BookingProvider";

type BookButtonProps = {
  type?: "table" | "vip";
  className?: string;
  children: React.ReactNode;
};

export function BookButton({ type = "table", className = "", children }: BookButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(type)}
      className={className || "btn-primary"}
    >
      {children}
    </button>
  );
}
