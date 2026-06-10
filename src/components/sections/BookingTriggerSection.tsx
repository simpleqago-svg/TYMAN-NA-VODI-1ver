import { BookButton } from "@/components/booking/BookButton";

export function BookingTriggerSection() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="border border-border px-8 py-16 text-center md:px-16 md:py-20">
          <p className="section-label mb-6">Бронирование</p>
          <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
            Лучше бронировать заранее
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Ограниченное количество мест — особенно в выходные и в VIP-комнате.
          </p>
          <div className="mt-10">
            <BookButton>Забронировать стол</BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
