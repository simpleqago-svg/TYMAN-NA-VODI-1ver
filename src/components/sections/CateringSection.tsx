"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { cateringContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function CateringSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="catering" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[480px]">
            <Image
              src={cateringContent.image}
              alt={cateringContent.imageAlt}
              fill
              className="object-cover opacity-75"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          <Reveal>
            <div className="flex flex-col justify-center border-t border-border p-8 md:p-12 lg:border-t-0 lg:border-l">
              <p className="section-label mb-6">Кейтеринг</p>
              <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
                {cateringContent.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                {cateringContent.description}
              </p>

              {submitted ? (
                <div className="mt-10 border border-border p-6 md:p-8">
                  <p className="font-display text-2xl text-foreground">Спасибо!</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Заявка принята. Мы свяжемся с вами в ближайшее время.
                  </p>
                  <button type="button" className="btn-secondary mt-8">
                    {cateringContent.pdfLabel}
                  </button>
                  <p className="mt-4 text-xs text-muted/70">
                    PDF условий — mock для согласования макета
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
                      Имя
                    </span>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/25"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
                      Телефон
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      required
                      placeholder="+7 ..."
                      className="w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/25"
                    />
                  </label>
                  <button type="submit" className="btn-primary mt-2">
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
