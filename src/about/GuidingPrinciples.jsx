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
// import { Link } from "react-router-dom";


// const GuidingPrinciples = () => {
//   const principles = [
//     {
//       title: "Environment",
//       icon: FaLeaf,
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

//   const animationStyles = `
//     @keyframes fadeUp {
//       0% { opacity: 0; transform: translateY(30px); }
//       100% { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes fadeLeft {
//       0% { opacity: 0; transform: translateX(-30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes fadeRight {
//       0% { opacity: 0; transform: translateX(30px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     @keyframes float {
//       0%, 100% { transform: translateY(0px) rotate(0deg); }
//       50% { transform: translateY(-20px) rotate(5deg); }
//     }
//     @keyframes shimmer {
//       0% { background-position: -200% center; }
//       100% { background-position: 200% center; }
//     }
//     .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//     .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//     .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
//     .animate-float { animation: float 6s ease-in-out infinite; }
//     .delay-100 { animation-delay: 0.1s; }
//     .delay-200 { animation-delay: 0.2s; }
//     .delay-300 { animation-delay: 0.3s; }
//     .delay-400 { animation-delay: 0.4s; }
//     .delay-500 { animation-delay: 0.5s; }
//   `;

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* Hero Section – with background image, overlay, and floating animated circles */}
//       <section className="relative overflow-hidden text-white">
//         {/* Background image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('/background.png')` }}
//         ></div>
//         {/* Dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/60 z-0"></div>

//         {/* Animated floating circles (same as Pyramid Group hero) */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
//           {/* Breadcrumb */}
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>About</span><span>›</span>
//             <span className="text-amber-400 font-medium">Guiding Principles</span>
//           </div>

//           {/* Title with shimmer */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//             Our{" "}
//             <span
//               className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent animate-shimmer"
//               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
//             >
//               Guiding Principles
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
//             Environment, Sustainability, and Governance – integrated into everything we do.
//           </p>
//         </div>

//         {/* Bottom fade to white */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
//       </section>

//       {/* Intro Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 animate-fadeUp delay-100">
//             Our Priorities
//           </div>
//           <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-200">
//             As an integrator and developer of technical solutions for the hydrocarbon industry,
//             the tenets of <span className="text-amber-600 font-semibold">environment protection</span>,{" "}
//             <span className="text-amber-600 font-semibold">sustainability</span>, and{" "}
//             <span className="text-amber-600 font-semibold">good governance</span> are built into
//             our integrated management system – consistently driving the following initiatives.
//           </p>
//         </div>
//       </section>

//       {/* Three Pillars – Light cards with amber accents */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             {principles.map((principle, idx) => (
//               <div
//                 key={idx}
//                 className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden animate-fadeUp"
//                 style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
//               >
//                 {/* Top accent bar */}
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

//                 <div className="p-6">
//                   <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
//                     <principle.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
//                     {principle.title}
//                   </h2>
//                   <ul className="space-y-3">
//                     {principle.items.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2 text-gray-600">
//                         <span className="text-amber-500 mt-1">▹</span>
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

//       {/* Certification Badges – Light theme */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h3 className="text-xl font-semibold mb-6 text-gray-800 animate-fadeUp delay-100">
//             Certified Excellence
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 hover:border-amber-400 hover:shadow-md transition-all animate-fadeRight delay-200">
//               <MdSecurity className="text-amber-500 text-lg" />
//               <span className="text-sm font-medium text-gray-700">ISO 9001:2015 (QMS)</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 hover:border-amber-400 hover:shadow-md transition-all animate-fadeUp delay-300">
//               <FaShieldAlt className="text-amber-500 text-lg" />
//               <span className="text-sm font-medium text-gray-700">ISO 14001 / 45001 (HSE)</span>
//             </div>
//             <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 hover:border-amber-400 hover:shadow-md transition-all animate-fadeLeft delay-400">
//               <FaNetworkWired className="text-amber-500 text-lg" />
//               <span className="text-sm font-medium text-gray-700">ISO 27001:2017 (Data Security)</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action – matching other pages */}


//       <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
//             Committed to Responsible Engineering
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Our principles guide every project, partnership, and innovation.</h2>
//           <p className="text-gray-300 text-lg mb-8">
//             Learn more about how we integrate ESG into everything we do.
//           </p>
//           <Link
//             to="/contact"
//             className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
//           >
//             Learn More About Our Approach
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </Link>
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
import { Link } from "react-router-dom";

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
    @keyframes bubbleFloat {
      0% {
        transform: translateY(0) scale(0.2);
        opacity: 0;
      }
      20% {
        opacity: 0.6;
      }
      80% {
        opacity: 0.4;
      }
      100% {
        transform: translateY(-100vh) scale(1);
        opacity: 0;
      }
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

  // Generate random bubbles for hero
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

  const heroBubbles = generateBubbles(18, 15, 50);

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – Navbar gradient + bubbles (no image) */}
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
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">Guiding Principles</span>
          </div>

          {/* Title with shimmer */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Guiding Principles
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Environment, Sustainability, and Governance – integrated into everything we do.
          </p>
        </div>

      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-semibold mb-4 animate-fadeUp delay-100">
            Our Priorities
          </div>
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-200">
            As an integrator and developer of technical solutions for the hydrocarbon industry,
            the tenets of <span className="text-amber-600 font-semibold">environment protection</span>,{" "}
            <span className="text-amber-600 font-semibold">sustainability</span>, and{" "}
            <span className="text-amber-600 font-semibold">good governance</span> are built into
            our integrated management system – consistently driving the following initiatives.
          </p>
        </div>
      </section>

      {/* Three Pillars – Light cards with amber accents */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden animate-fadeUp"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>

                <div className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
                    <principle.icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {principle.title}
                  </h2>
                  <ul className="space-y-3">
                    {principle.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-amber-500 mt-1">▹</span>
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

      {/* Certification Badges – Light theme */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 animate-fadeUp delay-100">
            Certified Excellence
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 hover:border-amber-400 hover:shadow-md transition-all animate-fadeRight delay-200">
              <MdSecurity className="text-amber-500 text-lg" />
              <span className="text-sm font-medium text-gray-700">ISO 9001:2015 (QMS)</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 hover:border-amber-400 hover:shadow-md transition-all animate-fadeUp delay-300">
              <FaShieldAlt className="text-amber-500 text-lg" />
              <span className="text-sm font-medium text-gray-700">ISO 14001 / 45001 (HSE)</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 hover:border-amber-400 hover:shadow-md transition-all animate-fadeLeft delay-400">
              <FaNetworkWired className="text-amber-500 text-lg" />
              <span className="text-sm font-medium text-gray-700">ISO 27001:2017 (Data Security)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action – Light yellow gradient (matching CTA component) */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Committed to Responsible Engineering
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Our principles guide every <br /> project, partnership, and innovation.
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Learn more about how we integrate ESG into everything we do.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
          >
            Learn More About Our Approach →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GuidingPrinciples;