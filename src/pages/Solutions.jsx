

// // // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // // import { FaOilCan } from "react-icons/fa";
// // // // // // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // // // // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // // // // // import { SiTensorflow } from "react-icons/si";
// // // // // // // import { Link } from "react-router-dom";

// // // // // // // // ============================================================
// // // // // // // // Custom hook for scroll-triggered animations
// // // // // // // // ============================================================
// // // // // // // function useInView(options = {}) {
// // // // // // //   const ref = useRef(null);
// // // // // // //   const [inView, setInView] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const el = ref.current;
// // // // // // //     if (!el) return;
// // // // // // //     const observer = new IntersectionObserver(
// // // // // // //       ([entry]) => {
// // // // // // //         if (entry.isIntersecting) {
// // // // // // //           setInView(true);
// // // // // // //           observer.disconnect();
// // // // // // //         }
// // // // // // //       },
// // // // // // //       { threshold: 0.2, ...options }
// // // // // // //     );
// // // // // // //     observer.observe(el);
// // // // // // //     return () => observer.disconnect();
// // // // // // //   }, [options]);

// // // // // // //   return [ref, inView];
// // // // // // // }

// // // // // // // // ============================================================
// // // // // // // // Animated Card Component (scroll-triggered) – clickable link, pure CSS hover
// // // // // // // // ============================================================
// // // // // // // function AnimatedCard({ name, description, icon, path, index }) {
// // // // // // //   const [ref, inView] = useInView();
// // // // // // //   const delay = index * 0.1;

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       ref={ref}
// // // // // // //       className="transition-all duration-700"
// // // // // // //       style={{
// // // // // // //         opacity: inView ? 1 : 0,
// // // // // // //         transform: inView ? "translateY(0)" : "translateY(40px)",
// // // // // // //         transitionDelay: `${delay}s`,
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <Link
// // // // // // //         to={path}
// // // // // // //         className="block group bg-white/80 backdrop-blur-sm rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-amber-300"
// // // // // // //       >
// // // // // // //         {/* Icon with animated background */}
// // // // // // //         <div className="relative mb-4">
// // // // // // //           <div
// // // // // // //             className="absolute inset-0 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"
// // // // // // //             style={{ width: "56px", height: "56px" }}
// // // // // // //           ></div>
// // // // // // //           <div className="relative text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
// // // // // // //             {icon}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
// // // // // // //           {name}
// // // // // // //         </h3>
// // // // // // //         <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

// // // // // // //         <span className="inline-block text-sm font-semibold text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
// // // // // // //           Explore →
// // // // // // //         </span>
// // // // // // //       </Link>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // const solutions = [
// // // // // // //   {
// // // // // // //     name: "Oil & Gas",
// // // // // // //     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
// // // // // // //     icon: <FaOilCan className="text-3xl" />,
// // // // // // //     path: "/products/oilgas",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Midstream",
// // // // // // //     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
// // // // // // //     icon: <GiPipes className="text-3xl" />,
// // // // // // //     path: "/products/midstream",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Bio Chemicals",
// // // // // // //     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
// // // // // // //     icon: <MdBiotech className="text-3xl" />,
// // // // // // //     path: "/products/biochemicals",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Syngas Derivatives",
// // // // // // //     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
// // // // // // //     icon: <GiChemicalTank className="text-3xl" />,
// // // // // // //     path: "/products/syngas",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Decarbonization",
// // // // // // //     desc: "Carbon capture, utilization and storage enabling the energy transition pathway.",
// // // // // // //     icon: <MdOutlineEnergySavingsLeaf className="text-3xl" />,
// // // // // // //     path: "/products/decarbonization",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Digitalization",
// // // // // // //     desc: "Digital twin and AI-driven process optimization for intelligent plant management.",
// // // // // // //     icon: <SiTensorflow className="text-3xl" />,
// // // // // // //     path: "/products/digitalization",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const Solutions = () => {
// // // // // // //   const animationStyles = `
// // // // // // //     @keyframes fadeUp {
// // // // // // //       0% { opacity: 0; transform: translateY(30px); }
// // // // // // //       100% { opacity: 1; transform: translateY(0); }
// // // // // // //     }
// // // // // // //     @keyframes fadeLeft {
// // // // // // //       0% { opacity: 0; transform: translateX(-30px); }
// // // // // // //       100% { opacity: 1; transform: translateX(0); }
// // // // // // //     }
// // // // // // //     @keyframes float {
// // // // // // //       0%, 100% { transform: translateY(0px); }
// // // // // // //       50% { transform: translateY(-10px); }
// // // // // // //     }
// // // // // // //     .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // // // // // //     .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // // // // // //     .animate-float { animation: float 6s ease-in-out infinite; }
// // // // // // //     .delay-100 { animation-delay: 0.1s; }
// // // // // // //     .delay-200 { animation-delay: 0.2s; }
// // // // // // //     .delay-300 { animation-delay: 0.3s; }
// // // // // // //   `;

