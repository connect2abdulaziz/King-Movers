export default function AboutVisionSection({ sectionRef, leftRef, rightRef }) {
  return (
    <section ref={sectionRef} className="bg-background py-20 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Vision</span> &amp;{" "}
            <span className="text-primary">Goals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={leftRef}
            className="relative p-10 rounded-2xl overflow-hidden border border-primary/20"
            style={{
              background:
                "linear-gradient(135deg, rgba(86,26,140,0.07) 0%, rgba(86,26,140,0.02) 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-36 h-36 rounded-full bg-primary/8 -translate-y-1/2 translate-x-1/2 pointer-events-none"
              aria-hidden
            />
            <span className="inline-block bg-primary text-white text-xs font-bold tracking-widest uppercase px-4 py-[6px] rounded-full mb-6">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Building a Name Customers Trust
            </h3>
            <p className="text-foreground/62 text-[15px] leading-[1.85]">
              We aim to be the most dependable relocation partner in the region —
              a company people recommend because every move we handle leaves a
              lasting positive impression. Our vision is built on integrity,
              consistency, and genuine care.
            </p>
          </div>

          <div
            ref={rightRef}
            className="relative p-10 rounded-2xl overflow-hidden border border-accent/22"
            style={{
              background:
                "linear-gradient(135deg, rgba(254,195,77,0.08) 0%, rgba(254,195,77,0.02) 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-36 h-36 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2 pointer-events-none"
              aria-hidden
            />
            <span className="inline-block bg-accent text-foreground text-xs font-bold tracking-widest uppercase px-4 py-[6px] rounded-full mb-6">
              Our Goals
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Excellence in Every Relocation
            </h3>
            <p className="text-foreground/62 text-[15px] leading-[1.85]">
              We are committed to delivering customized moving solutions that are
              efficient, transparent, and worry-free. Every move is an
              opportunity to raise our standards — and we take that
              responsibility seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
