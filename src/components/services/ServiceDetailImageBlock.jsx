/**
 * Service detail: image on the left, lots of detail text on the right (WordPress-style).
 */
export default function ServiceDetailImageBlock({ service, paragraphs }) {
  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left: image */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl overflow-hidden border border-foreground/10 shadow-lg aspect-4/3 bg-surface">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: detail content */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-6">
              What We Offer for {service.title}
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
