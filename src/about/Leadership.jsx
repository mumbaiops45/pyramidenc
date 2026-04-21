import React, { useEffect, useRef, useState } from "react";
import {
  FaLinkedinIn, FaEnvelope,
  FaIndustry, FaRocket, FaChartLine,
  FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
  FaGlobeAmericas, FaTrophy, FaAward,
  FaQuoteLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";

// ============================================================
// Continuous scroll‑triggered hook (observer stays alive)
// ============================================================
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function PillarCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="group transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 0.1}s`,
        transitionProperty: "opacity, transform",
      }}
    >
      <div className="relative h-full bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-4 sm:mb-5 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300 group-hover:shadow-lg">
            <Icon className="text-xl sm:text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

const visionPillars = [
  { title: "Industrial EPC Excellence", description: "Deliver world-class hydrocarbon & renewable projects with uncompromising quality and safety.", icon: FaIndustry },
  { title: "Technology Commercialization & Innovation", description: "Scale transformative industrial solutions that drive efficiency and sustainability.", icon: FaRocket },
  { title: "Strategic Capital Deployment", description: "Invest in technology and sports for lasting impact and long-term value creation.", icon: FaChartLine },
];

const coreSkills = [
  "Global Operations & Multi-Geography Leadership",
  "Technology Commercialization & Strategic Investments",
  "Hydrocarbon Process Plant Design & Execution",
  "Compact Reactor Systems",
];

const investmentFocus = [
  "Low-carbon technologies",
  "Process intensification, digitalization & automation",
];

const globalCareer = [
  { region: "Asia", achievements: "Led hydrocarbon projects with digitalization and automation across India & Southeast Asia." },
  { region: "Middle East", achievements: "Expanded Dubai operations, managing large-scale oil, gas, and petrochemical projects." },
  { region: "Europe", achievements: "Directed EPC and sustainability-focused projects in the UK & continental Europe." },
  { region: "United States", achievements: "Developed Houston operations, integrating renewable technologies and advanced process systems." },
];

const overviewStats = [
  { icon: FaGlobeAmericas, value: "4 Continents", sub: "15+ countries" },
  { icon: FaTrophy, value: "700+ Projects", sub: "Delivered with excellence" },
  { icon: FaAward, value: "25+ Years", sub: "Visionary leadership" },
];

