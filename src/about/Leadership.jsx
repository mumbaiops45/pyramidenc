// // import React, { useEffect, useRef, useState } from "react";
// // import {
// //   FaArrowRight, FaLinkedinIn, FaEnvelope,
// //   FaIndustry, FaRocket, FaChartLine,
// //   FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
// // } from "react-icons/fa";
// // import { Link } from "react-router-dom";


// // // ✅ Fixed: Added 'options' to dependency array
// // function useInView(options = {}) {
// //   const ref = useRef(null);
// //   const [inView, setInView] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const observer = new IntersectionObserver(
// //       ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
// //       { threshold: 0.2, ...options }
// //     );
// //     observer.observe(el);
// //     return () => observer.disconnect();
// //   }, [options]);
// //   return [ref, inView];
// // }

// // function StatCounter({ value, label, suffix = "", delay }) {
// //   const [ref, inView] = useInView();
// //   const [count, setCount] = useState(0);
// //   useEffect(() => {
// //     if (!inView) return;
// //     let start = 0;
// //     const increment = Math.ceil(value / 40);
// //     const interval = setInterval(() => {
// //       start += increment;
// //       if (start >= value) { setCount(value); clearInterval(interval); } else setCount(start);
// //     }, 30);
// //     return () => clearInterval(interval);
// //   }, [inView, value]);
// //   return (
// //     <div ref={ref} className="text-center transition-all duration-700"
// //       style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}s` }}>
// //       <div className="text-3xl md:text-4xl font-black text-amber-500 leading-tight">{count}{suffix}</div>
// //       <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</div>
// //     </div>
// //   );
// // }

// // // Light‑theme pillar card (white background, amber hover)
// // function PillarCard({ title, description, icon: Icon, index }) {
// //   const [ref, inView] = useInView();
// //   const [hovered, setHovered] = useState(false);
// //   return (
// //     <div ref={ref} className="transition-all duration-700"
// //       style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${index * 0.1}s` }}>
// //       <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
// //         className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
// //         style={{
// //           transform: hovered ? "translateY(-6px)" : "translateY(0)",
// //         }}>
// //         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
// //         <div className="p-6">
// //           <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
// //             <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
// //           </div>
// //           <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
// //           <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const visionPillars = [
// //   { title: "Industrial EPC Excellence", description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.", icon: FaIndustry },
// //   { title: "Technology Commercialization & Innovation", description: "Scale transformative industrial solutions that drive efficiency and sustainability.", icon: FaRocket },
// //   { title: "Strategic Capital Deployment", description: "Invest in technology and sports for lasting impact and long-term value creation.", icon: FaChartLine },
// // ];

// // const coreSkills = [
// //   "Global Operations & Multi-Geography Leadership",
// //   "Technology Commercialization & Strategic Investments",
// //   "Hydrocarbon Process Plant Design & Execution",
// //   "Compact Reactor Systems",
// // ];

// // const investmentFocus = [
// //   "Low-carbon technologies",
// //   "Process intensification, digitalization & automation",
// // ];

// // const globalCareer = [
// //   { region: "Asia", achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
// //   { region: "Middle East", achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
// //   { region: "Europe", achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
// //   { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
// // ];

// // const animationStyles = `
// //   @keyframes fadeUp  { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
// //   @keyframes fadeLeft{ 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
// //   @keyframes fadeRight{0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
// //   @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-20px) rotate(5deg)} }
// //   @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
// //   .animate-fadeUp  { animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //   .animate-fadeLeft{ animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //   .animate-fadeRight{animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
// //   .animate-float   { animation: float 6s ease-in-out infinite; }
// //   .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
// //   .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
// // `;

// // const Leadership = () => {
// //   const [visionRef, visionInView] = useInView();

// //   return (
// //     <div className="bg-white">
// //       <style>{animationStyles}</style>

// //       {/* Hero Section – centered with background image and floating circles */}
// //       <section className="relative overflow-hidden text-white">
// //         {/* Background image */}
// //         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/background.png')` }} />
// //         <div className="absolute inset-0 bg-black/60 z-0"></div>

