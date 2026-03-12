"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import HeroQuoteBar from "@/components/home3/HeroQuoteBar";

gsap.registerPlugin(ScrollTrigger);

/** Placeholder — replace with your image path */
const HERO_BG_IMAGE = "/images/hero/Kingsmovinging-service.jpg";

const faqs = [
  {
    q: "How far in advance should I book a long distance move?",
    a: "We recommend booking at least 4–8 weeks in advance for long distance moves, especially during peak summer months (May–September). Last-minute bookings may be accommodated based on availability, but early scheduling ensures you get your preferred date and the most competitive rate.",
  },
  {
    q: "How is the cost of a long distance move calculated?",
    a: "Long distance moving costs are typically based on the total weight of your shipment and the distance traveled. Additional factors include the number of movers required, packing services, specialty item handling (pianos, antiques, safes), and any storage needs along the way. We provide free, no-obligation estimates.",
  },
  {
    q: "Will my belongings be on a shared or dedicated truck?",
    a: "We offer both options. Dedicated truck service means your belongings travel exclusively on one truck with no other customers' items. Shared (consolidated) service can reduce costs for smaller loads. Our team will recommend the best fit based on your shipment size and budget.",
  },
  {
    q: "How do you protect my furniture and fragile items during transit?",
    a: "Every item is wrapped in heavy-duty moving blankets, shrink wrap, and custom padding. Fragile items receive double-boxing and foam inserts. Our trucks are equipped with air-ride suspension systems to minimize road vibration. You can also opt for full-value protection insurance for complete peace of mind.",
  },
  {
    q: "Can I track my shipment during transit?",
    a: "Yes. All long distance moves come with real-time GPS tracking through our customer portal. You'll receive automated status updates and can contact your dedicated move coordinator at any time for updates on your delivery window.",
  },
  {
    q: "What items cannot be transported across state lines?",
    a: "Hazardous materials including propane tanks, paint, cleaning solvents, and ammunition cannot be transported. Perishable food, plants, and pets also require special arrangements. Our moving consultants will provide you with a full list and help you plan accordingly before your move date.",
  },
  {
    q: "Do you offer packing and unpacking services?",
    a: "Absolutely. We offer full-service packing where our team handles every item from kitchenware to artwork, partial packing for specific rooms, and unpacking at your new home. All packing materials — boxes, tape, bubble wrap — are included when you choose our packing service.",
  },
  {
    q: "What happens if my delivery date changes?",
    a: "We understand plans shift. If your delivery window needs to change, contact us as soon as possible. For dedicated truck moves, we can often accommodate reschedules with minimal disruption. For consolidated moves, changes may affect delivery timing. Storage-in-transit is available at our secure facilities if needed.",
  },
];

/* Icons for Why Choose Us (replacing emojis) */
const IconTrophy = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 21h8M12 17v4M7 4h10M7 4v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4M7 4V2h10v2" />
    <path d="M12 7v4M8 11h8" />
    <path d="M6 4v2a6 6 0 0 0 12 0V4M4 11v1a4 4 0 0 0 8 0v-1M16 11v1a4 4 0 0 1-8 0v-1" />
  </svg>
);
const IconBox = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const IconTruck = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const IconMapPin = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconDollar = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const IconStar = () => (
  <svg className="w-10 h-10 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const whyUs = [
  { Icon: IconTrophy, title: "Licensed & Fully Insured", desc: "We are fully licensed by the FMCSA and carry comprehensive cargo and liability insurance on every long distance move we perform." },
  { Icon: IconBox, title: "Professional Packing Crew", desc: "Our trained packing specialists use industry-grade materials to protect everything from everyday dishes to irreplaceable heirlooms." },
  { Icon: IconTruck, title: "Modern Fleet", desc: "Our late-model trucks feature air-ride suspension, GPS tracking, and climate-controlled options to keep your belongings safe on the road." },
  { Icon: IconMapPin, title: "Dedicated Move Coordinator", desc: "From your first call to final delivery, one coordinator manages your entire move — no getting passed from agent to agent." },
  { Icon: IconDollar, title: "Transparent, Flat-Rate Pricing", desc: "No surprise fees. We provide binding estimates so the price we quote is the price you pay, guaranteed." },
  { Icon: IconStar, title: "Thousands of 5-Star Reviews", desc: "Our reputation is built on results. Thousands of families have trusted us with their most important moves across the country." },
];

