"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";

/**
 * Bottom strip: Other Services links (WordPress-style).
 */
export default function ServiceDetailOtherServices() {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/services/")[1]?.split("/")[0] ?? null;

  return (
    <section className="w-full bg-surface border-t border-foreground/10 py-10 md:py-12" aria-label="Other services">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-xl font-bold text-foreground tracking-tight mb-6 text-center">
          Other Services
        </h2>
        <ul className="list-none p-0 m-0 flex flex-wrap justify-center gap-3">
          {services.map((service) => {
            const isActive = currentSlug === service.slug;
            return (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`inline-block rounded-lg px-4 py-2.5 text-sm font-medium no-underline transition-colors ${
                    isActive
                      ? "bg-primary text-white pointer-events-none"
                      : "bg-background text-foreground hover:bg-primary/10 hover:text-primary border border-foreground/10"
                  }`}
                >
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
