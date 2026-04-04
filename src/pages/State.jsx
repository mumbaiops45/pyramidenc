import React from "react";

const clients = [
  { name: "Micro LNG", logo: "/Micro-LNG-Logo-Vertical.png" },
  { name: "Optimax", logo: "/optimax-logo.png" },
  { name: "Sphinx", logo: "/Sphinx-White-Logo.png" },
  { name: "Hydroblue", logo: "/Hydroblue-Logo-Vertical.png" },
];

// Duplicate logos to create seamless loop
const scrollingLogos = [...clients, ...clients, ...clients];

const State = () => {
  return (
    <div
      className="mx-3 my-8 rounded-2xl p-6 overflow-hidden"
      style={{
        background: "var(--black-soft)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="text-center mb-6">
        <span className="text-[11px] font-semibold tracking-[3px] uppercase text-primery">
          Trusted By Industry Leaders
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-white mt-2">Our Clients</h3>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 md:gap-12">
          {scrollingLogos.map((client, idx) => (
            <div
              key={idx}
              className="w-28 h-28 lg:w-32 lg:h-32 flex-shrink-0 flex items-center justify-center p-3 rounded-xl border-2 border-primery bg-black-soft/50"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src = "https://placehold.co/100x100?text=Logo";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Add this CSS to your global styles (index.css) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default State;