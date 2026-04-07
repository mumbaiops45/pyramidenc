import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaCogs,
  FaCheckCircle,
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
// Facility Card Component – light version (white background, amber accent)
// ============================================================================
function FacilityCard({ facility, index }) {
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
          {/* Location icon and name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
              {facility.location}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{facility.description}</p>

          {/* Capabilities title */}
          <div className="flex items-center gap-2 mb-3">
            <FaCogs className="text-amber-500 text-sm" />
            <h4 className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Capabilities</h4>
          </div>

          {/* Capabilities list */}
          <ul className="space-y-2">
            {facility.capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                <FaCheckCircle className="text-amber-500 text-xs mt-0.5 flex-shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>

          {/* Area badge if present */}
          {facility.area && (
            <div className="mt-4 inline-block bg-amber-50 rounded-full px-3 py-1 text-xs text-amber-700 border border-amber-200">
              📐 Area: {facility.area}
            </div>
          )}
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
// Main Modular Fabrication Component (Light Theme)
// ============================================================================
const Modular = () => {
  const [facilitiesRef, facilitiesInView] = useInView();

  // Facilities data based on old content
  const facilities = [
    {
      location: "Houston, Texas",
      description: "Located in Houston Energy Corridor, this facility acts as the point of sales, delivery and lifecycle support for Sphinx® range of process and automation systems.",
      area: "25,000 ft²",
      capabilities: [
        "Electrical and Instrumentation Integration",
        "Functional Demonstration",
        "Factory Acceptance Tests",
        "After Sale Support",
        "Spares and consumables warehousing",
      ],
    },
    {
      location: "Port Harcourt, Nigeria",
      description: "Jointly developed with our partners Weltek Limited, this facility serves as the training and aftersales support for Oil & Gas production facilities and modular refineries in sub-Saharan Africa.",
      area: "300,000 ft²",
      capabilities: [
        "Functional Demonstration",
        "Factory Acceptance Tests",
        "Operator Training",
        "After Sale Support",
        "Spares and Consumables Warehousing",
      ],
    },
    {
      location: "Mundra, Gujarat, India",
      description: "Registered as Avesta Engineering, this modular fabrication yard is located inside the Mundra Port area, offering direct port access and duty‑free warehousing.",
      area: "200,000 ft²",
      capabilities: [
        "Pipe Spool Fabrication",
        "Structural Fabrication",
        "Factory Acceptance Test",
        "LOLO loadout capacity of 1000 MT",
        "RORO facility also available",
        "Access to all weather Mundra port of 18 m draft",
      ],
    },
    {
      location: "Nizwa, Oman",
      description: "This facility is the training and aftersales support for Oil & Gas production facilities and modular refineries in the MENA region.",
      area: "300,000 ft²",
      capabilities: [
        "Functional Demonstration",
        "Factory Acceptance Tests",
        "Operator Training",
        "After Sale Support",
        "Spares and Consumables Warehousing",
      ],
    },
    {
      location: "Mumbai, India",
      description: "Manufacturing facility located in the largest industrial hub of India, specializing in prototype development, pilot plants, skidded packages and automation systems.",
      capabilities: [
        "U‑Stamp and CE Certified Pressure Vessel Shop",
        "Pipe Spool Fabrication Shop",
        "Structural Fabrication Shop",
        "Electrical and Instrumentation Integration",
        "Functional Demonstration",
        "Factory Acceptance tests certificate",
      ],
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
                <span className="text-amber-400 font-medium">Modular Fabrication</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
                Modular{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Fabrication
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fadeUp delay-200">
                Pyramid E&C manufactures and delivers modular plants and Sphinx® process systems from our facilities in India,
                with assembly, automation, FAT, and technical support operations in the US, Middle East, and Africa.
              </p>
            </div>

            {/* Right side - Image with enhanced styling */}
            <div className="lg:w-1/2 flex justify-center animate-fadeRight delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-500 hover:scale-105">
                <img
                  src="/modular-fabrication.jpg"
                  alt=" "
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-amber-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                  Global Manufacturing Network
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>
      {/* Global Footprint Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp">
            Global Manufacturing Network
          </div>
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
            We have assembly, automation, FAT and technical support operations in the <strong className="text-amber-600">US, Middle East and Africa</strong> to support our customers throughout the lifecycle.
            Our manufacturing facilities in Mumbai and Mundra, India, produce modular plants and the Sphinx® range of process systems.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section
        ref={facilitiesRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: facilitiesInView ? 1 : 0,
              transform: facilitiesInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Our Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Global Fabrication & Support Centers
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Strategically located to serve our customers across five continents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <FacilityCard key={idx} facility={facility} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – enhanced */}


      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
            Built for the World
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Modular Solutions?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Leverage our global fabrication network for faster, cost‑effective modular plant delivery.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Our Modular Experts
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Modular;