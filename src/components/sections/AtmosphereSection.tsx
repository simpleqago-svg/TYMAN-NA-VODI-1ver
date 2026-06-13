import { Reveal } from "@/components/ui/Reveal";
import { AtmosphereGallery } from "@/components/sections/AtmosphereGallery";

export function AtmosphereSection() {
  return (
    <section
      id="atmosphere"
      className="section-shell section-tone-deep border-t border-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label mb-6">Атмосфера</p>
            <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
              Почувствуйте вечер, прежде чем прийти
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Жизнь заведения — гости, свет, кальяны и разговоры. Найдите свой
              сценарий и посмотрите, как это выглядит здесь.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <AtmosphereGallery />
        </Reveal>
      </div>
    </section>
  );
}
