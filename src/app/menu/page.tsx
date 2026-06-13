import { Header, Footer } from "@/components/layout/Shell";
import { MenuPageContent } from "@/components/menu/MenuPageContent";

export const metadata = {
  title: "Меню — Tyman na Vodi",
  description:
    "Меню Tyman na Vodi: кальяны, кухня, напитки и десерты. PDF или структурированный список для ознакомления перед визитом.",
};

export default function MenuPage() {
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
