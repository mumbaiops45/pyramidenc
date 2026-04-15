import React, { useEffect, useRef, useState } from 'react';
import {
  FaMobileAlt, FaChartLine, FaRobot, FaCogs, FaLink,
  FaBrain, FaTachometerAlt, FaUsers, FaMoneyBillWave,
  FaHeadset, FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import { GiArtificialIntelligence, GiDigitalTrace } from 'react-icons/gi';
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

const Digitalization = () => {
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
  const roadmapRef = useRef(null);
  const [roadmapInView, setRoadmapInView] = useState(false);
  const supportRef = useRef(null);
  const [supportInView, setSupportInView] = useState(false);
  const valueRef = useRef(null);
  const [valueInView, setValueInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === roadmapRef.current) setRoadmapInView(entry.isIntersecting);
          if (entry.target === supportRef.current) setSupportInView(entry.isIntersecting);
          if (entry.target === valueRef.current) setValueInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (roadmapRef.current) observer.observe(roadmapRef.current);
    if (supportRef.current) observer.observe(supportRef.current);
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
            <div className="lg:w-1/2 animate-fadeLeft text-center lg:text-left lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="bg-amber-500 text-gray-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full">Optimax App</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Digitalization
                <span className="block text-amber-400">Plants by Design</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C supplies plants that are truly <strong>Digital by design</strong>. Advanced features such as
                real-time process optimization and remote performance management via handheld devices provide complete
                control to stakeholders.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
            <div>
                <div className='flex justify-center'>
                  <img
                  src="/digitalization-hero.jpg"
                  alt="Digital plant control dashboard on mobile device"
                  className="min-w-96 h-auto md:max-h-[400px] object-fill"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digitalization Program Roadmap */}
      <section ref={roadmapRef} className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16 transition-all duration-700"
            style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(30px)" }}>
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Digitalization{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Program
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm sm:text-base px-4">
              A comprehensive step-by-step approach to transform your plant into a smart, connected, and optimized facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {/* Operator Training Simulator */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaCogs size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Operator Training Simulator</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Immersive simulation for safe and efficient operator training.</p>
            </div>

            {/* Process Digital Twin */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <GiDigitalTrace size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Process Digital Twin</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Virtual replica of process for real-time monitoring and analysis.</p>
            </div>

            {/* Mechanical Digital Twin */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaRobot size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Mechanical Digital Twin</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Equipment and asset modeling for predictive maintenance.</p>
            </div>

            {/* Data Linkage with Plant Control System */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaLink size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Data Linkage with DCS/PLC</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Seamless integration of digital twin with plant control systems.</p>
            </div>

            {/* Real Time Performance Simulations */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.5s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaChartLine size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Real-Time Simulations</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Live performance simulations for operational decision support.</p>
            </div>

            {/* AI Techniques to Predict Plant Performance */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.6s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <GiArtificialIntelligence size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">AI Performance Prediction</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Machine learning models to forecast and optimize plant KPIs.</p>
            </div>

            {/* Performance Dashboard for Top Management */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.7s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaTachometerAlt size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Management Dashboard</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Executive KPIs and performance analytics in one view.</p>
            </div>

            {/* Physical Operation Support */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.8s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaUsers size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">On-Site Operation Support</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Physical operation support on a visit basis as needed.</p>
            </div>

            {/* Performance-based Revenue Model */}
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: roadmapInView ? 1 : 0, transform: roadmapInView ? "translateY(0)" : "translateY(40px)", transitionDelay: "0.9s" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaMoneyBillWave size={18} className="md:w-5 md:h-5" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Performance-based Revenue Model</h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">Align incentives with actual plant performance improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support & Remote Management Section */}
      <section ref={supportRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: supportInView ? 1 : 0, transform: supportInView ? "translateX(0)" : "translateX(-30px)" }}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <FaHeadset className="text-gray-900 text-lg md:text-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">24/7 Help Desk & Advisory</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  To maximize plant performance, Pyramid E&C offers comprehensive Digitalization solutions for hydrocarbon
                  asset owners across the globe with round-the-clock help desk and advisory services.
                </p>
                <div className="mt-6 flex items-center gap-2 text-amber-400">
                  <FaMobileAlt className="text-sm md:text-base" />
                  <span className="text-xs md:text-sm">Remote performance management via handheld devices</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 transition-all duration-700"
              style={{ opacity: supportInView ? 1 : 0, transform: supportInView ? "translateX(0)" : "translateX(30px)" }}>
              <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaBrain className="text-amber-600 text-2xl md:text-3xl" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Advanced Features</h3>
                </div>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 text-sm md:text-base"><span className="text-amber-500 mt-1">▹</span><span>Real-time process optimization</span></li>
                  <li className="flex items-start gap-2 text-sm md:text-base"><span className="text-amber-500 mt-1">▹</span><span>Remote performance management via handheld devices</span></li>
                  <li className="flex items-start gap-2 text-sm md:text-base"><span className="text-amber-500 mt-1">▹</span><span>Complete stakeholder controls while on the move</span></li>
                </ul>
                <div className="mt-6 p-3 md:p-4 bg-white rounded-lg border border-amber-200">
                  <p className="text-gray-800 text-sm md:text-base font-medium">Stakeholders can access and manage plants from anywhere, anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section ref={valueRef} className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-6 text-center">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Data Security</h4>
              <p className="text-gray-600 text-sm md:text-base">Enterprise-grade cybersecurity for plant data and control systems.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaBolt /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Operational Agility</h4>
              <p className="text-gray-600 text-sm md:text-base">Faster response to process upsets and market changes.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm transition-all duration-700"
              style={{ opacity: valueInView ? 1 : 0, transform: valueInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.3s" }}>
              <div className="text-amber-600 text-3xl md:text-4xl mb-3 flex justify-center"><FaGlobe /></div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Global Support</h4>
              <p className="text-gray-600 text-sm md:text-base">24/7 help desk and advisory services worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Ready to digitize your plant?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Unlock{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              real-time insights & operational control
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Partner with Pyramid E&C to transform your plant into a smart, connected, and optimized facility.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Business Enquiry →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Digitalization;