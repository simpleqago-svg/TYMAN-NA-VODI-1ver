import Image from "next/image";
import Link from "next/link";
import { menuCategories } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function MenuPreviewSection() {
  return (
    <section id="menu-preview" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-xl">
            <p className="section-label mb-6">Меню</p>
            <h2 className="font-display text-3xl font-light text-foreground md:text-4xl">
              Всё для вечера — в одном месте
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {menuCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 80}>
              <article className="group relative bg-background">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-60 transition duration-700 group-hover:opacity-80 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-display text-xl text-foreground">{category.title}</h3>
                  <p className="mt-2 text-xs text-muted">{category.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link href="/menu" className="btn-secondary">
            Посмотреть меню
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
