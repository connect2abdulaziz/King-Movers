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
    q: "How far in advance should I book a commercial move?",
    a: "We recommend booking at least 2–4 weeks in advance for commercial moves so we can coordinate with your IT team, plan after-hours or weekend slots, and secure the right crew size. Rush moves can often be accommodated depending on availability.",
  },
  {
    q: "Do you offer after-hours or weekend office moves?",
    a: "Yes. We routinely schedule moves outside business hours and on weekends to minimize disruption. We'll work with you to choose a window that keeps your business running while we relocate your office.",
  },
  {
    q: "How do you handle IT equipment and sensitive documents?",
    a: "We treat IT equipment and confidential materials with extra care. We coordinate with your IT team for disconnection and reconnection, use appropriate packing and labeling, and can arrange dedicated handling for servers and sensitive files. All crews are background-checked and trained in office moves.",
  },
  {
    q: "Can you do a phased move for a large office?",
    a: "Yes. For larger offices we can move in phases — by department, floor, or timeline — so you don't have to shut down entirely. We'll create a move plan that fits your schedule and budget.",
  },
  {
    q: "What is included in a commercial moving quote?",
    a: "Your quote includes labor, trucks, standard packing materials, disassembly and reassembly of office furniture, and basic insurance. We'll outline any extras (e.g. specialty crating, IT coordination, storage) upfront so there are no surprises.",
  },
  {
    q: "Are you insured for commercial moves?",
    a: "Yes. We carry comprehensive liability and cargo insurance. We can provide certificates of insurance for your building management or procurement team upon request.",
  },
  {
    q: "Do you move specialty equipment like medical or lab gear?",
    a: "We have experience moving office furniture, workstations, and standard equipment. For highly specialized or regulated equipment (e.g. medical, lab, manufacturing), we can coordinate with certified specialists as part of your move plan.",
  },
  {
    q: "Who will be our point of contact during the move?",
    a: "You'll have a dedicated move coordinator from the first call to final setup. They'll handle scheduling, crew assignment, and communication so you have one point of contact — no call centers or runaround.",
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
  { Icon: IconTrophy, title: "Licensed & Fully Insured", desc: "We are fully licensed and carry comprehensive liability and cargo insurance on every commercial move. We can provide certificates for your building or procurement team." },
  { Icon: IconBox, title: "Office & Equipment Experts", desc: "Our crews are trained to handle desks, workstations, filing cabinets, and office furniture with care. We use proper packing and labeling so setup at your new space is smooth." },
  { Icon: IconTruck, title: "Modern Fleet", desc: "Our trucks are equipped to handle office moves efficiently. We schedule the right vehicle and crew size so your move stays on time and on budget." },
  { Icon: IconMapPin, title: "Dedicated Move Coordinator", desc: "From your first call to final setup, one coordinator manages your entire commercial move — no getting passed from agent to agent." },
  { Icon: IconDollar, title: "Transparent Pricing", desc: "No surprise fees. We provide clear, binding estimates so the price we quote is the price you pay. Ideal for budgeting and procurement." },
  { Icon: IconStar, title: "Trusted by Businesses", desc: "Our reputation is built on results. Hundreds of businesses have trusted us with their office and commercial relocations." },
];

const steps = [
  {
    num: "01",
    title: "Free Site Survey or Virtual Walkthrough",
    desc: "We survey your office — in person or via video — to assess inventory, access, and special requirements, then provide a detailed, binding quote.",
  },
  {
    num: "02",
    title: "Custom Move Plan",
    desc: "We build a move plan that fits your schedule: after-hours or weekend slots, phased moves if needed, and coordination with IT or facilities.",
  },
  {
    num: "03",
    title: "Packing, Disassembly & Load-Out",
    desc: "Our crew packs, labels, and disassembles furniture as needed. We load everything with care and leave your old space clean.",
  },
  {
    num: "04",
    title: "Transport to Your New Location",
    desc: "Your office contents travel on our trucks to the new site. Your coordinator keeps you updated so you know when to expect delivery.",
  },
  {
    num: "05",
    title: "Delivery, Reassembly & Setup",
    desc: "We unload, reassemble furniture, and place items according to your plan. We work until everything is in place and you're ready to open for business.",
  },
];

