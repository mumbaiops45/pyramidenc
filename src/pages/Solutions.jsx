// // // // import { useEffect, useRef, useState } from "react";
// // // // import { FaOilCan } from "react-icons/fa";
// // // // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // // // import { MdBiotech, MdOutlineEnergySavingsLeaf } from "react-icons/md";
// // // // import { SiTensorflow } from "react-icons/si";
// // // // import { Link } from "react-router-dom";

// // // // function useInView(options = {}) {
// // // //   const ref = useRef(null);
// // // //   const [inView, setInView] = useState(false);

// // // //   useEffect(() => {
// // // //     const el = ref.current;
// // // //     if (!el) return;
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) {
// // // //           setInView(true);
// // // //           observer.disconnect();
// // // //         }
// // // //       },
// // // //       { threshold: 0.1, ...options }
// // // //     );
// // // //     observer.observe(el);
// // // //     return () => observer.disconnect();
// // // //   }, [options]);

// // // //   return [ref, inView];
// // // // }

// // // // function SolutionCard({ solution, index }) {
// // // //   const [ref, inView] = useInView();
// // // //   const delay = index * 0.1;

// // // //   return (
// // // //     <div
// // // //       ref={ref}
// // // //       className="transition-all duration-700"
// // // //       style={{
// // // //         opacity: inView ? 1 : 0,
// // // //         transform: inView ? "translateY(0)" : "translateY(40px)",
// // // //         transitionDelay: `${delay}s`,
// // // //       }}
// // // //     >
// // // //       <Link
// // // //         to={solution.path}
// // // //         className="group block h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
// // // //       >
// // // //         {/* Large background number (01, 02, 03) – positioned top‑right */}
// // // //         <div
// // // //           className="absolute top-3 right-4 text-7xl font-black opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
// // // //           style={{ color: "var(--primery)" }}
// // // //         >
// // // //           {solution.id}
// // // //         </div>

// // // //         {/* Number badge (small, chip style) – now at top‑left */}
// // // //         <div
// // // //           className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-4"
// // // //           style={{ backgroundColor: "rgba(245,180,0,0.1)", color: "var(--primery-dark)" }}
// // // //         >
// // // //           {solution.id}
// // // //         </div>

// // // //         {/* Icon with hover scaling */}
// // // //         <div className="relative mb-4">
// // // //           <div
// // // //             className="absolute inset-0 rounded-full transition-all duration-500 scale-0"
// // // //             style={{
// // // //               width: "56px",
// // // //               height: "56px",
// // // //               background: "linear-gradient(135deg, rgba(245,180,0,0.15) 0%, rgba(245,180,0,0.05) 100%)",
// // // //             }}
// // // //           />
// // // //           <div
// // // //             className="relative text-4xl group-hover:scale-10 transition-transform duration-300"
// // // //             style={{ color: "var(--primery)" }}
// // // //           >
// // // //             {solution.icon}
// // // //           </div>
// // // //         </div>

// // // //         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
// // // //           {solution.name}
// // // //         </h3>
// // // //         <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{solution.desc}</p>

// // // //         {/* Arrow link */}
// // // //         <span className="inline-flex items-center text-sm font-medium transition-all duration-300 text-amber-600 opacity-100 group-hover:text-amber-700">
// // // //           Learn more
// // // //           <svg
// // // //             className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             viewBox="0 0 24 24"
// // // //           >
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // // //           </svg>
// // // //         </span>
// // // //       </Link>
// // // //     </div>
// // // //   );
// // // // }

// // // // const solutions = [
// // // //   { id: "01", name: "Oil & Gas", desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.", icon: <FaOilCan />, path: "/products/oilgas" },
// // // //   { id: "02", name: "Midstream", desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.", icon: <GiPipes />, path: "/products/midstream" },
// // // //   { id: "03", name: "Bio Chemicals", desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.", icon: <MdBiotech />, path: "/products/biochemicals" },
// // // //   { id: "04", name: "Syngas Derivatives", desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.", icon: <GiChemicalTank />, path: "/products/syngas" },
// // // //   { id: "05", name: "Decarbonization", desc: "Carbon capture, utilization and storage enabling the energy transition pathway.", icon: <MdOutlineEnergySavingsLeaf />, path: "/products/decarbonization" },
// // // //   { id: "06", name: "Digitalization", desc: "Digital twin and AI-driven process optimization for intelligent plant management.", icon: <SiTensorflow />, path: "/products/digitalization" },
// // // // ];

// // // // const Solutions = () => {
// // // //   const [headerRef, headerInView] = useInView();

// // // //   return (
// // // //     <section className="py-20 bg-gray-100 overflow-hidden">
// // // //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// // // //         {/* Header with fade‑in animation */}
// // // //         <div
// // // //           ref={headerRef}
// // // //           className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700"
// // // //           style={{
// // // //             opacity: headerInView ? 1 : 0,
// // // //             transform: headerInView ? "translateY(0)" : "translateY(30px)",
// // // //           }}
// // // //         >
// // // //           <span
// // // //             className="text-sm font-semibold tracking-wider uppercase inline-block px-3 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]"
// // // //           >
// // // //             What We Deliver
// // // //           </span>
// // // //           <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
// // // //             Engineered{" "}
// // // //             <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
// // // //               Solutions
// // // //             </span>
// // // //           </h2>
// // // //           <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
// // // //           <p className="text-gray-600 mt-6 text-lg max-w-xl mx-auto">
// // // //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// // // //           </p>
// // // //         </div>

// // // //         {/* Grid of cards */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //           {solutions.map((sol, idx) => (
// // // //             <SolutionCard key={sol.id} solution={sol} index={idx} />
// // // //           ))}
// // // //         </div>

// // // //         {/* CTA button */}
// // // //         <div className="text-center mt-16">
// // // //           <Link
// // // //             to="/contact"
// // // //             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:gap-3 hover:shadow-lg"
// // // //             style={{ backgroundColor: "var(--primery)", color: "#fff" }}
// // // //           >
// // // //             Discuss your project
// // // //             <svg
// // // //               className="w-4 h-4 transition-transform duration-300"
// // // //               fill="none"
// // // //               stroke="currentColor"
// // // //               viewBox="0 0 24 24"
// // // //             >
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// // // //             </svg>
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Solutions;

// // // import { useEffect, useRef, useState } from "react";
// // // import { FaOilCan, FaCogs, FaIndustry } from "react-icons/fa";
// // // import { GiPipes, GiChemicalTank, GiGearHammer } from "react-icons/gi";
// // // import { MdBiotech, MdOutlineEnergySavingsLeaf, MdOutlineSettingsRemote } from "react-icons/md";
// // // import { SiTensorflow } from "react-icons/si";
// // // import { Link } from "react-router-dom";

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

// // // // Merged solutions: all from both arrays, no duplicates
// // // const solutions = [
// // //   {
// // //     id: "01",
// // //     name: "Modular Fabrication",
// // //     desc: "Advanced process modules with port-side heavy cargo handling.",
// // //     icon: <FaIndustry />,
// // //     path: "/products/modular-fabrication",
// // //     image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
// // //   },
  
// // //   {
// // //     id: "03",
// // //     name: "Decarbonization",
// // //     desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
// // //     icon: <MdOutlineEnergySavingsLeaf />,
// // //     path: "/products/decarbonization",
// // //     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
// // //   },
// // //   {
// // //     id: "04",
// // //     name: "Digitalization",
// // //     desc: "OPTIMAX® enables remote monitoring & control systems.",
// // //     icon: <MdOutlineSettingsRemote />,
// // //     path: "/products/digitalization",
// // //     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
// // //   },
// // //   {
// // //     id: "05",
// // //     name: "Oil & Gas",
// // //     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
// // //     icon: <FaOilCan />,
// // //     path: "/products/oilgas",
// // //     image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
// // //   },
// // //   {
// // //     id: "06",
// // //     name: "Midstream",
// // //     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
// // //     icon: <GiPipes />,
// // //     path: "/products/midstream",
// // //     image: "https://images.unsplash.com/photo-1581092335871-4c3c4b5d6f7e?w=600&h=400&fit=crop",
// // //   },
// // //   {
// // //     id: "07",
// // //     name: "Bio Chemicals",
// // //     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
// // //     icon: <MdBiotech />,
// // //     path: "/products/biochemicals",
// // //     image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
// // //   },
// // //   {
// // //     id: "08",
// // //     name: "Syngas Derivatives",
// // //     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
// // //     icon: <GiChemicalTank />,
// // //     path: "/products/syngas",
// // //     image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop",
// // //   },
// // // ];

// // // function SolutionCard({ solution, index }) {
// // //   const [ref, inView] = useInView();
// // //   const delay = index * 0.1;

// // //   return (
// // //     <div
// // //       ref={ref}
// // //       className="transition-all duration-700"
// // //       style={{
// // //         opacity: inView ? 1 : 0,
// // //         transform: inView ? "translateY(0)" : "translateY(30px)",
// // //         transitionDelay: `${delay}s`,
// // //       }}
// // //     >
// // //       <Link
// // //         to={solution.path}
// // //         className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full"
// // //       >
// // //         {/* Image container – 16:9 widescreen */}
// // //         <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200">
// // //           <img
// // //             src={solution.image}
// // //             alt={solution.name}
// // //             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// // //           />
// // //           {/* Floating icon badge on hover */}
// // //           <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
// // //             <div className="text-xl" style={{ color: "var(--primery)" }}>
// // //               {solution.icon}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Info section – balanced padding and text sizes */}
// // //         <div className="p-4">
// // //           {/* ID chip */}
// // //           <div
// // //             className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-mono font-bold mb-2"
// // //             style={{
// // //               backgroundColor: "rgba(245,180,0,0.1)",
// // //               color: "var(--primery-dark)",
// // //               border: "1px solid rgba(245,180,0,0.2)",
// // //             }}
// // //           >
// // //             {solution.id}
// // //           </div>

// // //           <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--primery)] transition-colors">
// // //             {solution.name}
// // //           </h3>
// // //           <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
// // //             {solution.desc}
// // //           </p>

// // //           {/* Explore link */}
// // //           <div className="mt-3 flex items-center">
// // //             <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-all duration-300 gap-1 group-hover:gap-2">
// // //               <span className="border-b border-transparent group-hover:border-amber-600 pb-0.5">
// // //                 Learn more
// // //               </span>
// // //               <svg
// // //                 className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </span>
// // //           </div>
// // //         </div>
// // //       </Link>
// // //     </div>
// // //   );
// // // }

// // // const Solutions = () => {
// // //   const [headerRef, headerInView] = useInView();

// // //   return (
// // //     <section className="py-16 bg-gray-100 overflow-hidden">
// // //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// // //         {/* Header – clean and readable */}
// // //         <div  
// // //           ref={headerRef}
// // //           className="text-center max-w-2xl mx-auto mb-12 transition-all duration-700"
// // //           style={{
// // //             opacity: headerInView ? 1 : 0,
// // //             transform: headerInView ? "translateY(0)" : "translateY(20px)",
// // //           }}
// // //         >
// // //           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primery)]/5 border border-[var(--primery)]/20">
// // //             <span className="relative flex h-2 w-2">
// // //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primery)] opacity-75"></span>
// // //               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primery)]"></span>
// // //             </span>
// // //             <span className="text-xs font-semibold tracking-wider uppercase text-[var(--primery)]">
// // //               What We Deliver
// // //             </span>
// // //           </div>
// // //           <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
// // //             Engineered{" "}
// // //             <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
// // //               Solutions
// // //             </span>
// // //           </h2>
// // //           <div className="w-16 h-0.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
// // //           <p className="text-gray-600 mt-4 text-base max-w-xl mx-auto">
// // //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// // //           </p>
// // //         </div>

// // //         {/* Card grid – responsive */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {solutions.map((solution, idx) => (
// // //             <SolutionCard key={solution.id} solution={solution} index={idx} />
// // //           ))}
// // //         </div>

// // //         {/* CTA button */}
// // //         <div className="text-center mt-12">
// // //           <Link
// // //             to="/contact"
// // //             className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-md"
// // //             style={{ backgroundColor: "var(--primery)", color: "#fff" }}
// // //           >
// // //             Discuss your project
// // //             <svg
// // //               className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// // //               fill="none"
// // //               stroke="currentColor"
// // //               viewBox="0 0 24 24"
// // //             >
// // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// // //             </svg>
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Solutions;

// // import { useEffect, useRef, useState } from "react";
// // import { FaOilCan, FaIndustry } from "react-icons/fa";
// // import { GiPipes, GiChemicalTank } from "react-icons/gi";
// // import { MdBiotech, MdOutlineEnergySavingsLeaf, MdOutlineSettingsRemote } from "react-icons/md";
// // import { Link } from "react-router-dom";

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

// // // Solutions with sequential IDs (01 to 07) – no cards added, only renumbered
// // const solutions = [
 
// //   {
// //     id: "02",
// //     name: "Decarbonization",
// //     desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
// //     icon: <MdOutlineEnergySavingsLeaf />,
// //     path: "/products/decarbonization",
// //     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
// //   },
// //   {
// //     id: "03",
// //     name: "Digitalization",
// //     desc: "OPTIMAX® enables remote monitoring & control systems.",
// //     icon: <MdOutlineSettingsRemote />,
// //     path: "/products/digitalization",
// //     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
// //   },
// //   {
// //     id: "04",
// //     name: "Oil & Gas",
// //     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
// //     icon: <FaOilCan />,
// //     path: "/products/oilgas",
// //     image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
// //   },
// //   {
// //     id: "05",
// //     name: "Midstream",
// //     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
// //     icon: <GiPipes />,
// //     path: "/products/midstream",
// //     image: "https://images.unsplash.com/photo-1581092335871-4c3c4b5d6f7e?w=600&h=400&fit=crop",
// //   },
// //   {
// //     id: "06",
// //     name: "Bio Chemicals",
// //     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
// //     icon: <MdBiotech />,
// //     path: "/products/biochemicals",
// //     image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
// //   },
// //   {
// //     id: "07",
// //     name: "Syngas Derivatives",
// //     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
// //     icon: <GiChemicalTank />,
// //     path: "/products/syngas",
// //     image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop",
// //   },
// // ];

// // function SolutionCard({ solution, index }) {
// //   const [ref, inView] = useInView();
// //   const delay = index * 0.1;

// //   return (
// //     <div
// //       ref={ref}
// //       className="transition-all duration-700"
// //       style={{
// //         opacity: inView ? 1 : 0,
// //         transform: inView ? "translateY(0)" : "translateY(30px)",
// //         transitionDelay: `${delay}s`,
// //       }}
// //     >
// //       <Link
// //         to={solution.path}
// //         className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full"
// //       >
// //         {/* Image container – 16:9 widescreen */}
// //         <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200">
// //           <img
// //             src={solution.image}
// //             alt={solution.name}
// //             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
// //           />
// //           {/* Floating icon badge on hover */}
// //           <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
// //             <div className="text-xl" style={{ color: "var(--primery)" }}>
// //               {solution.icon}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Info section – balanced padding and text sizes */}
// //         <div className="p-4">
// //           {/* ID chip */}
// //           <div
// //             className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-mono font-bold mb-2"
// //             style={{
// //               backgroundColor: "rgba(245,180,0,0.1)",
// //               color: "var(--primery-dark)",
// //               border: "1px solid rgba(245,180,0,0.2)",
// //             }}
// //           >
// //             {solution.id}
// //           </div>

// //           <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--primery)] transition-colors">
// //             {solution.name}
// //           </h3>
// //           <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
// //             {solution.desc}
// //           </p>

// //           {/* Explore link */}
// //           <div className="mt-3 flex items-center">
// //             <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-all duration-300 gap-1 group-hover:gap-2">
// //               <span className="border-b border-transparent group-hover:border-amber-600 pb-0.5">
// //                 Learn more
// //               </span>
// //               <svg
// //                 className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //               </svg>
// //             </span>
// //           </div>
// //         </div>
// //       </Link>
// //     </div>
// //   );
// // }

// // const Solutions = () => {
// //   const [headerRef, headerInView] = useInView();

// //   return (
// //     <section className="py-16 bg-gray-100 overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// //         {/* Header – clean and readable */}
// //         <div
// //           ref={headerRef}
// //           className="text-center max-w-2xl mx-auto mb-12 transition-all duration-700"
// //           style={{
// //             opacity: headerInView ? 1 : 0,
// //             transform: headerInView ? "translateY(0)" : "translateY(20px)",
// //           }}
// //         >
// //           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primery)]/5 border border-[var(--primery)]/20">
// //             <span className="relative flex h-2 w-2">
// //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primery)] opacity-75"></span>
// //               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primery)]"></span>
// //             </span>
// //             <span className="text-xs font-semibold tracking-wider uppercase text-[var(--primery)]">
// //               What We Deliver
// //             </span>
// //           </div>
// //           <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
// //             Engineered{" "}
// //             <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
// //               Solutions
// //             </span>
// //           </h2>
// //           <div className="w-16 h-0.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
// //           <p className="text-gray-600 mt-4 text-base max-w-xl mx-auto">
// //             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
// //           </p>
// //         </div>

// //         {/* Card grid – responsive */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {solutions.map((solution, idx) => (
// //             <SolutionCard key={solution.id} solution={solution} index={idx} />
// //           ))}
// //         </div>

// //         {/* CTA button */}
// //         <div className="text-center mt-12">
// //           <Link
// //             to="/contact"
// //             className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-md"
// //             style={{ backgroundColor: "var(--primery)", color: "#fff" }}
// //           >
// //             Discuss your project
// //             <svg
// //               className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
// //             </svg>
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Solutions;


// import { useEffect, useRef, useState } from "react";
// import { FaOilCan, FaIndustry } from "react-icons/fa";
// import { GiPipes, GiChemicalTank } from "react-icons/gi";
// import { MdBiotech, MdOutlineEnergySavingsLeaf, MdOutlineSettingsRemote } from "react-icons/md";
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

// // Solutions – keep as user provided (starting from id "02")
// const solutions = [
//   {
//     id: "02",
//     name: "Decarbonization",
//     desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
//     icon: <MdOutlineEnergySavingsLeaf />,
//     path: "/products/decarbonization",
//     image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
//   },
//   {
//     id: "03",
//     name: "Digitalization",
//     desc: "OPTIMAX® enables remote monitoring & control systems.",
//     icon: <MdOutlineSettingsRemote />,
//     path: "/products/digitalization",
//     image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
//   },
//   {
//     id: "04",
//     name: "Oil & Gas",
//     desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
//     icon: <FaOilCan />,
//     path: "/products/oilgas",
//     image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
//   },
//   {
//     id: "05",
//     name: "Midstream",
//     desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
//     icon: <GiPipes />,
//     path: "/products/midstream",
//     image: "https://images.unsplash.com/photo-1581092335871-4c3c4b5d6f7e?w=600&h=400&fit=crop",
//   },
//   {
//     id: "06",
//     name: "Bio Chemicals",
//     desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
//     icon: <MdBiotech />,
//     path: "/products/biochemicals",
//     image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
//   },
//   {
//     id: "07",
//     name: "Syngas Derivatives",
//     desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
//     icon: <GiChemicalTank />,
//     path: "/products/syngas",
//     image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop",
//   },
// ];

// function SolutionCard({ solution, index }) {
//   const [ref, inView] = useInView();
//   const delay = index * 0.1;

//   return (
//     <div
//       ref={ref}
//       className="transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(30px)",
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <Link
//         to={solution.path}
//         className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full flex flex-col border border-gray-200"
//       >
//         {/* Image container – 16:9 widescreen */}
//         <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200 flex-shrink-0">
//           <img
//             src={solution.image}
//             alt={solution.name}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//           {/* Floating icon badge on hover */}
//           <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//             <div className="text-xl" style={{ color: "var(--primery)" }}>
//               {solution.icon}
//             </div>
//           </div>
//         </div>

//         {/* Info section – balanced padding and text sizes, grows to fill space */}
//         <div className="p-4 flex flex-col flex-grow">
//           {/* ID chip */}
//           <div
//             className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-mono font-bold mb-2 self-start"
//             style={{
//               backgroundColor: "rgba(245,180,0,0.1)",
//               color: "var(--primery-dark)",
//               border: "1px solid rgba(245,180,0,0.2)",
//             }}
//           >
//             {solution.id}
//           </div>

//           <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--primery)] transition-colors">
//             {solution.name}
//           </h3>
//           <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-grow">
//             {solution.desc}
//           </p>

//           {/* Explore link */}
//           <div className="mt-3 flex items-center">
//             <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-all duration-300 gap-1 group-hover:gap-2">
//               <span className="border-b border-transparent group-hover:border-amber-600 pb-0.5">
//                 Learn more
//               </span>
//               <svg
//                 className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }

// const Solutions = () => {
//   const [headerRef, headerInView] = useInView();

//   return (
//     <section className="py-16 bg-gray-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header – clean and readable */}
//         <div
//           ref={headerRef}
//           className="text-center max-w-2xl mx-auto mb-12 transition-all duration-700"
//           style={{
//             opacity: headerInView ? 1 : 0,
//             transform: headerInView ? "translateY(0)" : "translateY(20px)",
//           }}
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primery)]/5 border border-[var(--primery)]/20">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primery)] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primery)]"></span>
//             </span>
//             <span className="text-xs font-semibold tracking-wider uppercase text-[var(--primery)]">
//               What We Deliver
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
//             Engineered{" "}
//             <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
//               Solutions
//             </span>
//           </h2>
//           <div className="w-16 h-0.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
//           <p className="text-gray-600 mt-4 text-base max-w-xl mx-auto">
//             Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
//           </p>
//         </div>