// //         {/* Animated floating amber circles */}
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
// //           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
// //           <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
// //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
// //         </div>

// //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
// //           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
// //             <span>Home</span><span>›</span><span>Company</span><span>›</span>
// //             <span className="text-amber-400 font-medium">Leadership</span>
// //           </div>
// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
// //             Our{" "}
// //             <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
// //               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}>
// //               Leadership
// //             </span>
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
// //             Visionary direction, operational excellence, and a commitment to global impact.
// //           </p>
// //         </div>

// //         {/* Bottom fade to white */}
// //         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
// //       </section>

// //       {/* Founder Spotlight (text left, image right) – light version */}
// //       <section className="py-20 px-6 relative z-10 border-b border-gray-100">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div className="text-center md:text-left">
// //               <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeLeft delay-100">Meet The Founder</div>
// //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
// //                 <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Ashish Bajpai</span>
// //               </h2>
// //               <p className="text-xl text-amber-600 font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
// //               <p className="text-gray-600 mt-4 leading-relaxed animate-fadeLeft delay-400">
// //                 Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
// //               </p>
// //               <div className="flex justify-center md:justify-start gap-4 mt-6 animate-fadeLeft delay-500">
// //                 <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
// //                   className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
// //                   <FaLinkedinIn className="text-lg" />
// //                 </a>
// //                 <a href="mailto:ashish.bajpai@pyramid-ec.com"
// //                   className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
// //                   <FaEnvelope className="text-lg" />
// //                 </a>
// //               </div>
// //             </div>
// //             <div className="flex justify-center animate-fadeRight delay-200">
// //               <div className="relative group">
// //                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-300/30 to-amber-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
// //                 <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl shadow-amber-200 animate-float">
// //                   <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Leadership Overview */}
// //       <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">Leadership Overview</div>
// //           <p className="text-gray-700 text-lg leading-relaxed">
// //             Mr. Bajpai is a globally recognized leader in hydrocarbon and renewable energy technologies. As Founder of Pyramid E&C Group, he has built a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
// //           </p>
// //           <p className="text-gray-600 mt-4">He combines technical mastery, strategic vision, and operational excellence with active investment in technology and sports ventures, fostering innovation, performance, and long-term value creation.</p>
// //         </div>
// //       </section>

// //       {/* Vision & Strategic Direction */}
// //       <section ref={visionRef} className="py-20 px-6 relative z-10 border-b border-gray-100">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-12 transition-all duration-700"
// //             style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Strategic Direction</h2>
// //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4 mb-4"></div>
// //             <p className="text-gray-600 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
// //           </div>
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Core Expertise & Skills */}
// //       <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaCogs className="text-3xl text-amber-500" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise & Skills</h2>
// //               </div>
// //               <ul className="space-y-3">
// //                 {coreSkills.map((skill, i) => (
// //                   <li key={i} className="flex items-center gap-3 text-gray-700">
// //                     <FaCheckCircle className="text-amber-500 text-sm flex-shrink-0" /><span>{skill}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaChartLine className="text-3xl text-amber-500" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Focus</h2>
// //               </div>
// //               <p className="text-gray-600 mb-4">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
// //               <ul className="space-y-3">
// //                 {investmentFocus.map((item, i) => (
// //                   <li key={i} className="flex items-center gap-3 text-gray-700">
// //                     <FaCheckCircle className="text-amber-500 text-sm flex-shrink-0" /><span>{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Professional Journey & Education */}
// //       <section className="py-16 px-6 relative z-10 border-b border-gray-100">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaBriefcase className="text-3xl text-amber-500" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Journey</h2>
// //               </div>
// //               <ul className="space-y-4 text-gray-700">
// //                 {["Established a globally respected EPC contractor", "Delivered integrated Technology, Services, Products, and Solutions", "Areas: Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels", "Teams in India & Houston; international operations from Houston, London, Dubai"].map((pt, i) => (
// //                   <li key={i} className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>{pt}</span></li>
// //                 ))}
// //               </ul>
// //               <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
// //                 <h4 className="font-semibold text-amber-600">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
// //                 <p className="text-gray-600 text-sm mt-1">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
// //               </div>
// //             </div>
// //             <div>
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FaGraduationCap className="text-3xl text-amber-500" />
// //                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
// //               </div>
// //               <div className="space-y-4">
// //                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
// //                   <h4 className="font-semibold text-gray-900">M.Tech. – Process Engineering & Design</h4>
// //                   <p className="text-amber-600 text-sm">IIT Delhi, India | 1991</p>
// //                 </div>
// //                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
// //                   <h4 className="font-semibold text-gray-900">B.Tech. – Hydrocarbon Technologies</h4>
// //                   <p className="text-amber-600 text-sm">IIT Roorkee, India | 1989</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Global Career Table – light theme */}
// //       <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-10">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Global Career</h2>
// //             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3"></div>
// //             <p className="text-gray-600">Leading complex projects across continents</p>
// //           </div>
// //           <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
// //             <table className="w-full border-collapse">
// //               <thead>
// //                 <tr className="border-b border-gray-200 bg-gray-50">
// //                   <th className="text-left py-4 px-6 text-amber-600 font-semibold text-base">Region</th>
// //                   <th className="text-left py-4 px-6 text-amber-600 font-semibold text-base">Role & Achievements</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {globalCareer.map((item, i) => (
// //                   <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition duration-200">
// //                     <td className="py-4 px-6 font-medium text-gray-900">{item.region}</td>
// //                     <td className="py-4 px-6 text-gray-600">{item.achievements}</td>
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

