import type { Metadata } from "next";
import { MotionConfig, LayoutGroup } from "framer-motion";
import { Cormorant_Garamond, Onest } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { BookingModal } from "@/components/booking/BookingModal";
import { BookTableCta } from "@/components/booking/BookTableCta";
import { siteConfig } from "@/lib/site-config";
import { getSiteTheme, getThemeClassName, isMinimalTheme } from "@/lib/site-theme";
import "./globals.css";
import "./theme-dark.css";
import "./theme-minimal.css";

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

  const appShell = (
    <BookingProvider>
      {children}
      <BookingModal />
      {!minimal && <BookTableCta />}
    </BookingProvider>
  );

  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${onest.variable} h-full${themeClass ? ` ${themeClass}` : ""}`}
    >
      <body className="min-h-full bg-background font-body text-foreground antialiased">
        <MotionConfig reducedMotion="user">
          {minimal ? appShell : <LayoutGroup id="book-cta">{appShell}</LayoutGroup>}
        </MotionConfig>
        {!minimal && <div className="grain" aria-hidden="true" />}
      </body>
    </html>
  );
}
