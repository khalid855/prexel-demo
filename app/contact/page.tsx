import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/home/contact-section";

export const metadata = { title: "تواصل معنا" };

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="pt-24">
        <ContactSection />
      </main>
    </SiteShell>
  );
}
