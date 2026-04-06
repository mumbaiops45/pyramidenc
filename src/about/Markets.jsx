// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaArrowRight,
//   FaOilCan,
//   FaIndustry,
//   FaGasPump,
//   FaLeaf,
//   FaChartLine,
//   FaGlobeAmericas,
//   FaHardHat,
//   FaTools,
//   FaFlask,
//   FaShip,
//   FaWarehouse,
//   FaSolarPanel,
//   FaCogs,
//   FaCheckCircle,
// } from "react-icons/fa";
// import { GiDrill, GiGasStation, GiChemicalTank } from "react-icons/gi";

// // ============================================================================
// // Custom hook: trigger when element enters viewport
// // ============================================================================
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
//   }, []);

//   return [ref, inView];
// }

// // ============================================================================
// // Stat counter component (used in hero)
// // ============================================================================
// function MarketStat({ value, label, suffix = "", delay }) {
//   const [ref, inView] = useInView();
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const increment = Math.ceil(value / 40);
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(interval);
//       } else {
//         setCount(start);
//       }
//     }, 30);
//     return () => clearInterval(interval);
//   }, [inView, value]);

//   return (
//     <div
//       ref={ref}
//       className="text-center transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(20px)",
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <div className="text-3xl md:text-4xl font-black text-[#F5B400] leading-tight">
//         {count}{suffix}
//       </div>
//       <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
//         {label}
//       </div>
//     </div>
//   );
// }

// // ============================================================================
// // Competence group card (with hover effect)
// // ============================================================================
// function CompetenceCard({ title, description, icon: Icon, accent, index }) {
//   const [ref, inView] = useInView();
//   const [hovered, setHovered] = useState(false);
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
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 h-full"
//         style={{
//           borderColor: hovered ? `${accent}60` : "rgba(255,255,255,0.07)",
//           transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
//           boxShadow: hovered ? `0 25px 35px -12px ${accent}30` : "none",
//         }}
//       >
//         <div
//           className="absolute top-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300"
//           style={{
//             background: `linear-gradient(90deg, ${accent}, transparent)`,
//             opacity: hovered ? 1 : 0.3,
//           }}
//         />
//         <div
//           className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
//           style={{
//             background: `${accent}20`,
//             color: accent,
//             transform: hovered ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)",
//           }}
//         >
//           <Icon className="text-2xl" />
//         </div>
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// }

// // ============================================================================
// // Main Markets Component
// // ============================================================================
// const Markets = () => {
//   const [heroRef, heroInView] = useInView({ threshold: 0.1 });
//   const [valueChainRef, valueChainInView] = useInView();

//   // Competence groups – replaced blue accent with orange (#f97316)
//   const competenceGroups = [
//     {
//       title: "Oil & Gas",
//       description:
//         "Comprehensive solutions for upstream, midstream, and downstream oil & gas projects – from wellhead to pipeline and storage.",
//       icon: FaOilCan,
//       accent: "#f97316", // orange (was #38bdf8)
//     },
//     {
//       title: "Refining & Petrochemicals",
//       description:
//         "Process optimization, revamps, and new unit installations for refineries and petrochemical complexes.",
//       icon: GiChemicalTank,
//       accent: "#F5B400", // gold
//     },
//     {
//       title: "SMR (Steam Methane Reforming)",
//       description:
//         "Specialized expertise in hydrogen production, syngas, and associated reforming technologies.",
//       icon: FaIndustry,
//       accent: "#a855f7", // purple
//     },
//     {
//       title: "Renewable Hydrocarbons",
//       description:
//         "Green hydrogen, bio-fuels, e-methanol, and carbon capture – driving the energy transition.",
//       icon: FaLeaf,
//       accent: "#34d399", // emerald
//     },
//   ];

//   // Stats from old content
//   const stats = [
//     { value: 25, label: "Years of Experience", suffix: "+", delay: 0.4 },
//     { value: 700, label: "Projects Delivered", suffix: "+", delay: 0.5 },
//     { value: 1000, label: "Modular Fabrication Capacity", suffix: "T", delay: 0.6 },
//     { value: 15, label: "Countries Worldwide", suffix: "+", delay: 0.7 },
//   ];

//   // Animation keyframes – matching Leadership/Management
//   const animationStyles = `
//     @keyframes fadeUp {
//       0% { opacity: 0; transform: translateY(30px); }
//       100% { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes fadeLeft {
//       0% { opacity: 0; transform: translateX(-30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes fadeRight {
//       0% { opacity: 0; transform: translateX(30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes shimmer {
//       0% { background-position: -200% center; }
//       100% { background-position: 200% center; }
//     }
//     .animate-fadeUp {
//       animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//     }
//     .animate-fadeLeft {
//       animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//     }
//     .animate-fadeRight {
//       animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//     }
//     .delay-100 { animation-delay: 0.1s; }
//     .delay-200 { animation-delay: 0.2s; }
//     .delay-300 { animation-delay: 0.3s; }
//     .delay-400 { animation-delay: 0.4s; }
//     .delay-500 { animation-delay: 0.5s; }
//   `;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
//       <style>{animationStyles}</style>

