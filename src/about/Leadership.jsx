// // import React, { useEffect, useRef, useState } from "react";
// // import {
// //   FaArrowRight,
// //   FaLinkedinIn,
// //   FaEnvelope,
// //   FaIndustry,
// //   FaRocket,
// //   FaChartLine,
// //   FaCogs,
// //   FaGraduationCap,
// //   FaBriefcase,
// //   FaCheckCircle,
// // } from "react-icons/fa";

// // // ============================================================================
// // // Custom hook: triggers once when element enters viewport
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
// //   }, []);

// //   return [ref, inView];
// // }

// // // ============================================================================
// // // Stat Counter Component
// // // ============================================================================
// // function StatCounter({ value, label, suffix = "", delay }) {
// //   const [ref, inView] = useInView();
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     if (!inView) return;
// //     let start = 0;
// //     const increment = Math.ceil(value / 40);
// //     const interval = setInterval(() => {
// //       start += increment;
// //       if (start >= value) {
// //         setCount(value);
// //         clearInterval(interval);
// //       } else {
// //         setCount(start);
// //       }
// //     }, 30);
// //     return () => clearInterval(interval);
// //   }, [inView, value]);

// //   return (
// //     <div
// //       ref={ref}
// //       className="text-center transition-all duration-700"
// //       style={{
// //         opacity: inView ? 1 : 0,
// //         transform: inView ? "translateY(0)" : "translateY(20px)",
// //         transitionDelay: `${delay}s`,
// //       }}
// //     >
// //       <div className="text-3xl md:text-4xl font-black text-[#F5B400] leading-tight">
// //         {count}{suffix}
// //       </div>
// //       <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
// //         {label}
// //       </div>
// //     </div>
// //   );
// // }

// // // ============================================================================
// // // Pillar Card Component
// // // ============================================================================
// // function PillarCard({ title, description, icon: Icon, accent, index }) {
// //   const [ref, inView] = useInView();
// //   const [hovered, setHovered] = useState(false);
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
// //       <div
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //         className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 h-full"
// //         style={{
// //           borderColor: hovered ? `${accent}60` : "rgba(255,255,255,0.07)",
// //           transform: hovered ? "translateY(-6px)" : "translateY(0)",
// //           boxShadow: hovered ? `0 20px 30px -12px ${accent}30` : "none",
// //         }}
// //       >
// //         <div
// //           className="absolute top-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300"
// //           style={{
// //             background: `linear-gradient(90deg, ${accent}, transparent)`,
// //             opacity: hovered ? 1 : 0.3,
// //           }}
// //         />
// //         <div
// //           className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
// //           style={{
// //             background: `${accent}20`,
// //             color: accent,
// //             transform: hovered ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)",
// //           }}
// //         >
// //           <Icon className="text-2xl" />
// //         </div>
// //         <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
// //         <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // // ============================================================================
// // // Main Leadership Component
// // // ============================================================================
// // const Leadership = () => {
// //   const [visionRef, visionInView] = useInView();

// //   const visionPillars = [
// //     {
// //       title: "Industrial EPC Excellence",
// //       description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.",
// //       icon: FaIndustry,
// //       accent: "#f97316", // Orange (replaced blue)
// //     },
// //     {
// //       title: "Technology Commercialization & Innovation",
// //       description: "Scale transformative industrial solutions that drive efficiency and sustainability.",
// //       icon: FaRocket,
// //       accent: "#F5B400", // Gold
// //     },
// //     {
// //       title: "Strategic Capital Deployment",
// //       description: "Invest in technology and sports for lasting impact and long-term value creation.",
// //       icon: FaChartLine,
// //       accent: "#a855f7", // Purple
// //     },
// //   ];

// //   const coreSkills = [
// //     "Global Operations & Multi-Geography Leadership",
// //     "Technology Commercialization & Strategic Investments",
// //     "Hydrocarbon Process Plant Design & Execution",
// //     "Compact Reactor Systems",
// //   ];

// //   const investmentFocus = [
// //     "Low-carbon technologies",
// //     "Process intensification, digitalization & automation",
// //   ];

// //   const globalCareer = [
// //     { region: "Asia", achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
// //     { region: "Middle East", achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
// //     { region: "Europe", achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
// //     { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
// //   ];

