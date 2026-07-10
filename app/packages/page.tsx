import { SiteShell } from "@/components/layout/site-shell";
import { PackagesSection } from "@/components/home/packages-section";
import { FaqSection } from "@/components/home/faq-section";

export const metadata = { title: "الباقات" };

export default function PackagesPage() {
  return (
    <SiteShell>
      <main className="pt-24">
        <PackagesSection />
        <FaqSection />
      </main>
    </SiteShell>
  );
}
