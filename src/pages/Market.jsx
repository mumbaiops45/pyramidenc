// import React from "react";

// const markets = [
//   {
//     name: "India",
//     tag: "Operations Hub",
//     detail: "Largest operations hub with R&D and fabrication facilities serving global project delivery.",
//     flagImage: "/Flag-India.jpg",
//   },
//   {
//     name: "Middle East",
//     tag: "Oil & Gas",
//     detail: "UAE, Saudi Arabia — key oil & gas project delivery across upstream and downstream sectors.",
//     flagImage: "/Flag-Dubai.jpg",
//   },
//   {
//     name: "Nigeria",
//     tag: "Gas Monetization",
//     detail: "West Africa upstream gas monetization projects supporting regional energy development.",
//     flagImage: "/Flag-Nigeria.jpg",
//   },
//   {
//     name: "UK / Europe",
//     tag: "Decarbonization",
//     detail: "Decarbonization and digitalization engineering driving the energy transition forward.",
//     flagImage: "/Flag-London.jpg",
//   },
//   {
//     name: "Houston, USA",
//     tag: "Energy Capital",
//     detail: "North America's energy capital — LNG, petrochemical and offshore engineering hub.",
//     flagImage: "/Flag-Houston.jpg",
//   },
// ];



// const Markets = () => {
//   return (
//     <section
//       className="py-20 lg:py-20 px-6 relative overflow-hidden"
//       style={{
//         background: "linear-gradient(160deg, #f8fafc 0%, #f1f5f9 40%, #e9eef5 100%)",
//       }}
//     >
//       {/* Ambient glow top-right */}
//       <div
//         className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
//       />
//       {/* Ambient glow bottom-left */}
//       <div
//         className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
//       />

//       <div className="max-w-5xl mx-auto relative z-10">

//         {/* Header */}
//         <div className="mb-14 text-center max-w-2xl mx-auto">
//   {/* Top label with pill background */}
//   <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
//     Global Reach
//   </span>

//   {/* Title with gradient accent */}
//   <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
//     Our{" "}
//     <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
//       Markets
//     </span>
//   </h2>

//   {/* Underline */}
//   <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>

//   {/* Description */}
//   <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
//     Engineering excellence delivered across five strategic regions worldwide
//   </p>
// </div>

//         {/* Row 1 — 3 cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//           {markets.slice(0, 3).map((market, idx) => (
//             <MarketCard key={idx} market={market} idx={idx} />
//           ))}
//         </div>

//         {/* Row 2 — 2 cards centered */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:max-w-[66%] mx-auto">
//           {markets.slice(3).map((market, idx) => (
//             <MarketCard key={idx + 3} market={market} idx={idx + 3} />
//           ))}
//         </div>



//       </div>
//     </section>
//   );
// };

// const MarketCard = ({ market, idx }) => (
//   <div
//     className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group
//     transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300"
//   >
//     {/* Ghost number */}
//     <span className="absolute top-5 right-5 text-5xl font-black text-black/[0.04] leading-none select-none pointer-events-none">
//       {String(idx + 1).padStart(2, "0")}
//     </span>

//     {/* Top accent bar */}
//     <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 to-amber-600
//                     opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//     {/* Flag + Name */}
//     <div className="flex items-center gap-3">
//       <div className="w-14 h-9 rounded-md overflow-hidden border border-slate-200 flex-shrink-0">
//         <img src={market.flagImage} alt={market.name} className="w-full h-full object-cover" />
//       </div>
//       <h3 className="text-slate-900 font-bold text-[17px] leading-tight">{market.name}</h3>
//     </div>

//     {/* Tag pill */}
//     <span className="self-start text-[10px] font-semibold tracking-widest uppercase
//                      text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
//       {market.tag}
//     </span>

//     {/* Detail */}
//     <p className="text-slate-500 text-[13px] leading-relaxed">{market.detail}</p>

//     {/* Animated bar */}
//     <div className="h-[2px] w-7 bg-gradient-to-r from-amber-400 to-amber-600 rounded
//                     group-hover:w-14 transition-all duration-300" />
//   </div>
// );

