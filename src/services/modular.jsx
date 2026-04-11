
// // // import React, { useEffect, useRef, useState } from "react";
// // // import {
// // //   FaMapMarkerAlt,
// // //   FaCogs,
// // //   FaCheckCircle,
// // // } from "react-icons/fa";
// // // import { Link } from "react-router-dom";

// // // // ============================================================================
// // // // Custom hook with proper dependency handling
// // // // ============================================================================
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

// // // // ============================================================================
// // // // Facility Card Component – light version (white background, amber accent)
// // // // ============================================================================
// // // function FacilityCard({ facility, index }) {
// // //   const [ref, inView] = useInView();
// // //   const [hovered, setHovered] = useState(false);
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
// // //       <div
// // //         onMouseEnter={() => setHovered(true)}
// // //         onMouseLeave={() => setHovered(false)}
// // //         className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
// // //         style={{
// // //           transform: hovered ? "translateY(-8px)" : "translateY(0)",
// // //         }}
// // //       >
// // //         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

// // //         <div className="p-6">
// // //           {/* Location icon and name */}
// // //           <div className="flex items-center gap-3 mb-4">
// // //             <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
// // //               <FaMapMarkerAlt className="text-xl" />
// // //             </div>
// // //             <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
// // //               {facility.location}
// // //             </h3>
// // //           </div>

// // //           {/* Description */}
// // //           <p className="text-gray-600 text-sm leading-relaxed mb-4">{facility.description}</p>

// // //           {/* Capabilities title */}
// // //           <div className="flex items-center gap-2 mb-3">
// // //             <FaCogs className="text-amber-500 text-sm" />
// // //             <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Capabilities</h4>
// // //           </div>

// // //           {/* Capabilities list */}
// // //           <ul className="space-y-2">
// // //             {facility.capabilities.map((cap, idx) => (
// // //               <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
// // //                 <FaCheckCircle className="text-amber-500 text-xs mt-0.5 flex-shrink-0" />
// // //                 <span>{cap}</span>
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           {/* Area badge if present */}
// // //           {facility.area && (
// // //             <div className="mt-4 inline-block bg-amber-50 rounded-full px-3 py-1 text-xs text-amber-700 border border-amber-200">
// // //               📐 Area: {facility.area}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // ============================================================================
// // // // Animation styles (including bubbleFloat)
// // // // ============================================================================
// // // const animationStyles = `
// // //   @keyframes fadeUp {
// // //     0% { opacity: 0; transform: translateY(30px); }
// // //     100% { opacity: 1; transform: translateY(0); }
// // //   }
// // //   @keyframes fadeLeft {
// // //     0% { opacity: 0; transform: translateX(-30px); }
// // //     100% { opacity: 1; transform: translateX(0); }
// // //   }
// // //   @keyframes fadeRight {
// // //     0% { opacity: 0; transform: translateX(30px); }
// // //     100% { opacity: 1; transform: translateX(0); }
// // //   }
// // //   @keyframes bubbleFloat {
// // //     0% { transform: translateY(0) scale(0.2); opacity: 0; }
// // //     20% { opacity: 0.6; }
// // //     80% { opacity: 0.4; }
// // //     100% { transform: translateY(-100vh) scale(1); opacity: 0; }
// // //   }
// // //   @keyframes shimmer {
// // //     0% { background-position: -200% center; }
// // //     100% { background-position: 200% center; }
// // //   }
// // //   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // //   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // //   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// // //   .delay-100 { animation-delay: 0.1s; }
// // //   .delay-200 { animation-delay: 0.2s; }
// // //   .delay-300 { animation-delay: 0.3s; }
// // //   .delay-400 { animation-delay: 0.4s; }
// // //   .delay-500 { animation-delay: 0.5s; }
// // // `;

// // // // ============================================================================
// // // // Main Modular Fabrication Component (Light Theme)
// // // // ============================================================================
// // // const Modular = () => {
// // //   const [facilitiesRef, facilitiesInView] = useInView();

