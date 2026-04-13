import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const animationStyles = `
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    0% { opacity: 0; transform: translateX(-30px); }
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
  @keyframes ripplePing {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(2.4); opacity: 0; }
  }
  .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
`;

const generateBubbles = (count, baseSize = 20, sizeRange = 40) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * sizeRange + baseSize,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 8,
    opacity: Math.random() * 0.3 + 0.2,
  }));

const newsData = [
  { id: 1, title: "HYDROBLUE® SMR 1.0 RELEASED", date: "JAN 10, 2026", shortDesc: "Pyramid E&C Group has developed Hydroblue® SMR, a novel inductive steam methane reforming technology that eliminates natural gas combustion, drastically reducing CO₂ emissions while improving hydrogen production efficiency.", category: "Innovation", icon: "🌊" },
  { id: 2, title: "FIRST COMMERCIAL SULFEX® UNIT DELIVERED", date: "DEC 04, 2025", shortDesc: "Pyramid E&C LLC delivers the first ever commercial unit i.e. Sulfex-1000 to AET. The unit will be deployed for advanced sulfur removal and environmental compliance.", category: "Milestone", icon: "⚙️" },
  { id: 3, title: "OFFSHORE TECHNOLOGY CONFERENCE 2025 #OTC2025", date: "FEB 11, 2025", shortDesc: "The Offshore Technology Conference (OTC) 2025 served as an exceptional platform to explore emerging technologies, industry trends, and collaborative opportunities in offshore energy.", category: "Event", icon: "🛢️" },
  { id: 4, title: "IEW INDIA ENERGY WEEK | New Delhi, India", date: "FEB 11, 2025", shortDesc: "Our company had an exceptional experience at IEW 2025, where we showcased our innovative solutions that are Modular, cost-effective, and tailored for rapid deployment.", category: "Event", icon: "🇮🇳" },
  { id: 5, title: "HOUSTON INNOVATION CENTRE", date: "AUG 01, 2025", shortDesc: "Pyramid E&C completed the land acquisition at Eldridge Parkway in the Energy Corridor for the proposed Innovation Center.", category: "Infrastructure", icon: "🏗️" },
  { id: 6, title: "SULFEX® TECHNOLOGY COMMERCIALIZATION", date: "JAN 18, 2025", shortDesc: "Pyramid has partnered with AET to build and install the first Sulfex™ plant in the USA.", category: "Partnership", icon: "🤝" },
  { id: 7, title: "INDIAN RESEARCH CENTRE INAUGURATION", date: "OCT 12, 2025", shortDesc: "We are proud to announce the inauguration of our facility for development of reactor prototypes and pilot plants for advanced hydrocarbon processing, carbon capture, and modular refining technologies in India.", category: "Infrastructure", icon: "🔬" },
  { id: 8, title: "REFINING INDIA CONFERENCE 2022", date: "OCT 12, 2022", shortDesc: "Ms. Kavita Bodh presented our Electric Reformer concept coupled with Carbon dioxide liquefaction system, showcasing breakthrough low-emission hydrogen and CO₂ management solutions.", category: "Event", icon: "🎤" },
  { id: 9, title: "DECARBONIZATION SOLUTIONS PORTFOLIO", date: "AUG 01, 2022", shortDesc: "Pyramid E&C offers several solutions to reduce carbon impact of hydrocarbon processing: Flared & Stranded Gas Solutions (Hydrogen, Methanol), modular carbon capture integration, and low-emission reforming technologies.", category: "Sustainability", icon: "🌿" },
  { id: 10, title: "STRANDED AND FLARED GAS SOLUTIONS LAUNCHED", date: "MAY 10, 2021", shortDesc: "Pyramid E&C now offers compact, modular solutions to monetize flared or stranded natural gas into Syngas and thereafter into valuable products like hydrogen, methanol, and clean fuels.", category: "Innovation", icon: "🔥" },
  { id: 11, title: "NEW RANGE OF OIL & GAS PRODUCTION SOLUTIONS", date: "FEB 02, 2021", shortDesc: "Pyramid E&C Solution development teams enhanced the range of production facilities to add modular, rapid-deployment oil & gas processing units for onshore and offshore applications.", category: "Product", icon: "⚡" },
  { id: 12, title: "PYRAMID E&C CELEBRATES SILVER JUBILEE", date: "AUG 15, 2020", shortDesc: "Pyramid E&C completes 25 years in business under the leadership of Ashish Bajpai, Founder and Chairman. Starting with a DNA of innovation and engineering excellence, the company has delivered over 1000 projects globally.", category: "Achievement", icon: "🎂" },
  { id: 13, title: "ENHANCEMENT IN THE RANGE OF MINI REFINERIES", date: "JUL 24, 2020", shortDesc: "Pyramid E&C solution teams expanded the portfolio of mini refineries to produce fuels up to Euro V standards, enabling cost-effective, modular refining for remote and emerging markets.", category: "Product", icon: "⛽" },
  { id: 14, title: "FUJAIRAH REFINERY PERFORMANCE TRIAL SUCCESSFUL", date: "JUN 02, 2020", shortDesc: "The 7500 BPD refinery supplied to Ecomar Energy Solutions in Fujairah was commissioned successfully and underwent rigorous performance trials, meeting all design specifications.", category: "Milestone", icon: "✅" },
  { id: 15, title: "INFRASTRUCTURE COMPLIANCE IN RESPONSE TO COVID-19", date: "MAY 03, 2020", shortDesc: "Pyramid E&C completed audit of its facilities and implemented several measures to reduce social transfer of virus, ensuring workforce safety while maintaining operational continuity.", category: "Operations", icon: "🦠" },
  { id: 16, title: "ENGINEERING FRAME AGREEMENT WITH TAQA", date: "OCT 21, 2019", shortDesc: "Pyramid E&C secured an engineering Master Service agreement with Taqa Atrush BV to provide comprehensive engineering and technical services for upstream and midstream assets.", category: "Partnership", icon: "📄" },
  { id: 17, title: "140 MTPA CARBON BLACK PLANT COMMISSIONED", date: "JUL 18, 2019", shortDesc: "The 140 MTPA Carbon Black plant engineered by Pyramid E&C is successfully commissioned by Bal Krishna Tyres at their Bhuj facility, delivering high-quality carbon black with optimized energy efficiency.", category: "Project", icon: "🏭" },
  { id: 18, title: "PYRAMID E&C, USA DELIVERS PROJECT #1000 TO P&G", date: "MAY 15, 2018", shortDesc: "The project #1000 for Pyramid E&C turns out to be for Procter & Gamble Oleochemicals facility at Sacramento, California, a new modular unit that underscores Pyramid's reliability and engineering excellence.", category: "Milestone", icon: "🎯" },
  { id: 19, title: "PYRAMID E&C, USA OBTAINS ISNET CERTIFICATION", date: "APR 05, 2017", shortDesc: "Pyramid E&C is now geared up to deliver full EPC services complying with US safety and quality standards after obtaining ISNetworld certification.", category: "Certification", icon: "📜" },
  { id: 20, title: "CENTENNIAL GAS PLANT DELIVERED", date: "MAR 10, 2016", shortDesc: "TSI had the full scope of Engineering, Procurement, Construction and Commissioning services. The plant is operating successfully, processing natural gas with high reliability.", category: "Project", icon: "⛽" },
  { id: 21, title: "PYRAMID E&C, USA ACQUIRES TSI, HOUSTON", date: "JUL 18, 2015", shortDesc: "Pyramid E&C completed the acquisition of Turnkey Specialists Inc., Houston (TSI). Founded in 1996, TSI has completed 270+ projects, strengthening Pyramid's modular execution capabilities in North America.", category: "Corporate", icon: "🏢" },
  { id: 22, title: "PYRAMID E&C, INDIA INAUGURATES ENGINEERING CENTRE", date: "SEP 04, 2014", shortDesc: "Pyramid E&C India inaugurated a new engineering centre of excellence, expanding process design, detailed engineering, and modular skid design capabilities for global energy projects.", category: "Infrastructure", icon: "🏛️" },
  { id: 23, title: "GKP AWARDS FEED CONTRACT TO PYRAMID E&C, ME", date: "NOV 11, 2013", shortDesc: "Pyramid E&C secured an engineering Master Service agreement with Gulf Keystone Partners Ltd. Erbil through a competitive tender, providing front-end engineering design (FEED) for key production facilities.", category: "Contract", icon: "✍️" },
  { id: 24, title: "MODULAR REFINERY AWARD TO PYRAMID E&C, ME", date: "JUL 02, 2012", shortDesc: "This unit will process medium heavy API 29° Crude oil and produce Naphtha, Diesel, Jet Fuel and Fuel oil for bunkering. The modular refinery is designed for rapid deployment and operational efficiency.", category: "Project", icon: "🛢️" },
  { id: 25, title: "PROJECT #500 DELIVERED TO DNO ASA, IRAQ", date: "OCT 10, 2011", shortDesc: "From its inception in 1995 Pyramid E&C achieved a significant milestone in delivering project #500, which happens to be the central processing facility for DNO ASA in Iraq.", category: "Milestone", icon: "🏆" },
  { id: 26, title: "MUNDRA MODULAR FABRICATION YARD COMPLETED", date: "AUG 10, 2010", shortDesc: "Pyramid E&C completes the construction of Modular Fabrication yard at Mundra Port & Special Economic Zone in Gujarat, enabling large-scale skid assembly and logistics for global project deliveries.", category: "Infrastructure", icon: "🚢" },
  { id: 27, title: "ACHILLES / FPAL JOINT QUALIFICATION SYSTEM REGISTERED", date: "MAR 21, 2009", shortDesc: "Pyramid E&C applied into Achilles / FPAL Joint Qualification System used by several energy companies, strengthening supplier credentials for North Sea and European operations.", category: "Certification", icon: "✅" },
];

