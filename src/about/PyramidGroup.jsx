// // // import {
// // //   FaOilCan,
// // //   FaFlask,
// // //   FaWind,
// // //   FaLeaf,
// // //   FaGlobeAmericas,
// // //   FaMicrophoneAlt,
// // //   FaFlask as FaBeaker,
// // //   FaSolarPanel,
// // //   FaArrowRight,
// // // } from "react-icons/fa";
// // // import { MdLocationOn, MdEngineering, MdFactory } from "react-icons/md";
// // //      import { Link } from "react-router-dom";




// // // // ============================================================================
// // // // Animation styles (enhanced)
// // // // ============================================================================
// // // const animationStyles = `
// // //   @keyframes fadeUp {
// // //     0% { opacity: 0; transform: translateY(30px); }
// // //     100% { opacity: 1; transform: translateY(0); }
// // //   }
// // //   @keyframes fadeLeft {
// // //     0% { opacity: 0; transform: translateX(-30px); }
// // //     100% { opacity: 1; transform: translateX(0); }
// // //   }
// // //   @keyframes fadeRight {
// // //     0% { opacity: 0; transform: translateX(30px); }
// // //     100% { opacity: 1; transform: translateX(0); }
// // //   }
// // //   @keyframes float {
// // //     0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //     50% { transform: translateY(-20px) rotate(5deg); }
// // //   }
// // //   @keyframes pulse {
// // //     0%, 100% { opacity: 1; transform: scale(1); }
// // //     50% { opacity: 0.7; transform: scale(1.05); }
// // //   }
// // //   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// // //   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// // //   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// // //   .animate-float { animation: float 6s ease-in-out infinite; }
// // //   .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
// // //   .delay-100 { animation-delay: 0.1s; }
// // //   .delay-200 { animation-delay: 0.2s; }
// // //   .delay-300 { animation-delay: 0.3s; }
// // //   .delay-400 { animation-delay: 0.4s; }
// // //   .delay-500 { animation-delay: 0.5s; }
// // // `;

// // // // ============================================================================
// // // // Main Pyramid Group Component (Light Theme)
// // // // ============================================================================
// // // const PyramidGroup = () => {
  

// // //   const businessAreas = [
// // //     { icon: FaOilCan, title: "Oil & Gas Production", description: "Efficient upstream solutions with reduced carbon footprint" },
// // //     { icon: FaFlask, title: "Petroleum Refining", description: "Advanced refining processes for maximum yield" },
// // //     { icon: FaWind, title: "Natural Gas Reforming", description: "Low-emission hydrogen and syngas production" },
// // //     { icon: FaLeaf, title: "Bio Chemicals", description: "Sustainable bio-based chemical solutions" },
// // //   ];

// // //   const regions = [
// // //     { name: "Americas", cities: "Houston, USA" },
// // //     { name: "Europe", cities: "London, UK" },
// // //     { name: "Middle East & Africa", cities: "Dubai, UAE · Port Harcourt, Nigeria" },
// // //     { name: "Asia Pacific", cities: "Mumbai, India" },
// // //   ];

// // //   const offices = [
// // //     { city: "Houston, USA", region: "Americas HQ" },
// // //     { city: "Mumbai, India", region: "Asia Development Center" },
// // //     { city: "Dubai, UAE", region: "Middle East Hub" },
// // //     { city: "London, UK", region: "European Operations" },
// // //     { city: "Port Harcourt, Nigeria", region: "Africa Office" },
// // //   ];

// // //   return (
// // //     <div className="bg-white">
// // //       <style>{animationStyles}</style>

// // //       {/* Hero Section – Centered with background image */}
// // //       <section className="relative overflow-hidden text-white ">
// // //         {/* Background image */}
// // //         <div
// // //           className="absolute inset-0 bg-cover bg-center"
// // //           style={{ backgroundImage: `url('/background.png')` }}
// // //         ></div>
// // //         {/* Dark overlay for readability */}
// // //         <div className="absolute inset-0 bg-black/60 z-0"></div>
        
// // //         {/* Animated floating elements (decorative) */}
// // //         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
// // //           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
// // //           <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-slow"></div>
// // //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
// // //         </div>

// // //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
// // //           {/* Breadcrumb */}
// // //           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
// // //             <span>Home</span><span>›</span><span>About</span><span>›</span>
// // //             <span className="text-amber-400 font-medium">Pyramid E&C Group</span>
// // //           </div>
          
// // //           {/* Title with gradient */}
// // //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
// // //             Pyramid{" "}
// // //             <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
// // //               E&C Group
// // //             </span>
// // //           </h1>
          
// // //           {/* Subtitle */}
// // //           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
// // //             Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
// // //           </p>
// // //         </div>
        
// // //         {/* Bottom fade to white */}
// // //         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
// // //       </section>

// // //       {/* Intro Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //             <div className="relative group animate-fadeLeft">
// // //               <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-2xl"></div>
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
// // //                 alt="Pyramid Group Engineering Facility"
// // //                 className="rounded-2xl object-cover w-full h-[450px] relative z-10 shadow-xl border border-gray-200 transition-transform duration-500 group-hover:scale-105"
// // //               />
// // //               <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-lg px-4 py-2 text-sm shadow-lg z-20">
// // //                 <MdEngineering className="inline mr-1" /> Global Leader Since 1995
// // //               </div>
// // //             </div>
// // //             <div className="animate-fadeRight">
// // //               <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
// // //                 Who We Are
// // //               </div>
// // //               <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
// // //                 Global Hydrocarbon Engineering Leader
// // //               </h2>
// // //               <p className="text-gray-600 leading-relaxed mb-4">
// // //                 Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
// // //                 conglomerate comprising research, engineering, automation,
// // //                 digitalization, manufacturing and construction firms spread across
// // //                 the US, Europe, Middle East, Africa and Asia.
// // //               </p>
// // //               <p className="text-gray-600 leading-relaxed mb-4">
// // //                 We serve the industry from our development centers in Houston and
// // //                 Mumbai, with regional offices in Dubai, London and Port Harcourt.
// // //               </p>
// // //               <p className="text-gray-600 leading-relaxed">
// // //                 Our main business areas are Oil & Gas Production, Petroleum Refining,
// // //                 Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
// // //                 low carbon impact processing solutions – termed as <span className="text-amber-600 font-semibold">Blue or Green</span>{" "}
// // //                 versions of conventional Grey processes.
// // //               </p>
// // //               <div className="mt-8 flex flex-wrap gap-3">
// // //                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
// // //                   <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse-slow"></div>
// // //                   <span className="text-sm text-gray-700">25+ Years Experience</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
// // //                   <FaGlobeAmericas className="text-amber-500" />
// // //                   <span className="text-sm text-gray-700">Global Presence</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Business Areas */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-12 animate-fadeUp">
// // //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Core Competencies</div>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
// // //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
// // //           </div>
// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             {businessAreas.map((area, i) => (
// // //               <div key={i} className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
// // //                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
// // //                 <div className="p-6">
// // //                   <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
// // //                     <area.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{area.title}</h3>
// // //                   <p className="text-gray-600 text-sm">{area.description}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <p className="text-gray-600 text-center mt-10 max-w-3xl mx-auto bg-amber-50 rounded-xl p-5 border border-amber-200 animate-fadeUp delay-400">
// // //             🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-amber-600">Blue</strong> and <strong className="text-amber-600">Green</strong> alternatives to conventional Grey processes.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Full Project Lifecycle */}
// // //       <section className="py-16 bg-white">
// // //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeUp">
// // //           <div className="relative bg-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
// // //             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">Full‑Cycle Expertise</div>
// // //             <p className="text-gray-700 leading-relaxed text-lg">Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.</p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Regional Leadership */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-12 animate-fadeUp">
// // //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Global Organization</div>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regional Leadership</h2>
// // //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
// // //           </div>
// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             {regions.map((region, idx) => (
// // //               <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group">
// // //                 <FaGlobeAmericas className="text-amber-500 text-4xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
// // //                 <h3 className="text-xl font-semibold text-gray-900 mb-1">{region.name}</h3>
// // //                 <p className="text-gray-500 text-sm">{region.cities}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Infrastructure Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
// // //           <div className="order-2 lg:order-1 animate-fadeLeft">
// // //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">Pyramid Group Company</div>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Engineering & Fabrication Excellence</h2>
// // //             <div className="space-y-4">
// // //               <div className="flex gap-3 items-start">
// // //                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
// // //                 <p className="text-gray-600"><strong className="text-gray-900">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-amber-600 font-semibold">1 million engineering man‑hours annually</span>.</p>
// // //               </div>
// // //               <div className="flex gap-3 items-start">
// // //                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
// // //                 <p className="text-gray-600"><strong className="text-gray-900">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-amber-600 font-semibold">1000 tons</span>.</p>
// // //               </div>
// // //             </div>
// // //             <p className="text-gray-600 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
// // //             <div className="mt-8 flex gap-4">
// // //               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <div className="text-2xl font-bold text-amber-600">1M+</div>
// // //                 <div className="text-xs text-gray-500">Annual Man‑hours</div>
// // //               </div>
// // //               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <div className="text-2xl font-bold text-amber-600">1000T</div>
// // //                 <div className="text-xs text-gray-500">Load‑out Capacity</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="relative group order-1 lg:order-2 animate-fadeRight">
// // //             <div className="absolute inset-0 bg-gradient-to-bl from-amber-100 to-amber-50 rounded-2xl"></div>
// // //             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 shadow-xl border border-gray-200 transition-transform duration-500 group-hover:scale-105" />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Global Offices List */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 animate-fadeUp">
// // //             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Global Footprint</h2>
// // //             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mb-3"></div>
// // //             <p className="text-gray-600">Strategic offices across five continents</p>
// // //           </div>
// // //           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
// // //             {offices.map((office, idx) => (
// // //               <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group">
// // //                 <MdLocationOn className="text-amber-500 text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
// // //                 <p className="font-semibold text-gray-900">{office.city}</p>
// // //                 <p className="text-gray-500 text-sm">{office.region}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Vision & Research */}
// // //       <section className="py-20 bg-white relative overflow-hidden">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50"></div>
// // //         <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 animate-fadeUp">
// // //           <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Our Purpose</div>
// // //           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transforming Energy Tomorrow</h2>
// // //           <div className="relative">
// // //             <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-amber-200 animate-pulse-slow" />
// // //             <p className="text-gray-600 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
// // //             <div className="flex flex-wrap justify-center gap-6 mt-8">
// // //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <FaBeaker className="text-amber-500" />
// // //                 <span className="text-sm text-gray-700">Research Collaborations</span>
// // //               </div>
// // //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <MdFactory className="text-amber-500" />
// // //                 <span className="text-sm text-gray-700">Pilot Plants for Green Hydrocarbons</span>
// // //               </div>
// // //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <FaSolarPanel className="text-amber-500" />
// // //                 <span className="text-sm text-gray-700">Solar Power Integration</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}


