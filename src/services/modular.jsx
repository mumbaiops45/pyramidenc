import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// ============================================================================
// Continuous scroll‑triggered hook (observer stays alive)
// ============================================================================
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

// ============================================================================
// Individual facility card component to avoid hook‑in‑callback issues
// ============================================================================
const FacilityCard = ({ facility, index }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
      }}
    >
      <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <FaMapMarkerAlt className="text-amber-500 text-lg group-hover:scale-110 transition" />
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
            {facility.location}
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">{facility.desc}</p>
        {facility.area && (
          <span className="inline-block bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-200 mb-4">
            📐 {facility.area}
          </span>
        )}
        <div className="border-t border-gray-100 pt-3 mt-2">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Capabilities</h4>
          <ul className="space-y-1.5">
            {facility.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                <FaCheckCircle className="text-amber-500 text-xs mt-0.5 flex-shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Animation styles (bubbles, fades, scroll transition classes)
// ============================================================================
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
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }

  /* Scroll‑triggered transition classes */
  .scroll-slide-left {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .scroll-slide-right {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .scroll-fade-up {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

const facilities = [
  {
    location: "Houston, USA",
    desc: "Sales, lifecycle support and automation systems hub.",
    area: "25,000 ft²",
    capabilities: [
      "Instrumentation Integration",
      "Factory Acceptance Tests",
      "After Sales Support",
    ],
  },
  {
    location: "Nigeria",
    desc: "Training & support hub for modular refineries in Africa.",
    area: "300,000 ft²",
    capabilities: [
      "Operator Training",
      "FAT Testing",
      "Support Services",
    ],
  },
  {
    location: "Mundra, India",
    desc: "Main fabrication yard with direct port access.",
    area: "200,000 ft²",
    capabilities: [
      "Pipe Fabrication",
      "Structural Fabrication",
      "Heavy Load Dispatch",
    ],
  },
  {
    location: "Oman",
    desc: "MENA training and aftersales hub.",
    area: "300,000 ft²",
    capabilities: [
      "Operator Training",
      "Support",
      "Testing",
    ],
  },
  {
    location: "Mumbai, India",
    desc: "Prototype & automation manufacturing hub.",
    capabilities: [
      "Pressure Vessels",
      "Automation Systems",
      "Pilot Plants",
    ],
  },
];

// Generate bubbles for hero
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

const Modular = () => {
  const heroBubbles = generateBubbles(18, 15, 50);
  const [ecosystemTextRef, ecosystemTextInView] = useInView();
  const [ecosystemImgRef, ecosystemImgInView] = useInView();
  const [gridHeaderRef, gridHeaderInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* ================= HERO SECTION (unchanged, CSS animations) ================= */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>Services</span><span>›</span>
            <span className="text-amber-400 font-medium">Modular Fabrication</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Global Fabrication{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Network
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Delivering modular plants through a strategically located global infrastructure.
          </p>
        </div>
      </section>

      {/* ================= INTEGRATED MANUFACTURING ECOSYSTEM ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text column – slides from left */}
          <div
            ref={ecosystemTextRef}
            className="order-2 md:order-1 scroll-slide-left"
            style={{
              opacity: ecosystemTextInView ? 1 : 0,
              transform: ecosystemTextInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Ecosystem
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Integrated{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Manufacturing Ecosystem
              </span>
            </h3>
            <div className="w-24 h-1 bg-[var(--primery)] rounded-full mb-6" />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our fabrication and engineering network ensures seamless delivery
              from design to deployment across global markets.
            </p>
            <ul className="space-y-3">
              {[
                "End-to-end project execution",
                "Global logistics integration",
                "Quality-controlled fabrication",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-[var(--primery)] text-sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image column – slides from right */}
          <div
            ref={ecosystemImgRef}
            className="order-1 md:order-2 scroll-slide-right"
            style={{
              opacity: ecosystemImgInView ? 1 : 0,
              transform: ecosystemImgInView ? "translateX(0)" : "translateX(35px)",
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
              <img
                src="/modular-fabrication.jpg"
                alt="Fabrication facility"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL FACILITIES GRID ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header slides from right */}
          <div
            ref={gridHeaderRef}
            className="text-center mb-12 scroll-slide-right"
            style={{
              opacity: gridHeaderInView ? 1 : 0,
              transform: gridHeaderInView ? "translateX(0)" : "translateX(35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Global{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Strategically located to serve our customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <FacilityCard key={idx} facility={facility} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION – fades up ================= */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto text-center scroll-fade-up"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Build With Global Experts
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Need{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Modular Solutions?
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Scale faster with our modular fabrication capabilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Modular;