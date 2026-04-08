// // import React, { useEffect, useRef, useState } from "react";
// // import { FaOilCan } from "react-icons/fa";
// // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // import { SiTensorflow } from "react-icons/si";
// // import { Link } from "react-router-dom";

// // // ============================================================
// // // Custom hook for scroll-triggered animations
// // // ============================================================
// // function useInView(options = {}) {
// //   const ref = useRef(null);
// //   const [inView, setInView] = useState(false);

// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setInView(true);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.2, ...options }
// //     );
// //     observer.observe(el);
// //     return () => observer.disconnect();
// //   }, [options]);

// //   return [ref, inView];
// // }

// // // ============================================================
// // // Animated Card Component (scroll-triggered)
// // // ============================================================
// // function AnimatedCard({ name, description, icon, index }) {
// //   const [ref, inView] = useInView();
// //   const [hovered, setHovered] = useState(false);
// //   const delay = index * 0.1;

// //   return (
// //     <div
// //       ref={ref}
// //       className="transition-all duration-700"
// //       style={{
// //         opacity: inView ? 1 : 0,
// //         transform: inView ? "translateY(0)" : "translateY(40px)",
// //         transitionDelay: `${delay}s`,
// //       }}
// //     >
// //       <div
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //         className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-amber-300"
// //       >
// //         {/* Icon with animated background */}
// //         <div className="relative mb-4">
// //           <div
// //             className="absolute inset-0 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"
// //             style={{ width: "56px", height: "56px" }}
// //           ></div>
// //           <div className="relative text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
// //             {icon}
// //           </div>
// //         </div>

// //         <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
// //           {name}
// //         </h3>
// //         <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

// //         <span
// //           className="inline-block text-sm font-semibold text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
// //         >
// //           Explore →
// //         </span>
// //       </div>
// //     </div>
// //   );
// // }

// // const solutions = [
// //   {
// //     name: "Oil & Gas",
// //     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
// //     icon: <FaOilCan className="text-3xl" />,
// //   },
// //   {
// //     name: "Midstream",
// //     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
// //     icon: <GiPipes className="text-3xl" />,
// //   },
// //   {
// //     name: "Bio Chemicals",
// //     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
// //     icon: <MdBiotech className="text-3xl" />,
// //   },
// //   {
// //     name: "Syngas Derivatives",
// //     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
// //     icon: <GiChemicalTank className="text-3xl" />,
// //   },
// //   {
// //     name: "Decarbonization",
// //     desc: "Carbon capture, utilization and storage enabling the energy transition pathway.",
// //     icon: <MdOutlineEnergySavingsLeaf className="text-3xl" />,
// //   },
// //   {
// //     name: "Digitalization",
// //     desc: "Digital twin and AI-driven process optimization for intelligent plant management.",
// //     icon: <SiTensorflow className="text-3xl" />,
// //   },
// // ];

// // const Solutions = () => {
// //   const animationStyles = `
// //     @keyframes fadeUp {
// //       0% { opacity: 0; transform: translateY(30px); }
// //       100% { opacity: 1; transform: translateY(0); }
// //     }
// //     @keyframes fadeLeft {
// //       0% { opacity: 0; transform: translateX(-30px); }
// //       100% { opacity: 1; transform: translateX(0); }
// //     }
// //     @keyframes float {
// //       0%, 100% { transform: translateY(0px); }
// //       50% { transform: translateY(-10px); }
// //     }
// //     .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //     .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //     .animate-float { animation: float 6s ease-in-out infinite; }
// //     .delay-100 { animation-delay: 0.1s; }
// //     .delay-200 { animation-delay: 0.2s; }
// //     .delay-300 { animation-delay: 0.3s; }
// //   `;

// //   return (
// //     <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 lg:py-28 px-6">
// //       <style>{animationStyles}</style>

