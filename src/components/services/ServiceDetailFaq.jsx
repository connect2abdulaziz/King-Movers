"use client";

import { useState } from "react";

export default function ServiceDetailFaq({ serviceTitle, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-8">
          Frequently Asked Questions About {serviceTitle}
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-foreground/10 rounded-xl bg-surface/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-foreground hover:bg-foreground/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`shrink-0 text-primary text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
