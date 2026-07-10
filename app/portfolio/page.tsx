import { SiteShell } from "@/components/layout/site-shell";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { ProcessSection } from "@/components/home/process-section";

export const metadata = { title: "الأعمال" };

export default function PortfolioPage() {
  return (
    <SiteShell>
      <main className="pt-24">
        <PortfolioSection />
        <ProcessSection />
      </main>
    </SiteShell>
  );
}