const categoryColors = {
  Innovation: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Milestone: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Event: { bg: "rgba(99,102,241,0.15)", text: "#818cf8", border: "rgba(99,102,241,0.3)" },
  Infrastructure: { bg: "rgba(20,184,166,0.15)", text: "#2dd4bf", border: "rgba(20,184,166,0.3)" },
  Partnership: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Sustainability: { bg: "rgba(34,197,94,0.15)", text: "#4ade80", border: "rgba(34,197,94,0.3)" },
  Product: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Achievement: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Operations: { bg: "rgba(148,163,184,0.15)", text: "#94a3b8", border: "rgba(148,163,184,0.3)" },
  Contract: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Corporate: { bg: "rgba(99,102,241,0.15)", text: "#818cf8", border: "rgba(99,102,241,0.3)" },
  Certification: { bg: "rgba(34,197,94,0.15)", text: "#4ade80", border: "rgba(34,197,94,0.3)" },
  Project: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
};

const News = () => {
  const [newsRef, newsInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  const heroBubbles = generateBubbles(18, 15, 50);
  const ctaBubbles = generateBubbles(22, 10, 45);

  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));


  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* ── Hero — dark slate ── */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroBubbles.map((b) => (
            <div
              key={b.id}
              className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
              style={{
                width: `${b.size}px`, height: `${b.size}px`,
                left: `${b.left}%`, bottom: "-50px",
                opacity: b.opacity,
                animation: `bubbleFloat ${b.duration}s ease-in-out infinite`,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span>
            <span className="text-amber-400 font-medium">News & Achievements</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            News &{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Achievements
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Stay updated with Pyramid E&C's latest achievements and industry engagements, including
            global energy events, strategic partnerships, and key technological milestones shaping
            the future of sustainable hydrocarbon solutions.
          </p>
        </div>
      </section>



      {/* ── News Grid — light white/gray ── */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(160deg,#f8fafc 0%,#f1f5f9 40%,#e9eef5 100%)" }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Latest Updates
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Story So Far
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm">
              From landmark project deliveries to global conferences and technology breakthroughs — every milestone tells our story.
            </p>
          </div>

          <div
            ref={newsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sortedNews.map((item, idx) => {
              const col = categoryColors[item.category] || categoryColors.Innovation;
              return (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group transition-all duration-700"
                  style={{
                    opacity: newsInView ? 1 : 0,
                    transform: newsInView ? "translateY(0)" : "translateY(40px)",
                    transitionDelay: `${idx * 0.03}s`,
                  }}
                >
                  <div className="h-full bg-white rounded-2xl border border-slate-100 overflow-hidden
                                  hover:-translate-y-1 hover:shadow-xl hover:border-amber-200
                                  transition-all duration-300 flex flex-col">

                    {/* Amber top bar */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-amber-400 to-amber-600" />

                    <div className="p-5 flex flex-col flex-1">

                      {/* Icon row + category pill */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                          style={{ background: col.bg, border: `1px solid ${col.border}` }}>
                          {item.icon}
                        </div>
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full border"
                          style={{ background: col.bg, color: col.text, borderColor: col.border }}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {item.date}
                      </div>

                      {/* Title */}
                      <h3 className="text-[13.5px] font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-[11.5px] leading-relaxed line-clamp-3 flex-1">
                        {item.shortDesc}
                      </p>

                      {/* Read more */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-amber-600 text-[11px] font-semibold group-hover:gap-2 transition-all">
                          Read more
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA — dark slate + amber bubbles ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">

        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(245,158,11,0.1) 0%,transparent 70%)" }}
        />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {ctaBubbles.map((b) => (
            <div
              key={b.id}
              className="absolute rounded-full"
              style={{
                width: `${b.size}px`, height: `${b.size}px`,
                left: `${b.left}%`, bottom: "-50px",
                opacity: b.opacity * 0.4,
                background: "radial-gradient(circle,rgba(245,158,11,0.3),rgba(245,158,11,0.05))",
                animation: `bubbleFloat ${b.duration}s ease-in-out infinite`,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-700 ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Pill badge */}

          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Stay Connected
          </span>

          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mt-4 mb-4">
            <span className="text-gray-700">Follow our</span>{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              journey
            </span>
          </h2>

          <div className="w-16 h-[2px] bg-amber-500 mx-auto mb-6 rounded-full" />

          <p className="text-slate-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter for the latest updates on innovations, partnerships, and industry events.
          </p>

          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default News;