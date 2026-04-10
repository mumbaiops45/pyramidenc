import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const certifications = [
  { name: "ISO 9001:2015", image: "/iso-9001-2015.png", description: "Quality Management System" },
  { name: "ISO 14001", image: "/iso-14001.png", description: "Environmental Management" },
  { name: "ISO 45001", image: "/iso-45001.png", description: "Occupational Health & Safety" },
  { name: "ISO 27001", image: "/iso-27001.png", description: "Information Security Management" },
  { name: "Achilles", image: "/achilles-2.png", description: "Supplier Qualification" },
  { name: "ISNetworld", image: "/isnetworld.png", description: "Contractor Management" },
];

// Helper to generate random bubbles for hero
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

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };
  const totalItems = certifications.length;

  const nextSlide = useCallback(() => {
    if (currentIndex + itemsPerView.desktop < totalItems) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalItems, itemsPerView.desktop]); // ✅ added missing dependency

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalItems - itemsPerView.desktop);
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const slideWidth = 100 / itemsPerView.desktop;
  const transformValue = `translateX(-${currentIndex * slideWidth}%)`;

  const heroBubbles = generateBubbles(18, 15, 50);

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
  `;

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – same as PyramidGroup */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Floating bubbles */}
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
          {/* Breadcrumb */}
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span>
            <span className="text-amber-400 font-medium">Certifications</span>
          </div>

          {/* Title with shimmer */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Certifications
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Committed to global quality, safety, and sustainability standards.
          </p>
        </div>
      </section>

      {/* Certifications Carousel */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: transformValue }}
              >
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-amber-300 hover:-translate-y-1 h-full">
                      <div className="p-8 text-center">
                        <div className="w-28 h-28 mx-auto mb-5 flex items-center justify-center bg-gray-700 rounded-xl p-3">
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.textContent = cert.name.charAt(0);
                              fallback.className = 'text-4xl font-bold text-amber-500';
                              e.currentTarget.parentNode?.appendChild(fallback);
                            }}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                        <p className="text-sm text-gray-500">{cert.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors z-10"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-colors z-10"
              aria-label="Next"
            >
              <FaChevronRight className="text-gray-600" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: Math.ceil(totalItems / itemsPerView.desktop) }).map((_, idx) => {
                const dotIndex = idx * itemsPerView.desktop;
                const isActive = currentIndex >= dotIndex && currentIndex < dotIndex + itemsPerView.desktop;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(dotIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? "w-6 bg-amber-500" : "bg-amber-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;