// // // <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
// // //   <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
// // //     <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
// // //       Let's Engineer the Future
// // //     </div>
// // //     <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Engineer the Future?</h2>
// // //     <p className="text-gray-300 text-lg mb-8">
// // //       Partner with Pyramid E&C for sustainable hydrocarbon solutions
// // //     </p>
// // //     <Link
// // //       to="/contact"
// // //       className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
// // //     >
// // //       Contact Our Team
// // //       <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
// // //     </Link>
// // //   </div>
// // // </section>
// // //     </div>
// // //   );
// // // };

// // // export default PyramidGroup;

// // // import {
// // //   FaOilCan,
// // //   FaFlask,
// // //   FaWind,
// // //   FaLeaf,
// // //   FaGlobeAmericas,
// // //   FaMicrophoneAlt,
// // //   FaFlask as FaBeaker,
// // //   FaSolarPanel,
// // //   FaArrowRight,
// // // } from "react-icons/fa";
// // // import { MdLocationOn, MdEngineering, MdFactory } from "react-icons/md";
// // // import { Link } from "react-router-dom";

// // // // ============================================================================
// // // // Animation styles (enhanced)
// // // // ============================================================================
// // // const animationStyles = `
 
// // //   @keyframes fadeLeft {
// // //     0% { opacity: 0; transform: translateX(-30px); }
// // //     100% { opacity: 1; transform: translateX(0); }
// // //   }
// // //   @keyframes fadeRight {
// // //     0% { opacity: 0; transform: translateX(30px); }
// // //     100% { opacity: 1; transform: translateX(0); }
// // //   }
// // //   @keyframes float {
// // //     0%, 100% { transform: translateY(0px) rotate(0deg); }
// // //     50% { transform: translateY(-20px) rotate(5deg); }
// // //   }
// // //   @keyframes floatSlow {
// // //     0%, 100% { transform: translateY(0px) translateX(0px); }
// // //     50% { transform: translateY(-15px) translateX(10px); }
// // //   }
// // //   @keyframes pulse {
// // //     0%, 100% { opacity: 1; transform: scale(1); }
// // //     50% { opacity: 0.7; transform: scale(1.05); }
// // //   }
// // //   @keyframes bubbleDrift {
// // //     0% { transform: translateY(100%) scale(0); opacity: 0; }
// // //     20% { opacity: 0.6; }
// // //     80% { opacity: 0.4; }
// // //     100% { transform: translateY(-100%) scale(1); opacity: 0; }
// // //   }
// // //   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// // //   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// // //   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// // //   .animate-float { animation: float 6s ease-in-out infinite; }
// // //   .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
// // //   .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
// // //   .delay-100 { animation-delay: 0.1s; }
// // //   .delay-200 { animation-delay: 0.2s; }
// // //   .delay-300 { animation-delay: 0.3s; }
// // //   .delay-400 { animation-delay: 0.4s; }
// // //   .delay-500 { animation-delay: 0.5s; }
// // // `;

// // // // ============================================================================
// // // // Main Pyramid Group Component (No Shadows)
// // // // ============================================================================
// // // const PyramidGroup = () => {
// // //   const businessAreas = [
// // //     { icon: FaOilCan, title: "Oil & Gas Production", description: "Efficient upstream solutions with reduced carbon footprint" },
// // //     { icon: FaFlask, title: "Petroleum Refining", description: "Advanced refining processes for maximum yield" },
// // //     { icon: FaWind, title: "Natural Gas Reforming", description: "Low-emission hydrogen and syngas production" },
// // //     { icon: FaLeaf, title: "Bio Chemicals", description: "Sustainable bio-based chemical solutions" },
// // //   ];

// // //   const regions = [
// // //     { name: "Americas", cities: "Houston, USA" },
// // //     { name: "Europe", cities: "London, UK" },
// // //     { name: "Middle East & Africa", cities: "Dubai, UAE · Port Harcourt, Nigeria" },
// // //     { name: "Asia Pacific", cities: "Mumbai, India" },
// // //   ];

// // //   const offices = [
// // //     { city: "Houston, USA", region: "Americas HQ" },
// // //     { city: "Mumbai, India", region: "Asia Development Center" },
// // //     { city: "Dubai, UAE", region: "Middle East Hub" },
// // //     { city: "London, UK", region: "European Operations" },
// // //     { city: "Port Harcourt, Nigeria", region: "Africa Office" },
// // //   ];

// // //   // Generate random bubbles
// // //   const bubbles = Array.from({ length: 24 }, (_, i) => ({
// // //     id: i,
// // //     size: Math.random() * 60 + 20,
// // //     left: Math.random() * 100,
// // //     delay: Math.random() * 10,
// // //     duration: Math.random() * 8 + 6,
// // //     opacity: Math.random() * 0.4 + 0.2,
// // //   }));

// // //   return (
// // //     <div className="bg-white">
// // //       <style>{animationStyles}</style>

// // //       {/* Hero Section – Navbar gradient + animated dots/bubbles (no shadows) */}
// // //       <section className="relative overflow-hidden text-white">
// // //         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

