import Link from "next/link";
import { Header, Footer } from "@/components/layout/Shell";
import { cateringContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Условия кейтеринга — Tyman na Vodi",
};

export default function CateringConditionsPage() {
  return (
    <>
      <Header />
      <main className="section-shell section-tone-light pt-28 pb-20">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <Link href="/#catering" className="text-sm text-muted hover:text-foreground">
            ← Назад
          </Link>

          <p className="section-label mb-4 mt-8">Кейтеринг</p>
          <h1 className="font-display text-4xl font-light text-foreground">
            Условия кейтеринга и корпоративов
          </h1>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Форматы: приём в lounge Tyman na Vodi или выездной кейтеринг. В программу
              входят кальяны, кухня, напитки и отдельная зона под вашу компанию.
            </p>
            <p>
              Минимальное количество гостей, депозит и меню согласуются индивидуально.
              Оставьте заявку на главной — менеджер свяжется с вами для расчёта.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={siteConfig.catering.pdfUrl} className="btn-primary" download>
              {cateringContent.pdfDownloadLabel}
            </a>
            <Link href="/#catering" className="btn-secondary">
              Оставить заявку
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
