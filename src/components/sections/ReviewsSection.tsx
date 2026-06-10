import { reviews } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Рейтинг ${rating} из 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-accent" : "text-border"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-xl">
            <p className="section-label mb-6">Отзывы</p>
            <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
              Что говорят гости
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <Reveal key={review.author + review.date} delay={index * 50}>
              <article className="flex h-full flex-col bg-background p-6 md:p-7">
                <StarRating rating={review.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
