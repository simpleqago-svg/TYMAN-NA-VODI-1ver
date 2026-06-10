import Link from "next/link";
import { Header, Footer } from "@/components/layout/Shell";
import { menuPageSections } from "@/lib/content";
import { BookButton } from "@/components/booking/BookButton";

export const metadata = {
  title: "Меню — Tyman na Vodi",
  description: "Кальяны, кухня, напитки и десерты в Tyman na Vodi",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link
            href="/"
            className="text-sm text-muted transition hover:text-foreground"
          >
            ← На главную
          </Link>

          <p className="section-label mb-3 mt-8">Меню</p>
          <h1 className="font-display text-5xl font-light text-foreground md:text-6xl">
            Tyman na Vodi
          </h1>

          <div className="mt-10 border border-border p-6 md:p-8">
            <p className="text-sm leading-relaxed text-muted">
              На старте — меню в формате PDF. Ниже — preview структурированной версии
              для согласования макета.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" className="btn-primary">
                Открыть меню PDF
              </button>
              <button type="button" className="btn-secondary">
                Скачать PDF
              </button>
            </div>
            <p className="mt-4 text-xs text-muted/70">PDF-файл будет добавлен перед публикацией</p>
          </div>

          <div className="mt-16 space-y-16">
            {menuPageSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="font-display text-3xl font-light text-foreground">{section.title}</h2>
                <div className="mt-6 space-y-5">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        {item.note ? (
                          <p className="mt-0.5 text-sm text-muted">{item.note}</p>
                        ) : null}
                      </div>
                      <p className="shrink-0 text-sm text-muted">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BookButton>Забронировать стол</BookButton>
            <Link href="/" className="btn-secondary">
              На главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