const steps = [
  {
    num: "01",
    title: "Free In-Home or Virtual Estimate",
    desc: "A move consultant surveys your home — in person or via video call — to create a precise inventory and binding quote.",
  },
  {
    num: "02",
    title: "Custom Move Plan Created",
    desc: "We build a detailed move plan including packing schedule, truck assignment, route, and delivery window tailored to your timeline.",
  },
  {
    num: "03",
    title: "Professional Packing Day",
    desc: "Our crew arrives with all materials and methodically packs, labels, and loads every item with care and precision.",
  },
  {
    num: "04",
    title: "Tracked Transit to Your Destination",
    desc: "Your belongings travel on a GPS-tracked truck. Your coordinator keeps you updated throughout the journey.",
  },
  {
    num: "05",
    title: "Delivery & Setup",
    desc: "We unload, reassemble furniture, and place items exactly where you want them. Nothing is left in the driveway.",
  },
];

// Placeholder gallery images for long distance detail page.
// Replace src paths with your own images.
const LONG_DISTANCE_GALLERY = [
  { src: "/images/international-move6.jpg", alt: "Long distance move photo 1" },
  { src: "/images/international-move7.jpg", alt: "Long distance move photo 2" },
  { src: "/images/international-move.jpg", alt: "Long distance move photo 3" },
];

