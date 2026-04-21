import React, { useEffect, useRef, useState } from 'react';
import {
  FaWind, FaFlask, FaLeaf, FaCompress, FaWarehouse, FaChartLine,
  FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import { GiChemicalDrop, GiGasPump } from 'react-icons/gi';
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

  /* Scroll‑triggered transition classes (inline styles will override) */
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

const SyngasDerivatives = () => {
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
  const [productsHeaderRef, productsHeaderInView] = useInView();
  const [expertiseHeaderRef, expertiseHeaderInView] = useInView();
  const [supportHeaderRef, supportHeaderInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  // Individual card refs for products (3 cards)
  const productCardRefs = [useInView(), useInView(), useInView()];

  // Individual card refs for expertise (6 cards)
  const expertiseCardRefs = [
    useInView(), useInView(), useInView(),
    useInView(), useInView(), useInView()
  ];

  // Individual card refs for support (3 cards)
  const supportCardRefs = [useInView(), useInView(), useInView()];

  const productsData = [
    {
      icon: FaWind,
      title: "Hydrogen",
      desc: "Complete hydrogen solutions from production to storage and distribution.",
      features: ["Green, blue & conventional hydrogen", "Electrolysis & reforming technologies", "Compression & storage systems"]
    },
    {
      icon: GiChemicalDrop,
      title: "Ammonia",
      desc: "End-to-end ammonia synthesis, storage, and handling infrastructure.",
      features: ["Ammonia synthesis loops", "Low-carbon & green ammonia", "Refrigerated storage & export terminals"]
    },
    {
      icon: FaFlask,
      title: "Methanol",
      desc: "Methanol production units tailored to global market demands.",
      features: ["Conventional & renewable methanol", "Methanol synthesis & purification", "Storage and distribution systems"]
    }
  ];

  const expertiseData = [
    { icon: FaCompress, title: "Reforming Technologies", desc: "SMR, ATR, POx, and electrified reforming for hydrogen and syngas production." },
    { icon: GiGasPump, title: "Synthesis Loops", desc: "Ammonia and methanol synthesis loop design, catalyst selection, and optimization." },
    { icon: FaCompress, title: "Compression Systems", desc: "Synthesis gas compressors, recycle compressors, and driver selection." },
    { icon: FaWarehouse, title: "Storage & Handling", desc: "Cryogenic tanks, pressurized bullets, and loading/unloading facilities." },
    { icon: FaChartLine, title: "Utilities Integration", desc: "Steam systems, cooling water, power generation, and waste heat recovery." },
    { icon: FaShieldAlt, title: "Safety & Sustainability", desc: "Hazard analysis, carbon capture integration, and low-carbon design." }
  ];

  const supportData = [
    { icon: FaBolt, title: "Concept to Detail", desc: "FEED, detailed engineering, and execution support for syngas derivatives." },
    { icon: FaGlobe, title: "Global Standards", desc: "Compliance with API, ASME, ISO, and international codes." },
    { icon: FaLeaf, title: "Sustainable Solutions", desc: "Green, blue, and low-carbon pathways for future energy." }
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
                Syngas Derivatives
                <span className="block text-amber-400">Hydrogen · Ammonia · Methanol</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C delivers comprehensive engineering solutions for Syngas Derivatives, supporting 
                the development of Hydrogen, Ammonia, and Methanol production facilities with a focus on 
                efficiency, safety, and sustainability.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full max-w-md mx-auto">
                <img
                  src="/syngas.jpg"
                  alt="Syngas derivatives plant - Hydrogen, Ammonia, Methanol"
                  className="w-full h-auto max-h-[250px] md:max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Derivatives – header slides left, each card fades up individually */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header slides from left */}
          <div
            ref={productsHeaderRef}
            className="text-center mb-10 md:mb-16 scroll-slide-left"
            style={{
              opacity: productsHeaderInView ? 1 : 0,
              transform: productsHeaderInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Core Products
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Syngas-Based{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Derivatives
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm sm:text-base px-4">
              From green hydrogen to low-carbon ammonia and methanol, we deliver complete engineering solutions.
            </p>
          </div>

          {/* Cards – each card uses its own useInView and staggered transitionDelay */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {productsData.map((card, idx) => {
              const [ref, inView] = productCardRefs[idx];
              return (
                <div
                  key={idx}
                  ref={ref}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.1}s`,
                  }}
                >
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
                  <div className="p-6 md:p-8">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                      <card.icon size={28} className="md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">{card.desc}</p>
                    <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Expertise Section – header slides from right, each card fades up individually */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header slides from right */}
          <div
            ref={expertiseHeaderRef}
            className="text-center mb-10 md:mb-12 scroll-slide-right"
            style={{
              opacity: expertiseHeaderInView ? 1 : 0,
              transform: expertiseHeaderInView ? "translateX(0)" : "translateX(35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Engineering Capabilities
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
              From reforming to utilities integration, we deliver optimized plant performance across the syngas value chain.
            </p>
          </div>

          {/* Expertise cards – each with own useInView and staggered delay */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {expertiseData.map((card, idx) => {
              const [ref, inView] = expertiseCardRefs[idx];
              return (
                <div
                  key={idx}
                  ref={ref}
                  className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.07}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 0.07}s`,
                  }}
                >
                  <card.icon className="text-amber-600 text-xl md:text-2xl mb-3" />
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Support Section – header slides from left, cards fade up */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header slides from left */}
          <div
            ref={supportHeaderRef}
            className="text-center mb-10 md:mb-12 scroll-slide-left"
            style={{
              opacity: supportHeaderInView ? 1 : 0,
              transform: supportHeaderInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Project Support
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              End-to-End{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Delivery
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-6 text-center">
            {supportData.map((card, idx) => {
              const [ref, inView] = supportCardRefs[idx];
              return (
                <div
                  key={idx}
                  ref={ref}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
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
            Ready to advance your syngas derivatives project?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Let's build a{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              sustainable energy future
            </span>{" "}
            together
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Partner with Pyramid E&C for innovative, safe, and efficient hydrogen, ammonia, and methanol facilities.
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

export default SyngasDerivatives;