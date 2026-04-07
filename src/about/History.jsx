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
import { Link } from "react-router-dom";


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
  }, [options]);
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

// Light‑theme milestone card
function MilestoneCard({ milestone, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-6 mb-20 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        }`}
    >
      {/* Center spine dot – gold */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div
          className="w-11 h-11 rounded-full bg-white border-2 flex items-center justify-center transition-shadow duration-500 shadow-md"
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

      {/* Card – light background */}
      <div
        className={`w-full md:w-5/12 pl-14 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"
          }`}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateX(0) rotateY(0deg)"
            : `${isLeft ? "translateX(-48px)" : "translateX(48px)"
            } rotateY(${isLeft ? "6deg" : "-6deg"})`,
          transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.08
            }s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
          perspective: "1000px",
        }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300"
          style={{
            border: `1px solid ${hovered ? `${GOLD}60` : "#e5e7eb"}`,
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
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-gray-100/40 to-transparent" />
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
                background: `linear-gradient(90deg,${GOLD},#d97706)`,
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
              <h3 className="text-lg font-bold text-gray-900">
                {milestone.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
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
    @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-20px) rotate(5deg)} }
    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    @keyframes ping { 0%{transform:scale(1);opacity:0.7} 80%{transform:scale(2.4);opacity:0} 100%{transform:scale(2.4);opacity:0} }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s} .delay-300{animation-delay:0.3s}
  `;

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – with background image, overlay, and floating circles */}
      <section className="relative overflow-hidden text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Animated floating amber circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">History</span>
          </div>

          {/* Title with shimmer */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeLeft delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            From a bold vision in Mumbai to a global engineering powerhouse —
            innovation, integrity, and impact across five continents.
          </p>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeUp delay-100">
            Our Legacy
          </div>
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-200">
            Founded in 1995,{" "}
            <span className="text-amber-600 font-semibold">Pyramid E&C Group</span>{" "}
            has grown into a global hydrocarbon engineering and solutions provider,
            delivering integrated research, engineering, digitalization, and modular
            fabrication services to clients worldwide.
          </p>
        </div>
      </section>

      {/* Timeline Section – light cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative">
            {/* Center line – gold gradient */}
            <div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(180deg, #F5B400 0%, rgba(245,180,0,0.1) 100%)",
              }}
            />
            {milestones.map((milestone, idx) => (
              <MilestoneCard key={idx} milestone={milestone} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – matches other pages (dark gradient with amber button) */}


      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
            Shaping the Future of Hydrocarbons
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From past milestones to future innovations</h2>
          <p className="text-gray-300 text-lg mb-8">
            We continue to engineer excellence – partner with us for your next project.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Our Capabilities
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default History;