export default function LongDistanceMovingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);
  const heroSectionRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const section = heroSectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(heroContentRef.current?.children || [], { opacity: 0, y: 24 });
      gsap.set(heroBgRef.current, { scale: 1.12, transformOrigin: "center center" });

      if (!reduceMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(heroBgRef.current, { scale: 1, duration: 1.8 }, 0).to(
          heroContentRef.current?.children || [],
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          0.4
        );
        gsap.to(heroBgRef.current, {
          y: 24,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      } else {
        gsap.set(heroBgRef.current, { scale: 1, y: 0 });
        gsap.set(heroContentRef.current?.children || [], { opacity: 1, y: 0 });
      }
    }, section);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("[data-anim-section]");
      const images = gsap.utils.toArray("[data-anim-image]");

      // Initial states (dramatic, but readable — no blur)
      gsap.set(sections, {
        opacity: 0,
        y: 42,
        scale: 0.992,
      });

      sections.forEach((sectionEl) => {
        const items = sectionEl.querySelectorAll("[data-anim-item]");

        gsap.set(items, {
          opacity: 0,
          y: 18,
          scale: 0.985,
        });

        if (reduceMotion) {
          gsap.set(sectionEl, {
            opacity: 1,
            y: 0,
            scale: 1,
          });
          gsap.set(items, { opacity: 1, y: 0, scale: 1 });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 78%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        });

        tl.to(
          sectionEl,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
          },
          0
        ).to(
          items,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.06,
          },
          0.25
        );
      });

      // Subtle parallax on sticky images for extra “alive” feel
      images.forEach((imgWrap) => {
        if (reduceMotion) return;
        gsap.fromTo(
          imgWrap,
          { y: -10 },
          {
            y: 18,
            ease: "none",
            scrollTrigger: {
              trigger: imgWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-background text-foreground font-sans min-h-screen overflow-x-hidden" style={{ transformStyle: "flat" }}>

      {/* ── HERO: background image + overlay + scroll zoom ───────────────── */}
      <section
        ref={heroSectionRef}
        className="relative min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Background image (placeholder path — replace HERO_BG_IMAGE) */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${HERO_BG_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Brand overlay (primary tint) */}
        <div className="absolute inset-0 bg-primary/75" aria-hidden />
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div
          ref={heroContentRef}
          className="relative z-10 mx-auto px-6 py-20 flex flex-col items-center text-center max-w-4xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-6 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="text-white/90 hover:text-white no-underline">Home</Link>
            <span aria-hidden>›</span>
            <Link href="/services" className="text-white/90 hover:text-white no-underline">Services</Link>
            <span aria-hidden>›</span>
            <span className="text-white font-semibold">Long Distance Moving</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Long Distance Moving Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Trusted, fully insured long distance movers serving families and businesses across the country. Whether you're
            moving 300 miles or 3,000 miles, we handle every detail from first box to final placement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#quote"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors font-sans"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:18005551234"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors font-sans"
            >
              📞 480-447-1200
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────── */}
     <HeroQuoteBar/>

      {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* SECTION 1: Intro — Image Left (sticky) + Text Right */}
        <div data-anim-section className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          {/* Left image — sticky while text scrolls */}
          <div className="w-full lg:w-5/12 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div data-anim-image className="w-full rounded-lg overflow-hidden aspect-4/3 bg-surface">
              <img
                src="/images/service-4.jpg"
                alt="Long distance moving truck on highway"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our modern fleet travels coast-to-coast safely and on schedule.
            </p>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-7/12">
            <span data-anim-item className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 font-sans bg-primary/10 text-primary border-l-4 border-primary rounded-r">
              Long Distance Moving
            </span>
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Moving Across the Country Shouldn't Feel Like a Gamble
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Long distance moving is one of the biggest transitions a person or family can make. The distance, the
              logistics, the cost, the timeline — it can all feel overwhelming. That's exactly why we built our long
              distance moving service around one core promise: <strong>complete reliability from start to finish.</strong>
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unlike local moves that wrap up in a day, long distance relocations require careful planning, secure
              loading procedures, real-time communication during transit, and a delivery team on the other end that
              treats your belongings with the same care as when they were packed.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We've been moving families, individuals, and businesses across state lines for over two decades. In that
              time, we've refined every step of the process — from how we wrap your furniture to how we route our trucks
              — so that your move arrives on time, intact, and exactly as expected.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              Whether you're relocating for a new job, downsizing, moving closer to family, or starting fresh in a new
              city, our team is here to make the journey as smooth as possible. <strong>You focus on the new chapter —
              we'll handle everything else.</strong>
            </p>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-surface border-2 border-foreground/10">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-2 text-foreground">
            What's Included in Our Long Distance Moving Service
          </h2>
          <p data-anim-item className="text-muted-foreground mb-8 text-lg font-sans">
            Every long distance move includes the following as standard — no hidden add-ons, no surprise charges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Free Binding Estimate", "We survey your home and provide a written, binding price — the number we quote is the number you pay."],
              ["Full-Service Packing Option", "Our crews can pack your entire home using professional-grade materials, or handle specific rooms as needed."],
              ["Furniture Disassembly & Reassembly", "All beds, shelving units, and large furniture are disassembled before loading and reassembled at your new home."],
              ["Protective Wrapping & Padding", "Every piece of furniture is wrapped in heavy blankets and shrink wrap before being secured on the truck."],
              ["GPS-Tracked Transportation", "Your belongings travel on a late-model, GPS-tracked truck. Monitor transit progress through our customer portal."],
              ["Dedicated Move Coordinator", "One point of contact manages your move from booking to delivery. No call centers, no runaround."],
              ["Storage-in-Transit Available", "Need a gap between move-out and move-in? We offer secure climate-controlled storage at our facilities."],
              ["Specialty Item Handling", "Pianos, artwork, antiques, and other high-value items receive custom crating and specialized transport."],
            ].map(([title, desc]) => (
              <div data-anim-item key={title} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-sans bg-primary mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1 text-foreground">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-sans text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW IT WORKS ────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">How Our Long Distance Moving Process Works</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              A clear, structured process so you always know what to expect — and when.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step) => (
              <div
                key={step.num}
                data-anim-item
                className="flex flex-col md:flex-row gap-6 items-start md:items-center border-l-4 border-primary pl-6 pb-8"
              >
                <div className="shrink-0 w-16 h-16 rounded flex items-center justify-center font-extrabold text-xl font-sans bg-primary text-white min-w-[64px]">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-1 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── GALLERY CAROUSEL ─────────────────────────────────────── */}
        <section
          data-anim-section
          className="mb-20"
          aria-label="Long distance moving gallery"
        >
          <div className="text-center mb-8">
            <h2 data-anim-item className="font-serif text-3xl font-bold text-foreground">
              Long Distance Moving Gallery
            </h2>
            <p
              data-anim-item
              className="text-muted-foreground mt-3 text-base md:text-lg font-sans max-w-2xl mx-auto"
            >
              Image placeholders are used here. Replace these with real photos of your long distance
              moves to showcase trucks, crews, and packed homes.
            </p>
          </div>
          <div data-anim-item className="relative overflow-hidden">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={16}
              slidesPerView={1.1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-10!"
            >
              {LONG_DISTANCE_GALLERY.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-surface border border-foreground/10">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* ── IMAGE + TEXT BLOCK 2 — Image Right (sticky) + Text Left ── */}
        <div data-anim-section className="flex flex-col lg:flex-row-reverse gap-12 items-start mb-20">
          {/* Right image — sticky while text scrolls */}
          <div className="w-full lg:w-5/12 shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div data-anim-image className="w-full rounded-lg overflow-hidden aspect-4/3 bg-surface">
              <img
                src="/images/0.jpg"
                alt="Movers carefully packing items"
                className="w-full h-full object-cover"
              />
            </div>
            <p data-anim-item className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our packing team treats every item as if it were their own.
            </p>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 data-anim-item className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              The Difference Between a Good Move and a Great One Is Preparation
            </h2>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most moving horror stories share a common cause: poor preparation. Boxes that weren't reinforced. Furniture
              that wasn't properly wrapped. A truck that was overloaded. A delivery window that was missed. These aren't
              accidents — they're the result of cutting corners, and they're completely avoidable.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our moving teams follow a strict packing and loading protocol developed over 20 years of cross-country
              moves. Every item is inventoried. Every box is labeled. Every piece of furniture is photographed before
              loading. When your shipment arrives, we check each item against the inventory list before unloading begins.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed mb-4">
              We also invest heavily in our equipment. Our trucks feature air-ride suspension — a suspension system
              that dramatically reduces road vibration and is especially important for fragile items like electronics,
              mirrors, and fine art. Our straps, pads, and dollies are inspected and replaced on a regular schedule.
            </p>
            <p data-anim-item className="text-lg text-muted-foreground leading-relaxed">
              The result? A move-day experience that feels surprisingly calm, and a delivery that feels like a relief
              instead of a reckoning.
            </p>
          </div>
        </div>

        {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">Why Thousands Choose Us for Long Distance Moves</h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              We're not the cheapest option — we're the most dependable one. Here's what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ Icon, title, desc }) => (
              <div
                key={title}
                data-anim-item
                className="p-7 rounded-2xl border-2 border-foreground/10 bg-background flex flex-col"
              >
                <div className="mb-4">
                  <Icon />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES WE COVER ────────────────────────────────────── */}
        <div data-anim-section className="rounded-2xl p-10 mb-20 bg-primary text-white">
          <h2 data-anim-item className="font-serif text-3xl font-bold mb-3">We Move You <span className=" bg-white/10 px-2 py-1 rounded-md">  Anywhere </span> in the Country</h2>
          <p data-anim-item className="text-white/80 text-lg font-sans">
            Our long distance moving service covers all 50 states. 
          </p>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {[
              "New York → Florida",
              "California → Texas",
              "Illinois → Arizona",
              "New York → California",
              "Texas → Colorado",
              "Florida → New York",
              "Ohio → Georgia",
              "Washington → Nevada",
              "Pennsylvania → North Carolina",
              "Virginia → Tennessee",
              "Massachusetts → South Carolina",
              "Michigan → Florida",
            ].map((route) => (
              <div
                key={route}
                data-anim-item
                className="px-4 py-3 rounded-lg text-sm font-semibold bg-white/10 border border-white/20"
              >
                📍 {route}
              </div>
            ))}
          </div>
          <p data-anim-item className="text-white/70 mt-6 font-sans text-sm">
            Don't see your route? We move to and from all cities and states. Contact us for a custom quote.
          </p> */}
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <div data-anim-section className="mb-20">
          <div className="text-center mb-10">
            <h2 data-anim-item className="font-serif text-4xl font-bold text-foreground">
              Frequently Asked Questions About Long Distance Moving
            </h2>
            <p data-anim-item className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              Got questions? We've answered the most common ones below. If you don't find what you need, call us any time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                data-anim-item
                className="rounded-xl overflow-hidden border-2 border-foreground/10"
              >
                <button
                  className={`w-full flex justify-between items-center px-7 py-5 text-left font-sans transition-colors ${openFaq === i ? "bg-primary text-white" : "bg-surface text-foreground hover:bg-foreground/5"}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-lg font-bold pr-4">
                    {faq.q}
                  </span>
                  <span className="text-2xl shrink-0 font-bold">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 py-5 bg-background border-t-2 border-foreground/10">
                    <p className="text-muted-foreground text-lg leading-relaxed font-sans">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── TESTIMONIALS: full width ───────────────────────────────── */}
      <section data-anim-section className="w-full" aria-label="Customer testimonials">
        <TestimonialsSectionHome2 />
      </section>

      {/* ── QUOTE CTA: full width, inner content centered ───────────── */}
      <section
        id="quote"
        data-anim-section
        className="w-full bg-primary py-16 md:py-20"
        aria-label="Get a quote"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 data-anim-item className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Long Distance Move?
          </h2>
          <p data-anim-item className="text-white/90 text-lg md:text-xl mb-8 font-sans leading-relaxed">
            Get a free, no-obligation binding estimate from our team. We'll walk you through every detail and give you a
            firm price — no guesswork, no surprises.
          </p>
          <div data-anim-item className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-bold rounded-lg font-sans bg-accent text-foreground hover:opacity-90 transition-opacity"
            >
              Request a Free Estimate
            </Link>
            <a
              href="tel:18005551234"
              className="inline-block px-10 py-4 text-lg font-bold border-2 border-white text-white rounded-lg font-sans hover:bg-white/10 transition-colors"
            >
              📞 Call 480-447-1200
            </a>
          </div>
          <p data-anim-item className="text-white/70 mt-6 text-sm font-sans">
            Available Monday–Saturday, 8AM–8PM · No pressure, no obligation
          </p>
        </div>
      </section>
    </div>
  );
}
