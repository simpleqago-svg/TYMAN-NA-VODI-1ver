"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { lovableInputClass, lovableLabelClass } from "./primitives";

export function LovableCateringForm() {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: "",
      phone: String(data.get("phone") ?? ""),
      telegram: "",
      comment: String(data.get("comment") ?? ""),
    };

    try {
      const response = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        setState("error");
        setErrorMessage(result.error ?? "Ошибка отправки");
        return;
      }

      if (result.flow === "email") {
        setState("success");
        return;
      }

      router.push(result.redirect ?? "/catering/thanks");
    } catch {
      setState("error");
      setErrorMessage("Не удалось отправить заявку. Проверьте соединение.");
    }
  };

  if (state === "success") {
    return (
      <div className="border border-border p-10 md:p-12">
        <h3 className="font-display mb-4 text-3xl">Спасибо</h3>
        <p className="mb-8 text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
        <a
          href={siteConfig.catering.pdfUrl}
          className="inline-flex items-center justify-center bg-burgundy px-8 py-4 text-xs tracking-[0.18em] text-foreground uppercase transition-colors hover:bg-burgundy-hover"
          download
        >
          Скачать условия
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 border border-border p-8 md:p-10">
      <div>
        <label className={lovableLabelClass}>Имя</label>
        <input type="text" name="name" required className={lovableInputClass} />
      </div>
      <div>
        <label className={lovableLabelClass}>Телефон</label>
        <input type="tel" name="phone" required placeholder="+381 ..." className={lovableInputClass} />
      </div>
      <div>
        <label className={lovableLabelClass}>Комментарий</label>
        <textarea name="comment" rows={3} className={`${lovableInputClass} resize-none`} />
      </div>
      {state === "error" && <p className="text-sm text-brand-burgundy-light">{errorMessage}</p>}
      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-4 inline-flex w-full items-center justify-center bg-burgundy px-8 py-4 text-xs tracking-[0.18em] text-foreground uppercase transition-colors duration-200 hover:bg-burgundy-hover disabled:opacity-60"
      >
        {state === "loading" ? "Отправляем..." : "Получить условия"}
      </button>
    </form>
  );
}

export function LovableBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [datetime, setDatetime] = useState("");
  const [guests, setGuests] = useState("2");
  const [comment, setComment] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const datePart = datetime ? datetime.split("T")[0] : "";
    const timePart = datetime ? datetime.split("T")[1] : "";

    const message = [
      "Здравствуйте! Хочу забронировать стол в Tyman na Vodi.",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      datePart ? `Дата: ${datePart}` : "",
      timePart ? `Время: ${timePart}` : "",
      `Гостей: ${guests}`,
      comment ? `Комментарий: ${comment}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.booking.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-border p-10 text-center md:p-12">
        <h3 className="font-display mb-4 text-3xl">Заявка принята</h3>
        <p className="text-muted-foreground">Мы свяжемся с вами для подтверждения брони.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 border border-border p-8 sm:grid-cols-2 md:p-10"
    >
      <div className="sm:col-span-1">
        <label className={lovableLabelClass}>Имя</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={lovableInputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label className={lovableLabelClass}>Телефон</label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+381 ..."
          className={lovableInputClass}
        />
      </div>
      <div className="sm:col-span-1">
        <label className={lovableLabelClass}>Дата и время</label>
        <input
          type="datetime-local"
          required
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          className={`${lovableInputClass} [color-scheme:dark]`}
        />
      </div>
      <div className="sm:col-span-1">
        <label className={lovableLabelClass}>Гостей</label>
        <input
          type="number"
          min={1}
          max={30}
          required
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={lovableInputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label className={lovableLabelClass}>Комментарий</label>
        <textarea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={`${lovableInputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center bg-burgundy px-8 py-4 text-xs tracking-[0.2em] text-foreground uppercase transition-colors duration-200 hover:bg-burgundy-hover sm:col-span-2"
      >
        Забронировать
      </button>
    </form>
  );
}
