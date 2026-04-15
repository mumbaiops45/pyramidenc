import React, { useEffect, useRef, useState } from 'react';
import {
  FaWind, FaFlask, FaLeaf, FaCompress, FaWarehouse, FaChartLine,
  FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import { GiChemicalDrop, GiGasPump } from 'react-icons/gi';
import { Link } from "react-router-dom";

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

  // Refs for fade-in sections
  const productsRef = useRef(null);
  const [productsInView, setProductsInView] = useState(false);
  const expertiseRef = useRef(null);
  const [expertiseInView, setExpertiseInView] = useState(false);
  const supportRef = useRef(null);
  const [supportInView, setSupportInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === productsRef.current) setProductsInView(entry.isIntersecting);
          if (entry.target === expertiseRef.current) setExpertiseInView(entry.isIntersecting);
          if (entry.target === supportRef.current) setSupportInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (productsRef.current) observer.observe(productsRef.current);
    if (expertiseRef.current) observer.observe(expertiseRef.current);
    if (supportRef.current) observer.observe(supportRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* Hero Section */}
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

      {/* Key Derivatives */}
      <section ref={productsRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16 transition-all duration-700"
            style={{ opacity: productsInView ? 1 : 0, transform: productsInView ? "translateY(0)" : "translateY(30px)" }}>
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

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Hydrogen Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: productsInView ? 1 : 0, transform: productsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.1s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                  <FaWind size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Hydrogen</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">Complete hydrogen solutions from production to storage and distribution.</p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Green, blue & conventional hydrogen</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Electrolysis & reforming technologies</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Compression & storage systems</span></li>
                </ul>
              </div>
            </div>

            {/* Ammonia Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: productsInView ? 1 : 0, transform: productsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.2s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                  <GiChemicalDrop size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Ammonia</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">End-to-end ammonia synthesis, storage, and handling infrastructure.</p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Ammonia synthesis loops</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Low-carbon & green ammonia</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Refrigerated storage & export terminals</span></li>
                </ul>
              </div>
            </div>

            {/* Methanol Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: productsInView ? 1 : 0, transform: productsInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.3s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                  <FaFlask size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Methanol</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">Methanol production units tailored to global market demands.</p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Conventional & renewable methanol</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Methanol synthesis & purification</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Storage and distribution systems</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Expertise Section */}
      <section ref={expertiseRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 transition-all duration-700"
            style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(30px)" }}>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {/* Expertise cards */}
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 transition-all duration-700"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.1s" }}>
              <FaCompress className="text-amber-600 text-xl md:text-2xl mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Reforming Technologies</h3>
              <p className="text-gray-600 text-xs md:text-sm">SMR, ATR, POx, and electrified reforming for hydrogen and syngas production.</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 transition-all duration-700"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.2s" }}>
              <GiGasPump className="text-amber-600 text-xl md:text-2xl mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Synthesis Loops</h3>
              <p className="text-gray-600 text-xs md:text-sm">Ammonia and methanol synthesis loop design, catalyst selection, and optimization.</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 transition-all duration-700"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.3s" }}>
              <FaCompress className="text-amber-600 text-xl md:text-2xl mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Compression Systems</h3>
              <p className="text-gray-600 text-xs md:text-sm">Synthesis gas compressors, recycle compressors, and driver selection.</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 transition-all duration-700"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.4s" }}>
              <FaWarehouse className="text-amber-600 text-xl md:text-2xl mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Storage & Handling</h3>
              <p className="text-gray-600 text-xs md:text-sm">Cryogenic tanks, pressurized bullets, and loading/unloading facilities.</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 transition-all duration-700"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.5s" }}>
              <FaChartLine className="text-amber-600 text-xl md:text-2xl mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Utilities Integration</h3>
              <p className="text-gray-600 text-xs md:text-sm">Steam systems, cooling water, power generation, and waste heat recovery.</p>
            </div>
            <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-amber-500 transition-all duration-700"
              style={{ opacity: expertiseInView ? 1 : 0, transform: expertiseInView ? "translateY(0)" : "translateY(20px)", transitionDelay: "0.6s" }}>
              <FaShieldAlt className="text-amber-600 text-xl md:text-2xl mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Safety & Sustainability</h3>
              <p className="text-gray-600 text-xs md:text-sm">Hazard analysis, carbon capture integration, and low-carbon design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Support Section */}
      <section ref={supportRef} className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 text-center">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: supportInView ? 1 : 0, transform: supportInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaBolt /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Concept to Detail</h4>
              <p className="text-gray-600 text-sm md:text-base">FEED, detailed engineering, and execution support for syngas derivatives.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: supportInView ? 1 : 0, transform: supportInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaGlobe /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600 text-sm md:text-base">Compliance with API, ASME, ISO, and international codes.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: supportInView ? 1 : 0, transform: supportInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.3s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaLeaf /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Sustainable Solutions</h4>
              <p className="text-gray-600 text-sm md:text-base">Green, blue, and low-carbon pathways for future energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
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