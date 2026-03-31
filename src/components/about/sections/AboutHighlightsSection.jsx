const HIGHLIGHTS = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "We respect your schedule. Every move is planned and executed with precision so your timeline is never compromised.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparent Pricing",
    desc: "No surprises, no hidden fees. Our upfront quotes reflect exactly what you'll pay from start to finish.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Customer Satisfaction",
    desc: "Your peace of mind matters to us. We go the extra mile to deliver a smooth, stress-free relocation experience.",
  },
];

export default function AboutHighlightsSection({ sectionRef, cardRefs }) {
  return (
    <section ref={sectionRef} className="bg-background py-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group flex flex-col gap-5 p-8 rounded-2xl border border-foreground/8 bg-surface hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                {h.icon}
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-[15px] text-foreground/60 leading-relaxed">{h.desc}</p>
              </div>
              <div className="mt-auto h-[3px] w-0 bg-accent rounded-full transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
