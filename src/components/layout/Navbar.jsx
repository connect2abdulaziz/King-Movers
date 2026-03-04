"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServices = pathname === "/services";

  return (
    <header className="w-full py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-auto">
            <Image
              src="/images/logo.webp"
              alt="Kings Moving Services logo"
              width={130}
              height={70}
              className="w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="mb-5 mr-2 hidden items-center gap-6 rounded-full bg-surface px-6 py-2 text-sm md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1 ${
              isHome ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-muted-foreground hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`rounded-full px-4 py-1 ${
              isServices ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Services
          </Link>
          <Link
            href="/#team"
            className="text-muted-foreground hover:text-foreground"
          >
            Our Team
          </Link>
          <Link
            href="/#blog"
            className="text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/#faq"
            className="text-muted-foreground hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <button className="hidden mb-5 rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors md:inline-flex">
          Contact Us
        </button>
      </div>
    </header>
  );
}

