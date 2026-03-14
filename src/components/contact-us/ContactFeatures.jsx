"use client";

import { useState } from "react";
import { MessageCircle, ClipboardList, Truck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <MessageCircle className="w-6 h-6" aria-hidden="true" />,
    title: "Tell us about your move",
    lead: "Share a few details in under a minute.",
    subtitle: "Request your quote",
    description:
      "Send us your locations, ideal move date, and a rough idea of what you’re moving. Our coordinators review every request by hand.",
  },
  {
    step: "02",
    icon: <ClipboardList className="w-6 h-6" aria-hidden="true" />,
    title: "Get a tailored plan",
    lead: "We design a move around you.",
    subtitle: "Custom moving plan",
    description:
      "We match you with the right crew, truck size, and schedule, then send clear pricing with no hidden fees or last‑minute surprises.",
  },
  {
    step: "03",
    icon: <Truck className="w-6 h-6" aria-hidden="true" />,
    title: "Relax on moving day",
    lead: "We handle the heavy lifting.",
    subtitle: "Smooth move, start to finish",
    description:
      "On moving day we arrive on time, protect your home and belongings, and keep you updated until the last box is in the right room.",
  },
];

const toneVariants = [
  {
    badge: "bg-primary text-white",
    ring: "border-primary",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    outerRing: "border-primary/30",
    stepLabel: "bg-primary",
    glow: "shadow-[0_0_40px_rgba(86,26,140,0.28)]",
    accent: "bg-primary",
    subtitleColor: "text-primary",
  },
  {
    badge: "bg-accent text-foreground",
    ring: "border-accent",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    outerRing: "border-accent/40",
    stepLabel: "bg-accent",
    glow: "shadow-[0_0_40px_rgba(254,195,77,0.4)]",
    accent: "bg-accent",
    subtitleColor: "text-accent",
  },
  {
    badge: "bg-foreground text-background",
    ring: "border-foreground",
    iconBg: "bg-foreground/5",
    iconColor: "text-foreground",
    outerRing: "border-foreground/20",
    stepLabel: "bg-foreground",
    glow: "shadow-[0_0_32px_rgba(15,15,20,0.22)]",
    accent: "bg-foreground",
    subtitleColor: "text-foreground",
  },
];

export default function ContactFeatures() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-background py-20 px-4 sm:px-6 md:px-8 font-sans">
      {/* Section Header */}
      <div className="text-center mb-14">
        <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-2">
          How It Works
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold text-foreground leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Three Simple Steps to Connect
        </h2>
        <div className="flex justify-center mt-4 gap-1.5">
          <span className="w-10 h-1 rounded-full bg-primary" />
          <span className="w-10 h-1 rounded-full bg-accent" />
          <span className="w-10 h-1 rounded-full bg-foreground/15" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 items-stretch">
      {steps.map((step, i) => {
        const c = toneVariants[i] ?? toneVariants[toneVariants.length - 1];
        const isHovered = hovered === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative bg-background rounded-2xl p-7 flex flex-col transition-all duration-300 cursor-pointer border border-foreground/8
                ${isHovered ? `${c.glow} -translate-y-2` : "shadow-sm"}
              `}
            >
              {/* Top: Title block */}
              <div className="mb-5">
                {/* <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase ${c.badge}`}
                >
                  Step {step.step}
                </span> */}
                <h3 className="mt-3 text-md md:text-xl font-semibold text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                  {step.lead}
                </p>
              </div>

              {/* Divider */}
              <div className={`w-full h-px ${c.accent} opacity-20`} />

              {/* Step Badge + Icon */}
              <div className="flex items-center gap-4 mb-5">
                {/* Step label */}
                <div
                  className={`flex items-center gap-1 rounded-l-full rounded-r-sm px-3 py-1.5 ${c.stepLabel} text-white text-xs font-bold tracking-widest uppercase shadow-sm`}
                >
                  <span>STEP</span>
                </div>
                <span
                  className="text-4xl font-black text-foreground/10 tracking-tight"
                >
                  {step.step}
                </span>

                {/* Icon Circle */}
                <div className="ml-auto relative">
                  <div
                    className={`w-14 h-14 rounded-full border-4 ${c.outerRing} flex items-center justify-center`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full border-2 ${c.ring} ${c.iconBg} flex items-center justify-center ${c.iconColor} transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
                    >
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom: Option label + description */}
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${c.subtitleColor}`}>
                  {step.subtitle}
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover accent bar at bottom */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${c.accent} transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}