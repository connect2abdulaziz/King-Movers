"use client";

import { Sparkles } from "lucide-react";

export default function ScrollingTextMarquee() {
  return (
    <div className="relative overflow-hidden py-12 group bg-surface">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10"
        style={{
          background: "linear-gradient(to right, var(--surface) 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10"
        style={{
          background: "linear-gradient(to left, var(--surface) 0%, transparent 100%)",
        }}
      />

      {/* Marquee track */}
      <div className="flex w-max" style={{ animation: "marquee 45s linear infinite" }}>
        <div className="flex items-center">
          <ScrollingItem />
        </div>
        <div className="flex items-center">
          <ScrollingItem />
        </div>
      </div>
    </div>
  );
}

function ScrollingItem() {
  return (
    <div className="flex items-center whitespace-nowrap">
      <span className="font-serif text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-extrabold uppercase tracking-tight mr-12 text-foreground transition-colors duration-500 group-hover:text-primary">
        Trusted Moving
      </span>
      <Sparkles
        size={80}
        className="mx-12 text-primary opacity-40 shrink-0"
        stroke="none"
        fill="currentColor"
      />
    </div>
  );
}
