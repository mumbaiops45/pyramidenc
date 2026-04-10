// import React from 'react';
// import {
//   FaLeaf, FaSnowflake, FaFire, FaArrowDown, FaFlask,
//   FaRecycle, FaSolarPanel, FaShieldAlt, FaBolt, FaGlobe
//   , FaChartLine
// } from 'react-icons/fa';
// import { GiWindmill } from 'react-icons/gi';
// import { Link } from "react-router-dom";


// const Decarbonization = () => {
//   return (
//     <div className="bg-white">


//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//         <div className="absolute inset-0 bg-black/50 z-0"></div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <div className="lg:w-1/2">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//                 Decarbonization
//                 <span className="block text-amber-400">Process Solutions</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
//                 Pyramid E&C offers several solutions to reduce carbon impact of hydrocarbon processing,
//                 from electric reforming and CO₂ liquefaction to flare mitigation and green petrochemicals.
//               </p>

//             </div>
//             <div className="lg:w-1/2 flex justify-center">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
//                 <img
//                   src="/decarbonization-hero.jpg"
//                   alt="Decarbonization plant"
//                   className="w-full h-auto max-h-[400px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
//       </section>

//       {/* Solutions Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Our Technologies</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
//               Carbon Reduction Solutions
//             </h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-6">
//               Innovative approaches to lower emissions, capture carbon, and create value.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Electric Reforming */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
//               <div className="p-6">
//                 <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
//                   <FaLeaf size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">Electric Reforming</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   The innovative <strong>HydroBlue® Reformer</strong> eliminates flue gas emissions.
//                 </p>
//               </div>
//             </div>

//             {/* CO2 Liquefaction */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
//               <div className="p-6">
//                 <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
//                   <FaSnowflake size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">CO₂ Liquefaction</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   Concentrated CO₂ is efficiently liquefied or converted into dry ice.
//                 </p>
//               </div>
//             </div>

//             {/* Flare Mitigation */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
//               <div className="p-6">
//                 <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
//                   <FaFire size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">Flare Mitigation</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   Liquefy flared hydrocarbons into "Blue" Ammonia or Methanol.
//                 </p>
//               </div>
//             </div>

//             {/* Carbon Sequestration */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
//               <div className="p-6">
//                 <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
//                   <FaArrowDown size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">Carbon Sequestration</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   Compression and reinjection to store CO₂ in subsurface reservoirs.
//                 </p>
//               </div>
//             </div>

//             {/* Fuel Ethanol */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
//               <div className="p-6">
//                 <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
//                   <FaFlask size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">Fuel Ethanol</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   Anhydrous Bio-Ethanol from grains, sugar cane, or cellulosic feedstock.
//                 </p>
//               </div>
//             </div>

//             {/* Green Petrochemicals */}
//             <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
//               <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
//               <div className="p-6">
//                 <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
//                   <FaRecycle size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">Green Petrochemicals</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   Bio-Ethanol as feedstock for petrochemicals, plastics, and hydrogen.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Alternative Energy Integration */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-12 items-center">
//             <div className="lg:w-1/2">
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
//                     <FaSolarPanel className="text-gray-900 text-xl" />
//                   </div>
//                   <h3 className="text-2xl font-bold">Alternative Energy Integration</h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed">
//                   Energy audit and replacement of conventional power with solar, wind, or other renewables.
//                 </p>
//                 <div className="mt-6 grid grid-cols-2 gap-3">
//                   <div className="bg-white/10 rounded-lg p-3 text-center">
//                     <GiWindmill className="text-amber-400 mx-auto text-2xl mb-1" />
//                     <span className="text-sm">Wind Power</span>
//                   </div>
//                   <div className="bg-white/10 rounded-lg p-3 text-center">
//                     <FaSolarPanel className="text-amber-400 mx-auto text-2xl mb-1" />
//                     <span className="text-sm">Solar PV</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:w-1/2">
//               <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
//                 <div className="flex items-center gap-3 mb-4">
//                   <FaChartLine className="text-amber-600 text-3xl" />
//                   <h3 className="text-2xl font-bold text-gray-900">Integrated Approach</h3>
//                 </div>
//                 <p className="text-gray-700 leading-relaxed">
//                   Combining process engineering, renewables, and carbon management for holistic decarbonization.
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-6">
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Carbon Footprint Analysis</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Feasibility Studies</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Technology Selection</span>
//                   <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">EPC Implementation</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Value Proposition */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-6 text-center">
//             <div className="bg-white p-8 rounded-xl shadow-sm">
//               <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
//               <h4 className="text-xl font-bold text-gray-900 mb-2">Net Zero Ready</h4>
//               <p className="text-gray-600">Solutions for carbon neutrality.</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-sm">
//               <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaBolt /></div>
//               <h4 className="text-xl font-bold text-gray-900 mb-2">Value Creation</h4>
//               <p className="text-gray-600">Turning waste into revenue.</p>
//             </div>
//             <div className="bg-white p-8 rounded-xl shadow-sm">
//               <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaGlobe /></div>
//               <h4 className="text-xl font-bold text-gray-900 mb-2">ESG Excellence</h4>
//               <p className="text-gray-600">Enhance your ESG performance.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}


