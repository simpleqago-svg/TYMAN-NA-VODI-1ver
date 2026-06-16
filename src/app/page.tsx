import { Header, Footer } from "@/components/layout/Shell";
import { LovablePage } from "@/components/lovable/LovablePage";
import { Hero } from "@/components/sections/Hero";
import { WhySection } from "@/components/sections/WhySection";
import { AtmosphereSection } from "@/components/sections/AtmosphereSection";
import { VipSection } from "@/components/sections/VipSection";
import { MenuPreviewSection } from "@/components/sections/MenuPreviewSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { CateringSection } from "@/components/sections/CateringSection";
import { BookingTriggerSection } from "@/components/sections/BookingTriggerSection";
import { isLovableTheme } from "@/lib/site-theme";

export default function Home() {
  if (isLovableTheme()) {
    return <LovablePage />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhySection />
        <AtmosphereSection />
        <VipSection />
        <MenuPreviewSection />
        <ReviewsSection />
        <CateringSection />
        <BookingTriggerSection />
      </main>
      <Footer />
    </>
  );
}
