import { siteConfig } from "@/lib/site-config";

export function LovableFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div>
          <div
            className="font-display mb-4 text-2xl tracking-[0.14em] uppercase"
            style={{ fontVariant: "small-caps" }}
          >
            {siteConfig.name}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Lounge у воды. Бар, кухня и кальяны — один вечер в одном месте.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="mb-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Контакты
          </div>
          <div>{siteConfig.address}</div>
          <div>{siteConfig.phone}</div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-accent-gold"
          >
            {siteConfig.instagramHandle}
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <div className="mb-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Часы
          </div>
          <div>{siteConfig.hours.label}</div>
          <div>{siteConfig.hours.weekdays}</div>
          <div>{siteConfig.hours.weekend}</div>
        </div>
        <div>
          <div className="mb-3 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            На карте
          </div>
          <div className="aspect-video w-full overflow-hidden border border-border bg-surface">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Карта"
              className="h-full w-full border-0 grayscale opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-6 text-xs text-muted-foreground lg:px-10">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Belgrade</span>
        </div>
      </div>
    </footer>
  );
}
