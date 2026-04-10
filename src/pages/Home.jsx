import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "sustainable",
    eyebrow: "Environmental Excellence",
    headline: "SUSTAINABLE",
    desc: "Our technologies monetize carbon emissions, eliminate liquid effluents and enable renewable energy integration for economically viable hydrocarbon processing.",
    image: "/renewable-energy-solutions.jpg",
  },
  {
    id: "modular",
    eyebrow: "Global Mobility Design",
    headline: "MODULAR",
    desc: "Plants designed for global mobility, onshore and offshore. All process systems packaged in our fabrication yard and dispatched after successful integrity testing.",
    image: "/modular-Process.jpg",
  },
  {
    id: "digital",
    eyebrow: "Industry 4.0 Ready",
    headline: "DIGITAL",
    desc: "Digital twin, real-time process optimization, and remote performance management capability provide total control to all stakeholders.",
    image: "/images1.jpg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "100vh",
        marginTop: "-86px",
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.headline}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />

          {/* Overlay – removed backdrop-blur for sharper image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

          {/* Content */}
          <div className="relative z-20 flex items-center h-full px-6 lg:px-16 pt-24 pb-16">
            <div className="max-w-xl rounded-2xl p-7 lg:p-10 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              <span className="inline-block text-[11px] font-semibold tracking-[3px] uppercase mb-4 text-primery">
                {slide.eyebrow}
              </span>
              <h1 className="font-black leading-none mb-5 text-gradient text-[clamp(36px,6vw,64px)]">
                {slide.headline}
              </h1>
              <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed mb-8 max-w-md">
                {slide.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full font-semibold bg-primery text-black hover:bg-primery-light hover:text-black transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-full text-white border border-white/30 hover:border-white transition"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-6 lg:left-16 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-12 h-[3px] bg-primery"
                : "w-7 h-[3px] bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 text-white/60 text-xs animate-bounce z-30">
        Scroll ↓
      </div>
    </section>
  );
};

export default Hero;