//       <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to decarbonize your operations?</h2>
//           <p className="text-gray-300 text-lg mb-8">Partner with Pyramid E&C to lead the energy transition.</p>
//           <Link
//             to="/contact"
//             className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
//           >
//             Contact Our Experts
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Decarbonization;


import React, { useEffect, useRef, useState } from 'react';
import {
  FaLeaf, FaSnowflake, FaFire, FaArrowDown, FaFlask,
  FaRecycle, FaSolarPanel, FaShieldAlt, FaBolt, FaGlobe,
  FaChartLine, FaArrowRight
} from 'react-icons/fa';
import { GiWindmill } from 'react-icons/gi';
import { Link } from "react-router-dom";

// ============================================================
// Custom hook with correct dependency handling
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

const Decarbonization = () => {
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
  const solutionsRef = useRef(null);
  const [solutionsInView, setSolutionsInView] = useState(false);
  const energyRef = useRef(null);
  const [energyInView, setEnergyInView] = useState(false);
  const valueRef = useRef(null);
  const [valueInView, setValueInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === solutionsRef.current) setSolutionsInView(entry.isIntersecting);
          if (entry.target === energyRef.current) setEnergyInView(entry.isIntersecting);
          if (entry.target === valueRef.current) setValueInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (solutionsRef.current) observer.observe(solutionsRef.current);
    if (energyRef.current) observer.observe(energyRef.current);
    if (valueRef.current) observer.observe(valueRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – Navbar gradient + bubbles */}
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
            <div className="lg:w-1/2 animate-fadeLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Decarbonization
                <span className="block text-amber-400">Process Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C offers several solutions to reduce carbon impact of hydrocarbon processing,
                from electric reforming and CO₂ liquefaction to flare mitigation and green petrochemicals.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/decarbonization-hero.jpg"
                  alt="Decarbonization plant"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid with fade-in */}
      <section ref={solutionsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 transition-all duration-700"
            style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(30px)" }}>
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Our Technologies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Carbon Reduction Solutions
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Innovative approaches to lower emissions, capture carbon, and create value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electric Reforming */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.1s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaLeaf size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Electric Reforming</h3>
                <p className="text-gray-600 text-sm mt-2">
                  The innovative <strong>HydroBlue® Reformer</strong> eliminates flue gas emissions.
                </p>
              </div>
            </div>

            {/* CO2 Liquefaction */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.2s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaSnowflake size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">CO₂ Liquefaction</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Concentrated CO₂ is efficiently liquefied or converted into dry ice.
                </p>
              </div>
            </div>

            {/* Flare Mitigation */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.3s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaFire size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Flare Mitigation</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Liquefy flared hydrocarbons into "Blue" Ammonia or Methanol.
                </p>
              </div>
            </div>

            {/* Carbon Sequestration */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.4s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaArrowDown size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Carbon Sequestration</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Compression and reinjection to store CO₂ in subsurface reservoirs.
                </p>
              </div>
            </div>

            {/* Fuel Ethanol */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.5s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaFlask size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fuel Ethanol</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Anhydrous Bio-Ethanol from grains, sugar cane, or cellulosic feedstock.
                </p>
              </div>
            </div>

            {/* Green Petrochemicals */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: solutionsInView ? 1 : 0, transform: solutionsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.6s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaRecycle size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Green Petrochemicals</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Bio-Ethanol as feedstock for petrochemicals, plastics, and hydrogen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Energy Integration with fade-in */}
      <section ref={energyRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: energyInView ? 1 : 0, transform: energyInView ? "translateX(0)" : "translateX(-30px)" }}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <FaSolarPanel className="text-gray-900 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Alternative Energy Integration</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Energy audit and replacement of conventional power with solar, wind, or other renewables.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <GiWindmill className="text-amber-400 mx-auto text-2xl mb-1" />
                    <span className="text-sm">Wind Power</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <FaSolarPanel className="text-amber-400 mx-auto text-2xl mb-1" />
                    <span className="text-sm">Solar PV</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: energyInView ? 1 : 0, transform: energyInView ? "translateX(0)" : "translateX(30px)" }}>
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartLine className="text-amber-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-gray-900">Integrated Approach</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Combining process engineering, renewables, and carbon management for holistic decarbonization.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Carbon Footprint Analysis</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Feasibility Studies</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Technology Selection</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">EPC Implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition with fade-in */}
      <section ref={valueRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Net Zero Ready</h4>
              <p className="text-gray-600">Solutions for carbon neutrality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaBolt /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Value Creation</h4>
              <p className="text-gray-600">Turning waste into revenue.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.3s" }}>
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaGlobe /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ESG Excellence</h4>
              <p className="text-gray-600">Enhance your ESG performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section – Light yellow gradient */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Ready to decarbonize your operations?
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Let's lead the energy transition together
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Partner with Pyramid E&C to reduce emissions and create sustainable value.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
          >
            Contact Our Experts →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Decarbonization;