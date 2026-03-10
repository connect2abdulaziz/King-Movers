"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialsSectionHome2 from "@/components/home/TestimonialsSectionHome2";
import HeroQuoteBar from "@/components/home3/HeroQuoteBar";

gsap.registerPlugin(ScrollTrigger);

/** Placeholder — replace with your image path */
const HERO_BG_IMAGE = "/images/hero/Kingsmovinging-service.jpg";

const faqs = [
  {
    q: "How far in advance should I book a local move?",
    a: "We recommend booking at least one to two weeks in advance for local moves, especially during busy seasons. Same-day and next-day moves can often be arranged subject to availability — call us to check.",
  },
  {
    q: "How is the cost of a local move calculated?",
    a: "Local moves are typically based on the time required (hours) and the number of movers and trucks needed. We provide transparent, binding quotes after a quick survey — in person or by phone — so you know the cost upfront.",
  },
  {
    q: "Do you offer same-day or last-minute local moves?",
    a: "Yes. When our schedule allows, we can often accommodate same-day or next-day local moves. Contact us as early as possible and we'll do our best to fit you in.",
  },
  {
    q: "How do you protect my furniture and belongings during a local move?",
    a: "We use moving blankets, shrink wrap, and padding on all furniture. Fragile items are packed with care. Our crews are trained to handle everything from sofas to dishes with the same care we'd use in our own homes.",
  },
  {
    q: "Do you provide packing materials and packing services?",
    a: "Yes. We can supply boxes, tape, and packing materials, or offer full-service packing where our crew packs your entire home. You can also choose partial packing for specific rooms. We'll outline options when you get your quote.",
  },
  {
    q: "What areas do you serve for local moves?",
    a: "We serve the greater metro area and surrounding communities for local moves. Contact us with your pickup and delivery addresses and we'll confirm we can serve you and provide an accurate quote.",
  },
  {
    q: "Can you help with moves into or out of apartments?",
    a: "Absolutely. We regularly handle apartment moves, including buildings with elevators or walk-ups. We'll assess access at both locations when we quote and bring the right equipment and crew size.",
  },
  {
    q: "What if I only need help loading or unloading?",
    a: "We offer labor-only options for customers who have their own truck or need help with just one end of the move. Tell us what you need when you call and we'll tailor the service.",
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
  { Icon: IconTrophy, title: "Licensed & Insured", desc: "We are fully licensed and carry liability and cargo insurance on every local move. Your belongings and your property are protected." },
  { Icon: IconBox, title: "Professional Packing", desc: "Our crews use quality materials to protect everything from everyday dishes to fragile items. Full-service packing is available so you don't have to lift a finger." },
  { Icon: IconTruck, title: "Right-Sized Trucks & Crews", desc: "We send the right truck and crew size for your move so we work efficiently and your quote stays fair. No overkill, no understaffing." },
  { Icon: IconMapPin, title: "Local Experts", desc: "We know the area — traffic, building access, and parking. We plan the route and timing so your local move runs smoothly from start to finish." },
  { Icon: IconDollar, title: "Transparent, Binding Quotes", desc: "No surprise fees. We give you a clear, binding quote so the price we quote is the price you pay. No hourly games or last-minute add-ons." },
  { Icon: IconStar, title: "Thousands of 5-Star Reviews", desc: "Our reputation is built on results. Thousands of families have trusted us with their local moves — from apartments to single-family homes." },
];

const steps = [
  {
    num: "01",
    title: "Free Quote — In Person or by Phone",
    desc: "We quickly assess your home and move details (in person or by phone) and provide a clear, binding quote. No obligation.",
  },
  {
    num: "02",
    title: "Pick Your Date & Time",
    desc: "We schedule your move for the date and window that works for you. Same-day and next-day options are often available.",
  },
  {
    num: "03",
    title: "Packing & Load-Out",
    desc: "Our crew arrives with materials (if you've chosen packing help), packs and loads everything with care, and secures the truck.",
  },
  {
    num: "04",
    title: "Transport to Your New Home",
    desc: "We drive your belongings to your new address. For local moves, we often complete load and delivery in the same day.",
  },
  {
    num: "05",
    title: "Unload & Setup",
    desc: "We unload, reassemble furniture as needed, and place items where you want them. We leave your new space ready so you can settle in.",
  },
];

export default function LocalMovePage() {
  const [openFaq, setOpenFaq] = useState(null);
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

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">

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
            <span className="text-white font-semibold">Local Move</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Local Moving Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Stress-free local moves for homes and apartments. Same-day and scheduled moves, transparent pricing, and
            a crew that treats your belongings with care — from first box to final placement.
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
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          {/* Left image — sticky while text scrolls */}
          <div className="w-full lg:w-5/12 flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div className="w-full rounded-lg overflow-hidden aspect-4/3 bg-surface">
              <img
                src="/images/0.jpg"
                alt="Local movers loading a truck"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our local crews get you moved efficiently and with care.
            </p>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-7/12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 font-sans bg-primary/10 text-primary border-l-4 border-primary rounded-r">
              Local Moving
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Local Moving That's Actually Stress-Free
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Moving across town or to the next neighborhood can still be a big undertaking. Packing, lifting, driving,
              and unpacking add up. That's why we built our local moving service around one core promise: <strong>reliable,
              straightforward service from start to finish — so you can focus on settling in, not on the heavy lifting.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We offer same-day and scheduled local moves for apartments, condos, and houses. Our crews show up on time,
              work efficiently, and treat your belongings with care. We give you a clear, binding quote so there are no
              surprises on move day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We've been helping families and individuals with local moves for years. We know the area, we plan the
              route, and we bring the right truck and crew size so your move stays on schedule and on budget.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're upgrading to a bigger place, downsizing, or just relocating within the area, our team is
              here to make the day go smoothly. <strong>You focus on your new home — we'll handle the move.</strong>
            </p>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
        <div className="rounded-2xl p-10 mb-20 bg-surface border-2 border-foreground/10">
          <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">
            What's Included in Our Local Moving Service
          </h2>
          <p className="text-muted-foreground mb-8 text-lg font-sans">
            Every local move includes the following as standard — no hidden add-ons, no surprise charges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Free Binding Quote", "We assess your move and give you a clear, binding price — the number we quote is the number you pay."],
              ["Full-Service Packing Option", "Our crews can pack your entire home or specific rooms using quality materials. Optional add-on when you book."],
              ["Furniture Disassembly & Reassembly", "Beds, tables, shelving, and large furniture are disassembled for transport and reassembled at your new place."],
              ["Protective Wrapping & Padding", "Furniture is wrapped in moving blankets and shrink wrap to prevent scratches and damage."],
              ["Right-Sized Truck & Crew", "We send the right truck and crew for your move so we work efficiently and your quote stays fair."],
              ["Same-Day & Scheduled Moves", "We offer both same-day/next-day and scheduled local moves. Book the option that fits your timeline."],
              ["Apartment & House Moves", "We handle walk-ups, elevators, and tight access. We'll assess both addresses when we quote."],
              ["Labor-Only Options", "Need help only loading or unloading? We can tailor the service to what you need."],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-sans bg-primary mt-0.5">
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
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-foreground">How Our Local Moving Process Works</h2>
            <p className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              A clear, structured process so you always know what to expect — and when.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center border-l-4 border-primary pl-6 pb-8"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded flex items-center justify-center font-extrabold text-xl font-sans bg-primary text-white min-w-[64px]">
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

        {/* ── IMAGE + TEXT BLOCK 2 — Image Right (sticky) + Text Left ── */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-start mb-20">
          {/* Right image — sticky while text scrolls */}
          <div className="w-full lg:w-5/12 flex-shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div className="w-full rounded-lg overflow-hidden aspect-4/3 bg-surface">
              <img
                src="/images/international-move.jpg"
                alt="Local movers packing and moving boxes"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our packing team treats every item as if it were their own.
            </p>
          </div>
          <div className="w-full lg:w-7/12">
            <h2 className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              The Difference Between a Good Move and a Great One Is Preparation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Most moving horror stories share a common cause: poor preparation. Boxes that weren't reinforced. Furniture
              that wasn't properly wrapped. A truck that was overloaded. A delivery window that was missed. These aren't
              accidents — they're the result of cutting corners, and they're completely avoidable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our moving teams follow a clear packing and loading process so nothing is missed. We label boxes by room,
              wrap and protect furniture, and load the truck efficiently. When we arrive at your new home, we unload and
              place items where you want them so you can settle in without the chaos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We also invest heavily in our equipment. Our trucks feature air-ride suspension — a suspension system
              that dramatically reduces road vibration and is especially important for fragile items like electronics,
              mirrors, and fine art. Our straps, pads, and dollies are inspected and replaced on a regular schedule.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The result? A move-day experience that feels surprisingly calm, and a delivery that feels like a relief
              instead of a reckoning.
            </p>
          </div>
        </div>

        {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-foreground">Why Thousands Choose Us for Local Moves</h2>
            <p className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              We're not the cheapest option — we're the most dependable one. Here's what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ Icon, title, desc }) => (
              <div
                key={title}
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

        {/* ── AREAS WE SERVE ───────────────────────────────────────── */}
        <div className="rounded-2xl p-10 mb-20 bg-primary text-white">
          <h2 className="font-serif text-3xl font-bold mb-3">We Serve the Greater Metro Area</h2>
          <p className="text-white/80 mb-8 text-lg font-sans">
            Our local moving service covers the metro area and surrounding communities. We handle moves within the region — same-day and scheduled.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {[
              "Apartments & condos",
              "Single-family homes",
              "Same-day moves",
              "Next-day moves",
              "Packing included",
              "Labor-only options",
              "Walk-ups & elevators",
              "Short notice welcome",
              "Transparent pricing",
              "No hidden fees",
              "Licensed & insured",
              "5-star rated",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-3 rounded-lg text-sm font-semibold bg-white/10 border border-white/20"
              >
                ✓ {item}
              </div>
            ))}
          </div>
          <p className="text-white/70 mt-6 font-sans text-sm">
            Not sure if we serve your area? Contact us with your pickup and delivery addresses for a quick confirmation and quote.
          </p>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Frequently Asked Questions About Local Moving
            </h2>
            <p className="text-muted-foreground mt-3 text-lg font-sans max-w-2xl mx-auto">
              Got questions? We've answered the most common ones below. If you don't find what you need, call us any time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border-2 border-foreground/10"
              >
                <button
                  className={`w-full flex justify-between items-center px-7 py-5 text-left font-sans transition-colors ${openFaq === i ? "bg-primary text-white" : "bg-surface text-foreground hover:bg-foreground/5"}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-lg font-bold pr-4">
                    {faq.q}
                  </span>
                  <span className="text-2xl flex-shrink-0 font-bold">
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
      <section className="w-full" aria-label="Customer testimonials">
        <TestimonialsSectionHome2 />
      </section>

      {/* ── QUOTE CTA: full width, inner content centered ───────────── */}
      <section
        id="quote"
        className="w-full bg-primary py-16 md:py-20"
        aria-label="Get a quote"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Local Move?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-sans leading-relaxed">
            Get a free, no-obligation binding estimate from our team. We'll walk you through every detail and give you a
            firm price — no guesswork, no surprises.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
          <p className="text-white/70 mt-6 text-sm font-sans">
            Available Monday–Saturday, 8AM–8PM · No pressure, no obligation
          </p>
        </div>
      </section>
    </div>
  );
}