// //       {/* Subtle background pattern / decorative elements */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         {/* Soft floating circles */}
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl animate-float"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
// //         {/* Subtle grid pattern */}
// //         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 stroke-opacity=%220.1%22%3E%3Cpath d=%22M0 .5H31.5V32%22/%3E%3C/svg%3E')]"></div>
// //       </div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* Header */}
// //         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
// //           <div>
// //             <div className="flex items-center gap-2 mb-3">
// //               <span className="w-8 h-[2px] bg-amber-500"></span>
// //               <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-600 animate-fadeLeft">
// //                 What We Offer
// //               </span>
// //             </div>
// //             <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 animate-fadeUp delay-100">
// //               Products & Solutions
// //             </h2>
// //             <p className="text-gray-600 mt-4 max-w-2xl animate-fadeUp delay-200">
// //               Comprehensive suite of technologies and services to drive efficiency and sustainability across the hydrocarbon value chain.
// //             </p>
// //           </div>

// //           <Link
// //             to="/products"
// //             className="self-start lg:self-auto px-6 py-3 rounded-full text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1 group"
// //           >
// //             View All Solutions
// //             <span className="group-hover:translate-x-1 transition-transform">→</span>
// //           </Link>
// //         </div>

// //         {/* Grid with animated cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {solutions.map((sol, i) => (
// //             <AnimatedCard
// //               key={i}
// //               name={sol.name}
// //               description={sol.desc}
// //               icon={sol.icon}
// //               index={i}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Solutions;

// import React, { useEffect, useRef, useState } from "react";
// import { FaOilCan } from "react-icons/fa";
// import { GiPipes, GiChemicalTank } from "react-icons/gi";
// import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// import { SiTensorflow } from "react-icons/si";
// import { Link } from "react-router-dom";

// // ============================================================
// // Custom hook for scroll-triggered animations
// // ============================================================
// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2, ...options }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, inView];
// }

// // ============================================================
// // Animated Card Component (scroll-triggered) – now a clickable link
// // ============================================================
// function AnimatedCard({ name, description, icon, path, index }) {
//   const [ref, inView] = useInView();
//   const [hovered ,setHovered] = useState(false);
//   const delay = index * 0.1;

//   return (
//     <div
//       ref={ref}
//       className="transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(40px)",
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <Link
//         to={path}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="block group bg-white/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-amber-300"
//       >
//         {/* Icon with animated background */}
//         <div className="relative mb-4">
//           <div
//             className="absolute inset-0 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"
//             style={{ width: "56px", height: "56px" }}
//           ></div>
//           <div className="relative text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
//             {icon}
//           </div>
//         </div>

//         <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
//           {name}
//         </h3>
//         <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

//         <span
//           className="inline-block text-sm font-semibold text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
//         >
//           Explore →
//         </span>
//       </Link>
//     </div>
//   );
// }

// const solutions = [
//   {
//     name: "Oil & Gas",
//     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
//     icon: <FaOilCan className="text-3xl" />,
//     path: "/products/oilgas",
//   },
//   {
//     name: "Midstream",
//     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
//     icon: <GiPipes className="text-3xl" />,
//     path: "/products/midstream",
//   },
//   {
//     name: "Bio Chemicals",
//     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
//     icon: <MdBiotech className="text-3xl" />,
//     path: "/products/biochemicals",
//   },
//   {
//     name: "Syngas Derivatives",
//     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
//     icon: <GiChemicalTank className="text-3xl" />,
//     path: "/products/syngas",
//   },
//   {
//     name: "Decarbonization",
//     desc: "Carbon capture, utilization and storage enabling the energy transition pathway.",
//     icon: <MdOutlineEnergySavingsLeaf className="text-3xl" />,
//     path: "/products/decarbonization",
//   },
//   {
//     name: "Digitalization",
//     desc: "Digital twin and AI-driven process optimization for intelligent plant management.",
//     icon: <SiTensorflow className="text-3xl" />,
//     path: "/products/digitalization",
//   },
// ];

// const Solutions = () => {
//   const animationStyles = `
//     @keyframes fadeUp {
//       0% { opacity: 0; transform: translateY(30px); }
//       100% { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes fadeLeft {
//       0% { opacity: 0; transform: translateX(-30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes float {
//       0%, 100% { transform: translateY(0px); }
//       50% { transform: translateY(-10px); }
//     }
//     .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//     .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//     .animate-float { animation: float 6s ease-in-out infinite; }
//     .delay-100 { animation-delay: 0.1s; }
//     .delay-200 { animation-delay: 0.2s; }
//     .delay-300 { animation-delay: 0.3s; }
//   `;

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 lg:py-28 px-6">
//       <style>{animationStyles}</style>

