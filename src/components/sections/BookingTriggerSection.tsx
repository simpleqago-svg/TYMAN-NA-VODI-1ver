import { BookButton } from "@/components/booking/BookButton";
import { Reveal } from "@/components/ui/Reveal";
import { bookingTriggerContent } from "@/lib/content";

export function BookingTriggerSection() {
  return (
    <section
      id="booking"
      className="section-shell section-tone-light border-t border-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-2xl border border-border px-8 py-14 text-center md:px-14 md:py-16">
            <div
              className="pointer-events-none absolute inset-x-8 top-1/2 h-32 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--brand-green-dim),transparent_70%)] opacity-60"
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
                {bookingTriggerContent.title}
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                {bookingTriggerContent.subtitle}
              </p>
              <div className="mt-9">
                <BookButton className="btn-primary min-w-[240px]">
                  {bookingTriggerContent.ctaLabel}
                </BookButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
