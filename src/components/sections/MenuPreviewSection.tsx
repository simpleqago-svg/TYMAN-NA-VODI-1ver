import Image from "next/image";
import Link from "next/link";
import { menuCategories, menuPreviewContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export function MenuPreviewSection() {
  return (
    <section
      id="menu-preview"
      className="section-shell section-tone-soft py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label mb-4">{menuPreviewContent.label}</p>
            <h2 className="font-display text-3xl font-light leading-snug text-foreground md:text-4xl">
              {menuPreviewContent.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              {menuPreviewContent.description}
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
          {menuCategories.map((category) => (
            <StaggerItem key={category.id}>
              <article className="group flex h-full flex-col bg-surface">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    className="object-cover opacity-80 transition duration-700 group-hover:opacity-95"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col border-t border-border p-5 md:p-6">
                  <h3 className="font-display text-xl text-foreground md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 flex justify-start">
          <Link href="/menu" className="btn-primary">
            {menuPreviewContent.ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
