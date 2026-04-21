// import { useEffect, useRef, useState } from "react";
// import { FaOilCan } from "react-icons/fa";
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

// // Updated solutions with working images (especially Midstream)
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
//     // ✅ Fixed: working pipeline image
//     image: "/midstream.jpg",
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
//             onError={(e) => {
//               // Fallback image if the original fails to load
//               e.currentTarget.src = "https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found";
//             }}
//           />
//           {/* Floating icon badge on hover */}
//           <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//             <div className="text-xl" style={{ color: "var(--primery)" }}>
//               {solution.icon}
//             </div>
//           </div>
//         </div>

//         {/* Info section */}
//         <div className="p-4 flex flex-col flex-grow">
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

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {solutions.map((solution, idx) => (
//             <SolutionCard key={solution.id} solution={solution} index={idx} />
//           ))}
//         </div>

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
import {
  MdBiotech,
  MdOutlineEnergySavingsLeaf,
  MdOutlineSettingsRemote,
} from "react-icons/md";
import { Link } from "react-router-dom";

// ===============================
// Hook: Scroll detection (re-trigger enabled)
// ===============================
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

// ===============================
// Data
// ===============================
const solutions = [
  {
    id: "02",
    name: "Decarbonization",
    desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
    icon: <MdOutlineEnergySavingsLeaf />,
    path: "/products/decarbonization",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
  },
  {
    id: "03",
    name: "Digitalization",
    desc: "OPTIMAX® enables remote monitoring & control systems.",
    icon: <MdOutlineSettingsRemote />,
    path: "/products/digitalization",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    id: "04",
    name: "Oil & Gas",
    desc: "Upstream and downstream processing systems.",
    icon: <FaOilCan />,
    path: "/products/oilgas",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
  },
  {
    id: "05",
    name: "Midstream",
    desc: "Pipeline and NGL recovery systems.",
    icon: <GiPipes />,
    path: "/products/midstream",
    image: "/midstream.jpg",
  },
  {
    id: "06",
    name: "Bio Chemicals",
    desc: "Biomass to chemicals and fuels.",
    icon: <MdBiotech />,
    path: "/products/biochemicals",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
  },
  {
    id: "07",
    name: "Syngas Derivatives",
    desc: "Hydrogen, ammonia & methanol production.",
    icon: <GiChemicalTank />,
    path: "/products/syngas",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&h=400&fit=crop",
  },
];

// ===============================
// Card Component (NEW animation style)
// ===============================
function SolutionCard({ solution, index }) {
  const [ref, inView] = useInView();
  const delay = index * 0.15;

  return (
    <div
      ref={ref}
      className="transition-all duration-700 will-change-transform"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) rotate(0deg) scale(1)"
          : "translateY(80px) rotate(5deg) scale(0.9)",
        transitionDelay: `${delay}s`,
      }}
    >
      <Link
        to={solution.path}
        className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col border border-gray-200"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-200">
          <img
            src={solution.image}
            alt={solution.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              inView ? "scale-100" : "scale-125"
            } group-hover:scale-110`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400/e2e8f0/475569?text=Image+Not+Found";
            }}
          />

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 overflow-hidden">
            <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-12 animate-shine"></div>
          </div>

          {/* Icon */}
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md transform scale-0 group-hover:scale-100 transition duration-300">
            <div className="text-xl" style={{ color: "var(--primery)" }}>
              {solution.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <div
            className="inline-flex px-2 py-0.5 rounded-md text-xs font-mono font-bold mb-2 self-start"
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

          <p className="text-gray-600 text-sm flex-grow">
            {solution.desc}
          </p>

          <div className="mt-3">
            <span className="text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-all flex items-center gap-1 group-hover:gap-2">
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ===============================
// Main Component
// ===============================
const Solutions = () => {
  const [headerRef, headerInView] = useInView();

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-14 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-xs font-semibold uppercase text-[var(--primery)]">
            What We Deliver
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-gray-900">
            Engineered{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <div className="w-20 h-1 mx-auto mt-3 rounded-full bg-[var(--primery)]"></div>

          <p className="text-gray-600 mt-4">
            Across the entire hydrocarbon value chain — from wellhead to refinery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => (
            <SolutionCard key={solution.id} solution={solution} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:gap-3"
            style={{ backgroundColor: "var(--primery)" }}
          >
            Discuss your project →
          </Link>
        </div>
      </div>

      {/* Shine animation CSS */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        .animate-shine {
          animation: shine 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Solutions;