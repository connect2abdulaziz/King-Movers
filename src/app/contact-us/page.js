import React from "react";
import PageHeroSection from "@/components/ui/PageHeroSection";
import ContactFeatures from "@/components/contact-us/ContactFeatures";
import ContactFormSection from "@/components/contact-us/ContactFormSection";

export default function ContactUsPage() {
  return (
    <main>
      <PageHeroSection
        badge="Contact Us"
        title="Get in Touch"
        highlight="Let's Talk"
        description="We're here to help you with your moving needs. Contact us today to get a free quote."
        bgImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
        ctaText="Get a Free Quote"
        ctaLink="/#quote"
      />

      <ContactFeatures />
      <ContactFormSection />
    </main>
  );
}

