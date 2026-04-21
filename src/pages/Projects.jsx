// import React from "react";

// const projects = [
//   {
//     title: "LNG Processing Plant",
//     location: "India",
//     image: "/project1.jpg",
//   },
//   {
//     title: "Gas Compression Unit",
//     location: "UAE",
//     image: "/project2.png",
//   },
//   {
//     title: "Bio Refinery Plant",
//     location: "Europe",
//     image: "/project3.png",
//   },
//   {
//     title: "Hydrogen Production Facility",
//     location: "UK",
//     image: "/project4.jpg",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-14">
//   {/* Top label – pill badge style */}
//   <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
//     Our Work
//   </span>

//   {/* Title with gradient on the key word */}
//   <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
//     Featured{" "}
//     <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
//       Projects
//     </span>
//   </h2>

//   {/* Underline */}
//   <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>
// </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Dark overlay for text contrast */}
//               <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

//               {/* Content */}
//               <div className="absolute bottom-0 p-5">
//                 <h3 className="text-white font-semibold text-lg">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-200 text-sm">
//                   {project.location}
//                 </p>
//               </div>

//               {/* Hover line – gold */}
//               <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;




import React, { useEffect, useRef, useState } from "react";

// ============================================================
// Custom hook for continuous scroll‑triggered animations
// ============================================================
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
      { threshold: 0.2, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const projects = [
  {
    title: "LNG Processing Plant",
    location: "India",
    image: "/project1.jpg",
  },
  {
    title: "Gas Compression Unit",
    location: "UAE",
    image: "/project2.png",
  },
  {
    title: "Bio Refinery Plant",
    location: "Europe",
    image: "/project5.jpg",
  },
  {
    title: "Hydrogen Production Facility",
    location: "UK",
    image: "/project4.jpg",
  },
];

// ============================================================
// Alternative Animated Card – slides from left/right + scale
// ============================================================
const AlternativeProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const delay = index * 0.1;

  // Alternate direction: even index from left, odd from right
  const isEven = index % 2 === 0;
  const initialTransform = isEven ? "translateX(-40px) scale(0.95)" : "translateX(40px) scale(0.95)";

  return (
    <div
      ref={ref}
      className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0) scale(1)" : initialTransform,
        transition: `opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${delay}s,
                     transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${delay}s`,
      }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 w-full transform transition-transform duration-300 group-hover:translate-y-[-5px]">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <p className="text-amber-300 text-sm font-medium">{project.location}</p>
      </div>

      {/* Gold underline that expands from center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3px] w-0 bg-amber-500 group-hover:w-2/3 transition-all duration-300 rounded-full"></div>
    </div>
  );
};

const AlternativeProjects = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3 });

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 py-20 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header – with light text for dark bg */}
        <div
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid with alternating side animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <AlternativeProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlternativeProjects;