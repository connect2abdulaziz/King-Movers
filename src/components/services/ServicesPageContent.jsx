"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "packing", label: "Packing" },
  { id: "long-distance", label: "Long Distance" },
  { id: "storage", label: "Storage" },
];

const SERVICES = [
  {
    id: 1,
    title: "Residential Moving",
    category: "residential",
    description: "Full-service moves for homes and apartments.",
    image: "/images/services/service-1.jpg",
  },
  {
    id: 2,
    title: "Apartment Moving",
    category: "residential",
    description: "Quick, careful moves for renters and condo dwellers.",
    image: "/images/services/service-2.jpg",
  },
  {
    id: 3,
    title: "Commercial Moving",
    category: "commercial",
    description: "Office and business relocations, minimal downtime.",
    image: "/images/services/service-3.jpg",
  },
  {
    id: 4,
    title: "Office Relocation",
    category: "commercial",
    description: "IT, furniture, and equipment moved on your schedule.",
    image: "/images/services/service-4.jpg",
  },
  {
    id: 5,
    title: "Packing Services",
    category: "packing",
    description: "Professional packing with quality materials included.",
    image: "/images/services/service-5.jpg",
  },
  {
    id: 6,
    title: "Furniture Disassembly",
    category: "packing",
    description: "Safe take-down and reassembly of beds, desks, and more.",
    image: "/images/services/service-6.jpg",
  },
  {
    id: 7,
    title: "Long Distance Moving",
    category: "long-distance",
    description: "Cross-state and interstate moves, fully insured.",
    image: "/images/services/service-7.jpg",
  },
  {
    id: 8,
    title: "Interstate Moving",
    category: "long-distance",
    description: "Coordinated long-haul moves with tracking and support.",
    image: "/images/services/service-8.jpg",
  },
  {
    id: 9,
    title: "Storage Solutions",
    category: "storage",
    description: "Short- and long-term secure storage for your belongings.",
    image: "/images/services/service-9.jpg",
  },
  {
    id: 10,
    title: "Temp Storage",
    category: "storage",
    description: "Flexible storage between move-out and move-in dates.",
    image: "/images/services/service-10.jpg",
  },
];

export default function ServicesPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Page header – same style as home sections */}
        <div className="mb-16 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="mb-6 inline-block rounded-full bg-surface px-4 py-1 text-sm text-primary">
              Our Services
            </span>
            <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              What we can do
              <br />
              for you
            </h1>
          </div>
          <div className="max-w-md">
            <p className="leading-relaxed text-muted-foreground">
              From careful packing to safe transportation, we provide
              professional moving solutions tailored to your needs.
            </p>
          </div>
        </div>

        {/* Pill filter */}
        <div className="mb-12 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-white"
                  : "bg-surface text-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group relative h-[380px] overflow-hidden rounded-3xl"
            >
              <Link href="#" className="block h-full w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h2 className="text-xl font-semibold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm text-white/90">
                    {service.description}
                  </p>
                </div>
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-sm transition group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </Link>
            </article>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No services in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