// // // // // // //   return (
// // // // // // //     <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 py-20 lg:py-28 px-6">
// // // // // // //       <style>{animationStyles}</style>

// // // // // // //       {/* Subtle background pattern / decorative elements */}
// // // // // // //       <div className="absolute inset-0 pointer-events-none">
// // // // // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl animate-float"></div>
// // // // // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
// // // // // // //         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%23fbbf24%22 stroke-width=%220.5%22 stroke-opacity=%220.1%22%3E%3Cpath d=%22M0 .5H31.5V32%22/%3E%3C/svg%3E')]"></div>
// // // // // // //       </div>

// // // // // // //       <div className="max-w-7xl mx-auto relative z-10">
// // // // // // //         {/* Header – without the "View All Solutions" button */}
// // // // // // //         <div className="mb-14">
// // // // // // //           <div className="flex items-center gap-2 mb-3">
// // // // // // //             <span className="w-8 h-[2px] bg-amber-500"></span>
// // // // // // //             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-600 animate-fadeLeft">
// // // // // // //               What We Offer
// // // // // // //             </span>
// // // // // // //           </div>
// // // // // // //           <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 animate-fadeUp delay-100">
// // // // // // //             Products & Solutions
// // // // // // //           </h2>
// // // // // // //           <p className="text-gray-600 mt-4 max-w-2xl animate-fadeUp delay-200">
// // // // // // //             Comprehensive suite of technologies and services to drive efficiency and sustainability across the hydrocarbon value chain.
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Grid with animated cards – each card is a clickable link */}
// // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //           {solutions.map((sol, i) => (
// // // // // // //             <AnimatedCard
// // // // // // //               key={i}
// // // // // // //               name={sol.name}
// // // // // // //               description={sol.desc}
// // // // // // //               icon={sol.icon}
// // // // // // //               path={sol.path}
// // // // // // //               index={i}
// // // // // // //             />
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Solutions;


// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { FaOilCan } from "react-icons/fa";
// // // // // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // // // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // // // // import { SiTensorflow } from "react-icons/si";
// // // // // // import { Link } from "react-router-dom";

