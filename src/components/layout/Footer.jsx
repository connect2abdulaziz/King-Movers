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
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    bgColor: "bg-[#E1306C]",
  },
  {
    icon: Twitter,
    href: "#",
    label: "X",
    bgColor: "bg-[#1DA1F2]",
  },
  {
    icon: Youtube,
    href: "#",
    label: "YouTube",
    bgColor: "bg-[#FF0000]",
  },
];

export default function Footer() {
  return (
    <footer className="relative text-white bg-[#140b22]">
      {/* Purple night gradient + subtle patterns */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 0% 0%, rgba(86,26,140,0.6) 0%, transparent 55%), radial-gradient(ellipse 90% 90% at 100% 100%, rgba(86,26,140,0.4) 0%, transparent 60%), linear-gradient(180deg, #1b102b 0%, #140b22 55%, #0b0715 100%)",
        }}
      />
      {/* Dot/grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px, 56px 56px",
          mixBlendMode: "soft-light",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-12">
        {/* Top section – columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {/* Column 1: Social + Contact */}
          <div className="col-span-2 flex flex-col gap-6 md:col-span-1">
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label, bgColor }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:border-white ${bgColor}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white/90">
              <p>Kings Moving Services</p>
              <p>6424 E. Greenway Pkwy, Suite 100</p>
              <p>Scottsdale, AZ 85254</p>
              <p>"Where You Are Treated Like Royalty"</p>
              <p>
                <a href="mailto:info@kingsmovingservices.com" className="hover:underline">
                  info@kingsmovingservices.com
                </a>
              </p>
              <p>
                <a href="tel:+18889981004" className="hover:underline">
                  Office: 888-998-1004 Ext. 101
                </a>
              </p>
              <p>
                <a href="tel:+14804471200" className="hover:underline">
                  Direct: 480-447-1200
                </a>
              </p>
              {/* Trust / quality badges */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-[11px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Licensed &amp; Insured
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-3 py-1 text-[11px] font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  7+ Years Experience
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 text-[11px] font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  10K+ Moves Completed
                </span>
              </div>
              <p className="text-xs text-white/75">
                US DOT: 3226717 &nbsp;&nbsp; MC: 1010868
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
