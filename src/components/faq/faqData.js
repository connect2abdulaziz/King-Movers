/** @typedef {{ id: string; question: string; answer: string }} FaqItem */

/** @type {Record<string, FaqItem[]>} */
export const FAQ_BY_TAB = {
  moving: [
    {
      id: "moving-0",
      question: "Can I have packing material delivered to me in advance?",
      answer:
        "Yes. Once your move is booked with King Movers, we can deliver boxes, wrap, and other packing supplies ahead of your crew so you can pack personal items at your own pace—without the last-minute scramble.",
    },
    {
      id: "moving-1",
      question: "Can you dismantle beds and cupboards?",
      answer:
        "Absolutely. Our crew carefully disassembles large pieces—bed frames, wardrobes, shelving units—and reassembles them in your new home so everything fits through doorways safely and is set up where you want it.",
    },
    {
      id: "moving-2",
      question: "Do you put up shelves and curtains?",
      answer:
        "We’re happy to help with basic reinstall tasks many customers need, including shelves, curtain rods, TV mounting, and reconnecting simple appliances. Tell us during booking what you need so we can plan time and tools accordingly.",
    },
    {
      id: "moving-3",
      question: "What happens if my items are damaged?",
      answer:
        "We treat every item with care and use proven loading and protection methods. If something rare does go wrong, we work with you under our stated valuation and claims process—repair or replacement depends on coverage and the agreement for your move.",
    },
    {
      id: "moving-4",
      question: "What time do you start a move?",
      answer:
        "We know timing matters. Crews typically arrive early in the day so we can complete loading and travel on schedule—your coordinator will confirm your exact arrival window before move day.",
    },
    {
      id: "moving-5",
      question: "Do you have covered trucks?",
      answer:
        "Yes. Our fleet uses enclosed trucks to shield your belongings from sun, dust, and weather. Equipment and tie-downs are used so items stay secure from pickup through delivery.",
    },
  ],
  storage: [
    {
      id: "storage-0",
      question: "How safe is your storage?",
      answer:
        "King Movers storage is built around controlled access, monitoring, and disciplined inventory practices. Your goods stay in our care until you’re ready for delivery or pickup—we prioritize security and accountability at every step.",
    },
    {
      id: "storage-1",
      question: "Do you offer climate-controlled storage?",
      answer:
        "When you need extra protection for temperature-sensitive items—electronics, fine wood, artwork—ask about climate-controlled options availability in your area. We’ll recommend the right fit based on what you’re storing and for how long.",
    },
    {
      id: "storage-2",
      question: "Can I access my items while they’re in storage?",
      answer:
        "Access policies depend on facility type and your service plan. Your coordinator will explain visit windows, notice periods, and any fees so you know exactly how to retrieve or add items without surprises.",
    },
    {
      id: "storage-3",
      question: "How flexible are storage terms?",
      answer:
        "Whether you need storage for a few weeks between closings or several months during a remodel, we offer flexible terms. Rates and minimums are spelled out up front so you can extend or transition to delivery when you’re ready.",
    },
    {
      id: "storage-4",
      question: "What security measures are in place?",
      answer:
        "Expect controlled entry, surveillance-minded operations, and careful handling protocols. We combine physical safeguards with clear documentation so you always know what’s stored and where it stands in your plan.",
    },
  ],
  international: [
    {
      id: "international-0",
      question: "What documentation will I need for an international move?",
      answer:
        "Requirements vary by destination—passports, visas, residence paperwork, and itemized inventories are common. We guide you through the checklist early so customs and carriers get clean, complete paperwork and your shipment isn’t delayed over missing forms.",
    },
    {
      id: "international-1",
      question: "How do you handle customs clearance?",
      answer:
        "Our international team coordinates with partners and brokers where needed, prepares declarations, and keeps you informed at key milestones. The goal is predictable clearance without avoidable holds or surprise fees.",
    },
    {
      id: "international-2",
      question: "What packing standards apply overseas?",
      answer:
        "International moves often demand sturdier crating, moisture barriers, and detailed labeling. We pack to transit and destination requirements so your shipment is protected for long legs by sea or air—not just a short local truck ride.",
    },
    {
      id: "international-3",
      question: "How long does international delivery take?",
      answer:
        "Timelines depend on mode (air vs. ocean), distance, customs, and seasonal volume. After survey, we provide an estimated range and update you as the journey progresses so you can plan arrival and setup.",
    },
    {
      id: "international-4",
      question: "Can I track my shipment?",
      answer:
        "Yes. You’ll receive updates at major milestones—booking, dispatch, arrival in port or hub, customs events, and final delivery. Ask your coordinator about the tracking options available on your specific lane and carrier.",
    },
  ],
};

export const FAQ_TABS = [
  { key: "moving", label: "Moving" },
  { key: "storage", label: "Storage" },
  { key: "international", label: "International Moving" },
];
