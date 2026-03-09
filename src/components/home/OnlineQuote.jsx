"use client";

import Image from "next/image";

export default function OnlineQuote() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[640px] flex">
      {/* LEFT: Dark navy with world map bg */}
      <div
        className="relative w-full md:w-1/2 bg-[#0d1b2a] flex flex-col justify-start pt-14 px-10 md:px-16 pb-14 md:pb-16"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "luminosity",
        }}
      >
        {/* Overlay to darken map */}
        <div className="absolute inset-0 bg-[#0d1b2a] opacity-20 pointer-events-none" />

        {/* Text */}
        <div className="relative z-10 mb-10">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide">Online Quote</p>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white leading-snug">
            We Create Opportunity <br /> to Reach Transport
          </h2>
        </div>

        {/* White form card — overlaps both halves */}
        <div className="relative z-50 bg-background shadow-2xl p-8 w-full md:w-[130%] rounded-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name"
              className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="text"
              placeholder="Weight Kg"
              className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="text"
              placeholder="Distance Km"
              className="bg-surface text-foreground placeholder-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>

          {/* Full width select */}
          <select className="w-full bg-surface text-muted-foreground text-sm px-4 py-4 outline-none focus:ring-2 focus:ring-primary transition mb-6 appearance-none cursor-pointer">
            <option value="" disabled selected>Select Service</option>
            <option>Home Shifting</option>
            <option>Office & Corporate</option>
            <option>International Relocation</option>
            <option>Vehicle Transportation</option>
          </select>

          {/* CTA Button */}
          <button className="bg-primary hover:bg-primary/90 text-white font-bold text-sm px-10 py-4 transition-colors duration-200 tracking-wide">
            Free Quote!
          </button>
        </div>
      </div>

      {/* RIGHT: Truck image */}
      <div className="hidden md:block relative w-1/2 min-h-[600px] md:min-h-[640px]">
        <Image
          src="/images/Truck-4.jpg"
          alt="Moving truck"
          fill
          className="object-cover"
          sizes="50vw"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-200">
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
