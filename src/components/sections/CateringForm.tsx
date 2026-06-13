"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cateringContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type SubmitState = "idle" | "loading" | "email-success" | "error";

export function CateringForm() {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      telegram: String(data.get("telegram") ?? ""),
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
        setState("email-success");
        setSuccessMessage(result.message);
        form.reset();
        return;
      }

      router.push(result.redirect ?? "/catering/thanks");
    } catch {
      setState("error");
      setErrorMessage("Не удалось отправить заявку. Проверьте соединение.");
    }
  };

  if (state === "email-success") {
    return (
      <div className="mt-8 border border-border-green/40 bg-brand-green-dim p-6 md:p-8">
        <p className="font-display text-2xl text-foreground">Спасибо!</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{successMessage}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={siteConfig.catering.pdfUrl} className="btn-secondary" download>
            {cateringContent.pdfDownloadLabel}
          </a>
          <button type="button" className="btn-primary" onClick={() => setState("idle")}>
            Отправить ещё заявку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={siteConfig.catering.pdfUrl} className="btn-secondary" target="_blank" rel="noreferrer">
          {cateringContent.pdfLabel}
        </a>
        <a
          href={siteConfig.catering.telegramBotUrl}
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cateringContent.telegramLabel}
        </a>
      </div>

      <p className="text-xs leading-relaxed text-muted/80">{cateringContent.formHint}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <p className="section-label">{cateringContent.formTitle}</p>

        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Имя *</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-green"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Для отправки PDF на почту"
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-green"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
            Телефон
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+7 ..."
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-green"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
            Telegram
          </span>
          <input
            name="telegram"
            type="text"
            placeholder="@username"
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-green"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
            Комментарий
          </span>
          <textarea
            name="comment"
            rows={3}
            placeholder="Дата, количество гостей, формат..."
            className="w-full resize-none border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-border-green"
          />
        </label>

        {state === "error" && (
          <p className="text-sm text-brand-burgundy-light">{errorMessage}</p>
        )}

        <button type="submit" className="btn-primary mt-2" disabled={state === "loading"}>
          {state === "loading" ? "Отправляем..." : "Отправить заявку"}
        </button>

        <p className="text-xs text-muted/70">
          Без email заявка сохранится, PDF будет на{" "}
          <Link href="/catering/thanks" className="underline hover:text-foreground">
            странице «Спасибо»
          </Link>{" "}
          или в Telegram-боте.
        </p>
      </form>
    </div>
  );
}
