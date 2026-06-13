"use client";

import Link from "next/link";
import { menuPageContent, menuPageSections } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

function MenuItem({
  name,
  price,
  note,
}: {
  name: string;
  price: string;
  note?: string;
}) {
  return (
    <li className="menu-item group cursor-default">
      <span className="text-glow-hover text-[0.95rem] text-foreground md:text-base">
        {name}
      </span>
      <span className="menu-item__leaders" aria-hidden="true" />
      <span className="shrink-0 text-sm tabular-nums text-foreground/90 md:text-[0.95rem]">
        {price}
      </span>
      {note ? (
        <p className="menu-item__note col-span-full text-sm leading-relaxed text-muted">
          {note}
        </p>
      ) : null}
    </li>
  );
}

export function MenuPageContent() {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-8 md:px-8">
      <Reveal y={16}>
        <Link
          href="/"
          className="inline-block cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          ← {menuPageContent.backLabel}
        </Link>
      </Reveal>

      <Reveal delay={50}>
        <header className="mt-8 border-b border-border pb-8">
          <p className="section-label mb-3">{menuPageContent.label}</p>
          <h1 className="font-display text-4xl font-light text-foreground md:text-5xl">
            {menuPageContent.title}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            {menuPageContent.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.menu.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary cursor-pointer"
            >
              {menuPageContent.pdfOpenLabel}
            </a>
            <a
              href={siteConfig.menu.pdfUrl}
              download
              className="btn-secondary cursor-pointer"
            >
              {menuPageContent.pdfDownloadLabel}
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted/75">
            {menuPageContent.pdfNote}
          </p>
        </header>
      </Reveal>

      <Reveal delay={90}>
        <nav
          aria-label="Разделы меню"
          className="mt-8 flex flex-wrap gap-2"
        >
          {menuPageSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="cursor-pointer border border-border px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:border-border-green hover:text-foreground"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </Reveal>

      <Stagger className="mt-12 space-y-14 md:mt-14 md:space-y-16" stagger={0.08}>
        {menuPageSections.map((section) => (
          <StaggerItem key={section.id}>
            <section id={section.id} className="scroll-mt-32">
              <h2 className="font-display text-2xl font-light text-foreground md:text-3xl">
                {section.title}
              </h2>

              <ul className="divide-y divide-border border-y border-border">
                {section.items.map((item) => (
                  <MenuItem
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    note={item.note || undefined}
                  />
                ))}
              </ul>
            </section>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-16 border-t border-border pt-10">
        <Link href="/" className="btn-secondary cursor-pointer">
          ← {menuPageContent.backLabel}
        </Link>
      </Reveal>
    </div>
  );
}
