import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
