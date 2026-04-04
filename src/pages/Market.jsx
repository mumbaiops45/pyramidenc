import React, { useState } from "react";

const markets = [
  {
    name: "India",
    detail: "Largest operations hub with R&D and fabrication facilities",
    flagImage: "/Flag-India.jpg",
    alt: "India flag",
  },
  {
    name: "Middle East",
    detail: "UAE, Saudi Arabia — key oil & gas project delivery",
    flagImage: "/Flag-Dubai.jpg",
    alt: "UAE flag",
  },
  {
    name: "Nigeria",
    detail: "West Africa upstream gas monetization projects",
    flagImage: "/Flag-Nigeria.jpg",
    alt: "Nigeria flag",
  },
  {
    name: "UK / Europe",
    detail: "Decarbonization and digitalization engineering",
    flagImage: "/Flag-London.jpg",
    alt: "UK flag",
  },
];

const MarketCard = ({ name, detail, flagImage, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-xl p-5 cursor-pointer transition-all duration-300"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #ffd700, #ffb347)"
          : "linear-gradient(135deg, #fff3e0, #ffe0b5)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 25px -12px rgba(0,0,0,0.2)"
          : "0 4px 6px -1px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-center mb-4">
        <div className="w-11 h-7 rounded overflow-hidden shadow-md">
          <img
            src={flagImage}
            alt={alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://placehold.co/44x28?text=Flag";
            }}
          />
        </div>
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-1.5 text-center">
        {name}
      </h3>
      <p className="text-xs leading-relaxed text-gray-700 text-center">
        {detail}
      </p>
    </div>
  );
};

const Markets = () => {
  return (
    <section className="px-4 sm:px-6 py-4 max-w-7xl mx-auto">
      {/* Centered section header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-6 h-0.5 rounded bg-primery" />
          <span className="text-[11px] font-semibold tracking-[3px] uppercase text-primery">
            Global Reach
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Our Markets</h2>
      </div>

      {/* Centered grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {markets.map((market, idx) => (
          <MarketCard key={idx} {...market} />
        ))}
      </div>
    </section>
  );
};

export default Markets;