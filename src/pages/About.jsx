// // // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // // import { GiGears, GiFactory } from "react-icons/gi";
// // // // // // import { IoSettingsSharp } from "react-icons/io5";
// // // // // // import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// // // // // // import { MdEngineering } from "react-icons/md";

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
// // // // // // // Animated Card Component (scroll-triggered)
// // // // // // // ============================================================
// // // // // // function AnimatedCard({ icon, title, description, index }) {
// // // // // //   const [ref, inView] = useInView();
// // // // // //   const delay = index * 0.1;

// // // // // //   return (
// // // // // //     <div
// // // // // //       ref={ref}
// // // // // //       className="transition-all duration-700"
// // // // // //       style={{
// // // // // //         opacity: inView ? 1 : 0,
// // // // // //         transform: inView ? "translateY(0)" : "translateY(40px)",
// // // // // //         transitionDelay: `${delay}s`,
// // // // // //       }}
// // // // // //     >
// // // // // //       <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
// // // // // //         {/* Icon with animated background circle */}
// // // // // //         <div className="relative mb-4">
// // // // // //           <div className="absolute inset-0 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100" style={{ width: "56px", height: "56px" }}></div>
// // // // // //           <div className="relative text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
// // // // // //             {icon}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
// // // // // //           {title}
// // // // // //         </h3>
// // // // // //         <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // const About = () => {
// // // // // //   const animationStyles = `
// // // // // //     @keyframes fadeUp {
// // // // // //       0% { opacity: 0; transform: translateY(30px); }
// // // // // //       100% { opacity: 1; transform: translateY(0); }
// // // // // //     }
// // // // // //     @keyframes fadeLeft {
// // // // // //       0% { opacity: 0; transform: translateX(-30px); }
// // // // // //       100% { opacity: 1; transform: translateX(0); }
// // // // // //     }
// // // // // //     @keyframes float {
// // // // // //       0%, 100% { transform: translateY(0px) rotate(0deg); }
// // // // // //       50% { transform: translateY(-20px) rotate(3deg); }
// // // // // //     }
// // // // // //     .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // // // // //     .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // // // // //     .animate-float { animation: float 6s ease-in-out infinite; }
// // // // // //     .delay-100 { animation-delay: 0.1s; }
// // // // // //     .delay-200 { animation-delay: 0.2s; }
// // // // // //     .delay-300 { animation-delay: 0.3s; }
// // // // // //     .delay-400 { animation-delay: 0.4s; }
// // // // // //   `;

// // // // // //   const cardsData = [
// // // // // //     {
// // // // // //       icon: <GiGears className="text-3xl" />,
// // // // // //       title: "Technologies",
// // // // // //       description: "27+ technologies across conventional & renewable sectors with in-house R&D labs.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: <MdEngineering className="text-3xl" />,
// // // // // //       title: "Engineering",
// // // // // //       description: "Over a million manhours of multidisciplinary engineering expertise.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: <GiFactory className="text-3xl" />,
// // // // // //       title: "Modular Fabrication",
// // // // // //       description: "Advanced process modules with port-side heavy cargo handling.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: <IoSettingsSharp className="text-3xl" />,
// // // // // //       title: "TEPC Services",
// // // // // //       description: "End-to-end delivery with guaranteed process performance.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: <FaLeaf className="text-3xl" />,
// // // // // //       title: "Decarbonization",
// // // // // //       description: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: <FaLaptopCode className="text-3xl" />,
// // // // // //       title: "Digitalization",
// // // // // //       description: "OPTIMAX® enables remote monitoring & control systems.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100/30 to-white">
// // // // // //       <style>{animationStyles}</style>

// // // // // //       {/* Floating background decorations (golden tones) */}
// // // // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // // // //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-40 animate-float"></div>
// // // // // //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
// // // // // //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
// // // // // //       </div>

// // // // // //       {/* Main content section */}
// // // // // //       <section className="relative z-10 py-16 px-6">
// // // // // //         <div className="max-w-7xl mx-auto">
// // // // // //           {/* Section header */}
// // // // // //           <div className="text-center mb-12">
// // // // // //             <div className="flex items-center justify-center gap-2 mb-3">
// // // // // //               <span className="w-10 h-0.5 rounded bg-amber-500"></span>
// // // // // //               <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-600 animate-fadeLeft">
// // // // // //                 Who We Are
// // // // // //               </span>
// // // // // //             </div>
// // // // // //             <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 animate-fadeUp delay-100">
// // // // // //               Pioneering Energy Transition
// // // // // //             </h2>
// // // // // //           </div>