// // //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
// // //           <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float-slow"></div>
// // //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

// // //           <div className="absolute top-[15%] left-[5%] w-2 h-2 bg-amber-400/60 rounded-full animate-pulse-slow" style={{ animationDuration: "3s" }}></div>
// // //           <div className="absolute top-[30%] left-[85%] w-3 h-3 bg-amber-500/50 rounded-full animate-pulse-slow" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}></div>
// // //           <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-amber-300/70 rounded-full animate-pulse-slow" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
// // //           <div className="absolute top-[85%] left-[75%] w-2.5 h-2.5 bg-amber-400/60 rounded-full animate-pulse-slow" style={{ animationDuration: "3.5s", animationDelay: "0.2s" }}></div>
// // //           <div className="absolute top-[50%] left-[45%] w-1 h-1 bg-amber-500/80 rounded-full animate-pulse-slow" style={{ animationDuration: "2s", animationDelay: "1.5s" }}></div>
// // //           <div className="absolute top-[10%] left-[60%] w-2 h-2 bg-amber-400/50 rounded-full animate-pulse-slow" style={{ animationDuration: "3s", animationDelay: "0.8s" }}></div>
// // //           <div className="absolute top-[40%] left-[15%] w-1.5 h-1.5 bg-amber-300/60 rounded-full animate-pulse-slow" style={{ animationDuration: "2.8s", animationDelay: "0.3s" }}></div>
// // //           <div className="absolute top-[60%] left-[90%] w-2 h-2 bg-amber-500/70 rounded-full animate-pulse-slow" style={{ animationDuration: "3.2s", animationDelay: "1.2s" }}></div>

// // //           {bubbles.map((bubble) => (
// // //             <div
// // //               key={bubble.id}
// // //               className="absolute rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-500/10 backdrop-blur-sm"
// // //               style={{
// // //                 width: `${bubble.size}px`,
// // //                 height: `${bubble.size}px`,
// // //                 left: `${bubble.left}%`,
// // //                 bottom: "-100px",
// // //                 opacity: bubble.opacity,
// // //                 animation: `bubbleDrift ${bubble.duration}s ease-in-out infinite`,
// // //                 animationDelay: `${bubble.delay}s`,
// // //               }}
// // //             ></div>
// // //           ))}
// // //         </div>

// // //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
// // //           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
// // //             <span>Home</span><span>›</span><span>About</span><span>›</span>
// // //             <span className="text-amber-400 font-medium">Pyramid E&C Group</span>
// // //           </div>

// // //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
// // //             Pyramid{" "}
// // //             <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
// // //               E&C Group
// // //             </span>
// // //           </h1>

// // //           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
// // //             Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
// // //           </p>
// // //         </div>

// // //       </section>

// // //       {/* Intro Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //             <div className="relative group animate-fadeLeft">
// // //               <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-2xl"></div>
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
// // //                 alt="Pyramid Group Engineering Facility"
// // //                 className="rounded-2xl object-cover w-full h-[450px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105"
// // //               />
// // //               <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-lg px-4 py-2 text-sm z-20">
// // //                 <MdEngineering className="inline mr-1" /> Global Leader Since 1995
// // //               </div>
// // //             </div>
// // //             <div className="animate-fadeRight">
// // //               <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
// // //                 Who We Are
// // //               </div>
// // //               <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
// // //                 Global Hydrocarbon Engineering Leader
// // //               </h2>
// // //               <p className="text-gray-600 leading-relaxed mb-4">
// // //                 Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
// // //                 conglomerate comprising research, engineering, automation,
// // //                 digitalization, manufacturing and construction firms spread across
// // //                 the US, Europe, Middle East, Africa and Asia.
// // //               </p>
// // //               <p className="text-gray-600 leading-relaxed mb-4">
// // //                 We serve the industry from our development centers in Houston and
// // //                 Mumbai, with regional offices in Dubai, London and Port Harcourt.
// // //               </p>
// // //               <p className="text-gray-600 leading-relaxed">
// // //                 Our main business areas are Oil & Gas Production, Petroleum Refining,
// // //                 Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
// // //                 low carbon impact processing solutions – termed as <span className="text-amber-600 font-semibold">Blue or Green</span>{" "}
// // //                 versions of conventional Grey processes.
// // //               </p>
// // //               <div className="mt-8 flex flex-wrap gap-3">
// // //                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
// // //                   <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse-slow"></div>
// // //                   <span className="text-sm text-gray-700">25+ Years Experience</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
// // //                   <FaGlobeAmericas className="text-amber-500" />
// // //                   <span className="text-sm text-gray-700">Global Presence</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Business Areas */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-12 animate-fadeUp">
// // //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Core Competencies</div>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
// // //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
// // //           </div>
// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             {businessAreas.map((area, i) => (
// // //               <div key={i} className="group relative bg-white rounded-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
// // //                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
// // //                 <div className="p-6">
// // //                   <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-none">
// // //                     <area.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{area.title}</h3>
// // //                   <p className="text-gray-600 text-sm">{area.description}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <p className="text-gray-600 text-center mt-10 max-w-3xl mx-auto bg-amber-50 rounded-xl p-5 border border-amber-200 animate-fadeUp delay-400">
// // //             🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-amber-600">Blue</strong> and <strong className="text-amber-600">Green</strong> alternatives to conventional Grey processes.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Full Project Lifecycle */}
// // //       <section className="py-16 bg-white">
// // //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeUp">
// // //           <div className="relative bg-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
// // //             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">Full‑Cycle Expertise</div>
// // //             <p className="text-gray-700 leading-relaxed text-lg">Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.</p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Regional Leadership */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-12 animate-fadeUp">
// // //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Global Organization</div>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regional Leadership</h2>
// // //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
// // //             <p className="text-gray-600 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
// // //           </div>
// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             {regions.map((region, idx) => (
// // //               <div key={idx} className="bg-white rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
// // //                 <FaGlobeAmericas className="text-amber-500 text-4xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
// // //                 <h3 className="text-xl font-semibold text-gray-900 mb-1">{region.name}</h3>
// // //                 <p className="text-gray-500 text-sm">{region.cities}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Infrastructure Section */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
// // //           <div className="order-2 lg:order-1 animate-fadeLeft">
// // //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">Pyramid Group Company</div>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Engineering & Fabrication Excellence</h2>
// // //             <div className="space-y-4">
// // //               <div className="flex gap-3 items-start">
// // //                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
// // //                 <p className="text-gray-600"><strong className="text-gray-900">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-amber-600 font-semibold">1 million engineering man‑hours annually</span>.</p>
// // //               </div>
// // //               <div className="flex gap-3 items-start">
// // //                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
// // //                 <p className="text-gray-600"><strong className="text-gray-900">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-amber-600 font-semibold">1000 tons</span>.</p>
// // //               </div>
// // //             </div>
// // //             <p className="text-gray-600 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
// // //             <div className="mt-8 flex gap-4">
// // //               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <div className="text-2xl font-bold text-amber-600">1M+</div>
// // //                 <div className="text-xs text-gray-500">Annual Man‑hours</div>
// // //               </div>
// // //               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <div className="text-2xl font-bold text-amber-600">1000T</div>
// // //                 <div className="text-xs text-gray-500">Load‑out Capacity</div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="relative group order-1 lg:order-2 animate-fadeRight">
// // //             <div className="absolute inset-0 bg-gradient-to-bl from-amber-100 to-amber-50 rounded-2xl"></div>
// // //             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105" />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Global Offices List */}
// // //       <section className="py-16 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 animate-fadeUp">
// // //             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Global Footprint</h2>
// // //             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mb-3"></div>
// // //             <p className="text-gray-600">Strategic offices across five continents</p>
// // //           </div>
// // //           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
// // //             {offices.map((office, idx) => (
// // //               <div key={idx} className="bg-white rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 group">
// // //                 <MdLocationOn className="text-amber-500 text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
// // //                 <p className="font-semibold text-gray-900">{office.city}</p>
// // //                 <p className="text-gray-500 text-sm">{office.region}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Vision & Research */}
// // //       <section className="py-20 bg-white relative overflow-hidden">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50"></div>
// // //         <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 animate-fadeUp">
// // //           <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Our Purpose</div>
// // //           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transforming Energy Tomorrow</h2>
// // //           <div className="relative">
// // //             <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-amber-200 animate-pulse-slow" />
// // //             <p className="text-gray-600 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
// // //             <div className="flex flex-wrap justify-center gap-6 mt-8">
// // //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <FaBeaker className="text-amber-500" />
// // //                 <span className="text-sm text-gray-700">Research Collaborations</span>
// // //               </div>
// // //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <MdFactory className="text-amber-500" />
// // //                 <span className="text-sm text-gray-700">Pilot Plants for Green Hydrocarbons</span>
// // //               </div>
// // //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// // //                 <FaSolarPanel className="text-amber-500" />
// // //                 <span className="text-sm text-gray-700">Solar Power Integration</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section (no shadow) */}
// // //       <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
// // //         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
// // //           <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
// // //             Let's Engineer the Future
// // //           </div>
// // //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Engineer the Future?</h2>
// // //           <p className="text-gray-300 text-lg mb-8">
// // //             Partner with Pyramid E&C for sustainable hydrocarbon solutions
// // //           </p>
// // //           <Link
// // //             to="/contact"
// // //             className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105"
// // //           >
// // //             Contact Our Team
// // //             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default PyramidGroup;





