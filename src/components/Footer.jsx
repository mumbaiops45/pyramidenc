import React from "react";
import { Link } from "react-router-dom";

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
  <footer className="border-t border-border bg-[#060606] px-6 pt-14 pb-7">
    <div className="max-w-7xl mx-auto">
      {/* Grid – 1 column on mobile, 2 on small, 4 on large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand column */}
        <div>
          <img
            src="/PYRAMID-EC-Logo.png"
            alt="Pyramid E&C"
            className="h-7 w-auto object-contain mb-4"
            onError={(e) => {
              e.currentTarget.outerHTML =
                '<div style="font-size:16px;font-weight:800;color:var(--primery);margin-bottom:16px;">PYRAMID E&C</div>';
            }}
          />
          <p className="text-xs font-light leading-relaxed max-w-[210px] text-gray-600">
            Engineering and construction group delivering sustainable, modular, and digital energy solutions globally.
          </p>
        </div>

        {/* Link sections */}
        {footerSections.map((section, i) => (
          <div key={i}>
            <p className="text-[11px] font-bold tracking-[2px] uppercase mb-4 text-primery">
              {section.title}
            </p>
            <ul className="space-y-2.5">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.path}
                    className="text-[13px] font-normal transition-colors duration-150 text-gray-600 hover:text-primery"
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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-border">
        <p className="text-[12px] text-[#404040]">
          © {new Date().getFullYear()} Pyramid E&amp;C Group. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-[11px] tracking-[1.5px] uppercase text-[#2A2A2A]">
            Offices
          </span>
          <div className="flex items-center gap-2">
            {offices.map((o) => (
              <span key={o.label} className="text-lg" title={o.label} aria-label={o.label}>
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