//       {/* Decorative background circles – matching Leadership */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
//       </div>

//       {/* Hero Section – updated to match Leadership/Management */}
//       <section
//         ref={heroRef}
//         className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('/background.png')` }}
//         />
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           {/* Breadcrumb */}
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>About</span><span>›</span>
//             <span className="text-[#F5B400] font-medium">Our Markets</span>
//           </div>

//           {/* Title with shimmer */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
//             Our{" "}
//             <span
//               className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
//               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
//             >
//               Markets
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto animate-fadeUp delay-200">
//             Pyramid E&C supports Conventional and Renewable hydrocarbon resources owners worldwide in giving shape to their vision and provide Technology, Engineering, Critical Equipment, EPC Solutions and Operational knowledge leading to a path of success and accelerated achievement of financial goals.
//           </p>

         
//         </div>
//       </section>

//       {/* Competence Groups Section */}
//       <section className="py-20 px-6 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-3">
//               Our Organization
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Competence Groups
//             </h2>
//             <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
//               Internally, Pyramid E&C is organized into specialized competence groups to deliver excellence across the energy value chain.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {competenceGroups.map((group, idx) => (
//               <CompetenceCard key={idx} {...group} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Market Dynamics & Innovation Section */}
//       <section className="py-16 px-6 relative z-10 border-t border-white/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4">
//                 Market Dynamics
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 Investing in Research & Technological Developments
//               </h3>
//               <p className="text-gray-400 leading-relaxed mb-4">
//                 Pyramid E&C tracks market dynamics globally and continuously invests in research and technological developments to deliver more efficient, low carbon emission, minimal footprint, modular process plants — often integrated with solar power for emerging market demands.
//               </p>
//               <p className="text-gray-400 leading-relaxed">
//                 Backed by an experience of more than 25 years and 700 projects, our engineering teams keep working to improve solution offerings and enhance customer success.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#F5B400]/30 transition-all">
//                 <FaSolarPanel className="text-3xl text-[#F5B400] mx-auto mb-2" />
//                 <p className="text-sm font-medium">Solar Integration</p>
//               </div>
//               <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#F5B400]/30 transition-all">
//                 <FaLeaf className="text-3xl text-[#34d399] mx-auto mb-2" />
//                 <p className="text-sm font-medium">Low Carbon Emission</p>
//               </div>
//               <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#F5B400]/30 transition-all">
//                 <FaTools className="text-3xl text-[#f97316] mx-auto mb-2" />
//                 <p className="text-sm font-medium">Minimal Footprint</p>
//               </div>
//               <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#F5B400]/30 transition-all">
//                 <FaCogs className="text-3xl text-[#a855f7] mx-auto mb-2" />
//                 <p className="text-sm font-medium">Modular Process Plants</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Value Chain & Fabrication Section */}
//       <section
//         ref={valueChainRef}
//         className="py-16 px-6 relative z-10 border-t border-white/10"
//       >
//         <div
//           className="max-w-6xl mx-auto transition-all duration-700"
//           style={{
//             opacity: valueChainInView ? 1 : 0,
//             transform: valueChainInView ? "translateY(0)" : "translateY(30px)",
//           }}
//         >
//           <div className="text-center mb-10">
//             <h3 className="text-2xl md:text-3xl font-bold text-white">
//               Strong Value Chain & In-House Fabrication
//             </h3>
//             <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
//               Besides investing in technology and specialization, Pyramid E&C maintains a strong value chain to control product quality and remain competitive.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 rounded-2xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all">
//               <FaHardHat className="text-3xl text-[#F5B400] mb-3" />
//               <h4 className="text-xl font-semibold text-white mb-2">High-Value Engineering</h4>
//               <p className="text-gray-400 text-sm">
//                 Our robust in-house engineering team delivers detailed design, process optimization, and digital twins for complex hydrocarbon facilities.
//               </p>
//             </div>
//             <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 rounded-2xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all">
//               <FaShip className="text-3xl text-[#F5B400] mb-3" />
//               <h4 className="text-xl font-semibold text-white mb-2">Modular Fabrication Yard</h4>
//               <p className="text-gray-400 text-sm">
//                 We have our own robust modular fabrication facilities, offering great control over quality and schedule of process plants.
//               </p>
//             </div>
//           </div>
//           <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <FaCheckCircle className="text-[#34d399]" />
//               <span>Quality Control</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <FaCheckCircle className="text-[#34d399]" />
//               <span>Schedule Assurance</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <FaCheckCircle className="text-[#34d399]" />
//               <span>Cost Competitiveness</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 border-t border-white/10 relative z-10">
//         <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//             Partner with Pyramid E&C
//           </h3>
//           <p className="text-gray-400 mb-8 max-w-lg mx-auto">
//             Let us help you accelerate your financial goals with our technology, engineering, and operational expertise.
//           </p>
//           <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
//             Contact Our Experts
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Markets;