// export default Markets;

import React, { useEffect, useRef, useState } from "react";

// ============================================================
// Custom hook for continuous scroll‑triggered animations
// ============================================================
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const markets = [
  {
    name: "India",
    tag: "Operations Hub",
    detail: "Largest operations hub with R&D and fabrication facilities serving global project delivery.",
    flagImage: "/Flag-India.jpg",
  },
  {
    name: "Middle East",
    tag: "Oil & Gas",
    detail: "UAE, Saudi Arabia — key oil & gas project delivery across upstream and downstream sectors.",
    flagImage: "/Flag-Dubai.jpg",
  },
  {
    name: "Nigeria",
    tag: "Gas Monetization",
    detail: "West Africa upstream gas monetization projects supporting regional energy development.",
    flagImage: "/Flag-Nigeria.jpg",
  },
  {
    name: "UK / Europe",
    tag: "Decarbonization",
    detail: "Decarbonization and digitalization engineering driving the energy transition forward.",
    flagImage: "/Flag-London.jpg",
  },
  {
    name: "Houston, USA",
    tag: "Energy Capital",
    detail: "North America's energy capital — LNG, petrochemical and offshore engineering hub.",
    flagImage: "/Flag-Houston.jpg",
  },
];

// ============================================================
// Animated Card Component
// ============================================================
const MarketCard = ({ market, idx, rowType }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const delay = idx * 0.1;

  // Determine slide direction based on position in the grid
  let initialTransform = "translateX(0)";
  if (rowType === "row1") {
    // First row: 3 cards – left, center, right
    if (idx === 0) initialTransform = "translateX(-35px)"; // left card from left
    if (idx === 1) initialTransform = "translateY(30px)";  // center card from bottom
    if (idx === 2) initialTransform = "translateX(35px)";  // right card from right
  } else if (rowType === "row2") {
    // Second row: 2 cards – left and right
    if (idx === 0) initialTransform = "translateX(-35px)";
    if (idx === 1) initialTransform = "translateX(35px)";
  }

  return (
    <div
      ref={ref}
      className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden group
                 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-amber-300"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0) translateY(0)" : initialTransform,
        transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${delay}s,
                     transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${delay}s`,
      }}
    >
      {/* Ghost number */}
      <span className="absolute top-5 right-5 text-5xl font-black text-black/[0.04] leading-none select-none pointer-events-none">
        {String(idx + 1).padStart(2, "0")}
      </span>

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 to-amber-600
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Flag + Name */}
      <div className="flex items-center gap-3">
        <div className="w-14 h-9 rounded-md overflow-hidden border border-slate-200 flex-shrink-0">
          <img src={market.flagImage} alt={market.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-slate-900 font-bold text-[17px] leading-tight">{market.name}</h3>
      </div>

      {/* Tag pill */}
      <span className="self-start text-[10px] font-semibold tracking-widest uppercase
                       text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
        {market.tag}
      </span>

      {/* Detail */}
      <p className="text-slate-500 text-[13px] leading-relaxed">{market.detail}</p>

      {/* Animated bar */}
      <div className="h-[2px] w-7 bg-gradient-to-r from-amber-400 to-amber-600 rounded
                      group-hover:w-14 transition-all duration-300" />
    </div>
  );
};

const Markets = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section
      className="py-20 lg:py-20 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f8fafc 0%, #f1f5f9 40%, #e9eef5 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Animated Header */}
        <div
          ref={headerRef}
          className="mb-14 text-center max-w-2xl mx-auto transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Global Reach
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Markets
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Engineering excellence delivered across five strategic regions worldwide
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {markets.slice(0, 3).map((market, idx) => (
            <MarketCard key={idx} market={market} idx={idx} rowType="row1" />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:max-w-[66%] mx-auto">
          {markets.slice(3).map((market, idx) => (
            <MarketCard key={idx + 3} market={market} idx={idx} rowType="row2" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;