// // // // // //           {/* Description card */}
// // // // // //           <div
// // // // // //             className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-6 lg:p-10 mb-14 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
// // // // // //           >
// // // // // //             <p className="text-gray-700 leading-relaxed text-sm lg:text-base max-w-4xl mx-auto text-center">
// // // // // //               Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
// // // // // //               comprising research, engineering, automation, digitalization, manufacturing and construction firms.
// // // // // //               We specialize in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals,
// // // // // //               delivering sustainable and low carbon processing solutions.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {/* Capabilities Grid */}
// // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //             {cardsData.map((card, idx) => (
// // // // // //               <AnimatedCard
// // // // // //                 key={idx}
// // // // // //                 icon={card.icon}
// // // // // //                 title={card.title}
// // // // // //                 description={card.description}
// // // // // //                 index={idx}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           {/* Bottom Highlight */}
// // // // // //           <div className="mt-16 text-center">
// // // // // //             <div className="inline-block bg-white/70 backdrop-blur-sm border border-amber-200 rounded-full px-6 py-3 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1">
// // // // // //               <p className="text-gray-700 text-sm">
// // // // // //                 From concept to commissioning — we deliver complete engineering solutions.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default About;


// // // // // import React, { useEffect, useRef, useState } from "react";
// // // // // import { GiGears, GiFactory } from "react-icons/gi";
// // // // // import { IoSettingsSharp } from "react-icons/io5";
// // // // // import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// // // // // import { MdEngineering } from "react-icons/md";

// // // // // // ============================================================
// // // // // // Custom hook for scroll-triggered animations
// // // // // // ============================================================
// // // // // function useInView(options = {}) {
// // // // //   const ref = useRef(null);
// // // // //   const [inView, setInView] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const el = ref.current;
// // // // //     if (!el) return;
// // // // //     const observer = new IntersectionObserver(
// // // // //       ([entry]) => {
// // // // //         if (entry.isIntersecting) {
// // // // //           setInView(true);
// // // // //           observer.disconnect();
// // // // //         }
// // // // //       },
// // // // //       { threshold: 0.2, ...options }
// // // // //     );
// // // // //     observer.observe(el);
// // // // //     return () => observer.disconnect();
// // // // //   }, [options]);

// // // // //   return [ref, inView];
// // // // // }

// // // // // // ============================================================
// // // // // // Animated Grid Item (no cards – but with strong hover effects)
// // // // // // ============================================================
// // // // // function GridItem({ icon, title, description, index }) {
// // // // //   const [ref, inView] = useInView();
// // // // //   const delay = index * 0.1;

// // // // //   return (
// // // // //     <div
// // // // //       ref={ref}
// // // // //       className="group transition-all duration-1000"
// // // // //       style={{
// // // // //         opacity: inView ? 1 : 0,
// // // // //         transform: inView ? "translateY(0)" : "translateY(50px)",
// // // // //         transitionDelay: `${delay}s`,
// // // // //       }}
// // // // //     >
// // // // //       <div className="relative">
// // // // //         {/* Icon with floating animation on hover */}
// // // // //         <div className="text-amber-600 text-4xl mb-5 transition-all duration-500 group-hover:text-amber-500 group-hover:scale-105">
// // // // //           {icon}
// // // // //         </div>

// // // // //         {/* Animated underline that grows on hover */}
// // // // //         <div className="w-12 h-0.5 bg-amber-300 mb-4 transition-all duration-500 group-hover:w-20 group-hover:bg-amber-500"></div>