import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight, FaOilCan, FaIndustry, FaLeaf,
  FaChartLine, FaHardHat, FaTools, FaFlask,
  FaShip, FaSolarPanel, FaCogs, FaCheckCircle,
} from "react-icons/fa";
import { GiChemicalTank } from "react-icons/gi";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function MarketStat({ value, label, suffix = "", delay }) {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = Math.ceil(value / 40);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(interval); } else setCount(start);
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}s` }}>
      <div className="text-3xl md:text-4xl font-black text-[#F5B400] leading-tight">{count}{suffix}</div>
      <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

// All competence cards: gold accent only
function CompetenceCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${index * 0.1}s` }}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 h-full"
        style={{
          borderColor: hovered ? "rgba(245,180,0,0.50)" : "rgba(255,255,255,0.07)",
          transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
          boxShadow: hovered ? "0 25px 35px -12px rgba(245,180,0,0.25)" : "none",
        }}>
        <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300"
          style={{ background:"linear-gradient(90deg,#F5B400,transparent)", opacity: hovered ? 1 : 0.3 }} />
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{ background:"rgba(245,180,0,0.15)", color:"#F5B400", transform: hovered ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)" }}>
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const competenceGroups = [
  { title:"Oil & Gas",                description:"Comprehensive solutions for upstream, midstream, and downstream oil & gas projects – from wellhead to pipeline and storage.", icon: FaOilCan },
  { title:"Refining & Petrochemicals",description:"Process optimization, revamps, and new unit installations for refineries and petrochemical complexes.", icon: GiChemicalTank },
  { title:"SMR (Steam Methane Reforming)", description:"Specialized expertise in hydrogen production, syngas, and associated reforming technologies.", icon: FaIndustry },
  { title:"Renewable Hydrocarbons",   description:"Green hydrogen, bio-fuels, e-methanol, and carbon capture – driving the energy transition.", icon: FaLeaf },
];

const animationStyles = `
  @keyframes fadeUp  { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft{ 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes fadeRight{0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  .animate-fadeUp  { animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft{ animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight{animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s}
`;

const Markets = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [valueChainRef, valueChainInView] = useInView();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <style>{animationStyles}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url('/background.png')` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-[#F5B400] font-medium">Our Markets</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
            Our{" "}
            <span className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
              style={{ backgroundSize:"200% auto", animation:"shimmer 3s linear infinite" }}>
              Markets
            </span>
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto animate-fadeUp delay-200">
            Pyramid E&C supports Conventional and Renewable hydrocarbon resources owners worldwide in giving shape to their vision and provide Technology, Engineering, Critical Equipment, EPC Solutions and Operational knowledge leading to a path of success and accelerated achievement of financial goals.
          </p>
        </div>
      </section>

      {/* Competence Groups */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-3">Our Organization</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Competence Groups</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Internally, Pyramid E&C is organized into specialized competence groups to deliver excellence across the energy value chain.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competenceGroups.map((group, idx) => <CompetenceCard key={idx} {...group} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Market Dynamics */}
      <section className="py-16 px-6 relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4">Market Dynamics</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Investing in Research & Technological Developments</h3>
              <p className="text-gray-400 leading-relaxed mb-4">Pyramid E&C tracks market dynamics globally and continuously invests in research and technological developments to deliver more efficient, low carbon emission, minimal footprint, modular process plants — often integrated with solar power for emerging market demands.</p>
              <p className="text-gray-400 leading-relaxed">Backed by an experience of more than 25 years and 700 projects, our engineering teams keep working to improve solution offerings and enhance customer success.</p>
            </div>
            {/* 4 feature tiles — all gold */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaSolarPanel, label:"Solar Integration" },
                { icon: FaLeaf,       label:"Low Carbon Emission" },
                { icon: FaTools,      label:"Minimal Footprint" },
                { icon: FaCogs,       label:"Modular Process Plants" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#F5B400]/30 transition-all">
                  <Icon className="text-3xl text-[#F5B400] mx-auto mb-2" />
                  <p className="text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Chain */}
      <section ref={valueChainRef} className="py-16 px-6 relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto transition-all duration-700"
          style={{ opacity: valueChainInView ? 1 : 0, transform: valueChainInView ? "translateY(0)" : "translateY(30px)" }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Strong Value Chain & In-House Fabrication</h3>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Besides investing in technology and specialization, Pyramid E&C maintains a strong value chain to control product quality and remain competitive.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 rounded-2xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all">
              <FaHardHat className="text-3xl text-[#F5B400] mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">High-Value Engineering</h4>
              <p className="text-gray-400 text-sm">Our robust in-house engineering team delivers detailed design, process optimization, and digital twins for complex hydrocarbon facilities.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 rounded-2xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all">
              <FaShip className="text-3xl text-[#F5B400] mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">Modular Fabrication Yard</h4>
              <p className="text-gray-400 text-sm">We have our own robust modular fabrication facilities, offering great control over quality and schedule of process plants.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
            {["Quality Control","Schedule Assurance","Cost Competitiveness"].map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <FaCheckCircle className="text-[#F5B400]" /><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Partner with Pyramid E&C</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Let us help you accelerate your financial goals with our technology, engineering, and operational expertise.</p>
          <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
            Contact Our Experts <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Markets;