// // //   // Generate random bubbles for hero
// // //   const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
// // //     return Array.from({ length: count }, (_, i) => ({
// // //       id: i,
// // //       size: Math.random() * sizeRange + baseSize,
// // //       left: Math.random() * 100,
// // //       delay: Math.random() * 15,
// // //       duration: Math.random() * 10 + 8,
// // //       opacity: Math.random() * 0.3 + 0.2,
// // //     }));
// // //   };

// // //   const heroBubbles = generateBubbles(18, 15, 50);

// // //   // Facilities data based on old content
// // //   const facilities = [
// // //     {
// // //       location: "Houston, Texas",
// // //       description: "Located in Houston Energy Corridor, this facility acts as the point of sales, delivery and lifecycle support for Sphinx® range of process and automation systems.",
// // //       area: "25,000 ft²",
// // //       capabilities: [
// // //         "Electrical and Instrumentation Integration",
// // //         "Functional Demonstration",
// // //         "Factory Acceptance Tests",
// // //         "After Sale Support",
// // //         "Spares and consumables warehousing",
// // //       ],
// // //     },
// // //     {
// // //       location: "Port Harcourt, Nigeria",
// // //       description: "Jointly developed with our partners Weltek Limited, this facility serves as the training and aftersales support for Oil & Gas production facilities and modular refineries in sub-Saharan Africa.",
// // //       area: "300,000 ft²",
// // //       capabilities: [
// // //         "Functional Demonstration",
// // //         "Factory Acceptance Tests",
// // //         "Operator Training",
// // //         "After Sale Support",
// // //         "Spares and Consumables Warehousing",
// // //       ],
// // //     },
// // //     {
// // //       location: "Mundra, Gujarat, India",
// // //       description: "Registered as Avesta Engineering, this modular fabrication yard is located inside the Mundra Port area, offering direct port access and duty‑free warehousing.",
// // //       area: "200,000 ft²",
// // //       capabilities: [
// // //         "Pipe Spool Fabrication",
// // //         "Structural Fabrication",
// // //         "Factory Acceptance Test",
// // //         "LOLO loadout capacity of 1000 MT",
// // //         "RORO facility also available",
// // //         "Access to all weather Mundra port of 18 m draft",
// // //       ],
// // //     },
// // //     {
// // //       location: "Nizwa, Oman",
// // //       description: "This facility is the training and aftersales support for Oil & Gas production facilities and modular refineries in the MENA region.",
// // //       area: "300,000 ft²",
// // //       capabilities: [
// // //         "Functional Demonstration",
// // //         "Factory Acceptance Tests",
// // //         "Operator Training",
// // //         "After Sale Support",
// // //         "Spares and Consumables Warehousing",
// // //       ],
// // //     },
// // //     {
// // //       location: "Mumbai, India",
// // //       description: "Manufacturing facility located in the largest industrial hub of India, specializing in prototype development, pilot plants, skidded packages and automation systems.",
// // //       capabilities: [
// // //         "U‑Stamp and CE Certified Pressure Vessel Shop",
// // //         "Pipe Spool Fabrication Shop",
// // //         "Structural Fabrication Shop",
// // //         "Electrical and Instrumentation Integration",
// // //         "Functional Demonstration",
// // //         "Factory Acceptance tests certificate",
// // //       ],
// // //     },
// // //   ];

// // //   return (
// // //     <div className="bg-white">
// // //       <style>{animationStyles}</style>

// // //       {/* Hero Section – Navbar gradient + bubbles */}
// // //       <section className="relative overflow-hidden text-white">
// // //         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

// // //         {/* Floating bubbles */}
// // //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //           {heroBubbles.map((bubble) => (
// // //             <div
// // //               key={bubble.id}
// // //               className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
// // //               style={{
// // //                 width: `${bubble.size}px`,
// // //                 height: `${bubble.size}px`,
// // //                 left: `${bubble.left}%`,
// // //                 bottom: "-50px",
// // //                 opacity: bubble.opacity,
// // //                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
// // //                 animationDelay: `${bubble.delay}s`,
// // //               }}
// // //             />
// // //           ))}
// // //         </div>

// // //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
// // //           <div className="flex flex-col lg:flex-row items-center gap-12">
// // //             {/* Left side - Text content */}
// // //             <div className="lg:w-1/2 animate-fadeLeft">
// // //               <div className="inline-flex items-center gap-2 text-sm text-gray-200 mb-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
// // //                 <span>Home</span><span>›</span><span>Services</span><span>›</span>
// // //                 <span className="text-amber-400 font-medium">Modular Fabrication</span>
// // //               </div>
// // //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
// // //                 Modular{" "}
// // //                 <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
// // //                   Fabrication
// // //                 </span>
// // //               </h1>
// // //               <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
// // //                 Pyramid E&C manufactures and delivers modular plants and Sphinx® process systems from our facilities in India,
// // //                 with assembly, automation, FAT, and technical support operations in the US, Middle East, and Africa.
// // //               </p>
// // //             </div>

// // //             {/* Right side - Image */}
// // //             <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
// // //               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
// // //                 <img
// // //                   src="/modular-fabrication.jpg"
// // //                   alt="Modular fabrication facility"
// // //                   className="w-full h-auto max-h-[400px] object-cover"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
// // //                 <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
// // //                   Global Manufacturing Network
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Global Footprint Introduction */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
// // //           <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
// // //             Global Manufacturing Network
// // //           </div>
// // //           <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
// // //             We have assembly, automation, FAT and technical support operations in the <strong className="text-amber-600">US, Middle East and Africa</strong> to support our customers throughout the lifecycle.
// // //             Our manufacturing facilities in Mumbai and Mundra, India, produce modular plants and the Sphinx® range of process systems.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Facilities Grid */}
// // //       <section ref={facilitiesRef} className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div
// // //             className="text-center mb-12 transition-all duration-700"
// // //             style={{
// // //               opacity: facilitiesInView ? 1 : 0,
// // //               transform: facilitiesInView ? "translateY(0)" : "translateY(30px)",
// // //             }}
// // //           >
// // //             <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
// // //               Our Facilities
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
// // //               Global Fabrication & Support Centers
// // //             </h2>
// // //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
// // //             <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
// // //               Strategically located to serve our customers across five continents.
// // //             </p>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {facilities.map((facility, idx) => (
// // //               <FacilityCard key={idx} facility={facility} index={idx} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section – Light yellow gradient */}
// // //       <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
// // //         <div className="max-w-4xl mx-auto text-center">
// // //           <div className="flex items-center justify-center gap-2 mb-4">
// // //             <span className="w-8 h-[2px] bg-amber-600"></span>
// // //             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
// // //               Built for the World
// // //             </span>
// // //           </div>
// // //           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
// // //             Need Modular Solutions?
// // //           </h2>
// // //           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
// // //             Leverage our global fabrication network for faster, cost‑effective modular plant delivery.
// // //           </p>
// // //           <Link
// // //             to="/contact"
// // //             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
// // //           >
// // //             Contact Our Modular Experts →
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Modular;



// // import React, { useEffect, useRef, useState } from "react";
// // import {
// //   FaMapMarkerAlt,
// //   FaCogs,
// //   FaCheckCircle,
// // } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // // ============================================================================
// // // Custom hook for scroll animations
// // // ============================================================================
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

// // // ============================================================================
// // // Facility Row – no card, just border-left and hover underline
// // // ============================================================================
// // function FacilityRow({ facility, index }) {
// //   const [ref, inView] = useInView();
// //   const delay = index * 0.1;

// //   return (
// //     <div
// //       ref={ref}
// //       className="transition-all duration-700"
// //       style={{
// //         opacity: inView ? 1 : 0,
// //         transform: inView ? "translateY(0)" : "translateY(20px)",
// //         transitionDelay: `${delay}s`,
// //       }}
// //     >
// //       <div className="group border-l-4 border-gray-200 hover:border-amber-400 transition-all duration-300 pl-6 py-4">
// //         {/* Header: location icon + name */}
// //         <div className="flex items-center gap-3 mb-2">
// //           <FaMapMarkerAlt className="text-amber-500 text-xl group-hover:scale-110 transition-transform" />
// //           <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
// //             {facility.location}
// //           </h3>
// //         </div>

// //         {/* Description */}
// //         <p className="text-gray-600 text-sm leading-relaxed mb-3">{facility.description}</p>

// //         {/* Capabilities */}
// //         <div className="flex items-center gap-2 mb-2">
// //           <FaCogs className="text-amber-500 text-sm" />
// //           <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Capabilities</h4>
// //         </div>
// //         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-3">
// //           {facility.capabilities.map((cap, idx) => (
// //             <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
// //               <FaCheckCircle className="text-amber-500 text-xs mt-0.5 flex-shrink-0" />
// //               <span>{cap}</span>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Area badge */}
// //         {facility.area && (
// //           <div className="inline-block bg-amber-50 rounded-full px-3 py-1 text-xs text-amber-700 border border-amber-200">
// //             📐 Area: {facility.area}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // // ============================================================================
// // // Animation styles (bubbles, fades, shimmer)
// // // ============================================================================
// // const animationStyles = `
// //   @keyframes fadeUp {
// //     0% { opacity: 0; transform: translateY(30px); }
// //     100% { opacity: 1; transform: translateY(0); }
// //   }
// //   @keyframes fadeLeft {
// //     0% { opacity: 0; transform: translateX(-30px); }
// //     100% { opacity: 1; transform: translateX(0); }
// //   }
// //   @keyframes fadeRight {
// //     0% { opacity: 0; transform: translateX(30px); }
// //     100% { opacity: 1; transform: translateX(0); }
// //   }
// //   @keyframes bubbleFloat {
// //     0% { transform: translateY(0) scale(0.2); opacity: 0; }
// //     20% { opacity: 0.6; }
// //     80% { opacity: 0.4; }
// //     100% { transform: translateY(-100vh) scale(1); opacity: 0; }
// //   }
// //   @keyframes shimmer {
// //     0% { background-position: -200% center; }
// //     100% { background-position: 200% center; }
// //   }
// //   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //   .delay-100 { animation-delay: 0.1s; }
// //   .delay-200 { animation-delay: 0.2s; }
// //   .delay-300 { animation-delay: 0.3s; }
// //   .delay-400 { animation-delay: 0.4s; }
// //   .delay-500 { animation-delay: 0.5s; }
// // `;

// // // ============================================================================
// // // Main Modular Fabrication Component (No Cards)
// // // ============================================================================
// // const Modular = () => {
// //   const [facilitiesRef, facilitiesInView] = useInView();

// //   const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
// //     return Array.from({ length: count }, (_, i) => ({
// //       id: i,
// //       size: Math.random() * sizeRange + baseSize,
// //       left: Math.random() * 100,
// //       delay: Math.random() * 15,
// //       duration: Math.random() * 10 + 8,
// //       opacity: Math.random() * 0.3 + 0.2,
// //     }));
// //   };

// //   const heroBubbles = generateBubbles(18, 15, 50);

