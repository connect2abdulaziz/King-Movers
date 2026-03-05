"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    stars: 5,
    name: "Alex H.",
    title: "Out-of-State Moving Service",
    text: "Kings moving services was one of the best decisions ever! I received 6 quotes to help with my interstate move. Kings was BY FAR the cheapest ($3900) compared to other quotes of $7000-$9000. David was extremely communicative and helpful throughout the entire process. It was stress-free from start to finish.",
  },
  {
    id: 2,
    stars: 5,
    name: "Jeffrey K.",
    title: "Out-of-State Moving Service",
    text: "Kings took great care to ensure our family and our things were well taken care of during a difficult time. They were easy to work with, communicated well, and were on or ahead of schedule.",
  },
  {
    id: 3,
    stars: 5,
    name: "Eve M.",
    title: "Out-of-State Moving Service",
    text: "Kings made sure that I understood every part of the moving process. On moving day, Angelo and Gilbert worked quickly and carefully to make sure everything was wrapped and loaded on the truck in no time. Kings has made a potentially stressful move easy and stress free.",
  },
  {
    id: 4,
    stars: 5,
    name: "Deborah C.",
    title: "Out-of-State Moving Service",
    text: "Always returned calls with answers if they needed to. I would definitely hire them again! Very professional and not a broker!!!",
  },
  {
    id: 5,
    stars: 5,
    name: "Mirjam D.",
    title: "Local Move",
    text: "Great moving company! They came on time and did a fantastic job. I moved 2 hours away from my location and they showed up just shortly after I had gotten there. Packing was done very well and felt nothing would get broken or anything and nothing did. Appreciate their job well done!",
  },
  {
    id: 6,
    stars: 5,
    name: "Kelcie K.",
    title: "Storage & Move",
    text: "Let me just say this company is absolutely amazing. They were quick, efficient and super careful with my belongings. There was zero damaged items. They even assisted me in moving stuff that I am storing in the garage so I would be able to park my car in there. David assisted me from beginning to end with setting everything up to assisting me with changing the card after I realized I gave them the wrong card. I had a 10x20 storage unit that was 85% full and it only took them three hours to load up, move it to my house and help me arrange everything! I would highly recommend them!",
  },
  {
    id: 7,
    stars: 5,
    name: "Alexis W.",
    title: "Moving Service",
    text: "Kings Moving Services proved to be a great experience all around. The movers were friendly, gentle with my stuff and moved at a fast pace. They were professional and experienced. I spoke with the sales rep in the office and he was also friendly and very helpful. I called on short notice and he made sure that I got moved on time. I would highly recommend this company for your move.",
  },
  {
    id: 8,
    stars: 5,
    name: "Charles S.",
    title: "Repeat Customer",
    text: "I have used them for the second time and still I am completely satisfied with their service. Both times they were relatively courteous, hardworking and focused. I must say, these guys are professionals. Efficient hardworking, funny and very caring. I plan to use them in the future if I need to.",
  },
  {
    id: 9,
    stars: 5,
    name: "Kassandra S.",
    title: "Out-of-State Moving Service",
    text: "They do truly treat you like royalty. I was shell shocked at how kind they were, how thorough they packed things, how personable they were. We had zero issues with the packing situation too.",
  },
  {
    id: 10,
    stars: 5,
    name: "Wanda P.",
    title: "Out-of-State Moving Service",
    text: "They truly work hard to get your stuff to your new home without any damage. Their employees are very helpful, courteous and hardworking. We were very happy with how they handled our move.",
  },
  {
    id: 11,
    stars: 5,
    name: "Barbara R.",
    title: "Out-of-State Moving Service",
    text: "David is extremely nice to work with and is very helpful. I would highly recommend this company.",
  },
  {
    id: 12,
    stars: 5,
    name: "Michael R.",
    title: "Out-of-State Moving Service",
    text: "David is the best!! He coordinates everything and followed it all up! We neglected to put my compressor on the truck and David drove to my house, got it and put it in the moving van!! Highly recommend. Mike R.",
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="#E8833A"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div
    style={{
      backgroundColor: "var(--background)",
      borderRadius: "16px",
      padding: "32px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    }}
  >
    <StarRating count={testimonial.stars} />
    <p
      style={{
        fontSize: "20px",
        lineHeight: "1.5",
        color: "var(--foreground)",
        fontWeight: "400",
        marginBottom: "24px",
      }}
    >
      {testimonial.text}
    </p>
    <p style={{ fontSize: "15px", color: "var(--foreground)" }}>
      <strong style={{ fontWeight: "700" }}>{testimonial.name}</strong>
      <span style={{ color: "var(--muted-foreground)", marginLeft: "6px" }}>
        – {testimonial.title}
      </span>
    </p>
  </div>
);

const avatars = [
  { bg: "#7B6A5A", initials: "A" },
  { bg: "#4A6741", initials: "B" },
  { bg: "#C4936A", initials: "C" },
  { bg: "#5A4A3A", initials: "D" },
  { bg: "#8A7060", initials: "E" },
];

/** Add your client photo paths here (portrait/phone images). */
const clientImages = [
  "/images/Happy-Clients-3-e1585205239651-768x1024.jpg",
  "/images/Danny-4-497x1024.jpg",
 
];

// Actual avatar image URLs (using placeholder colored circles as fallback)
const avatarImages = [
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=15",
  "https://i.pravatar.cc/80?img=28",
];

const SLIDE_INTERVAL_MS = 4000;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clientImages.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="font-sans"
      style={{
        backgroundColor: "var(--surface)",
        minHeight: "100vh",
        padding: "80px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 420px 1fr",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* MIDDLE COLUMN — STICKY */}
        <div
          style={{
            position: "sticky",
            top: "100px",
            textAlign: "center",
            padding: "20px 10px",
          }}
        >
          {/* Heading */}
          <h2
            className="font-serif"
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "var(--foreground)",
              lineHeight: "1.1",
              marginBottom: "4px",
            }}
          >
            Our Client's
          </h2>
          <h2
            className="font-serif"
            style={{
              fontSize: "52px",
              fontWeight: "800",
              color: "var(--primary)",
              lineHeight: "1.1",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            Testimonials
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted-foreground)",
              lineHeight: "1.6",
              maxWidth: "320px",
              margin: "0 auto 24px",
            }}
          >
            Real feedback from our clients that reflects our quality,
            reliability, and commitment to excellence.
          </p>

          {/* Client photos — auto-playing slideshow */}
          <div
            className="relative rounded-xl overflow-hidden bg-muted-foreground/10"
            style={{
              width: "100%",
              maxWidth: "320px",
              margin: "0 auto",
              height: "320px",
            }}
          >
            {clientImages.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: activeIndex === i ? 1 : 0,
                  pointerEvents: activeIndex === i ? "auto" : "none",
                }}
              >
                <img
                  src={src}
                  alt={`Client ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {testimonials.slice(6, 12).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}