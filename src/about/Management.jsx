// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaArrowRight,
//   FaLinkedinIn,
//   FaEnvelope,
//   FaUserTie,
//   FaBriefcase,
//   FaGraduationCap,
//   FaAward,
// } from "react-icons/fa";

// // ============================================================================
// // Custom hook: triggers once when element enters viewport
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
//   }, []);

//   return [ref, inView];
// }

// // ============================================================================
// // Team Member Card Component (with image and enhanced animations)
// // ============================================================================
// function TeamCard({ member, index }) {
//   const [ref, inView] = useInView();
//   const [hovered, setHovered] = useState(false);
//   const delay = index * 0.1;

//   return (
//     <div
//       ref={ref}
//       className="transition-all duration-700"
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(40px)",
//         transitionDelay: `${delay}s`,
//       }}
//     >
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl border transition-all duration-500 h-full overflow-hidden"
//         style={{
//           borderColor: hovered ? `${member.accent}60` : "rgba(255,255,255,0.07)",
//           transform: hovered ? "translateY(-8px)" : "translateY(0)",
//           boxShadow: hovered ? `0 25px 35px -12px ${member.accent}30` : "none",
//         }}
//       >
//         {/* Accent top bar */}
//         <div
//           className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
//           style={{
//             background: `linear-gradient(90deg, ${member.accent}, transparent)`,
//             opacity: hovered ? 1 : 0.4,
//           }}
//         />

//         <div className="p-6">
//           {/* Avatar with image and zoom animation */}
//           <div
//             className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 overflow-hidden"
//             style={{
//               background: `${member.accent}20`,
//               border: `2px solid ${member.accent}60`,
//               transform: hovered ? "scale(1.08)" : "scale(1)",
//             }}
//           >
//             {member.image ? (
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full rounded-full object-cover transition-transform duration-700"
//                 style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
//               />
//             ) : (
//               <FaUserTie className="text-4xl" style={{ color: member.accent }} />
//             )}
//           </div>

//           <h3 className="text-xl font-bold text-white text-center mb-1">
//             {member.name}
//           </h3>
//           <p
//             className="text-sm font-semibold text-center mb-3"
//             style={{ color: member.accent }}
//           >
//             {member.title}
//           </p>

//           <div className="flex flex-wrap justify-center gap-2 mb-4">
//             {member.experience && (
//               <span className="inline-flex items-center gap-1 text-xs bg-white/5 rounded-full px-2 py-1">
//                 <FaBriefcase className="text-[#F5B400] text-[10px]" />
//                 <span className="text-gray-400">{member.experience}</span>
//               </span>
//             )}
//             {member.education && (
//               <span className="inline-flex items-center gap-1 text-xs bg-white/5 rounded-full px-2 py-1">
//                 <FaGraduationCap className="text-[#F5B400] text-[10px]" />
//                 <span className="text-gray-400">{member.education}</span>
//               </span>
//             )}
//           </div>

//           <p className="text-gray-400 text-sm leading-relaxed text-center">
//             {member.description}
//           </p>

//           <div className="flex justify-center gap-3 mt-4">
//             {member.linkedin && (
//               <a
//                 href={member.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-[#F5B400]/20 hover:scale-110"
//                 style={{ color: member.accent }}
//               >
//                 <FaLinkedinIn size={14} />
//               </a>
//             )}
//             {member.email && (
//               <a
//                 href={`mailto:${member.email}`}
//                 className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-[#F5B400]/20 hover:scale-110"
//                 style={{ color: member.accent }}
//               >
//                 <FaEnvelope size={14} />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ============================================================================
// // Main Management Component
// // ============================================================================
// const Management = () => {
//   const [heroRef, heroInView] = useInView({ threshold: 0.1 });

