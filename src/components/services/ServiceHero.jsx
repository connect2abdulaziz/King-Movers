"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceHero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current?.children || [], { opacity: 0, y: 24 });
      gsap.set(bgRef.current, { scale: 1.12, transformOrigin: "center center" });

      if (!reduceMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.to(bgRef.current, { scale: 1, duration: 1.8 }, 0).to(
          contentRef.current?.children || [],
          { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
          0.4
        );

        // Zoom in + slight drift on scroll (same feel as Home page 3)
        gsap.to(bgRef.current, {
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
        gsap.set(bgRef.current, { scale: 1, y: 0 });
        gsap.set(contentRef.current?.children || [], { opacity: 1, y: 0 });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — moving / trucks; zoom animates on scroll */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center text-white px-6 max-w-3xl"
      >
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/80 mb-4 font-medium">
          What We Offer
        </p>
        <h1 className="text-4xl md:text-6xl font-bold line-height-[1.1] mb-6 leading-tight">
          Full-Service Moving
          <br />
          <span className="text-primary bg-amber-300 p-2 border rounded-2xl">Done Right</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Residential, commercial, packing, long-distance, and storage — one
          trusted team for every step of your move.
        </p>
        <a
          href="/#quote"
          className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
