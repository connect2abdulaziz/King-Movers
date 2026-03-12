"use client";

import Link from "next/link";

const CARDS = [
  {
    title: "Home Moving",
    description:
      "With our expert team and strong vehicle fleet, we provide economical and reliable local and residential moving services.",
    href: "/services/home-shifting",
    Icon: TruckIcon,
  },
  {
    title: "Office & Corporate",
    description:
      "We provide economical and reliable office relocation services with our expert team and careful handling of equipment.",
    href: "/services/office-corporate-shifting",
    Icon: BuildingIcon,
  },
  {
    title: "International Relocation",
    description:
      "With our expert team and trusted partners worldwide, we provide economical and reliable international moving services.",
    href: "/services/international-relocation",
    Icon: PlaneIcon,
  },
  {
    title: "Vehicle Transportation",
    description:
      "We provide economical and reliable vehicle transport services with our vetted carriers and full insurance coverage.",
    href: "/services/vehicle-transportation",
    Icon: CarIcon,
  },
];

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-2.8-1.5-4.5-1.8C9.8 7.6 7 10 7 10S4.3 9.4 2.5 10.1C1.7 10.3 1 11.1 1 12v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ServicesCardsOverlay() {
  return (
    <div className="relative z-10 -mt-32 md:-mt-40 px-4 md:px-6 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map(({ title, description, href, Icon }) => (
            <div
              key={title}
              className="bg-background rounded-2xl p-6 shadow-lg border border-foreground/6 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-foreground mb-4 shrink-0">
                <Icon />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {description}
              </p>
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-accent text-foreground font-semibold text-sm px-4 py-2.5 rounded-lg w-fit hover:bg-accent/90 transition-colors no-underline"
              >
                Read More
                <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