// // import {
// //   FaOilCan,
// //   FaFlask,
// //   FaWind,
// //   FaLeaf,
// //   FaGlobeAmericas,
// //   FaMicrophoneAlt,
// //   FaFlask as FaBeaker,
// //   FaSolarPanel,
  
// // } from "react-icons/fa";
// // import { MdLocationOn, MdEngineering, MdFactory } from "react-icons/md";
// // import { Link } from "react-router-dom";

// // // ============================================================================
// // // Animation styles (includes bubble animation)
// // // ============================================================================
// // const animationStyles = `
// //   @keyframes fadeUp {
// //     0% { opacity: 0; transform: translateY(30px); }
// //     100% { opacity: 1; transform: translateY(0); }
// //   }
// //   @keyframes fadeLeft {
// //     0% { opacity: 0; transform: translateX(-30px); }
// //     100% { opacity: 1; transform: translateX(0); }
// //   }
// //   @keyframes fadeRight {
// //     0% { opacity: 0; transform: translateX(30px); }
// //     100% { opacity: 1; transform: translateX(0); }
// //   }
// //   @keyframes bubbleFloat {
// //     0% {
// //       transform: translateY(0) scale(0.2);
// //       opacity: 0;
// //     }
// //     20% {
// //       opacity: 0.6;
// //     }
// //     80% {
// //       opacity: 0.4;
// //     }
// //     100% {
// //       transform: translateY(-100vh) scale(1);
// //       opacity: 0;
// //     }
// //   }
// //   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// //   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// //   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
// //   .delay-100 { animation-delay: 0.1s; }
// //   .delay-200 { animation-delay: 0.2s; }
// // `;

// // // ============================================================================
// // // Helper to generate random bubbles
// // // ============================================================================
// // const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
// //   return Array.from({ length: count }, (_, i) => ({
// //     id: i,
// //     size: Math.random() * sizeRange + baseSize,
// //     left: Math.random() * 100,
// //     delay: Math.random() * 15,
// //     duration: Math.random() * 10 + 8,
// //     opacity: Math.random() * 0.3 + 0.2,
// //   }));
// // };

// // // ============================================================================
// // // Main Pyramid Group Component (with bubbles in Hero and CTA)
// // // ============================================================================
// // const PyramidGroup = () => {
// //   const businessAreas = [
// //     { icon: FaOilCan, title: "Oil & Gas Production", description: "Efficient upstream solutions with reduced carbon footprint" },
// //     { icon: FaFlask, title: "Petroleum Refining", description: "Advanced refining processes for maximum yield" },
// //     { icon: FaWind, title: "Natural Gas Reforming", description: "Low-emission hydrogen and syngas production" },
// //     { icon: FaLeaf, title: "Bio Chemicals", description: "Sustainable bio-based chemical solutions" },
// //   ];

// //   const regions = [
// //     { name: "Americas", cities: "Houston, USA" },
// //     { name: "Europe", cities: "London, UK" },
// //     { name: "Middle East & Africa", cities: "Dubai, UAE · Port Harcourt, Nigeria" },
// //     { name: "Asia Pacific", cities: "Mumbai, India" },
// //   ];

// //   const offices = [
// //     { city: "Houston, USA", region: "Americas HQ" },
// //     { city: "Mumbai, India", region: "Asia Development Center" },
// //     { city: "Dubai, UAE", region: "Middle East Hub" },
// //     { city: "London, UK", region: "European Operations" },
// //     { city: "Port Harcourt, Nigeria", region: "Africa Office" },
// //   ];

// //   // Bubbles for Hero (light amber/gold)
// //   const heroBubbles = generateBubbles(18, 15, 50);
// //   // Bubbles for CTA (softer amber to match light background)
// //   const ctaBubbles = generateBubbles(22, 10, 45);

// //   return (
// //     <div className="bg-white">
// //       <style>{animationStyles}</style>

// //       {/* Hero Section – with bubbles */}
// //       <section className="relative overflow-hidden text-white">
// //         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

// //         {/* Floating bubbles */}
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //           {heroBubbles.map((bubble) => (
// //             <div
// //               key={bubble.id}
// //               className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
// //               style={{
// //                 width: `${bubble.size}px`,
// //                 height: `${bubble.size}px`,
// //                 left: `${bubble.left}%`,
// //                 bottom: "-50px",
// //                 opacity: bubble.opacity,
// //                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
// //                 animationDelay: `${bubble.delay}s`,
// //               }}
// //             />
// //           ))}
// //         </div>

// //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
// //           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
// //             <span>Home</span><span>›</span><span>About</span><span>›</span>
// //             <span className="text-amber-400 font-medium">Pyramid E&C Group</span>
// //           </div>

// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
// //             Pyramid{" "}
// //             <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
// //               E&C Group
// //             </span>
// //           </h1>

// //           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
// //             Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
// //           </p>
// //         </div>
// //       </section>

// //       {/* Intro Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div className="relative group animate-fadeLeft">
// //               <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-2xl"></div>
// //               <img
// //                 src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
// //                 alt="Pyramid Group Engineering Facility"
// //                 className="rounded-2xl object-cover w-full h-[450px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105"
// //               />
// //               <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-lg px-4 py-2 text-sm z-20">
// //                 <MdEngineering className="inline mr-1" /> Global Leader Since 1995
// //               </div>
// //             </div>
// //             <div className="animate-fadeRight">
// //               <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
// //                 Who We Are
// //               </div>
// //               <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
// //                 Global Hydrocarbon Engineering Leader
// //               </h2>
// //               <p className="text-gray-600 leading-relaxed mb-4">
// //                 Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
// //                 conglomerate comprising research, engineering, automation,
// //                 digitalization, manufacturing and construction firms spread across
// //                 the US, Europe, Middle East, Africa and Asia.
// //               </p>
// //               <p className="text-gray-600 leading-relaxed mb-4">
// //                 We serve the industry from our development centers in Houston and
// //                 Mumbai, with regional offices in Dubai, London and Port Harcourt.
// //               </p>
// //               <p className="text-gray-600 leading-relaxed">
// //                 Our main business areas are Oil & Gas Production, Petroleum Refining,
// //                 Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
// //                 low carbon impact processing solutions – termed as <span className="text-amber-600 font-semibold">Blue or Green</span>{" "}
// //                 versions of conventional Grey processes.
// //               </p>
// //               <div className="mt-8 flex flex-wrap gap-3">
// //                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
// //                   <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
// //                   <span className="text-sm text-gray-700">25+ Years Experience</span>
// //                 </div>
// //                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200">
// //                   <FaGlobeAmericas className="text-amber-500" />
// //                   <span className="text-sm text-gray-700">Global Presence</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Business Areas */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12 animate-fadeUp">
// //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Core Competencies</div>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
// //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
// //             <p className="text-gray-600 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
// //           </div>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {businessAreas.map((area, i) => (
// //               <div key={i} className="group relative bg-white rounded-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
// //                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
// //                 <div className="p-6">
// //                   <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500">
// //                     <area.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{area.title}</h3>
// //                   <p className="text-gray-600 text-sm">{area.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <p className="text-gray-600 text-center mt-10 max-w-3xl mx-auto bg-amber-50 rounded-xl p-5 border border-amber-200 animate-fadeUp delay-400">
// //             🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-amber-600">Blue</strong> and <strong className="text-amber-600">Green</strong> alternatives to conventional Grey processes.
// //           </p>
// //         </div>
// //       </section>