// // // // // // // ============================================================
// // // // // // // Custom hook for scroll-triggered animations
// // // // // // // ============================================================
// // // // // // function useInView(options = {}) {
// // // // // //   const ref = useRef(null);
// // // // // //   const [inView, setInView] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const el = ref.current;
// // // // // //     if (!el) return;
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       ([entry]) => {
// // // // // //         if (entry.isIntersecting) {
// // // // // //           setInView(true);
// // // // // //           observer.disconnect();
// // // // // //         }
// // // // // //       },
// // // // // //       { threshold: 0.2, ...options }
// // // // // //     );
// // // // // //     observer.observe(el);
// // // // // //     return () => observer.disconnect();
// // // // // //   }, [options]);

// // // // // //   return [ref, inView];
// // // // // // }

// // // // // // // ============================================================
// // // // // // // Grid Item (no card – just clean content with hover animations)
// // // // // // // ============================================================
// // // // // // function GridItem({ name, description, icon, path, index }) {
// // // // // //   const [ref, inView] = useInView();
// // // // // //   const delay = index * 0.1;

// // // // // //   return (
// // // // // //     <div
// // // // // //       ref={ref}
// // // // // //       className="group transition-all duration-1000"
// // // // // //       style={{
// // // // // //         opacity: inView ? 1 : 0,
// // // // // //         transform: inView ? "translateY(0)" : "translateY(50px)",
// // // // // //         transitionDelay: `${delay}s`,
// // // // // //       }}
// // // // // //     >
// // // // // //       <Link to={path} className="block">
// // // // // //         {/* Icon – subtle hover scale and color change */}
// // // // // //         <div className="inline-block text-amber-600 text-4xl mb-5 transition-all duration-500 group-hover:text-amber-500 group-hover:scale-105 group-hover:-translate-y-0.5">
// // // // // //           {icon}
// // // // // //         </div>

// // // // // //         {/* Animated underline – grows on hover */}
// // // // // //         <div className="w-12 h-0.5 bg-amber-300 mb-4 transition-all duration-500 group-hover:w-20 group-hover:bg-amber-500"></div>

// // // // // //         <h3 className="text-gray-900 font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-amber-700">
// // // // // //           {name}
// // // // // //         </h3>
// // // // // //         <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
// // // // // //           {description}
// // // // // //         </p>

// // // // // //         {/* Arrow indicator – appears on hover */}
// // // // // //         <div className="mt-4 overflow-hidden">
// // // // // //           <span className="inline-block text-amber-500 text-sm font-semibold transition-all duration-300 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
// // // // // //             Explore →
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       </Link>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // const solutions = [
// // // // // //   {
// // // // // //     name: "Oil & Gas",
// // // // // //     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
// // // // // //     icon: <FaOilCan />,
// // // // // //     path: "/products/oilgas",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Midstream",
// // // // // //     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
// // // // // //     icon: <GiPipes />,
// // // // // //     path: "/products/midstream",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Bio Chemicals",
// // // // // //     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
// // // // // //     icon: <MdBiotech />,
// // // // // //     path: "/products/biochemicals",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Syngas Derivatives",
// // // // // //     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
// // // // // //     icon: <GiChemicalTank />,
// // // // // //     path: "/products/syngas",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Decarbonization",
// // // // // //     desc: "Carbon capture, utilization and storage enabling the energy transition pathway.",
// // // // // //     icon: <MdOutlineEnergySavingsLeaf />,
// // // // // //     path: "/products/decarbonization",
// // // // // //   },
// // // // // //   {
// // // // // //     name: "Digitalization",
// // // // // //     desc: "Digital twin and AI-driven process optimization for intelligent plant management.",
// // // // // //     icon: <SiTensorflow />,
// // // // // //     path: "/products/digitalization",
// // // // // //   },
// // // // // // ];

// // // // // // const Solutions = () => {
// // // // // //   return (
// // // // // //     <section className="bg-gray-50 py-20 px-6">
// // // // // //       <div className="max-w-7xl mx-auto">
// // // // // //         {/* Header – clean, no decorations */}
// // // // // //         <div className="mb-14">
// // // // // //           <div className="inline-block mb-3">
// // // // // //             <span className="text-xs font-semibold tracking-[4px] uppercase text-amber-600">
// // // // // //               What We Offer
// // // // // //             </span>
// // // // // //             <div className="w-full h-px bg-amber-300 mt-1"></div>
// // // // // //           </div>
// // // // // //           <h2 className="text-3xl lg:text-5xl font-light text-gray-900">
// // // // // //             Products & <span className="font-semibold">Solutions</span>
// // // // // //           </h2>
// // // // // //           <p className="text-gray-600 mt-4 max-w-2xl text-lg">
// // // // // //             Comprehensive suite of technologies and services to drive efficiency and sustainability across the hydrocarbon value chain.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Grid – 3 columns, no cards */}
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
// // // // // //           {solutions.map((sol, i) => (
// // // // // //             <GridItem
// // // // // //               key={i}
// // // // // //               name={sol.name}
// // // // // //               description={sol.desc}
// // // // // //               icon={sol.icon}
// // // // // //               path={sol.path}
// // // // // //               index={i}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Solutions;


// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { FaOilCan } from "react-icons/fa";
// // // // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // // // import { SiTensorflow } from "react-icons/si";
// // // // // import { Link } from "react-router-dom";

// // // // // const solutions = [
// // // // //   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
// // // // //   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
// // // // //   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
// // // // //   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
// // // // //   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
// // // // //   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
// // // // // ];

// // // // // const Solutions = () => {
// // // // //   return (
// // // // //     <section className="bg-white py-20 px-6 overflow-hidden">
// // // // //       <div className="max-w-7xl mx-auto">
// // // // //         {/* Header – left-aligned, large, with a subtle accent bar */}
// // // // //         <div className="mb-12">
// // // // //           <div className="flex items-center gap-3 mb-4">
// // // // //             <div className="w-12 h-px bg-amber-400"></div>
// // // // //             <span className="text-xs font-mono tracking-wider text-amber-600 font-semibold">CORE OFFERINGS</span>
// // // // //           </div>
// // // // //           <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
// // // // //             Engineered<br />Solutions
// // // // //           </h2>
// // // // //           <p className="text-gray-500 mt-4 max-w-xl text-lg">
// // // // //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Desktop: Horizontal scrollable row */}
// // // // //         <div className="hidden lg:block overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300">
// // // // //           <div className="flex gap-8" style={{ minWidth: "max-content" }}>
// // // // //             {solutions.map((sol, idx) => (
// // // // //               <Link
// // // // //                 key={idx}
// // // // //                 to={sol.path}
// // // // //                 className="group relative w-80 flex-shrink-0 p-6 rounded-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100/50 border border-gray-100 hover:border-amber-200"
// // // // //               >
// // // // //                 {/* Large background number */}
// // // // //                 <div className="absolute top-4 right-4 text-7xl font-black text-gray-100 group-hover:text-amber-200/50 transition-all duration-500">
// // // // //                   {sol.id}
// // // // //                 </div>
// // // // //                 <div className="relative z-10">
// // // // //                   <div className="text-amber-500 text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
// // // // //                     {sol.icon}
// // // // //                   </div>
// // // // //                   <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700">
// // // // //                     {sol.name}
// // // // //                   </h3>
// // // // //                   <p className="text-gray-500 text-sm leading-relaxed">
// // // // //                     {sol.desc}
// // // // //                   </p>
// // // // //                   <span className="inline-block mt-4 text-sm font-medium text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
// // // // //                     Learn more →
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Mobile: Vertical stack with alternating layout */}
// // // // //         <div className="lg:hidden space-y-6">
// // // // //           {solutions.map((sol, idx) => (
// // // // //             <Link
// // // // //               key={idx}
// // // // //               to={sol.path}
// // // // //               className="block p-5 rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-gradient-to-r hover:from-amber-50/50 hover:to-transparent transition-all duration-300"
// // // // //             >
// // // // //               <div className="flex items-start gap-4">
// // // // //                 <div className="text-amber-500 text-3xl">{sol.icon}</div>
// // // // //                 <div>
// // // // //                   <div className="flex items-baseline gap-2">
// // // // //                     <span className="text-xs font-mono text-amber-500 font-bold">{sol.id}</span>
// // // // //                     <h3 className="font-bold text-gray-800">{sol.name}</h3>
// // // // //                   </div>
// // // // //                   <p className="text-gray-500 text-sm mt-1">{sol.desc}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </Link>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Solutions;


