import React from "react";
import {
  FaOilCan,
  FaFlask,
  FaWind,
  FaLeaf,
  FaGlobeAmericas,
  FaCalendarAlt,
  FaTrophy,
  FaUserFriends,
  FaMicrophoneAlt,
  FaFlask as FaBeaker,
  FaSolarPanel,
} from "react-icons/fa";
import { MdLocationOn, MdEngineering, MdFactory } from "react-icons/md";

// ============================================================================
// 📷 IMAGE CONFIGURATION – REPLACE WITH YOUR OWN HIGH-RES IMAGES
// ============================================================================

// Hero background image – use a sharp, well-lit industrial photo
const HERO_BG_IMAGE = "/background.png"; // ← place your image here

// / Facility / intro section image (engineering facility)
const FACILITY_IMAGE =
  "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
// Alternative: "/images/pyramid-group/facility.jpg"

// Infrastructure / fabrication yard image
const FABRICATION_IMAGE =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

// ============================================================================

const PyramidGroup = () => {
  const stats = [
    { icon: FaCalendarAlt, value: "25+", label: "Years of Excellence" },
    { icon: FaGlobeAmericas, value: "15+", label: "Global Countries" },
    { icon: FaTrophy, value: "350+", label: "Projects Completed" },
    { icon: FaUserFriends, value: "500+", label: "Expert Engineers" },
  ];

  const businessAreas = [
    { icon: FaOilCan, title: "Oil & Gas Production", description: "Efficient upstream solutions with reduced carbon footprint" },
    { icon: FaFlask, title: "Petroleum Refining", description: "Advanced refining processes for maximum yield" },
    { icon: FaWind, title: "Natural Gas Reforming", description: "Low-emission hydrogen and syngas production" },
    { icon: FaLeaf, title: "Bio Chemicals", description: "Sustainable bio-based chemical solutions" },
  ];

  const regions = [
    { name: "Americas", cities: "Houston, USA" },
    { name: "Europe", cities: "London, UK" },
    { name: "Middle East & Africa", cities: "Dubai, UAE · Port Harcourt, Nigeria" },
    { name: "Asia Pacific", cities: "Mumbai, India" },
  ];

  const offices = [
    { city: "Houston, USA", region: "Americas HQ" },
    { city: "Mumbai, India", region: "Asia Development Center" },
    { city: "Dubai, UAE", region: "Middle East Hub" },
    { city: "London, UK", region: "European Operations" },
    { city: "Port Harcourt, Nigeria", region: "Africa Office" },
  ];

  const animationStyles = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.05); }
    }
    .animate-fadeUp { animation: fadeInUp 0.8s ease forwards; }
    .animate-fadeLeft { animation: fadeInLeft 0.8s ease forwards; }
    .animate-fadeRight { animation: fadeInRight 0.8s ease forwards; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <style>{animationStyles}</style>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Banner – with reduced overlay for clarity */}
     {/* Hero Banner – with reduced overlay for clarity */}