export default function CommercialMovePage() {
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
            <span className="text-white font-semibold">Commercial Move</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Commercial Moving Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Trusted office and commercial movers. We minimize downtime with after-hours moves, dedicated coordinators, and
            careful handling of desks, IT equipment, and files so your business is back up quickly.
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
                alt="Commercial office movers at work"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 italic text-center font-sans">
              Our teams handle office and commercial moves with minimal downtime.
            </p>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-7/12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 font-sans bg-primary/10 text-primary border-l-4 border-primary rounded-r">
              Commercial Moving
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight mb-5 text-foreground">
              Office Relocation Without the Headaches
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Moving your office or business is a major undertaking. Downtime costs money, and your team needs to get back
              to work quickly. That's why we built our commercial moving service around one core promise: <strong>minimal
              disruption and a smooth, predictable move from start to finish.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We plan every office move in detail. We work after hours or on weekends when needed, coordinate with your
              IT and facilities teams, and use experienced crews who know how to handle desks, workstations, and sensitive
              equipment. From the first survey to final setup, you have a single point of contact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We've relocated offices of all sizes — from small suites to multi-floor moves. In that time, we've refined
              our process so your move stays on schedule, on budget, and with minimal impact on your operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're expanding, consolidating, or moving to a better location, our team is here to make the
              transition as smooth as possible. <strong>You focus on running your business — we'll handle the move.</strong>
            </p>
          </div>
        </div>

        {/* ── WHAT'S INCLUDED ─────────────────────────────────────── */}
        <div className="rounded-2xl p-10 mb-20 bg-surface border-2 border-foreground/10">
          <h2 className="font-serif text-3xl font-bold mb-2 text-foreground">
            What's Included in Our Commercial Moving Service
          </h2>
          <p className="text-muted-foreground mb-8 text-lg font-sans">
            Every commercial move includes the following as standard — no hidden add-ons, no surprise charges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Free Site Survey & Quote", "We survey your office and provide a written, binding price — the number we quote is the number you pay."],
              ["After-Hours & Weekend Moves", "We schedule moves outside business hours so your operations stay on track."],
              ["Furniture Disassembly & Reassembly", "Desks, workstations, shelving, and conference tables are disassembled before loading and reassembled at your new space."],
              ["Protective Wrapping & Padding", "Office furniture and equipment are wrapped and padded to prevent damage during transport."],
              ["Dedicated Move Coordinator", "One point of contact from booking to final setup. No call centers, no runaround."],
              ["IT & Equipment Coordination", "We coordinate with your IT team for disconnection, transport, and reconnection of workstations and equipment."],
              ["Phased Move Options", "For larger offices, we can move in phases by department or floor to fit your timeline."],
              ["Secure Handling of Files & Assets", "Filing cabinets, sensitive documents, and office assets are handled with care and confidentiality."],
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
            <h2 className="font-serif text-4xl font-bold text-foreground">How Our Commercial Moving Process Works</h2>
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
                alt="Commercial movers handling office equipment"
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
              Our moving teams follow a strict packing and loading protocol developed over years of office moves. Every
              item is inventoried and labeled. Furniture is disassembled and wrapped before loading. When we arrive at
              your new space, we check each item against the inventory and set up according to your plan.
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
            <h2 className="font-serif text-4xl font-bold text-foreground">Why Businesses Choose Us for Commercial Moves</h2>
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

        {/* ── TYPES WE COVER ───────────────────────────────────────── */}
        <div className="rounded-2xl p-10 mb-20 bg-primary text-white">
          <h2 className="font-serif text-3xl font-bold mb-3">We Relocate Businesses of All Sizes</h2>
          <p className="text-white/80 mb-8 text-lg font-sans">
            Our commercial moving service covers offices, retail spaces, and businesses of every size. We routinely handle:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-sans">
            {[
              "Corporate offices",
              "Medical & dental",
              "Retail stores",
              "Law firms",
              "Banks & financial",
              "Startups & coworking",
              "Schools & nonprofits",
              "Restaurants & cafes",
              "Salons & spas",
              "Warehouses",
              "Studios & agencies",
              "Government & municipal",
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
            Have a different type of business? We can help. Contact us for a custom quote.
          </p>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Frequently Asked Questions About Commercial Moving
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
            Ready to Plan Your Commercial Move?
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