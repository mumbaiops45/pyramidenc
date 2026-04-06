// import React from "react";
// import {
//   FaLeaf,
//   FaRecycle,
//   FaHandshake,
//   FaShieldAlt,
//   FaNetworkWired,
//   FaArrowRight,
// } from "react-icons/fa";
// import { MdSecurity } from "react-icons/md";

// const GuidingPrinciples = () => {
//   const principles = [
//     {
//       title: "Environment",
//       icon: FaLeaf,
//       gradient: "from-green-500/20 to-emerald-500/20",
//       borderHover: "hover:border-green-500/50",
//       iconColor: "text-green-400",
//       items: [
//         "Reduction of Carbon Impact",
//         "Mobile process facilities",
//         "Remote operations",
//         "Performance maximization",
//         "Zero TRIR for several years",
//         "HSE System Certified to ISO 14001/45001",
//       ],
//     },
//     {
//       title: "Sustainability",
//       icon: FaRecycle,
//       gradient: "from-blue-500/20 to-cyan-500/20",
//       borderHover: "hover:border-blue-500/50",
//       iconColor: "text-blue-400",
//       items: [
//         "Renewable hydrocarbon resources",
//         "Research & Development / Innovation",
//         "Training and Skill development",
//         "Succession planning",
//         "Knowledge base management",
//         "Data Security certified to ISO 27001:2017",
//       ],
//     },
//     {
//       title: "Governance",
//       icon: FaHandshake,
//       gradient: "from-purple-500/20 to-pink-500/20",
//       borderHover: "hover:border-purple-500/50",
//       iconColor: "text-purple-400",
//       items: [
//         "Integrated Management System",
//         "FCPA-compliant business practices",
//         "Equal opportunity employer",
//         "Ethical treatment to business partners",
//         "Local content promotion",
//         "QMS certified to ISO 9001:2015",
//       ],
//     },
//   ];

//   // Custom CSS for immediate animations (no scroll trigger)
//   const animationStyles = `
//     @keyframes fadeUp {
//       0% {
//         opacity: 0;
//         transform: translateY(30px);
//       }
//       100% {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
//     @keyframes fadeLeft {
//       0% {
//         opacity: 0;
//         transform: translateX(-30px);
//       }
//       100% {
//         opacity: 1;
//         transform: translateX(0);
//       }
//     }
//     @keyframes fadeRight {
//       0% {
//         opacity: 0;
//         transform: translateX(30px);
//       }
//       100% {
//         opacity: 1;
//         transform: translateX(0);
//       }
//     }
//     @keyframes shimmer {
//       0% { background-position: -200% center; }
//       100% { background-position: 200% center; }
//     }
//     .animate-fadeUp {
//       animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//     }
//     .animate-fadeLeft {
//       animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//     }
//     .animate-fadeRight {
//       animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//     }
//     .delay-100 { animation-delay: 0.1s; }
//     .delay-200 { animation-delay: 0.2s; }
//     .delay-300 { animation-delay: 0.3s; }
//     .delay-400 { animation-delay: 0.4s; }
//     .delay-500 { animation-delay: 0.5s; }
//   `;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
//       <style>{animationStyles}</style>

//       {/* Background decorative elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
//       </div>

//       {/* Hero Banner */}
//       <section className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('/background.png')` }}
//         ></div>
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>About</span><span>›</span>
//             <span className="text-[#F5B400] font-medium">Guiding Principles</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
//             Our{" "}
//             <span
//               className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
//               style={{
//                 backgroundSize: "200% auto",
//                 animation: "shimmer 3s linear infinite",
//               }}
//             >
//               Guiding Principles
//             </span>
//           </h1>
//           <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
//             Environment, Sustainability, and Governance – integrated into everything we do.
//           </p>
//         </div>
//       </section>

//       {/* Intro Section – immediate animation */}
//       <section className="py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4 animate-fadeUp delay-100">
//             Our Priorities
//           </div>
//           <p className="text-gray-300 text-lg leading-relaxed animate-fadeUp delay-200">
//             As an integrator and developer of technical solutions for the hydrocarbon industry,
//             the tenets of <span className="text-[#F5B400] font-semibold">environment protection</span>,{" "}
//             <span className="text-[#F5B400] font-semibold">sustainability</span>, and{" "}
//             <span className="text-[#F5B400] font-semibold">good governance</span> are built into
//             our integrated management system – consistently driving the following initiatives.
//           </p>
//         </div>
//       </section>

