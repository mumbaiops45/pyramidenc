import {
  FaOilCan,
  FaFlask,
  FaWind,
  FaLeaf,
  FaGlobeAmericas,
  FaMicrophoneAlt,
  FaFlask as FaBeaker,
  FaSolarPanel,
  FaArrowRight,
} from "react-icons/fa";
import { MdLocationOn, MdEngineering, MdFactory } from "react-icons/md";
     import { Link } from "react-router-dom";




// ============================================================================
// Animation styles (enhanced)
// ============================================================================
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
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
`;

// ============================================================================
// Main Pyramid Group Component (Light Theme)
// ============================================================================
const PyramidGroup = () => {
  

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

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – Centered with background image */}
      <section className="relative overflow-hidden text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/background.png')` }}
        ></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        {/* Animated floating elements (decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">Pyramid E&C Group</span>
          </div>
          
          {/* Title with gradient */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Pyramid{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              E&C Group
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
          </p>
        </div>
        
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group animate-fadeLeft">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Pyramid Group Engineering Facility"
                className="rounded-2xl object-cover w-full h-[450px] relative z-10 shadow-xl border border-gray-200 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-lg px-4 py-2 text-sm shadow-lg z-20">
                <MdEngineering className="inline mr-1" /> Global Leader Since 1995
              </div>
            </div>
            <div className="animate-fadeRight">
              <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Global Hydrocarbon Engineering Leader
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
                conglomerate comprising research, engineering, automation,
                digitalization, manufacturing and construction firms spread across
                the US, Europe, Middle East, Africa and Asia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We serve the industry from our development centers in Houston and
                Mumbai, with regional offices in Dubai, London and Port Harcourt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our main business areas are Oil & Gas Production, Petroleum Refining,
                Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
                low carbon impact processing solutions – termed as <span className="text-amber-600 font-semibold">Blue or Green</span>{" "}
                versions of conventional Grey processes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-sm text-gray-700">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
                  <FaGlobeAmericas className="text-amber-500" />
                  <span className="text-sm text-gray-700">Global Presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeUp">
            <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Core Competencies</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessAreas.map((area, i) => (
              <div key={i} className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
                    <area.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-10 max-w-3xl mx-auto bg-amber-50 rounded-xl p-5 border border-amber-200 animate-fadeUp delay-400">
            🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-amber-600">Blue</strong> and <strong className="text-amber-600">Green</strong> alternatives to conventional Grey processes.
          </p>
        </div>
      </section>

      {/* Full Project Lifecycle */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeUp">
          <div className="relative bg-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">Full‑Cycle Expertise</div>
            <p className="text-gray-700 leading-relaxed text-lg">Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.</p>
          </div>
        </div>
      </section>

      {/* Regional Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeUp">
            <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Global Organization</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regional Leadership</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <FaGlobeAmericas className="text-amber-500 text-4xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{region.name}</h3>
                <p className="text-gray-500 text-sm">{region.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeLeft">
            <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">Pyramid Group Company</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Engineering & Fabrication Excellence</h2>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-gray-600"><strong className="text-gray-900">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-amber-600 font-semibold">1 million engineering man‑hours annually</span>.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                <p className="text-gray-600"><strong className="text-gray-900">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-amber-600 font-semibold">1000 tons</span>.</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
            <div className="mt-8 flex gap-4">
              <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
                <div className="text-2xl font-bold text-amber-600">1M+</div>
                <div className="text-xs text-gray-500">Annual Man‑hours</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
                <div className="text-2xl font-bold text-amber-600">1000T</div>
                <div className="text-xs text-gray-500">Load‑out Capacity</div>
              </div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2 animate-fadeRight">
            <div className="absolute inset-0 bg-gradient-to-bl from-amber-100 to-amber-50 rounded-2xl"></div>
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 shadow-xl border border-gray-200 transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Global Offices List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fadeUp">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Global Footprint</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mb-3"></div>
            <p className="text-gray-600">Strategic offices across five continents</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <MdLocationOn className="text-amber-500 text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-gray-900">{office.city}</p>
                <p className="text-gray-500 text-sm">{office.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Research */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 animate-fadeUp">
          <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Our Purpose</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transforming Energy Tomorrow</h2>
          <div className="relative">
            <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-amber-200 animate-pulse-slow" />
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
                <FaBeaker className="text-amber-500" />
                <span className="text-sm text-gray-700">Research Collaborations</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
                <MdFactory className="text-amber-500" />
                <span className="text-sm text-gray-700">Pilot Plants for Green Hydrocarbons</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
                <FaSolarPanel className="text-amber-500" />
                <span className="text-sm text-gray-700">Solar Power Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}


<section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
      Let's Engineer the Future
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Engineer the Future?</h2>
    <p className="text-gray-300 text-lg mb-8">
      Partner with Pyramid E&C for sustainable hydrocarbon solutions
    </p>
    <Link
      to="/contact"
      className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
    >
      Contact Our Team
      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
</section>
    </div>
  );
};

export default PyramidGroup;