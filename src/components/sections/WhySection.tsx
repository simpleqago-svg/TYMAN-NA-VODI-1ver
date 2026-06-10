import { whyItems } from "@/lib/content";
import { BookButton } from "@/components/booking/BookButton";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  return (
    <section id="why" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label mb-6">Почему сюда</p>
            <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
              Место для полноценного вечера
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {whyItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="h-full bg-background p-8 md:p-10">
                <span className="section-label text-foreground/30">0{index + 1}</span>
                <h3 className="mt-4 font-display text-xl text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <BookButton>Забронировать стол</BookButton>
        </Reveal>
      </div>
    </section>
  );
}
