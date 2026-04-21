import React, { useEffect, useRef, useState } from 'react';
import {
  FaLeaf, FaFlask, FaRecycle, FaChartLine, FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import { GiPlantSeed, GiGasPump } from 'react-icons/gi';
import { MdBiotech } from 'react-icons/md';
import { Link } from "react-router-dom";

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

// ============================================================
// Animation styles (including bubbleFloat and fade animations)
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
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }

  /* Scroll‑triggered transition classes (inline styles override) */
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

const BioChemicals = () => {
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

  // Refs for scroll‑triggered sections (continuous)
  const [portfolioHeaderRef, portfolioHeaderInView] = useInView();
  const [techLeftRef, techLeftInView] = useInView();
  const [techRightRef, techRightInView] = useInView();
  const [safLeftRef, safLeftInView] = useInView();
  const [safRightRef, safRightInView] = useInView();
  const [envHeaderRef, envHeaderInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  // Individual card refs for portfolio (4 cards)
  const portfolioCardRefs = [useInView(), useInView(), useInView(), useInView()];

  // Individual card refs for environmental value (3 cards)
  const envCardRefs = [useInView(), useInView(), useInView()];

  const portfolioData = [
    { icon: GiPlantSeed, title: "1G Bioethanol", desc: "First generation ethanol from sugar/starch crops" },
    { icon: FaFlask, title: "Bio Methanol", desc: "Renewable methanol from biomass or captured CO₂" },
    { icon: GiGasPump, title: "Bio LNG", desc: "Liquefied biomethane for clean transport" },
    { icon: FaRecycle, title: "Bioplastics", desc: "Renewable and biodegradable polymers" }
  ];

  const envData = [
    { icon: FaShieldAlt, title: "Zero Liquid Discharge", desc: "Complete water recycling and effluent elimination." },
    { icon: FaBolt, title: "Zero GHG Emissions", desc: "Carbon-neutral processes with carbon capture integration." },
    { icon: FaGlobe, title: "Circular Economy", desc: "Waste-to-value conversion and sustainable feedstocks." }
  ];

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2 animate-fadeLeft text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Bio Chemicals
                <span className="block text-amber-400">Sustainable Technology</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C offers modern, efficient, and fully automated Conventional and Cellulosic
                Bioethanol plants with Zero Liquid Discharge (ZLD) and Zero Greenhouse Gas (GHG) emissions.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full max-w-md mx-auto">
                <img
                  src="/biochemicals.jpg"
                  alt="Bioethanol plant and green technology"
                  className="w-full h-auto max-h-[250px] md:max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Bio-Chemical Products – header slides left, each card fades up individually */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header slides from left */}
          <div
            ref={portfolioHeaderRef}
            className="text-center mb-10 md:mb-16 scroll-slide-left"
            style={{
              opacity: portfolioHeaderInView ? 1 : 0,
              transform: portfolioHeaderInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Sustainable{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Bio-Products
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm sm:text-base px-4">
              From first-generation ethanol to advanced bioplastics and SAF, we deliver complete solutions.
            </p>
          </div>

          {/* Cards – each fades up with staggered delay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {portfolioData.map((card, idx) => {
              const [ref, inView] = portfolioCardRefs[idx];
              return (
                <div
                  key={idx}
                  ref={ref}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s`,
                  }}
                >
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
                  <div className="p-5 md:p-6 text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                      <card.icon size={28} className="md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{card.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm mt-2">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Plant Capacities – left block slides left, right block slides right */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Left block slides from left */}
            <div
              ref={techLeftRef}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border-b-4 border-amber-500 scroll-slide-left"
              style={{
                opacity: techLeftInView ? 1 : 0,
                transform: techLeftInView ? "translateX(0)" : "translateX(-30px)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLeaf className="text-amber-600 text-2xl md:text-3xl" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Own Technology</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Proprietary technology for <strong>Bioethanol</strong> and <strong>Bio-methanol</strong> production,
                developed in-house for maximum efficiency, lower CAPEX/OPEX, and seamless integration.
              </p>
            </div>

            {/* Right block slides from right */}
            <div
              ref={techRightRef}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border-b-4 border-amber-500 scroll-slide-right"
              style={{
                opacity: techRightInView ? 1 : 0,
                transform: techRightInView ? "translateX(0)" : "translateX(30px)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="text-amber-600 text-2xl md:text-3xl" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Standard Plants</h3>
              </div>
              <p className="text-gray-700 mb-3 text-sm md:text-base">
                Pre-engineered Bioethanol plants available in standard capacities:
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="bg-amber-100 text-amber-800 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">100 KL/day</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">200 KL/day</span>
                <span className="bg-amber-100 text-amber-800 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">400 KL/day</span>
              </div>
              <p className="text-gray-600 text-xs md:text-sm mt-3">Fully automated with ZLD and zero GHG emissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAF and Partner Technologies – left block slides left, right block slides right */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            {/* Left block slides from left */}
            <div
              ref={safLeftRef}
              className="lg:w-1/2 scroll-slide-left"
              style={{
                opacity: safLeftInView ? 1 : 0,
                transform: safLeftInView ? "translateX(0)" : "translateX(-30px)",
              }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 text-white shadow-xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg md:text-xl">✈️</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Sustainable Aviation Fuel (SAF)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  Through strategic partnerships, Pyramid E&C offers advanced technology for Sustainable Aviation Fuel production,
                  enabling decarbonization of the aviation sector via HEFA, ATJ, and Gasification-FT routes.
                </p>
              </div>
            </div>

            {/* Right block slides from right */}
            <div
              ref={safRightRef}
              className="lg:w-1/2 scroll-slide-right"
              style={{
                opacity: safRightInView ? 1 : 0,
                transform: safRightInView ? "translateX(0)" : "translateX(30px)",
              }}
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-amber-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <MdBiotech className="text-amber-600 text-2xl md:text-3xl" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Partner Technologies</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm md:text-base">Licensed access to world-class technologies for:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span><span className="text-gray-800 text-sm md:text-base font-medium">Ethylene Glycol</span></li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span><span className="text-gray-800 text-sm md:text-base font-medium">Ethylene Oxide</span></li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span><span className="text-gray-800 text-sm md:text-base font-medium">Sustainable Aviation Fuel (SAF)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Value Proposition – header slides left, cards fade up individually */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header slides from left */}
          <div
            ref={envHeaderRef}
            className="text-center mb-10 md:mb-12 scroll-slide-left"
            style={{
              opacity: envHeaderInView ? 1 : 0,
              transform: envHeaderInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Environmental Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Sustainable by{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Design
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-6 text-center">
            {envData.map((card, idx) => {
              const [ref, inView] = envCardRefs[idx];
              return (
                <div
                  key={idx}
                  ref={ref}
                  className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s`,
                  }}
                >
                  <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center">
                    <card.icon />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section – fades up on scroll */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto text-center scroll-fade-up"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Drive the green transition with Pyramid E&C
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Let's build a{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              sustainable future
            </span>{" "}
            together
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            From concept to commissioning, our bio-chemical solutions help you achieve sustainability goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Our Experts →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BioChemicals;