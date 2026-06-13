import { whyItems } from "@/lib/content";
import { BookButton } from "@/components/booking/BookButton";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { WhyCardCarousel } from "@/components/sections/WhyCardCarousel";

function WhyIcon({ id }: { id: (typeof whyItems)[number]["id"] }) {
  const stroke = "currentColor";
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (id) {
    case "atmosphere":
      return (
        <svg {...props}>
          <path
            d="M10 3.5a4.5 4.5 0 0 1 4.5 4.5c0 3-4.5 8.5-4.5 8.5S5.5 11 5.5 8a4.5 4.5 0 0 1 4.5-4.5Z"
            stroke={stroke}
            strokeWidth="1.2"
          />
          <circle cx="10" cy="8" r="1.5" stroke={stroke} strokeWidth="1.2" />
        </svg>
      );
    case "hookah":
      return (
        <svg {...props}>
          <path
            d="M6 15V9.5M14 15V9.5M6 9.5h8M10 9.5V5M8.5 5h3"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M7 5c0-1.5 1.2-2.5 3-2.5s3 1 3 2.5"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "kitchen":
      return (
        <svg {...props}>
          <path
            d="M4 8h12M6 8V5.5A2 2 0 0 1 10 5.5M14 8V5.5A2 2 0 0 0 10 5.5M10 5.5V15"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "vip":
      return (
        <svg {...props}>
          <path
            d="M4.5 8.5 10 4l5.5 4.5V16a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5Z"
            stroke={stroke}
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path d="M8 16.5v-4h4v4" stroke={stroke} strokeWidth="1.2" />
        </svg>
      );
  }
}

export function WhySection() {
  return (
    <section id="why" className="section-shell section-tone-base border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label mb-6">Почему сюда</p>
            <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
              Место для полноценного вечера
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Tyman na Vodi — не просто кальянная. Здесь складывается весь вечер:
              атмосфера, сервис и комфорт, из-за которых хочется остаться дольше.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-px bg-border sm:grid-cols-2">
          {whyItems.map((item, index) => (
            <StaggerItem key={item.id}>
              <article className="group flex h-full flex-col bg-surface">
                <WhyCardCarousel images={item.images} />

                <div className="flex flex-1 flex-col border-t border-border p-7 md:p-8">
                  <div className="flex items-center gap-3 text-brand-green-muted">
                    <WhyIcon id={item.id} />
                    <span className="section-label text-brand-green-muted/80">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-foreground md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-muted">
            Узнали себя? Забронируйте стол — и вечер уже начнётся.
          </p>
          <BookButton className="btn-primary shrink-0">Забронировать стол</BookButton>
        </Reveal>
      </div>
    </section>
  );
}