//       {/* Subtle background pattern / decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 stroke-opacity=%220.1%22%3E%3Cpath d=%22M0 .5H31.5V32%22/%3E%3C/svg%3E')]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header – without the "View All Solutions" button */}
//         <div className="mb-14">
//           <div className="flex items-center gap-2 mb-3">
//             <span className="w-8 h-[2px] bg-amber-500"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-600 animate-fadeLeft">
//               What We Offer
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 animate-fadeUp delay-100">
//             Products & Solutions
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl animate-fadeUp delay-200">
//             Comprehensive suite of technologies and services to drive efficiency and sustainability across the hydrocarbon value chain.
//           </p>
//         </div>

//         {/* Grid with animated cards – each card is a clickable link */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {solutions.map((sol, i) => (
//             <AnimatedCard
//               key={i}
//               name={sol.name}
//               description={sol.desc}
//               icon={sol.icon}
//               path={sol.path}
//               index={i}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;

import React, { useEffect, useRef, useState } from "react";
import { FaOilCan } from "react-icons/fa";
import { GiPipes, GiChemicalTank } from "react-icons/gi";
import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { Link } from "react-router-dom";

// ============================================================
// Custom hook for scroll-triggered animations
// ============================================================
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

// ============================================================
// Animated Card Component (scroll-triggered) – clickable link, pure CSS hover
// ============================================================
function AnimatedCard({ name, description, icon, path, index }) {
  const [ref, inView] = useInView();
  const delay = index * 0.1;

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}s`,
      }}
    >
      <Link
        to={path}
        className="block group bg-white/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-amber-300"
      >
        {/* Icon with animated background */}
        <div className="relative mb-4">
          <div
            className="absolute inset-0 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"
            style={{ width: "56px", height: "56px" }}
          ></div>
          <div className="relative text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        <span className="inline-block text-sm font-semibold text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
          Explore →
        </span>
      </Link>
    </div>
  );
}

const solutions = [
  {
    name: "Oil & Gas",
    desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
    icon: <FaOilCan className="text-3xl" />,
    path: "/products/oilgas",
  },
  {
    name: "Midstream",
    desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
    icon: <GiPipes className="text-3xl" />,
    path: "/products/midstream",
  },
  {
    name: "Bio Chemicals",
    desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
    icon: <MdBiotech className="text-3xl" />,
    path: "/products/biochemicals",
  },
  {
    name: "Syngas Derivatives",
    desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
    icon: <GiChemicalTank className="text-3xl" />,
    path: "/products/syngas",
  },
  {
    name: "Decarbonization",
    desc: "Carbon capture, utilization and storage enabling the energy transition pathway.",
    icon: <MdOutlineEnergySavingsLeaf className="text-3xl" />,
    path: "/products/decarbonization",
  },
  {
    name: "Digitalization",
    desc: "Digital twin and AI-driven process optimization for intelligent plant management.",
    icon: <SiTensorflow className="text-3xl" />,
    path: "/products/digitalization",
  },
];

const Solutions = () => {
  const animationStyles = `
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
  `;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 lg:py-28 px-6">
      <style>{animationStyles}</style>

      {/* Subtle background pattern / decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 stroke-opacity=%220.1%22%3E%3Cpath d=%22M0 .5H31.5V32%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header – without the "View All Solutions" button */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-600 animate-fadeLeft">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 animate-fadeUp delay-100">
            Products & Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl animate-fadeUp delay-200">
            Comprehensive suite of technologies and services to drive efficiency and sustainability across the hydrocarbon value chain.
          </p>
        </div>

        {/* Grid with animated cards – each card is a clickable link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <AnimatedCard
              key={i}
              name={sol.name}
              description={sol.desc}
              icon={sol.icon}
              path={sol.path}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;