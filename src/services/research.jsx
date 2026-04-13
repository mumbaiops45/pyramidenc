import React, { useEffect, useRef, useState } from "react";
import {
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
  FaCheckCircle,
} from "react-icons/fa";
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
// Animation styles
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

const Research = () => {
  const [introRef, introInView] = useInView();
  const [imageSectionRef, imageSectionInView] = useInView();
  const [rdRef, rdInView] = useInView();
  const [commercialRef, commercialInView] = useInView();
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

  const rdServices = [
    { title: "Process Validation & Steady State Simulation", description: "Validate and simulate processes to ensure efficiency and reliability before physical implementation.", icon: FaFlask },
    { title: "Multi‑Disciplinary Pilot Plant Design", description: "Integrated design across chemical, mechanical, electrical, and control disciplines for pilot plants.", icon: FaCogs },
    { title: "Custom Skid‑Mounted Pilot Plant Manufacturing", description: "Fabricate compact, transportable pilot plants tailored to your process requirements.", icon: FaMicrochip },
    { title: "Pilot Plant Installation", description: "Complete on‑site installation, commissioning, and start‑up support for pilot facilities.", icon: FaTools },
  ];

  const commercializationServices = [
    { title: "Commercial Scale Plant Conceptual Design", description: "High‑level design and feasibility studies for full‑scale commercial plants.", icon: FaBuilding },
    { title: "Facility Front End Engineering & Design (FEED)", description: "Detailed FEED to define scope, cost, and schedule before final investment decision.", icon: FaPenFancy },
    { title: "Emissions & Building Permitting Support", description: "Assistance with environmental and construction permits to ensure regulatory compliance.", icon: FaFileAlt },
    { title: "Project Investment Support at FID", description: "Financial modeling, risk analysis, and investor presentations to secure funding.", icon: FaDollarSign },
    { title: "Detailed Engineering & Design", description: "Complete engineering packages including P&IDs, 3D models, and construction drawings.", icon: FaRulerCombined },
    { title: "Modular Plant Design & Manufacturing", description: "Skid‑mounted modular solutions for faster deployment and reduced site work.", icon: FaShip },
    { title: "Commercial Scale Plant Installation & Tie‑ins", description: "Full installation, integration with existing facilities, and commissioning services.", icon: FaPlug },
  ];

  return (
    <div className="bg-white">
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
            <span className="text-amber-400 font-medium">Research & Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Research &{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Pyramid E&C owns and operates Technology Centers in Mumbai, India and Houston, Texas.
            These centers are used for R&D, prototyping, and helping clients commercialize novel technologies.
          </p>
        </div>
      </section>

      {/* Introduction / Technology Centers */}
      <section ref={introRef} className="py-16 bg-gray-50">
        <div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: introInView ? 1 : 0, transform: introInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Our Technology Centers
          </span>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Our experienced engineers use our technology centers for R&D and prototyping products developed and commercialized by the Pyramid Group of Companies.
            Furthermore, we provide critical services to clients with novel technologies who want to commercialize their products.
          </p>
        </div>
      </section>

      {/* Image Section – with gradient heading */}
      <section ref={imageSectionRef} className="py-16 px-6 bg-white">
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700"
          style={{ opacity: imageSectionInView ? 1 : 0, transform: imageSectionInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="order-2 md:order-1">
            {/* Gradient heading for State-of-the-Art Facilities */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                State‑of‑the‑Art Facilities
              </span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our technology centers in Mumbai and Houston are equipped with advanced pilot plant facilities,
              simulation software, and multidisciplinary engineering teams to accelerate your R&D and commercialization journey.
            </p>
            <ul className="space-y-3">
              {["Process simulation & validation", "Pilot plant design & fabrication", "Scale‑up & commercialization support"].map((item, i) => (
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
                src="/research-lab.png"
                alt="Research and development laboratory"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                State‑of‑the‑Art Facilities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development Services */}
      <section ref={rdRef} className="py-20 bg-white">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: rdInView ? 1 : 0, transform: rdInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Research &{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Development Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              From process validation to pilot plant manufacturing – we bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rdServices.map((service, idx) => (
              <div
                key={idx}
                className="group pb-4 border-b border-gray-100 hover:border-amber-400 transition-all duration-300"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <service.icon className="text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Commercialization */}
      <section ref={commercialRef} className="py-20 bg-gray-50">
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: commercialInView ? 1 : 0, transform: commercialInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              After Pilot Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Technology{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Commercialization
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Full‑scale commercial plant design, engineering, and installation – from concept to operation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block"></div>
            <div className="space-y-10">
              {commercializationServices.map((service, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row gap-6 group"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-200 last:border-0 group-hover:border-amber-300 transition-colors">
                    <div className="flex items-start gap-3">
                      <service.icon className="text-2xl text-amber-500 mt-1 group-hover:text-amber-600 transition-colors" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section – only "Your Technology?" in gradient */}
      <section ref={ctaRef} className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div
          className="max-w-4xl mx-auto text-center transition-all duration-700"
          style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? "translateY(0)" : "translateY(30px)" }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Let's Innovate Together
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Ready to Commercialize{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Your Technology?
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Partner with Pyramid E&C to take your innovation from pilot plant to full‑scale production.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Our R&D Team →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Research;