// //       {/* Full Project Lifecycle */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeUp">
// //           <div className="relative bg-amber-50 rounded-2xl p-8 border border-amber-200 text-center">
// //             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">Full‑Cycle Expertise</div>
// //             <p className="text-gray-700 leading-relaxed text-lg">Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Regional Leadership */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12 animate-fadeUp">
// //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Global Organization</div>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regional Leadership</h2>
// //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
// //             <p className="text-gray-600 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
// //           </div>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {regions.map((region, idx) => (
// //               <div key={idx} className="bg-white rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
// //                 <FaGlobeAmericas className="text-amber-500 text-4xl mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-1">{region.name}</h3>
// //                 <p className="text-gray-500 text-sm">{region.cities}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Infrastructure Section */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
// //           <div className="order-2 lg:order-1 animate-fadeLeft">
// //             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">Pyramid Group Company</div>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Engineering & Fabrication Excellence</h2>
// //             <div className="space-y-4">
// //               <div className="flex gap-3 items-start">
// //                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
// //                 <p className="text-gray-600"><strong className="text-gray-900">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-amber-600 font-semibold">1 million engineering man‑hours annually</span>.</p>
// //               </div>
// //               <div className="flex gap-3 items-start">
// //                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
// //                 <p className="text-gray-600"><strong className="text-gray-900">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-amber-600 font-semibold">1000 tons</span>.</p>
// //               </div>
// //             </div>
// //             <p className="text-gray-600 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
// //             <div className="mt-8 flex gap-4">
// //               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
// //                 <div className="text-2xl font-bold text-amber-600">1M+</div>
// //                 <div className="text-xs text-gray-500">Annual Man‑hours</div>
// //               </div>
// //               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200">
// //                 <div className="text-2xl font-bold text-amber-600">1000T</div>
// //                 <div className="text-xs text-gray-500">Load‑out Capacity</div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="relative group order-1 lg:order-2 animate-fadeRight">
// //             <div className="absolute inset-0 bg-gradient-to-bl from-amber-100 to-amber-50 rounded-2xl"></div>
// //             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Global Offices List */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 animate-fadeUp">
// //             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Global Footprint</h2>
// //             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mb-3"></div>
// //             <p className="text-gray-600">Strategic offices across five continents</p>
// //           </div>
// //           <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
// //             {offices.map((office, idx) => (
// //               <div key={idx} className="bg-white rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 group">
// //                 <MdLocationOn className="text-amber-500 text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
// //                 <p className="font-semibold text-gray-900">{office.city}</p>
// //                 <p className="text-gray-500 text-sm">{office.region}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Vision & Research */}
// //       <section className="py-20 bg-white relative overflow-hidden">
// //         <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50"></div>
// //         <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 animate-fadeUp">
// //           <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Our Purpose</div>
// //           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transforming Energy Tomorrow</h2>
// //           <div className="relative">
// //             <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-amber-200" />
// //             <p className="text-gray-600 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
// //             <div className="flex flex-wrap justify-center gap-6 mt-8">
// //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// //                 <FaBeaker className="text-amber-500" />
// //                 <span className="text-sm text-gray-700">Research Collaborations</span>
// //               </div>
// //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// //                 <MdFactory className="text-amber-500" />
// //                 <span className="text-sm text-gray-700">Pilot Plants for Green Hydrocarbons</span>
// //               </div>
// //               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200">
// //                 <FaSolarPanel className="text-amber-500" />
// //                 <span className="text-sm text-gray-700">Solar Power Integration</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section – Light yellow gradient (from-amber-200 via-amber-50 to-white) with bubbles */}
// //       <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
// //         {/* Floating bubbles (softer amber tones) */}
// //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //           {ctaBubbles.map((bubble) => (
// //             <div
// //               key={bubble.id}
// //               className="absolute rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-500/5"
// //               style={{
// //                 width: `${bubble.size}px`,
// //                 height: `${bubble.size}px`,
// //                 left: `${bubble.left}%`,
// //                 bottom: "-50px",
// //                 opacity: bubble.opacity * 0.6,
// //                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
// //                 animationDelay: `${bubble.delay}s`,
// //               }}
// //             />
// //           ))}
// //         </div>

// //         <div className="relative z-10 max-w-5xl mx-auto text-center">
// //           {/* Top Label */}
// //           <div className="flex items-center justify-center gap-2 mb-4">
// //             <span className="w-8 h-[2px] bg-amber-600"></span>
// //             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
// //               Let’s Build Together
// //             </span>
// //           </div>

// //           {/* Heading */}
// //           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
// //             Ready to Start Your <br /> Next Project?
// //           </h2>

// //           {/* Description */}
// //           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
// //             Partner with Pyramid E&C to deliver high-performance engineering solutions
// //             across oil & gas, energy transition, and industrial infrastructure.
// //           </p>

// //           {/* Single Button */}
// //           <Link
// //             to="/contact"
// //             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
// //           >
// //             Get in Touch →
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default PyramidGroup;



// import { useEffect, useRef, useState } from "react";
// import {
//   FaOilCan,
//   FaFlask,
//   FaWind,
//   FaLeaf,
//   FaGlobeAmericas,
//   FaMicrophoneAlt,
//   FaFlask as FaBeaker,
//   FaSolarPanel,
// } from "react-icons/fa";
// import { MdLocationOn, MdEngineering, MdFactory } from "react-icons/md";
// import { Link } from "react-router-dom";

// // ============================================================================
// // useInView hook for scroll animations
// // ============================================================================
// function useInView(options = {}) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2, ...options }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [options]);

//   return [ref, inView];
// }

// // ============================================================================
// // Animation styles (kept bubble animations for hero & CTA)
// // ============================================================================
// const animationStyles = `
//   @keyframes fadeUp {
//     0% { opacity: 0; transform: translateY(30px); }
//     100% { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes fadeLeft {
//     0% { opacity: 0; transform: translateX(-30px); }
//     100% { opacity: 1; transform: translateX(0); }
//   }
//   @keyframes fadeRight {
//     0% { opacity: 0; transform: translateX(30px); }
//     100% { opacity: 1; transform: translateX(0); }
//   }
//   @keyframes bubbleFloat {
//     0% { transform: translateY(0) scale(0.2); opacity: 0; }
//     20% { opacity: 0.6; }
//     80% { opacity: 0.4; }
//     100% { transform: translateY(-100vh) scale(1); opacity: 0; }
//   }
//   @keyframes float {
//     0% { transform: translateY(0px); }
//     50% { transform: translateY(-8px); }
//     100% { transform: translateY(0px); }
//   }
//   @keyframes pulseGlow {
//     0% { opacity: 0.3; transform: scale(1); }
//     50% { opacity: 0.8; transform: scale(1.2); }
//     100% { opacity: 0.3; transform: scale(1); }
//   }
//   @keyframes slideInLine {
//     0% { width: 0; }
//     100% { width: 60px; }
//   }
//   @keyframes rotateIcon {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
//   .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//   .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//   .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//   .delay-100 { animation-delay: 0.1s; }
//   .delay-200 { animation-delay: 0.2s; }
//   .float-animation { animation: float 4s ease-in-out infinite; }
//   .pulse-animation { animation: pulseGlow 2s ease-in-out infinite; }
//   .slide-line { animation: slideInLine 0.6s ease-out forwards; }
//   .hover-rotate:hover svg { animation: rotateIcon 0.6s ease-in-out; }
// `;

