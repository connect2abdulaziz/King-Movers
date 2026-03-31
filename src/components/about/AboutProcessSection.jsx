import React from "react";

const steps = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Book Our Moving Service.",
    highlight: "Book our reliable, insured moving service",
    rest: " today for a ",
    highlight2: "stress-free move",
    rest2: " that ensures your belongings are in the safest hands while moving.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12v4M10 14h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Professionally Safely Packed.",
    highlight: "Professionally and safely packed",
    rest: " to provide the ",
    highlight2: "ultimate protection",
    rest2: " for your valuable items during the move.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Carefully Transported.",
    highlight: "Carefully transported",
    rest: " to guarantee the ",
    highlight2: "safe and secure delivery",
    rest2: " of your belongings, backed by our ",
    highlight3: "insured moving service",
    rest3: ".",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Happily Deliver to Door.",
    highlight: "Happily delivered to your door",
    rest: " with the utmost care and precision, ensuring a ",
    highlight2: "seamless moving experience",
    rest2: " from start to finish.",
  },
];

const ProcessCard = ({ step }) => {
  return (
    <div className="relative bg-surface rounded-2xl pt-16 pb-8 px-6 flex-1 min-w-[220px]">
      {/* Icon box */}
      <div className="absolute top-0 left-6 w-16 h-16 bg-[#3a3a3a] rounded-2xl flex items-center justify-center shadow-lg">
        {step.icon}
      </div>

      {/* Step number */}
      <div className="absolute top-4 right-6 text-5xl font-black text-[#d1d1d1] leading-none select-none">
        {step.id}
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-black text-foreground leading-tight mb-3 mt-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-[13.5px] text-foreground/75 leading-relaxed">
        {"highlight" in step && (
          <>
            <strong>{step.highlight}</strong>
            {step.rest}
            <strong>{step.highlight2}</strong>
            {step.rest2}
            {step.highlight3 && (
              <>
                <strong>{step.highlight3}</strong>
                {step.rest3}
              </>
            )}
          </>
        )}
      </p>
    </div>
  );
};

export default function AboutProcessSection() {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-12 lg:px-20">
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-3">
          Our{" "}
          <span className="text-accent">Process</span>{" "}
          is simple &amp; safe to move your precious things safely anywhere in USA.
        </h2>

        {/* Subtext */}
        <p className="text-[14px] text-foreground/70 max-w-5xl mb-10 leading-relaxed">
          Our process is straightforward and secure, designed to move your precious belongings safely and efficiently anywhere in the USA. We prioritize the safety of your items, ensuring they reach their destination in perfect condition.
        </p>

        {/* Cards grid */}
        <div className="flex flex-col sm:flex-row gap-5 mt-10">
          {steps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}