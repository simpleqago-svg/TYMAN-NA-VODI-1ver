import { vipContent, vipFeatures, sectionActions } from "@/lib/content";
import { BookButton } from "@/components/booking/BookButton";
import { BlockAction } from "@/components/ui/SectionCta";
import { Reveal } from "@/components/ui/Reveal";
import { VipGallery } from "@/components/sections/VipGallery";

export function VipSection() {
  return (
    <section
      id="vip"
      className="section-shell section-tone-vip py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="vip-frame p-5 md:p-8">
          <Reveal>
            <div className="mb-6 flex flex-col gap-4 border-b border-brand-burgundy/15 pb-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="section-label mb-3 text-brand-burgundy-light/90">
                  Отдельный формат
                </p>
                <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
                  {vipContent.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {vipContent.description}
                </p>
              </div>
              <p className="max-w-xs text-xs leading-relaxed text-muted/80">
                Больше приватности и возможностей, чем у обычного стола в зале.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 lg:gap-px lg:bg-border">
            <Reveal>
              <VipGallery />
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-col justify-center border-t border-border p-6 md:p-8 lg:border-t-0 lg:border-l lg:bg-surface/30">
                <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {vipFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-snug text-foreground/85"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-burgundy-light" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-brand-burgundy/15 pt-6">
                  <BookButton type="vip" className="btn-primary w-full sm:w-auto">
                    Забронировать VIP-комнату
                  </BookButton>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <BlockAction
              hint={sectionActions.vip.hint}
              href={sectionActions.vip.href}
              label={sectionActions.vip.label}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
