import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
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
} from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { Link } from "react-router-dom";

// ============================================================================
// Custom hook with proper dependency handling
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
// Service Card Component – light version (white background, amber accent)
// ============================================================================
function ServiceCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const delay = index * 0.1;

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}s`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
        style={{
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
        <div className="p-6">
          <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
            <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Animation styles (enhanced)
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
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
`;

// ============================================================================
// Main EPC Services Component (Light Theme)
// ============================================================================
const Epc = () => {
  const [featuresRef, featuresInView] = useInView();
  const [phasesRef, phasesInView] = useInView();
  const [benefitsRef, benefitsInView] = useInView();

  // Key features of Turnkey EPC
  const features = [
    {
      title: "Single Point Responsibility",
      description: "One contract, one accountable partner – from design to commissioning and handover.",
      icon: FaHandshake,
    },
    {
      title: "Integrated Engineering",
      description: "Seamless coordination across process, mechanical, civil, electrical, and automation disciplines.",
      icon: FaCogs,
    },
    {
      title: "Procurement Excellence",
      description: "Global sourcing, quality assurance, and timely delivery of equipment and materials.",
      icon: FaClipboardList,
    },
    {
      title: "Construction Management",
      description: "Safe, efficient, and on‑schedule field execution with rigorous quality control.",
      icon: FaHardHat,
    },
    {
      title: "Modular Fabrication",
      description: "Skid‑mounted and modular solutions to reduce site work and accelerate project timelines.",
      icon: GiFactory,
    },
    {
      title: "Commissioning & Start‑up",
      description: "Full support from pre‑commissioning to performance testing and operator training.",
      icon: FaTools,
    },
  ];

  // Project delivery phases
  const phases = [
    {
      title: "Concept & Feasibility",
      description: "Define project scope, conduct feasibility studies, and establish budget and schedule.",
      icon: FaChartLine,
    },
    {
      title: "Front End Engineering (FEED)",
      description: "Detailed engineering, procurement planning, and construction methodology.",
      icon: FaPenFancy,
    },
    {
      title: "Detailed Engineering",
      description: "Complete design packages, 3D models, and specifications for procurement and construction.",
      icon: FaBuilding,
    },
    {
      title: "Procurement & Logistics",
      description: "Global sourcing, expediting, inspection, and just‑in‑time delivery to site.",
      icon: FaClipboardList,
    },
    {
      title: "Construction & Installation",
      description: "On‑site construction, modular assembly, and equipment installation with safety-first approach.",
      icon: FaHardHat,
    },
    {
      title: "Commissioning & Handover",
      description: "System testing, performance validation, operator training, and final project turnover.",
      icon: FaTools,
    },
  ];

  // Key benefits
  const benefits = [
    {
      title: "Reduced Risk",
      description: "Single point of accountability minimizes interface risks and delays.",
      icon: FaShieldAlt,
    },
    {
      title: "Faster Delivery",
      description: "Integrated scheduling and modular approaches accelerate project timelines.",
      icon: FaClock,
    },
    {
      title: "Cost Certainty",
      description: "Lump‑sum turnkey contracts provide predictable budgeting and financial control.",
      icon: FaDollarSign,
    },
    {
      title: "Quality Assurance",
      description: "Consistent quality across engineering, procurement, and construction.",
      icon: FaHandshake,
    },
  ];

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – with animated background pattern */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-sm text-gray-200 mb-4 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full w-fit animate-fadeLeft">
                <span>Home</span><span>›</span><span>Services</span><span>›</span>
                <span className="text-amber-400 font-medium">Turnkey EPC Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
                Turnkey{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  EPC Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
                Single‑point responsibility for your project – from concept to commissioning. We deliver integrated
                engineering, procurement, and construction solutions for the hydrocarbon and energy industries.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
                <img
                  src="/EPC.png"
                  alt="Turnkey EPC project execution"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                  Single Point Responsibility
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
            End‑to‑End Delivery
          </div>
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
            Pyramid E&C provides complete turnkey EPC solutions for oil & gas, refining, petrochemical,
            and renewable energy projects. Our integrated approach ensures seamless coordination,
            reduced risks, and predictable outcomes – from initial concept to final handover.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section
        ref={featuresRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: featuresInView ? 1 : 0,
              transform: featuresInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Turnkey EPC Capabilities
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              We manage every aspect of your project, delivering a fully operational facility on time and on budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <ServiceCard key={idx} {...feature} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Delivery Phases */}
      <section
        ref={phasesRef}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: phasesInView ? 1 : 0,
              transform: phasesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Project Delivery Phases
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A structured, proven methodology from concept to commissioning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, idx) => (
              <ServiceCard key={idx} {...phase} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section
        ref={benefitsRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: benefitsInView ? 1 : 0,
              transform: benefitsInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Turnkey EPC?
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Partner with Pyramid E&C for a seamless, risk‑mitigated project experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <ServiceCard key={idx} {...benefit} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
            Ready for a Single‑Point Solution?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Deliver Your Project Together</h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact our EPC experts to discuss how we can execute your project with certainty.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Our EPC Team
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Epc;