// // // // // Solutions.jsx (refined, no card borders, just subtle hover)


// // // // // import { FaOilCan } from "react-icons/fa";
// // // // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // // // import { SiTensorflow } from "react-icons/si";
// // // // // import { Link } from "react-router-dom";

// // // // // const solutions = [
// // // // //   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation.", icon: <FaOilCan />, path: "/products/oilgas" },
// // // // //   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems.", icon: <GiPipes />, path: "/products/midstream" },
// // // // //   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into chemicals.", icon: <MdBiotech />, path: "/products/biochemicals" },
// // // // //   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production.", icon: <GiChemicalTank />, path: "/products/syngas" },
// // // // //   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
// // // // //   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven optimization.", icon: <SiTensorflow />, path: "/products/digitalization" },
// // // // // ];

// // // // // const Solutions = () => {
// // // // //   return (
// // // // //     <section className="section-padding bg-white">
// // // // //       <div className="container-custom">
// // // // //         <div className="mb-12">
// // // // //           <span className="text-amber-600 text-sm font-semibold tracking-wider">Core Offerings</span>
// // // // //           <h2 className="text-4xl lg:text-5xl font-bold mt-2">Engineered Solutions</h2>
// // // // //           <p className="text-gray-600 mt-3 max-w-xl">
// // // // //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* Horizontal scroll */}
// // // // //         <div className="overflow-x-auto pb-6 scrollbar-thin">
// // // // //           <div className="flex gap-6 min-w-max">
// // // // //             {solutions.map((sol) => (
// // // // //               <Link
// // // // //                 key={sol.id}
// // // // //                 to={sol.path}
// // // // //                 className="group w-72 flex-shrink-0 p-6 rounded-2xl transition-all hover:bg-gray-50"
// // // // //               >
// // // // //                 <div className="text-amber-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
// // // // //                   {sol.icon}
// // // // //                 </div>
// // // // //                 <div className="text-sm text-gray-400 font-mono mb-1">{sol.id}</div>
// // // // //                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600">
// // // // //                   {sol.name}
// // // // //                 </h3>
// // // // //                 <p className="text-gray-500 text-sm mt-2">{sol.desc}</p>
// // // // //                 <span className="inline-block mt-3 text-amber-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition translate-x-[-4px] group-hover:translate-x-0">
// // // // //                   Learn more →
// // // // //                 </span>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Solutions;