// // // // //         <h3 className="text-gray-900 font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-amber-700">
// // // // //           {title}
// // // // //         </h3>
// // // // //         <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
// // // // //           {description}
// // // // //         </p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // const About = () => {
// // // // //   const cardsData = [
// // // // //     {
// // // // //       icon: <GiGears />,
// // // // //       title: "Technologies",
// // // // //       description: "27+ technologies across conventional & renewable sectors with in-house R&D labs.",
// // // // //     },
// // // // //     {
// // // // //       icon: <MdEngineering />,
// // // // //       title: "Engineering",
// // // // //       description: "Over a million manhours of multidisciplinary engineering expertise.",
// // // // //     },
// // // // //     {
// // // // //       icon: <GiFactory />,
// // // // //       title: "Modular Fabrication",
// // // // //       description: "Advanced process modules with port-side heavy cargo handling.",
// // // // //     },
// // // // //     {
// // // // //       icon: <IoSettingsSharp />,
// // // // //       title: "TEPC Services",
// // // // //       description: "End-to-end delivery with guaranteed process performance.",
// // // // //     },
// // // // //     {
// // // // //       icon: <FaLeaf />,
// // // // //       title: "Decarbonization",
// // // // //       description: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
// // // // //     },
// // // // //     {
// // // // //       icon: <FaLaptopCode />,
// // // // //       title: "Digitalization",
// // // // //       description: "OPTIMAX® enables remote monitoring & control systems.",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6">
// // // // //       {/* Animated background pattern (subtle dots) */}
// // // // //       <div className="absolute inset-0 opacity-20 pointer-events-none">
// // // // //         <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"></div>
// // // // //       </div>

// // // // //       <div className="relative z-10 max-w-7xl mx-auto">
// // // // //         {/* Section header with fade-up and slide-in */}
// // // // //         <div className="text-center mb-16">
// // // // //           <div className="inline-block mb-4 overflow-hidden">
// // // // //             <span className="block text-xs font-semibold tracking-[5px] uppercase text-amber-600 animate-[slideUp_0.6s_ease-out]">
// // // // //               Who We Are
// // // // //             </span>
// // // // //             <div className="h-px w-full bg-amber-400 mt-1 transform origin-left animate-[scaleX_0.8s_ease-out]"></div>
// // // // //           </div>
// // // // //           <h2 className="text-4xl lg:text-5xl font-light text-gray-900 animate-[fadeUp_0.8s_ease-out]">
// // // // //             Pioneering <span className="font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Energy Transition</span>
// // // // //           </h2>
// // // // //         </div>

// // // // //         {/* Company description – elegant, no box */}
// // // // //         <div className="max-w-4xl mx-auto text-center mb-20 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
// // // // //           <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-medium">
// // // // //             Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
// // // // //             comprising research, engineering, automation, digitalization, manufacturing and construction firms.
// // // // //             We specialize in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals,
// // // // //             delivering sustainable and low carbon processing solutions.
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* 3‑column grid – clean, with strong entrance animations */}
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
// // // // //           {cardsData.map((card, idx) => (
// // // // //             <GridItem
// // // // //               key={idx}
// // // // //               icon={card.icon}
// // // // //               title={card.title}
// // // // //               description={card.description}
// // // // //               index={idx}
// // // // //             />
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Bottom highlight – elegant border + fade-up */}
// // // // //         <div className="mt-24 text-center border-t border-gray-200 pt-10 animate-[fadeUp_0.6s_ease-out_0.4s_both]">
// // // // //           <p className="text-gray-500 text-sm tracking-wide flex items-center justify-center gap-2">
// // // // //             <span className="inline-block w-8 h-px bg-amber-400"></span>
// // // // //             From concept to commissioning — we deliver complete engineering solutions.
// // // // //             <span className="inline-block w-8 h-px bg-amber-400"></span>
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Custom CSS animations (more dynamic than Tailwind defaults) */}
// // // // //       <style jsx>{`
// // // // //         @keyframes fadeUp {
// // // // //           0% { opacity: 0; transform: translateY(30px); }
// // // // //           100% { opacity: 1; transform: translateY(0); }
// // // // //         }
// // // // //         @keyframes slideUp {
// // // // //           0% { opacity: 0; transform: translateY(20px); }
// // // // //           100% { opacity: 1; transform: translateY(0); }
// // // // //         }
// // // // //         @keyframes scaleX {
// // // // //           0% { transform: scaleX(0); }
// // // // //           100% { transform: scaleX(1); }
// // // // //         }
// // // // //         .animate-fadeUp {
// // // // //           animation: fadeUp 0.8s ease-out forwards;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default About;

// // // // // About.jsx (completely different from Solutions)
// // // // import { useRef, useEffect, useState } from "react";
// // // // import { GiGears, GiFactory } from "react-icons/gi";
// // // // import { IoSettingsSharp } from "react-icons/io5";
// // // // import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// // // // import { MdEngineering } from "react-icons/md";

// // // // const stats = [
// // // //   { value: "27+", label: "Technologies" },
// // // //   { value: "1M+", label: "Manhours" },
// // // //   { value: "25+", label: "Countries" },
// // // //   { value: "200+", label: "Projects" },
// // // // ];

// // // // const capabilities = [
// // // //   { icon: <GiGears />, title: "Technologies", desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs." },
// // // //   { icon: <MdEngineering />, title: "Engineering", desc: "Over a million manhours of multidisciplinary engineering expertise." },
// // // //   { icon: <GiFactory />, title: "Modular Fabrication", desc: "Advanced process modules with port-side heavy cargo handling." },
// // // //   { icon: <IoSettingsSharp />, title: "TEPC Services", desc: "End-to-end delivery with guaranteed process performance." },
// // // //   { icon: <FaLeaf />, title: "Decarbonization", desc: "HydroBlue® tech eliminates CO₂ emissions efficiently." },
// // // //   { icon: <FaLaptopCode />, title: "Digitalization", desc: "OPTIMAX® enables remote monitoring & control systems." },
// // // // ];

// // // // const About = () => {
// // // //   return (
// // // //     <section className="section-padding bg-gray-50">
// // // //       <div className="container-custom">
// // // //         {/* Header */}
// // // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // // //           <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">Who We Are</span>
// // // //           <h2 className="text-4xl lg:text-5xl font-bold mt-2">Pioneering <span className="gradient-text">Energy Transition</span></h2>
// // // //           <p className="text-gray-600 mt-4 text-lg">
// // // //             Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
// // // //             delivering sustainable and low carbon processing solutions.
// // // //           </p>
// // // //         </div>

// // // //         {/* Stats bar */}
// // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
// // // //           {stats.map((stat, i) => (
// // // //             <div key={i} className="text-center">
// // // //               <div className="text-4xl font-bold text-amber-600">{stat.value}</div>
// // // //               <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Capabilities grid – two-column on desktop for variety */}
// // // //         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
// // // //           {capabilities.map((cap, i) => (
// // // //             <div key={i} className="flex gap-4 group">
// // // //               <div className="flex-shrink-0 text-amber-500 text-3xl group-hover:scale-110 transition-transform">
// // // //                 {cap.icon}
// // // //               </div>
// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition">
// // // //                   {cap.title}
// // // //                 </h3>
// // // //                 <p className="text-gray-500 mt-1">{cap.desc}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Bottom line */}
// // // //         <div className="mt-16 text-center border-t border-gray-200 pt-8">
// // // //           <p className="text-gray-500">From concept to commissioning — we deliver complete engineering solutions.</p>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;

// // // // About.jsx – fixed heading


// // // // import { GiGears, GiFactory } from "react-icons/gi";
// // // // import { IoSettingsSharp } from "react-icons/io5";
// // // // import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// // // // import { MdEngineering } from "react-icons/md";



// // // // const capabilities = [
// // // //   { icon: <GiGears />, title: "Technologies", desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs." },
// // // //   { icon: <MdEngineering />, title: "Engineering", desc: "Over a million manhours of multidisciplinary engineering expertise." },
// // // //   { icon: <GiFactory />, title: "Modular Fabrication", desc: "Advanced process modules with port-side heavy cargo handling." },
// // // //   { icon: <IoSettingsSharp />, title: "TEPC Services", desc: "End-to-end delivery with guaranteed process performance." },
// // // //   { icon: <FaLeaf />, title: "Decarbonization", desc: "HydroBlue® tech eliminates CO₂ emissions efficiently." },
// // // //   { icon: <FaLaptopCode />, title: "Digitalization", desc: "OPTIMAX® enables remote monitoring & control systems." },
// // // // ];

// // // // const About = () => {
// // // //   return (
// // // //     <section className="py-20 bg-gray-50">
// // // //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// // // //         {/* Header */}
// // // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // // //           <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">Who We Are</span>
// // // //           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
// // // //             Pioneering{' '}
// // // //             <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
// // // //               Energy Transition
// // // //             </span>
// // // //           </h2>
// // // //           <p className="text-gray-600 mt-4 text-lg">
// // // //             Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
// // // //             delivering sustainable and low carbon processing solutions.
// // // //           </p>
// // // //         </div>


