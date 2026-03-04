"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  { title: "Residential Moving", image: "/images/services/service-1.jpg" },
  { title: "Commercial Moving", image: "/images/services/service-2.jpg" },
  { title: "Packing Services", image: "/images/services/service-3.jpg" },
  { title: "Long Distance Moving", image: "/images/services/service-4.jpg" },
  { title: "Storage Solutions", image: "/images/services/service-5.jpg" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP AREA */}
        <div className="mb-16 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT */}
          <div>
            <span className="mb-6 inline-block rounded-full bg-surface px-4 py-1 text-sm text-primary">
              Our Services
            </span>

            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              What we can do
              <br />
              for you
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-md">
            <p className="mb-6 leading-relaxed text-muted-foreground">
              From careful packing to safe transportation, we provide
              professional moving solutions tailored to your needs.
            </p>

            <button className="group inline-flex items-center gap-3 rounded-full bg-surface px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary hover:text-white">
              See our services
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition group-hover:bg-accent">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group relative h-[420px] cursor-pointer overflow-hidden rounded-3xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="text-lg font-medium text-white">
                  {service.title}
                </h3>
              </div>

              {/* Arrow Circle */}
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-sm">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