//   // Team members with images (replace placeholder URLs with actual photos)
//   const teamMembers = [
//     {
//       name: "Shashank Karnik",
//       title: "Director Projects",
//       experience: "45+ years in Oil & Gas",
//       education: "Electronics Engineer, MS University",
//       description:
//         "Mr. Karnik brings over 45 years of experience in the Oil & Gas sector, specializing in managing large-scale EPC hydrocarbon projects, executing power and process plants, with a strong focus on safety, quality, and client satisfaction.",
//       accent: "#f97316",
//       image: "/Shashank-Karnik.jpg", 
//       linkedin: "https://linkedin.com/in/shashank-karnik",
//       email: "shashank.karnik@pyramid-ec.com",
//     },
//     {
//       name: "Millicent Herman",
//       title: "General Manager Sales",
//       experience: "25+ years in Construction",
//       education: "",
//       description:
//         "Ms. Herman brings 25 years of experience across business development, cost estimation, supply chain management, site coordination, and logistics in the US construction industry. Based in Houston, she is responsible for projects across the Americas, Caribbean, and Australia.",
//       accent: "#F5B400",
//       image: "/Millicent-Herman.jpg", 
//       linkedin: "https://linkedin.com/in/millicent-herman",
//       email: "millicent.herman@pyramid-ec.com",
//     },
//     {
//       name: "Anant Bajpai",
//       title: "Director Customer Success",
//       experience: "",
//       education: "Chemical Engineering, Georgia Tech",
//       description:
//         "Mr. Bajpai brings extensive experience in the hydrocarbon sector, working closely with facility owners across the Americas to understand business and technical requirements. He is a Chemical Engineering graduate from Georgia Institute of Technology.",
//       accent: "#34d399",
//       image: "/Anant-Bajpai.jpg", 
//       linkedin: "https://linkedin.com/in/ajay-bajpai",
//       email: "ajay.bajpai@pyramid-ec.com",
//     },
//     {
//       name: "Pankaj Kurade",
//       title: "Chief Human Resources Officer",
//       experience: "25+ years in Strategic HR",
//       education: "MBA, ITM Business School",
//       description:
//         "Mr. Kurade has over 25 years of experience as a Strategic HR Business Partner aligning people strategies with business growth alongside CEOs and leadership. He brings strong expertise in managing multi-cultural teams.",
//       accent: "#a855f7",
//       image: "/Pankaj-Kurade.jpg", 
//       linkedin: "https://linkedin.com/in/pankaj-kurade",
//       email: "pankaj.kurade@pyramid-ec.com",
//     },
//     {
//       name: "Ganeshprasad Karmalkar",
//       title: "Legal and Contracts Advisor",
//       experience: "22+ years in Corporate Law",
//       education: "LL.B., Symbiosis Law School",
//       description:
//         "Mr. Karmalkar has over 22 years of experience as a Legal Consultant in corporate law, litigation, compliance, and strategic advisory across industries. He has successfully handled high-value litigations.",
//       accent: "#fb923c",
//       image: "/Ganesh-karmalkar.jpg", 
//       linkedin: "https://linkedin.com/in/ganeshprasad-karmalkar",
//       email: "ganesh.karmalkar@pyramid-ec.com",
//     },
//     {
//       name: "Dharmaraj Yadav",
//       title: "Vice President Commercial",
//       experience: "20+ years in Finance",
//       education: "MFM, K.J. Somaiya Institute",
//       description:
//         "Mr. Yadav has over 20 years of experience in the finance domain, and holds a Master in Financial Management (MFM) from K.J. Somaiya Institute of Management Studies & Research under University of Mumbai.",
//       accent: "#ec4899",
//       image: "/Dharmraj-Yadav.jpg", 
//       linkedin: "https://linkedin.com/in/dharmaraj-yadav",
//       email: "dharmaraj.yadav@pyramid-ec.com",
//     },
//   ];

//   // Animation keyframes (matching Leadership component)
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
//     @keyframes shimmer {
//       0% { background-position: -200% center; }
//       100% { background-position: 200% center; }
//     }
//     @keyframes softFloat {
//       0% { transform: translateY(0px); }
//       50% { transform: translateY(-5px); }
//       100% { transform: translateY(0px); }
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
//     .animate-float {
//       animation: softFloat 4s ease-in-out infinite;
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

