"use client";

import { useBooking } from "@/components/booking/BookingProvider";
import { LovableCTA } from "./primitives";

export function LovableVipBookButton() {
  const { openBooking } = useBooking();
  return (
    <LovableCTA onClick={() => openBooking("vip")}>Забронировать VIP-комнату</LovableCTA>
  );
}
