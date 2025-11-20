import ContactSection from "@/components/contact";
import FAQsThree from "@/components/faqs-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-1";
import { Logo } from "@/components/logo";
import LogoCloud from "@/components/logo-cloud";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats";
import WallOfLoveSection from "@/components/testimonials";
export default function Home() {
  return (
    <>
      <HeroSection />
      <IntegrationsSection />
      <StatsSection />
      <WallOfLoveSection />
      <Pricing />
      <FAQsThree />
      <ContactSection />
      <FooterSection />
    </>
  );
}
