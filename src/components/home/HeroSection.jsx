import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pb-15">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        {/* LEFT – Typography and CTA */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Moving & Relocation Experts
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.1] tracking-wide uppercase sm:text-5xl lg:text-6xl">
            A Safe Move
            <br />
            For Your
            <br />
            Next Chapter
          </h1>

          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Stress-free, professional moving services designed to protect what
            matters most - your belongings, your time, and your peace of mind.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90">
              Get a free quote
            </button>
            <button className="rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT – Image collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            {/* Top-left card */}
            <div className="relative">
              <div className="h-40 overflow-hidden rounded-3xl bg-surface shadow-lg shadow-gray-200/80 md:h-56">
                <Image
                  src="/images/hero/moving-boxes.jpg"
                  alt="Stacked moving boxes in a new home"
                  width={480}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 rounded-full bg-white p-2 shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                  ↗
                </div>
              </div>
            </div>

            {/* Top-right card */}
            <div className="mt-8">
              <div className="h-40 overflow-hidden rounded-3xl bg-primary/10 shadow-lg shadow-gray-200/80 md:h-56">
                <Image
                  src="/images/hero/1-2.png"
                  alt="Smiling mover loading boxes"
                  width={480}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom wide card */}
            <div className="relative col-span-2 mt-4">
              <div className="h-44 overflow-hidden rounded-3xl bg-accent/10 shadow-lg shadow-gray-200/80 md:h-56">
                <Image
                  src="/images/hero/Kingsmovinging-service.jpg"
                  alt="Couple sitting among boxes after a successful move"
                  width={800}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium shadow-md">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-muted-foreground">
                  4.9/5 from 1,200+ moves
                </span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -top-4 left-10 h-6 w-6 rounded-full bg-primary/20 blur-[1px]" />
          <div className="pointer-events-none absolute top-24 -right-6 h-8 w-8 rounded-full bg-accent/20 blur-[1px]" />
        </div>
      </div>
    </section>
  );
}
