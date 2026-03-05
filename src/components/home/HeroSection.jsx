"use client";

const HERO_IMAGE = "/images/hero/Kingsmovinging-service.jpg";
const CTA_LABEL = "Get Your Free Estimate Today";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-88px)]">
      <div className="bg-background flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20">
        <h1
          className="font-serif text-foreground font-black leading-[1.1] mb-7"
          style={{
            fontSize: "clamp(36px, 3.8vw, 58px)",
            letterSpacing: "-0.03em",
          }}
        >
          Trusted Seattle
          <br />
          Moving Company
          <br />
          for Families,
          <br />
          Apartments
          <br />
          &amp; Businesses
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed max-w-[400px] mb-10">
          King Moving Services makes relocating simple with stress-free,
          affordable, and reliable moving services across Seattle and beyond.
        </p>

        <a
          href="#"
          className="inline-flex items-center bg-primary text-white text-base font-bold px-8 py-4 rounded-full w-fit hover:bg-primary/90 transition-all hover:-translate-y-0.5"
          style={{ letterSpacing: "-0.01em" }}
        >
          {CTA_LABEL}
        </a>
      </div>

      <div className="relative min-h-[50vw] lg:min-h-0 overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Moving truck with boxes outside a house"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