// //   const facilities = [
// //     {
// //       location: "Houston, Texas",
// //       description: "Located in Houston Energy Corridor, this facility acts as the point of sales, delivery and lifecycle support for Sphinx® range of process and automation systems.",
// //       area: "25,000 ft²",
// //       capabilities: [
// //         "Electrical and Instrumentation Integration",
// //         "Functional Demonstration",
// //         "Factory Acceptance Tests",
// //         "After Sale Support",
// //         "Spares and consumables warehousing",
// //       ],
// //     },
// //     {
// //       location: "Port Harcourt, Nigeria",
// //       description: "Jointly developed with our partners Weltek Limited, this facility serves as the training and aftersales support for Oil & Gas production facilities and modular refineries in sub-Saharan Africa.",
// //       area: "300,000 ft²",
// //       capabilities: [
// //         "Functional Demonstration",
// //         "Factory Acceptance Tests",
// //         "Operator Training",
// //         "After Sale Support",
// //         "Spares and Consumables Warehousing",
// //       ],
// //     },
// //     {
// //       location: "Mundra, Gujarat, India",
// //       description: "Registered as Avesta Engineering, this modular fabrication yard is located inside the Mundra Port area, offering direct port access and duty‑free warehousing.",
// //       area: "200,000 ft²",
// //       capabilities: [
// //         "Pipe Spool Fabrication",
// //         "Structural Fabrication",
// //         "Factory Acceptance Test",
// //         "LOLO loadout capacity of 1000 MT",
// //         "RORO facility also available",
// //         "Access to all weather Mundra port of 18 m draft",
// //       ],
// //     },
// //     {
// //       location: "Nizwa, Oman",
// //       description: "This facility is the training and aftersales support for Oil & Gas production facilities and modular refineries in the MENA region.",
// //       area: "300,000 ft²",
// //       capabilities: [
// //         "Functional Demonstration",
// //         "Factory Acceptance Tests",
// //         "Operator Training",
// //         "After Sale Support",
// //         "Spares and Consumables Warehousing",
// //       ],
// //     },
// //     {
// //       location: "Mumbai, India",
// //       description: "Manufacturing facility located in the largest industrial hub of India, specializing in prototype development, pilot plants, skidded packages and automation systems.",
// //       capabilities: [
// //         "U‑Stamp and CE Certified Pressure Vessel Shop",
// //         "Pipe Spool Fabrication Shop",
// //         "Structural Fabrication Shop",
// //         "Electrical and Instrumentation Integration",
// //         "Functional Demonstration",
// //         "Factory Acceptance tests certificate",
// //       ],
// //     },
// //   ];

// //   return (
// //     <div className="bg-white">
// //       <style>{animationStyles}</style>

// //       {/* Hero Section – unchanged (but without card styling) */}
// //       <section className="relative overflow-hidden text-white">
// //         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //           {heroBubbles.map((bubble) => (
// //             <div
// //               key={bubble.id}
// //               className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
// //               style={{
// //                 width: `${bubble.size}px`,
// //                 height: `${bubble.size}px`,
// //                 left: `${bubble.left}%`,
// //                 bottom: "-50px",
// //                 opacity: bubble.opacity,
// //                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
// //                 animationDelay: `${bubble.delay}s`,
// //               }}
// //             />
// //           ))}
// //         </div>

