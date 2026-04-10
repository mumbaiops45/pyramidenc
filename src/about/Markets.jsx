// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaArrowRight, FaOilCan, FaIndustry, FaLeaf,
//   FaHardHat, FaTools, FaShip, FaSolarPanel, FaCogs, FaCheckCircle,
// } from "react-icons/fa";
// import { GiChemicalTank } from "react-icons/gi";
//      import { Link } from "react-router-dom";


// // ============================================================
// // Custom hook with correct dependency handling
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
// // Competence Card – light theme (white background, amber accents)
// // ============================================================
// function CompetenceCard({ title, description, icon: Icon, index }) {
//   const [ref, inView] = useInView();
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       ref={ref}
//       className="transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(40px)",
//         transitionDelay: `${index * 0.1}s`,
//       }}
//     >
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
//         style={{
//           transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
//         }}
//       >
//         {/* Top accent bar */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

//         <div className="p-6">
//           <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
//             <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
//           </div>
//           <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
//             {title}
//           </h3>
//           <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// const competenceGroups = [
//   {
//     title: "Oil & Gas",
//     description: "Comprehensive solutions for upstream, midstream, and downstream oil & gas projects – from wellhead to pipeline and storage.",
//     icon: FaOilCan,
//   },
//   {
//     title: "Refining & Petrochemicals",
//     description: "Process optimization, revamps, and new unit installations for refineries and petrochemical complexes.",
//     icon: GiChemicalTank,
//   },
//   {
//     title: "SMR (Steam Methane Reforming)",
//     description: "Specialized expertise in hydrogen production, syngas, and associated reforming technologies.",
//     icon: FaIndustry,
//   },
//   {
//     title: "Renewable Hydrocarbons",
//     description: "Green hydrogen, bio-fuels, e-methanol, and carbon capture – driving the energy transition.",
//     icon: FaLeaf,
//   },
// ];

// // ============================================================
// // Animation styles
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
//   @keyframes float {
//     0%, 100% { transform: translateY(0px) rotate(0deg); }
//     50% { transform: translateY(-20px) rotate(5deg); }
//   }
//   @keyframes shimmer {
//     0% { background-position: -200% center; }
//     100% { background-position: 200% center; }
//   }
//   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//   .animate-float { animation: float 6s ease-in-out infinite; }
//   .delay-100 { animation-delay: 0.1s; }
//   .delay-200 { animation-delay: 0.2s; }
//   .delay-300 { animation-delay: 0.3s; }
//   .delay-400 { animation-delay: 0.4s; }
//   .delay-500 { animation-delay: 0.5s; }
// `;

// // ============================================================
// // Main Markets Component (Light Theme)
// // ============================================================
// const Markets = () => {
//   const [valueChainRef, valueChainInView] = useInView();

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* Hero Section – centered with background image and floating amber circles */}
//       <section className="relative overflow-hidden text-white">
//         {/* Background image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('/background.png')` }}
//         />
//         <div className="absolute inset-0 bg-black/60 z-0"></div>

//         {/* Animated floating amber circles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>About</span><span>›</span>
//             <span className="text-amber-400 font-medium">Our Markets</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//             Our{" "}
//             <span
//               className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
//               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
//             >
//               Markets
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fadeUp delay-200">
//             Pyramid E&C supports Conventional and Renewable hydrocarbon resources owners worldwide in giving shape to their vision and provide Technology, Engineering, Critical Equipment, EPC Solutions and Operational knowledge leading to a path of success and accelerated achievement of financial goals.
//           </p>
//         </div>

//         {/* Bottom fade to white */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
//       </section>