// // // //         {/* Capabilities */}
// // // //         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
// // // //           {capabilities.map((cap, i) => (
// // // //             <div key={i} className="flex gap-4 group">
// // // //               <div className="flex-shrink-0 text-amber-500 text-3xl group-hover:scale-110 transition-transform">
// // // //                 {cap.icon}
// // // //               </div>
// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition">
// // // //                   {cap.title}
// // // //                 </h3>
// // // //                 <p className="text-gray-500 mt-1">{cap.desc}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Bottom */}
// // // //         <div className="mt-16 text-center border-t border-gray-200 pt-8">
// // // //           <p className="text-gray-500">From concept to commissioning — we deliver complete engineering solutions.</p>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;

// // // import { useEffect, useRef, useState } from "react";
// // // import { GiGears, GiFactory } from "react-icons/gi";
// // // import { IoSettingsSharp } from "react-icons/io5";
// // // import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// // // import { MdEngineering } from "react-icons/md";

// // // // Custom hook to detect when an element is in view
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
// // //       { threshold: 0.2, ...options }
// // //     );
// // //     observer.observe(el);
// // //     return () => observer.disconnect();
// // //   }, [options]);

// // //   return [ref, inView];
// // // }

// // // const capabilities = [
// // //   { icon: <GiGears />, title: "Technologies", desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs." },
// // //   { icon: <MdEngineering />, title: "Engineering", desc: "Over a million manhours of multidisciplinary engineering expertise." },
// // //   { icon: <GiFactory />, title: "Modular Fabrication", desc: "Advanced process modules with port-side heavy cargo handling." },
// // //   { icon: <IoSettingsSharp />, title: "TEPC Services", desc: "End-to-end delivery with guaranteed process performance." },
// // //   { icon: <FaLeaf />, title: "Decarbonization", desc: "HydroBlue® tech eliminates CO₂ emissions efficiently." },
// // //   { icon: <FaLaptopCode />, title: "Digitalization", desc: "OPTIMAX® enables remote monitoring & control systems." },
// // // ];

// // // const About = () => {
// // //   const [headerRef, headerInView] = useInView();
// // //   const [bottomRef, bottomInView] = useInView();

// // //   return (
// // //     <section className="py-20 bg-gray-50 overflow-hidden">
// // //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// // //         {/* Header with fade-up animation */}
// // //         <div
// // //           ref={headerRef}
// // //           className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
// // //           style={{
// // //             opacity: headerInView ? 1 : 0,
// // //             transform: headerInView ? "translateY(0)" : "translateY(30px)",
// // //           }}
// // //         >
// // //           <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">
// // //             Who We Are
// // //           </span>
// // //           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
// // //             Pioneering{" "}
// // //             <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
// // //               Energy Transition
// // //             </span>
// // //           </h2>
// // //           <p className="text-gray-600 mt-4 text-lg">
// // //             Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
// // //             delivering sustainable and low carbon processing solutions.
// // //           </p>
// // //         </div>

// // //         {/* Capabilities grid with staggered fade-up */}
// // //         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
// // //           {capabilities.map((cap, i) => {
// // //             const [ref, inView] = useInView();
// // //             const delay = i * 0.1;
// // //             return (
// // //               <div
// // //                 key={i}
// // //                 ref={ref}
// // //                 className="flex gap-4 group transition-all duration-700"
// // //                 style={{
// // //                   opacity: inView ? 1 : 0,
// // //                   transform: inView ? "translateY(0)" : "translateY(30px)",
// // //                   transitionDelay: `${delay}s`,
// // //                 }}
// // //               >
// // //                 <div className="flex-shrink-0 text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
// // //                   {cap.icon}
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
// // //                     {cap.title}
// // //                   </h3>
// // //                   <p className="text-gray-500 mt-1">{cap.desc}</p>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* Bottom line with fade-up */}
// // //         <div
// // //           ref={bottomRef}
// // //           className="mt-16 text-center border-t border-gray-200 pt-8 transition-all duration-700"
// // //           style={{
// // //             opacity: bottomInView ? 1 : 0,
// // //             transform: bottomInView ? "translateY(0)" : "translateY(20px)",
// // //           }}
// // //         >
// // //           <p className="text-gray-500">From concept to commissioning — we deliver complete engineering solutions.</p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default About;



