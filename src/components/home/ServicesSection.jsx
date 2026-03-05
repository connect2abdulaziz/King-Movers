"use client";

const services = [
  {
    id: 1,
    title: "Home Shifting",
    img: "images/service-1.jpg",
  },
  {
    id: 2,
    title: "Office & Corporate Shifting",
    img: "images/service.jpg",
  },
  {
    id: 3,
    title: "International Relocation Shifting",
    img: "images/service-4.jpg",
  },
  {
    id: 4,
    title: "Vehicle Transportation",
    img: "images/Truck-4.JPG",
  },
  {
    id: 5,
    title: "Furniture Moving",
    img: "images/service-6.jpg",
  },
];

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const CARD_WIDTH = 380;

const ServiceCard = ({ service }) => (
  <div
    className="group shrink-0 cursor-pointer"
    style={{ width: `${CARD_WIDTH}px` }}
  >
    <div className="w-full h-[320px] rounded-2xl overflow-hidden mb-5">
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex items-center gap-3">
      <button className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center shrink-0 text-primary transition-all duration-200 group-hover:bg-primary group-hover:border-primary group-hover:text-white">
        <ArrowIcon />
      </button>
      <span className="text-lg font-semibold text-foreground tracking-tight">
        {service.title}
      </span>
    </div>
  </div>
);

export default function ShiftingServicesSlider() {
  // Duplicate for infinite loop
  const doubled = [...services, ...services];

  return (
    <section className="bg-surface pt-20 pb-0 overflow-hidden">
      {/* Header */}
      <div className="text-center px-6 pb-14 relative">
        {/* Star decoration */}
        <svg
          className="absolute top-0 left-20 w-16 h-16 text-primary/15"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M50 0 C50 0 52 46 100 50 C52 50 50 100 50 100 C50 100 48 54 0 50 C48 50 50 0 50 0Z"
            fill="currentColor"
          />
        </svg>

        <h2 className="text-5xl lg:text-6xl font-black font-serif text-foreground tracking-tight mb-5">
          Explore Our <span className="text-primary">Shifting Service</span>
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Our local moving services are quick, efficient, and hassle-free. We
          handle everything from packing to unpacking, ensuring a stress-free
          transition.
        </p>
      </div>

      {/* Slider */}
      <div
        className="w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "slide 38s linear infinite",
          }}
        >
          {doubled.map((service, i) => (
            <ServiceCard key={`${service.id}-${i}`} service={service} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}