// import React, { useState } from "react";
// import { FaOilCan } from "react-icons/fa";
// import { GiPipes, GiChemicalTank } from "react-icons/gi";
// import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// import { SiTensorflow } from "react-icons/si";

// const solutions = [
//   {
//     name: "Oil & Gas",
//     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
//     icon: <FaOilCan className="text-primery text-3xl" />,
//   },
//   {
//     name: "Midstream",
//     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
//     icon: <GiPipes className="text-primery text-3xl" />,
//   },
//   {
//     name: "Bio Chemicals",
//     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
//     icon: <MdBiotech className="text-primery-dark text-3xl" />,
//   },
//   {
//     name: "Syngas Derivatives",
//     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
//     icon: <GiChemicalTank className="text-primery text-3xl" />,
//   },
//   {
//     name: "Decarbonization",
//     desc: "Carbon capture, utilization and storage enabling the energy transition pathway.",
//     icon: <MdOutlineEnergySavingsLeaf className="text-primery-dark text-3xl" />,
//   },
//   {
//     name: "Digitalization",
//     desc: "Digital twin and AI-driven process optimization for intelligent plant management.",
//     icon: <SiTensorflow className="text-primery-light text-3xl" />,
//   },
// ];

// const SolutionCard = ({ name, desc, icon }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
//       style={{
//         background: hovered ? "#ffffff" : "#f9fafb",
//         border: `1px solid ${hovered ? "var(--primery)" : "#e5e7eb"}`,
//         boxShadow: hovered
//           ? "0 20px 25px -12px rgba(0,0,0,0.1)"
//           : "0 1px 3px rgba(0,0,0,0.05)",
//         transform: hovered ? "translateY(-4px)" : "translateY(0)",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="mb-4 transition-transform duration-300" style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}>
//         {icon}
//       </div>
//       <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
//       <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
//       <span
//         className="inline-block mt-4 text-sm font-semibold text-primery transition-all duration-200"
//         style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateX(4px)" : "translateX(0)" }}
//       >
//         Explore →
//       </span>
//     </div>
//   );
// };

// const Solutions = () => {
//   return (
//     <section className="px-4 sm:px-6 py-16 sm:py-16 max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-5">
//         <div>
//           <div className="flex items-center gap-2 mb-2">
//             <span className="w-6 h-0.5 rounded bg-primery" />
//             <span className="text-[11px] font-semibold tracking-[3px] uppercase text-primery">
//               What We Offer
//             </span>
//           </div>
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
//             Products &amp; Solutions
//           </h2>
//         </div>
//         <button className="self-start lg:self-auto px-5 py-2 rounded-full text-sm font-bold text-black bg-primery hover:bg-primery-light transition-colors duration-200 shadow-md hover:shadow-lg">
//           View All Solutions →
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {solutions.map((sol, i) => (
//           <SolutionCard key={i} {...sol} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Solutions;

import React from "react";
import { FaOilCan } from "react-icons/fa";
import { GiPipes, GiChemicalTank } from "react-icons/gi";
import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: "Oil & Gas",
    desc: "Upstream and downstream processing with integrated systems.",
    icon: <FaOilCan />,
  },
  {
    name: "Midstream",
    desc: "Pipeline, compression, and NGL recovery systems.",
    icon: <GiPipes />,
  },
  {
    name: "Bio Chemicals",
    desc: "Biomass conversion into fuels and chemicals.",
    icon: <MdBiotech />,
  },
  {
    name: "Syngas Derivatives",
    desc: "Ammonia, methanol, and hydrogen production.",
    icon: <GiChemicalTank />,
  },
  {
    name: "Decarbonization",
    desc: "Carbon capture and energy transition solutions.",
    icon: <MdOutlineEnergySavingsLeaf />,
  },
  {
    name: "Digitalization",
    desc: "AI-driven plant optimization and digital twins.",
    icon: <SiTensorflow />,
  },
];

const Solutions = () => {
  return (
    <section className="bg-black-deep text-white py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-primery"></span>
              <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
                What We Offer
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold">
              Products & Solutions
            </h2>
          </div>

          <Link
            to="/products"
            className="px-6 py-3 rounded-full text-sm font-semibold text-black bg-primery hover:bg-primery-light transition-all duration-300 shadow-lg"
          >
            View All Solutions →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-primery hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="text-primery text-3xl mb-4 group-hover:scale-110 transition">
                {sol.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {sol.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {sol.desc}
              </p>

              {/* Hover Link */}
              <span className="text-sm font-semibold text-primery opacity-0 group-hover:opacity-100 transition">
                Explore →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;