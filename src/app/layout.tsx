import type { Metadata } from "next";
import { MotionConfig, LayoutGroup } from "framer-motion";
import { Cormorant_Garamond, Manrope, Onest } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { BookingModal } from "@/components/booking/BookingModal";
import { BookTableCta } from "@/components/booking/BookTableCta";
import { siteConfig } from "@/lib/site-config";
import {
  getSiteTheme,
  getThemeClassName,
  isLovableTheme,
  isMinimalTheme,
} from "@/lib/site-theme";
import "./globals.css";
import "./theme-dark.css";
import "./theme-minimal.css";
import "./theme-lovable.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getSiteTheme();
  const themeClass = getThemeClassName(theme);
  const minimal = isMinimalTheme();
  const lovable = isLovableTheme();
  const skipMorphCta = minimal || lovable;

  const appShell = (
    <BookingProvider>
      {children}
      <BookingModal />
      {!skipMorphCta && <BookTableCta />}
    </BookingProvider>
  );

  const fontVars = lovable
    ? `${cormorant.variable} ${manrope.variable}`
    : `${cormorant.variable} ${onest.variable}`;

  return (
    <html
      lang="ru"
      className={`${fontVars} h-full${themeClass ? ` ${themeClass}` : ""}`}
    >
      <body
        className={`min-h-full bg-background text-foreground antialiased ${lovable ? "font-[family-name:var(--font-manrope)]" : "font-body"}`}
      >
        <MotionConfig reducedMotion="user">
          {skipMorphCta ? appShell : <LayoutGroup id="book-cta">{appShell}</LayoutGroup>}
        </MotionConfig>
        {!minimal && !lovable && <div className="grain" aria-hidden="true" />}
      </body>
    </html>
  );
}