// //   // Animation keyframes
// //   const animationStyles = `
// //     @keyframes fadeUp {
// //       0% { opacity: 0; transform: translateY(30px); }
// //       100% { opacity: 1; transform: translateY(0); }
// //     }
// //     @keyframes fadeLeft {
// //       0% { opacity: 0; transform: translateX(-30px); }
// //       100% { opacity: 1; transform: translateX(0); }
// //     }
// //     @keyframes fadeRight {
// //       0% { opacity: 0; transform: translateX(30px); }
// //       100% { opacity: 1; transform: translateX(0); }
// //     }
// //     @keyframes shimmer {
// //       0% { background-position: -200% center; }
// //       100% { background-position: 200% center; }
// //     }
// //     @keyframes softFloat {
// //       0% { transform: translateY(0px); }
// //       50% { transform: translateY(-8px); }
// //       100% { transform: translateY(0px); }
// //     }
// //     .animate-fadeUp {
// //       animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
// //     }
// //     .animate-fadeLeft {
// //       animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
// //     }
// //     .animate-fadeRight {
// //       animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
// //     }
// //     .animate-float {
// //       animation: softFloat 4s ease-in-out infinite;
// //     }
// //     .delay-100 { animation-delay: 0.1s; }
// //     .delay-200 { animation-delay: 0.2s; }
// //     .delay-300 { animation-delay: 0.3s; }
// //     .delay-400 { animation-delay: 0.4s; }
// //     .delay-500 { animation-delay: 0.5s; }
// //   `;

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
// //       <style>{animationStyles}</style>

// //       {/* Decorative background elements */}
// //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
// //         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
// //       </div>

// //       {/* Hero Banner */}
// //       <section className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
// //         <div
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{ backgroundImage: `url('/background.png')` }}
// //         />
// //         <div className="absolute inset-0 bg-black/60" />

