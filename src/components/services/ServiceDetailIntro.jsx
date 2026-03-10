/**
 * Service detail intro: big heading in the middle with intro text beneath (WordPress-style).
 */
export default function ServiceDetailIntro({ service }) {
  return (
    <header className="w-full bg-background border-b border-foreground/10">
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-20 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
          {service.title}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {service.description}
        </p>
      </div>
    </header>
  );
}
