import { SiteShell } from "@/components/layout/site-shell";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesGrid } from "@/components/services/services-grid";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { ProcessSection } from "@/components/home/process-section";
import { PackagesSection } from "@/components/home/packages-section";
import { WhySection } from "@/components/home/why-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TeamSection } from "@/components/home/team-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <HeroSection />
        <ServicesGrid />
        <PortfolioSection />
        <ProcessSection />
        <PackagesSection />
        <WhySection />
        <TestimonialsSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
    </SiteShell>
  );
}