// //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
// //           <div className="flex flex-col lg:flex-row items-center gap-12">
// //             <div className="lg:w-1/2 animate-fadeLeft">
// //               <div className="inline-flex items-center gap-2 text-sm text-gray-200 mb-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
// //                 <span>Home</span><span>›</span><span>Services</span><span>›</span>
// //                 <span className="text-amber-400 font-medium">Modular Fabrication</span>
// //               </div>
// //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
// //                 Modular{" "}
// //                 <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
// //                   Fabrication
// //                 </span>
// //               </h1>
// //               <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
// //                 Pyramid E&C manufactures and delivers modular plants and Sphinx® process systems from our facilities in India,
// //                 with assembly, automation, FAT, and technical support operations in the US, Middle East, and Africa.
// //               </p>
// //             </div>
// //             <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
// //               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
// //                 <img
// //                   src="/modular-fabrication.jpg"
// //                   alt="Modular fabrication facility"
// //                   className="w-full h-auto max-h-[400px] object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
// //                 <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
// //                   Global Manufacturing Network
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Global Footprint Introduction – plain text */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
// //           <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
// //             Global Manufacturing Network
// //           </div>
// //           <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
// //             We have assembly, automation, FAT and technical support operations in the <strong className="text-amber-600">US, Middle East and Africa</strong> to support our customers throughout the lifecycle.
// //             Our manufacturing facilities in Mumbai and Mundra, India, produce modular plants and the Sphinx® range of process systems.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Facilities – No cards, just rows with border-left */}
// //       <section ref={facilitiesRef} className="py-20 bg-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div
// //             className="text-center mb-12 transition-all duration-700"
// //             style={{
// //               opacity: facilitiesInView ? 1 : 0,
// //               transform: facilitiesInView ? "translateY(0)" : "translateY(30px)",
// //             }}
// //           >
// //             <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
// //               Our Facilities
// //             </div>
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
// //               Global Fabrication & Support Centers
// //             </h2>
// //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
// //             <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
// //               Strategically located to serve our customers across five continents.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
// //             {facilities.map((facility, idx) => (
// //               <FacilityRow key={idx} facility={facility} index={idx} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section – Light yellow gradient (unchanged) */}
// //       <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <div className="flex items-center justify-center gap-2 mb-4">
// //             <span className="w-8 h-[2px] bg-amber-600"></span>
// //             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
// //               Built for the World
// //             </span>
// //           </div>
// //           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
// //             Need Modular Solutions?
// //           </h2>
// //           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
// //             Leverage our global fabrication network for faster, cost‑effective modular plant delivery.
// //           </p>
// //           <Link
// //             to="/contact"
// //             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
// //           >
// //             Contact Our Modular Experts →
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Modular;


// import React, { useEffect, useRef, useState } from "react";
// import { FaMapMarkerAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// // Custom hook for scroll animations
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

// const facilities = [
//   {
//     location: "Houston, USA",
//     desc: "Sales, lifecycle support and automation systems hub.",
//     area: "25,000 ft²",
//     capabilities: [
//       "Instrumentation Integration",
//       "Factory Acceptance Tests",
//       "After Sales Support",
//     ],
//   },
//   {
//     location: "Nigeria",
//     desc: "Training & support hub for modular refineries in Africa.",
//     area: "300,000 ft²",
//     capabilities: [
//       "Operator Training",
//       "FAT Testing",
//       "Support Services",
//     ],
//   },
//   {
//     location: "Mundra, India",
//     desc: "Main fabrication yard with direct port access.",
//     area: "200,000 ft²",
//     capabilities: [
//       "Pipe Fabrication",
//       "Structural Fabrication",
//       "Heavy Load Dispatch",
//     ],
//   },
//   {
//     location: "Oman",
//     desc: "MENA training and aftersales hub.",
//     area: "300,000 ft²",
//     capabilities: [
//       "Operator Training",
//       "Support",
//       "Testing",
//     ],
//   },
//   {
//     location: "Mumbai, India",
//     desc: "Prototype & automation manufacturing hub.",
//     capabilities: [
//       "Pressure Vessels",
//       "Automation Systems",
//       "Pilot Plants",
//     ],
//   },
// ];

// // Generate bubbles for hero
// const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i,
//     size: Math.random() * sizeRange + baseSize,
//     left: Math.random() * 100,
//     delay: Math.random() * 15,
//     duration: Math.random() * 10 + 8,
//     opacity: Math.random() * 0.3 + 0.2,
//   }));
// };

// const animationStyles = `
//   @keyframes fadeUp {
//     0% { opacity: 0; transform: translateY(30px); }
//     100% { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes fadeLeft {
//     0% { opacity: 0; transform: translateX(-30px); }
//     100% { opacity: 1; transform: translateX(0); }
//   }
//   @keyframes fadeRight {
//     0% { opacity: 0; transform: translateX(30px); }
//     100% { opacity: 1; transform: translateX(0); }
//   }
//   @keyframes bubbleFloat {
//     0% { transform: translateY(0) scale(0.2); opacity: 0; }
//     20% { opacity: 0.6; }
//     80% { opacity: 0.4; }
//     100% { transform: translateY(-100vh) scale(1); opacity: 0; }
//   }
//   @keyframes shimmer {
//     0% { background-position: -200% center; }
//     100% { background-position: 200% center; }
//   }
//   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .delay-100 { animation-delay: 0.1s; }
//   .delay-200 { animation-delay: 0.2s; }
//   .delay-300 { animation-delay: 0.3s; }
// `;

