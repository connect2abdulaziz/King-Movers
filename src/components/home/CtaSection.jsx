import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-34">
      {/* Framing rectangle behind content */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[450px] w-[50%] -translate-x-1/2 -translate-y-1/2  border-[15px] border-accent md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        {/* Image side */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-surface shadow-xl shadow-black/5">
            <Image
              src="/images/hero/Kingsmovinging-service.jpg"
              alt="Happy couple relaxing after a successful move"
              width={640}
              height={420}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="space-y-6 bg-white py-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Ready For Your Next Move?
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
            Let us handle the heavy lifting.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether you&apos;re moving across town or across the state, our team
            makes your relocation smooth, organized, and stress-free from
            packing to final placement.
          </p>

          <button className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90">
            Get your free moving quote
          </button>
        </div>
      </div>
    </section>
  );
}

