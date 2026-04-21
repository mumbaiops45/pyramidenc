import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

// ============================================================
// Continuous scroll‑triggered hook (observer stays alive)
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

const certifications = [
  { name: "ISO 9001:2015", image: "/iso-9001-2015.png", description: "Quality Management System" },
  { name: "ISO 14001", image: "/iso-14001.png", description: "Environmental Management" },
  { name: "ISO 45001", image: "/iso-45001.png", description: "Occupational Health & Safety" },
  { name: "ISO 27001", image: "/iso-27001.png", description: "Information Security Management" },
  { name: "Achilles", image: "/achilles-2.png", description: "Supplier Qualification" },
  { name: "ISNetworld", image: "/isnetworld.png", description: "Contractor Management" },
];

// ============================================================
// Animation styles (bubbles, fades, shimmer, and CSS variables)
// ============================================================
const animationStyles = `
  :root {
    --primery: #f59e0b;
    --primery-dark: #d97706;
  }
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
  @keyframes slideUnderline {
    0% { width: 0; }
    100% { width: 40px; }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .group:hover .animate-slide-underline { animation: slideUnderline 0.4s ease-out forwards; }

  /* Scroll‑triggered transition classes (inline styles will override) */
  .scroll-slide-left {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .scroll-fade-up {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

// Helper to generate random bubbles
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

// ============================================================
// Certification Card Component – with continuous fade‑up
// ============================================================
function CertificationCard({ cert, index }) {
  const [ref, inView] = useInView();
  const [imgError, setImgError] = useState(false);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 0.1}s`,
        transitionProperty: "opacity, transform",
      }}
    >
      <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
        {/* Hover background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 p-5 sm:p-6 text-center">
          {/* Image Container – responsive size */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-5 rounded-2xl bg-gray-800 flex items-center justify-center p-4 group-hover:bg-amber-500 transition-colors duration-500 shadow-md">
            {!imgError ? (
              <img
                src={cert.image}
                alt={cert.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:filter-none group-hover:brightness-100 transition-all duration-500"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="text-4xl sm:text-5xl font-bold text-white group-hover:text-white">
                {cert.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Title with animated underline */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
            {cert.name}
          </h3>
          <div className="flex justify-center mb-3">
            <div className="w-0 h-0.5 bg-amber-500 group-hover:w-10 transition-all duration-300" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {cert.description}
          </p>

          {/* Checkmark icon that appears on hover */}
          <div className="flex justify-center mt-4">
            <FaCheckCircle className="text-amber-500 text-base opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Main Certifications Component with scroll animations
// ============================================================
const Certifications = () => {
  const heroBubbles = generateBubbles(18, 15, 50);
  const [headerRef, headerInView] = useInView();

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* Hero Section (unchanged – uses CSS animations) */}
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
            <span>Home</span><span>›</span>
            <span className="text-amber-400 font-medium">Certifications</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Certifications
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Committed to global quality, safety, and sustainability standards.
          </p>
        </div>
      </section>

      {/* Certifications Grid – with scroll‑triggered header slide‑in */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Animated header – slides from left */}
          <div
            ref={headerRef}
            className="text-center mb-10 md:mb-12 scroll-slide-left"
            style={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Global{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Standards
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              We maintain rigorous certifications that reflect our commitment to quality, safety, and information security.
            </p>
          </div>

          {/* Cards grid – each card fades up individually (already implemented in CertificationCard) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, idx) => (
              <CertificationCard key={idx} cert={cert} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;