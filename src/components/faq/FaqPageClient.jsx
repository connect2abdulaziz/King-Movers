"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import QuoteForm from "@/components/home3/QuoteForm";
import { FAQ_BY_TAB, FAQ_TABS } from "@/components/faq/faqData";
import FaqAccordionItem from "@/components/faq/FaqAccordionItem";

export default function FaqPageClient() {
  const rootRef = useRef(null);
  const [activeTab, setActiveTab] = useState("moving");
  const [openId, setOpenId] = useState(null);

  const items = FAQ_BY_TAB[activeTab] ?? [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-animate-header",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
      gsap.fromTo(
        ".faq-animate-tabs",
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.12 }
      );
      gsap.fromTo(
        ".faq-animate-panel",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.22 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const setTab = (key) => {
    setActiveTab(key);
    setOpenId(null);
  };

  return (
    <div ref={rootRef} className="overflow-hidden">
      <section className="bg-background px-4 pb-10 pt-10 sm:px-6 md:px-10 md:pb-14">
        <div className="mx-auto max-w-3xl text-center faq-animate-header">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl md:leading-relaxed">
            Everything you need to know about our moving services
          </p>
        </div>

        <div className="faq-animate-tabs mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2 md:mt-14 md:gap-3">
          {FAQ_TABS.map(({ key, label }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`faq-tab rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 md:px-8 md:py-3.5 md:text-base lg:text-lg ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "border-2 border-primary/25 bg-surface text-foreground hover:border-primary/45 hover:bg-background"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="faq-animate-panel mx-auto mt-10 max-w-4xl md:mt-12">
          <div className="rounded-[1.75rem] border border-primary/15 bg-surface px-4 py-2 shadow-sm md:rounded-3xl md:px-8 md:py-4 lg:px-10 lg:py-6">
            {items.map((item) => (
              <FaqAccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background">
        <QuoteForm />
      </div>
    </div>
  );
}
