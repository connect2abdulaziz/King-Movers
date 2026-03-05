"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const steps = [
  {
    id: 1,
    label: "Step 1",
    title: "Request a Quote",
    description:
      "Home shifting services are designed to make your move seamless and stress-free, with a wide range of features to meet diverse needs.",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Schedule Your Shifting",
    description:
      "Home shifting services are designed to make your move seamless and stress-free, with a wide range of features to meet diverse needs.",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Shifting with Ease",
    description:
      "Home shifting services are designed to make your move seamless and stress-free, with a wide range of features to meet diverse needs.",
  },
];

export default function ThreeStepsSection() {
  const stepRefs = useRef([]);

  useEffect(() => {
    const refs = stepRefs.current.filter(Boolean);
    if (refs.length === 0) return;
    gsap.fromTo(
      refs,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.28,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="w-full bg-background">
      {/* ── HEADER ── */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
        <h2 className="font-serif text-5xl font-extrabold leading-tight text-foreground mb-6">
          Fast and Reliable Responses
          <br />
          for 3 Steps Free Shifting
        </h2>
        <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted-foreground">
          Our priority is your customer satisfaction, and we go the extra mile
          to exceed your expectations.
        </p>
      </div>

      {/* ── TWO-COLUMN BODY ── */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 items-start gap-0 lg:grid-cols-2">

          {/* LEFT — Steps */}
          <div className="pt-4 pr-0 lg:pr-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className="relative"
              >
                {/* Step pill */}
                <div className="mb-3 inline-block">
                  <span className="rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-primary">
                    {step.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Divider between steps (not after last) */}
                {index < steps.length - 1 && (
                  <div className="my-8 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT — Image */}
          <div className="mt-8 h-[520px] overflow-hidden rounded-2xl lg:mt-0">
            <img
              src="/images/crate-Kingsmovingservices.jpg"
              alt="Delivery worker smiling in warehouse"
              className="h-full w-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
