


// import React, { useEffect, useRef, useState } from 'react';
// import {
//   FaOilCan, FaIndustry, FaWater, FaGasPump,
//   FaChartLine, FaShieldAlt, FaBolt, FaGlobe
// } from 'react-icons/fa';
// import { Link } from "react-router-dom";



// // ============================================================
// // Animation styles (including bubbleFloat and fade animations)
// // ============================================================
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
//   .delay-400 { animation-delay: 0.4s; }
//   .delay-500 { animation-delay: 0.5s; }
// `;

// const OilGas = () => {
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

//   // Refs for fade-in sections
//   // const heroRef = useRef(null);
//   // const [heroInView] = useState(true);
//   const expertiseRef = useRef(null);
//   const [expertiseInView, setExpertiseInView] = useState(false);
//   const midstreamRef = useRef(null);
//   const [midstreamInView, setMidstreamInView] = useState(false);
//   const valueRef = useRef(null);
//   const [valueInView, setValueInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.target === expertiseRef.current) setExpertiseInView(entry.isIntersecting);
//           if (entry.target === midstreamRef.current) setMidstreamInView(entry.isIntersecting);
//           if (entry.target === valueRef.current) setValueInView(entry.isIntersecting);
//         });
//       },
//       { threshold: 0.2 }
//     );
//     if (expertiseRef.current) observer.observe(expertiseRef.current);
//     if (midstreamRef.current) observer.observe(midstreamRef.current);
//     if (valueRef.current) observer.observe(valueRef.current);
//     return () => observer.disconnect();
//   }, []);

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

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Left side - Text content */}
//             <div className="lg:w-1/2 animate-fadeLeft">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//                 Oil & Gas Engineering
//                 <span className="block text-amber-400">Integrated Solutions</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
//                 Pyramid E&C delivers integrated Oil & Gas engineering solutions across the upstream
//                 and midstream value chain, providing reliable, efficient, and safety-focused designs
//                 tailored to complex energy projects.
//               </p>
//             </div>

//             {/* Right side - Oil & Gas Image */}
//             <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
//                 <img
//                   src="/oilgas.jpg"
//                   alt="Oil refinery and gas processing plant"
//                   className="w-full h-auto max-h-[400px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Expertise - Three Main Pillars with fade-in */}
//       <section ref={expertiseRef} className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 transition-all duration-700"
//             style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(30px)" }}>
//             <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Core Capabilities</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
//               Industry-Leading Expertise
//             </h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-6">
//               Specialized engineering solutions across the entire oil & gas value chain, from surface production to offshore floating systems.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Surface Production Card */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//               style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.1s" }}>
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
//               <div className="p-8">
//                 <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
//                   <FaOilCan size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Surface Production</h3>
//                 <p className="text-gray-600 mb-4">
//                   Comprehensive surface production facilities engineering for optimal hydrocarbon recovery.
//                 </p>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Wellhead systems & flowlines</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Separation units (3-phase & test separators)</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Oil treatment & dehydration solutions</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Produced water treatment</span></li>
//                 </ul>
//               </div>
//             </div>

//             {/* Gas Processing Plants Card */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//               style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.2s" }}>
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
//               <div className="p-8">
//                 <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
//                   <FaIndustry size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Gas Processing Plants</h3>
//                 <p className="text-gray-600 mb-4">
//                   Advanced gas treatment and processing facilities for market-ready products.
//                 </p>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Gas sweetening (amine & membrane)</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Dehydration (glycol & molecular sieve)</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>NGL recovery & fractionation</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Compression & refrigeration systems</span></li>
//                 </ul>
//               </div>
//             </div>