// // // // import { FaOilCan } from "react-icons/fa";
// // // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // // import { SiTensorflow } from "react-icons/si";
// // // // import { Link } from "react-router-dom";

// // // // const solutions = [
// // // //   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation.", icon: <FaOilCan />, path: "/products/oilgas" },
// // // //   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems.", icon: <GiPipes />, path: "/products/midstream" },
// // // //   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into chemicals.", icon: <MdBiotech />, path: "/products/biochemicals" },
// // // //   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production.", icon: <GiChemicalTank />, path: "/products/syngas" },
// // // //   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
// // // //   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven optimization.", icon: <SiTensorflow />, path: "/products/digitalization" },
// // // // ];

// // // // const Solutions = () => {
// // // //   return (
// // // //     <section className="section-padding bg-white">
// // // //       <div className="container-custom">
// // // //         <div className="mb-12">
// // // //           <span className="text-blue-600 text-sm font-semibold tracking-wider">Core Offerings</span>
// // // //           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">Engineered Solutions</h2>
// // // //           <p className="text-gray-600 mt-3 max-w-xl">
// // // //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// // // //           </p>
// // // //         </div>

// // // //         {/* Horizontal scroll */}
// // // //         <div className="overflow-x-auto pb-6 scrollbar-thin">
// // // //           <div className="flex gap-6 min-w-max">
// // // //             {solutions.map((sol) => (
// // // //               <Link
// // // //                 key={sol.id}
// // // //                 to={sol.path}
// // // //                 className="group w-72 flex-shrink-0 p-6 rounded-2xl transition-all hover:bg-gray-50"
// // // //               >
// // // //                 <div className="text-blue-500 text-4xl mb-4 group-hover:scale-110 transition-transform">
// // // //                   {sol.icon}
// // // //                 </div>
// // // //                 <div className="text-sm text-gray-400 font-mono mb-1">{sol.id}</div>
// // // //                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
// // // //                   {sol.name}
// // // //                 </h3>
// // // //                 <p className="text-gray-500 text-sm mt-2">{sol.desc}</p>
// // // //                 <span className="inline-block mt-3 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition translate-x-[-4px] group-hover:translate-x-0">
// // // //                   Learn more →
// // // //                 </span>
// // // //               </Link>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Solutions;


// // // import { useEffect, useRef, useState } from "react";
// // // import { FaOilCan } from "react-icons/fa";
// // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // import { SiTensorflow } from "react-icons/si";
// // // import { Link } from "react-router-dom";

// // // // Custom hook for scroll animations
// // // function useInView(options = {}) {
// // //   const ref = useRef(null);
// // //   const [inView, setInView] = useState(false);

// // //   useEffect(() => {
// // //     const el = ref.current;
// // //     if (!el) return;
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setInView(true);
// // //           observer.disconnect();
// // //         }
// // //       },
// // //       { threshold: 0.1, ...options }
// // //     );
// // //     observer.observe(el);
// // //     return () => observer.disconnect();
// // //   }, [options]);

// // //   return [ref, inView];
// // // }

// // // // Single solution card component with animation
// // // function SolutionCard({ solution, index }) {
// // //   const [ref, inView] = useInView();
// // //   const delay = index * 0.1;

