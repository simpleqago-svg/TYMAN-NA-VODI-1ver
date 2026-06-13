import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { Cormorant_Garamond, Onest } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { BookingModal } from "@/components/booking/BookingModal";
import { StickyBooking } from "@/components/layout/Shell";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

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
  return (
    <html lang="ru" className={`${cormorant.variable} ${onest.variable} h-full`}>
      <body className="min-h-full bg-background font-body text-foreground antialiased">
        <MotionConfig reducedMotion="user">
          <BookingProvider>
            {children}
            <BookingModal />
            <StickyBooking />
          </BookingProvider>
        </MotionConfig>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
