import React, { useEffect, useRef, useState } from "react";
import {
  FaMicrochip,
  FaHardHat,
  FaChartLine,
  FaTools,
  FaExclamationTriangle,
  FaLeaf,
  FaShieldAlt,
  FaClipboardList,
  FaPenFancy,
  FaBuilding,
  FaCogs,
  FaCheckCircle,
} from "react-icons/fa";
import { GiPipes, GiElectric, GiGears } from "react-icons/gi";
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
// Animation styles (bubbles, fades)
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

const Epcm = () => {
  const [introRef, introInView] = useInView();
  const [imageSectionRef, imageSectionInView] = useInView();
  const [disciplinesRef, disciplinesInView] = useInView();
  const [phasesRef, phasesInView] = useInView();
  const [deliverablesRef, deliverablesInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

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

  const disciplines = [
    { title: "Process Engineering", description: "Process design, simulation, optimization, and heat & material balance.", icon: FaCogs },
    { title: "Mechanical Engineering", description: "Equipment specification, mechanical design, and rotating machinery.", icon: GiGears },
    { title: "Piping Engineering", description: "Piping layout, stress analysis, material selection, and isometrics.", icon: GiPipes },
    { title: "Civil & Structural Engineering", description: "Foundation design, structural steel, and civil works.", icon: FaBuilding },
    { title: "Electrical Engineering", description: "Power distribution, lighting, grounding, and electrical studies.", icon: GiElectric },
    { title: "Automation", description: "PLC, DCS, SIS, SCADA, and control system integration.", icon: FaMicrochip },
    { title: "Risk Management", description: "Risk assessment, mitigation planning, and HAZOP/HAZID facilitation.", icon: FaExclamationTriangle },
    { title: "Environmental Studies", description: "Environmental impact assessments, permitting, and compliance.", icon: FaLeaf },
    { title: "Asset Integrity Assessment", description: "Asset lifecycle integrity, corrosion management, and inspection.", icon: FaShieldAlt },
    { title: "Safety Studies", description: "Process safety, fire protection, and safety system design.", icon: FaHardHat },
  ];

  const phases = [
    { step: "01", title: "Front End Engineering Design (FEED)", description: "Develop project schedule, tendering philosophy, risk strategy, WBS, and detailed cost estimates. Complete process engineering and mechanical requirements to proceed to detailed engineering.", icon: FaChartLine },
    { step: "02", title: "Detailed Engineering", description: "Finalize all engineering deliverables, specifications, drawings, and procurement packages for construction readiness.", icon: FaPenFancy },
    { step: "03", title: "Construction Engineering", description: "On‑site engineering support, constructability reviews, field verification, and as‑built documentation.", icon: FaTools },
  ];

  const feedDeliverables = [
    "Final Heat and Material Balances (H&MB’s)",
    "Equipment sizing, materials of construction, design temperatures and pressures",
    "Process control requirements (analyzers, PLC, SIS, etc.)",
    "Piping and Instrument Diagrams (P&ID’s)",
    "Plot Plan",
    "Process safety contingency analyses",
    "Utility loads (steam, cooling water, waste water treating, etc.)",
    "Interconnections with other units (onsite and offsite)",
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* Hero Section – unchanged */}
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
            <span className="text-amber-400 font-medium">EPCm Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            EPCm{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Concept‑to‑commissioning engineering and project management services from our Houston & Mumbai engineering centers.
          </p>
        </div>
      </section>

      {/* INTRODUCTION – updated pill badge */}
      <section ref={introRef} className="py-16 bg-gray-50">
        <div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{
            opacity: introInView ? 1 : 0,
            transform: introInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Pyramid E&C USA & India Offices
          </span>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Our integrated engineering centers in Houston and Mumbai deliver world‑class EPCm solutions.
            From concept to commissioning, we provide comprehensive engineering and project management services
            across all disciplines.
          </p>
        </div>
      </section>

      {/* Image Section – UPDATED with pill badge + gradient heading + underline */}
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
              Global Presence
            </span>
            {/* Gradient heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Global{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Engineering Centers
              </span>
            </h3>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] rounded-full mb-6" />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Houston and Mumbai offices work as one integrated team, leveraging time zones for round‑the‑clock engineering.
              We combine deep domain expertise with modern digital tools to deliver accurate, cost‑effective designs.
            </p>
            <ul className="space-y-3">
              {["24/7 engineering support", "Common systems & procedures", "Local knowledge, global standards"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-amber-500 text-sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 group">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
              <img
                src="/epcm-services.jpg"
                alt="EPCm engineering and project management"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                Houston & Mumbai Engineering Centers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Disciplines – UPDATED header */}
      <section ref={disciplinesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: disciplinesInView ? 1 : 0,
              transform: disciplinesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Pill badge */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Capabilities
            </span>
            {/* Gradient heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Engineering{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Disciplines
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Full‑spectrum in‑house engineering expertise for complex hydrocarbon projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {disciplines.map((discipline, idx) => (
              <div
                key={idx}
                className="group border-t-2 border-gray-100 pt-5 transition-all duration-300 hover:border-t-amber-400"
                style={{
                  opacity: disciplinesInView ? 1 : 0,
                  transform: disciplinesInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <discipline.icon className="text-3xl text-amber-500 mb-3 group-hover:text-amber-600 transition-colors" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {discipline.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{discipline.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Execution Phases – UPDATED header */}
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
              Our Approach
            </span>
            {/* Gradient heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Project{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Execution Phases
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Structured engineering delivery from FEED through construction.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="flex-1 text-center relative group transition-all duration-500"
                style={{
                  opacity: phasesInView ? 1 : 0,
                  transform: phasesInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-2xl font-black text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    {phase.step}
                  </div>
                  <div className="mt-4">
                    <phase.icon className="text-3xl text-amber-500 mx-auto mb-2 group-hover:text-amber-600" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{phase.description}</p>
                  </div>
                </div>
                {idx < phases.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 -translate-y-1/2 border-t-2 border-dashed border-amber-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEED Deliverables – UPDATED header */}
      <section ref={deliverablesRef} className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-10 transition-all duration-700"
            style={{
              opacity: deliverablesInView ? 1 : 0,
              transform: deliverablesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Pill badge */}
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              FEED Phase
            </span>
            {/* Gradient heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Key{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Deliverables
              </span>
            </h2>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Comprehensive front‑end engineering design outputs for accurate project definition.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 transition-all duration-700"
            style={{
              opacity: deliverablesInView ? 1 : 0,
              transform: deliverablesInView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.2s",
            }}
          >
            {feedDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700 border-b border-gray-200 pb-2">
                <FaClipboardList className="text-amber-500 text-sm flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION – UPDATED with pill badge + gradient heading + underline */}
      <section ref={ctaRef} className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div
          className="max-w-4xl mx-auto text-center transition-all duration-700"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Pill badge */}
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Let's Engineer Your Success
          </span>
          {/* Gradient heading */}
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Ready to Engineer{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          {/* Underline */}
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Leverage our engineering centers in Houston and Mumbai for seamless project delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Our Engineering Team →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Epcm;