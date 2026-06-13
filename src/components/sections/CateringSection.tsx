import Image from "next/image";
import { cateringContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { CateringForm } from "@/components/sections/CateringForm";

export function CateringSection() {
  return (
    <section
      id="catering"
      className="section-shell section-tone-base py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[520px]">
            <Image
              src={cateringContent.image}
              alt={cateringContent.imageAlt}
              fill
              className="object-cover opacity-90"
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>

          <Reveal>
            <div className="flex flex-col justify-center border-t border-border p-7 md:p-10 lg:border-t-0 lg:border-l">
              <p className="section-label mb-4">{cateringContent.label}</p>
              <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
                {cateringContent.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {cateringContent.description}
              </p>

              <CateringForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
