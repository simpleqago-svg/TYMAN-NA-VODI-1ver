"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { easeOutExpo, springSmooth } from "@/lib/motion";
import { useBooking } from "./BookingProvider";

export function BookingModal() {
  const { isOpen, bookingType, closeBooking } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeBooking]);

  const title =
    bookingType === "vip" ? "Забронировать VIP-комнату" : "Забронировать стол";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const label = bookingType === "vip" ? "VIP-комната" : "Стол";
    const message = [
      `Здравствуйте! Хочу забронировать ${label.toLowerCase()} в Tyman na Vodi.`,
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Дата: ${date}`,
      `Время: ${time}`,
      `Гостей: ${guests}`,
      comment ? `Комментарий: ${comment}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.booking.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closeBooking();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOutExpo }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeBooking}
            aria-label="Закрыть"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="card-surface relative w-full max-w-md p-6 sm:p-8"
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            transition={springSmooth}
          >
        <button
          type="button"
          onClick={closeBooking}
          className="absolute right-5 top-5 text-muted transition hover:text-foreground"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <p className="section-label mb-2">Бронирование</p>
        <h2 id="booking-title" className="font-display text-3xl text-foreground">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {bookingType === "vip"
            ? "VIP-комната бронируется по депозиту. Мы свяжемся с вами для подтверждения."
            : "Оставьте заявку — мы подтвердим бронь в WhatsApp."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Field label="Имя" value={name} onChange={setName} required />
          <Field
            label="Телефон"
            value={phone}
            onChange={setPhone}
            type="tel"
            placeholder="+7 ..."
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Дата" value={date} onChange={setDate} type="date" required />
            <Field label="Время" value={time} onChange={setTime} type="time" required />
          </div>
          <Field
            label="Количество гостей"
            value={guests}
            onChange={setGuests}
            type="number"
            min="1"
            required
          />
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
              Комментарий
            </span>
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              rows={3}
              placeholder="Повод, пожелания..."
              className="w-full resize-none border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/25"
            />
          </label>

          <button type="submit" className="btn-primary w-full">
            Отправить в WhatsApp
          </button>
        </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/25"
      />
    </label>
  );
}
