"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Powerful Strategy",
    description:
      "We plan every move with care—from packing to routing—so your relocation runs smoothly from start to finish.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16" y1="56" x2="16" y2="12" />
        <line x1="16" y1="12" x2="48" y2="20" />
        <line x1="16" y1="22" x2="40" y2="28" />
        <line x1="40" y1="28" x2="40" y2="56" />
        <line x1="8" y1="56" x2="56" y2="56" />
        <rect x="34" y="40" width="12" height="16" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Flexible Services",
    description:
      "Local, long-distance, or commercial—we adapt to your schedule and needs with a range of moving options.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="28" width="20" height="28" />
        <rect x="36" y="16" width="20" height="40" />
        <line x1="8" y1="56" x2="56" y2="56" />
        <line x1="14" y1="36" x2="14" y2="44" />
        <line x1="22" y1="36" x2="22" y2="44" />
        <line x1="42" y1="24" x2="42" y2="32" />
        <line x1="50" y1="24" x2="50" y2="32" />
        <line x1="42" y1="40" x2="42" y2="48" />
        <line x1="50" y1="40" x2="50" y2="48" />
        <polygon points="28,28 36,28 32,16" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fast & Reliable",
    description:
      "On-time pickups and deliveries with a professional crew. We treat your belongings with the care they deserve.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="44" height="44" rx="2" />
        <line x1="10" y1="24" x2="54" y2="24" />
        <line x1="24" y1="10" x2="24" y2="54" />
        <line x1="32" y1="32" x2="46" y2="32" />
        <line x1="32" y1="40" x2="46" y2="40" />
        <line x1="32" y1="48" x2="46" y2="48" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Careful Handling",
    description:
      "From fragile items to heavy furniture, we protect your belongings with the right materials and careful loading.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 26l14-10 14 10v22H18V26z" />
        <path d="M26 30h12v10H26V30z" />
        <path d="M24 18l8 6 8-6" />
        <path d="M10 44h8m28 0h8" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const imageRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  // Layout requirement: grey / colored / colored / grey (keep card design unchanged)
  const highlighted = new Set([1, 2]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const imageEl = imageRef.current;
    const leftCards = [cards[0], cards[1]].filter(Boolean);
    const rightCards = [cards[2], cards[3]].filter(Boolean);
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(leftCards, { opacity: 0, x: -70, y: 26, rotateY: -6, transformPerspective: 900 });
      gsap.set(rightCards, { opacity: 0, x: 70, y: 26, rotateY: 6, transformPerspective: 900 });
      gsap.set(imageEl, { opacity: 0, y: 46, scale: 0.94, filter: "blur(6px)" });
      gsap.set(leftCol, { opacity: 1 });
      gsap.set(rightCol, { opacity: 1 });

      if (reduceMotion) {
        gsap.set([leftCards, rightCards, imageEl], { opacity: 1, x: 0, y: 0, rotateY: 0, scale: 1, filter: "none" });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power4.out" },
      });

      // Dramatic, WordPress-style: left cards → image → right cards
      tl.to(leftCards, { opacity: 1, x: 0, y: 0, rotateY: 0, duration: 1.35, stagger: 0.18 }, 0)
        .to(imageEl, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.55, ease: "power3.out" }, 0.25)
        .to(rightCards, { opacity: 1, x: 0, y: 0, rotateY: 0, duration: 1.35, stagger: 0.18 }, 0.55);

      // Gentle parallax on the middle image to keep it alive
      gsap.to(imageEl, {
        y: 18,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background w-full py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Left column: 2 cards */}
        <div ref={leftColRef} className="flex flex-col gap-6">
          {[features[0], features[1]].map((feature, idx) => {
            const i = idx;
            const isActive = highlighted.has(i);
            return (
              <div
                key={feature.number}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`relative rounded-sm p-8 transition-all duration-300 flex flex-col gap-4 ${
                  isActive
                    ? "bg-primary text-white shadow-xl scale-[1.02]"
                    : "bg-surface text-foreground hover:shadow-lg"
                }`}
              >
                <span
                  className={`absolute top-4 right-5 text-6xl font-extrabold select-none pointer-events-none transition-colors duration-300 ${
                    isActive ? "text-white/20" : "text-primary/15"
                  }`}
                >
                  {feature.number}
                </span>

                <div className="flex items-center gap-4">
                  <span className={isActive ? "text-white" : "text-primary"}>
                    {feature.icon}
                  </span>
                  {isActive && (
                    <span className="text-white text-3xl font-extrabold leading-none">
                      {feature.number}
                    </span>
                  )}
                </div>

                <h3 className={`text-lg font-extrabold ${isActive ? "text-white" : "text-foreground"}`}>
                  {feature.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isActive ? "text-white/85" : "text-muted-foreground"}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Middle column: tall image */}
        <div
          ref={imageRef}
          className="relative rounded-sm overflow-hidden min-h-[420px] lg:min-h-0 lg:h-full bg-foreground"
        >
          <Image
            src="/images/Danny-4-497x1024.jpg"
            alt="Professional moving team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/45" aria-hidden />
          <div className="absolute inset-0 ring-1 ring-white/10" aria-hidden />

          {/* Small accent label */}
          <div className="absolute left-6 bottom-6 right-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white px-4 py-2 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-semibold tracking-wider uppercase">
                Our Happy • Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right column: 2 cards */}
        <div ref={rightColRef} className="flex flex-col gap-6">
          {[features[2], features[3]].map((feature, idx) => {
            const i = idx + 2;
            const isActive = highlighted.has(i);
            return (
              <div
                key={feature.number}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`relative rounded-sm p-8 transition-all duration-300 flex flex-col gap-4 ${
                  isActive
                    ? "bg-primary text-white shadow-xl scale-[1.02]"
                    : "bg-surface text-foreground hover:shadow-lg"
                }`}
              >
                <span
                  className={`absolute top-4 right-5 text-6xl font-extrabold select-none pointer-events-none transition-colors duration-300 ${
                    isActive ? "text-white/20" : "text-primary/15"
                  }`}
                >
                  {feature.number}
                </span>

                <div className="flex items-center gap-4">
                  <span className={isActive ? "text-white" : "text-primary"}>
                    {feature.icon}
                  </span>
                  {isActive && (
                    <span className="text-white text-3xl font-extrabold leading-none">
                      {feature.number}
                    </span>
                  )}
                </div>

                <h3 className={`text-lg font-extrabold ${isActive ? "text-white" : "text-foreground"}`}>
                  {feature.title}
                </h3>

                <p className={`text-sm leading-relaxed ${isActive ? "text-white/85" : "text-muted-foreground"}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
