import React, { useEffect, useRef, useState } from 'react';
import {
  FaWarehouse, FaCubes, FaSnowflake, FaOilCan, FaGasPump,
  FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
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

const Midstream = () => {
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
  const storageRef = useRef(null);
  const [storageInView, setStorageInView] = useState(false);
  const transportRef = useRef(null);
  const [transportInView, setTransportInView] = useState(false);
  const valueRef = useRef(null);
  const [valueInView, setValueInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === storageRef.current) setStorageInView(entry.isIntersecting);
          if (entry.target === transportRef.current) setTransportInView(entry.isIntersecting);
          if (entry.target === valueRef.current) setValueInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (storageRef.current) observer.observe(storageRef.current);
    if (transportRef.current) observer.observe(transportRef.current);
    if (valueRef.current) observer.observe(valueRef.current);
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
                Midstream Infrastructure
                <span className="block text-amber-400">Storage & Transportation</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C provides end-to-end solutions for storage, loading and transportation systems
                for the full range of Oil, Gas and Chemical products. We also deliver pipeline pumping
                stations and compression systems.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 w-full max-w-md mx-auto">
                <img
                  src="/midstream.jpg"
                  alt="Midstream storage tanks and pipelines"
                  className="w-full h-auto max-h-[250px] md:max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Solutions Section */}
      <section ref={storageRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16 transition-all duration-700"
            style={{ opacity: storageInView ? 1 : 0, transform: storageInView ? "translateY(0)" : "translateY(30px)" }}>
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Storage Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Storage Solutions
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm sm:text-base px-4">
              Tailored storage systems for every product type, from crude oil to cryogenic liquids.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Atmospheric Storage Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: storageInView ? 1 : 0, transform: storageInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.1s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                  <FaWarehouse size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Atmospheric Storage</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Reliable storage for liquid hydrocarbons at ambient pressure.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Fixed Roof Storage</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Floating Roof Storage</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Gantries & Loading Systems</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span className="font-medium">Fluids:</span> Crude Oil, Gasoline, Diesel</li>
                </ul>
              </div>
            </div>

            {/* Pressurized Storage Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: storageInView ? 1 : 0, transform: storageInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.2s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                  <FaCubes size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Pressurized Storage</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  High-pressure containment for volatile products and LPG.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Horton Spheres</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Mounded Bullets</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Ship / Tanker Loading</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span className="font-medium">Fluids:</span> Propane, Butane, LPG, Y-Grade</li>
                </ul>
              </div>
            </div>

            {/* Cryogenic Storage Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: storageInView ? 1 : 0, transform: storageInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.3s" }}>
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-5 md:mb-6 text-amber-600">
                  <FaSnowflake size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Cryogenic Storage</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Ultra-low temperature storage for liquefied gases.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Double Wall / Double Containment</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Boil-off Gas Liquefaction System</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span>Gasification & Pumping</span></li>
                  <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">▹</span><span className="font-medium">Fluids:</span> LNG, LPG, Ethylene, Propane, Butane</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation & Pipeline Systems Section */}
      <section ref={transportRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: transportInView ? 1 : 0, transform: transportInView ? "translateX(0)" : "translateX(-30px)" }}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <FaOilCan className="text-gray-900" size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Pipeline & Pumping Systems</h3>
                </div>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Complete pipeline infrastructure including pumping stations, compression systems, and metering
                  for efficient long-distance transport of oil, gas, and chemical products.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2 text-sm md:text-base">Pipeline Systems</div>
                    <p className="text-xs md:text-sm text-gray-300">Cross-country & gathering pipelines, flow assurance, and integrity management.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2 text-sm md:text-base">Pumping Stations</div>
                    <p className="text-xs md:text-sm text-gray-300">High-capacity pumps, surge control, and automation.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2 text-sm md:text-base">Compression Systems</div>
                    <p className="text-xs md:text-sm text-gray-300">Gas compression, booster stations, and driver selection.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2 text-sm md:text-base">Metering & SCADA</div>
                    <p className="text-xs md:text-sm text-gray-300">Custody transfer, leak detection, and remote monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: transportInView ? 1 : 0, transform: transportInView ? "translateX(0)" : "translateX(30px)" }}>
              <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaGasPump className="text-amber-600 text-2xl md:text-3xl" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">EPCM Services</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                  Our delivery scope typically includes supply of design, critical equipment, and EPCM
                  (Engineering, Procurement, Construction Management) services for balance work.
                  We ensure seamless project execution from concept to commissioning.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs md:text-sm font-medium">FEED & Detailed Design</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Procurement Support</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Construction Management</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs md:text-sm font-medium">Commissioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section ref={valueRef} className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 text-center">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Safety & Reliability</h4>
              <p className="text-gray-600 text-sm md:text-base">Hazard analysis, integrity management, and inherently safe designs.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaBolt /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h4>
              <p className="text-gray-600 text-sm md:text-base">Optimized logistics, reduced product loss, and energy-efficient systems.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.3s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaGlobe /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600 text-sm md:text-base">Compliance with API, ASME, ISO, NFPA, and client specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Ready to optimize your midstream assets?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Let's build{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              efficient storage & transportation
            </span>{" "}
            together
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Partner with Pyramid E&C to design, build, and manage your midstream infrastructure.
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

export default Midstream;