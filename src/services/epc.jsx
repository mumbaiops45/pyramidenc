import React, { useEffect, useRef, useState } from "react";
import {
  FaHardHat,
  FaChartLine,
  FaTools,
  FaClipboardList,
  FaPenFancy,
  FaBuilding,
  FaCogs,
  FaHandshake,
  FaClock,
  FaDollarSign,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { Link } from "react-router-dom";

// ============================================================================
// Custom hook for scroll animations
// ============================================================================
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);
  return [ref, inView];
}

// ============================================================================
// Animation styles (bubbles, fades, shimmer) – using brand colors
// ============================================================================
const animationStyles = `
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

const Epc = () => {
  const [featuresRef, featuresInView] = useInView();
  const [phasesRef, phasesInView] = useInView();
  const [benefitsRef, benefitsInView] = useInView();
  const [imageSectionRef, imageSectionInView] = useInView();

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

  const features = [
    { title: "Single Point Responsibility", description: "One contract, one accountable partner – from design to commissioning.", icon: FaHandshake },
    { title: "Integrated Engineering", description: "Seamless coordination across all disciplines.", icon: FaCogs },
    { title: "Procurement Excellence", description: "Global sourcing, quality assurance, timely delivery.", icon: FaClipboardList },
    { title: "Construction Management", description: "Safe, on‑schedule field execution.", icon: FaHardHat },
    { title: "Modular Fabrication", description: "Skid‑mounted solutions to accelerate timelines.", icon: GiFactory },
    { title: "Commissioning & Start‑up", description: "Full support to performance testing.", icon: FaTools },
  ];

  const phases = [
    { step: "01", title: "Concept & Feasibility", description: "Define scope, feasibility studies, budget & schedule.", icon: FaChartLine },
    { step: "02", title: "Front End Engineering (FEED)", description: "Detailed engineering, procurement planning, construction methodology.", icon: FaPenFancy },
    { step: "03", title: "Detailed Engineering", description: "Complete design packages, 3D models, specifications.", icon: FaBuilding },
    { step: "04", title: "Procurement & Logistics", description: "Global sourcing, expediting, just‑in‑time delivery.", icon: FaClipboardList },
    { step: "05", title: "Construction & Installation", description: "On‑site construction, modular assembly, safety-first.", icon: FaHardHat },
    { step: "06", title: "Commissioning & Handover", description: "System testing, training, final turnover.", icon: FaTools },
  ];

  const benefits = [
    { title: "Reduced Risk", description: "Single point accountability minimizes delays.", icon: FaShieldAlt },
    { title: "Faster Delivery", description: "Integrated scheduling accelerates timelines.", icon: FaClock },
    { title: "Cost Certainty", description: "Lump‑sum contracts provide predictable budgeting.", icon: FaDollarSign },
    { title: "Quality Assurance", description: "Consistent quality across all phases.", icon: FaHandshake },
  ];

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – centered text, brand gradient */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>Services</span><span>›</span>
            <span className="text-amber-400 font-medium">Turnkey EPC Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Turnkey{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              EPC Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Single‑point responsibility for your project – from concept to commissioning. We deliver integrated
            engineering, procurement, and construction solutions for the hydrocarbon and energy industries.
          </p>
        </div>
      </section>

      {/* Introduction – updated pill badge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)] animate-fadeUp">
            End‑to‑End Delivery
          </span>
          <p className="text-gray-700 text-lg leading-relaxed mt-4 animate-fadeUp delay-100">
            Pyramid E&C provides complete turnkey EPC solutions for oil & gas, refining, petrochemical,
            and renewable energy projects. Our integrated approach ensures seamless coordination,
            reduced risks, and predictable outcomes – from initial concept to final handover.
          </p>
        </div>
      </section>

      {/* Image Section – with pill badge + gradient heading + underline */}
      <section ref={imageSectionRef} className="py-16 px-6 bg-white">
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700"
          style={{
            opacity: imageSectionInView ? 1 : 0,
            transform: imageSectionInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="order-2 md:order-1">
            {/* Pill badge */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Approach
            </span>
            {/* Gradient heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Integrated{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Project Delivery
              </span>
            </h3>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] rounded-full mb-6" />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our multi‑disciplinary teams work in parallel, using advanced 3D modeling and clash detection to eliminate
              rework. We combine local knowledge with global best practices to deliver cost‑effective, safe, and sustainable facilities.
            </p>
            <ul className="space-y-3">
              {[
                "Advanced 3D BIM & clash detection",
                "Local content & global supply chain",
                "Safety‑by‑design philosophy",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-[var(--primery)] text-sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 group">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
              <img
                src="/EPC.png"
                alt="Turnkey EPC project execution"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section – updated header */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: featuresInView ? 1 : 0,
              transform: featuresInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Pill badge */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Why Choose Us
            </span>
            {/* Gradient heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Turnkey{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                EPC Capabilities
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              We manage every aspect of your project, delivering a fully operational facility on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group border-l-4 border-amber-200 pl-5 py-2 transition-all duration-300 hover:border-amber-500 hover:pl-6"
                style={{
                  opacity: featuresInView ? 1 : 0,
                  transform: featuresInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <feature.icon className="text-3xl text-amber-500 mb-3 group-hover:text-amber-600 transition-colors" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Section – updated header */}
      <section ref={phasesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: phasesInView ? 1 : 0,
              transform: phasesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Pill badge */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Process
            </span>
            {/* Gradient heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Project{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Delivery Phases
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A structured, proven methodology from concept to commissioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="group border-l-4 border-amber-300 pl-5 py-2 transition-all duration-300 hover:border-amber-500 hover:pl-6"
                style={{
                  opacity: phasesInView ? 1 : 0,
                  transform: phasesInView ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="text-5xl font-black text-amber-200 group-hover:text-amber-300 transition-colors mb-2">
                  {phase.step}
                </div>
                <phase.icon className="text-2xl text-amber-500 mb-3 group-hover:text-amber-600" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section – updated header */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: benefitsInView ? 1 : 0,
              transform: benefitsInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Pill badge */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Advantages
            </span>
            {/* Gradient heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Why{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Turnkey EPC?
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Partner with Pyramid E&C for a seamless, risk‑mitigated project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="border-t-2 border-gray-200 pt-4 transition-all duration-300 hover:border-amber-400"
                style={{
                  opacity: benefitsInView ? 1 : 0,
                  transform: benefitsInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <benefit.icon className="text-3xl text-amber-500 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – updated with pill badge + gradient heading + underline */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Ready for a Single‑Point Solution?
          </span>
          {/* Gradient heading */}
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Let's deliver{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
               your project
            </span>{" "}
            together
          </h2>
          {/* Underline */}
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Contact our EPC experts to discuss how we can execute your project with certainty.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Our EPC Team →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Epc;