// const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i,
//     size: Math.random() * sizeRange + baseSize,
//     left: Math.random() * 100,
//     delay: Math.random() * 15,
//     duration: Math.random() * 10 + 8,
//     opacity: Math.random() * 0.3 + 0.2,
//   }));
// };

// const PyramidGroup = () => {
//   const businessAreas = [
//     { icon: FaOilCan, title: "Oil & Gas Production", description: "Efficient upstream solutions with reduced carbon footprint" },
//     { icon: FaFlask, title: "Petroleum Refining", description: "Advanced refining processes for maximum yield" },
//     { icon: FaWind, title: "Natural Gas Reforming", description: "Low-emission hydrogen and syngas production" },
//     { icon: FaLeaf, title: "Bio Chemicals", description: "Sustainable bio-based chemical solutions" },
//   ];

//   const regions = [
//     { name: "Americas", cities: "Houston, USA" },
//     { name: "Europe", cities: "London, UK" },
//     { name: "Middle East & Africa", cities: "Dubai, UAE · Port Harcourt, Nigeria" },
//     { name: "Asia Pacific", cities: "Mumbai, India" },
//   ];

//   const offices = [
//     { city: "Houston, USA", region: "Americas HQ" },
//     { city: "Mumbai, India", region: "Asia Development Center" },
//     { city: "Dubai, UAE", region: "Middle East Hub" },
//     { city: "London, UK", region: "European Operations" },
//     { city: "Port Harcourt, Nigeria", region: "Africa Office" },
//   ];

//   const heroBubbles = generateBubbles(18, 15, 50);
//   const ctaBubbles = generateBubbles(22, 10, 45);

//   // Refs for animated sections
//   const [introRef, introInView] = useInView();
//   const [businessRef, businessInView] = useInView();
//   const [lifecycleRef, lifecycleInView] = useInView();
//   const [regionalRef, regionalInView] = useInView();
//   const [infraRef, infraInView] = useInView();
//   const [footprintRef, footprintInView] = useInView();
//   const [visionRef, visionInView] = useInView();
//   const [ctaRef, ctaInView] = useInView();

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* Hero Section – UNCHANGED (exactly as original) */}
//       <section className="relative overflow-hidden text-white">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {heroBubbles.map((bubble) => (
//             <div
//               key={bubble.id}
//               className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
//               style={{
//                 width: `${bubble.size}px`,
//                 height: `${bubble.size}px`,
//                 left: `${bubble.left}%`,
//                 bottom: "-50px",
//                 opacity: bubble.opacity,
//                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
//                 animationDelay: `${bubble.delay}s`,
//               }}
//             />
//           ))}
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>About</span><span>›</span>
//             <span className="text-amber-400 font-medium">Pyramid E&C Group</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//             Pyramid{" "}
//             <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
//               E&C Group
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
//             Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
//           </p>
//         </div>
//       </section>

//       {/* ========== INTRO SECTION – Redesigned with floating elements ========== */}
//       <section className="py-20 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             ref={introRef}
//             className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
//               introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                 alt="Pyramid Group Engineering Facility"
//                 className="rounded-2xl object-cover w-full h-[450px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-lg px-4 py-2 text-sm z-20 shadow-lg float-animation">
//                 <MdEngineering className="inline mr-1" /> Global Leader Since 1995
//               </div>
//             </div>
//             <div>
//               <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
//                 Who We Are
//               </div>
//               <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
//                 Global Hydrocarbon Engineering Leader
//               </h2>
//               <div className="space-y-4">
//                 <p className="text-gray-600 leading-relaxed">
//                   Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
//                   conglomerate comprising research, engineering, automation,
//                   digitalization, manufacturing and construction firms spread across
//                   the US, Europe, Middle East, Africa and Asia.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   We serve the industry from our development centers in Houston and
//                   Mumbai, with regional offices in Dubai, London and Port Harcourt.
//                 </p>
//                 <p className="text-gray-600 leading-relaxed">
//                   Our main business areas are Oil & Gas Production, Petroleum Refining,
//                   Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
//                   low carbon impact processing solutions – termed as <span className="text-amber-600 font-semibold">Blue or Green</span>{" "}
//                   versions of conventional Grey processes.
//                 </p>
//               </div>
//               <div className="mt-8 flex flex-wrap gap-3">
//                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 hover:bg-amber-100 transition">
//                   <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm text-gray-700">25+ Years Experience</span>
//                 </div>
//                 <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 hover:bg-amber-100 transition">
//                   <FaGlobeAmericas className="text-amber-500" />
//                   <span className="text-sm text-gray-700">Global Presence</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== BUSINESS AREAS – Timeline with staggered reveal ========== */}
//       <section className="py-20 bg-gray-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 animate-fadeUp">
//             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Core Competencies</div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 slide-line"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
//           </div>

//           <div
//             ref={businessRef}
//             className={`transition-all duration-700 ${
//               businessInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="relative">
//               {/* Central timeline line */}
//               <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 hidden md:block"></div>

//               <div className="space-y-12 md:space-y-0">
//                 {businessAreas.map((area, i) => (
//                   <div
//                     key={i}
//                     className={`relative flex flex-col md:flex-row items-start gap-6 ${
//                       i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                     } group`}
//                     style={{ transitionDelay: `${i * 0.1}s` }}
//                   >
//                     {/* Timeline dot */}
//                     <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110 shadow-md">
//                       <area.icon className="text-xl text-amber-600 group-hover:text-white" />
//                     </div>

//                     {/* Content */}
//                     <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
//                       <div className="border-b-2 border-amber-200 pb-4 group-hover:border-amber-400 transition-colors">
//                         <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
//                           {area.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <p className="text-gray-600 text-center mt-12 max-w-3xl mx-auto bg-amber-50 rounded-xl p-5 border border-amber-200">
//             🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-amber-600">Blue</strong> and <strong className="text-amber-600">Green</strong> alternatives to conventional Grey processes.
//           </p>
//         </div>
//       </section>

//       {/* ========== FULL PROJECT LIFECYCLE – Redesigned with animated underline ========== */}
//       <section className="py-16 bg-white">
//         <div
//           ref={lifecycleRef}
//           className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
//             lifecycleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="relative border-l-4 border-amber-400 pl-6 py-2">
//             <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ========== REGIONAL LEADERSHIP – Grid with pulse rings ========== */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 animate-fadeUp">
//             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Global Organization</div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regional Leadership</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 slide-line"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
//           </div>

//           <div
//             ref={regionalRef}
//             className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
//               regionalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             {regions.map((region, idx) => (
//               <div key={idx} className="relative group text-center">
//                 <div className="relative inline-block">
//                   <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping opacity-75 group-hover:opacity-100"></div>
//                   <div className="relative w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-all duration-300 shadow-md">
//                     <FaGlobeAmericas className="text-3xl text-amber-600 group-hover:text-white" />
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">{region.name}</h3>
//                 <p className="text-gray-500 text-sm">{region.cities}</p>
//                 {idx < 3 && (
//                   <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 border-t-2 border-dotted border-amber-300 -z-10"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== INFRASTRUCTURE SECTION – Redesigned with split layout and icon animations ========== */}
//       <section className="py-20 bg-white">
//         <div
//           ref={infraRef}
//           className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
//             infraInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="order-2 lg:order-1">
//             <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">Pyramid Group Company</div>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Engineering & Fabrication Excellence</h2>
//             <div className="space-y-5">
//               <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
//                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 group-hover:scale-150 transition"></div>
//                 <p className="text-gray-600"><strong className="text-gray-900">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-amber-600 font-semibold">1 million engineering man‑hours annually</span>.</p>
//               </div>
//               <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
//                 <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 group-hover:scale-150 transition"></div>
//                 <p className="text-gray-600"><strong className="text-gray-900">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-amber-600 font-semibold">1000 tons</span>.</p>
//               </div>
//             </div>
//             <p className="text-gray-600 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
//             <div className="mt-8 flex gap-4">
//               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
//                 <div className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition">1M+</div>
//                 <div className="text-xs text-gray-500">Annual Man‑hours</div>
//               </div>
//               <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
//                 <div className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition">1000T</div>
//                 <div className="text-xs text-gray-500">Load‑out Capacity</div>
//               </div>
//             </div>
//           </div>
//           <div className="relative group order-1 lg:order-2">
//             <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
//             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105" />
//           </div>
//         </div>
//       </section>

