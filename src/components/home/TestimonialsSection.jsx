"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const reviews = [
  {
    id: 1,
    name: "Alex H.",
    rating: 4.9,
    date: "Out-of-State Moving",
    avatar: "https://i.pravatar.cc/150?img=11",
    quote:
      "Kings moving services was one of the best decisions ever! I received 6 quotes to help with my interstate move. Kings was BY FAR the cheapest ($3900) compared to other quotes of $7000-$9000. David was extremely communicative and helpful throughout the entire process. It was stress-free from start to finish.",
  },
  {
    id: 2,
    name: "Jeffrey K.",
    rating: 4.9,
    date: "Out-of-State Moving",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "Kings took great care to ensure our family and our things were well taken care of during a difficult time. They were easy to work with, communicated well, and were on or ahead of schedule.",
  },
  {
    id: 3,
    name: "Eve M.",
    rating: 4.9,
    date: "Out-of-State Moving",
    avatar: "https://i.pravatar.cc/150?img=23",
    quote:
      "Kings made sure that I understood every part of the moving process. On moving day, Angelo and Gilbert worked quickly and carefully to make sure everything was wrapped and loaded on the truck in no time. Kings has made a potentially stressful move easy and stress free.",
  },
  {
    id: 4,
    name: "Deborah C.",
    rating: 4.9,
    date: "Out-of-State Moving",
    avatar: "https://i.pravatar.cc/150?img=52",
    quote:
      "Always returned calls with answers if they needed to. I would definitely hire them again! Very professional and not a broker!!!",
  },
  {
    id: 5,
    name: "Mirjam D.",
    rating: 5,
    date: "Local Move",
    avatar: "https://i.pravatar.cc/150?img=33",
    quote:
      "Great moving company! They came on time and did a fantastic job. I moved 2 hours away from my location and they showed up just shortly after I had gotten there. Packing was done very well and felt nothing would get broken or anything and nothing did. Appreciate their job well done!",
  },
  {
    id: 6,
    name: "Kelcie K.",
    rating: 5,
    date: "Storage & Move",
    avatar: "https://i.pravatar.cc/150?img=44",
    quote:
      "Let me just say this company is absolutely amazing. They were quick, efficient and super careful with my belongings. There was zero damaged items. They even assisted me in moving stuff that I am storing in the garage so I would be able to park my car in there. David assisted me from beginning to end with setting everything up to assisting me with changing the card after I realized I gave them the wrong card. I had a 10x20 storage unit that was 85% full and it only took them three hours to load up, move it to my house and help me arrange everything! I would highly recommend them!",
  },
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(1);
  const quoteRef = useRef(null);
  const quoteTextRef = useRef(null);
  const avatarRefs = useRef([]);
  const nameRefs = useRef([]);
  const lineRef = useRef(null);
  const timerRef = useRef(null);
  const isAnimating = useRef(false);

  const animateTo = (nextIndex) => {
    if (isAnimating.current || nextIndex === activeIndex) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        setActiveIndex(nextIndex);
      },
    });

    // Fade out current quote
    tl.to(quoteTextRef.current, {
      opacity: 0,
      y: -16,
      duration: 0.35,
      ease: "power2.in",
    });

    // Scale down old active avatar
    if (avatarRefs.current[activeIndex]) {
      tl.to(
        avatarRefs.current[activeIndex],
        { scale: 1, filter: "grayscale(100%)", duration: 0.3, ease: "power2.inOut" },
        "<"
      );
      tl.to(
        nameRefs.current[activeIndex],
        { fontWeight: 400, color: "#9ca3af", fontSize: "0.875rem", duration: 0.3, ease: "power2.inOut" },
        "<"
      );
    }

    // Scale up new active avatar
    if (avatarRefs.current[nextIndex]) {
      tl.to(
        avatarRefs.current[nextIndex],
        { scale: 1.15, filter: "grayscale(0%)", duration: 0.4, ease: "back.out(1.4)" },
        "-=0.1"
      );
      tl.to(
        nameRefs.current[nextIndex],
        { fontWeight: 700, color: "#111827", fontSize: "1.125rem", duration: 0.3, ease: "power2.out" },
        "<"
      );
    }

    // Fade in new quote
    tl.fromTo(
      quoteTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      "-=0.1"
    );
  };

  // Auto-cycle
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reviews.length;
        return next;
      });
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Animate when activeIndex changes
  useEffect(() => {
    if (!quoteTextRef.current) return;

    gsap.fromTo(
      quoteTextRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    avatarRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        scale: i === activeIndex ? 1.18 : 1,
        filter: i === activeIndex ? "grayscale(0%)" : "grayscale(80%)",
        duration: 0.5,
        ease: "back.out(1.4)",
      });
    });

    nameRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        color: i === activeIndex ? "#111827" : "#9ca3af",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [activeIndex]);

  const handleSelect = (i) => {
    clearInterval(timerRef.current);
    setActiveIndex(i);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  return (
    <section className="bg-background py-10 md:py-15">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header – same layout as Services */}
        <div className="mb-16 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="mb-6 inline-block rounded-full bg-surface px-4 py-1 text-sm text-primary">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Customer
              <br />
              Reviews
            </h2>
          </div>
          <div className="max-w-md">
            {/* <p className="leading-relaxed text-muted-foreground">
              Real experiences from homeowners and businesses we&apos;ve helped move.
            </p> */}
          </div>
        </div>

        <div className="flex flex-col items-start gap-12 md:flex-row md:gap-10">
          {/* LEFT: Reviewer list with connecting line */}
          <div className="relative w-full shrink-0 pl-5 md:w-[38%]">
            {/* Vertical connecting line */}
            <div
              ref={lineRef}
              className="absolute left-[28px] top-6 bottom-6 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #d1d5db 20%, #d1d5db 80%, transparent)",
              }}
            />

            <div className="flex flex-col gap-6">
              {reviews.map((review, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={review.id}
                    onClick={() => handleSelect(i)}
                    className="relative z-10 flex items-center gap-4 text-left transition-all"
                    style={{ paddingLeft: "0" }}
                  >
                    {/* Avatar */}
                    <div
                      ref={(el) => (avatarRefs.current[i] = el)}
                      className="shrink-0 overflow-hidden rounded-full ring-2 transition-all duration-300"
                      style={{
                        width: isActive ? "62px" : "48px",
                        height: isActive ? "62px" : "48px",
                        ringColor: isActive ? "var(--primary)" : "transparent",
                        boxShadow: isActive
                          ? "0 0 0 2px var(--primary)"
                          : "0 0 0 2px #e5e7eb",
                        filter: isActive ? "grayscale(0%)" : "grayscale(80%)",
                        transition:
                          "width 0.4s ease, height 0.4s ease, box-shadow 0.4s ease",
                      }}
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Name + rating */}
                    <div>
                      <p
                        ref={(el) => (nameRefs.current[i] = el)}
                        className="text-sm font-medium leading-tight text-muted-foreground transition-all duration-300 md:text-base"
                      >
                        {review.name}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <svg
                          className="h-3.5 w-3.5"
                          style={{
                            color: isActive ? "var(--accent)" : "#d1d5db",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.285-3.957z" />
                        </svg>
                        <span
                          className="text-xs"
                          style={{ color: isActive ? "#6b7280" : "#d1d5db" }}
                        >
                          {review.rating} on {review.date}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Progress dots */}
            <div className="mt-8 ml-1 flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === activeIndex ? "var(--primary)" : "#e5e7eb",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Quote */}
          <div
            ref={quoteRef}
            className="flex flex-1 flex-col justify-center pt-2 pl-0 md:pl-16"
          >
            {/* Opening quote mark */}
            <div className="mb-4 select-none text-5xl leading-none text-surface">
              &quot;
            </div>

            <p
              ref={quoteTextRef}
              className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ fontStyle: "italic" }}
            >
              {reviews[activeIndex].quote}
            </p>

            {/* Reviewer name below quote */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm font-semibold text-foreground">
                {reviews[activeIndex].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}