<section className="relative pt-24 pb-20 px-6 border-b border-white/10 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
  ></div>
  {/* Reduced opacity from 60 to 40 – makes background much clearer */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="max-w-7xl mx-auto relative z-10 animate-fadeUp text-center">
    <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full animate-fadeLeft mx-auto w-fit">
      <span>Home</span><span>›</span><span>About</span><span>›</span>
      <span className="text-[#F5B400] font-medium">Pyramid E&C Group</span>
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeLeft delay-100">
      Pyramid <span className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent">E&C Group</span>
    </h1>
    <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeLeft delay-200">
      Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
    </p>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#F5B400]/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fadeUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <stat.icon className="text-4xl text-[#F5B400] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group animate-fadeLeft">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F5B400]/10 to-[#FFC107]/10 rounded-2xl"></div>
            <img
              src={FACILITY_IMAGE}
              alt="Pyramid Group Engineering Facility"
              className="rounded-2xl object-cover w-full h-[450px] relative z-10 shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#F5B400]/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm border border-[#F5B400]/30 z-20 text-[#F5B400]">
              <MdEngineering className="inline mr-1" /> Global Leader Since 1995
            </div>
          </div>
          <div className="animate-fadeRight">
            <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4 border border-[#F5B400]/20">
              Who We Are
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Global Hydrocarbon Engineering Leader
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
              conglomerate comprising research, engineering, automation,
              digitalization, manufacturing and construction firms spread across
              the US, Europe, Middle East, Africa and Asia.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We serve the industry from our development centers in Houston and
              Mumbai, with regional offices in Dubai, London and Port Harcourt.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our main business areas are Oil & Gas Production, Petroleum Refining,
              Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
              low carbon impact processing solutions – termed as <span className="text-[#F5B400] font-semibold">Blue or Green</span>{" "}
              versions of conventional Grey processes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
                <span className="text-sm">25+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                <FaGlobeAmericas className="text-[#F5B400]" />
                <span className="text-sm">Global Presence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeUp">
            <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4">Core Competencies</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Business Areas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessAreas.map((area, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#F5B400]/50 transition-all duration-300 hover:scale-[1.02] animate-fadeUp" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5B400]/0 to-[#F5B400]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <area.icon className="text-4xl text-[#F5B400] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 animate-fadeUp delay-400">
            🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-[#F5B400]">Blue</strong> and <strong className="text-[#F5B400]">Green</strong> alternatives to conventional Grey processes.
          </p>
        </div>
      </section>

      {/* Full Project Lifecycle */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto animate-fadeUp">
          <div className="relative bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5B400] text-black px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">Full‑Cycle Expertise</div>
            <p className="text-gray-300 leading-relaxed text-lg">Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.</p>
          </div>
        </div>
      </section>

      {/* Regional Leadership */}
      <section className="py-20 px-6 bg-gradient-to-t from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fadeUp">
            <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4">Global Organization</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Regional Leadership</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-[#F5B400]/50 transition-all duration-300 hover:scale-105 animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <FaGlobeAmericas className="text-[#F5B400] text-3xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-1">{region.name}</h3>
                <p className="text-gray-400 text-sm">{region.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeLeft">
            <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4">Pyramid Group Company</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Engineering & Fabrication Excellence</h2>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-[#F5B400] rounded-full mt-2"></div>
                <p className="text-gray-300"><strong className="text-white">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-[#F5B400] font-semibold">1 million engineering man‑hours annually</span>.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-[#F5B400] rounded-full mt-2"></div>
                <p className="text-gray-300"><strong className="text-white">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-[#F5B400] font-semibold">1000 tons</span>.</p>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
            <div className="mt-8 flex gap-4">
              <div className="bg-white/5 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300"><div className="text-2xl font-bold text-[#F5B400]">1M+</div><div className="text-xs text-gray-400">Annual Man‑hours</div></div>
              <div className="bg-white/5 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300"><div className="text-2xl font-bold text-[#F5B400]">1000T</div><div className="text-xs text-gray-400">Load‑out Capacity</div></div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2 animate-fadeRight">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#FFC107]/10 to-[#F5B400]/10 rounded-2xl"></div>
            <img src={FABRICATION_IMAGE} alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 shadow-2xl border border-white/10 transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Global Offices List */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 animate-fadeUp">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Global Footprint</h2>
            <p className="text-gray-400">Strategic offices across five continents</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-[#F5B400]/50 transition-all duration-300 hover:scale-105 group animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <MdLocationOn className="text-[#F5B400] text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold">{office.city}</p>
                <p className="text-gray-500 text-sm">{office.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Research */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5B400]/20 via-transparent to-[#D99A00]/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeUp">
          <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4">Our Purpose</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transforming Energy Tomorrow</h2>
          <div className="relative">
            <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-[#F5B400]/10 animate-pulse-slow" />
            <p className="text-gray-300 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300"><FaBeaker className="text-[#F5B400]" /><span className="text-sm">Research Collaborations</span></div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300"><MdFactory className="text-[#F5B400]" /><span className="text-sm">Pilot Plants for Green Hydrocarbons</span></div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300"><FaSolarPanel className="text-[#F5B400]" /><span className="text-sm">Solar Power Integration</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/10 rounded-2xl p-10 border border-white/10 backdrop-blur-sm animate-fadeUp hover:scale-[1.02] transition-all duration-500">
          <h3 className="text-2xl font-bold mb-3">Ready to Engineer the Future?</h3>
          <p className="text-gray-300 mb-6">Partner with Pyramid E&C for sustainable hydrocarbon solutions</p>
          <button className="group bg-[#F5B400] hover:bg-[#D99A00] text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#F5B400]/20 hover:scale-105">Contact Our Team</button>
        </div>
      </section>
    </div>
  );
};

export default PyramidGroup;