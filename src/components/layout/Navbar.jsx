"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/#process" },
];

const PHONE_NUMBER = "(555) 555-1234";
const PHONE_HREF = "tel:+12345678900";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 shrink-0"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shrink-0 bg-background border-b border-foreground/8">
      <nav
        className="min-h-[88px] flex items-center"
        aria-label="Main navigation"
      >
        <div className="w-full mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.webp"
              alt="King Moving Services"
              width={150}
              height={78}
              className="h-12 w-auto object-contain md:h-14"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-foreground/75 text-base font-normal no-underline hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={PHONE_HREF}
            className="flex items-center gap-2.5 border border-accent/60 rounded-full px-5 py-2.5 text-foreground text-base font-medium no-underline hover:border-accent hover:bg-accent/5 transition-all"
          >
            <PhoneIcon />
            {PHONE_NUMBER}
          </a>
        </div>
      </nav>
    </header>
  );
}
