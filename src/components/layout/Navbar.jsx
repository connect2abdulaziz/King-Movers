import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative  w-auto">
            <Image
              src="/images/logo.webp"
              alt="Kings Moving Services logo"
              width={130}
              height={70}
              className=" w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden mb-5 mr-2 items-center gap-6 rounded-full bg-surface px-6 py-2 text-sm md:flex">
          <Link
            href="#"
            className="rounded-full bg-primary px-4 py-1 text-white"
          >
            Home
          </Link>
          <a href="#about" className="text-muted-foreground hover:text-foreground">
            About Us
          </a>
          <Link href="/services" className="text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <a href="#team" className="text-muted-foreground hover:text-foreground">
            Our Team
          </a>
          <a href="#blog" className="text-muted-foreground hover:text-foreground">
            Blog
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground">
            FAQ
          </a>
        </nav>

        {/* CTA */}
        <button className="hidden mb-5 rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors md:inline-flex">
          Contact Us
        </button>
      </div>
    </header>
  );
}

