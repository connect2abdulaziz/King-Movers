"use client";

import { Truck, ShieldCheck, Clock, PackageCheck, Users } from "lucide-react";
import Image from "next/image";

const cardBase =
  "flex flex-col justify-between rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl";

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading – same layout as Services */}
        <div className="mb-16 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="mb-6 inline-block rounded-full bg-surface px-4 py-1 text-sm text-primary">
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              What makes us
              <br />
              different
            </h2>
          </div>
          <div className="max-w-md">
            <p className="leading-relaxed text-muted-foreground">
              We make moving simple, stress-free, and reliable — with a team that
              treats every move like it&apos;s their own.
            </p>
          </div>
        </div>

        {/* 3x3 Grid with logo in the center */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-3">
          {/* Top row */}
          <article className={`${cardBase} md:col-start-1 md:row-start-1`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Truck className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Fast & Reliable
            </h3>
            <p className="text-sm text-muted-foreground">
              On-time pickups and safe deliveries with professional handling.
            </p>
          </article>

          <article className={`${cardBase} md:col-start-2 md:row-start-1`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Flexible Scheduling
            </h3>
            <p className="text-sm text-muted-foreground">
              Evening and weekend moves that work around your schedule.
            </p>
          </article>

          <article className={`${cardBase} md:col-start-3 md:row-start-1`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Fully Insured
            </h3>
            <p className="text-sm text-muted-foreground">
              Your belongings are protected every step of the way.
            </p>
          </article>

          {/* Middle row, left and right */}
          <article className={`${cardBase} md:col-start-1 md:row-start-2`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <PackageCheck className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Careful Packing
            </h3>
            <p className="text-sm text-muted-foreground">
              High-quality materials and careful wrapping for every item.
            </p>
          </article>

          {/* Center logo card – logo only */}
          <div className="flex items-center justify-center md:col-start-2 md:row-start-2">
            <div className="relative h-16 w-auto md:h-32">
              <Image
                src="/images/logo.webp"
                alt="Kings Moving Services logo"
                width={160}
                height={80}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          <article className={`${cardBase} md:col-start-3 md:row-start-2`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Friendly Crew
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional movers who communicate clearly and respect your home.
            </p>
          </article>

          {/* Bottom row */}
          <article className={`${cardBase} md:col-start-1 md:row-start-3`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PackageCheck className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Damage-Free Moves
            </h3>
            <p className="text-sm text-muted-foreground">
              Floor, doorway, and furniture protection on every job.
            </p>
          </article>

          <article className={`${cardBase} md:col-start-2 md:row-start-3`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              On-Time Guarantee
            </h3>
            <p className="text-sm text-muted-foreground">
              We show up when we say we will — no surprises.
            </p>
          </article>

          <article className={`${cardBase} md:col-start-3 md:row-start-3`}>
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Happy Customers
            </h3>
            <p className="text-sm text-muted-foreground">
              5-star reviews from families and businesses across the city.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
