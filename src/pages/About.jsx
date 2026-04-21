import { useEffect, useRef, useState } from "react";
import { GiGears, GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLeaf, FaLaptopCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

// ===============================
// Hook: detect scroll in-view
// ===============================
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
        } else {
          setInView(false); // 👈 allows repeat animation
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

// ===============================
// Card Component (LEFT-RIGHT animation)
// ===============================
function CapabilityItem({ icon, title, desc, index }) {
  const [ref, inView] = useInView();
  const delay = index * 0.15;

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0) scale(1)"
          : isLeft
          ? "translateX(-80px) scale(0.95)"
          : "translateX(80px) scale(0.95)",
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="flex items-start gap-5">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-md transition-transform duration-300 group-hover:scale-105"
          style={{
            background:
              "linear-gradient(to bottom right, var(--primery), var(--primery-dark))",
          }}
        >
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[var(--primery)] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ===============================
// Data
// ===============================
const capabilities = [
  {
    icon: <GiGears />,
    title: "Technologies",
    desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs.",
  },
  {
    icon: <MdEngineering />,
    title: "Engineering",
    desc: "Over a million manhours of multidisciplinary engineering expertise.",
  },
  {
    icon: <GiFactory />,
    title: "Modular Fabrication",
    desc: "Advanced process modules with port-side heavy cargo handling.",
  },
  {
    icon: <IoSettingsSharp />,
    title: "TEPC Services",
    desc: "End-to-end delivery with guaranteed process performance.",
  },
  {
    icon: <FaLeaf />,
    title: "Decarbonization",
    desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Digitalization",
    desc: "OPTIMAX® enables remote monitoring & control systems.",
  },
];

// ===============================
// Main Component
// ===============================
const About = () => {
  const [headerRef, headerInView] = useInView();
  const [bottomRef, bottomInView] = useInView();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Who We Are
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Pioneering{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Energy Transition
            </span>
          </h2>

          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider delivering sustainable and low carbon processing solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
            <CapabilityItem
              key={i}
              icon={cap.icon}
              title={cap.title}
              desc={cap.desc}
              index={i}
            />
          ))}
        </div>

        {/* Bottom */}
        <div
          ref={bottomRef}
          className="mt-20 text-center border-t border-gray-200 pt-10 transition-all duration-700"
          style={{
            opacity: bottomInView ? 1 : 0,
            transform: bottomInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-gray-700 text-lg font-medium">
            From concept to commissioning — we deliver complete engineering solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;