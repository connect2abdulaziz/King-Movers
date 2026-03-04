"use client";

import { Star, Truck, ShieldCheck, Headphones } from "lucide-react";
import CountUp from "react-countup";

export default function TrustSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--surface)]">
      <div className="max-w-7xl py-15 mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-bold text-foreground leading-tight">
            Over <span className="text-[var(--primary)]">500+</span> Moves
            <br />
            <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">
              Completed
            </span>
          </h2>

          <p className="mt-8 text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed">
            Trusted by families and businesses for safe, reliable, and
            professional moving services. We handle every move with care and precision.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex mt-4 items-center justify-center">

          {/* Big Soft Background Circle */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[rgba(86,26,140,0.08)]" />

          {/* CENTER MAIN STAT */}
          <div className="relative w-48 h-48 bg-transparent rounded-full  flex flex-col items-center justify-center z-10">
            <div className="text-4xl font-bold text-[var(--primary)]">
              <CountUp end={500} duration={2} suffix="+" />
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              Moves Completed
            </p>
          </div>

          {/* TOP BUBBLE - Rating */}
          <div className="absolute -top-40 right-50 w-36 h-36 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-[var(--accent)]">
              4.9/5
            </div>
            <p className="text-xs text-[var(--muted-foreground)]">
              Google Rating
            </p>
          </div>

          {/* RIGHT BUBBLE - Licensed */}
          <div className="absolute right-0 -bottom-16 w-40 h-40 bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center px-4">
            <ShieldCheck className="w-6 h-6 text-[var(--primary)] mb-2" />
            <p className="text-xs font-medium text-[var(--foreground)]">
              Fully Licensed & Insured
            </p>
          </div>

          {/* LEFT BUBBLE - Support */}
          <div className="absolute left-6 bottom-10 w-32 h-32 bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center px-3">
            <Headphones className="w-6 h-6 text-[var(--primary)] mb-2" />
            <p className="text-xs font-medium text-[var(--foreground)]">
              24/7 Support
            </p>
          </div>
          <div className="absolute left-60 -bottom-32 w-12 h-12 bg-white rounded-full shadow-lg flex flex-col items-center justify-center text-center px-3">
          
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-10 left-0 w-4 h-4 bg-[var(--accent)] rounded-full opacity-80" />
          <div className="absolute bottom right-0 w-3 h-3 bg-[var(--primary)] rounded-full opacity-60" />
          <div className="absolute top-32 right-4 w-2 h-2 bg-[var(--accent)] rounded-full opacity-60" />

        </div>
      </div>
    </section>
  );
}