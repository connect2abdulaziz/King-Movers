"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteForm() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(headingRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(formRef.current, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero/moving-boxes.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-foreground/85"
        aria-hidden
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div ref={headingRef} className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Free Estimate
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Get Your Moving Quote
          </h2>
          <p className="text-white/70 text-sm mt-3 max-w-md mx-auto">
            Fill in the details below and we&apos;ll get back to you with a custom quote.
          </p>
          </div>

          {/* Form card — centered, bordered */}
          <div
            ref={formRef}
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
          >
            {/* Accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary" aria-hidden />

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-name" className="sr-only">Your name</label>
                  <input
                    id="quote-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="sr-only">Email</label>
                  <input
                    id="quote-email"
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                  />
                </div>
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="quote-weight" className="sr-only">Weight (Kg)</label>
                <input
                  id="quote-weight"
                  type="text"
                  placeholder="Weight (Kg)"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />
              </div>
              <div>
                <label htmlFor="quote-distance" className="sr-only">Distance (Km)</label>
                <input
                  id="quote-distance"
                  type="text"
                  placeholder="Distance (Km)"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="quote-service" className="sr-only">Select service</label>
              <select
                id="quote-service"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition appearance-none cursor-pointer [&>option]:bg-foreground [&>option]:text-white"
              >
                <option value="" disabled>Select Service</option>
                <option>Home Shifting</option>
                <option>Office &amp; Corporate</option>
                <option>International Relocation</option>
                <option>Vehicle Transportation</option>
              </select>
            </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm py-4 rounded-lg transition-colors duration-200 tracking-wide"
              >
                Get Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