// // import { useEffect, useRef, useState } from "react";
// // import { GiGears, GiFactory } from "react-icons/gi";
// // import { IoSettingsSharp } from "react-icons/io5";
// // import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// // import { MdEngineering } from "react-icons/md";

// // // Custom hook to detect when an element is in view
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

// // // Separate component for each capability item – this allows useInView to be called at top level
// // function CapabilityItem({ icon, title, desc, index }) {
// //   const [ref, inView] = useInView();
// //   const delay = index * 0.1;

// //   return (
// //     <div
// //       ref={ref}
// //       className="flex gap-4 group transition-all duration-700"
// //       style={{
// //         opacity: inView ? 1 : 0,
// //         transform: inView ? "translateY(0)" : "translateY(30px)",
// //         transitionDelay: `${delay}s`,
// //       }}
// //     >
// //       <div className="flex-shrink-0 text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
// //         {icon}
// //       </div>
// //       <div>
// //         <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
// //           {title}
// //         </h3>
// //         <p className="text-gray-500 mt-1">{desc}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // const capabilities = [
// //   { icon: <GiGears />, title: "Technologies", desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs." },
// //   { icon: <MdEngineering />, title: "Engineering", desc: "Over a million manhours of multidisciplinary engineering expertise." },
// //   { icon: <GiFactory />, title: "Modular Fabrication", desc: "Advanced process modules with port-side heavy cargo handling." },
// //   { icon: <IoSettingsSharp />, title: "TEPC Services", desc: "End-to-end delivery with guaranteed process performance." },
// //   { icon: <FaLeaf />, title: "Decarbonization", desc: "HydroBlue® tech eliminates CO₂ emissions efficiently." },
// //   { icon: <FaLaptopCode />, title: "Digitalization", desc: "OPTIMAX® enables remote monitoring & control systems." },
// // ];

// // const About = () => {
// //   const [headerRef, headerInView] = useInView();
// //   const [bottomRef, bottomInView] = useInView();

// //   return (
// //     <section className="py-20 bg-gray-50 overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8">
// //         {/* Header with fade-up animation */}
// //         <div
// //           ref={headerRef}
// //           className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
// //           style={{
// //             opacity: headerInView ? 1 : 0,
// //             transform: headerInView ? "translateY(0)" : "translateY(30px)",
// //           }}
// //         >
// //           <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">
// //             Who We Are
// //           </span>
// //           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
// //             Pioneering{" "}
// //             <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
// //               Energy Transition
// //             </span>
// //           </h2>
// //           <p className="text-gray-600 mt-4 text-lg">
// //             Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
// //             delivering sustainable and low carbon processing solutions.
// //           </p>
// //         </div>

// //         {/* Capabilities grid – now using CapabilityItem component */}
// //         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
// //           {capabilities.map((cap, i) => (
// //             <CapabilityItem
// //               key={i}
// //               icon={cap.icon}
// //               title={cap.title}
// //               desc={cap.desc}
// //               index={i}
// //             />
// //           ))}
// //         </div>

// //         {/* Bottom line with fade-up */}
// //         <div
// //           ref={bottomRef}
// //           className="mt-16 text-center border-t border-gray-200 pt-8 transition-all duration-700"
// //           style={{
// //             opacity: bottomInView ? 1 : 0,
// //             transform: bottomInView ? "translateY(0)" : "translateY(20px)",
// //           }}
// //         >
// //           <p className="text-gray-500">From concept to commissioning — we deliver complete engineering solutions.</p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;


// import { useEffect, useRef, useState } from "react";
// import { GiGears, GiFactory } from "react-icons/gi";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// import { MdEngineering } from "react-icons/md";

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

// function CapabilityItem({ icon, title, desc, index }) {
//   const [ref, inView] = useInView();
//   const delay = index * 0.1;

//   return (
//     <div
//       ref={ref}
//       className="flex gap-4 group transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(30px)",
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <div
//         className="flex-shrink-0 text-3xl group-hover:scale-110 transition-transform duration-300" text-gray-500
//         style={{ color: "var(--primery)" }}
//       >
//         {icon}
//       </div>
//       <div>
//         <h3
//           className="text-xl font-semibold text-gray-800 transition-colors duration-300"
//           style={{ color: "inherit" }}
//         >
//           <span className="group-hover:text-[var(--primery)]  transition-colors">{title}</span>
//         </h3>
//         <p className="text-gray-900 mt-1">{desc}</p>
//       </div>
//     </div>
//   );
// }

