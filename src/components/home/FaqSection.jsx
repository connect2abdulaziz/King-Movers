"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking at least 2–4 weeks ahead for local moves and 4–6 weeks for long-distance moves. Last-minute moves can often be accommodated depending on availability.",
  },
  {
    question: "Do you provide packing materials and packing services?",
    answer:
      "Yes. We offer full-service packing with high-quality boxes, tape, and wrapping materials. You can also purchase packing supplies only if you prefer to pack yourself.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "We are fully licensed and insured. Your items are covered during loading, transit, and unloading. We can discuss additional valuation coverage for high-value items.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide local and long-distance moving services. Contact us with your origin and destination for an accurate quote and to confirm we serve your area.",
  },
  {
    question: "How is the final price determined?",
    answer:
      "Quotes are based on the size of your move, distance, and any extra services (packing, storage, specialty items). We provide transparent pricing with no hidden fees.",
  },
  {
    question: "Do you move on weekends or after hours?",
    answer:
      "Yes. We offer flexible scheduling including weekends and evenings to fit your timeline. Let us know your preferred date and time when requesting a quote.",
  },
  {
    question: "Can you help with disassembly and reassembly of furniture?",
    answer:
      "Absolutely. Our crew can disassemble beds, dressers, and other furniture before the move and reassemble everything at your new location at no extra charge for standard items.",
  },
  {
    question: "What if I need to store my items temporarily?",
    answer:
      "We offer short- and long-term storage options. Your items can be stored in our secure facility until you're ready for delivery to your new address.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can request a free quote online, by phone, or in person. We'll ask about the size of your move, distance, and any add-ons to provide an accurate estimate.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, and other agreed payment methods. A deposit may be required to secure your booking; the balance is typically due on moving day.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header – same layout as Services */}
        <div className="mb-16 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="mb-6 inline-block rounded-full bg-surface px-4 py-1 text-sm text-primary">
              FAQ
            </span>
            <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>
          <div className="max-w-md">
            <p className="leading-relaxed text-muted-foreground">
              Quick answers to common questions about our moving services.
            </p>
          </div>
        </div>

        {/* Two columns: left 5, right 5 */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-3">
            {faqs.slice(0, 5).map((faq, i) => {
              const index = i;
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="space-y-3">
            {faqs.slice(5, 10).map((faq, i) => {
              const index = i + 5;
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/50"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
