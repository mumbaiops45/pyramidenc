import React, { useEffect, useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaBuilding,
  FaHandshake,
  FaMicrochip,
  FaGlobeAmericas,
  FaIndustry,
  FaFlask,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MILESTONE_IMAGES = {
  1995: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2000: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2005: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2010: "https://images.unsplash.com/photo-1562516155-e0c1ee44059b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2015: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2020: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  2025: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

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

const MilestoneBlock = ({ milestone, idx }) => {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 transition-all duration-700 ${
        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-8 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: `${idx * 0.1}s` }}
        >
          {/* Image side - FIXED ASPECT RATIO for uniform size */}
          <div className="md:w-1/2 group transition-all duration-500 delay-100">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/9]">
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-all duration-500 z-10"></div>
              <img
                src={milestone.image}
                alt={milestone.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text side (unchanged) */}
          <div className="md:w-1/2 transition-all duration-500 delay-200">
            <div className="relative">
              <div className="text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 absolute -top-6 -left-4 z-0">
                {milestone.year}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <milestone.icon className="text-xl text-amber-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    {milestone.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {milestone.description}
                </p>
                <div className="flex items-center gap-2 text-amber-600">
                  <span className="text-sm font-semibold">Milestone</span>
                  <span className="text-2xl font-black">{milestone.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  const animationStyles = `
    :root {
      --primery: #f59e0b;
      --primery-dark: #d97706;
    }
    @keyframes fadeUp { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
    @keyframes fadeLeft { 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
    @keyframes fadeRight { 0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
    @keyframes bubbleFloat {
      0% { transform: translateY(0) scale(0.2); opacity: 0; }
      20% { opacity: 0.6; }
      80% { opacity: 0.4; }
      100% { transform: translateY(-100vh) scale(1); opacity: 0; }
    }
    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s} .delay-300{animation-delay:0.3s}
  `;

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
  const [legacyRef, legacyInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* Hero Section */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">History</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeLeft delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            From a bold vision in Mumbai to a global engineering powerhouse —
            innovation, integrity, and impact across five continents.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div
          ref={legacyRef}
          className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            legacyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Our Legacy
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            A{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Legacy of Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-6">
            Founded in 1995,{" "}
            <span className="text-amber-600 font-semibold">Pyramid E&C Group</span>{" "}
            has grown into a global hydrocarbon engineering and solutions provider,
            delivering integrated research, engineering, digitalization, and modular
            fabrication services to clients worldwide.
          </p>
        </div>
      </section>

      {/* Milestones */}
      {milestones.map((milestone, idx) => (
        <MilestoneBlock key={idx} milestone={milestone} idx={idx} />
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Shaping the Future of Hydrocarbons
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            From past milestones to{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              future innovations
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            We continue to engineer excellence – partner with us for your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Capabilities →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default History;