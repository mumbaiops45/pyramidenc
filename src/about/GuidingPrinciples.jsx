import React, { useEffect, useRef, useState } from "react";
import {
  FaLeaf,
  FaRecycle,
  FaHandshake,
  FaShieldAlt,
  FaNetworkWired,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
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
    :root {
      --primery: #f59e0b;
      --primery-dark: #d97706;
    }
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
    @keyframes slideLine {
      0% { width: 0; }
      100% { width: 60px; }
    }
    @keyframes scaleUp {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    .animate-scaleUp { animation: scaleUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .slide-line { animation: slideLine 0.6s ease-out forwards; }

    /* Scroll‑triggered transition classes */
    .scroll-slide-left {
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .scroll-slide-right {
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .scroll-fade-up {
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .scroll-scale {
      transition: opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
    }
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

  const heroBubbles = generateBubbles(18, 15, 50);
  const ctaBubbles = generateBubbles(22, 10, 45);

  // Refs for text animations
  const [introTextRef, introTextInView] = useInView();
  const [pillarsHeaderRef, pillarsHeaderInView] = useInView();
  const [pillarsRef, pillarsInView] = useInView();
  const [certRef, certInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{animationStyles}</style>

      {/* ── Hero (unchanged, uses CSS animations) ── */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
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
            <span className="text-amber-400 font-medium">Guiding Principles</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Our{" "}
            <span
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Guiding Principles
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Environment, Sustainability, and Governance – integrated into everything we do.
          </p>
        </div>
      </section>

      {/* ── Intro – slides from LEFT ── */}
      <section className="py-16 bg-gray-50">
        <div
          ref={introTextRef}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-slide-left"
          style={{
            opacity: introTextInView ? 1 : 0,
            transform: introTextInView ? "translateX(0)" : "translateX(-35px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Our Priorities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            What{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              Drives Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            As an integrator and developer of technical solutions for the hydrocarbon industry,
            the tenets of{" "}
            <span className="text-amber-600 font-semibold">environment protection</span>,{" "}
            <span className="text-amber-600 font-semibold">sustainability</span>, and{" "}
            <span className="text-amber-600 font-semibold">good governance</span> are built into
            our integrated management system – consistently driving the following initiatives.
          </p>
        </div>
      </section>

      {/* ── Three Pillars – header slides from RIGHT, cards scale up, list items stagger ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pillarsHeaderRef}
            className="text-center mb-14 scroll-slide-right"
            style={{
              opacity: pillarsHeaderInView ? 1 : 0,
              transform: pillarsHeaderInView ? "translateX(0)" : "translateX(35px)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              ESG Framework
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Core Pillars
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Three integrated pillars shaping every decision, partnership, and innovation we pursue.
            </p>
          </div>

          <div
            ref={pillarsRef}
            className="grid md:grid-cols-3 gap-6 md:gap-8 scroll-scale"
            style={{
              opacity: pillarsInView ? 1 : 0,
              transform: pillarsInView ? "scale(1)" : "scale(0.95)",
            }}
          >
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-7 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <div className="mb-5">
                  <div className="w-10 h-[3px] bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] rounded-full group-hover:w-full transition-all duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300 flex-shrink-0">
                    <principle.icon className="text-xl text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {principle.title}
                  </h2>
                </div>
                <ul className="space-y-2.5 pl-4 border-l-2 border-gray-200 group-hover:border-amber-400 transition-colors">
                  {principle.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-600 text-sm leading-relaxed transition-all duration-500"
                      style={{
                        opacity: pillarsInView ? 1 : 0,
                        transform: pillarsInView ? "translateX(0)" : "translateX(-15px)",
                        transitionDelay: `${idx * 0.15 + i * 0.05}s`,
                      }}
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 mb-0.5 align-middle" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certification Badges – fade up with scale ── */}
      <section
        className="py-16 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(245,158,11,0.12) 0%,transparent 70%)" }}
        />
        <div
          ref={certRef}
          className="max-w-4xl mx-auto text-center relative z-10 scroll-scale"
          style={{
            opacity: certInView ? 1 : 0,
            transform: certInView ? "scale(1)" : "scale(0.95)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Certified Excellence
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-50 mt-4 mb-2">
            Internationally{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Recognised Standards
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-3 mb-8 rounded-full" />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: MdSecurity, label: "ISO 9001:2015", sub: "Quality Management" },
              { icon: FaShieldAlt, label: "ISO 14001 / 45001", sub: "HSE System" },
              { icon: FaNetworkWired, label: "ISO 27001:2017", sub: "Data Security" },
            ].map(({ icon: Icon, label, sub }, idx) => (
              <div
                key={label}
                className="flex items-center gap-3 px-3 sm:px-6 py-3 rounded-xl cursor-default transition-all duration-300 border border-white/10 hover:border-amber-400/50 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  opacity: certInView ? 1 : 0,
                  transform: certInView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${idx * 0.1}s, transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${idx * 0.1}s`,
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(245,158,11,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-amber-400 text-base" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-100">{label}</p>
                  <p className="text-[11px] text-slate-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA – slides from LEFT ── */}
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
          className="relative z-10 max-w-5xl mx-auto text-center scroll-slide-left"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateX(0)" : "translateX(-35px)",
          }}
        >
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Committed to Responsible Engineering
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900 mt-4 mb-6">
            Our principles guide every{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              project, partnership, and innovation.
            </span>
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Learn more about how we integrate ESG into everything we do.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More About Our Approach →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GuidingPrinciples;