import { reviews, sectionActions } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { BlockAction } from "@/components/ui/SectionCta";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Рейтинг ${rating} из 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-brand-burgundy-light" : "text-border"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function reviewGridClass(index: number) {
  if (index < 2) return "lg:col-span-3";
  if (index === 4) return "sm:col-span-2 lg:col-span-2";
  return "lg:col-span-2";
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell section-tone-soft section-continues py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-xl">
            <p className="section-label mb-4">Отзывы</p>
            <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
              Что говорят гости
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
          {reviews.map((review, index) => {
            const isFeatured = index < 2;

            return (
              <StaggerItem
                key={review.author + review.date}
                className={`h-full ${reviewGridClass(index)}`}
              >
                <article
                  className={`flex h-full flex-col bg-surface ${
                    isFeatured ? "min-h-[220px] p-7 md:min-h-[240px] md:p-8" : "p-6 md:p-7"
                  }`}
                >
                  <StarRating rating={review.rating} />
                  <p
                    className={`text-glow-hover mt-4 flex-1 leading-relaxed text-foreground/90 ${
                      isFeatured ? "text-sm md:text-base" : "text-sm"
                    }`}
                  >
                    «{review.text}»
                  </p>
                  <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-[0.65rem] tracking-wider text-muted"
                      aria-hidden="true"
                    >
                      {review.initials}
                    </span>
                    <div className="min-w-0 text-xs text-muted">
                      <p className="truncate text-foreground">{review.author}</p>
                      <p className="mt-0.5">
                        {review.source}
                        {review.date ? ` · ${review.date}` : ""}
                      </p>
                    </div>
                  </footer>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal>
          <BlockAction
            hint={sectionActions.reviews.hint}
            href={sectionActions.reviews.href}
            label={sectionActions.reviews.label}
          />
        </Reveal>
      </div>
    </section>
  );
}