//       {/* ========== GLOBAL FOOTPRINT – Floating badges with staggered animation ========== */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 animate-fadeUp">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Global Footprint</h2>
//             <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mb-3 slide-line"></div>
//             <p className="text-gray-600">Strategic offices across five continents</p>
//           </div>

//           <div
//             ref={footprintRef}
//             className={`flex flex-wrap justify-center gap-6 transition-all duration-700 ${
//               footprintInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             {offices.map((office, idx) => (
//               <div
//                 key={idx}
//                 className="group relative bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 border border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-md float-animation"
//                 style={{ animationDelay: `${idx * 0.15}s` }}
//               >
//                 <div className="flex items-center gap-2 text-sm">
//                   <MdLocationOn className="text-amber-500 text-base group-hover:scale-110 transition-transform" />
//                   <span className="font-medium text-gray-800">{office.city}</span>
//                   <span className="text-gray-300 hidden sm:inline">•</span>
//                   <span className="text-gray-500 text-xs hidden sm:inline">{office.region}</span>
//                 </div>
//                 <span className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                   {office.region}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== VISION & RESEARCH – Redesigned with animated gradient border ========== */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50"></div>
//         <div
//           ref={visionRef}
//           className={`max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
//             visionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Our Purpose</div>
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transforming Energy Tomorrow</h2>
//           <div className="relative">
//             <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-amber-200 float-animation" />
//             <p className="text-gray-600 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
//             <div className="flex flex-wrap justify-center gap-6 mt-8">
//               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
//                 <FaBeaker className="text-amber-500 group-hover:rotate-12 transition" />
//                 <span className="text-sm text-gray-700">Research Collaborations</span>
//               </div>
//               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
//                 <MdFactory className="text-amber-500 group-hover:rotate-12 transition" />
//                 <span className="text-sm text-gray-700">Pilot Plants for Green Hydrocarbons</span>
//               </div>
//               <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
//                 <FaSolarPanel className="text-amber-500 group-hover:rotate-12 transition" />
//                 <span className="text-sm text-gray-700">Solar Power Integration</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== CTA SECTION – Redesigned with animated gradient and floating bubbles (unchanged except added scroll animation) ========== */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {ctaBubbles.map((bubble) => (
//             <div
//               key={bubble.id}
//               className="absolute rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-500/5"
//               style={{
//                 width: `${bubble.size}px`,
//                 height: `${bubble.size}px`,
//                 left: `${bubble.left}%`,
//                 bottom: "-50px",
//                 opacity: bubble.opacity * 0.6,
//                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
//                 animationDelay: `${bubble.delay}s`,
//               }}
//             />
//           ))}
//         </div>
//         <div
//           ref={ctaRef}
//           className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-700 ${
//             ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <span className="w-8 h-[2px] bg-amber-600"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
//               Let’s Build Together
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Ready to Start Your <br /> Next Project?
//           </h2>
//           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
//             Partner with Pyramid E&C to deliver high-performance engineering solutions
//             across oil & gas, energy transition, and industrial infrastructure.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             Get in Touch →
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PyramidGroup;


import { useEffect, useRef, useState } from "react";
import {
  FaOilCan,
  FaFlask,
  FaWind,
  FaLeaf,
  FaGlobeAmericas,
  FaMicrophoneAlt,
  FaFlask as FaBeaker,
  FaSolarPanel,
} from "react-icons/fa";
import {  MdEngineering, MdFactory } from "react-icons/md";
import { Link } from "react-router-dom";

// ============================================================================
// useInView hook for scroll animations
// ============================================================================
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