// // //   return (
// // //     <div
// // //       ref={ref}
// // //       className="transition-all duration-700"
// // //       style={{
// // //         opacity: inView ? 1 : 0,
// // //         transform: inView ? "translateY(0)" : "translateY(40px)",
// // //         transitionDelay: `${delay}s`,
// // //       }}
// // //     >
// // //       <Link
// // //         to={solution.path}
// // //         className="group block p-6 rounded-2xl border border-gray-100 bg-white hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
// // //       >
// // //         {/* Icon with animated background */}
// // //         <div className="relative mb-5">
// // //           <div className="absolute inset-0 bg-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100" style={{ width: "56px", height: "56px" }} />
// // //           <div className="relative text-amber-500 text-4xl group-hover:scale-110 transition-transform duration-300">
// // //             {solution.icon}
// // //           </div>
// // //         </div>

// // //         {/* ID badge */}
// // //         <div className="text-xs font-mono text-amber-400 mb-2">{solution.id}</div>

// // //         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
// // //           {solution.name}
// // //         </h3>
// // //         <p className="text-gray-500 text-sm leading-relaxed mb-4">{solution.desc}</p>

// // //         {/* Arrow link */}
// // //         <span className="inline-flex items-center text-sm font-medium text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
// // //           Learn more
// // //           <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //           </svg>
// // //         </span>
// // //       </Link>
// // //     </div>
// // //   );
// // // }

// // // const solutions = [
// // //   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
// // //   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
// // //   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
// // //   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
// // //   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
// // //   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
// // // ];

// // // const Solutions = () => {
// // //   const [headerRef, headerInView] = useInView();

// // //   return (
// // //     <section className="section-padding bg-gradient-to-b from-white to-gray-50">
// // //       <div className="container-custom">
// // //         {/* Header with fade-up */}
// // //         <div
// // //           ref={headerRef}
// // //           className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
// // //           style={{
// // //             opacity: headerInView ? 1 : 0,
// // //             transform: headerInView ? "translateY(0)" : "translateY(30px)",
// // //           }}
// // //         >
// // //           <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">What We Deliver</span>
// // //           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
// // //             Engineered <span className="text-amber-500">Solutions</span>
// // //           </h2>
// // //           <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
// // //           <p className="text-gray-600 mt-4 text-lg">
// // //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// // //           </p>
// // //         </div>

// // //         {/* 3‑column grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {solutions.map((sol, idx) => (
// // //             <SolutionCard key={sol.id} solution={sol} index={idx} />
// // //           ))}
// // //         </div>

// // //         {/* Optional CTA at bottom */}
// // //         <div className="text-center mt-16">
// // //           <Link
// // //             to="/contact"
// // //             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-all hover:shadow-lg"
// // //           >
// // //             Discuss your project
// // //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// // //             </svg>
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Solutions;


// // import { useEffect, useRef, useState } from "react";
// // import { FaOilCan } from "react-icons/fa";
// // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // import { SiTensorflow } from "react-icons/si";
// // import { Link } from "react-router-dom";

// // // Custom hook for scroll animations
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
// //       { threshold: 0.1, ...options }
// //     );
// //     observer.observe(el);
// //     return () => observer.disconnect();
// //   }, [options]);

// //   return [ref, inView];
// // }

// // // Solution card with colours driven by CSS variables
// // function SolutionCard({ solution, index }) {
// //   const [ref, inView] = useInView();
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
// //       <Link
// //         to={solution.path}
// //         className="group block p-6 rounded-2xl border border-gray-100 bg-white hover:border-[var(--primery)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
// //       >
// //         {/* Icon with animated background */}
// //         <div className="relative mb-5">
// //           <div
// //             className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"
// //             style={{ width: "56px", height: "56px", backgroundColor: "rgba(245, 180, 0, 0.1)" }}
// //           />
// //           <div className="relative text-4xl group-hover:scale-110 transition-transform duration-300" style={{ color: "var(--primery)" }}>
// //             {solution.icon}
// //           </div>
// //         </div>

// //         {/* ID badge */}
// //         <div className="text-xs font-mono mb-2" style={{ color: "var(--primery-dark)" }}>
// //           {solution.id}
// //         </div>

// //         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
// //           {solution.name}
// //         </h3>
// //         <p className="text-gray-500 text-sm leading-relaxed mb-4">{solution.desc}</p>

// //         {/* Arrow link */}
// //         <span className="inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0" style={{ color: "var(--primery)" }}>
// //           Learn more
// //           <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //           </svg>
// //         </span>
// //       </Link>
// //     </div>
// //   );
// // }

// // const solutions = [
// //   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
// //   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
// //   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
// //   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
// //   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
// //   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
// // ];

