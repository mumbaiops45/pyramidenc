import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaArrowUp, FaYoutube } from "react-icons/fa";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about/pyramid-e-c-group" },
      { label: "Guiding Principles", path: "/about/guiding-principles" },
      { label: "History", path: "/about/history" },
      { label: "Leadership", path: "/about/leadership" },
      { label: "News", path: "/news" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Oil & Gas", path: "/products/oilgas" },
      { label: "Midstream", path: "/products/midstream" },
      { label: "Bio Chemicals", path: "/products/biochemicals" },
      { label: "Decarbonization", path: "/products/decarbonization" },
      { label: "Digitalization", path: "/products/digitalization" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "R&D", path: "/services/research-and-development" },
      { label: "Project Development", path: "/services/project-development" },
      { label: "EPCM Services", path: "/services/epcm-services" },
      { label: "Turnkey EPC", path: "/services/epc" },
      { label: "Modular Fabrication", path: "/services/modular" },
    ],
  },
];

// All offices now have flag images stored in the public folder
const offices = [
  { emoji: "🇮🇳", label: "India", image: "/Flag-India.jpg" },
  { emoji: "🇦🇪", label: "UAE", image: "/Flag-Dubai.jpg" },
  { emoji: "🇳🇬", label: "Nigeria", image: "/Flag-Nigeria.jpg" },
  { emoji: "🇬🇧", label: "UK", image: "/Flag-London.jpg" },
  { emoji: "🇺🇸", label: "USA", image: "/Flag-Houston.jpg" },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white border-t border-amber-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div>
              <div className="mb-4">
                <img
                  src="/PYRAMID-EC-Logo.png"
                  alt="Pyramid E&C"
                  className="h-8 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = document.createElement("div");
                    fallback.textContent = "PYRAMID E&C";
                    fallback.className = "text-xl font-bold tracking-tight text-amber-400";
                    e.currentTarget.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
              <p className="text-sm font-light leading-relaxed max-w-[220px] text-gray-300">
                Engineering and construction group delivering sustainable, modular, and digital energy solutions globally.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.linkedin.com/company/pyramid-engineering-&-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVNAY9Hef63qlqvhikThPkQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            {/* Link sections */}
            {footerSections.map((section, i) => (
              <div key={i}>
                <p className="text-xs font-bold tracking-[2px] uppercase mb-5 text-amber-400">
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        to={link.path}
                        className="text-sm font-normal transition-colors duration-150 text-gray-300 hover:text-amber-400 hover:pl-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar with flag images and credit line */}
          <div className="flex flex-col gap-4 pt-8 mt-4 border-t border-gray-800">
            {/* First row: copyright + policies/offices */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Pyramid E&amp;C Group. All rights reserved.
              </p>

              <div className="flex items-center gap-6">
                <Link to="/privacy-policy" className="text-xs text-gray-400 hover:text-amber-400 transition">
                  Privacy Policy
                </Link>
                <div className="flex items-center gap-4">
                  <Link to="/gdpr-policy" className="text-xs text-gray-400 hover:text-amber-400 transition">
                    GDPR Policy
                  </Link>
                  <div className="flex items-center gap-3">
                    {offices.map((office) => (
                      <span
                        key={office.label}
                        className="inline-flex items-center justify-center transition-transform hover:scale-110 cursor-default"
                        title={office.label}
                        aria-label={office.label}
                      >
                        <img
                          src={office.image}
                          alt={office.label}
                          className="w-6 h-6 rounded-full object-cover shadow-sm border border-gray-600"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            // fallback to emoji if image fails to load
                            const fallback = document.createTextNode(office.emoji);
                            e.currentTarget.parentNode?.appendChild(fallback);
                          }}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Second row: credit line (centered) */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Designed &amp; Developed by{" "}
                <a
                  href="https://www.nakshatranamahacreations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition duration-200"
                >
                  Nakshatra Namaha Creations
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Footer;