import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaFlask,
  FaCogs,
  FaMicrochip,
  FaTools,
  FaBuilding,
  FaPenFancy,
  FaFileAlt,
  FaDollarSign,
  FaRulerCombined,
  FaShip,
  FaPlug,
} from "react-icons/fa";
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
// Service Card Component – enhanced with better hover effects
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
          <div
            className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg"
          >
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
// Main Research & Development Component (Enhanced Design)
// ============================================================================
const Research = () => {
  const [rdRef, rdInView] = useInView();
  const [commercialRef, commercialInView] = useInView();

  // R&D Services list
  const rdServices = [
    {
      title: "Process Validation & Steady State Simulation",
      description: "Validate and simulate processes to ensure efficiency and reliability before physical implementation.",
      icon: FaFlask,
    },
    {
      title: "Multi‑Disciplinary Pilot Plant Design",
      description: "Integrated design across chemical, mechanical, electrical, and control disciplines for pilot plants.",
      icon: FaCogs,
    },
    {
      title: "Custom Skid‑Mounted Pilot Plant Manufacturing",
      description: "Fabricate compact, transportable pilot plants tailored to your process requirements.",
      icon: FaMicrochip,
    },
    {
      title: "Pilot Plant Installation",
      description: "Complete on‑site installation, commissioning, and start‑up support for pilot facilities.",
      icon: FaTools,
    },
  ];

  // Commercialization Services list
  const commercializationServices = [
    {
      title: "Commercial Scale Plant Conceptual Design",
      description: "High‑level design and feasibility studies for full‑scale commercial plants.",
      icon: FaBuilding,
    },
    {
      title: "Facility Front End Engineering & Design (FEED)",
      description: "Detailed FEED to define scope, cost, and schedule before final investment decision.",
      icon: FaPenFancy,
    },
    {
      title: "Emissions & Building Permitting Support",
      description: "Assistance with environmental and construction permits to ensure regulatory compliance.",
      icon: FaFileAlt,
    },
    {
      title: "Project Investment Support at FID",
      description: "Financial modeling, risk analysis, and investor presentations to secure funding.",
      icon: FaDollarSign,
    },
    {
      title: "Detailed Engineering & Design",
      description: "Complete engineering packages including P&IDs, 3D models, and construction drawings.",
      icon: FaRulerCombined,
    },
    {
      title: "Modular Plant Design & Manufacturing",
      description: "Skid‑mounted modular solutions for faster deployment and reduced site work.",
      icon: FaShip,
    },
    {
      title: "Commercial Scale Plant Installation & Tie‑ins",
      description: "Full installation, integration with existing facilities, and commissioning services.",
      icon: FaPlug,
    },
  ];



  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – with animated background pattern */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Animated background pattern */}
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
                <span className="text-amber-400 font-medium">Research & Development</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
                Research &{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Engineering
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
                Pyramid E&C owns and operates Technology Centers in Mumbai, India and Houston, Texas.
                These centers are used for R&D, prototyping, and helping clients commercialize novel technologies.
              </p>
            </div>

            {/* Right side - Image with enhanced styling */}
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105 w-full max-w-[600px] h-[300px] md:h-[300px]">

                <img
                  src="/research-lab.png"
                  alt="Research and development laboratory"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-2 left-2 bg-amber-500/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-semibold text-gray-900">
                  State-of-the-Art Facilities
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>
      {/* Introduction / Technology Centers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
            Our Technology Centers
          </div>
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
            Our experienced engineers use our technology centers for R&D and prototyping products developed and commercialized by the Pyramid Group of Companies.
            Furthermore, we provide critical services to clients with novel technologies who want to commercialize their products.
          </p>
        </div>
      </section>

      {/* R&D Services Section */}
      <section ref={rdRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: rdInView ? 1 : 0,
              transform: rdInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Research & Development Services
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              From process validation to pilot plant manufacturing – we bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rdServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercialization Services Section */}
      <section ref={commercialRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: commercialInView ? 1 : 0,
              transform: commercialInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              After Pilot Success
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technology Commercialization
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Full‑scale commercial plant design, engineering, and installation – from concept to operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercializationServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – enhanced with icon */}
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
      Let's Innovate Together
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Commercialize Your Technology?</h2>
    <p className="text-gray-300 text-lg mb-8">
      Partner with Pyramid E&C to take your innovation from pilot plant to full‑scale production.
    </p>
    <Link
      to="/contact"
      className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
    >
      Contact Our R&D Team
      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
</section>
    </div>
  );
};

export default Research;