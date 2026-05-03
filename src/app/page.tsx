import { HeroSection } from "@/components/site/HeroSection";
import { ProblemCards } from "@/components/site/ProblemCards";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { PricingCards } from "@/components/site/PricingCards";
import { HonestySection } from "@/components/site/HonestySection";
import { AudienceSection } from "@/components/site/AudienceSection";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full flex flex-col pb-24 md:pb-0">
        <HeroSection />
        <ProblemCards />
        <ServicesGrid />
        <ProcessSteps />
        <PricingCards />
        <HonestySection />
        <AudienceSection />
        <FAQAccordion />
        <ContactCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
