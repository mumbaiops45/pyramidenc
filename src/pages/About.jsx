import React, { useEffect, useRef, useState } from "react";
import { GiGears, GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLeaf, FaLaptopCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

// ============================================================
// Custom hook for scroll-triggered animations
// ============================================================
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

// ============================================================
// Animated Card Component (scroll-triggered)
// ============================================================
function AnimatedCard({ icon, title, description, index }) {
  const [ref, inView] = useInView();
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
      <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
        {/* Icon with animated background circle */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100" style={{ width: "56px", height: "56px" }}></div>
          <div className="relative text-amber-500 text-3xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const About = () => {
  const animationStyles = `
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeLeft {
      0% { opacity: 0; transform: translateX(-30px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(3deg); }
    }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
  `;

  const cardsData = [
    {
      icon: <GiGears className="text-3xl" />,
      title: "Technologies",
      description: "27+ technologies across conventional & renewable sectors with in-house R&D labs.",
    },
    {
      icon: <MdEngineering className="text-3xl" />,
      title: "Engineering",
      description: "Over a million manhours of multidisciplinary engineering expertise.",
    },
    {
      icon: <GiFactory className="text-3xl" />,
      title: "Modular Fabrication",
      description: "Advanced process modules with port-side heavy cargo handling.",
    },
    {
      icon: <IoSettingsSharp className="text-3xl" />,
      title: "TEPC Services",
      description: "End-to-end delivery with guaranteed process performance.",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Decarbonization",
      description: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Digitalization",
      description: "OPTIMAX® enables remote monitoring & control systems.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100/30 to-white">
      <style>{animationStyles}</style>

      {/* Floating background decorations (golden tones) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-40 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Main content section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-10 h-0.5 rounded bg-amber-500"></span>
              <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-600 animate-fadeLeft">
                Who We Are
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 animate-fadeUp delay-100">
              Pioneering Energy Transition
            </h2>
          </div>

          {/* Description card */}
          <div
            className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-6 lg:p-10 mb-14 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
          >
            <p className="text-gray-700 leading-relaxed text-sm lg:text-base max-w-4xl mx-auto text-center">
              Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
              comprising research, engineering, automation, digitalization, manufacturing and construction firms.
              We specialize in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals,
              delivering sustainable and low carbon processing solutions.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, idx) => (
              <AnimatedCard
                key={idx}
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={idx}
              />
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white/70 backdrop-blur-sm border border-amber-200 rounded-full px-6 py-3 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1">
              <p className="text-gray-700 text-sm">
                From concept to commissioning — we deliver complete engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;