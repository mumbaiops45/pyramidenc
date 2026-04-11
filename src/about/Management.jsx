import React, { useEffect, useRef, useState } from "react";
import {
   FaLinkedinIn, FaEnvelope,
  FaUserTie, FaBriefcase, FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ============================================================
// Custom hook with correct dependency handling
// ============================================================
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

// ============================================================
// Team Card – with added lines and removed border-top
// ============================================================
function TeamCard({ member, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 h-full"
        style={{
          boxShadow: hovered 
            ? "0 20px 35px -12px rgba(245,180,0,0.3), 0 0 0 2px rgba(245,180,0,0.2)" 
            : "0 10px 25px -5px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          background: hovered 
            ? "linear-gradient(145deg, #fff8e7, #fffef5)" 
            : "white",
        }}
      >
        {/* Decorative corner accent */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 transition-all duration-500"
          style={{
            background: hovered 
              ? "radial-gradient(circle at 100% 0%, rgba(245,180,0,0.15), transparent 70%)"
              : "radial-gradient(circle at 100% 0%, rgba(245,180,0,0.05), transparent 70%)",
          }}
        />

        {/* Avatar section with gradient ring on hover */}
        <div className="relative pt-8 px-6">
          <div className="relative w-28 h-28 mx-auto">
            <div 
              className="absolute inset-0 rounded-full transition-all duration-500"
              style={{
                background: hovered 
                  ? "linear-gradient(135deg, #F5B400, #D97706)"
                  : "linear-gradient(135deg, #e5e7eb, #d1d5db)",
                opacity: hovered ? 1 : 0.3,
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-md">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
                />
              ) : (
                <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                  <FaUserTie className="text-4xl text-amber-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 
            className="text-xl font-bold mb-1 transition-colors duration-300"
            style={{ color: hovered ? "#D97706" : "#1f2937" }}
          >
            {member.name}
          </h3>
          <p className="text-sm font-semibold mb-3 text-amber-600">
            {member.title}
          </p>

          {/* Tags – side by side with whitespace-nowrap */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {member.experience && (
              <span className="inline-flex items-center gap-1 text-xs bg-amber-50 rounded-full px-2 py-1 border border-amber-200 whitespace-nowrap">
                <FaBriefcase className="text-amber-500 text-[10px]" />
                <span className="text-gray-600">{member.experience}</span>
              </span>
            )}
            {member.education && (
              <span className="inline-flex items-center gap-1 text-xs bg-amber-50 rounded-full px-2 py-1 border border-amber-200 whitespace-nowrap">
                <FaGraduationCap className="text-amber-500 text-[10px]" />
                <span className="text-gray-600">{member.education}</span>
              </span>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {member.description}
          </p>

          {/* Decorative line between description and social icons */}
          <div className="flex justify-center mt-5 mb-4">
            <div 
              className="w-12 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: hovered 
                  ? "linear-gradient(90deg, #F5B400, #D97706)"
                  : "#e5e7eb",
              }}
            />
          </div>

          {/* Social Icons – removed border-top */}
          <div className="flex justify-center gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: hovered ? "#F5B400" : "#f3f4f6",
                  color: hovered ? "white" : "#F5B400",
                }}
              >
                <FaLinkedinIn size={14} />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: hovered ? "#F5B400" : "#f3f4f6",
                  color: hovered ? "white" : "#F5B400",
                }}
              >
                <FaEnvelope size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div 
          className="h-1 w-full transition-all duration-500"
          style={{
            background: hovered 
              ? "linear-gradient(90deg, #F5B400, #D97706)"
              : "linear-gradient(90deg, #e5e7eb, #f3f4f6)",
          }}
        />
      </div>
    </div>
  );
}

// ============================================================
// Animation styles (including bubbleFloat)
// ============================================================
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
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
`;

// ============================================================
// Main Management Component (Light Theme)
// ============================================================
const Management = () => {
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

  const teamMembers = [
    {
      name: "Shashank Karnik",
      title: "Director Projects",
      experience: "45+ years in Oil & Gas",
      education: "Electronics Engineer, MS University",
      description:
        "Mr. Karnik brings over 45 years of experience in the Oil & Gas sector, specializing in managing large-scale EPC hydrocarbon projects, executing power and process plants, with a strong focus on safety, quality, and client satisfaction.",
      image: "/Shashank-Karnik.jpg",
      linkedin: "https://linkedin.com/in/shashank-karnik",
      email: "shashank.karnik@pyramid-ec.com",
    },
    {
      name: "Millicent Herman",
      title: "General Manager Sales",
      experience: "25+ years in Construction",
      education: "",
      description:
        "Ms. Herman brings 25 years of experience across business development, cost estimation, supply chain management, site coordination, and logistics in the US construction industry. Based in Houston, she is responsible for projects across the Americas, Caribbean, and Australia.",
      image: "/Millicent-Herman.jpg",
      linkedin: "https://linkedin.com/in/millicent-herman",
      email: "millicent.herman@pyramid-ec.com",
    },
    {
      name: "Anant Bajpai",
      title: "Director Customer Success",
      experience: "",
      education: "Chemical Engineering, Georgia Tech",
      description:
        "Mr. Bajpai brings extensive experience in the hydrocarbon sector, working closely with facility owners across the Americas to understand business and technical requirements. He is a Chemical Engineering graduate from Georgia Institute of Technology.",
      image: "/Anant-Bajpai.jpg",
      linkedin: "https://linkedin.com/in/ajay-bajpai",
      email: "ajay.bajpai@pyramid-ec.com",
    },
    {
      name: "Pankaj Kurade",
      title: "Chief Human Resources Officer",
      experience: "25+ years in Strategic HR",
      education: "MBA, ITM Business School",
      description:
        "Mr. Kurade has over 25 years of experience as a Strategic HR Business Partner aligning people strategies with business growth alongside CEOs and leadership. He brings strong expertise in managing multi-cultural teams.",
      image: "/Pankaj-Kurade.jpg",
      linkedin: "https://linkedin.com/in/pankaj-kurade",
      email: "pankaj.kurade@pyramid-ec.com",
    },
    {
      name: "Ganeshprasad Karmalkar",
      title: "Legal and Contracts Advisor",
      experience: "22+ years in Corporate Law",
      education: "LL.B., Symbiosis Law School",
      description:
        "Mr. Karmalkar has over 22 years of experience as a Legal Consultant in corporate law, litigation, compliance, and strategic advisory across industries. He has successfully handled high-value litigations.",
      image: "/Ganesh-karmalkar.jpg",
      linkedin: "https://linkedin.com/in/ganeshprasad-karmalkar",
      email: "ganesh.karmalkar@pyramid-ec.com",
    },
    {
      name: "Dharmaraj Yadav",
      title: "Vice President Commercial",
      experience: "20+ years in Finance",
      education: "MFM, K.J. Somaiya Institute",
      description:
        "Mr. Yadav has over 20 years of experience in the finance domain, and holds a Master in Financial Management (MFM) from K.J. Somaiya Institute of Management Studies & Research under University of Mumbai.",
      image: "/Dharmraj-Yadav.jpg",
      linkedin: "https://linkedin.com/in/dharmaraj-yadav",
      email: "dharmaraj.yadav@pyramid-ec.com",
    },
  ];

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – Navbar gradient + bubbles */}
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
            <span className="text-amber-400 font-medium">Management Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Meet Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Management Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            A diverse group of industry veterans driving Pyramid E&C's vision with integrity, innovation, and technical excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-3">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Committed to Excellence</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our leadership team combines decades of global experience to deliver world‑class engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – Light yellow gradient */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Ready to work with our experts?
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Connect with our leadership team
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Discuss how Pyramid E&C can drive your next project's success.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
          >
            Contact Leadership →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Management;