// //       {/* CTA Section – dark gradient (matching other pages) */}


// //       <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
// //         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
// //           <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
// //             Partner with a Visionary Leader
// //           </div>
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Ashish Bajpai</h2>
// //           <p className="text-gray-300 text-lg mb-8">
// //             Explore how Pyramid E&C can drive your next energy project.
// //           </p>
// //           <Link
// //             to="/contact"
// //             className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
// //           >
// //             Contact Leadership
// //             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
// //           </Link>
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
// import { Link } from "react-router-dom";

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
//   }, [options]);
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
//       <div className="text-3xl md:text-4xl font-black text-amber-500 leading-tight">{count}{suffix}</div>
//       <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</div>
//     </div>
//   );
// }

// function PillarCard({ title, description, icon: Icon, index }) {
//   const [ref, inView] = useInView();
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div ref={ref} className="transition-all duration-700"
//       style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${index * 0.1}s` }}>
//       <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
//         className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
//         style={{
//           transform: hovered ? "translateY(-6px)" : "translateY(0)",
//         }}>
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
//         <div className="p-6">
//           <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
//             <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
//           </div>
//           <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// const visionPillars = [
//   { title: "Industrial EPC Excellence", description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.", icon: FaIndustry },
//   { title: "Technology Commercialization & Innovation", description: "Scale transformative industrial solutions that drive efficiency and sustainability.", icon: FaRocket },
//   { title: "Strategic Capital Deployment", description: "Invest in technology and sports for lasting impact and long-term value creation.", icon: FaChartLine },
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
//   { region: "Asia", achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
//   { region: "Middle East", achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
//   { region: "Europe", achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
//   { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
// ];

// const animationStyles = `
//   @keyframes fadeUp { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
//   @keyframes fadeLeft { 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
//   @keyframes fadeRight { 0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
//   @keyframes bubbleFloat {
//     0% { transform: translateY(0) scale(0.2); opacity: 0; }
//     20% { opacity: 0.6; }
//     80% { opacity: 0.4; }
//     100% { transform: translateY(-100vh) scale(1); opacity: 0; }
//   }
//   @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
//   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
//   .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
// `;

// const Leadership = () => {
//   const [visionRef, visionInView] = useInView();

//   // Generate random bubbles for hero
//   const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
//     return Array.from({ length: count }, (_, i) => ({
//       id: i,
//       size: Math.random() * sizeRange + baseSize,
//       left: Math.random() * 100,
//       delay: Math.random() * 15,
//       duration: Math.random() * 10 + 8,
//       opacity: Math.random() * 0.3 + 0.2,
//     }));
//   };