// //         <div className="max-w-7xl mx-auto relative z-10 text-center">
// //           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
// //             <span>Home</span><span>›</span><span>Company</span><span>›</span>
// //             <span className="text-[#F5B400] font-medium">Leadership</span>
// //           </div>
// //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
// //             Our{" "}
// //             <span
// //               className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
// //               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
// //             >
// //               Leadership
// //             </span>
// //           </h1>
// //           <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
// //             Visionary direction, operational excellence, and a commitment to global impact.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Founder Spotlight (Text left, Image right) */}
// //       <section className="py-20 px-6 relative z-10 border-b border-white/10">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div className="text-center md:text-left">
// //               <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4 animate-fadeLeft delay-100">
// //                 Meet The Founder
// //               </div>
// //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
// //                 <span className="bg-gradient-to-r from-[#F5B400] via-[#FFC107] to-[#F5B400] bg-clip-text text-transparent">
// //                   Ashish Bajpai
// //                 </span>
// //               </h2>
// //               <p className="text-xl text-[#F5B400] font-semibold mt-2 animate-fadeLeft delay-300">
// //                 Chairman, Pyramid E&C Group
// //               </p>
// //               <p className="text-gray-300 mt-4 leading-relaxed animate-fadeLeft delay-400">
// //                 Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
// //               </p>
// //               <div className="flex justify-center md:justify-start gap-4 mt-6 animate-fadeLeft delay-500">
// //                 <a
// //                   href="https://linkedin.com/in/ashish-bajpai"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F5B400]/20 transition-all hover:scale-110"
// //                 >
// //                   <FaLinkedinIn className="text-[#F5B400]" />
// //                 </a>
// //                 <a
// //                   href="mailto:ashish.bajpai@pyramid-ec.com"
// //                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F5B400]/20 transition-all hover:scale-110"
// //                 >
// //                   <FaEnvelope className="text-[#F5B400]" />
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="flex justify-center animate-fadeRight delay-200">
// //               <div className="relative group">
// //                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F5B400]/30 to-[#FFC107]/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
// //                 <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-[#F5B400]/40 shadow-2xl shadow-[#F5B400]/20 animate-float">
// //                   <img
// //                     src="/Ashish-Bajpai.jpg"
// //                     alt="Ashish Bajpai - Founder & Chairman"
// //                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Leadership Overview */}
// //       <section className="py-16 px-6 relative z-10 border-b border-white/10">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4">
// //             Leadership Overview
// //           </div>
// //           <p className="text-gray-300 text-lg leading-relaxed">
// //             Mr. Bajpai is a globally recognized leader in hydrocarbon and renewable energy technologies.
// //             As Founder of Pyramid E&C Group, he has built a world-class EPC organization delivering over
// //             700 projects across Asia, the Middle East, Europe, and the USA.
// //           </p>
// //           <p className="text-gray-400 mt-4">
// //             He combines technical mastery, strategic vision, and operational excellence with active
// //             investment in technology and sports ventures, fostering innovation, performance, and
// //             long-term value creation.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Vision & Strategic Direction */}
// //       <section ref={visionRef} className="py-16 px-6 relative z-10 border-b border-white/10">
// //         <div className="max-w-7xl mx-auto">
// //           <div
// //             className="text-center mb-12 transition-all duration-700"
// //             style={{
// //               opacity: visionInView ? 1 : 0,
// //               transform: visionInView ? "translateY(0)" : "translateY(30px)",
// //             }}
// //           >
// //             <h2 className="text-3xl md:text-4xl font-bold text-white">Vision & Strategic Direction</h2>
// //             <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
// //               Long-term leadership pillars driving Pyramid E&C's growth
// //             </p>
// //           </div>
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {visionPillars.map((pillar, idx) => (
// //               <PillarCard key={idx} {...pillar} index={idx} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Core Expertise & Skills */}
// //       <section className="py-16 px-6 relative z-10 border-b border-white/10">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaCogs className="text-3xl text-[#F5B400]" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-white">Core Expertise & Skills</h2>
// //               </div>
// //               <ul className="space-y-3">
// //                 {coreSkills.map((skill, i) => (
// //                   <li key={i} className="flex items-center gap-3 text-gray-300">
// //                     <FaCheckCircle className="text-[#F5B400] text-sm" />
// //                     <span>{skill}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaChartLine className="text-3xl text-[#F5B400]" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-white">Investment Focus</h2>
// //               </div>
// //               <p className="text-gray-400 mb-4">
// //                 Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.
// //               </p>
// //               <ul className="space-y-3">
// //                 {investmentFocus.map((item, i) => (
// //                   <li key={i} className="flex items-center gap-3 text-gray-300">
// //                     <FaCheckCircle className="text-[#F5B400] text-sm" />
// //                     <span>{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Professional Journey & Education */}
// //       <section className="py-16 px-6 relative z-10 border-b border-white/10">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaBriefcase className="text-3xl text-[#F5B400]" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Journey</h2>
// //               </div>
// //               <ul className="space-y-4 text-gray-300">
// //                 <li className="flex gap-3"><span className="text-[#F5B400] font-bold">•</span><span>Established a globally respected EPC contractor</span></li>
// //                 <li className="flex gap-3"><span className="text-[#F5B400] font-bold">•</span><span>Delivered integrated Technology, Services, Products, and Solutions</span></li>
// //                 <li className="flex gap-3"><span className="text-[#F5B400] font-bold">•</span><span>Areas: Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels</span></li>
// //                 <li className="flex gap-3"><span className="text-[#F5B400] font-bold">•</span><span>Teams in India & Houston; international operations from Houston, London, Dubai</span></li>
// //               </ul>
// //               <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
// //                 <h4 className="font-semibold text-[#F5B400]">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
// //                 <p className="text-gray-400 text-sm mt-1">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
// //               </div>
// //             </div>
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaGraduationCap className="text-3xl text-[#F5B400]" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
// //               </div>
// //               <div className="space-y-4">
// //                 <div className="bg-white/5 rounded-xl p-4 border border-white/10">
// //                   <h4 className="font-semibold text-white">M.Tech. – Process Engineering & Design</h4>
// //                   <p className="text-[#F5B400] text-sm">IIT Delhi, India | 1991</p>
// //                 </div>
// //                 <div className="bg-white/5 rounded-xl p-4 border border-white/10">
// //                   <h4 className="font-semibold text-white">B.Tech. – Hydrocarbon Technologies</h4>
// //                   <p className="text-[#F5B400] text-sm">IIT Roorkee, India | 1989</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ========== GLOBAL CAREER TABLE (Updated styling – no blue) ========== */}
// //       <section className="py-16 px-6 relative z-10 border-b border-white/10">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-10">
// //             <h2 className="text-3xl md:text-4xl font-bold text-white">Global Career</h2>
// //             <p className="text-gray-400 mt-2">Leading complex projects across continents</p>
// //           </div>
// //           <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
// //             <table className="w-full border-collapse">
// //               <thead>
// //                 <tr className="border-b border-white/10 bg-white/5">
// //                   <th className="text-left py-4 px-6 text-[#F5B400] font-semibold text-base">Region</th>
// //                   <th className="text-left py-4 px-6 text-[#F5B400] font-semibold text-base">Role & Achievements</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {globalCareer.map((item, i) => (
// //                   <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition duration-200">
// //                     <td className="py-4 px-6 font-medium text-white">{item.region}</td>
// //                     <td className="py-4 px-6 text-gray-300">{item.achievements}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats / Highlights */}
// //       <section className="py-16 px-6 relative z-10">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
// //             <StatCounter value={700} label="Projects Delivered" suffix="+" delay={0.2} />
// //             <StatCounter value={25} label="Years of Leadership" suffix="+" delay={0.3} />
// //             <StatCounter value={15} label="Countries" suffix="+" delay={0.4} />
// //             <StatCounter value={4} label="Continents" suffix="" delay={0.5} />
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-20 px-6 border-t border-white/10 relative z-10">
// //         <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
// //           <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Partner with a Visionary Leader</h3>
// //           <p className="text-gray-400 mb-8 max-w-lg mx-auto">Connect with Ashish Bajpai to explore how Pyramid E&C can drive your next energy project.</p>
// //           <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
// //             Contact Leadership
// //             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Leadership;


// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaArrowRight, FaLinkedinIn, FaEnvelope,
//   FaIndustry, FaRocket, FaChartLine,
//   FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
// } from "react-icons/fa";

// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
//       { threshold: 0.2, ...options }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);
//   return [ref, inView];
// }

// function StatCounter({ value, label, suffix = "", delay }) {
//   const [ref, inView] = useInView();
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const increment = Math.ceil(value / 40);
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= value) { setCount(value); clearInterval(interval); } else setCount(start);
//     }, 30);
//     return () => clearInterval(interval);
//   }, [inView, value]);
//   return (
//     <div ref={ref} className="text-center transition-all duration-700"
//       style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}s` }}>
//       <div className="text-3xl md:text-4xl font-black text-[#F5B400] leading-tight">{count}{suffix}</div>
//       <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</div>
//     </div>
//   );
// }

// // Single gold accent for all pillar cards
// function PillarCard({ title, description, icon: Icon, index }) {
//   const [ref, inView] = useInView();
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div ref={ref} className="transition-all duration-700"
//       style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${index * 0.1}s` }}>
//       <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
//         className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 h-full"
//         style={{
//           borderColor: hovered ? "rgba(245,180,0,0.50)" : "rgba(255,255,255,0.07)",
//           transform: hovered ? "translateY(-6px)" : "translateY(0)",
//           boxShadow: hovered ? "0 20px 30px -12px rgba(245,180,0,0.25)" : "none",
//         }}>
//         <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300"
//           style={{ background: "linear-gradient(90deg,#F5B400,transparent)", opacity: hovered ? 1 : 0.3 }} />
//         <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
//           style={{ background:"rgba(245,180,0,0.15)", color:"#F5B400", transform: hovered ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)" }}>
//           <Icon className="text-2xl" />
//         </div>
//         <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
//         <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// }

// const visionPillars = [
//   { title: "Industrial EPC Excellence",              description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.", icon: FaIndustry },
//   { title: "Technology Commercialization & Innovation", description: "Scale transformative industrial solutions that drive efficiency and sustainability.", icon: FaRocket },
//   { title: "Strategic Capital Deployment",           description: "Invest in technology and sports for lasting impact and long-term value creation.", icon: FaChartLine },
// ];

// const coreSkills = [
//   "Global Operations & Multi-Geography Leadership",
//   "Technology Commercialization & Strategic Investments",
//   "Hydrocarbon Process Plant Design & Execution",
//   "Compact Reactor Systems",
// ];

// const investmentFocus = [
//   "Low-carbon technologies",
//   "Process intensification, digitalization & automation",
// ];

// const globalCareer = [
//   { region: "Asia",          achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
//   { region: "Middle East",   achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
//   { region: "Europe",        achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
//   { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
// ];

// const animationStyles = `
//   @keyframes fadeUp  { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
//   @keyframes fadeLeft{ 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
//   @keyframes fadeRight{0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
//   @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
//   @keyframes softFloat{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
//   .animate-fadeUp  { animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeLeft{ animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeRight{animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-float   { animation: softFloat 4s ease-in-out infinite; }
//   .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
//   .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
// `;

// const Leadership = () => {
//   const [visionRef, visionInView] = useInView();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
//       <style>{animationStyles}</style>

//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
//       </div>

//       {/* Hero */}
//       <section className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url('/background.png')` }} />
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>Company</span><span>›</span>
//             <span className="text-[#F5B400] font-medium">Leadership</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
//             Our{" "}
//             <span className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
//               style={{ backgroundSize:"200% auto", animation:"shimmer 3s linear infinite" }}>
//               Leadership
//             </span>
//           </h1>
//           <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
//             Visionary direction, operational excellence, and a commitment to global impact.
//           </p>
//         </div>
//       </section>

//       {/* Founder Spotlight */}
//       <section className="py-20 px-6 relative z-10 border-b border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="text-center md:text-left">
//               <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4 animate-fadeLeft delay-100">Meet The Founder</div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
//                 <span className="bg-gradient-to-r from-[#F5B400] via-[#FFC107] to-[#F5B400] bg-clip-text text-transparent">Ashish Bajpai</span>
//               </h2>
//               <p className="text-xl text-[#F5B400] font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
//               <p className="text-gray-300 mt-4 leading-relaxed animate-fadeLeft delay-400">
//                 Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
//               </p>
//               <div className="flex justify-center md:justify-start gap-4 mt-6 animate-fadeLeft delay-500">
//                 <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F5B400]/20 transition-all hover:scale-110">
//                   <FaLinkedinIn className="text-[#F5B400]" />
//                 </a>
//                 <a href="mailto:ashish.bajpai@pyramid-ec.com"
//                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F5B400]/20 transition-all hover:scale-110">
//                   <FaEnvelope className="text-[#F5B400]" />
//                 </a>
//               </div>
//             </div>
//             <div className="flex justify-center animate-fadeRight delay-200">
//               <div className="relative group">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F5B400]/30 to-[#FFC107]/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
//                 <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-[#F5B400]/40 shadow-2xl shadow-[#F5B400]/20 animate-float">
//                   <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-16 px-6 relative z-10 border-b border-white/10">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4">Leadership Overview</div>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Mr. Bajpai is a globally recognized leader in hydrocarbon and renewable energy technologies. As Founder of Pyramid E&C Group, he has built a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
//           </p>
//           <p className="text-gray-400 mt-4">He combines technical mastery, strategic vision, and operational excellence with active investment in technology and sports ventures, fostering innovation, performance, and long-term value creation.</p>
//         </div>
//       </section>

//       {/* Vision */}
//       <section ref={visionRef} className="py-16 px-6 relative z-10 border-b border-white/10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 transition-all duration-700"
//             style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Vision & Strategic Direction</h2>
//             <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
//           </div>
//         </div>
//       </section>

//       {/* Core Expertise */}
//       <section className="py-16 px-6 relative z-10 border-b border-white/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaCogs className="text-3xl text-[#F5B400]" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-white">Core Expertise & Skills</h2>
//               </div>
//               <ul className="space-y-3">
//                 {coreSkills.map((skill, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-300">
//                     <FaCheckCircle className="text-[#F5B400] text-sm flex-shrink-0" /><span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaChartLine className="text-3xl text-[#F5B400]" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-white">Investment Focus</h2>
//               </div>
//               <p className="text-gray-400 mb-4">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
//               <ul className="space-y-3">
//                 {investmentFocus.map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-300">
//                     <FaCheckCircle className="text-[#F5B400] text-sm flex-shrink-0" /><span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Journey & Education */}
//       <section className="py-16 px-6 relative z-10 border-b border-white/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaBriefcase className="text-3xl text-[#F5B400]" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Journey</h2>
//               </div>
//               <ul className="space-y-4 text-gray-300">
//                 {["Established a globally respected EPC contractor","Delivered integrated Technology, Services, Products, and Solutions","Areas: Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels","Teams in India & Houston; international operations from Houston, London, Dubai"].map((pt,i)=>(
//                   <li key={i} className="flex gap-3"><span className="text-[#F5B400] font-bold">•</span><span>{pt}</span></li>
//                 ))}
//               </ul>
//               <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
//                 <h4 className="font-semibold text-[#F5B400]">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
//                 <p className="text-gray-400 text-sm mt-1">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaGraduationCap className="text-3xl text-[#F5B400]" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
//               </div>
//               <div className="space-y-4">
//                 <div className="bg-white/5 rounded-xl p-4 border border-white/10">
//                   <h4 className="font-semibold text-white">M.Tech. – Process Engineering & Design</h4>
//                   <p className="text-[#F5B400] text-sm">IIT Delhi, India | 1991</p>
//                 </div>
//                 <div className="bg-white/5 rounded-xl p-4 border border-white/10">
//                   <h4 className="font-semibold text-white">B.Tech. – Hydrocarbon Technologies</h4>
//                   <p className="text-[#F5B400] text-sm">IIT Roorkee, India | 1989</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Global Career */}
//       <section className="py-16 px-6 relative z-10 border-b border-white/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Global Career</h2>
//             <p className="text-gray-400 mt-2">Leading complex projects across continents</p>
//           </div>
//           <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="border-b border-white/10 bg-white/5">
//                   <th className="text-left py-4 px-6 text-[#F5B400] font-semibold text-base">Region</th>
//                   <th className="text-left py-4 px-6 text-[#F5B400] font-semibold text-base">Role & Achievements</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {globalCareer.map((item, i) => (
//                   <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition duration-200">
//                     <td className="py-4 px-6 font-medium text-white">{item.region}</td>
//                     <td className="py-4 px-6 text-gray-300">{item.achievements}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 px-6 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <StatCounter value={700} label="Projects Delivered" suffix="+" delay={0.2} />
//             <StatCounter value={25}  label="Years of Leadership" suffix="+" delay={0.3} />
//             <StatCounter value={15}  label="Countries" suffix="+" delay={0.4} />
//             <StatCounter value={4}   label="Continents" suffix="" delay={0.5} />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 border-t border-white/10 relative z-10">
//         <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Partner with a Visionary Leader</h3>
//           <p className="text-gray-400 mb-8 max-w-lg mx-auto">Connect with Ashish Bajpai to explore how Pyramid E&C can drive your next energy project.</p>
//           <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
//             Contact Leadership <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Leadership;

import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight, FaLinkedinIn, FaEnvelope,
  FaIndustry, FaRocket, FaChartLine,
  FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
} from "react-icons/fa";

// ✅ Fixed: Added 'options' to dependency array
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
  }, [options]); // ✅ options is now correctly included
  return [ref, inView];
}

