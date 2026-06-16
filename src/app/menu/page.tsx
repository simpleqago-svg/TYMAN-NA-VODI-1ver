import { Header, Footer } from "@/components/layout/Shell";
import { LovableFooter } from "@/components/lovable/LovableFooter";
import { LovableHeader } from "@/components/lovable/LovableHeader";
import { MenuPageContent } from "@/components/menu/MenuPageContent";
import { isLovableTheme } from "@/lib/site-theme";

export const metadata = {
  title: "Меню — Tyman na Vodi",
  description:
    "Меню Tyman na Vodi: кальяны, кухня, напитки и десерты. PDF или структурированный список для ознакомления перед визитом.",
};

export default function MenuPage() {
  if (isLovableTheme()) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <LovableHeader />
        <main className="min-h-[70svh] scroll-mt-20 pt-28 pb-28 md:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <MenuPageContent />
          </div>
        </main>
        <LovableFooter />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="section-shell section-tone-base min-h-[70svh] pt-28 pb-28 md:pb-32">
        <MenuPageContent />
      </main>
      <Footer />
    </>
  );
}
