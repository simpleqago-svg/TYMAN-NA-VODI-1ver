import { LovableFooter } from "@/components/lovable/LovableFooter";
import { LovableHeader } from "@/components/lovable/LovableHeader";
import { LovableHome } from "@/components/lovable/LovableHome";
import { LovableStickyBookCTA } from "@/components/lovable/LovableStickyBookCTA";

export function LovablePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LovableHeader />
      <LovableHome />
      <LovableFooter />
      <LovableStickyBookCTA />
    </div>
  );
}