//             {/* Floating Production Card */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//               style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.3s" }}>
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
//               <div className="p-8">
//                 <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
//                   <FaWater size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">Floating Production</h3>
//                 <p className="text-gray-600 mb-4">
//                   Offshore floating production systems engineering for deepwater developments.
//                 </p>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Topside process & utilities design</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Structural & hull integration</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Piping & riser systems engineering</span></li>
//                   <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>FPSO/FSO/Floating LNG support</span></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Midstream Infrastructure Section with fade-in */}
//       <section ref={midstreamRef} className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             <div className="lg:w-1/2 transition-all duration-700"
//               style={{ opacity: midstreamInView ? 1 : 0, transform: midstreamInView ? "translateX(0)" : "translateX(-30px)" }}>
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
//                     <FaGasPump className="text-gray-900" size={20} />
//                   </div>
//                   <h3 className="text-2xl font-bold">Midstream Infrastructure</h3>
//                 </div>
//                 <p className="text-gray-300 mb-6">
//                   End-to-end midstream engineering solutions ensuring reliable transport, storage, and distribution of oil & gas products.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//                     <div className="font-semibold text-amber-400 mb-2">Pipeline Systems</div>
//                     <p className="text-sm text-gray-300">Onshore & offshore pipelines, flow assurance, and integrity management.</p>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//                     <div className="font-semibold text-amber-400 mb-2">Compressor & Pump Stations</div>
//                     <p className="text-sm text-gray-300">High-efficiency compression and pumping solutions.</p>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//                     <div className="font-semibold text-amber-400 mb-2">Storage Facilities</div>
//                     <p className="text-sm text-gray-300">Tank farms, cavern storage, and LNG terminals.</p>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
//                     <div className="font-semibold text-amber-400 mb-2">Metering & Automation</div>
//                     <p className="text-sm text-gray-300">Custody transfer, fiscal metering, and SCADA integration.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2 transition-all duration-700"
//               style={{ opacity: midstreamInView ? 1 : 0, transform: midstreamInView ? "translateX(0)" : "translateX(30px)" }}>
//               <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
//                 <div className="flex items-center gap-3 mb-4">
//                   <FaChartLine className="text-amber-600 text-3xl" />
//                   <h3 className="text-2xl font-bold text-gray-900">Project Lifecycle Support</h3>
//                 </div>
//                 <p className="text-gray-700 mb-4 leading-relaxed">
//                   From concept through detailed engineering and execution support, Pyramid E&C ensures compliance
//                   with international standards (API, ASME, ISO, NACE) while optimizing cost, performance, and operational efficiency.
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">FEED Studies</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Detailed Engineering</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Procurement Support</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Construction Supervision</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Commissioning</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Value Proposition with fade-in */}
//       <section ref={valueRef} className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-6 text-center">
//             <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
//               style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
//               <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
//               <h4 className="text-xl font-bold text-gray-900 mb-2">Safety-Focused Design</h4>
//               <p className="text-gray-600">Hazard identification, risk assessment, and inherently safer design philosophies.</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
//               style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
//               <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaBolt /></div>
//               <h4 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h4>
//               <p className="text-gray-600">Optimized process configurations and energy-efficient systems.</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
//               style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.3s" }}>
//               <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaGlobe /></div>
//               <h4 className="text-xl font-bold text-gray-900 mb-2">Global Standards</h4>
//               <p className="text-gray-600">Full compliance with international codes and client specifications.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section – Light yellow gradient (matching other pages) */}
//       <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <span className="w-8 h-[2px] bg-amber-600"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
//               Ready to engineer your next energy project?
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Let's build a sustainable energy future together
//           </h2>
//           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
//             Partner with Pyramid E&C for reliable, innovative, and cost-effective oil & gas engineering solutions.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
//           >
//             Contact Our Experts →
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OilGas;


