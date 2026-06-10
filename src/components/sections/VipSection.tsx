import Image from "next/image";
import { vipFeatures } from "@/lib/content";
import { BookButton } from "@/components/booking/BookButton";
import { Reveal } from "@/components/ui/Reveal";

export function VipSection() {
  return (
    <section id="vip" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid border border-border lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[520px]">
            <Image
              src="/images/venue/entrance.jpg"
              alt="VIP-комната Tyman na Vodi"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          <Reveal>
            <div className="flex flex-col justify-center border-t border-border p-8 md:p-12 lg:border-t-0 lg:border-l">
              <p className="section-label mb-6">VIP-комната</p>
              <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
                VIP-комната для вашей компании
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Изолированное пространство для компании: большой экран, PlayStation 5,
                трансляции и вечер только своим кругом.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {vipFeatures.map((feature) => (
                  <li key={feature} className="text-sm text-muted">
                    — {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <BookButton type="vip">Забронировать VIP-комнату</BookButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