// const Modular = () => {
//   const heroBubbles = generateBubbles(18, 15, 50);
//   const [gridRef, gridInView] = useInView();
//   const [splitRef, splitInView] = useInView();

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* ================= HERO SECTION (No image, centered text) ================= */}
//       <section className="relative overflow-hidden text-white">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {heroBubbles.map((bubble) => (
//             <div
//               key={bubble.id}
//               className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
//               style={{
//                 width: `${bubble.size}px`,
//                 height: `${bubble.size}px`,
//                 left: `${bubble.left}%`,
//                 bottom: "-50px",
//                 opacity: bubble.opacity,
//                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
//                 animationDelay: `${bubble.delay}s`,
//               }}
//             />
//           ))}
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>Services</span><span>›</span>
//             <span className="text-amber-400 font-medium">Modular Fabrication</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//             Global Fabrication{" "}
//             <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
//               Network
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
//             Delivering modular plants through a strategically located global infrastructure.
//           </p>
//         </div>
//       </section>

//       {/* ================= FACILITIES GRID ================= */}
//       <section ref={gridRef} className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 transition-all duration-700"
//             style={{ opacity: gridInView ? 1 : 0, transform: gridInView ? "translateY(0)" : "translateY(30px)" }}>
//             <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Our Presence</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Global Facilities</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-4">Strategically located to serve our customers worldwide</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {facilities.map((facility, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
//                 style={{
//                   opacity: gridInView ? 1 : 0,
//                   transform: gridInView ? "translateY(0)" : "translateY(30px)",
//                   transitionDelay: `${0.1 + idx * 0.05}s`,
//                 }}
//               >
//                 <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-3">
//                     <FaMapMarkerAlt className="text-amber-500 text-lg group-hover:scale-110 transition" />
//                     <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
//                       {facility.location}
//                     </h3>
//                   </div>
//                   <p className="text-gray-600 text-sm mb-3 leading-relaxed">{facility.desc}</p>
//                   {facility.area && (
//                     <span className="inline-block bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-200 mb-4">
//                       📐 {facility.area}
//                     </span>
//                   )}
//                   <div className="border-t border-gray-100 pt-3 mt-2">
//                     <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Capabilities</h4>
//                     <ul className="space-y-1.5">
//                       {facility.capabilities.map((cap, i) => (
//                         <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
//                           <FaCheckCircle className="text-amber-500 text-xs mt-0.5 flex-shrink-0" />
//                           <span>{cap}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= SPLIT SECTION (Image + Text) ================= */}
//       <section ref={splitRef} className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700"
//           style={{ opacity: splitInView ? 1 : 0, transform: splitInView ? "translateY(0)" : "translateY(30px)" }}>
//           <div className="order-2 md:order-1">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integrated Manufacturing Ecosystem</h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Our fabrication and engineering network ensures seamless delivery
//               from design to deployment across global markets.
//             </p>
//             <ul className="space-y-3">
//               {[
//                 "End-to-end project execution",
//                 "Global logistics integration",
//                 "Quality-controlled fabrication",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-2 text-gray-700">
//                   <FaCheckCircle className="text-amber-500 text-sm" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="order-1 md:order-2 group">
//             <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
//               <img
//                 src="/modular-fabrication.jpg"
//                 alt="Fabrication facility"
//                 className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA SECTION ================= */}
//       <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <span className="w-8 h-[2px] bg-amber-600"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
//               Build With Global Experts
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Need Modular Solutions?
//           </h2>
//           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
//             Scale faster with our modular fabrication capabilities.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Contact Us <FaArrowRight className="text-sm" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Modular;

