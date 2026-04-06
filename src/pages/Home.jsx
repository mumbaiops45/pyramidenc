// import React, { useState, useEffect } from "react";

// const slides = [
//   {
//     id: "sustainable",
//     eyebrow: "Environmental Excellence",
//     headline: "SUSTAINABLE",
//     desc: "Our technologies monetize carbon emissions, eliminate liquid effluents and enable renewable energy integration for economically viable hydrocarbon processing.",
//     image: "/renewable-energy-solutions.jpg",
//   },
//   {
//     id: "modular",
//     eyebrow: "Global Mobility Design",
//     headline: "MODULAR",
//     desc: "Plants designed for global mobility, onshore and offshore. All process systems packaged in our fabrication yard and dispatched after successful integrity testing.",
//     image: "/modular-Process.jpg",
//   },
//   {
//     id: "digital",
//     eyebrow: "Industry 4.0 Ready",
//     headline: "DIGITAL",
//     desc: "Digital twin, real-time process optimization, and remote performance management capability provide total control to all stakeholders.",
//     image: "/digital-network.jpg",
//   },
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
//     return () => clearInterval(t);
//   }, []);

//   return (


//     <section
//       className="relative w-full overflow-hidden"
//       style={{
//         height: "100vh",
//         marginTop: "-86px",   /* pull up behind fixed navbar: 64px height + 12px top gap */
//       }}
//     >
//       {slides.map((slide, i) => (
//         <div
//           key={slide.id}
//           className="absolute inset-0 transition-opacity duration-1000"
//           style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
//           aria-hidden={i !== current}
//         >
//           {/* Full-bleed image */}
//           <img
//             src={slide.image}
//             alt={slide.headline}
//             className="absolute inset-0 w-full h-full object-cover"
//             style={{
//               imageRendering: "auto",   // ensures proper scaling
//             }}
//             loading={i === 0 ? "eager" : "lazy"}
//           />

//           {/* Dark gradient */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(105deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.10) 100%)",
//             }}
//           />

//           {/* Content — pt-24 clears the navbar */}
//           <div
//             className="relative z-10 flex items-center h-full px-6 lg:px-16"
//             style={{ paddingTop: "96px", paddingBottom: "60px" }}
//           >
//             <div
//               className="max-w-xl rounded-2xl p-7 lg:p-10 border shadow-2xl"
//               style={{
//                 background: "rgba(255,255,255,0.07)",
//                 backdropFilter: "blur(12px)",
//                 WebkitBackdropFilter: "blur(12px)",
//                 borderColor: "rgba(255,255,255,0.15)",
//               }}
//             >
//               <span
//                 className="inline-block text-[11px] font-semibold tracking-[3px] uppercase mb-4"
//                 style={{ color: "var(--primery)" }}
//               >
//                 {slide.eyebrow}
//               </span>

//               <h1
//                 className="font-black text-white leading-none mb-5"
//                 style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
//               >
//                 {slide.headline}
//               </h1>

//               <p
//                 className="text-sm lg:text-[15px] font-light leading-relaxed mb-8 max-w-md"
//                 style={{ color: "rgba(255,255,255,0.78)" }}
//               >
//                 {slide.desc}
//               </p>

//               <button
//                 className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-black transition-colors duration-200"
//                 style={{ background: "var(--primery)" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--primery-light)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--primery)")}
//               >
//                 Discover More
//                 <svg
//                   className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
//                   fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Dots */}
//       <div
//         className="absolute bottom-7 left-6 lg:left-16 flex gap-2"
//         style={{ zIndex: 20 }}
//       >
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             style={{
//               width: i === current ? "48px" : "28px",
//               height: "3px",
//               borderRadius: "9999px",
//               background: i === current ? "var(--primery)" : "rgba(255,255,255,0.3)",
//               border: "none",
//               padding: 0,
//               cursor: "pointer",
//               transition: "all 0.3s",
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "sustainable",
    eyebrow: "Environmental Excellence",
    headline: "SUSTAINABLE",
    desc: "Our technologies monetize carbon emissions, eliminate liquid effluents and enable renewable energy integration for economically viable hydrocarbon processing.",
    image: "/renewable-energy-solutions.jpg",
  },
  {
    id: "modular",
    eyebrow: "Global Mobility Design",
    headline: "MODULAR",
    desc: "Plants designed for global mobility, onshore and offshore. All process systems packaged in our fabrication yard and dispatched after successful integrity testing.",
    image: "/modular-Process.jpg",
  },
  {
    id: "digital",
    eyebrow: "Industry 4.0 Ready",
    headline: "DIGITAL",
    desc: "Digital twin, real-time process optimization, and remote performance management capability provide total control to all stakeholders.",
    image: "/digital-network.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        marginTop: "-86px",
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.headline}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative z-20 flex items-center h-full px-6 lg:px-16 pt-24 pb-16">
            <div className="max-w-xl rounded-2xl p-7 lg:p-10 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              {/* Eyebrow */}
              <span className="inline-block text-[11px] font-semibold tracking-[3px] uppercase mb-4 text-primery">
                {slide.eyebrow}
              </span>

              {/* Headline */}
              <h1 className="font-black leading-none mb-5 text-gradient text-[clamp(36px,6vw,64px)]">
                {slide.headline}
              </h1>

              {/* Description */}
              <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed mb-8 max-w-md">
                {slide.desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full font-semibold bg-primery text-black hover:bg-primery-light hover:text-black transition-all duration-300"
                >
                  Get Free Consultation
                </Link>

                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full text-white border border-white/30 hover:border-white transition"
                >
                  View Projects
                </Link>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-6 lg:left-16 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current
              ? "w-12 h-[3px] bg-primery"
              : "w-7 h-[3px] bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 text-white/60 text-xs animate-bounce z-30">
        Scroll ↓
      </div>
    </section>
  );
};

export default Hero;