// ============================================================================
// Animation styles
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
  @keyframes bubbleFloat {
    0% { transform: translateY(0) scale(0.2); opacity: 0; }
    20% { opacity: 0.6; }
    80% { opacity: 0.4; }
    100% { transform: translateY(-100vh) scale(1); opacity: 0; }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }
  @keyframes pulseGlow {
    0% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
    100% { opacity: 0.3; transform: scale(1); }
  }
  @keyframes slideInLine {
    0% { width: 0; }
    100% { width: 60px; }
  }
  @keyframes rotateIcon {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .float-animation { animation: float 4s ease-in-out infinite; }
  .pulse-animation { animation: pulseGlow 2s ease-in-out infinite; }
  .slide-line { animation: slideInLine 0.6s ease-out forwards; }
  .hover-rotate:hover svg { animation: rotateIcon 0.6s ease-in-out; }
`;

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

  // const offices = [
  //   { city: "Houston, USA", region: "Americas HQ" },
  //   { city: "Mumbai, India", region: "Asia Development Center" },
  //   { city: "Dubai, UAE", region: "Middle East Hub" },
  //   { city: "London, UK", region: "European Operations" },
  //   { city: "Port Harcourt, Nigeria", region: "Africa Office" },
  // ];

  const heroBubbles = generateBubbles(18, 15, 50);
  const ctaBubbles = generateBubbles(22, 10, 45);

  // Refs for animated sections
  const [introRef, introInView] = useInView();
  const [businessRef, businessInView] = useInView();
  const [lifecycleRef, lifecycleInView] = useInView();
  const [regionalRef, regionalInView] = useInView();
  const [infraRef, infraInView] = useInView();
  const [footprintRef, footprintInView] = useInView();
  const [visionRef, visionInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – UNCHANGED */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
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
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">Pyramid E&C Group</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Pyramid{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              E&C Group
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Engineering the Future of Hydrocarbon Processing with Sustainable Innovation
          </p>
        </div>
      </section>

      {/* Intro Section – unchanged */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={introRef}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Pyramid Group Engineering Facility"
                className="rounded-2xl object-cover w-full h-[450px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white rounded-lg px-4 py-2 text-sm z-20 shadow-lg float-animation">
                <MdEngineering className="inline mr-1" /> Global Leader Since 1995
              </div>
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Global Hydrocarbon Engineering Leader
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Pyramid E&C group, founded in 1995, is a hydrocarbon engineering
                  conglomerate comprising research, engineering, automation,
                  digitalization, manufacturing and construction firms spread across
                  the US, Europe, Middle East, Africa and Asia.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We serve the industry from our development centers in Houston and
                  Mumbai, with regional offices in Dubai, London and Port Harcourt.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our main business areas are Oil & Gas Production, Petroleum Refining,
                  Natural Gas Reforming and Bio Chemicals, where we supply sustainable,
                  low carbon impact processing solutions – termed as <span className="text-amber-600 font-semibold">Blue or Green</span>{" "}
                  versions of conventional Grey processes.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 hover:bg-amber-100 transition">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 border border-amber-200 hover:bg-amber-100 transition">
                  <FaGlobeAmericas className="text-amber-500" />
                  <span className="text-sm text-gray-700">Global Presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas – unchanged */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeUp">
            <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Core Competencies</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Business Areas</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 slide-line"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Specialized expertise across the hydrocarbon value chain with focus on sustainability</p>
          </div>

          <div
            ref={businessRef}
            className={`transition-all duration-700 ${
              businessInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 hidden md:block"></div>
              <div className="space-y-12 md:space-y-0">
                {businessAreas.map((area, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row items-start gap-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } group`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110 shadow-md">
                      <area.icon className="text-xl text-amber-600 group-hover:text-white" />
                    </div>
                    <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                      <div className="border-b-2 border-amber-200 pb-4 group-hover:border-amber-400 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-center mt-12 max-w-3xl mx-auto bg-amber-50 rounded-xl p-5 border border-amber-200">
            🌱 We deliver sustainable, low carbon processing solutions including <strong className="text-amber-600">Blue</strong> and <strong className="text-amber-600">Green</strong> alternatives to conventional Grey processes.
          </p>
        </div>
      </section>

      {/* Full Project Lifecycle – unchanged */}
      <section className="py-16 bg-white">
        <div
          ref={lifecycleRef}
          className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            lifecycleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative border-l-4 border-amber-400 pl-6 py-2">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Pyramid E&C works with developers and asset owners across all project phases – starting with project management, technology provision, feasibility studies, FEED, EPC or EPCm services, and after‑sales support. We specialize in modular plants and have our own assembly and load‑out facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Leadership – unchanged */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeUp">
            <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Global Organization</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Regional Leadership</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-4 slide-line"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">To support our customers globally, Pyramid E&C is organized into four geographical regions, each led by competent engineering teams.</p>
          </div>

          <div
            ref={regionalRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              regionalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {regions.map((region, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping opacity-75 group-hover:opacity-100"></div>
                  <div className="relative w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 transition-all duration-300 shadow-md">
                    <FaGlobeAmericas className="text-3xl text-amber-600 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">{region.name}</h3>
                <p className="text-gray-500 text-sm">{region.cities}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 border-t-2 border-dotted border-amber-300 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section – unchanged */}
      <section className="py-20 bg-white">
        <div
          ref={infraRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            infraInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200">Pyramid Group Company</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Engineering & Fabrication Excellence</h2>
            <div className="space-y-5">
              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 group-hover:scale-150 transition"></div>
                <p className="text-gray-600"><strong className="text-gray-900">High Value Engineering Centre</strong> – Thane, Mumbai.<br />Capacity of <span className="text-amber-600 font-semibold">1 million engineering man‑hours annually</span>.</p>
              </div>
              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 group-hover:scale-150 transition"></div>
                <p className="text-gray-600"><strong className="text-gray-900">Modular Fabrication Yard</strong> – Mundra Port, Gujarat.<br />Load‑out capacity of <span className="text-amber-600 font-semibold">1000 tons</span>.</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 leading-relaxed">This creates a seamless value chain of Technology, Engineering, Material Management, Fabrication, Automation, Testing, Construction and Operation services.</p>
            <div className="mt-8 flex gap-4">
              <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
                <div className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition">1M+</div>
                <div className="text-xs text-gray-500">Annual Man‑hours</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-center flex-1 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
                <div className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition">1000T</div>
                <div className="text-xs text-gray-500">Load‑out Capacity</div>
              </div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-100 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Engineering Facility" className="rounded-2xl object-cover w-full h-[400px] relative z-10 border border-gray-200 transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
      </section>
{/* ========== GLOBAL FOOTPRINT – Globe with named location dots (fixed label positions) ========== */}
<section className="py-20 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 animate-fadeUp">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Global Footprint</h2>
      <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mb-3 slide-line"></div>
      <p className="text-gray-600">Strategic offices across five continents</p>
    </div>

    <div
      ref={footprintRef}
      className={`transition-all duration-700 ${
        footprintInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="relative flex justify-center">
          {/* Globe circle */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-amber-50 via-white to-amber-100 shadow-inner border border-amber-200">
            {/* Latitude / Longitude lines */}
            <div className="absolute inset-0 rounded-full border border-amber-200/50"></div>
            <div className="absolute inset-0 rounded-full border border-amber-200/30" style={{ width: '80%', height: '80%', margin: '10%' }}></div>
            <div className="absolute inset-0 rounded-full border border-amber-200/20" style={{ width: '60%', height: '60%', margin: '20%' }}></div>
            <div className="absolute inset-0 rounded-full border border-amber-200/10" style={{ width: '40%', height: '40%', margin: '30%' }}></div>
            
            {/* Horizontal and vertical guide lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-amber-200/40 transform -translate-y-1/2"></div>
            <div className="absolute top-1/4 left-0 w-full h-px bg-amber-200/20"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-amber-200/20"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-amber-200/40 transform -translate-x-1/2"></div>
            
            {/* Connection arcs */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
              <path d="M 80 140 Q 150 80 220 110" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
              <path d="M 220 110 Q 250 160 230 200" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
              <path d="M 230 200 Q 200 240 170 230" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
              <path d="M 170 230 Q 130 220 100 190" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
            </svg>

            {/* Location dots + visible labels (all labels now placed safely around the globe) */}
            
            {/* Houston – left side */}
            <div className="absolute flex items-center gap-2" style={{ left: '-30%', top: '42%' }}>
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-amber-400 rounded-full animate-ping opacity-40"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-sm font-medium text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">Houston</span>
            </div>

            {/* London – right side, no overlap with header */}
            <div className="absolute flex items-center gap-2" style={{ left: '100%', top: '30%' }}>
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-amber-400 rounded-full animate-ping opacity-40"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-sm font-medium text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">London</span>
            </div>

            {/* Dubai – top right */}
            <div className="absolute flex items-center gap-2" style={{ left: '85%', top: '15%' }}>
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-amber-400 rounded-full animate-ping opacity-40"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-sm font-medium text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">Dubai</span>
            </div>

            {/* Mumbai – bottom right */}
            <div className="absolute flex items-center gap-2" style={{ left: '95%', top: '70%' }}>
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-amber-400 rounded-full animate-ping opacity-40"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-sm font-medium text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">Mumbai</span>
            </div>

            {/* Port Harcourt – bottom center */}
            <div className="absolute flex items-center gap-2" style={{ left: '35%', top: '105%' }}>
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-amber-400 rounded-full animate-ping opacity-40"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full shadow-md"></div>
              </div>
              <span className="text-sm font-medium text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">Port Harcourt</span>
            </div>
          </div>
        </div>

        {/* Global reach badge */}
        <div className="text-center text-xs text-gray-400 mt-12">
          <span className="inline-block px-3 py-1 bg-white rounded-full shadow-sm">
            🌍 Connecting energy projects across the globe
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Vision & Research – unchanged */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-transparent to-amber-50"></div>
        <div
          ref={visionRef}
          className={`max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            visionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4">Our Purpose</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Transforming Energy Tomorrow</h2>
          <div className="relative">
            <FaMicrophoneAlt className="absolute -top-8 -left-8 text-6xl text-amber-200 float-animation" />
            <p className="text-gray-600 leading-relaxed text-lg mb-6">Our mission is to channelize our wealth of knowledge towards transforming conventional hydrocarbon processing facilities into lower carbon emission, sustainable and compact modular construction.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
                <FaBeaker className="text-amber-500 group-hover:rotate-12 transition" />
                <span className="text-sm text-gray-700">Research Collaborations</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
                <MdFactory className="text-amber-500 group-hover:rotate-12 transition" />
                <span className="text-sm text-gray-700">Pilot Plants for Green Hydrocarbons</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 hover:scale-105 transition-transform duration-300 border border-amber-200 group">
                <FaSolarPanel className="text-amber-500 group-hover:rotate-12 transition" />
                <span className="text-sm text-gray-700">Solar Power Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section – unchanged */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {ctaBubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full bg-gradient-to-tr from-amber-400/20 to-amber-500/5"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                bottom: "-50px",
                opacity: bubble.opacity * 0.6,
                animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
                animationDelay: `${bubble.delay}s`,
              }}
            />
          ))}
        </div>
        <div
          ref={ctaRef}
          className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-700 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Let’s Build Together
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Ready to Start Your <br /> Next Project?
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Partner with Pyramid E&C to deliver high-performance engineering solutions
            across oil & gas, energy transition, and industrial infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PyramidGroup;