import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Custom hook for scroll animations
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

const facilities = [
  {
    location: "Houston, USA",
    desc: "Sales, lifecycle support and automation systems hub.",
    area: "25,000 ft²",
    capabilities: [
      "Instrumentation Integration",
      "Factory Acceptance Tests",
      "After Sales Support",
    ],
  },
  {
    location: "Nigeria",
    desc: "Training & support hub for modular refineries in Africa.",
    area: "300,000 ft²",
    capabilities: [
      "Operator Training",
      "FAT Testing",
      "Support Services",
    ],
  },
  {
    location: "Mundra, India",
    desc: "Main fabrication yard with direct port access.",
    area: "200,000 ft²",
    capabilities: [
      "Pipe Fabrication",
      "Structural Fabrication",
      "Heavy Load Dispatch",
    ],
  },
  {
    location: "Oman",
    desc: "MENA training and aftersales hub.",
    area: "300,000 ft²",
    capabilities: [
      "Operator Training",
      "Support",
      "Testing",
    ],
  },
  {
    location: "Mumbai, India",
    desc: "Prototype & automation manufacturing hub.",
    capabilities: [
      "Pressure Vessels",
      "Automation Systems",
      "Pilot Plants",
    ],
  },
];

// Generate bubbles for hero
const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * sizeRange + baseSize,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 8,
    opacity: Math.random() * 0.3 + 0.2,
  }));
};

const animationStyles = `
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    0% { opacity: 0; transform: translateX(-30px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeRight {
    0% { opacity: 0; transform: translateX(30px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes bubbleFloat {
    0% { transform: translateY(0) scale(0.2); opacity: 0; }
    20% { opacity: 0.6; }
    80% { opacity: 0.4; }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
`;

const Modular = () => {
  const heroBubbles = generateBubbles(18, 15, 50);
  const [ecosystemRef, ecosystemInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* ================= HERO SECTION (centered, no image) ================= */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroBubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                bottom: "-50px",
                opacity: bubble.opacity,
                animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
                animationDelay: `${bubble.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>Services</span><span>›</span>
            <span className="text-amber-400 font-medium">Modular Fabrication</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Global Fabrication{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Network
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Delivering modular plants through a strategically located global infrastructure.
          </p>
        </div>
      </section>

      {/* ================= INTEGRATED MANUFACTURING ECOSYSTEM (moved up) ================= */}
      <section ref={ecosystemRef} className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700"
          style={{ opacity: ecosystemInView ? 1 : 0, transform: ecosystemInView ? "translateY(0)" : "translateY(30px)" }}>
          <div className="order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integrated Manufacturing Ecosystem</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our fabrication and engineering network ensures seamless delivery
              from design to deployment across global markets.
            </p>
            <ul className="space-y-3">
              {[
                "End-to-end project execution",
                "Global logistics integration",
                "Quality-controlled fabrication",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-amber-500 text-sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 group">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
              <img
                src="/modular-fabrication.jpg"
                alt="Fabrication facility"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL FACILITIES GRID ================= */}
      <section ref={gridRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 transition-all duration-700"
            style={{ opacity: gridInView ? 1 : 0, transform: gridInView ? "translateY(0)" : "translateY(30px)" }}>
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Our Presence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Global Facilities</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Strategically located to serve our customers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${0.1 + idx * 0.05}s`,
                }}
              >
                <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaMapMarkerAlt className="text-amber-500 text-lg group-hover:scale-110 transition" />
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      {facility.location}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{facility.desc}</p>
                  {facility.area && (
                    <span className="inline-block bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-200 mb-4">
                      📐 {facility.area}
                    </span>
                  )}
                  <div className="border-t border-gray-100 pt-3 mt-2">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Capabilities</h4>
                    <ul className="space-y-1.5">
                      {facility.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <FaCheckCircle className="text-amber-500 text-xs mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Build With Global Experts
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Need Modular Solutions?
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Scale faster with our modular fabrication capabilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Modular;