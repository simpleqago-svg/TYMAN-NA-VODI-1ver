import Image from "next/image";
import { galleryImages, scenarios } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function AtmosphereSection() {
  const [featured, ...rest] = galleryImages;

  return (
    <section id="atmosphere" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="section-label mb-6">Атмосфера</p>
              <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
                Почувствуйте вечер, прежде чем прийти
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Живой зал, вечерний свет, кальяны и разговоры.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-px bg-border lg:grid-cols-12">
            <div className="relative aspect-[4/5] bg-background lg:col-span-7 lg:aspect-auto lg:min-h-[480px]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-px bg-border lg:col-span-5">
              {rest.slice(0, 4).map((image) => (
                <div key={image.src} className="relative aspect-square bg-background">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-24">
          <Reveal>
            <p className="section-label mb-6">Ваш сценарий</p>
            <h3 className="font-display text-2xl font-light text-foreground md:text-3xl">
              Узнайте себя в одной из ситуаций
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-px bg-border md:grid-cols-2">
            {scenarios.map((scenario, index) => (
              <Reveal key={scenario.id} delay={index * 90}>
                <article className="group relative min-h-[260px] bg-background">
                  <Image
                    src={scenario.image}
                    alt={scenario.title}
                    fill
                    className="object-cover opacity-50 transition duration-700 group-hover:opacity-70"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-border/50 p-6 md:p-8">
                    <h4 className="font-display text-xl text-foreground md:text-2xl">
                      {scenario.title}
                    </h4>
                    <p className="mt-2 max-w-md text-xs leading-relaxed text-muted">
                      {scenario.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
