import Link from "next/link";
import { Header, Footer } from "@/components/layout/Shell";
import { cateringContent } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Спасибо — кейтеринг Tyman na Vodi",
  description: "Заявка принята. Скачайте PDF с условиями кейтеринга и корпоративов.",
};

export default function CateringThanksPage() {
  return (
    <>
      <Header />
      <main className="section-shell section-tone-light min-h-[70vh] pt-28 pb-20">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <p className="section-label mb-4">Кейтеринг</p>
          <h1 className="font-display text-4xl font-light text-foreground md:text-5xl">
            Спасибо!
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            Заявка принята. Мы свяжемся с вами по телефону или Telegram. А пока —
            скачайте PDF с условиями или получите файл через бота.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={siteConfig.catering.pdfUrl} className="btn-primary" download>
              {cateringContent.pdfDownloadLabel}
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

          <Link href="/#catering" className="mt-10 inline-block text-sm text-muted hover:text-foreground">
            ← Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
