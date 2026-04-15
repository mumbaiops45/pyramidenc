import React, { useEffect, useRef, useState } from "react";
import {
  FaOilCan,
  FaLeaf,
  FaChartLine,
  FaPenFancy,
  FaTasks,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import { GiChemicalTank, GiGasStove } from "react-icons/gi";
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

const ProjectDevelopment = () => {
  const [introRef, introInView] = useInView();
  const [imageSectionRef, imageSectionInView] = useInView();
  const [sectorsRef, sectorsInView] = useInView();
  const [phasesRef, phasesInView] = useInView();
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

  const sectors = [
    { title: "Oil & Gas", description: "Complete project lifecycle for upstream, midstream, and downstream oil & gas facilities.", icon: FaOilCan },
    { title: "Steam Methane Reforming", description: "Hydrogen production, syngas generation, and associated reforming technologies.", icon: GiGasStove },
    { title: "Refineries & Petrochemical", description: "Refinery revamps, new units, and petrochemical complex development.", icon: GiChemicalTank },
    { title: "Renewable Hydrocarbons", description: "Green hydrogen, biofuels, e-methanol, and low‑carbon hydrocarbon solutions.", icon: FaLeaf },
  ];

  const phases = [
    { step: "01", title: "Initial Development", description: "Conceptual studies, screening of development options, process simulation, and leveraging our Knowledge Management System from 700+ global projects.", icon: FaChartLine },
    { step: "02", title: "Feasibility Studies", description: "Bankable techno‑commercial feasibility reports, risk assessment, and assistance with financial closure via equity participation or institutional lending.", icon: FaClipboardList },
    { step: "03", title: "Front End Engineering & Design", description: "Accurate project definition, FEED studies, discipline‑wise work scope, and reliable cost estimates for contracting strategy.", icon: FaPenFancy },
    { step: "04", title: "Project Management", description: "Owner's engineer, EPCM, or turnkey EPC delivery – tailored to client capabilities with sole focus on project success.", icon: FaTasks },
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* Hero – unchanged */}
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
            <span className="text-amber-400 font-medium">Project Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Project{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            From concept to commissioning – specialist project management teams with 25+ years of experience,
            delivering over 700 projects across four continents.
          </p>
        </div>
      </section>

      {/* Introduction – updated pill badge */}
      <section ref={introRef} className="py-16 bg-gray-50">
        <div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: introInView ? 1 : 0, transform: introInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Our Track Record
          </span>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Pyramid E&C has specialist project management teams who have delivered more than <span className="text-amber-600 font-semibold">700 projects</span> in the last <span className="text-amber-600 font-semibold">25 years</span> of operation. We conceptualize, engineer, and deliver projects from our regional headquarters in Houston, London, Dubai, and Mumbai.
          </p>
        </div>
      </section>

      {/* Image Section – UPDATED with pill badge + gradient heading + underline */}
      <section ref={imageSectionRef} className="py-16 px-6 bg-white">
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700"
          style={{ opacity: imageSectionInView ? 1 : 0, transform: imageSectionInView ? "translateY(0)" : "translateY(30px)" }}
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
                Project Delivery
              </span>
            </h3>
            {/* Underline */}
            <div className="w-24 h-1 bg-[var(--primery)] rounded-full mb-6" />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our teams across Houston, London, Dubai, and Mumbai work seamlessly to deliver projects on time and on budget.
              We combine local knowledge with global best practices to ensure success.
            </p>
            <ul className="space-y-3">
              {["700+ projects delivered worldwide", "25+ years of industry experience", "Multi‑office collaboration"].map((item, i) => (
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
                src="/project-development.jpg"
                alt="Project development and engineering"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                700+ Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve – updated header */}
      <section ref={sectorsRef} className="py-20 bg-white">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: sectorsInView ? 1 : 0, transform: sectorsInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Sectors{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Specialized project delivery across the hydrocarbon value chain – conventional and renewable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, idx) => (
              <div
                key={idx}
                className="group border-l-4 border-amber-200 pl-5 py-2 transition-all duration-300 hover:border-amber-500 hover:pl-6"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <sector.icon className="text-3xl text-amber-500 mb-3 group-hover:text-amber-600" />
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases – updated header */}
      <section ref={phasesRef} className="py-20 bg-gray-50">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: phasesInView ? 1 : 0, transform: phasesInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Project Development{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Phases
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A structured, proven methodology from initial concept to successful project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="group border-l-4 border-amber-300 pl-5 py-2 transition-all duration-300 hover:border-amber-600 hover:pl-6"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl font-black text-amber-200 mb-2 group-hover:text-amber-300 transition-colors">
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

      {/* CTA Section – updated header */}
      <section ref={ctaRef} className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div
          className="max-w-4xl mx-auto text-center transition-all duration-700"
          style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Let's Build Together
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Ready to Start{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Let Pyramid E&C bring your vision to life – from feasibility to full‑scale delivery.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discuss Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDevelopment;