// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaArrowRight,
//   FaOilCan,
//   FaLeaf,
//   FaChartLine,
//   FaPenFancy,
//   FaTasks,
//   FaClipboardList,
// } from "react-icons/fa";
// import { GiChemicalTank, GiGasStove } from "react-icons/gi";
// import { Link } from "react-router-dom";

// // ============================================================================
// // Custom hook with proper dependency handling
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
//   }, [options]);

//   return [ref, inView];
// }

// // ============================================================================
// // Service Card Component – light version (white background, amber accent)
// // ============================================================================
// function ServiceCard({ title, description, icon: Icon, index }) {
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
//         className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
//         style={{
//           transform: hovered ? "translateY(-8px)" : "translateY(0)",
//         }}
//       >
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
//         <div className="p-6">
//           <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
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

// // ============================================================================
// // Animation styles (enhanced)
// // ============================================================================
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
//   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//   .animate-float { animation: float 6s ease-in-out infinite; }
//   .delay-100 { animation-delay: 0.1s; }
//   .delay-200 { animation-delay: 0.2s; }
//   .delay-300 { animation-delay: 0.3s; }
//   .delay-400 { animation-delay: 0.4s; }
//   .delay-500 { animation-delay: 0.5s; }
// `;

// // ============================================================================
// // Main Project Development Component (Light Theme)
// // ============================================================================
// const ProjectDevelopment = () => {
//   const [sectorsRef, sectorsInView] = useInView();
//   const [phasesRef, phasesInView] = useInView();

//   // Sectors we serve
//   const sectors = [
//     {
//       title: "Oil & Gas",
//       description: "Complete project lifecycle for upstream, midstream, and downstream oil & gas facilities.",
//       icon: FaOilCan,
//     },
//     {
//       title: "Steam Methane Reforming",
//       description: "Hydrogen production, syngas generation, and associated reforming technologies.",
//       icon: GiGasStove,
//     },
//     {
//       title: "Refineries & Petrochemical",
//       description: "Refinery revamps, new units, and petrochemical complex development.",
//       icon: GiChemicalTank,
//     },
//     {
//       title: "Renewable Hydrocarbons",
//       description: "Green hydrogen, biofuels, e-methanol, and low‑carbon hydrocarbon solutions.",
//       icon: FaLeaf,
//     },
//   ];

//   // Project development phases
//   const phases = [
//     {
//       title: "Initial Development",
//       description:
//         "Conceptual studies, screening of development options, process simulation, and leveraging our Knowledge Management System from 700+ global projects.",
//       icon: FaChartLine,
//     },
//     {
//       title: "Feasibility Studies",
//       description:
//         "Bankable techno‑commercial feasibility reports, risk assessment, and assistance with financial closure via equity participation or institutional lending.",
//       icon: FaClipboardList,
//     },
//     {
//       title: "Front End Engineering & Design",
//       description:
//         "Accurate project definition, FEED studies, discipline‑wise work scope, and reliable cost estimates for contracting strategy.",
//       icon: FaPenFancy,
//     },
//     {
//       title: "Project Management",
//       description:
//         "Owner's engineer, EPCM, or turnkey EPC delivery – tailored to client capabilities with sole focus on project success.",
//       icon: FaTasks,
//     },
//   ];

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* Hero Section – with animated background pattern */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//         {/* Animated background pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
//         </div>
//         <div className="absolute inset-0 bg-black/50 z-0"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Left side - Text content */}
//             <div className="lg:w-1/2">
//               <div className="inline-flex items-center gap-2 text-sm text-gray-200 mb-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full w-fit animate-fadeLeft">
//                 <span>Home</span><span>›</span><span>Services</span><span>›</span>
//                 <span className="text-amber-400 font-medium">Project Development</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//                 Project{" "}
//                 <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
//                   Development
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
//                 From concept to commissioning – specialist project management teams with 25+ years of experience,
//                 delivering over 700 projects across four continents.
//               </p>
//             </div>

//             {/* Right side - Image with enhanced styling */}
//             <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
//                 <img
//                   src="/project-development.jpg"
//                   alt="Project development and engineering"
//                   className="w-full h-auto max-h-[400px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
//                   700+ Projects Delivered
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Bottom fade to white */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
//       </section>



//       {/* Introduction / Track Record */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
//             Our Track Record
//           </div>
//           <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
//             Pyramid E&C has specialist project management teams who have delivered more than <span className="text-amber-600 font-semibold">700 projects</span> in the last <span className="text-amber-600 font-semibold">25 years</span> of operation. We conceptualize, engineer, and deliver projects from our regional headquarters in Houston, London, Dubai, and Mumbai.
//           </p>
//         </div>
//       </section>

