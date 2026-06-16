import Image from "next/image";
import Link from "next/link";
import {
  lovableGallery,
  lovableMenuTeaser,
  lovableReviews,
  lovableScenarios,
  lovableVipBullets,
  lovableWhyCards,
} from "@/lib/lovable-content";
import { LovableBookingForm, LovableCateringForm } from "./LovableForms";
import { LovableHero } from "./LovableHero";
import { LovableCTA, LovableSectionLabel } from "./primitives";
import { LovableVipBookButton } from "./LovableVipBookButton";

export function LovableHome() {
  return (
    <main>
      <LovableHero />

      <section className="px-6 py-28 md:py-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl md:mb-24">
            <LovableSectionLabel>Почему сюда</LovableSectionLabel>
            <h2 className="mb-6 text-4xl leading-[1.05] md:text-6xl">Почему сюда</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Lounge у воды — бар, кухня и кальяны в одном вечере.
            </p>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {lovableWhyCards.map((card) => (
              <div
                key={card.title}
                className="flex min-h-[260px] flex-col bg-background p-8 md:p-10"
              >
                <h3 className="font-display mb-5 text-2xl leading-tight md:text-3xl">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <LovableCTA href="#resos-table">Забронировать стол</LovableCTA>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-28 md:py-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl md:mb-24">
            <LovableSectionLabel>Атмосфера</LovableSectionLabel>
            <h2 className="mb-6 text-4xl leading-[1.05] md:text-6xl">Выберите свой вечер</h2>
          </div>

          <div className="mb-24 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4">
            {lovableGallery.map((item, index) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={85}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {lovableScenarios.map((scenario) => (
              <div key={scenario.title} className="min-h-[200px] bg-surface p-8 md:p-10">
                <h3 className="font-display mb-4 text-2xl">{scenario.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{scenario.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="resos-vip"
        className="scroll-mt-20 px-6 py-28 md:py-40 lg:px-10"
        style={{ backgroundColor: "var(--surface-vip)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
            <Image
              src="/images/vip/room.jpg"
              alt="VIP-комната"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
          </div>
          <div>
            <LovableSectionLabel>VIP</LovableSectionLabel>
            <h2 className="mb-8 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              VIP-комната для вашей компании
            </h2>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Изолированное пространство для вашей компании — свой формат вечера.
            </p>
            <ul className="mb-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {lovableVipBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 border-b border-border pb-3 text-sm text-foreground/90"
                >
                  <span className="mt-1.5 text-[8px] text-accent-gold">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <LovableVipBookButton />
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
            <LovableSectionLabel>Меню</LovableSectionLabel>
            <h2 className="mb-6 text-4xl leading-[1.05] md:text-6xl">Меню</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Кальяны, кухня и бар — всё для вечера уже здесь.
            </p>
          </div>
          <div className="mb-16 grid gap-4 md:grid-cols-3 md:gap-6">
            {lovableMenuTeaser.map((item) => (
              <Link
                href="/menu"
                key={item.title}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-8">
                  <h3 className="font-display text-3xl md:text-4xl">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-xs tracking-[0.18em] text-foreground uppercase transition-colors duration-200 hover:border-foreground md:text-sm"
            >
              Посмотреть меню
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-28 md:py-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl md:mb-20">
            <LovableSectionLabel>Отзывы</LovableSectionLabel>
            <h2 className="text-4xl leading-[1.05] md:text-6xl">Отзывы гостей</h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {lovableReviews.map((review) => (
              <figure
                key={review.name}
                className="flex min-h-[300px] flex-col bg-surface p-8 md:p-10"
              >
                <div className="mb-6 text-sm tracking-[0.3em] text-accent-gold" aria-label="5 stars">
                  ★★★★★
                </div>
                <blockquote className="font-display flex-1 text-xl leading-snug md:text-2xl">
                  «{review.quote}»
                </blockquote>
                <figcaption className="mt-8 flex justify-between text-sm text-muted-foreground">
                  <span className="text-foreground">{review.name}</span>
                  <span>{review.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:py-40 lg:px-10">
        <div className="mx-auto grid max-w-5xl items-start gap-16 lg:grid-cols-2">
          <div>
            <LovableSectionLabel>Кейтеринг</LovableSectionLabel>
            <h2 className="mb-8 text-4xl leading-[1.05] md:text-5xl">Кейтеринг и корпоративы</h2>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Выездной кальянный формат и private events в зале. Оставьте контакт — пришлём
              условия.
            </p>
          </div>
          <LovableCateringForm />
        </div>
      </section>

      <section id="resos-table" className="scroll-mt-20 bg-surface px-6 py-28 md:py-40 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <LovableSectionLabel>Бронирование</LovableSectionLabel>
            <h2 className="mb-6 text-4xl leading-[1.05] md:text-6xl">Забронируйте стол</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Вечером места разбирают быстро — лучше закрепить стол заранее.
            </p>
          </div>
          <LovableBookingForm />
        </div>
      </section>
    </main>
  );
}