const animationStyles = `
  :root {
    --primery: #f59e0b;
    --primery-dark: #d97706;
  }
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Poppins', sans-serif; }
  @keyframes fadeUp   { 0%{opacity:0;transform:translateY(30px)}  100%{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft { 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes fadeRight{ 0%{opacity:0;transform:translateX(30px)}  100%{opacity:1;transform:translateX(0)} }
  @keyframes bubbleFloat {
    0%   { transform:translateY(0) scale(0.2); opacity:0; }
    20%  { opacity:0.6; }
    80%  { opacity:0.4; }
    100% { transform:translateY(-100vh) scale(1); opacity:0; }
  }
  @keyframes shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
  .animate-fadeUp   { animation: fadeUp   0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight{ animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}

  /* Scroll‑triggered transition classes (inline styles will override) */
  .scroll-slide-left {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .scroll-slide-right {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .scroll-fade-up {
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

const Leadership = () => {
  // Refs for each text section (continuous animation)
  const [heroSubRef, heroSubInView] = useInView();
  const [founderLeftRef, founderLeftInView] = useInView();
  const [founderRightRef, founderRightInView] = useInView();
  const [overviewHeaderRef, overviewHeaderInView] = useInView();
  const [overviewLeftRef, overviewLeftInView] = useInView();
  const [overviewRightRef, overviewRightInView] = useInView();
  const [visionHeaderRef, visionHeaderInView] = useInView();
  const [expertiseRef, expertiseInView] = useInView();
  const [investmentRef, investmentInView] = useInView();
  const [journeyRef, journeyInView] = useInView();
  const [educationRef, educationInView] = useInView();
  const [globalCareerHeaderRef, globalCareerHeaderInView] = useInView();
  const [globalCareerRef, globalCareerInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  const generateBubbles = (count, baseSize = 20, sizeRange = 40) =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * sizeRange + baseSize,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 8,
      opacity: Math.random() * 0.3 + 0.2,
    }));

  const heroBubbles = generateBubbles(18, 15, 50);

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroBubbles.map((b) => (
            <div key={b.id} className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
              style={{
                width: b.size, height: b.size, left: `${b.left}%`, bottom: -50,
                opacity: b.opacity, animation: `bubbleFloat ${b.duration}s ease-in-out infinite`, animationDelay: `${b.delay}s`
              }} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full animate-fadeLeft">
            <span>Home</span><span>›</span><span>About</span><span>›</span>
            <span className="text-amber-400 font-medium">Leadership</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}>
              Leadership
            </span>
          </h1>
          <p
            ref={heroSubRef}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed scroll-fade-up"
            style={{
              opacity: heroSubInView ? 1 : 0,
              transform: heroSubInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Visionary direction, operational excellence, and a commitment to global impact.
          </p>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ────────────────────────────────── */}
      <section className="py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-amber-200 rounded-full opacity-50" />
              <div className="relative z-10">
                <div
                  ref={founderLeftRef}
                  className="scroll-slide-left"
                  style={{
                    opacity: founderLeftInView ? 1 : 0,
                    transform: founderLeftInView ? "translateX(0)" : "translateX(-35px)",
                  }}
                >
                  <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-sm font-semibold mb-4">
                    Meet The Founder
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
                    Ashish{" "}
                    <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                      Bajpai
                    </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-amber-600 font-semibold mt-2">Chairman, Pyramid E&C Group</p>
                  <p className="text-gray-600 mt-6 leading-relaxed">
                    Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
                  </p>
                  <div className="flex gap-4 mt-8">
                    <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                      <FaLinkedinIn className="text-lg sm:text-xl" />
                    </a>
                    <a href="mailto:ashish.bajpai@pyramid-ec.com"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                      <FaEnvelope className="text-lg sm:text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={founderRightRef}
              className="flex justify-center order-1 md:order-2 scroll-slide-right"
              style={{
                opacity: founderRightInView ? 1 : 0,
                transform: founderRightInView ? "translateX(0)" : "translateX(35px)",
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/Ashish-Bajpai.jpg" 
                    alt="Ashish Bajpai" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP OVERVIEW ─────────────────────────────── */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-amber-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-[#F5C518] via-[#d4a017] to-[#F5C518]" />

        <div className="max-w-6xl mx-auto">
          <div
            ref={overviewHeaderRef}
            className="flex items-center gap-3 mb-8 md:mb-12 scroll-slide-left"
            style={{
              opacity: overviewHeaderInView ? 1 : 0,
              transform: overviewHeaderInView ? "translateX(0)" : "translateX(-35px)",
            }}
          >
            <div className="w-8 sm:w-10 h-0.5 rounded-full bg-gradient-to-r from-[#F5C518] to-[#d4a017]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] uppercase text-[#d4a017]">
              Leadership Overview
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div
              ref={overviewLeftRef}
              className="scroll-slide-left"
              style={{
                opacity: overviewLeftInView ? 1 : 0,
                transform: overviewLeftInView ? "translateX(0)" : "translateX(-35px)",
              }}
            >
              <div className="relative bg-white border border-[#f5e88a] rounded-2xl p-5 sm:p-6 md:p-7 mb-6 shadow-md">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F5C518] to-[#d4a017] rounded-l-2xl" />
                <FaQuoteLeft className="text-2xl sm:text-3xl text-[#F5C518] mb-3 sm:mb-4 opacity-80" />
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  Mr. Bajpai is a <strong className="text-amber-700">globally recognized leader</strong> in
                  hydrocarbon and renewable energy technologies. As Founder of{" "}
                  <strong className="text-amber-700">Pyramid E&C Group</strong>, he has built a
                  world-class EPC organization delivering over{" "}
                  <strong className="text-amber-700">700 projects</strong> across Asia, the Middle East,
                  Europe, and the USA.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  He combines <strong className="text-gray-800">technical mastery</strong>,{" "}
                  <strong className="text-gray-800">strategic vision</strong>, and{" "}
                  <strong className="text-gray-800">operational excellence</strong> with active investment
                  in technology and sports ventures, fostering innovation, performance, and long-term value creation.
                </p>
              </div>
            </div>

            <div
              ref={overviewRightRef}
              className="flex flex-col gap-4 scroll-slide-right"
              style={{
                opacity: overviewRightInView ? 1 : 0,
                transform: overviewRightInView ? "translateX(0)" : "translateX(35px)",
              }}
            >
              {overviewStats.map(({ icon: Icon, value, sub }, i) => (
                <div key={i}
                  className="flex items-center gap-4 sm:gap-5 bg-white border border-gray-100 rounded-xl p-4 sm:p-5 transition-all duration-250 hover:border-amber-400 hover:shadow-lg cursor-default"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 bg-gradient-to-br from-[#F5C518] to-[#d4a017] flex items-center justify-center shadow-md">
                    <Icon className="text-base sm:text-xl text-gray-900" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-extrabold text-gray-900">{value}</div>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">{sub}</div>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-[#F5C518] flex-shrink-0" />
                </div>
              ))}
              <div className="bg-gradient-to-r from-[#fffbea] to-[#fff8dc] border border-[#f5e88a] rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                <div className="w-1 h-10 sm:h-12 bg-gradient-to-b from-[#F5C518] to-[#d4a017] rounded-full flex-shrink-0" />
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed font-medium">
                  Active investor in <strong>technology</strong> and <strong>sports ventures</strong>, driving innovation
                  and long-term value creation across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & STRATEGIC DIRECTION ────────────────────── */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={visionHeaderRef}
            className="text-center mb-10 md:mb-12 scroll-fade-up"
            style={{
              opacity: visionHeaderInView ? 1 : 0,
              transform: visionHeaderInView ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Vision & Strategic{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Direction
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mt-4 mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">Long-term leadership pillars driving Pyramid E&C's growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
          </div>
        </div>
      </section>

      {/* ── CORE EXPERTISE & INVESTMENT ─────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div
              ref={expertiseRef}
              className="scroll-slide-left"
              style={{
                opacity: expertiseInView ? 1 : 0,
                transform: expertiseInView ? "translateX(0)" : "translateX(-35px)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaCogs className="text-lg sm:text-2xl text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Core Expertise</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 transition-all hover:shadow-sm">
                    <FaCheckCircle className="text-amber-500 text-base sm:text-lg flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              ref={investmentRef}
              className="scroll-slide-right"
              style={{
                opacity: investmentInView ? 1 : 0,
                transform: investmentInView ? "translateX(0)" : "translateX(35px)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaChartLine className="text-lg sm:text-2xl text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Investment Focus</h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-6">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
              <div className="space-y-3 sm:space-y-4">
                {investmentFocus.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 transition-all hover:shadow-sm">
                    <FaCheckCircle className="text-amber-500 text-base sm:text-lg flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL JOURNEY & EDUCATION ────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div
              ref={journeyRef}
              className="scroll-slide-left"
              style={{
                opacity: journeyInView ? 1 : 0,
                transform: journeyInView ? "translateX(0)" : "translateX(-35px)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaBriefcase className="text-lg sm:text-2xl text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Professional Journey</h2>
              </div>
              <div className="relative border-l-2 border-amber-200 ml-4 space-y-6 sm:space-y-8">
                {[
                  { title: "Established global EPC contractor", desc: "Built a world-class organization recognized worldwide." },
                  { title: "Integrated solutions delivery", desc: "Technology, Services, Products, and Solutions across the value chain." },
                  { title: "Key sectors", desc: "Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels." },
                  { title: "Global operations", desc: "Teams in India & Houston; international operations from Houston, London, Dubai." },
                ].map((item, i) => (
                  <div key={i} className="relative pl-5 sm:pl-6">
                    <div className="absolute -left-2 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-500" />
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-100">
                <h4 className="font-semibold text-amber-600 text-sm sm:text-base">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-2">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
              </div>
            </div>
            <div
              ref={educationRef}
              className="scroll-slide-right"
              style={{
                opacity: educationInView ? 1 : 0,
                transform: educationInView ? "translateX(0)" : "translateX(35px)",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaGraduationCap className="text-lg sm:text-2xl text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-white rounded-xl border border-gray-100 hover:border-amber-200 transition-all shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg">M.Tech. – Process Engineering & Design</h4>
                  <p className="text-amber-600 font-medium text-sm sm:text-base">IIT Delhi, India | 1991</p>
                </div>
                <div className="p-4 sm:p-5 bg-white rounded-xl border border-gray-100 hover:border-amber-200 transition-all shadow-sm">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg">B.Tech. – Hydrocarbon Technologies</h4>
                  <p className="text-amber-600 font-medium text-sm sm:text-base">IIT Roorkee, India | 1989</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL CAREER ───────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div
            ref={globalCareerHeaderRef}
            className="text-center mb-8 md:mb-10 scroll-fade-up"
            style={{
              opacity: globalCareerHeaderInView ? 1 : 0,
              transform: globalCareerHeaderInView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Global{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Career
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3" />
            <p className="text-gray-600 text-sm sm:text-base">Leading complex projects across continents</p>
          </div>
          <div
            ref={globalCareerRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
            style={{
              opacity: globalCareerInView ? 1 : 0,
              transform: globalCareerInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {globalCareer.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-amber-200 transition-all hover:shadow-md group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors flex-shrink-0">
                    <FaGlobeAmericas className="text-base sm:text-xl text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.region}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto text-center scroll-fade-up"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 sm:w-8 h-[2px] bg-amber-600" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[2px] sm:tracking-[3px] uppercase text-amber-700">
              Partner with a Visionary Leader
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Connect with{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Ashish Bajpai
            </span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Explore how Pyramid E&C can drive your next energy project.
          </p>
          <Link to="/contact"
            className="inline-flex px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg">
            Contact Leadership →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Leadership;