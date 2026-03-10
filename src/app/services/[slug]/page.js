import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllSlugs,
  getFaqsBySlug,
  getDescriptionParagraphsBySlug,
  getWhyChooseAndConclusionBySlug,
} from "@/data/services";
import ServiceDetailIntro from "@/components/services/ServiceDetailIntro";
import ServiceDetailImageBlock from "@/components/services/ServiceDetailImageBlock";
import ServiceDetailMore from "@/components/services/ServiceDetailMore";
import ServiceDetailFaq from "@/components/services/ServiceDetailFaq";
import ServiceDetailOtherServices from "@/components/services/ServiceDetailOtherServices";

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | King Moving Services" };
  return {
    title: `${service.title} | King Moving Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const paragraphs = getDescriptionParagraphsBySlug(slug);
  const { whyPoints, conclusion } = getWhyChooseAndConclusionBySlug(slug);
  const faqs = getFaqsBySlug(slug);

  return (
    <main className="min-h-screen bg-background font-sans">
      {/* 1. Big heading in the middle + intro text */}
      <ServiceDetailIntro service={service} />

      {/* 2. Image left, lots of detail right */}
      <ServiceDetailImageBlock service={service} paragraphs={paragraphs} />

      {/* 3. More detail: why choose us, how we do it better */}
      <ServiceDetailMore
        service={service}
        whyPoints={whyPoints}
        conclusion={conclusion}
      />

      {/* 4. FAQ for this service */}
      <ServiceDetailFaq serviceTitle={service.title} faqs={faqs} />

      {/* 5. Other Services links at bottom */}
      <ServiceDetailOtherServices />
    </main>
  );
}
