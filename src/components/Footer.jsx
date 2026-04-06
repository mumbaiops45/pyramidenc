import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Guiding Principles", path: "/about/guiding-principles" },
      { label: "History", path: "/about/history" },
      { label: "Leadership", path: "/about/leadership" },
      { label: "News", path: "/news" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Oil & Gas", path: "/products/oil-gas" },
      { label: "Midstream", path: "/products/midstream" },
      { label: "Bio Chemicals", path: "/products/bio-chemicals" },
      { label: "Decarbonization", path: "/products/decarbonization" },
      { label: "Digitalization", path: "/products/digitalization" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "R&D", path: "/services/research-development" },
      { label: "Project Development", path: "/services/project-development" },
      { label: "EPCM Services", path: "/services/epcm-services" },
      { label: "Turnkey EPC", path: "/services/turnkey-epc-services" },
      { label: "Modular Fabrication", path: "/services/modular-fabrication" },
    ],
  },
];

const offices = [
  { emoji: "🇮🇳", label: "India" },
  { emoji: "🇦🇪", label: "UAE" },
  { emoji: "🇳🇬", label: "Nigeria" },
  { emoji: "🇬🇧", label: "UK" },
  { emoji: "🇺🇸", label: "USA" },
];

const Footer = () => (
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
          {/* Social icons with real links (update URLs as needed) */}
          <div className="flex gap-3 mt-6">
            <a 
              href="https://linkedin.com/company/pyramid-ec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a 
              href="https://twitter.com/pyramidec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a 
              href="https://facebook.com/pyramidec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
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

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Pyramid E&amp;C Group. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[1.5px] uppercase text-gray-400">
            Global Offices
          </span>
          <div className="flex items-center gap-3">
            {offices.map((o) => (
              <span
                key={o.label}
                className="text-xl transition-transform hover:scale-110 cursor-default"
                title={o.label}
                aria-label={o.label}
              >
                {o.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;