//         {/* Card grid – responsive */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {solutions.map((solution, idx) => (
//             <SolutionCard key={solution.id} solution={solution} index={idx} />
//           ))}
//         </div>

//         {/* CTA button */}
//         <div className="text-center mt-12">
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-md"
//             style={{ backgroundColor: "var(--primery)", color: "#fff" }}
//           >
//             Discuss your project
//             <svg
//               className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
import { MdBiotech, MdOutlineEnergySavingsLeaf, MdOutlineSettingsRemote } from "react-icons/md";
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

// Updated solutions with working images (especially Midstream)
const solutions = [
  {
    id: "02",
    name: "Decarbonization",
    desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
    icon: <MdOutlineEnergySavingsLeaf />,
    path: "/products/decarbonization",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
  {
    id: "03",
    name: "Digitalization",
    desc: "OPTIMAX® enables remote monitoring & control systems.",
    icon: <MdOutlineSettingsRemote />,
    path: "/products/digitalization",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: "04",
    name: "Oil & Gas",
    desc: "Upstream and downstream processing with integrated separation, treating, and stabilization systems.",
    icon: <FaOilCan />,
    path: "/products/oilgas",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
  },
  {
    id: "05",
    name: "Midstream",
    desc: "Pipeline, compression, and NGL recovery systems for maximum efficiency and reliability.",
    icon: <GiPipes />,
    path: "/products/midstream",
    // ✅ Fixed: working pipeline image
    image: "/midstream.jpg",
  },
  {
    id: "06",
    name: "Bio Chemicals",
    desc: "Bio-refinery technologies converting biomass into high-value chemicals and fuels.",
    icon: <MdBiotech />,
    path: "/products/biochemicals",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
  },
  {
    id: "07",
    name: "Syngas Derivatives",
    desc: "Ammonia, methanol, and hydrogen production through advanced syngas conversion.",
    icon: <GiChemicalTank />,
    path: "/products/syngas",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop",
  },
];

function SolutionCard({ solution, index }) {
  const [ref, inView] = useInView();
  const delay = index * 0.1;

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}s`,
      }}
    >
      <Link
        to={solution.path}
        className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full flex flex-col border border-gray-200"
      >
        {/* Image container – 16:9 widescreen */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src={solution.image}
            alt={solution.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback image if the original fails to load
              e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found";
            }}
          />
          {/* Floating icon badge on hover */}
          <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-xl" style={{ color: "var(--primery)" }}>
              {solution.icon}
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="p-4 flex flex-col flex-grow">
          <div
            className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-xs font-mono font-bold mb-2 self-start"
            style={{
              backgroundColor: "rgba(245,180,0,0.1)",
              color: "var(--primery-dark)",
              border: "1px solid rgba(245,180,0,0.2)",
            }}
          >
            {solution.id}
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--primery)] transition-colors">
            {solution.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-grow">
            {solution.desc}
          </p>
          <div className="mt-3 flex items-center">
            <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-all duration-300 gap-1 group-hover:gap-2">
              <span className="border-b border-transparent group-hover:border-amber-600 pb-0.5">
                Learn more
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

const Solutions = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primery)]/5 border border-[var(--primery)]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primery)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primery)]"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--primery)]">
              What We Deliver
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-gray-900">
            Engineered{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)]" />
          <p className="text-gray-600 mt-4 text-base max-w-xl mx-auto">
            Across the entire hydrocarbon value chain — from wellhead to refinery, from carbon to chemicals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => (
            <SolutionCard key={solution.id} solution={solution} index={idx} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 hover:shadow-md"
            style={{ backgroundColor: "var(--primery)", color: "#fff" }}
          >
            Discuss your project
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;