//   const heroBubbles = generateBubbles(18, 15, 50);

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* Hero Section – Navbar gradient + bubbles */}
//       <section className="relative overflow-hidden text-white">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

//         {/* Floating bubbles */}
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

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>Company</span><span>›</span>
//             <span className="text-amber-400 font-medium">Leadership</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//             Our{" "}
//             <span
//               className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
//               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
//             >
//               Leadership
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
//             Visionary direction, operational excellence, and a commitment to global impact.
//           </p>
//         </div>
//       </section>

//       {/* Founder Spotlight (text left, image right) – light version */}
//       <section className="py-20 px-6 relative z-10 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="text-center md:text-left">
//               <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeLeft delay-100">Meet The Founder</div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
//                 <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Ashish Bajpai</span>
//               </h2>
//               <p className="text-xl text-amber-600 font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
//               <p className="text-gray-600 mt-4 leading-relaxed animate-fadeLeft delay-400">
//                 Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
//               </p>
//               <div className="flex justify-center md:justify-start gap-4 mt-6 animate-fadeLeft delay-500">
//                 <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
//                   <FaLinkedinIn className="text-lg" />
//                 </a>
//                 <a href="mailto:ashish.bajpai@pyramid-ec.com"
//                   className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
//                   <FaEnvelope className="text-lg" />
//                 </a>
//               </div>
//             </div>
//             <div className="flex justify-center animate-fadeRight delay-200">
//               <div className="relative group">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-300/30 to-amber-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
//                 <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl shadow-amber-200">
//                   <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Leadership Overview */}
//       <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">Leadership Overview</div>
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Mr. Bajpai is a globally recognized leader in hydrocarbon and renewable energy technologies. As Founder of Pyramid E&C Group, he has built a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
//           </p>
//           <p className="text-gray-600 mt-4">He combines technical mastery, strategic vision, and operational excellence with active investment in technology and sports ventures, fostering innovation, performance, and long-term value creation.</p>
//         </div>
//       </section>

//       {/* Vision & Strategic Direction */}
//       <section ref={visionRef} className="py-20 px-6 relative z-10 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12 transition-all duration-700"
//             style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Strategic Direction</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4 mb-4"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
//           </div>
//         </div>
//       </section>

//       {/* Core Expertise & Skills */}
//       <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaCogs className="text-3xl text-amber-500" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise & Skills</h2>
//               </div>
//               <ul className="space-y-3">
//                 {coreSkills.map((skill, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-700">
//                     <FaCheckCircle className="text-amber-500 text-sm flex-shrink-0" /><span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaChartLine className="text-3xl text-amber-500" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Focus</h2>
//               </div>
//               <p className="text-gray-600 mb-4">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
//               <ul className="space-y-3">
//                 {investmentFocus.map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-700">
//                     <FaCheckCircle className="text-amber-500 text-sm flex-shrink-0" /><span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Professional Journey & Education */}
//       <section className="py-16 px-6 relative z-10 border-b border-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaBriefcase className="text-3xl text-amber-500" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Journey</h2>
//               </div>
//               <ul className="space-y-4 text-gray-700">
//                 {["Established a globally respected EPC contractor", "Delivered integrated Technology, Services, Products, and Solutions", "Areas: Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels", "Teams in India & Houston; international operations from Houston, London, Dubai"].map((pt, i) => (
//                   <li key={i} className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>{pt}</span></li>
//                 ))}
//               </ul>
//               <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
//                 <h4 className="font-semibold text-amber-600">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
//                 <p className="text-gray-600 text-sm mt-1">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <FaGraduationCap className="text-3xl text-amber-500" />
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
//               </div>
//               <div className="space-y-4">
//                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
//                   <h4 className="font-semibold text-gray-900">M.Tech. – Process Engineering & Design</h4>
//                   <p className="text-amber-600 text-sm">IIT Delhi, India | 1991</p>
//                 </div>
//                 <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
//                   <h4 className="font-semibold text-gray-900">B.Tech. – Hydrocarbon Technologies</h4>
//                   <p className="text-amber-600 text-sm">IIT Roorkee, India | 1989</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Global Career Table – light theme */}
//       <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Global Career</h2>
//             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3"></div>
//             <p className="text-gray-600">Leading complex projects across continents</p>
//           </div>
//           <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="border-b border-gray-200 bg-gray-50">
//                   <th className="text-left py-4 px-6 text-amber-600 font-semibold text-base">Region</th>
//                   <th className="text-left py-4 px-6 text-amber-600 font-semibold text-base">Role & Achievements</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {globalCareer.map((item, i) => (
//                   <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition duration-200">
//                     <td className="py-4 px-6 font-medium text-gray-900">{item.region}</td>
//                     <td className="py-4 px-6 text-gray-600">{item.achievements}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* Stats / Highlights */}
//       <section className="py-16 px-6 relative z-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <StatCounter value={700} label="Projects Delivered" suffix="+" delay={0.2} />
//             <StatCounter value={25} label="Years of Leadership" suffix="+" delay={0.3} />
//             <StatCounter value={15} label="Countries" suffix="+" delay={0.4} />
//             <StatCounter value={4} label="Continents" suffix="" delay={0.5} />
//           </div>
//         </div>
//       </section>

