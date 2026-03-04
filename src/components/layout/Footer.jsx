import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";

const menuLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  { label: "Residential", href: "#services" },
  { label: "Commercial", href: "#services" },
  { label: "Packing", href: "#services" },
  { label: "Long Distance", href: "#services" },
  { label: "Storage", href: "#services" },
];

const moreLinks = [
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-black/25"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        {/* Top section – columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {/* Column 1: Social + Contact */}
          <div className="col-span-2 flex flex-col gap-6 md:col-span-1">
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white/90">
              <p>123 Moving Ave</p>
              <p>Your City, State</p>
              <p>
                <a href="mailto:info@kingsmoving.com" className="hover:underline">
                  info@kingsmoving.com
                </a>
              </p>
              <p>
                <a href="tel:+12345678900" className="hover:underline">
                  (+1) 234 567 8900
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/90">
              Menu
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {menuLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: More */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/90">
              More
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {moreLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Bottom section */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-white/80">
            From packing to delivery. Our team handles your move with care so you
            can focus on what&apos;s next.
          </p>
          <div className="flex w-full flex-wrap items-center justify-end gap-4 md:w-auto">
            <Link
              href="#"
              className="text-sm text-white/80 underline-offset-2 hover:underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-sm text-white/80 underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-white/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