//       {/* Competence Groups */}
//       <section className="py-20 px-6 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
//               Our Organization
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Competence Groups</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Internally, Pyramid E&C is organized into specialized competence groups to deliver excellence across the energy value chain.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {competenceGroups.map((group, idx) => (
//               <CompetenceCard key={idx} {...group} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Market Dynamics & Innovation */}
//       <section className="py-16 px-6 relative z-10 border-t border-gray-100 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
//                 Market Dynamics
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                 Investing in Research & Technological Developments
//               </h3>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 Pyramid E&C tracks market dynamics globally and continuously invests in research and technological developments to deliver more efficient, low carbon emission, minimal footprint, modular process plants — often integrated with solar power for emerging market demands.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Backed by an experience of more than 25 years and 700 projects, our engineering teams keep working to improve solution offerings and enhance customer success.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: FaSolarPanel, label: "Solar Integration" },
//                 { icon: FaLeaf, label: "Low Carbon Emission" },
//                 { icon: FaTools, label: "Minimal Footprint" },
//                 { icon: FaCogs, label: "Modular Process Plants" },
//               ].map(({ icon: Icon, label }, i) => (
//                 <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all">
//                   <Icon className="text-3xl text-amber-500 mx-auto mb-2" />
//                   <p className="text-sm font-medium text-gray-700">{label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Value Chain & Fabrication */}
//       <section ref={valueChainRef} className="py-16 px-6 relative z-10">
//         <div
//           className="max-w-6xl mx-auto transition-all duration-700"
//           style={{
//             opacity: valueChainInView ? 1 : 0,
//             transform: valueChainInView ? "translateY(0)" : "translateY(30px)",
//           }}
//         >
//           <div className="text-center mb-10">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Strong Value Chain & In-House Fabrication</h3>
//             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Besides investing in technology and specialization, Pyramid E&C maintains a strong value chain to control product quality and remain competitive.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-lg">
//               <FaHardHat className="text-3xl text-amber-500 mb-3" />
//               <h4 className="text-xl font-semibold text-gray-900 mb-2">High-Value Engineering</h4>
//               <p className="text-gray-600 text-sm">Our robust in-house engineering team delivers detailed design, process optimization, and digital twins for complex hydrocarbon facilities.</p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-lg">
//               <FaShip className="text-3xl text-amber-500 mb-3" />
//               <h4 className="text-xl font-semibold text-gray-900 mb-2">Modular Fabrication Yard</h4>
//               <p className="text-gray-600 text-sm">We have our own robust modular fabrication facilities, offering great control over quality and schedule of process plants.</p>
//             </div>
//           </div>
//           <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
//             {["Quality Control", "Schedule Assurance", "Cost Competitiveness"].map((label, i) => (
//               <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
//                 <FaCheckCircle className="text-amber-500" />
//                 <span>{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section – dark gradient (matching other pages) */}


// <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
//   <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//     <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
//       Partner with Pyramid E&C
//     </div>
//     <h2 className="text-3xl md:text-4xl font-bold mb-4">Let us help you accelerate your financial goals</h2>
//     <p className="text-gray-300 text-lg mb-8">
//       With our technology, engineering, and operational expertise.
//     </p>
//     <Link
//       to="/contact"
//       className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
//     >
//       Contact Our Experts
//       <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//     </Link>
//   </div>
// </section>
//     </div>
//   );
// };

// export default Markets;




import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight, FaOilCan, FaIndustry, FaLeaf,
  FaHardHat, FaTools, FaShip, FaSolarPanel, FaCogs, FaCheckCircle,
} from "react-icons/fa";
import { GiChemicalTank } from "react-icons/gi";
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
// Competence Card – light theme (white background, amber accents)
// ============================================================
function CompetenceCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
        style={{
          transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

        <div className="p-6">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
            <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

const competenceGroups = [
  {
    title: "Oil & Gas",
    description: "Comprehensive solutions for upstream, midstream, and downstream oil & gas projects – from wellhead to pipeline and storage.",
    icon: FaOilCan,
  },
  {
    title: "Refining & Petrochemicals",
    description: "Process optimization, revamps, and new unit installations for refineries and petrochemical complexes.",
    icon: GiChemicalTank,
  },
  {
    title: "SMR (Steam Methane Reforming)",
    description: "Specialized expertise in hydrogen production, syngas, and associated reforming technologies.",
    icon: FaIndustry,
  },
  {
    title: "Renewable Hydrocarbons",
    description: "Green hydrogen, bio-fuels, e-methanol, and carbon capture – driving the energy transition.",
    icon: FaLeaf,
  },
];

// ============================================================
// Animation styles (including bubbleFloat)
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

// ============================================================
// Main Markets Component (Light Theme)
// ============================================================
const Markets = () => {
  const [valueChainRef, valueChainInView] = useInView();

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">Our Markets</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Markets
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Pyramid E&C supports Conventional and Renewable hydrocarbon resources owners worldwide in giving shape to their vision and provide Technology, Engineering, Critical Equipment, EPC Solutions and Operational knowledge leading to a path of success and accelerated achievement of financial goals.
          </p>
        </div>
      </section>

      {/* Competence Groups */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Our Organization
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Competence Groups</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Internally, Pyramid E&C is organized into specialized competence groups to deliver excellence across the energy value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competenceGroups.map((group, idx) => (
              <CompetenceCard key={idx} {...group} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Dynamics & Innovation */}
      <section className="py-16 px-6 relative z-10 border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                Market Dynamics
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Investing in Research & Technological Developments
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pyramid E&C tracks market dynamics globally and continuously invests in research and technological developments to deliver more efficient, low carbon emission, minimal footprint, modular process plants — often integrated with solar power for emerging market demands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Backed by an experience of more than 25 years and 700 projects, our engineering teams keep working to improve solution offerings and enhance customer success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaSolarPanel, label: "Solar Integration" },
                { icon: FaLeaf, label: "Low Carbon Emission" },
                { icon: FaTools, label: "Minimal Footprint" },
                { icon: FaCogs, label: "Modular Process Plants" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all">
                  <Icon className="text-3xl text-amber-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Chain & Fabrication */}
      <section ref={valueChainRef} className="py-16 px-6 relative z-10">
        <div
          className="max-w-6xl mx-auto transition-all duration-700"
          style={{
            opacity: valueChainInView ? 1 : 0,
            transform: valueChainInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Strong Value Chain & In-House Fabrication</h3>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Besides investing in technology and specialization, Pyramid E&C maintains a strong value chain to control product quality and remain competitive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-lg">
              <FaHardHat className="text-3xl text-amber-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">High-Value Engineering</h4>
              <p className="text-gray-600 text-sm">Our robust in-house engineering team delivers detailed design, process optimization, and digital twins for complex hydrocarbon facilities.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-lg">
              <FaShip className="text-3xl text-amber-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Modular Fabrication Yard</h4>
              <p className="text-gray-600 text-sm">We have our own robust modular fabrication facilities, offering great control over quality and schedule of process plants.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
            {["Quality Control", "Schedule Assurance", "Cost Competitiveness"].map((label, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                <FaCheckCircle className="text-amber-500" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – Light yellow gradient */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Partner with Pyramid E&C
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Let us help you accelerate your financial goals
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            With our technology, engineering, and operational expertise.
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

export default Markets;