//       {/* Sectors We Serve */}
//       <section
//         ref={sectorsRef}
//         className="py-20 bg-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="text-center mb-12 transition-all duration-700"
//             style={{
//               opacity: sectorsInView ? 1 : 0,
//               transform: sectorsInView ? "translateY(0)" : "translateY(30px)",
//             }}
//           >
//             <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
//               Our Expertise
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Sectors We Serve
//             </h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
//             <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
//               Specialized project delivery across the hydrocarbon value chain – conventional and renewable.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {sectors.map((sector, idx) => (
//               <ServiceCard key={idx} {...sector} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Project Development Phases */}
//       <section
//         ref={phasesRef}
//         className="py-20 bg-gray-50"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="text-center mb-12 transition-all duration-700"
//             style={{
//               opacity: phasesInView ? 1 : 0,
//               transform: phasesInView ? "translateY(0)" : "translateY(30px)",
//             }}
//           >
//             <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
//               Our Approach
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               Project Development Phases
//             </h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
//             <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
//               A structured, proven methodology from initial concept to successful project completion.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {phases.map((phase, idx) => (
//               <ServiceCard key={idx} {...phase} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section – enhanced */}


//       <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
//             Let's Build Together
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
//           <p className="text-gray-300 text-lg mb-8">
//             Let Pyramid E&C bring your vision to life – from feasibility to full‑scale delivery.
//           </p>
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
//           >
//             Discuss Your Project
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProjectDevelopment;


import React, { useEffect, useRef, useState } from "react";
import {
  FaOilCan,
  FaLeaf,
  FaChartLine,
  FaPenFancy,
  FaTasks,
  FaClipboardList,
} from "react-icons/fa";
import { GiChemicalTank, GiGasStove } from "react-icons/gi";
import { Link } from "react-router-dom";

// ============================================================================
// Custom hook with proper dependency handling
// ============================================================================
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

// ============================================================================
// Service Card Component – light version (white background, amber accent)
// ============================================================================
function ServiceCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
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
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
        style={{
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
        <div className="p-6">
          <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
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

// ============================================================================
// Animation styles (including bubbleFloat)
// ============================================================================
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

// ============================================================================
// Main Project Development Component (Light Theme)
// ============================================================================
const ProjectDevelopment = () => {
  const [sectorsRef, sectorsInView] = useInView();
  const [phasesRef, phasesInView] = useInView();

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

  // Sectors we serve
  const sectors = [
    {
      title: "Oil & Gas",
      description: "Complete project lifecycle for upstream, midstream, and downstream oil & gas facilities.",
      icon: FaOilCan,
    },
    {
      title: "Steam Methane Reforming",
      description: "Hydrogen production, syngas generation, and associated reforming technologies.",
      icon: GiGasStove,
    },
    {
      title: "Refineries & Petrochemical",
      description: "Refinery revamps, new units, and petrochemical complex development.",
      icon: GiChemicalTank,
    },
    {
      title: "Renewable Hydrocarbons",
      description: "Green hydrogen, biofuels, e-methanol, and low‑carbon hydrocarbon solutions.",
      icon: FaLeaf,
    },
  ];

  // Project development phases
  const phases = [
    {
      title: "Initial Development",
      description:
        "Conceptual studies, screening of development options, process simulation, and leveraging our Knowledge Management System from 700+ global projects.",
      icon: FaChartLine,
    },
    {
      title: "Feasibility Studies",
      description:
        "Bankable techno‑commercial feasibility reports, risk assessment, and assistance with financial closure via equity participation or institutional lending.",
      icon: FaClipboardList,
    },
    {
      title: "Front End Engineering & Design",
      description:
        "Accurate project definition, FEED studies, discipline‑wise work scope, and reliable cost estimates for contracting strategy.",
      icon: FaPenFancy,
    },
    {
      title: "Project Management",
      description:
        "Owner's engineer, EPCM, or turnkey EPC delivery – tailored to client capabilities with sole focus on project success.",
      icon: FaTasks,
    },
  ];

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
            {/* Left side - Text content */}
            <div className="lg:w-1/2 animate-fadeLeft">
              <div className="inline-flex items-center gap-2 text-sm text-gray-200 mb-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                <span>Home</span><span>›</span><span>Services</span><span>›</span>
                <span className="text-amber-400 font-medium">Project Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
                Project{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
                From concept to commissioning – specialist project management teams with 25+ years of experience,
                delivering over 700 projects across four continents.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
                <img
                  src="/project-development.jpg"
                  alt="Project development and engineering"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                  700+ Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Track Record */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
            Our Track Record
          </div>
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
            Pyramid E&C has specialist project management teams who have delivered more than <span className="text-amber-600 font-semibold">700 projects</span> in the last <span className="text-amber-600 font-semibold">25 years</span> of operation. We conceptualize, engineer, and deliver projects from our regional headquarters in Houston, London, Dubai, and Mumbai.
          </p>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section ref={sectorsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: sectorsInView ? 1 : 0,
              transform: sectorsInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sectors We Serve
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Specialized project delivery across the hydrocarbon value chain – conventional and renewable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, idx) => (
              <ServiceCard key={idx} {...sector} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Development Phases */}
      <section ref={phasesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: phasesInView ? 1 : 0,
              transform: phasesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Project Development Phases
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A structured, proven methodology from initial concept to successful project completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <ServiceCard key={idx} {...phase} index={idx} />
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
              Let's Build Together
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Let Pyramid E&C bring your vision to life – from feasibility to full‑scale delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
          >
            Discuss Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDevelopment;