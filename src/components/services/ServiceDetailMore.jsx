/**
 * More detail about the service: how we do it better, why choose us, conclusion (WordPress-style).
 */
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ServiceDetailMore({ service, whyPoints, conclusion }) {
  return (
    <section className="w-full bg-surface/50 border-y border-foreground/10 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
          Why Choose Us for {service.title}?
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          Choosing the right moving service is critical to the success of your relocation. With our team, you benefit from years of experience, a customer-focused approach, and a commitment to excellence. We prioritise the safety of your belongings and your peace of mind.
        </p>
        <ul className="space-y-4 mb-10">
          {whyPoints.map((point, i) => (
            <li key={i} className="flex gap-3">
              <CheckIcon />
              <span className="text-muted-foreground text-base leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        <h3 className="font-serif text-xl font-bold text-foreground tracking-tight mb-3">
          How We Make It Better
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          {conclusion}
        </p>
      </div>
    </section>
  );
}
