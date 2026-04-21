// src/components/ScrollWebsite.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "sustainable",
    eyebrow: "Environmental Excellence",
    headline: "SUSTAINABLE",
    desc: "Our technologies monetize carbon emissions, eliminate liquid effluents and enable renewable energy integration for economically viable hydrocarbon processing.",
    bgFrom: "#0d1f2d",
    bgVia: "#1a3a4f",
    bgTo: "#0e2233",
    ctaPrimary: "Get Free Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "View Projects",
    ctaSecondaryLink: "/projects",
    SVGIllustration: () => (
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <circle cx="480" cy="120" r="220" fill="none" stroke="#4dd9ac" strokeWidth="0.5" />
        <circle cx="480" cy="120" r="160" fill="none" stroke="#4dd9ac" strokeWidth="0.5" />
        <circle cx="480" cy="120" r="100" fill="#1d9e75" opacity="0.15" />
        <line x1="260" y1="120" x2="700" y2="120" stroke="#4dd9ac" strokeWidth="0.5" opacity="0.4" />
        <line x1="480" y1="-100" x2="480" y2="340" stroke="#4dd9ac" strokeWidth="0.5" opacity="0.4" />
        <circle cx="480" cy="120" r="6" fill="#4dd9ac" />
        <circle cx="340" cy="120" r="4" fill="#4dd9ac" opacity="0.6" />
        <circle cx="480" cy="-20" r="4" fill="#4dd9ac" opacity="0.6" />
        <circle cx="580" cy="50" r="3" fill="#4dd9ac" opacity="0.5" />
        <path d="M420 200 Q440 160 480 120 Q520 80 560 80" fill="none" stroke="#4dd9ac" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "modular",
    eyebrow: "Global Mobility Design",
    headline: "MODULAR",
    desc: "Plants designed for global mobility, onshore and offshore. All process systems packaged in our fabrication yard and dispatched after successful integrity testing.",
    bgFrom: "#1a1228",
    bgVia: "#2d1f4a",
    bgTo: "#18102e",
    ctaPrimary: "Explore Modular Solutions",
    ctaPrimaryLink: "/products/midstream",
    ctaSecondary: "Learn More",
    ctaSecondaryLink: "/services/modular",
    SVGIllustration: () => (
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <rect x="320" y="60" width="180" height="120" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
        <rect x="360" y="200" width="100" height="80" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
        <rect x="470" y="200" width="80" height="80" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
        <rect x="300" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
        <rect x="400" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
        <rect x="500" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
        <line x1="410" y1="180" x2="410" y2="200" stroke="#9f8fe0" strokeWidth="0.5" opacity="0.5" />
        <line x1="510" y1="180" x2="510" y2="200" stroke="#9f8fe0" strokeWidth="0.5" opacity="0.5" />
        <circle cx="500" cy="120" r="5" fill="#9f8fe0" opacity="0.7" />
        <circle cx="540" cy="100" r="3" fill="#9f8fe0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "digital",
    eyebrow: "Industry 4.0 Ready",
    headline: "DIGITAL",
    desc: "Digital twin, real-time process optimization, and remote performance management capability provide total control to all stakeholders.",
    bgFrom: "#0d1a2d",
    bgVia: "#0f2545",
    bgTo: "#091520",
    ctaPrimary: "Discover Digitalization",
    ctaPrimaryLink: "/products/digitalization",
    ctaSecondary: "Read More",
    ctaSecondaryLink: "/services/research-and-development",
    SVGIllustration: () => (
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <path d="M460 80 L580 160 L580 320 L460 400 L340 320 L340 160 Z" fill="none" stroke="#6ab5f5" strokeWidth="0.5" />
        <path d="M460 140 L540 190 L540 290 L460 340 L380 290 L380 190 Z" fill="#378add" opacity="0.08" />
        <circle cx="460" cy="240" r="20" fill="#378add" opacity="0.3" />
        <circle cx="460" cy="240" r="40" fill="none" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <circle cx="460" cy="240" r="60" fill="none" stroke="#6ab5f5" strokeWidth="0.3" opacity="0.3" />
        <line x1="380" y1="190" x2="420" y2="220" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <line x1="540" y1="190" x2="500" y2="220" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <line x1="460" y1="140" x2="460" y2="200" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <circle cx="380" cy="190" r="4" fill="#6ab5f5" opacity="0.8" />
        <circle cx="540" cy="190" r="4" fill="#6ab5f5" opacity="0.8" />
        <circle cx="460" cy="140" r="4" fill="#6ab5f5" opacity="0.8" />
      </svg>
    ),
  },
];

const YELLOW = "#F5B400";

// Custom hook for fade-in on scroll
const useFadeInOnScroll = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// Individual section component (uses the hook at top level)
const Section = ({ section }) => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ minHeight: "100vh" }}
    >
      {/* Background gradient + SVG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${section.bgFrom} 0%, ${section.bgVia} 40%, ${section.bgTo} 100%)`,
        }}
      >
        <section.SVGIllustration />
      </div>

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(5,8,18,0.93) 0%, rgba(5,8,18,0.55) 52%, rgba(5,8,18,0.08) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-3"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <span className="w-8 h-px bg-current" />
            <span className="text-xs font-semibold tracking-[3px] uppercase">
              {section.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-1px] mb-4"
            style={{ color: YELLOW }}
          >
            {section.headline}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            {section.desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={section.ctaPrimaryLink}
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:translate-y-[-2px]"
              style={{ backgroundColor: YELLOW, color: "#0a0f1a" }}
            >
              {section.ctaPrimary}
            </Link>
            <Link
              to={section.ctaSecondaryLink}
              className="px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            >
              {section.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollWebsite = () => {
  return (
    <div className="scroll-website">
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
};

export default ScrollWebsite;