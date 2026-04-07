import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowRight, FaLinkedinIn, FaEnvelope,
  FaIndustry, FaRocket, FaChartLine,
  FaCogs, FaGraduationCap, FaBriefcase, FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";


// ✅ Fixed: Added 'options' to dependency array
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
  }, [options]);
  return [ref, inView];
}

function StatCounter({ value, label, suffix = "", delay }) {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = Math.ceil(value / 40);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(interval); } else setCount(start);
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}s` }}>
      <div className="text-3xl md:text-4xl font-black text-amber-500 leading-tight">{count}{suffix}</div>
      <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

// Light‑theme pillar card (white background, amber hover)
function PillarCard({ title, description, icon: Icon, index }) {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref} className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transitionDelay: `${index * 0.1}s` }}>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
        style={{
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
        <div className="p-6">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-amber-500 group-hover:shadow-lg">
            <Icon className="text-2xl text-amber-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
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

const animationStyles = `
  @keyframes fadeUp  { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
  @keyframes fadeLeft{ 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes fadeRight{0%{opacity:0;transform:translateX(30px)} 100%{opacity:1;transform:translateX(0)} }
  @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-20px) rotate(5deg)} }
  @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  .animate-fadeUp  { animation: fadeUp  0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeLeft{ animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-fadeRight{animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
  .animate-float   { animation: float 6s ease-in-out infinite; }
  .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
  .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s} .delay-500{animation-delay:0.5s}
`;

const Leadership = () => {
  const [visionRef, visionInView] = useInView();

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero Section – centered with background image and floating circles */}
      <section className="relative overflow-hidden text-white">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/background.png')` }} />
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Animated floating amber circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span><span>Company</span><span>›</span>
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

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Founder Spotlight (text left, image right) – light version */}
      <section className="py-20 px-6 relative z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4 animate-fadeLeft delay-100">Meet The Founder</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-fadeLeft delay-200">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Ashish Bajpai</span>
              </h2>
              <p className="text-xl text-amber-600 font-semibold mt-2 animate-fadeLeft delay-300">Chairman, Pyramid E&C Group</p>
              <p className="text-gray-600 mt-4 leading-relaxed animate-fadeLeft delay-400">
                Globally recognized leader in hydrocarbon and renewable energy technologies. Founder of a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-6 animate-fadeLeft delay-500">
                <a href="https://linkedin.com/in/ashish-bajpai" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a href="mailto:ashish.bajpai@pyramid-ec.com"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-100 transition-all hover:scale-110 text-amber-600">
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>
            <div className="flex justify-center animate-fadeRight delay-200">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-300/30 to-amber-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl shadow-amber-200 animate-float">
                  <img src="/Ashish-Bajpai.jpg" alt="Ashish Bajpai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Overview */}
      <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">Leadership Overview</div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Mr. Bajpai is a globally recognized leader in hydrocarbon and renewable energy technologies. As Founder of Pyramid E&C Group, he has built a world-class EPC organization delivering over 700 projects across Asia, the Middle East, Europe, and the USA.
          </p>
          <p className="text-gray-600 mt-4">He combines technical mastery, strategic vision, and operational excellence with active investment in technology and sports ventures, fostering innovation, performance, and long-term value creation.</p>
        </div>
      </section>

      {/* Vision & Strategic Direction */}
      <section ref={visionRef} className="py-20 px-6 relative z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 transition-all duration-700"
            style={{ opacity: visionInView ? 1 : 0, transform: visionInView ? "translateY(0)" : "translateY(30px)" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Strategic Direction</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4 mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Long-term leadership pillars driving Pyramid E&C's growth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, idx) => <PillarCard key={idx} {...pillar} index={idx} />)}
          </div>
        </div>
      </section>

      {/* Core Expertise & Skills */}
      <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaCogs className="text-3xl text-amber-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Expertise & Skills</h2>
              </div>
              <ul className="space-y-3">
                {coreSkills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-amber-500 text-sm flex-shrink-0" /><span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaChartLine className="text-3xl text-amber-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Investment Focus</h2>
              </div>
              <p className="text-gray-600 mb-4">Active investor in transformative industrial and energy technologies, leveraging his EPC expertise for strategic growth.</p>
              <ul className="space-y-3">
                {investmentFocus.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-amber-500 text-sm flex-shrink-0" /><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey & Education */}
      <section className="py-16 px-6 relative z-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-3xl text-amber-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Professional Journey</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                {["Established a globally respected EPC contractor", "Delivered integrated Technology, Services, Products, and Solutions", "Areas: Oil & Gas, Refining & Petrochemicals, Steam Methane Reforming, Bio-Ethanol & Renewable Fuels", "Teams in India & Houston; international operations from Houston, London, Dubai"].map((pt, i) => (
                  <li key={i} className="flex gap-3"><span className="text-amber-500 font-bold">•</span><span>{pt}</span></li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-amber-600">Early Career – Larsen & Toubro Limited (1991–1995)</h4>
                <p className="text-gray-600 text-sm mt-1">Worked in Hydrocarbon Technologies & Systems Group, Mumbai. Gained expertise in engineering design, automation, and project execution.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-3xl text-amber-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900">M.Tech. – Process Engineering & Design</h4>
                  <p className="text-amber-600 text-sm">IIT Delhi, India | 1991</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900">B.Tech. – Hydrocarbon Technologies</h4>
                  <p className="text-amber-600 text-sm">IIT Roorkee, India | 1989</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Career Table – light theme */}
      <section className="py-16 px-6 relative z-10 border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Global Career</h2>
            <div className="w-16 h-0.5 bg-amber-500 mx-auto rounded-full mt-3 mb-3"></div>
            <p className="text-gray-600">Leading complex projects across continents</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-6 text-amber-600 font-semibold text-base">Region</th>
                  <th className="text-left py-4 px-6 text-amber-600 font-semibold text-base">Role & Achievements</th>
                </tr>
              </thead>
              <tbody>
                {globalCareer.map((item, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition duration-200">
                    <td className="py-4 px-6 font-medium text-gray-900">{item.region}</td>
                    <td className="py-4 px-6 text-gray-600">{item.achievements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCounter value={700} label="Projects Delivered" suffix="+" delay={0.2} />
            <StatCounter value={25} label="Years of Leadership" suffix="+" delay={0.3} />
            <StatCounter value={15} label="Countries" suffix="+" delay={0.4} />
            <StatCounter value={4} label="Continents" suffix="" delay={0.5} />
          </div>
        </div>
      </section>

      {/* CTA Section – dark gradient (matching other pages) */}


      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-semibold mb-4">
            Partner with a Visionary Leader
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Ashish Bajpai</h2>
          <p className="text-gray-300 text-lg mb-8">
            Explore how Pyramid E&C can drive your next energy project.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Leadership
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Leadership;