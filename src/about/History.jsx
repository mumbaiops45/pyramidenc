import React, { useEffect, useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaBuilding,
  FaHandshake,
  FaMicrochip,
  FaGlobeAmericas,
  FaIndustry,
  FaFlask,
  FaArrowRight,
} from "react-icons/fa";

const HERO_BG_IMAGE = "/background.png";
const MILESTONE_IMAGES = {
  1995: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2000: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2005: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2010: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2015: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2020: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2025: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

const GOLD = "#F5B400";

// Fixed useInView hook with proper dependency array
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
  }, [options]); // ✅ Added options to dependency array
  return [ref, inView];
}

function AnimatedYear({ target, inView }) {
  const [displayYear, setDisplayYear] = useState(1990);
  useEffect(() => {
    if (!inView) return;
    let current = 1990;
    const step = Math.ceil((target - current) / 35);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setDisplayYear(target);
        clearInterval(interval);
      } else {
        setDisplayYear(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [inView, target]);
  return <span>{displayYear}</span>;
}

// function HeroStat({ value, label, delay }) {
//   const [ref, inView] = useInView();
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!inView) return;
//     let start = 0;
//     const increment = Math.ceil(value / 40);
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(interval);
//       } else {
//         setCount(start);
//       }
//     }, 30);
//     return () => clearInterval(interval);
//   }, [inView, value]);
//   return (
//     <div
//       ref={ref}
//       className="text-center transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(20px)",
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <div className="text-4xl md:text-5xl font-black text-[#F5B400] leading-tight">
//         {count}+
//       </div>
//       <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
//         {label}
//       </div>
//     </div>
//   );
// }

function MilestoneCard({ milestone, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-6 mb-20 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* spine dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div
          className="w-11 h-11 rounded-full bg-gray-900 border-2 flex items-center justify-center transition-shadow duration-500"
          style={{
            borderColor: GOLD,
            boxShadow: inView ? `0 0 20px 5px ${GOLD}50` : "none",
          }}
        >
          <milestone.icon style={{ color: GOLD, fontSize: 18 }} />
        </div>
        {inView && (
          <span
            className="absolute inset-[-6px] rounded-full pointer-events-none"
            style={{
              border: `1.5px solid ${GOLD}`,
              animation: `ping 2s ease-out ${index * 0.15}s infinite`,
            }}
          />
        )}
      </div>

      {/* card */}
      <div
        className={`w-full md:w-5/12 pl-14 md:pl-0 ${
          isLeft ? "md:pr-12" : "md:pl-12"
        }`}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateX(0) rotateY(0deg)"
            : `${
                isLeft ? "translateX(-48px)" : "translateX(48px)"
              } rotateY(${isLeft ? "6deg" : "-6deg"})`,
          transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${
            index * 0.08
          }s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
          perspective: "1000px",
        }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300"
          style={{
            background: "rgba(15,23,42,0.75)",
            border: `1px solid ${
              hovered ? `${GOLD}60` : "rgba(255,255,255,0.07)"
            }`,
            transform: hovered
              ? "translateY(-6px) scale(1.02)"
              : "translateY(0) scale(1)",
            boxShadow: hovered ? `0 25px 40px -12px ${GOLD}40` : "none",
          }}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={milestone.image}
              alt={milestone.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                transform: inView ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: `transform 0.7s ease ${index * 0.08 + 0.3}s`,
              }}
            />
            <div
              className="absolute bottom-3 left-4 text-3xl font-black"
              style={{
                background: `linear-gradient(90deg,${GOLD},#fff)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <AnimatedYear target={milestone.year} inView={inView} />
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <milestone.icon style={{ color: GOLD, fontSize: 14 }} />
              <h3 className="text-lg font-bold text-white">{milestone.title}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const milestones = [
  {
    year: 1995,
    title: "Foundation in Mumbai",
    description:
      "Founded by young IITians as a Process Plant Design firm in Mumbai, India, marking the beginning of Pyramid E&C's journey.",
    icon: FaBuilding,
    image: MILESTONE_IMAGES[1995],
    imageAlt: "Mumbai",
  },
  {
    year: 2000,
    title: "Turnkey EPC with L&T",
    description:
      "Partnered with Larsen & Toubro to deliver Turnkey EPC projects with process performance warranty, expanding capabilities across the hydrocarbon sector.",
    icon: FaHandshake,
    image: MILESTONE_IMAGES[2000],
    imageAlt: "Industrial plant",
  },
  {
    year: 2005,
    title: "Acquisition of TSI Inc.",
    description:
      "Acquired TSI Inc., Gas Processing specialists based in Houston, Texas, strengthening technical expertise in natural gas processing.",
    icon: FaMicrochip,
    image: MILESTONE_IMAGES[2005],
    imageAlt: "Houston office",
  },
  {
    year: 2010,
    title: "Sphinx Innovation Center",
    description:
      "Began development of the Sphinx Innovation Center at the Energy Corridor, Houston, driving R&D in advanced energy solutions.",
    icon: FaFlask,
    image: MILESTONE_IMAGES[2010],
    imageAlt: "Innovation center",
  },
  {
    year: 2015,
    title: "Global EPCm Footprint",
    description:
      "Executed EPCm projects across Asia, MENA, and Europe, establishing a strong international presence.",
    icon: FaGlobeAmericas,
    image: MILESTONE_IMAGES[2015],
    imageAlt: "Offshore platform",
  },
  {
    year: 2020,
    title: "Modular Fabrication Yard",
    description:
      "Commissioned a 1000 T capacity Modular Fabrication Yard at Mundra, Gujarat, India, enabling large-scale modular construction.",
    icon: FaIndustry,
    image: MILESTONE_IMAGES[2020],
    imageAlt: "Fabrication yard",
  },
  {
    year: 2025,
    title: "Renewable Hydrocarbons R&D",
    description:
      "Opened a dedicated research and product development facility for renewable hydrocarbons, advancing the energy transition.",
    icon: FaCalendarAlt,
    image: MILESTONE_IMAGES[2025],
    imageAlt: "Research lab",
  },
];

const History = () => {
  const animationStyles = `
    @keyframes fadeUp { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
    @keyframes fadeLeft { 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    @keyframes ping { 0%{transform:scale(1);opacity:0.7} 80%{transform:scale(2.4);opacity:0} 100%{transform:scale(2.4);opacity:0} }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s} .delay-300{animation-delay:0.3s}
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-x-hidden">
      <style>{animationStyles}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F5B400]/10 rounded-full blur-3xl animate-fadeLeft" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99A00]/10 rounded-full blur-3xl animate-fadeUp delay-200" />
      </div>

      {/* Hero */}
      <section className="relative pt-28 pb-20 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span>
            <span>›</span>
            <span>About</span>
            <span>›</span>
            <span className="text-[#F5B400] font-medium">History</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeLeft delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-[#F5B400] via-[#FFC107] to-[#F5B400] bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed animate-fadeUp delay-200">
            From a bold vision in Mumbai to a global engineering powerhouse —
            innovation, integrity, and impact across five continents.
          </p>
        </div>
      </section>

      {/* Legacy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fadeUp delay-100">
            <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-4">
              Our Legacy
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 1995,{" "}
              <span className="text-[#F5B400] font-semibold">
                Pyramid E&C Group
              </span>{" "}
              has grown into a global hydrocarbon engineering and solutions
              provider, delivering integrated research, engineering,
              digitalization, and modular fabrication services to clients
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto relative">
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg,rgba(245,180,0,0.6) 0%,rgba(245,180,0,0.05) 100%)",
              }}
            />
            {milestones.map((milestone, idx) => (
              <MilestoneCard key={idx} milestone={milestone} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/10">
        <div className="container-custom">
          <div
            className="max-w-3xl mx-auto text-center rounded-2xl p-10 backdrop-blur-sm animate-fadeUp delay-200"
            style={{
              background:
                "linear-gradient(135deg,rgba(245,180,0,0.08),rgba(255,193,7,0.02))",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Shaping the Future of Hydrocarbons
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              From past milestones to future innovations — we continue to
              engineer excellence.
            </p>
            <button className="group inline-flex items-center gap-2 bg-[#F5B400] hover:bg-[#D99A00] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
              Explore Our Capabilities{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