// // const Solutions = () => {
// //   const [headerRef, headerInView] = useInView();

// //   return (
// //     <section className="section-padding bg-gradient-to-b from-white to-gray-50">
// //       <div className="container-custom">
// //         {/* Header */}
// //         <div
// //           ref={headerRef}
// //           className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
// //           style={{
// //             opacity: headerInView ? 1 : 0,
// //             transform: headerInView ? "translateY(0)" : "translateY(30px)",
// //           }}
// //         >
// //           <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--primery)" }}>
// //             What We Deliver
// //           </span>
// //           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
// //             Engineered <span style={{ color: "var(--primery)" }}>Solutions</span>
// //           </h2>
// //           <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: "var(--primery)" }} />
// //           <p className="text-gray-600 mt-4 text-lg">
// //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// //           </p>
// //         </div>

// //         {/* 3‑column grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {solutions.map((sol, idx) => (
// //             <SolutionCard key={sol.id} solution={sol} index={idx} />
// //           ))}
// //         </div>

// //         {/* Bottom CTA – using btn-primary class from your global CSS */}
// //         <div className="text-center mt-16">
// //           <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
// //             Discuss your project
// //             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //             </svg>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Solutions;


// import { useEffect, useRef, useState } from "react";
// import { FaOilCan } from "react-icons/fa";
// import { GiPipes, GiChemicalTank } from "react-icons/gi";
// import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// import { SiTensorflow } from "react-icons/si";
// import { Link } from "react-router-dom";

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
//       { threshold: 0.1, ...options }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, inView];
// }

// function SolutionCard({ solution, index }) {
//   const [ref, inView] = useInView();
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
//         to={solution.path}
//         className="group block p-6 rounded-2xl border border-gray-100 bg-white hover:border-[var(--primery)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//       >
//         {/* Icon with golden circle background on hover */}
//         <div className="relative mb-5">
//           <div
//             className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"
//             style={{ width: "56px", height: "56px", backgroundColor: "rgba(245, 180, 0, 0.1)" }}
//           />
//           <div className="relative text-4xl group-hover:scale-110 transition-transform duration-300" style={{ color: "var(--primery)" }}>
//             {solution.icon}
//           </div>
//         </div>

//         {/* ID badge */}
//         <div className="text-xs font-mono mb-2" style={{ color: "var(--primery-dark)" }}>
//           {solution.id}
//         </div>

//         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
//           {solution.name}
//         </h3>
//         <p className="text-gray-500 text-sm leading-relaxed mb-4">{solution.desc}</p>

//         {/* Arrow link */}
//         <span className="inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0" style={{ color: "var(--primery)" }}>
//           Learn more
//           <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </span>
//       </Link>
//     </div>
//   );
// }

// const solutions = [
//   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
//   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
//   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
//   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
//   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
//   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
// ];

// const Solutions = () => {
//   const [headerRef, headerInView] = useInView();

//   return (
//     <section className="section-padding bg-gradient-to-b from-white to-gray-50">
//       <div className="container-custom">
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
//           style={{
//             opacity: headerInView ? 1 : 0,
//             transform: headerInView ? "translateY(0)" : "translateY(30px)",
//           }}
//         >
//           <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--primery)" }}>
//             What We Deliver
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
//             Engineered <span style={{ color: "var(--primery)" }}>Solutions</span>
//           </h2>
//           <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: "var(--primery)" }} />
//           <p className="text-gray-600 mt-4 text-lg">
//             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {solutions.map((sol, idx) => (
//             <SolutionCard key={sol.id} solution={sol} index={idx} />
//           ))}
//         </div>

//         {/* CTA button using global .btn-primary class */}
//         <div className="text-center mt-16">
//           <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
//             Discuss your project
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;

// import { useEffect, useRef, useState } from "react";
// import { FaOilCan } from "react-icons/fa";
// import { GiPipes, GiChemicalTank } from "react-icons/gi";
// import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// import { SiTensorflow } from "react-icons/si";
// import { Link } from "react-router-dom";

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
//       { threshold: 0.1, ...options }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, inView];
// }