// const capabilities = [
//   { icon: <GiGears />, title: "Technologies", desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs." },
//   { icon: <MdEngineering />, title: "Engineering", desc: "Over a million manhours of multidisciplinary engineering expertise." },
//   { icon: <GiFactory />, title: "Modular Fabrication", desc: "Advanced process modules with port-side heavy cargo handling." },
//   { icon: <IoSettingsSharp />, title: "TEPC Services", desc: "End-to-end delivery with guaranteed process performance." },
//   { icon: <FaLeaf />, title: "Decarbonization", desc: "HydroBlue® tech eliminates CO₂ emissions efficiently." },
//   { icon: <FaLaptopCode />, title: "Digitalization", desc: "OPTIMAX® enables remote monitoring & control systems." },
// ];

// const About = () => {
//   const [headerRef, headerInView] = useInView();
//   const [bottomRef, bottomInView] = useInView();

//   return (
//     <section className="py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div
//           ref={headerRef}
//           className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
//           style={{
//             opacity: headerInView ? 1 : 0,
//             transform: headerInView ? "translateY(0)" : "translateY(30px)",
//           }}
//         >
//           <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--primery)" }}>
//             Who We Are
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
//             Pioneering{" "}
//             <span className="text-gradient">Energy Transition</span>
//           </h2>
//           <p className="text-gray-600 mt-4 text-lg">
//             Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
//             delivering sustainable and low carbon processing solutions.
//           </p>
//         </div>

//         {/* Capabilities grid */}
//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
//           {capabilities.map((cap, i) => (
//             <CapabilityItem
//               key={i}
//               icon={cap.icon}
//               title={cap.title}
//               desc={cap.desc}
//               index={i}
//             />
//           ))}
//         </div>

//         {/* Bottom line */}
//         <div
//           ref={bottomRef}
//           className="mt-16 text-center border-t border-gray-200 pt-8 transition-all duration-700"
//           style={{
//             opacity: bottomInView ? 1 : 0,
//             transform: bottomInView ? "translateY(0)" : "translateY(20px)",
//           }}
//         >
//           <p className="text-gray-900">From concept to commissioning — we deliver complete engineering solutions.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import { useEffect, useRef, useState } from "react";
import { GiGears, GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLeaf, FaLaptopCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

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

function CapabilityItem({ icon, title, desc, index }) {
  const [ref, inView] = useInView();
  const delay = index * 0.1;

  return (
    <div
      ref={ref}
      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primery)] to-[var(--primery-dark)] flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-105 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

const capabilities = [
  { icon: <GiGears />, title: "Technologies", desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs." },
  { icon: <MdEngineering />, title: "Engineering", desc: "Over a million manhours of multidisciplinary engineering expertise." },
  { icon: <GiFactory />, title: "Modular Fabrication", desc: "Advanced process modules with port-side heavy cargo handling." },
  { icon: <IoSettingsSharp />, title: "TEPC Services", desc: "End-to-end delivery with guaranteed process performance." },
  { icon: <FaLeaf />, title: "Decarbonization", desc: "HydroBlue® tech eliminates CO₂ emissions efficiently." },
  { icon: <FaLaptopCode />, title: "Digitalization", desc: "OPTIMAX® enables remote monitoring & control systems." },
];

const About = () => {
  const [headerRef, headerInView] = useInView();
  const [bottomRef, bottomInView] = useInView();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span
            className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]"
          >
            Who We Are
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Pioneering{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Energy Transition
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
            delivering sustainable and low carbon processing solutions.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
            <CapabilityItem
              key={i}
              icon={cap.icon}
              title={cap.title}
              desc={cap.desc}
              index={i}
            />
          ))}
        </div>

        {/* Bottom line */}
        <div
          ref={bottomRef}
          className="mt-20 text-center border-t border-gray-200 pt-10 transition-all duration-700"
          style={{
            opacity: bottomInView ? 1 : 0,
            transform: bottomInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-gray-700 text-lg font-medium">
            From concept to commissioning — we deliver complete engineering solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;