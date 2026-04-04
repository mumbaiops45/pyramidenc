import React, { useState } from "react";

const services = [
  "Research & Development",
  "Project Development",
  "EPCM Services",
  "Turnkey EPC Services",
  "Modular Fabrication",
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="max-w-7xl mx-auto border-y border-border">
    {/* <section className="w-full border-y border-border"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side – Service list */}
        <div className="px-6 lg:px-12 xl:px-14 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-border bg-black-soft">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 rounded bg-primery" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-primery">
              How We Work
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-8">
            End-to-End<br />Engineering<br />Services
          </h2>

          <div className="space-y-0">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 py-4 cursor-pointer transition-all duration-200 group ${
                  i < services.length - 1 ? "border-b border-border" : ""
                }`}
                style={{ paddingLeft: activeIdx === i ? "8px" : "0px" }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <span className="text-xs font-black w-8 flex-shrink-0 transition-opacity duration-200 text-primery/50">
                  0{i + 1}
                </span>
                <span
                  className={`flex-1 text-sm font-medium transition-colors duration-200 ${
                    activeIdx === i ? "text-white" : "text-gray-200"
                  }`}
                >
                  {svc}
                </span>
                <span
                  className={`text-base transition-all duration-200 text-primery ${
                    activeIdx === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                  }`}
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side – Process diagram */}
        <div className="px-6 lg:px-12 xl:px-14 py-12 lg:py-16 flex flex-col justify-center bg-black-soft">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 rounded bg-primery" />
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-primery">
              Our Process
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-5">
            From concept<br />to commissioning
          </h3>

          <p className="text-sm font-light leading-relaxed mb-8 text-gray-600">
            We manage every stage of the project lifecycle — research, engineering, procurement,
            fabrication, and handover — under one roof, ensuring accountability and quality at every
            step.
          </p>

          <div className="w-full flex justify-center overflow-x-auto">
            <svg viewBox="0 0 400 280" fill="none" className="w-full max-w-sm h-auto min-w-[280px]">
              {/* Distillation tower */}
              <rect x="20" y="60" width="60" height="140" stroke="#F5B400" strokeWidth="1.5" fill="rgba(245,180,0,0.04)" rx="2"/>
              <line x1="20" y1="100" x2="80" y2="100" stroke="#F5B400" strokeWidth="0.5" strokeDasharray="3,4"/>
              <line x1="20" y1="140" x2="80" y2="140" stroke="#F5B400" strokeWidth="0.5" strokeDasharray="3,4"/>
              <line x1="20" y1="180" x2="80" y2="180" stroke="#F5B400" strokeWidth="0.5" strokeDasharray="3,4"/>
              <line x1="50" y1="60" x2="50" y2="40" stroke="#F5B400" strokeWidth="2"/>
              <line x1="40" y1="40" x2="60" y2="40" stroke="#F5B400" strokeWidth="2"/>

              {/* Absorption column */}
              <rect x="160" y="90" width="50" height="110" stroke="#D99A00" strokeWidth="1.5" fill="rgba(217,154,0,0.04)" rx="2"/>
              <line x1="160" y1="125" x2="210" y2="125" stroke="#D99A00" strokeWidth="0.5" strokeDasharray="3,4"/>
              <line x1="160" y1="160" x2="210" y2="160" stroke="#D99A00" strokeWidth="0.5" strokeDasharray="3,4"/>
              <line x1="185" y1="90" x2="185" y2="70" stroke="#D99A00" strokeWidth="2"/>
              <line x1="175" y1="70" x2="195" y2="70" stroke="#D99A00" strokeWidth="2"/>

              {/* Compressor */}
              <circle cx="310" cy="170" r="22" stroke="#F5B400" strokeWidth="1.5" fill="rgba(245,180,0,0.05)"/>
              <path d="M298 162L310 150L322 162" stroke="#F5B400" strokeWidth="1.5" fill="none"/>
              <line x1="310" y1="192" x2="310" y2="210" stroke="#F5B400" strokeWidth="1.5"/>

              {/* Connectors */}
              <path d="M80 170L130 170L130 145L160 145" stroke="#A0A0A0" strokeWidth="1.2"/>
              <path d="M210 145L250 145L250 170L288 170" stroke="#A0A0A0" strokeWidth="1.2"/>

              {/* Ground line */}
              <line x1="10" y1="210" x2="390" y2="210" stroke="#2A2A2A" strokeWidth="1"/>

              {/* Animated dots */}
              <circle cx="50" cy="140" r="3" fill="#F5B400">
                <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="185" cy="145" r="3" fill="#D99A00">
                <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="310" cy="170" r="3" fill="#F5B400">
                <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.6s" repeatCount="indefinite"/>
              </circle>

              {/* Labels */}
              <text x="50" y="245" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" fill="#F5B400" fontWeight="600">DISTILLATION</text>
              <text x="185" y="245" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" fill="#D99A00" fontWeight="600">ABSORPTION</text>
              <text x="310" y="245" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="10" fill="#F5B400" fontWeight="600">COMPRESSION</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;