import React, { useEffect, useRef, useState } from 'react';
import {
  FaOilCan, FaIndustry, FaWater, FaGasPump,
  FaChartLine, FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import { Link } from "react-router-dom";

// ============================================================
// Animation styles (including bubbleFloat and fade animations)
// ============================================================
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
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
`;

const OilGas = () => {
  // Generate random bubbles for hero
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

  // Refs for fade-in sections
  const expertiseRef = useRef(null);
  const [expertiseInView, setExpertiseInView] = useState(false);
  const midstreamRef = useRef(null);
  const [midstreamInView, setMidstreamInView] = useState(false);
  const valueRef = useRef(null);
  const [valueInView, setValueInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === expertiseRef.current) setExpertiseInView(entry.isIntersecting);
          if (entry.target === midstreamRef.current) setMidstreamInView(entry.isIntersecting);
          if (entry.target === valueRef.current) setValueInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (expertiseRef.current) observer.observe(expertiseRef.current);
    if (midstreamRef.current) observer.observe(midstreamRef.current);
    if (valueRef.current) observer.observe(valueRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – unchanged (already uses shimmer gradient) */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Floating bubbles */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-1/2 animate-fadeLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Oil & Gas Engineering
                <span className="block text-amber-400">Integrated Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C delivers integrated Oil & Gas engineering solutions across the upstream
                and midstream value chain, providing reliable, efficient, and safety-focused designs
                tailored to complex energy projects.
              </p>
            </div>

            {/* Right side - Oil & Gas Image */}
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/oilgas.jpg"
                  alt="Oil refinery and gas processing plant"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise - Three Main Pillars with updated header */}
      <section ref={expertiseRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 transition-all duration-700"
            style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(30px)" }}>
            {/* Pill badge – consistent with other pages */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Core Capabilities
            </span>
            {/* Heading with gradient on "Expertise" */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Industry-Leading{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Specialized engineering solutions across the entire oil & gas value chain, from surface production to offshore floating systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Surface Production Card – unchanged */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.1s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaOilCan size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Surface Production</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive surface production facilities engineering for optimal hydrocarbon recovery.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Wellhead systems & flowlines</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Separation units (3-phase & test separators)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Oil treatment & dehydration solutions</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Produced water treatment</span></li>
                </ul>
              </div>
            </div>

            {/* Gas Processing Plants Card – unchanged */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.2s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaIndustry size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Gas Processing Plants</h3>
                <p className="text-gray-600 mb-4">
                  Advanced gas treatment and processing facilities for market-ready products.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Gas sweetening (amine & membrane)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Dehydration (glycol & molecular sieve)</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>NGL recovery & fractionation</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Compression & refrigeration systems</span></li>
                </ul>
              </div>
            </div>

            {/* Floating Production Card – unchanged */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.3s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaWater size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Floating Production</h3>
                <p className="text-gray-600 mb-4">
                  Offshore floating production systems engineering for deepwater developments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Topside process & utilities design</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Structural & hull integration</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Piping & riser systems engineering</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>FPSO/FSO/Floating LNG support</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midstream Infrastructure Section – unchanged (card style) */}
      <section ref={midstreamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: midstreamInView ? 1 : 0, transform: midstreamInView ? "translateX(0)" : "translateX(-30px)" }}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <FaGasPump className="text-gray-900" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">Midstream Infrastructure</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  End-to-end midstream engineering solutions ensuring reliable transport, storage, and distribution of oil & gas products.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Pipeline Systems</div>
                    <p className="text-sm text-gray-300">Onshore & offshore pipelines, flow assurance, and integrity management.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Compressor & Pump Stations</div>
                    <p className="text-sm text-gray-300">High-efficiency compression and pumping solutions.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Storage Facilities</div>
                    <p className="text-sm text-gray-300">Tank farms, cavern storage, and LNG terminals.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Metering & Automation</div>
                    <p className="text-sm text-gray-300">Custody transfer, fiscal metering, and SCADA integration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: midstreamInView ? 1 : 0, transform: midstreamInView ? "translateX(0)" : "translateX(30px)" }}>
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartLine className="text-amber-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-gray-900">Project Lifecycle Support</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  From concept through detailed engineering and execution support, Pyramid E&C ensures compliance
                  with international standards (API, ASME, ISO, NACE) while optimizing cost, performance, and operational efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">FEED Studies</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Detailed Engineering</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Procurement Support</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Construction Supervision</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Commissioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Value Proposition – unchanged (no header to update) */}
      <section ref={valueRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Safety-Focused Design</h4>
              <p className="text-gray-600">Hazard identification, risk assessment, and inherently safer design philosophies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaBolt /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h4>
              <p className="text-gray-600">Optimized process configurations and energy-efficient systems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.3s" }}>
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaGlobe /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600">Full compliance with international codes and client specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section – Updated with pill badge + gradient heading + underline */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Ready to engineer your next energy project?
          </span>

          {/* Gradient heading */}
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Let's build a{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              sustainable energy future
            </span>{" "}
            together
          </h2>

          {/* Underline */}
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />

          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Partner with Pyramid E&C for reliable, innovative, and cost-effective oil & gas engineering solutions.
          </p>

          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Our Experts →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OilGas;