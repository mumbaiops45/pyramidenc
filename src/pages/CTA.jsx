// import React from "react";
// import { Link } from "react-router-dom";

// const CTA = () => {
//   return (
//     <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
//       <div className="max-w-5xl mx-auto text-center">

//         {/* Top Label */}
//         <div className="flex items-center justify-center gap-2 mb-4">
//           <span className="w-8 h-[2px] bg-amber-600"></span>
//           <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
//             Let’s Build Together
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//           Ready to Start Your{" "}
//           <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
//             Next Project?
//           </span>
//         </h2>

//         {/* Description */}
//         <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
//           Partner with Pyramid E&C to deliver high-performance engineering solutions
//           across oil & gas, energy transition, and industrial infrastructure.
//         </p>

//         {/* Single Button */}
//         <Link
//           to="/contact"
//           className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
//         >
//           Get in Touch →
//         </Link>

//       </div>
//     </section>
//   );
// };

// export default CTA;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
      { threshold: 0.3, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const CTA = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.98)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Label */}
        <div
          className="flex items-center justify-center gap-2 mb-4 transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(15px)",
            transitionDelay: "0.1s",
          }}
        >
          <span className="w-8 h-[2px] bg-amber-600"></span>
          <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
            Let’s Build Together
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.2s",
          }}
        >
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10 transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.3s",
          }}
        >
          Partner with Pyramid E&C to deliver high-performance engineering solutions
          across oil & gas, energy transition, and industrial infrastructure.
        </p>

        {/* Button */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.5s ease-out",
            transitionDelay: "0.4s",
          }}
        >
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;