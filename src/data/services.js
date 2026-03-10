/**
 * Shared services list for home Services section, Services page, and detail pages.
 * Image paths are from public (e.g. /images/...).
 */
export const services = [
  {
    id: 1,
    slug: "home-shifting",
    title: "Home Shifting",
    img: "/images/service-1.jpg",
    description:
      "We make residential moves smooth and stress-free. Whether you're moving across town or across the state, our team handles packing, loading, transport, and unpacking with care.",
    content: `Moving to a new home is a big step. King Moving Services takes the weight off your shoulders with full-service home shifting tailored to your needs.

**What we offer**
- Packing and unpacking with quality materials
- Careful handling of furniture and fragile items
- Loading and unloading with experienced crews
- Local and long-distance residential moves

**Why choose us**
Our crews are trained to protect your belongings and respect your schedule. We provide clear communication from quote to delivery so you can focus on settling into your new space.`,
  },
  {
    id: 2,
    slug: "office-corporate-shifting",
    title: "Office & Corporate Shifting",
    img: "/images/service.jpg",
    description:
      "Minimize downtime with planned office and corporate relocations. We move desks, IT equipment, and files so your business is back up quickly.",
    content: `Relocating your office or business doesn't have to disrupt operations. We coordinate with your team to plan moves around your schedule.

**What we offer**
- After-hours and weekend moves when needed
- Handling of desks, cabinets, and office furniture
- Coordination for IT and sensitive equipment
- Phased moves for larger offices

**Why choose us**
We understand that time is money. Our project-based approach and clear timelines help you plan with confidence and get back to business fast.`,
  },
  {
    id: 3,
    slug: "international-relocation",
    title: "International Relocation Shifting",
    img: "/images/service-4.jpg",
    description:
      "Cross-border and international moves with documentation support and door-to-door coordination.",
    content: `Moving abroad involves more than just boxes—customs, documentation, and timing all matter. We help you navigate the process from start to finish.

**What we offer**
- International packing and crating standards
- Documentation and customs guidance
- Sea and air freight options
- Destination delivery and unpacking

**Why choose us**
We work with trusted partners worldwide so your belongings are tracked and handled to the same standards you expect locally.`,
  },
  {
    id: 4,
    slug: "vehicle-transportation",
    title: "Vehicle Transportation",
    img: "/images/Truck-4.jpg",
    description:
      "Safe, insured transport for cars, motorcycles, and other vehicles locally or long distance.",
    content: `Need to move a car, motorcycle, or other vehicle? We arrange enclosed or open carrier transport with full insurance and tracking.

**What we offer**
- Car and motorcycle transport
- Open and enclosed carrier options
- Door-to-door pickup and delivery
- Full insurance coverage

**Why choose us**
We use vetted carriers and clear paperwork so your vehicle arrives on time and in the condition it left.`,
  },
  {
    id: 5,
    slug: "furniture-moving",
    title: "Furniture Moving",
    img: "/images/service-6.jpg",
    description:
      "Specialist handling for large and heavy furniture—disassembly, padding, and reassembly included.",
    content: `Sofas, beds, dressers, and specialty pieces need extra care. Our crews are equipped to move heavy and bulky furniture safely.

**What we offer**
- Disassembly and reassembly when needed
- Blankets, straps, and padding for protection
- Stair and elevator handling
- Single-item or full-home furniture moves

**Why choose us**
We treat your furniture like our own—no scratches, no shortcuts. Get a quote for one piece or a whole house.`,
  },
];

/** Intro paragraphs for image block (left image, right text). */
export const descriptionParagraphsBySlug = {
  "home-shifting": [
    "Local home shifting can often feel like a daunting task, even when the distance is short. Whether you are moving to a new apartment across town or relocating your family to a nearby neighbourhood, the process involves several key elements, including packing, transportation, and unpacking. At its core, local home shifting is about transitioning from one residence to another with minimal stress and maximum care.",
    "Our local home shifting service is designed to make this process seamless, stress-free, and tailored to your specific needs. We understand the challenges associated with moving, even locally, and we address them with professional expertise and meticulous planning. From packing and loading to transport and unpacking, our team handles every step so you can focus on settling into your new home.",
  ],
  "office-corporate-shifting": [
    "Relocating an office requires careful coordination, minimal disruption, and experienced handling of equipment and furniture. Even a short move across a business park involves significant logistics — from IT teardown to furniture reassembly. We specialise in smooth, planned corporate transitions that keep your business running.",
    "Our office moving service is built around your business schedule. We work after hours or on weekends when needed, assign a dedicated project coordinator, and provide clear timelines so your team can plan with confidence. We handle desks, cabinets, IT equipment, and sensitive files with the same care we bring to every move.",
  ],
  "international-relocation": [
    "Moving internationally is one of the most complex logistical challenges you can face. From customs documentation to freight selection, every step requires expert knowledge and trusted partners at both origin and destination.",
    "Our international relocation service handles every detail — packaging to international standards, coordinating air or sea freight, managing customs clearance, and arranging final delivery. We make global moves feel manageable so you can focus on your new chapter abroad.",
  ],
  "vehicle-transportation": [
    "Transporting a vehicle across the country or to a new city requires more than just a truck — it demands proper carriers, full insurance, and a team that understands how to handle your asset with care.",
    "We arrange open and enclosed carrier transport for cars, motorcycles, and specialty vehicles. Every move is tracked, insured, and handled by vetted carriers so your vehicle arrives on schedule and in perfect condition. Door-to-door pickup and delivery are standard.",
  ],
  "furniture-moving": [
    "Moving large or heavy furniture is physically demanding and, if done wrong, costly. Scratched floors, dented walls, and damaged pieces are common results of rushed or inexperienced handling.",
    "Our furniture moving service includes professional disassembly, proper padding, and careful reassembly at your destination. Whether it's a single sofa or a full household of furniture, we treat every piece with the same care. We use blankets, straps, and padding and are trained to navigate stairs and tight spaces.",
  ],
};

/** “Why choose us” and “how we do it better” for the more-detail section. */
export const whyChooseAndConclusionBySlug = {
  "home-shifting": {
    whyPoints: [
      "Our goal is to adapt to your specific needs, ensuring a smooth and personalized experience.",
      "We believe in managing tight schedules and providing quality service at competitive prices.",
      "Ensuring your new home feels like home as quickly as possible.",
      "Our fleet of vehicles is designed to accommodate your goods with secure transportation.",
    ],
    conclusion: "Local home shifting doesn't have to be stressful. With our professional and reliable services, you can look forward to a smooth transition to your new home. Let us handle the complexities of your move so you can focus on the excitement of starting fresh in a new place.",
  },
  "office-corporate-shifting": {
    whyPoints: [
      "We plan every office move in detail to eliminate disruptions to your business operations.",
      "Our experienced teams work around your schedule — evenings and weekends included.",
      "We ensure IT equipment and sensitive files are packed and transported with full care.",
      "Transparent pricing and clear timelines keep your relocation on track and on budget.",
    ],
    conclusion: "An office relocation is a major undertaking, but with the right partner it doesn't have to disrupt your business. Let our experienced team handle the logistics so your staff can stay focused on what matters.",
  },
  "international-relocation": {
    whyPoints: [
      "We have extensive experience managing complex cross-border and international moves.",
      "Our partners worldwide ensure consistent handling standards at every destination.",
      "We take care of documentation and customs so you never face unexpected delays.",
      "Flexible freight options let you choose the best balance of cost and delivery speed.",
    ],
    conclusion: "International moves are complex, but you don't have to navigate them alone. Our experienced team and worldwide network ensure your belongings arrive safely, on time, and without the paperwork headaches.",
  },
  "vehicle-transportation": {
    whyPoints: [
      "We use vetted and licensed carriers to ensure your vehicle is in safe hands.",
      "Full insurance coverage is included for every vehicle we transport.",
      "Real-time tracking keeps you informed throughout the entire journey.",
      "Door-to-door service means no hassle — we pick up and deliver at your location.",
    ],
    conclusion: "Your vehicle deserves the same care you'd give it yourself. With our fully insured, tracked, and professionally managed transport service, you can trust that it will arrive exactly as it left.",
  },
  "furniture-moving": {
    whyPoints: [
      "Every item is wrapped and padded to prevent scratches, dents, and damage.",
      "Our teams are equipped for heavy lifting, stairs, and tight-space navigation.",
      "We offer both single-item moves and full-home furniture relocations.",
      "Disassembly and reassembly are included so your furniture arrives ready to use.",
    ],
    conclusion: "Furniture moving doesn't have to mean scratches, stress, or reassembly nightmares. Our trained crews handle every piece with care so you can settle into your new space without the worry.",
  },
};

/** FAQs per service for the detail page (WordPress-style FAQ section). */
export const faqsBySlug = {
  "home-shifting": [
    { q: "How far in advance should I book a local move?", a: "We recommend booking at least one to two weeks in advance, especially during peak season. Same-day and next-day moves can often be arranged subject to availability." },
    { q: "Do you provide packing materials?", a: "Yes. We supply boxes, tape, bubble wrap, and other packing materials. You can add a full packing service so our crew packs and unpacks for you." },
    { q: "What is included in your home shifting quote?", a: "Your quote includes labour, vehicle, and standard packing materials. We outline any extras (e.g. specialty packing, storage) before the move so there are no surprises." },
    { q: "Can you move items into storage temporarily?", a: "Yes. We can deliver to our partner storage facilities or your chosen unit so you can move in stages." },
  ],
  "office-corporate-shifting": [
    { q: "How do you minimize downtime during an office move?", a: "We plan after-hours or weekend moves, phased moves for large offices, and work with your IT team to reconnect systems quickly. A dedicated coordinator keeps the timeline on track." },
    { q: "Do you handle IT and sensitive equipment?", a: "Yes. We coordinate with your IT team, use appropriate packing and transport, and can arrange specialist handling for servers and sensitive gear." },
    { q: "Can you do a full office move in one weekend?", a: "Depending on size, many offices are moved in a single weekend. We assess your space and inventory to propose a realistic schedule and phased options if needed." },
    { q: "Are your crews insured for corporate moves?", a: "Yes. We carry full liability and cargo insurance. Certificates can be provided for your records or building management." },
  ],
  "international-relocation": [
    { q: "How long does an international move take?", a: "Door-to-door times vary by destination and mode (air vs sea). We give you an estimated timeline at quote stage and keep you updated at each step." },
    { q: "Who handles customs and paperwork?", a: "We coordinate documentation and work with customs brokers so your shipment clears smoothly. We guide you on what you need to provide." },
    { q: "Can I ship part of my belongings by air and part by sea?", a: "Yes. We can split shipments so urgent items go by air and the rest by sea to balance cost and delivery time." },
    { q: "Are my belongings insured during international transit?", a: "Yes. We arrange full transit insurance. Coverage and options will be explained when you get your quote." },
  ],
  "vehicle-transportation": [
    { q: "How do I get a quote for vehicle transport?", a: "Provide pickup and delivery locations, vehicle type, and preferred dates. We respond with a firm quote and available carrier options (open or enclosed)." },
    { q: "What is the difference between open and enclosed transport?", a: "Open carriers are cost-effective and suitable for most cars. Enclosed transport offers extra protection from weather and road debris and is recommended for classic or high-value vehicles." },
    { q: "Is my vehicle insured during transport?", a: "Yes. Every shipment is covered by the carrier’s insurance. We can outline coverage limits and optional additional coverage when you book." },
    { q: "How long does door-to-door vehicle transport take?", a: "It depends on distance and carrier availability. We give you an estimated pickup and delivery window when you confirm the booking." },
  ],
  "furniture-moving": [
    { q: "Do you disassemble and reassemble furniture?", a: "Yes. We disassemble items as needed for safe transport and reassemble them at the destination. This is included in our furniture moving service." },
    { q: "How do you protect furniture from damage?", a: "We use moving blankets, straps, padding, and stretch wrap. Large pieces are wrapped and secured to avoid scratches, dents, or impact during transit." },
    { q: "Can you move a single item, like a sofa or piano?", a: "Yes. We do single-item moves as well as full-home furniture moves. Get a quote for the item and locations and we’ll schedule a crew." },
    { q: "What if I have narrow stairs or no elevator?", a: "Our crews are trained to handle stairs, tight turns, and elevators. We assess access at quote stage and use the right equipment and techniques to avoid damage to your items or property." },
  ],
};

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}

export function getAllSlugs() {
  return services.map((s) => ({ slug: s.slug }));
}

export function getFaqsBySlug(slug) {
  return faqsBySlug[slug] ?? [];
}

export function getDescriptionParagraphsBySlug(slug) {
  return descriptionParagraphsBySlug[slug] ?? descriptionParagraphsBySlug["home-shifting"];
}

export function getWhyChooseAndConclusionBySlug(slug) {
  return whyChooseAndConclusionBySlug[slug] ?? whyChooseAndConclusionBySlug["home-shifting"];
}
