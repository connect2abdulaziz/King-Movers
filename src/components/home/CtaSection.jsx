"use client";

export default function PlanningShiftingCTA() {
  return (
    <section
      className="flex min-h-screen items-center justify-center p-6"
      style={{ backgroundColor: "rgba(86, 26, 140, 0.3)" }}
    >
      <div
        className="grid w-full max-w-[1200px] grid-cols-1 items-end overflow-hidden rounded-3xl lg:grid-cols-[1fr_auto]"
        style={{ backgroundColor: "var(--background)", minHeight: "520px" }}
      >
        {/* LEFT */}
        <div className="px-16 pt-16 pb-16 pr-10">
          <h2
            className="font-serif text-4xl font-bold leading-tight text-foreground mb-7 tracking-tight sm:text-5xl lg:text-6xl"
          >
            Planning a Shifting?
            <br />
            We'll Do It Today!
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground max-w-[500px] mb-11">
            We prioritize your satisfaction with careful, precise service.
            Our team of shifting professionals is experienced, and shifting
            professionals are passionate about service.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Primary button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-colors hover:opacity-90"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
              </span>
              Request A Free Call
            </a>

            {/* Secondary button */}
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-primary px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Let's Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT — image flush to bottom */}
        <div className="self-end flex-shrink-0 mt-8 lg:mt-0">
          <img
            src="/images/hero/Kingsmovinging-service.jpg"
            alt="Delivery professional holding a package"
            className="block w-[420px] h-[480px] object-cover object-top rounded-t-3xl"
          />
        </div>
      </div>
    </section>
  );
}