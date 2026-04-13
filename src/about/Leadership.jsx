import React, { useEffect, useRef, useState } from "react";
import {
  FaLinkedinIn, FaEnvelope,
  FaIndustry, FaRocket, FaChartLine,
  FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
  FaGlobeAmericas, FaTrophy, FaAward,
  FaQuoteLeft
} from "react-icons/fa";
import { Link } from "react-router-dom";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
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
      className={`group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-5 group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300 group-hover:shadow-lg">
            <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">{title}</h3>
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
  @keyframes lineGrow { from{width:0} to{width:100%} }

  .animate-fadeUp   { animation: fadeUp   0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight{ animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
`;

const Leadership = () => {
  const [visionRef, visionInView] = useInView();
  const [overviewRef, overviewInView] = useInView();

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
    <div className="bg-white">
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
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Visionary direction, operational excellence, and a commitment to global impact.
          </p>
        </div>
      </section>

      {/* ── FOUNDER SPOTLIGHT ────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-amber-200 rounded-full opacity-50" />
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-sm font-semibold mb-4 animate-fadeLeft delay-100">
                  Meet The Founder
                </div>


                <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
                  Ashish 
                  <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                    Bajpai
                  </span>
                </h2>

                <p className="text-xl text-amber-600 font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
                <p className="text-gray-600 mt-6 leading-relaxed animate-fadeLeft delay-400">
                  Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
                </p>
                <div className="flex gap-4 mt-8 animate-fadeLeft delay-500">
                  <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a href="mailto:ashish.bajpai@pyramid-ec.com"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-fadeRight delay-200">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP OVERVIEW — REDESIGNED ─────────────────── */}
      <section
        ref={overviewRef}
        className="py-20 px-6 bg-gradient-to-r from-amber-50 to-white relative overflow-hidden"
      >
        {/* decorative corner accent */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 6, height: "100%",
          background: "linear-gradient(180deg,#F5C518,#d4a017,#F5C518)",
        }} />

        <div className="max-w-6xl mx-auto">

          {/* ── section label */}
          <div className="flex items-center gap-3 mb-12"
            style={{ opacity: overviewInView ? 1 : 0, transform: overviewInView ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s 0.05s" }}>
            <div style={{ width: 40, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#F5C518,#d4a017)" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#d4a017" }}>
              Leadership Overview
            </span>
          </div>

          {/* ── two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT — quote + bio paragraphs */}
            <div style={{ opacity: overviewInView ? 1 : 0, transform: overviewInView ? "translateX(0)" : "translateX(-24px)", transition: "all 0.75s 0.1s" }}>
              {/* quote block */}
              <div style={{
                position: "relative",
                background: "#fff",
                border: "1.5px solid #f5e88a",
                borderRadius: 16,
                padding: "28px 28px 28px 36px",
                marginBottom: 24,
                boxShadow: "0 4px 24px rgba(245,197,24,0.08)",
              }}>
                {/* left gold bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: 5, height: "100%",
                  background: "linear-gradient(180deg,#F5C518,#d4a017)",
                  borderRadius: "16px 0 0 16px",
                }} />
                <FaQuoteLeft style={{ fontSize: 28, color: "#F5C518", marginBottom: 14, opacity: 0.8 }} />
                <p style={{ fontSize: 15, color: "#333", lineHeight: 1.85, fontWeight: 400, margin: 0 }}>
                  Mr. Bajpai is a <strong style={{ color: "#b8860b", fontWeight: 700 }}>globally recognized leader</strong> in
                  hydrocarbon and renewable energy technologies. As Founder of{" "}
                  <strong style={{ color: "#b8860b", fontWeight: 700 }}>Pyramid E&C Group</strong>, he has built a
                  world-class EPC organization delivering over{" "}
                  <strong style={{ color: "#b8860b", fontWeight: 700 }}>700 projects</strong> across Asia, the Middle East,
                  Europe, and the USA.
                </p>
              </div>

              {/* second paragraph */}
              <div style={{
                background: "#fff",
                border: "1.5px solid #f0f0f0",
                borderRadius: 16,
                padding: "22px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.85, margin: 0 }}>
                  He combines <strong style={{ color: "#333", fontWeight: 600 }}>technical mastery</strong>,{" "}
                  <strong style={{ color: "#333", fontWeight: 600 }}>strategic vision</strong>, and{" "}
                  <strong style={{ color: "#333", fontWeight: 600 }}>operational excellence</strong> with active investment
                  in technology and sports ventures, fostering innovation, performance, and long-term value creation.
                </p>
              </div>
            </div>

            {/* RIGHT — 3 impact stat cards */}
            <div
              style={{
                display: "flex", flexDirection: "column", gap: 16,
                opacity: overviewInView ? 1 : 0, transform: overviewInView ? "translateX(0)" : "translateX(24px)",
                transition: "all 0.75s 0.18s"
              }}
            >
              {overviewStats.map(({ icon: Icon, value, sub }, i) => (
                <div key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: 18,
                    background: "#fff",
                    border: "1.5px solid #f0f0f0",
                    borderRadius: 14,
                    padding: "18px 22px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#F5C518"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,197,24,0.14)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#f0f0f0"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)"; }}
                >
                  {/* icon tile */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                    background: "linear-gradient(135deg,#F5C518,#d4a017)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(245,197,24,0.3)",
                  }}>
                    <Icon style={{ fontSize: 20, color: "#111" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "#111", lineHeight: 1.2 }}>{value}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 4, fontWeight: 500 }}>{sub}</div>
                  </div>
                  {/* right accent dot */}
                  <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#F5C518", flexShrink: 0 }} />
                </div>
              ))}

              {/* bottom highlight strip */}
              <div style={{
                background: "linear-gradient(135deg,#fffbea,#fff8dc)",
                border: "1.5px solid #f5e88a",
                borderRadius: 14,
                padding: "16px 22px",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{ width: 4, height: 40, background: "linear-gradient(180deg,#F5C518,#d4a017)", borderRadius: 4, flexShrink: 0 }} />
                <p style={{ fontSize: 13, color: "#7a5c00", lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                  Active investor in <strong>technology</strong> and <strong>sports ventures</strong>, driving innovation
                  and long-term value creation across industries.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VISION & STRATEGIC DIRECTION ────────────────────── */}
      <section ref={visionRef} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 transition-all duration-700"
            style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Strategic Direction</h2> */}
             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            Vision & Strategic{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Direction
            </span>
          </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mt-4 mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
          </div>
        </div>
      </section>

      {/* ── CORE EXPERTISE & INVESTMENT ─────────────────────── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaCogs className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise</h2>
              </div>
              <div className="space-y-4">
                {coreSkills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 transition-all hover:shadow-sm">
                    <FaCheckCircle className="text-amber-500 text-lg flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaChartLine className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Focus</h2>
              </div>
              <p className="text-gray-600 mb-6">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
              <div className="space-y-4">
                {investmentFocus.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 transition-all hover:shadow-sm">
                    <FaCheckCircle className="text-amber-500 text-lg flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL JOURNEY & EDUCATION ────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Journey</h2>
              </div>
              <div className="relative border-l-2 border-amber-200 ml-4 space-y-8">
                {[
                  { title: "Established global EPC contractor", desc: "Built a world-class organization recognized worldwide." },
                  { title: "Integrated solutions delivery", desc: "Technology, Services, Products, and Solutions across the value chain." },
                  { title: "Key sectors", desc: "Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels." },
                  { title: "Global operations", desc: "Teams in India & Houston; international operations from Houston, London, Dubai." },
                ].map((item, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500" />
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-100">
                <h4 className="font-semibold text-amber-600">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
                <p className="text-gray-600 text-sm mt-2">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-amber-200 transition-all shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg">M.Tech. – Process Engineering & Design</h4>
                  <p className="text-amber-600 font-medium">IIT Delhi, India | 1991</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-gray-100 hover:border-amber-200 transition-all shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg">B.Tech. – Hydrocarbon Technologies</h4>
                  <p className="text-amber-600 font-medium">IIT Roorkee, India | 1989</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL CAREER ───────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            Global{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Career
            </span>
          </h2>

            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3" />
            <p className="text-gray-600">Leading complex projects across continents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {globalCareer.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-amber-200 transition-all hover:shadow-md group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <FaGlobeAmericas className="text-xl text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.region}</h3>
                    <p className="text-gray-600 text-sm">{item.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600" />
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Partner with a Visionary Leader
            </span>
          </div>
         
<h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Connect with{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Ashish Bajpai
            </span>
          </h2>
          
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Explore how Pyramid E&C can drive your next energy project.
          </p>
          <Link to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg">
            Contact Leadership →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Leadership;