import Link from "next/link";

const LOCATION_CARDS = [
  {
    id: "scottsdale",
    tag: "Scottsdale Locations",
    title: "Most Requested Service Areas in Scottsdale",
    body: "From apartments and villas to office relocations, we serve key Scottsdale neighborhoods with reliable packing, moving, and setup support.",
    icon: "document",
  },
  {
    id: "arizona",
    tag: "Arizona Locations",
    title: "Most Requested Service Areas Across Arizona",
    body: "Our Arizona team handles residential and commercial moves with secure transport, trained crews, and on-time delivery.",
    icon: "city",
  },
];

export default function AboutServicesGridSection({
  sectionRef,
  titleRef,
  cardRefs,
}) {
  return (
    <section ref={sectionRef} className="w-full bg-background py-16 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <article
          ref={titleRef}
          className="rounded-2xl border-2 border-primary bg-surface px-6 py-6 md:px-7 md:py-7"
        >
          <h2 className="text-3xl md:text-4xl font-black leading-[1.1] text-foreground">
            Moving Experts in{" "}
            <span className="text-accent">Scottsdale, Arizona</span> for trusted{" "}
            <span className="text-accent">Home and Office Relocation</span>.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-foreground/70 max-w-[44ch]">
            King Moving Services delivers professional packing, secure transport,
            and smooth relocation support across Scottsdale and nearby Arizona
            cities. We make each move safe, organized, and stress free.
          </p>
        </article>

        {LOCATION_CARDS.map((card, i) => (
          <article
            key={card.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="relative rounded-2xl border border-primary/20 bg-surface px-5 py-5 md:px-6 md:py-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-8 h-8 rounded-md border border-primary/50 flex items-center justify-center text-primary">
                {card.icon === "document" ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
                    <path d="M14 2v5h5" />
                    <path d="M9 13h6M9 17h6M9 9h2" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 20h20" />
                    <path d="M4 20V9h4v11" />
                    <path d="M10 20V5h4v15" />
                    <path d="M16 20v-8h4v8" />
                    <path d="M2 12h2M6 6h2M14 9h2M18 15h2" />
                  </svg>
                )}
              </div>
              <p className="text-2xl md:text-3xl leading-none font-black text-accent">
                {card.tag}
              </p>
            </div>

            <h3 className="mt-6 text-2xl md:text-3xl leading-[1.15] font-black text-foreground max-w-[18ch]">
              {card.title}
            </h3>

            <p className="mt-3 text-[15px] leading-[1.65] text-foreground/70 max-w-[38ch]">
              {card.body}
            </p>

            <div className="mt-3 h-px bg-primary/25" />

            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-3 text-foreground font-extrabold text-lg md:text-xl"
            >
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              Check All Services
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
