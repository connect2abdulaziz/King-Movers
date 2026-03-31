"use client";

import { useEffect, useRef } from "react";
import AboutProcessSection from "@/components/about/AboutProcessSection";
import AboutHeroSection from "@/components/about/sections/AboutHeroSection";
import AboutCompanySection from "@/components/about/sections/AboutCompanySection";
import AboutServicesGridSection from "@/components/about/sections/AboutServicesGridSection";
import AboutVisionSection from "@/components/about/sections/AboutVisionSection";
import AboutWhyChooseSection from "@/components/about/sections/AboutWhyChooseSection";
import AboutCtaSection from "@/components/about/sections/AboutCtaSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPageClient() {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroContentRef = useRef(null);

  const highlightsRef = useRef(null);
  const highlightCardRefs = useRef([]);

  const aboutRef = useRef(null);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const servicesRef = useRef(null);
  const serviceCardRefs = useRef([]);
  const servicesTitleRef = useRef(null);

  const visionRef = useRef(null);
  const visionLeftRef = useRef(null);
  const visionRightRef = useRef(null);

  const whyRef = useRef(null);
  const whyTitleRef = useRef(null);
  const whyCardRefs = useRef([]);

  const ctaRef = useRef(null);
  const ctaContentRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const heroCtx = gsap.context(() => {
      gsap.set(heroBgRef.current, { scale: 1.12, transformOrigin: "center" });
      gsap.set(heroContentRef.current?.children || [], { opacity: 0, y: 28 });

      if (reduceMotion) {
        gsap.set(heroBgRef.current, { scale: 1 });
        gsap.set(heroContentRef.current?.children || [], { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(heroBgRef.current, { scale: 1, duration: 2.0 }, 0).to(
        heroContentRef.current?.children || [],
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.13 },
        0.45
      );

      gsap.to(heroBgRef.current, {
        y: 34,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
    }, heroRef);

    const highlightsCtx = gsap.context(() => {
      const cards = highlightCardRefs.current.filter(Boolean);
      gsap.set(cards, { opacity: 0, y: 42 });
      if (reduceMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        })
        .to(cards, { opacity: 1, y: 0, duration: 1.05, stagger: 0.14 });
    }, highlightsRef);

    const aboutCtx = gsap.context(() => {
      gsap.set(aboutLeftRef.current, { opacity: 0, x: -44 });
      gsap.set(aboutRightRef.current, { opacity: 0, x: 44 });
      if (reduceMotion) {
        gsap.set([aboutLeftRef.current, aboutRightRef.current], { opacity: 1, x: 0 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        })
        .to(aboutLeftRef.current, { opacity: 1, x: 0, duration: 1.5 }, 0)
        .to(aboutRightRef.current, { opacity: 1, x: 0, duration: 1.5 }, 0.18);
    }, aboutRef);

    const servicesCtx = gsap.context(() => {
      const cards = serviceCardRefs.current.filter(Boolean);
      gsap.set(servicesTitleRef.current, { opacity: 0, y: 22 });
      gsap.set(cards, { opacity: 0, y: 38, scale: 0.94 });
      if (reduceMotion) {
        gsap.set([servicesTitleRef.current, ...cards], { opacity: 1, y: 0, scale: 1 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        })
        .to(servicesTitleRef.current, { opacity: 1, y: 0, duration: 1.0 }, 0)
        .to(cards, { opacity: 1, y: 0, scale: 1, duration: 1.0, stagger: 0.07 }, 0.2);
    }, servicesRef);

    const visionCtx = gsap.context(() => {
      gsap.set([visionLeftRef.current, visionRightRef.current], { opacity: 0, y: 34 });
      if (reduceMotion) {
        gsap.set([visionLeftRef.current, visionRightRef.current], { opacity: 1, y: 0 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        })
        .to(visionLeftRef.current, { opacity: 1, y: 0, duration: 1.15 }, 0)
        .to(visionRightRef.current, { opacity: 1, y: 0, duration: 1.15 }, 0.16);
    }, visionRef);

    const whyCtx = gsap.context(() => {
      const cards = whyCardRefs.current.filter(Boolean);
      gsap.set(whyTitleRef.current, { opacity: 0, y: 22 });
      gsap.set(cards, { opacity: 0, y: 32 });
      if (reduceMotion) {
        gsap.set([whyTitleRef.current, ...cards], { opacity: 1, y: 0 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power4.out" },
        })
        .to(whyTitleRef.current, { opacity: 1, y: 0, duration: 1.0 }, 0)
        .to(cards, { opacity: 1, y: 0, duration: 1.0, stagger: 0.12 }, 0.2);
    }, whyRef);

    const ctaCtx = gsap.context(() => {
      gsap.set(ctaContentRef.current?.children || [], { opacity: 0, y: 28 });
      if (reduceMotion) {
        gsap.set(ctaContentRef.current?.children || [], { opacity: 1, y: 0 });
        return;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
          defaults: { ease: "power3.out" },
        })
        .to(ctaContentRef.current?.children || [], {
          opacity: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.12,
        });
    }, ctaRef);

    return () => {
      [heroCtx, highlightsCtx, aboutCtx, servicesCtx, visionCtx, whyCtx, ctaCtx].forEach(
        (ctx) => ctx.revert()
      );
    };
  }, []);

  return (
    <>
      <AboutHeroSection
        sectionRef={heroRef}
        bgRef={heroBgRef}
        contentRef={heroContentRef}
      />
        <AboutServicesGridSection
        sectionRef={servicesRef}
        titleRef={servicesTitleRef}
        cardRefs={serviceCardRefs}
      />
      <AboutCompanySection
        sectionRef={aboutRef}
        leftRef={aboutLeftRef}
        rightRef={aboutRightRef}
      />
    
      <AboutVisionSection
        sectionRef={visionRef}
        leftRef={visionLeftRef}
        rightRef={visionRightRef}
      />
      <AboutWhyChooseSection
        sectionRef={whyRef}
        titleRef={whyTitleRef}
        cardRefs={whyCardRefs}
      />
      <AboutProcessSection />
      <AboutCtaSection sectionRef={ctaRef} contentRef={ctaContentRef} />
    </>
  );
}
