import React from "react";

const markets = [
  {
    name: "India",
    detail: "Largest operations hub with R&D and fabrication facilities",
    flagImage: "/Flag-India.jpg",
  },
  {
    name: "Middle East",
    detail: "UAE, Saudi Arabia — key oil & gas project delivery",
    flagImage: "/Flag-Dubai.jpg",
  },
  {
    name: "Nigeria",
    detail: "West Africa upstream gas monetization projects",
    flagImage: "/Flag-Nigeria.jpg",
  },
  {
    name: "UK / Europe",
    detail: "Decarbonization and digitalization engineering",
    flagImage: "/Flag-London.jpg",
  },
];

const Markets = () => {
  return (
    <section className="bg-black-soft text-white py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-primery"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
              Global Reach
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold">
            Our Markets
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:border-primery hover:-translate-y-2 group"
            >
              {/* Flag */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-8 rounded overflow-hidden border border-white/10">
                  <img
                    src={market.flagImage}
                    alt={market.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {market.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {market.detail}
              </p>

              {/* Hover Line */}
              <div className="mt-4 h-[2px] w-0 bg-primery group-hover:w-full transition-all duration-300 mx-auto"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Markets;