//       {/* Three Pillars – cards animate immediately with staggered delays */}
//       <section className="py-12 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {principles.map((principle, idx) => (
//               <div
//                 key={idx}
//                 className={`group relative bg-gradient-to-br ${principle.gradient} bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${principle.borderHover} animate-fadeUp`}
//                 style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <div className="relative z-10">
//                   <div className={`p-3 rounded-xl bg-white/10 inline-block mb-4 ${principle.iconColor}`}>
//                     <principle.icon className="text-3xl" />
//                   </div>
//                   <h2 className="text-2xl font-bold mb-4">{principle.title}</h2>
//                   <ul className="space-y-3">
//                     {principle.items.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2 text-gray-300">
//                         <span className="text-[#F5B400] mt-1">▹</span>
//                         <span className="text-sm">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certification Badges – animate immediately */}
//       <section className="py-12 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-xl font-semibold mb-6 text-gray-200 animate-fadeUp delay-100">
//             Certified Excellence
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 hover:border-[#F5B400]/50 transition-all animate-fadeRight delay-200">
//               <MdSecurity className="text-[#F5B400] text-lg" />
//               <span className="text-sm font-medium">ISO 9001:2015 (QMS)</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 hover:border-[#F5B400]/50 transition-all animate-fadeUp delay-300">
//               <FaShieldAlt className="text-[#F5B400] text-lg" />
//               <span className="text-sm font-medium">ISO 14001 / 45001 (HSE)</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 hover:border-[#F5B400]/50 transition-all animate-fadeLeft delay-400">
//               <FaNetworkWired className="text-[#F5B400] text-lg" />
//               <span className="text-sm font-medium">ISO 27001:2017 (Data Security)</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action – animate immediately */}
//       <section className="py-20 px-6 border-t border-white/10">
//         <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/10 rounded-2xl p-10 border border-white/10 backdrop-blur-sm animate-fadeUp delay-200">
//           <h3 className="text-2xl font-bold mb-3">Committed to Responsible Engineering</h3>
//           <p className="text-gray-300 mb-6">
//             Our principles guide every project, partnership, and innovation.
//           </p>
//           <button className="group bg-[#F5B400] hover:bg-[#D99A00] text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#F5B400]/20 inline-flex items-center gap-2">
//             Learn More About Our Approach <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GuidingPrinciples;


import React from "react";
import {
  FaLeaf,
  FaRecycle,
  FaHandshake,
  FaShieldAlt,
  FaNetworkWired,
  FaArrowRight,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const GuidingPrinciples = () => {
  const principles = [
    {
      title: "Environment",
      icon: FaLeaf,
      items: [
        "Reduction of Carbon Impact",
        "Mobile process facilities",
        "Remote operations",
        "Performance maximization",
        "Zero TRIR for several years",
        "HSE System Certified to ISO 14001/45001",
      ],
    },
    {
      title: "Sustainability",
      icon: FaRecycle,
      items: [
        "Renewable hydrocarbon resources",
        "Research & Development / Innovation",
        "Training and Skill development",
        "Succession planning",
        "Knowledge base management",
        "Data Security certified to ISO 27001:2017",
      ],
    },
    {
      title: "Governance",
      icon: FaHandshake,
      items: [
        "Integrated Management System",
        "FCPA-compliant business practices",
        "Equal opportunity employer",
        "Ethical treatment to business partners",
        "Local content promotion",
        "QMS certified to ISO 9001:2015",
      ],
    },
  ];

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
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <style>{animationStyles}</style>

      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
      </div>

      {/* Hero Banner */}
      <section className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/background.png')` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-[#F5B400] font-medium">Guiding Principles</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-[#F5B400] via-[#FFC107] to-[#F5B400] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Guiding Principles
            </span>
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
            Environment, Sustainability, and Governance – integrated into everything we do.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-[#F5B400]/10 rounded-full text-[#F5B400] text-sm font-semibold mb-4 animate-fadeUp delay-100">
            Our Priorities
          </div>
          <p className="text-gray-300 text-lg leading-relaxed animate-fadeUp delay-200">
            As an integrator and developer of technical solutions for the hydrocarbon industry,
            the tenets of <span className="text-[#F5B400] font-semibold">environment protection</span>,{" "}
            <span className="text-[#F5B400] font-semibold">sustainability</span>, and{" "}
            <span className="text-[#F5B400] font-semibold">good governance</span> are built into
            our integrated management system – consistently driving the following initiatives.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-[#F5B400]/10 to-[#D99A00]/5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-[#F5B400]/50 animate-fadeUp"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5B400]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* top accent bar */}
                <div
                  className="absolute top-0 left-4 right-4 h-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(90deg,#F5B400,transparent)" }}
                />
                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-[#F5B400]/10 border border-[#F5B400]/20 inline-block mb-4 text-[#F5B400] group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">{principle.title}</h2>
                  <ul className="space-y-3">
                    {principle.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#F5B400] mt-1">▹</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Badges */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-200 animate-fadeUp delay-100">
            Certified Excellence
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-[#F5B400]/8 backdrop-blur-sm border border-[#F5B400]/20 rounded-full px-5 py-2 hover:border-[#F5B400]/50 transition-all animate-fadeRight delay-200">
              <MdSecurity className="text-[#F5B400] text-lg" />
              <span className="text-sm font-medium">ISO 9001:2015 (QMS)</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F5B400]/8 backdrop-blur-sm border border-[#F5B400]/20 rounded-full px-5 py-2 hover:border-[#F5B400]/50 transition-all animate-fadeUp delay-300">
              <FaShieldAlt className="text-[#F5B400] text-lg" />
              <span className="text-sm font-medium">ISO 14001 / 45001 (HSE)</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F5B400]/8 backdrop-blur-sm border border-[#F5B400]/20 rounded-full px-5 py-2 hover:border-[#F5B400]/50 transition-all animate-fadeLeft delay-400">
              <FaNetworkWired className="text-[#F5B400] text-lg" />
              <span className="text-sm font-medium">ISO 27001:2017 (Data Security)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/10 rounded-2xl p-10 border border-white/10 backdrop-blur-sm animate-fadeUp delay-200">
          <h3 className="text-2xl font-bold mb-3">Committed to Responsible Engineering</h3>
          <p className="text-gray-300 mb-6">
            Our principles guide every project, partnership, and innovation.
          </p>
          <button className="group bg-[#F5B400] hover:bg-[#D99A00] text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#F5B400]/20 inline-flex items-center gap-2 hover:translate-y-[-2px]">
            Learn More About Our Approach <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GuidingPrinciples;