// function SolutionCard({ solution, index }) {
//   const [ref, inView] = useInView();
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
//         to={solution.path}
//         className="group block h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//       >
//         {/* Icon with gradient circular background */}
//         <div className="relative mb-5">
//           <div
//             className="absolute inset-0 rounded-full transition-all duration-500 scale-0"
//             style={{
//               width: "60px",
//               height: "60px",
//               background: "linear-gradient(135deg, rgba(245,180,0,0.15) 0%, rgba(245,180,0,0.05) 100%)",
//             }}
//           />
//           <div
//             className="relative text-4xl group-hover:scale-100 transition-transform duration-300"
//             style={{ color: "var(--primery)" }}
//           >
//             {solution.icon}
//           </div>
//         </div>

//         {/* ID badge – styled as a subtle chip */}
//         <div
//           className="inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded-full mb-3"
//           style={{ backgroundColor: "rgba(245,180,0,0.1)", color: "var(--primery-dark)" }}
//         >
//           {solution.id}
//         </div>

//         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
//           {solution.name}
//         </h3>
//         <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{solution.desc}</p>

//         {/* Arrow link – always visible but subtle, becomes more prominent on hover */}
//         <span
//           className="inline-flex items-center text-sm font-medium transition-all duration-300"
//           style={{ color: "var(--primery)", opacity: 0.7 }}
//         >
//           Learn more
//           <svg
//             className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </span>
//       </Link>
//     </div>
//   );
// }

// const solutions = [
//   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
//   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
//   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
//   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
//   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
//   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
// ];

// const Solutions = () => {
//   const [headerRef, headerInView] = useInView();

//   return (
//     <section className="py-20 bg-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
//           style={{
//             opacity: headerInView ? 1 : 0,
//             transform: headerInView ? "translateY(0)" : "translateY(30px)",
//           }}
//         >
//           <span
//             className="text-sm font-semibold tracking-wider uppercase inline-block px-3 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]"
//           >
//             What We Deliver
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
//             Engineered{" "}
//             <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
//               Solutions
//             </span>
//           </h2>
//           <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
//           <p className="text-gray-600 mt-6 text-lg max-w-xl mx-auto">
//             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((sol, idx) => (
//             <SolutionCard key={sol.id} solution={sol} index={idx} />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
//             style={{ backgroundColor: "var(--primery)", color: "#fff" }}
//           >
//             Discuss your project
//             <svg
//               className="w-4 h-4 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;


import { useEffect, useRef, useState } from "react";
import { FaOilCan } from "react-icons/fa";
import { GiPipes, GiChemicalTank } from "react-icons/gi";
import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { SiTensorflow } from "react-icons/si";
import { Link } from "react-router-dom";

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
      { threshold: 0.1, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function SolutionCard({ solution, index }) {
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
        to={solution.path}
        className="group block h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
      >
        {/* Large background number (01, 02, 03) – positioned top‑right */}
        <div
          className="absolute top-3 right-4 text-7xl font-black opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
          style={{ color: "var(--primery)" }}
        >
          {solution.id}
        </div>

        {/* Number badge (small, chip style) – now at top‑left */}
        <div
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-4"
          style={{ backgroundColor: "rgba(245,180,0,0.1)", color: "var(--primery-dark)" }}
        >
          {solution.id}
        </div>

        {/* Icon with hover scaling */}
        <div className="relative mb-4">
          <div
            className="absolute inset-0 rounded-full transition-all duration-500 scale-0"
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, rgba(245,180,0,0.15) 0%, rgba(245,180,0,0.05) 100%)",
            }}
          />
          <div
            className="relative text-4xl group-hover:scale-10 transition-transform duration-300"
            style={{ color: "var(--primery)" }}
          >
            {solution.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
          {solution.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{solution.desc}</p>

        {/* Arrow link */}
        <span className="inline-flex items-center text-sm font-medium transition-all duration-300 text-amber-600 opacity-100 group-hover:text-amber-700">
          Learn more
          <svg
            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </div>
  );
}

const solutions = [
  { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
  { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
  { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
  { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
  { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
  { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
];

const Solutions = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with fade‑in animation */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span
            className="text-sm font-semibold tracking-wider uppercase inline-block px-3 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]"
          >
            What We Deliver
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Engineered{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
          <p className="text-gray-600 mt-6 text-lg max-w-xl mx-auto">
            Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <SolutionCard key={sol.id} solution={sol} index={idx} />
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
            style={{ backgroundColor: "var(--primery)", color: "#fff" }}
          >
            Discuss your project
            <svg
              className="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;