//       {/* Decorative background circles */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
//       </div>

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url('/background.png')` }}
//         />
//         <div className="absolute inset-0 bg-black/60" />

//         <div className="max-w-7xl mx-auto relative z-10 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span><span>Company</span><span>›</span>
//             <span className="text-[#F5B400] font-medium">Management Team</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
//             Meet Our{" "}
//             <span
//               className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
//               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
//             >
//               Management Team
//             </span>
//           </h1>
//           <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
//             A diverse group of industry veterans driving Pyramid E&C's vision with integrity, innovation, and technical excellence.
//           </p>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="py-20 px-6 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-3">
//               Leadership
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Committed to Excellence
//             </h2>
//             <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
//               Our leadership team combines decades of global experience to deliver world‑class engineering solutions.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {teamMembers.map((member, idx) => (
//               <TeamCard key={idx} member={member} index={idx} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats / Culture Section */}
//       <section className="py-16 px-6 relative z-10 border-t border-white/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all duration-300 hover:scale-105">
//               <FaAward className="text-4xl text-[#F5B400] mx-auto mb-3" />
//               <h4 className="text-2xl font-bold text-white">45+</h4>
//               <p className="text-gray-400 text-sm">Years of Combined Leadership Experience</p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all duration-300 hover:scale-105">
//               <FaBriefcase className="text-4xl text-[#F5B400] mx-auto mb-3" />
//               <h4 className="text-2xl font-bold text-white">700+</h4>
//               <p className="text-gray-400 text-sm">Projects Executed Globally</p>
//             </div>
//             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all duration-300 hover:scale-105">
//               <FaGraduationCap className="text-4xl text-[#F5B400] mx-auto mb-3" />
//               <h4 className="text-2xl font-bold text-white">Top Tier</h4>
//               <p className="text-gray-400 text-sm">Universities & Industry Expertise</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 border-t border-white/10 relative z-10">
//         <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//             Ready to work with our experts?
//           </h3>
//           <p className="text-gray-400 mb-8 max-w-lg mx-auto">
//             Connect with our leadership team to discuss how Pyramid E&C can drive your next project's success.
//           </p>
//           <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
//             Contact Leadership
//             <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Management;


import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight, FaLinkedinIn, FaEnvelope,
  FaUserTie, FaBriefcase, FaGraduationCap, FaAward,
} from "react-icons/fa";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

// All cards use gold accent — no blue/green/purple/orange/pink
const GOLD = "#F5B400";

function TeamCard({ member, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div ref={ref} className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transitionDelay: `${index * 0.1}s` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-2xl border transition-all duration-500 h-full overflow-hidden"
        style={{
          borderColor: hovered ? "rgba(245,180,0,0.50)" : "rgba(255,255,255,0.07)",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: hovered ? "0 25px 35px -12px rgba(245,180,0,0.25)" : "none",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
          style={{ background: "linear-gradient(90deg,#F5B400,transparent)", opacity: hovered ? 1 : 0.35 }} />

        <div className="p-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 overflow-hidden"
            style={{ background:"rgba(245,180,0,0.12)", border:"2px solid rgba(245,180,0,0.40)", transform: hovered ? "scale(1.08)" : "scale(1)" }}>
            {member.image ? (
              <img src={member.image} alt={member.name}
                className="w-full h-full rounded-full object-cover transition-transform duration-700"
                style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }} />
            ) : (
              <FaUserTie className="text-4xl text-[#F5B400]" />
            )}
          </div>

          <h3 className="text-xl font-bold text-white text-center mb-1">{member.name}</h3>
          <p className="text-sm font-semibold text-center mb-3 text-[#F5B400]">{member.title}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {member.experience && (
              <span className="inline-flex items-center gap-1 text-xs bg-white/5 rounded-full px-2 py-1">
                <FaBriefcase className="text-[#F5B400] text-[10px]" />
                <span className="text-gray-400">{member.experience}</span>
              </span>
            )}
            {member.education && (
              <span className="inline-flex items-center gap-1 text-xs bg-white/5 rounded-full px-2 py-1">
                <FaGraduationCap className="text-[#F5B400] text-[10px]" />
                <span className="text-gray-400">{member.education}</span>
              </span>
            )}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed text-center">{member.description}</p>

          <div className="flex justify-center gap-3 mt-4">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-[#F5B400]/20 hover:scale-110 text-[#F5B400]">
                <FaLinkedinIn size={14} />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-[#F5B400]/20 hover:scale-110 text-[#F5B400]">
                <FaEnvelope size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const animationStyles = `
  @keyframes fadeUp  { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft{ 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes fadeRight{0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  .animate-fadeUp  { animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft{ animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight{animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
`;

const Management = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  const teamMembers = [
    { name:"Shashank Karnik",      title:"Director Projects",            experience:"45+ years in Oil & Gas",     education:"Electronics Engineer, MS University",   description:"Mr. Karnik brings over 45 years of experience in the Oil & Gas sector, specializing in managing large-scale EPC hydrocarbon projects, executing power and process plants, with a strong focus on safety, quality, and client satisfaction.", image:"/Shashank-Karnik.jpg",   linkedin:"https://linkedin.com/in/shashank-karnik",      email:"shashank.karnik@pyramid-ec.com" },
    { name:"Millicent Herman",     title:"General Manager Sales",        experience:"25+ years in Construction",  education:"",                                      description:"Ms. Herman brings 25 years of experience across business development, cost estimation, supply chain management, site coordination, and logistics in the US construction industry. Based in Houston, she is responsible for projects across the Americas, Caribbean, and Australia.", image:"/Millicent-Herman.jpg",  linkedin:"https://linkedin.com/in/millicent-herman",     email:"millicent.herman@pyramid-ec.com" },
    { name:"Anant Bajpai",         title:"Director Customer Success",    experience:"",                           education:"Chemical Engineering, Georgia Tech",     description:"Mr. Bajpai brings extensive experience in the hydrocarbon sector, working closely with facility owners across the Americas to understand business and technical requirements. He is a Chemical Engineering graduate from Georgia Institute of Technology.", image:"/Anant-Bajpai.jpg",      linkedin:"https://linkedin.com/in/ajay-bajpai",          email:"ajay.bajpai@pyramid-ec.com" },
    { name:"Pankaj Kurade",        title:"Chief Human Resources Officer",experience:"25+ years in Strategic HR", education:"MBA, ITM Business School",               description:"Mr. Kurade has over 25 years of experience as a Strategic HR Business Partner aligning people strategies with business growth alongside CEOs and leadership. He brings strong expertise in managing multi-cultural teams.", image:"/Pankaj-Kurade.jpg",     linkedin:"https://linkedin.com/in/pankaj-kurade",        email:"pankaj.kurade@pyramid-ec.com" },
    { name:"Ganeshprasad Karmalkar",title:"Legal and Contracts Advisor", experience:"22+ years in Corporate Law",education:"LL.B., Symbiosis Law School",            description:"Mr. Karmalkar has over 22 years of experience as a Legal Consultant in corporate law, litigation, compliance, and strategic advisory across industries. He has successfully handled high-value litigations.", image:"/Ganesh-karmalkar.jpg",  linkedin:"https://linkedin.com/in/ganeshprasad-karmalkar",email:"ganesh.karmalkar@pyramid-ec.com" },
    { name:"Dharmaraj Yadav",      title:"Vice President Commercial",    experience:"20+ years in Finance",      education:"MFM, K.J. Somaiya Institute",            description:"Mr. Yadav has over 20 years of experience in the finance domain, and holds a Master in Financial Management (MFM) from K.J. Somaiya Institute of Management Studies & Research under University of Mumbai.", image:"/Dharmraj-Yadav.jpg",    linkedin:"https://linkedin.com/in/dharmaraj-yadav",      email:"dharmaraj.yadav@pyramid-ec.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <style>{animationStyles}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F5B400]/20 rounded-full blur-3xl animate-fadeLeft"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D99A00]/20 rounded-full blur-3xl animate-fadeRight delay-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#F5B400]/5 rounded-full blur-3xl animate-fadeUp delay-400"></div>
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-16 px-6 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url('/background.png')` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>Company</span><span>›</span>
            <span className="text-[#F5B400] font-medium">Management Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white animate-fadeUp delay-100">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#F5B400] to-[#FFC107] bg-clip-text text-transparent"
              style={{ backgroundSize:"200% auto", animation:"shimmer 3s linear infinite" }}>
              Management Team
            </span>
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto animate-fadeUp delay-200">
            A diverse group of industry veterans driving Pyramid E&C's vision with integrity, innovation, and technical excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-[#F5B400]/10 text-[#F5B400] text-sm font-semibold mb-3">Leadership</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Committed to Excellence</h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Our leadership team combines decades of global experience to deliver world‑class engineering solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => <TeamCard key={idx} member={member} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: FaAward,        value:"45+",     label:"Years of Combined Leadership Experience" },
              { icon: FaBriefcase,    value:"700+",    label:"Projects Executed Globally" },
              { icon: FaGraduationCap,value:"Top Tier",label:"Universities & Industry Expertise" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F5B400]/30 transition-all duration-300 hover:scale-105">
                <stat.icon className="text-4xl text-[#F5B400] mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#F5B400]/10 to-[#FFC107]/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to work with our experts?</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Connect with our leadership team to discuss how Pyramid E&C can drive your next project's success.</p>
          <button className="group inline-flex items-center gap-2 bg-[#F5B400] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#D99A00] shadow-lg shadow-[#F5B400]/25 hover:translate-y-[-2px]">
            Contact Leadership <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Management;