//       {/* CTA Section – Light yellow gradient (matching other pages) */}
//       <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <span className="w-8 h-[2px] bg-amber-600"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
//               Partner with a Visionary Leader
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Connect with Ashish Bajpai
//           </h2>
//           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
//             Explore how Pyramid E&C can drive your next energy project.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
//           >
//             Contact Leadership →
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Leadership;







import React, { useEffect, useRef, useState } from "react";
import {
   FaLinkedinIn, FaEnvelope,
  FaIndustry, FaRocket, FaChartLine,
  FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
  FaGlobeAmericas, FaTrophy, FaUsers, FaAward
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
  }, [options]);
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
      <div className="text-3xl md:text-4xl font-black text-amber-500 leading-tight">{count}{suffix}</div>
      <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

// Redesigned PillarCard with glass effect and better hover
function PillarCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-5 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300 group-hover:shadow-lg">
            <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

const visionPillars = [
  { title: "Industrial EPC Excellence", description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.", icon: FaIndustry },
  { title: "Technology Commercialization & Innovation", description: "Scale transformative industrial solutions that drive efficiency and sustainability.", icon: FaRocket },
  { title: "Strategic Capital Deployment", description: "Invest in technology and sports for lasting impact and long-term value creation.", icon: FaChartLine },
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
  { region: "Asia", achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
  { region: "Middle East", achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
  { region: "Europe", achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
  { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
];

const animationStyles = `
  @keyframes fadeUp { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft { 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes fadeRight { 0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes bubbleFloat {
    0% { transform: translateY(0) scale(0.2); opacity: 0; }
    20% { opacity: 0.6; }
    80% { opacity: 0.4; }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
  }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes floatGlow {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
    50% { transform: translateY(-10px) scale(1.05); opacity: 0.8; }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
`;

const Leadership = () => {
  const [visionRef, visionInView] = useInView();

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

  const heroBubbles = generateBubbles(18, 15, 50);

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – unchanged */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">Leadership</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Leadership
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Visionary direction, operational excellence, and a commitment to global impact.
          </p>
        </div>
      </section>

      {/* Founder Spotlight – Redesigned with gradient card and decorative elements */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-amber-200 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-sm font-semibold mb-4 animate-fadeLeft delay-100">
                  Meet The Founder
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Ashish Bajpai</span>
                </h2>
                <p className="text-xl text-amber-600 font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
                <p className="text-gray-600 mt-6 leading-relaxed animate-fadeLeft delay-400">
                  Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
                </p>
                <div className="flex gap-4 mt-8 animate-fadeLeft delay-500">
                  <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a href="mailto:ashish.bajpai@pyramid-ec.com"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-fadeRight delay-200">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Overview – redesigned as a stats callout */}
      <section className="py-16 px-6 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-200 text-amber-800 text-sm font-semibold mb-6">Leadership Impact</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-amber-100">
              <FaGlobeAmericas className="text-4xl text-amber-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">Global Footprint</div>
              <p className="text-gray-600 text-sm mt-2">Operations across 4 continents, 15+ countries</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-amber-100">
              <FaTrophy className="text-4xl text-amber-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">700+ Projects</div>
              <p className="text-gray-600 text-sm mt-2">Delivered with excellence and innovation</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-amber-100">
              <FaAward className="text-4xl text-amber-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">25+ Years</div>
              <p className="text-gray-600 text-sm mt-2">Of visionary leadership in energy sector</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mt-10 max-w-3xl mx-auto">
            Mr. Bajpai combines technical mastery, strategic vision, and operational excellence with active investment in technology and sports ventures, fostering innovation, performance, and long-term value creation.
          </p>
        </div>
      </section>

      {/* Vision & Strategic Direction – enhanced cards */}
      <section ref={visionRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 transition-all duration-700"
            style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Strategic Direction</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mt-4 mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Core Expertise & Skills – redesigned with gradient list items */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaCogs className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise</h2>
              </div>
              <div className="space-y-4">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 transition-all hover:shadow-sm">
                    <FaCheckCircle className="text-amber-500 text-lg flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaChartLine className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Focus</h2>
              </div>
              <p className="text-gray-600 mb-6">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
              <div className="space-y-4">
                {investmentFocus.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 transition-all hover:shadow-sm">
                    <FaCheckCircle className="text-amber-500 text-lg flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey & Education – redesigned as timeline-style cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Journey</h2>
              </div>
              <div className="relative border-l-2 border-amber-200 ml-4 space-y-8">
                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                  <h4 className="font-bold text-gray-900">Established global EPC contractor</h4>
                  <p className="text-gray-600 text-sm">Built a world-class organization recognized worldwide.</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                  <h4 className="font-bold text-gray-900">Integrated solutions delivery</h4>
                  <p className="text-gray-600 text-sm">Technology, Services, Products, and Solutions across the value chain.</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                  <h4 className="font-bold text-gray-900">Key sectors</h4>
                  <p className="text-gray-600 text-sm">Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels.</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
                  <h4 className="font-bold text-gray-900">Global operations</h4>
                  <p className="text-gray-600 text-sm">Teams in India & Houston; international operations from Houston, London, Dubai.</p>
                </div>
              </div>
              <div className="mt-8 p-5 bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-100">
                <h4 className="font-semibold text-amber-600">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
                <p className="text-gray-600 text-sm mt-2">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-amber-200 transition-all shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg">M.Tech. – Process Engineering & Design</h4>
                  <p className="text-amber-600 font-medium">IIT Delhi, India | 1991</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-amber-200 transition-all shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg">B.Tech. – Hydrocarbon Technologies</h4>
                  <p className="text-amber-600 font-medium">IIT Roorkee, India | 1989</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Career – redesigned as card grid instead of table */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Global Career</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3"></div>
            <p className="text-gray-600">Leading complex projects across continents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globalCareer.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-amber-200 transition-all hover:shadow-md group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <FaGlobeAmericas className="text-xl text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.region}</h3>
                    <p className="text-gray-600 text-sm">{item.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Highlights – enhanced with icons */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <FaBriefcase className="text-2xl text-amber-600" />
              </div>
              <StatCounter value={700} label="Projects Delivered" suffix="+" delay={0.2} />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <FaTrophy className="text-2xl text-amber-600" />
              </div>
              <StatCounter value={25} label="Years of Leadership" suffix="+" delay={0.3} />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <FaGlobeAmericas className="text-2xl text-amber-600" />
              </div>
              <StatCounter value={15} label="Countries" suffix="+" delay={0.4} />
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <FaUsers className="text-2xl text-amber-600" />
              </div>
              <StatCounter value={4} label="Continents" suffix="" delay={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section – unchanged */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Partner with a Visionary Leader
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Connect with Ashish Bajpai
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Explore how Pyramid E&C can drive your next energy project.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
          >
            Contact Leadership →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Leadership;