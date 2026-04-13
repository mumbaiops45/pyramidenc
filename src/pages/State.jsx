import React from "react";

const clients = [
  { name: "Micro LNG", logo: "/Micro-LNG-Logo-Vertical.png" },
  { name: "Optimax", logo: "/optimax-logo.png" },
  { name: "Sphinx", logo: "/Sphinx-White-Logo.png" },
  { name: "Hydroblue", logo: "/Hydroblue-Logo-Vertical.png" },
];

const scrollingLogos = [...clients, ...clients, ...clients, ...clients];

const Clients = () => {
  return (
    <section className="bg-white text-gray-900 py-12 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          {/* Top label – pill badge style */}
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Trusted By Industry Leaders
          </span>

          {/* Title with gradient on key word */}
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,white,transparent_0%,white_8%,white_92%,transparent_100%,white)]">
          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {scrollingLogos.map((client, idx) => (
              <div
                key={idx}
                className="w-28 h-28 lg:w-36 lg:h-36 flex-shrink-0 flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white/10 transition-all duration-300 hover:border-primery hover:-translate-y-2 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;