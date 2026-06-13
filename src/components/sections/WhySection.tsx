import { whyItems, sectionActions } from "@/lib/content";
import { BlockAction } from "@/components/ui/SectionCta";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { WhyCardCarousel } from "@/components/sections/WhyCardCarousel";

export function WhySection() {
  return (
    <section id="why" className="section-shell section-tone-base section-after-hero py-16 md:py-24">
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
          {whyItems.map((item) => (
            <StaggerItem key={item.id}>
              <article className="group flex h-full flex-col bg-surface">
                <WhyCardCarousel images={item.images} />

                <div className="flex flex-1 flex-col border-t border-border p-7 md:p-8">
                  <h3 className="font-display text-xl text-foreground md:text-2xl">
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

        <Reveal>
          <BlockAction
            hint={sectionActions.why.hint}
            href={sectionActions.why.href}
            label={sectionActions.why.label}
          />
        </Reveal>
      </div>
    </section>
  );
}
