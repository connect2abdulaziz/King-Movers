import HeroQuoteBar from "@/components/home3/HeroQuoteBar";
import ServicesSection from "@/components/home3/ServicesSection";
import ServiceHero from "@/components/services/ServiceHero";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import OurWork from "@/components/home/OurWork";
import WorkProcess from "@/components/home3/WorkProcess";
import TrustBadgesSection from "@/components/home/TrustBadgesSection";

export const metadata = {
  title: "Services | King Moving Services",
  description:
    "Residential, commercial, packing, long-distance, and storage moving services.",
};

export default function ServicesPage() {
  return (
    <>
    <ServiceHero/>
    <HeroQuoteBar/>
    <TrustBadgesSection/>
    <ServicesSection/>
    <OurWork/>
    {/* <WorkProcess/> */}
    </>
  )
}