function StatCounter({ value, label, suffix = "", delay }) {
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

function PillarCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${index * 0.1}s` }}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 h-full"
        style={{
          borderColor: hovered ? "rgba(245,180,0,0.50)" : "rgba(255,255,255,0.07)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? "0 20px 30px -12px rgba(245,180,0,0.25)" : "none",
        }}>
        <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300"
          style={{ background: "linear-gradient(90deg,#F5B400,transparent)", opacity: hovered ? 1 : 0.3 }} />
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{ background:"rgba(245,180,0,0.15)", color:"#F5B400", transform: hovered ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)" }}>
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const visionPillars = [
  { title: "Industrial EPC Excellence",              description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.", icon: FaIndustry },
  { title: "Technology Commercialization & Innovation", description: "Scale transformative industrial solutions that drive efficiency and sustainability.", icon: FaRocket },
  { title: "Strategic Capital Deployment",           description: "Invest in technology and sports for lasting impact and long-term value creation.", icon: FaChartLine },
];

const coreSkills = [
  "Global Operations & Multi-Geography Leadership",
  "Technology Commercialization & Strategic Investments",
  "Hydrocarbon Process Plant Design & Execution",
  "Compact Reactor Systems",
];

const investmentFocus = [
  "Low-carbon technologies",
  "Process intensification, digitalization & automation",
];

const globalCareer = [
  { region: "Asia",          achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
  { region: "Middle East",   achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
  { region: "Europe",        achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
  { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
];

const animationStyles = `
  @keyframes fadeUp  { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft{ 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes fadeRight{0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes softFloat{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  .animate-fadeUp  { animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft{ animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight{animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-float   { animation: softFloat 4s ease-in-out infinite; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
`;

const Leadership = () => {
  const [visionRef, visionInView] = useInView();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <style>{animationStyles}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url('/background.png')` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>Company</span><span>›</span>
            <span className="text-[#F5B400] font-medium">Leadership</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
            Our{" "}
            <span className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
              style={{ backgroundSize:"200% auto", animation:"shimmer 3s linear infinite" }}>
              Leadership
            </span>
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
            Visionary direction, operational excellence, and a commitment to global impact.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 px-6 relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4 animate-fadeLeft delay-100">Meet The Founder</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
                <span className="bg-gradient-to-r from-[#F5B400] via-[#FFC107] to-[#F5B400] bg-clip-text text-transparent">Ashish Bajpai</span>
              </h2>
              <p className="text-xl text-[#F5B400] font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
              <p className="text-gray-300 mt-4 leading-relaxed animate-fadeLeft delay-400">
                Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-6 animate-fadeLeft delay-500">
                <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F5B400]/20 transition-all hover:scale-110">
                  <FaLinkedinIn className="text-[#F5B400]" />
                </a>
                <a href="mailto:ashish.bajpai@pyramid-ec.com"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F5B400]/20 transition-all hover:scale-110">
                  <FaEnvelope className="text-[#F5B400]" />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-fadeRight delay-200">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F5B400]/30 to-[#FFC107]/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-[#F5B400]/40 shadow-2xl shadow-[#F5B400]/20 animate-float">
                  <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 relative z-10 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4">Leadership Overview</div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mr. Bajpai is a globally recognized leader in hydrocarbon and renewable energy technologies. As Founder of Pyramid E&C Group, he has built a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
          </p>
          <p className="text-gray-400 mt-4">He combines technical mastery, strategic vision, and operational excellence with active investment in technology and sports ventures, fostering innovation, performance, and long-term value creation.</p>
        </div>
      </section>

      {/* Vision */}
      <section ref={visionRef} className="py-16 px-6 relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 transition-all duration-700"
            style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Vision & Strategic Direction</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 px-6 relative z-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaCogs className="text-3xl text-[#F5B400]" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Core Expertise & Skills</h2>
              </div>
              <ul className="space-y-3">
                {coreSkills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-[#F5B400] text-sm flex-shrink-0" /><span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="text-3xl text-[#F5B400]" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Investment Focus</h2>
              </div>
              <p className="text-gray-400 mb-4">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
              <ul className="space-y-3">
                {investmentFocus.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-[#F5B400] text-sm flex-shrink-0" /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Education */}
      <section className="py-16 px-6 relative z-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-3xl text-[#F5B400]" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Journey</h2>
              </div>
              <ul className="space-y-4 text-gray-300">
                {["Established a globally respected EPC contractor","Delivered integrated Technology, Services, Products, and Solutions","Areas: Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels","Teams in India & Houston; international operations from Houston, London, Dubai"].map((pt,i)=>(
                  <li key={i} className="flex gap-3"><span className="text-[#F5B400] font-bold">•</span><span>{pt}</span></li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-[#F5B400]">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
                <p className="text-gray-400 text-sm mt-1">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-3xl text-[#F5B400]" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold text-white">M.Tech. – Process Engineering & Design</h4>
                  <p className="text-[#F5B400] text-sm">IIT Delhi, India | 1991</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="font-semibold text-white">B.Tech. – Hydrocarbon Technologies</h4>
                  <p className="text-[#F5B400] text-sm">IIT Roorkee, India | 1989</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Career */}
      <section className="py-16 px-6 relative z-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Global Career</h2>
            <p className="text-gray-400 mt-2">Leading complex projects across continents</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left py-4 px-6 text-[#F5B400] font-semibold text-base">Region</th>
                  <th className="text-left py-4 px-6 text-[#F5B400] font-semibold text-base">Role & Achievements</th>
                </tr>
              </thead>
              <tbody>
                {globalCareer.map((item, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition duration-200">
                    <td className="py-4 px-6 font-medium text-white">{item.region}</td>
                    <td className="py-4 px-6 text-gray-300">{item.achievements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCounter value={700} label="Projects Delivered" suffix="+" delay={0.2} />
            <StatCounter value={25}  label="Years of Leadership" suffix="+" delay={0.3} />
            <StatCounter value={15}  label="Countries" suffix="+" delay={0.4} />
            <StatCounter value={4}   label="Continents" suffix="" delay={0.5} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Partner with a Visionary Leader</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Connect with Ashish Bajpai to explore how Pyramid E&C can drive your next energy project.</p>
          <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
            Contact Leadership <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;