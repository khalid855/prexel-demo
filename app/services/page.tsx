import { SiteShell } from "@/components/layout/site-shell";
import { ServicesGrid } from "@/components/services/services-grid";
import { ContactSection } from "@/components/home/contact-section";

export const metadata = { title: "الخدمات" };

export default function ServicesPage() {
  return (
    <SiteShell>
      <main className="pt-24">
        <ServicesGrid />
        <ContactSection />
      </main>
    </SiteShell>
  );
}
