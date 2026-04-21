// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     id: "sustainable",
//     eyebrow: "Environmental Excellence",
//     headline: "SUSTAINABLE",
//     desc: "Our technologies monetize carbon emissions, eliminate liquid effluents and enable renewable energy integration for economically viable hydrocarbon processing.",
//     bgFrom: "#0d1f2d",
//     bgVia: "#1a3a4f",
//     bgTo: "#0e2233",
//     image: "/renewable-energy-solutions.jpg",
//     SVGIllustration: () => (
//       <svg
//         viewBox="0 0 640 560"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
//       >
//         <circle cx="480" cy="120" r="220" fill="none" stroke="#4dd9ac" strokeWidth="0.5" />
//         <circle cx="480" cy="120" r="160" fill="none" stroke="#4dd9ac" strokeWidth="0.5" />
//         <circle cx="480" cy="120" r="100" fill="#1d9e75" opacity="0.15" />
//         <line x1="260" y1="120" x2="700" y2="120" stroke="#4dd9ac" strokeWidth="0.5" opacity="0.4" />
//         <line x1="480" y1="-100" x2="480" y2="340" stroke="#4dd9ac" strokeWidth="0.5" opacity="0.4" />
//         <circle cx="480" cy="120" r="6" fill="#4dd9ac" />
//         <circle cx="340" cy="120" r="4" fill="#4dd9ac" opacity="0.6" />
//         <circle cx="480" cy="-20" r="4" fill="#4dd9ac" opacity="0.6" />
//         <circle cx="580" cy="50" r="3" fill="#4dd9ac" opacity="0.5" />
//         <path d="M420 200 Q440 160 480 120 Q520 80 560 80" fill="none" stroke="#4dd9ac" strokeWidth="1" opacity="0.5" />
//       </svg>
//     ),
//   },
//   {
//     id: "modular",
//     eyebrow: "Global Mobility Design",
//     headline: "MODULAR",
//     desc: "Plants designed for global mobility, onshore and offshore. All process systems packaged in our fabrication yard and dispatched after successful integrity testing.",
//     bgFrom: "#1a1228",
//     bgVia: "#2d1f4a",
//     bgTo: "#18102e",
//     image: "/modular-Process.jpg",
//     SVGIllustration: () => (
//       <svg
//         viewBox="0 0 640 560"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
//       >
//         <rect x="320" y="60" width="180" height="120" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
//         <rect x="360" y="200" width="100" height="80" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
//         <rect x="470" y="200" width="80" height="80" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
//         <rect x="300" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
//         <rect x="400" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
//         <rect x="500" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
//         <line x1="410" y1="180" x2="410" y2="200" stroke="#9f8fe0" strokeWidth="0.5" opacity="0.5" />
//         <line x1="510" y1="180" x2="510" y2="200" stroke="#9f8fe0" strokeWidth="0.5" opacity="0.5" />
//         <circle cx="500" cy="120" r="5" fill="#9f8fe0" opacity="0.7" />
//         <circle cx="540" cy="100" r="3" fill="#9f8fe0" opacity="0.5" />
//       </svg>
//     ),
//   },
//   {
//     id: "digital",
//     eyebrow: "Industry 4.0 Ready",
//     headline: "DIGITAL",
//     desc: "Digital twin, real-time process optimization, and remote performance management capability provide total control to all stakeholders.",
//     bgFrom: "#0d1a2d",
//     bgVia: "#0f2545",
//     bgTo: "#091520",
//     image: "/images1.jpg",
//     SVGIllustration: () => (
//       <svg
//         viewBox="0 0 640 560"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
//       >
//         <path d="M460 80 L580 160 L580 320 L460 400 L340 320 L340 160 Z" fill="none" stroke="#6ab5f5" strokeWidth="0.5" />
//         <path d="M460 140 L540 190 L540 290 L460 340 L380 290 L380 190 Z" fill="#378add" opacity="0.08" />
//         <circle cx="460" cy="240" r="20" fill="#378add" opacity="0.3" />
//         <circle cx="460" cy="240" r="40" fill="none" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
//         <circle cx="460" cy="240" r="60" fill="none" stroke="#6ab5f5" strokeWidth="0.3" opacity="0.3" />
//         <line x1="380" y1="190" x2="420" y2="220" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
//         <line x1="540" y1="190" x2="500" y2="220" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
//         <line x1="460" y1="140" x2="460" y2="200" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
//         <circle cx="380" cy="190" r="4" fill="#6ab5f5" opacity="0.8" />
//         <circle cx="540" cy="190" r="4" fill="#6ab5f5" opacity="0.8" />
//         <circle cx="460" cy="140" r="4" fill="#6ab5f5" opacity="0.8" />
//       </svg>
//     ),
//   },
// ];

// const DURATION = 5000;
// const YELLOW = "#F5B400";

// const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const [animKey, setAnimKey] = useState(0);
//   const timerRef = useRef(null);
//   const progressRef = useRef(null);

//   const goTo = (index) => {
//     setCurrent(index);
//     setAnimKey((k) => k + 1);
//     restartProgress();
//   };

//   const restartProgress = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setCurrent((prev) => {
//         const next = (prev + 1) % slides.length;
//         setAnimKey((k) => k + 1);
//         return next;
//       });
//     }, DURATION);
//     if (progressRef.current) {
//       progressRef.current.style.transition = "none";
//       progressRef.current.style.width = "0%";
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           if (progressRef.current) {
//             progressRef.current.style.transition = `width ${DURATION}ms linear`;
//             progressRef.current.style.width = "100%";
//           }
//         });
//       });
//     }
//   };

//   useEffect(() => {
//     restartProgress();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   const pad = (n) => String(n).padStart(2, "0");

//   return (
//     <section
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "calc(100vh - 86px)",
//         overflow: "hidden",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .hero-text-animate > * { animation: heroFadeUp 0.65s ease both; }
//         .hero-text-animate .h-eyebrow  { animation-delay: 0.08s; }
//         .hero-text-animate .h-headline { animation-delay: 0.17s; }
//         .hero-text-animate .h-desc     { animation-delay: 0.28s; }
//         .hero-text-animate .h-cta      { animation-delay: 0.36s; }
//         .hero-thumb:hover  { opacity: 0.65 !important; }
//         .h-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
//         .h-btn-outline:hover { border-color: rgba(255,255,255,0.7) !important; background: rgba(255,255,255,0.05) !important; }
//         .h-btn-primary, .h-btn-outline { transition: all 0.2s ease !important; }

//         /* --- RESPONSIVE FIXES --- */
//         @media (max-width: 1024px) {
//           .hero-right-nav {
//             display: none !important;
//           }
//           .hero-left-content {
//             max-width: 100% !important;
//             padding: 0 20px !important;
//             text-align: center;
//           }
//           .hero-headline {
//             font-size: clamp(36px, 8vw, 64px) !important;
//             white-space: normal !important;
//             word-break: break-word;
//           }
//           .hero-desc {
//             max-width: 100% !important;
//             margin-left: auto !important;
//             margin-right: auto !important;
//           }
//           .hero-cta {
//             justify-content: center !important;
//           }
//         }
//         @media (max-width: 640px) {
//           .hero-left-content {
//             padding: 0 16px !important;
//           }
//           .hero-eyebrow {
//             font-size: 10px !important;
//             letter-spacing: 2px !important;
//           }
//           .h-btn-primary, .h-btn-outline {
//             padding: 10px 20px !important;
//             font-size: 12px !important;
//           }
//             @media (max-width: 640px) {
//            .hero-headline {
//              white-space: normal !important;   /* ✅ allow wrapping */
//              word-break: break-word !important; /* ✅ prevent weird E break */
//              font-size: clamp(28px, 9vw, 42px) !important;
//              line-height: 1.2 !important;
//            }
//           }
//         }
//       `}</style>

//       {slides.map((slide, i) => {
//         const { SVGIllustration } = slide;
//         return (
//           <div
//             key={slide.id}
//             style={{
//               position: "absolute",
//               inset: 0,
//               opacity: i === current ? 1 : 0,
//               transition: "opacity 0.9s ease",
//               zIndex: i === current ? 2 : 0,
//             }}
//           >
//             {/* Background gradient + SVG illustration */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgVia} 40%, ${slide.bgTo} 100%)`,
//               }}
//             >
//               <SVGIllustration />
//             </div>

//             {/* Dark overlay */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background:
//                   "linear-gradient(90deg, rgba(5,8,18,0.93) 0%, rgba(5,8,18,0.55) 52%, rgba(5,8,18,0.08) 100%)",
//               }}
//             />

//             {/* Row: left content | right nav */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 padding: "0 52px",
//                 zIndex: 3,
//               }}
//             >
//               {/* LEFT: slide text */}
//               <div
//                 className={i === current ? "hero-text-animate hero-left-content" : "hero-left-content"}
//                 key={i === current ? animKey : undefined}
//                 style={{ maxWidth: 560, flex: "0 0 auto" }}
//               >
//                 <div
//                   className="h-eyebrow hero-eyebrow"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: 10,
//                     fontSize: 11,
//                     fontWeight: 600,
//                     letterSpacing: "3px",
//                     textTransform: "uppercase",
//                     color: "rgba(255,255,255,0.55)",
//                     marginBottom: 12,
//                   }}
//                 >
//                   <span style={{ display: "block", width: 24, height: 1.5, background: "currentColor", borderRadius: 1 }} />
//                   {slide.eyebrow}
//                 </div>

//                 <h1
//                   className="h-headline hero-headline"
//                   style={{
//                     fontSize: "clamp(48px, 7vw, 88px)",
//                     fontWeight: 900,
//                     lineHeight: 1,
//                     letterSpacing: "-1px",
//                     color: YELLOW,
//                     margin: "0 0 18px",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {slide.headline}
//                 </h1>

//                 <p
//                   className="h-desc hero-desc"
//                   style={{
//                     fontSize: 15,
//                     fontWeight: 400,
//                     color: "rgba(255,255,255,0.80)",
//                     lineHeight: 1.75,
//                     maxWidth: 440,
//                     margin: "0 0 28px",
//                   }}
//                 >
//                   {slide.desc}
//                 </p>

//                 <div className="h-cta hero-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
//                   <Link
//                     to="/contact"
//                     className="h-btn-primary"
//                     style={{
//                       padding: "13px 28px",
//                       borderRadius: 50,
//                       fontSize: 14,
//                       fontWeight: 600,
//                       background: YELLOW,
//                       color: "#0a0f1a",
//                       border: "none",
//                       cursor: "pointer",
//                       textDecoration: "none",
//                       display: "inline-block",
//                       lineHeight: 1,
//                       letterSpacing: "0.2px",
//                     }}
//                   >
//                     Get Free Consultation
//                   </Link>
//                   <Link
//                     to="/projects"
//                     className="h-btn-outline"
//                     style={{
//                       padding: "12px 28px",
//                       borderRadius: 50,
//                       fontSize: 14,
//                       fontWeight: 500,
//                       background: "transparent",
//                       color: "#fff",
//                       border: "1.5px solid rgba(255,255,255,0.35)",
//                       cursor: "pointer",
//                       textDecoration: "none",
//                       display: "inline-block",
//                       lineHeight: 1,
//                       letterSpacing: "0.2px",
//                     }}
//                   >
//                     View Projects
//                   </Link>
//                 </div>
//               </div>

//               {/* RIGHT: slide navigation */}
//               <div
//                 className="hero-right-nav"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   width: 240,
//                   flexShrink: 0,
//                 }}
//               >
//                 {slides.map((s, idx) => (
//                   <div
//                     key={s.id}
//                     className="hero-thumb"
//                     onClick={() => goTo(idx)}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 14,
//                       cursor: "pointer",
//                       opacity: idx === current ? 1 : 0.28,
//                       transition: "opacity 0.3s",
//                       padding: "13px 0",
//                       borderTop: "0.5px solid rgba(255,255,255,0.10)",
//                       ...(idx === slides.length - 1
//                         ? { borderBottom: "0.5px solid rgba(255,255,255,0.10)" }
//                         : {}),
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: 2,
//                         height: 32,
//                         background: "rgba(255,255,255,0.12)",
//                         borderRadius: 2,
//                         position: "relative",
//                         overflow: "hidden",
//                         flexShrink: 0,
//                       }}
//                     >
//                       <ThumbFill active={idx === current} duration={DURATION} animKey={animKey} color={YELLOW} />
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <div
//                         style={{
//                           fontSize: 12,
//                           fontWeight: 700,
//                           color: idx === current ? YELLOW : "#fff",
//                           lineHeight: 1.3,
//                           textTransform: "uppercase",
//                           letterSpacing: "1px",
//                           transition: "color 0.3s",
//                         }}
//                       >
//                         {s.headline}
//                       </div>
//                       <div
//                         style={{
//                           fontSize: 11,
//                           fontWeight: 400,
//                           color: "rgba(255,255,255,0.38)",
//                           marginTop: 3,
//                         }}
//                       >
//                         {s.eyebrow}
//                       </div>
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 11,
//                         fontWeight: 500,
//                         color: "rgba(255,255,255,0.30)",
//                         minWidth: 18,
//                       }}
//                     >
//                       {pad(idx + 1)}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       {/* Slide counter (top left) */}
//       <div
//         style={{
//           position: "absolute",
//           top: 22,
//           left: 52,
//           fontSize: 11,
//           fontWeight: 500,
//           color: "rgba(255,255,255,0.28)",
//           letterSpacing: "1px",
//           zIndex: 5,
//         }}
//       >
//         {pad(current + 1)} / {pad(slides.length)}
//       </div>

//       {/* Bottom progress line */}
//       <div
//         ref={progressRef}
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           height: 2,
//           width: "0%",
//           background: YELLOW,
//           zIndex: 10,
//         }}
//       />
//     </section>
//   );
// };

// const ThumbFill = ({ active, duration, animKey, color }) => {
//   const ref = useRef(null);
//   useEffect(() => {
//     if (!ref.current) return;
//     if (active) {
//       ref.current.style.transition = "none";
//       ref.current.style.height = "0%";
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           if (ref.current) {
//             ref.current.style.transition = `height ${duration}ms linear`;
//             ref.current.style.height = "100%";
//           }
//         });
//       });
//     } else {
//       ref.current.style.transition = "none";
//       ref.current.style.height = "0%";
//     }
//   }, [active, animKey, duration]);
//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         background: color,
//         height: "0%",
//       }}
//     />
//   );
// };

// export default Hero;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ============================================================
// Custom hook for scroll‑triggered visibility
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

const slides = [
  {
    id: "sustainable",
    eyebrow: "Environmental Excellence",
    headline: "SUSTAINABLE",
    desc: "Our technologies monetize carbon emissions, eliminate liquid effluents and enable renewable energy integration for economically viable hydrocarbon processing.",
    bgFrom: "#0d1f2d",
    bgVia: "#1a3a4f",
    bgTo: "#0e2233",
    image: "/renewable-energy-solutions.jpg",
    SVGIllustration: () => (
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <circle cx="480" cy="120" r="220" fill="none" stroke="#4dd9ac" strokeWidth="0.5" />
        <circle cx="480" cy="120" r="160" fill="none" stroke="#4dd9ac" strokeWidth="0.5" />
        <circle cx="480" cy="120" r="100" fill="#1d9e75" opacity="0.15" />
        <line x1="260" y1="120" x2="700" y2="120" stroke="#4dd9ac" strokeWidth="0.5" opacity="0.4" />
        <line x1="480" y1="-100" x2="480" y2="340" stroke="#4dd9ac" strokeWidth="0.5" opacity="0.4" />
        <circle cx="480" cy="120" r="6" fill="#4dd9ac" />
        <circle cx="340" cy="120" r="4" fill="#4dd9ac" opacity="0.6" />
        <circle cx="480" cy="-20" r="4" fill="#4dd9ac" opacity="0.6" />
        <circle cx="580" cy="50" r="3" fill="#4dd9ac" opacity="0.5" />
        <path d="M420 200 Q440 160 480 120 Q520 80 560 80" fill="none" stroke="#4dd9ac" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "modular",
    eyebrow: "Global Mobility Design",
    headline: "MODULAR",
    desc: "Plants designed for global mobility, onshore and offshore. All process systems packaged in our fabrication yard and dispatched after successful integrity testing.",
    bgFrom: "#1a1228",
    bgVia: "#2d1f4a",
    bgTo: "#18102e",
    image: "/modular-Process.jpg",
    SVGIllustration: () => (
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <rect x="320" y="60" width="180" height="120" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
        <rect x="360" y="200" width="100" height="80" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
        <rect x="470" y="200" width="80" height="80" rx="4" fill="none" stroke="#9f8fe0" strokeWidth="0.5" />
        <rect x="300" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
        <rect x="400" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
        <rect x="500" y="300" width="80" height="60" rx="4" fill="#7f77dd" opacity="0.12" />
        <line x1="410" y1="180" x2="410" y2="200" stroke="#9f8fe0" strokeWidth="0.5" opacity="0.5" />
        <line x1="510" y1="180" x2="510" y2="200" stroke="#9f8fe0" strokeWidth="0.5" opacity="0.5" />
        <circle cx="500" cy="120" r="5" fill="#9f8fe0" opacity="0.7" />
        <circle cx="540" cy="100" r="3" fill="#9f8fe0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "digital",
    eyebrow: "Industry 4.0 Ready",
    headline: "DIGITAL",
    desc: "Digital twin, real-time process optimization, and remote performance management capability provide total control to all stakeholders.",
    bgFrom: "#0d1a2d",
    bgVia: "#0f2545",
    bgTo: "#091520",
    image: "/images1.jpg",
    SVGIllustration: () => (
      <svg
        viewBox="0 0 640 560"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <path d="M460 80 L580 160 L580 320 L460 400 L340 320 L340 160 Z" fill="none" stroke="#6ab5f5" strokeWidth="0.5" />
        <path d="M460 140 L540 190 L540 290 L460 340 L380 290 L380 190 Z" fill="#378add" opacity="0.08" />
        <circle cx="460" cy="240" r="20" fill="#378add" opacity="0.3" />
        <circle cx="460" cy="240" r="40" fill="none" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <circle cx="460" cy="240" r="60" fill="none" stroke="#6ab5f5" strokeWidth="0.3" opacity="0.3" />
        <line x1="380" y1="190" x2="420" y2="220" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <line x1="540" y1="190" x2="500" y2="220" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <line x1="460" y1="140" x2="460" y2="200" stroke="#6ab5f5" strokeWidth="0.5" opacity="0.5" />
        <circle cx="380" cy="190" r="4" fill="#6ab5f5" opacity="0.8" />
        <circle cx="540" cy="190" r="4" fill="#6ab5f5" opacity="0.8" />
        <circle cx="460" cy="140" r="4" fill="#6ab5f5" opacity="0.8" />
      </svg>
    ),
  },
];

const DURATION = 5000;
const YELLOW = "#F5B400";

// Helper: split text into words and wrap each word in a span with animation delay
const splitWords = (text, startDelay = 0, wordDelay = 0.04) => {
  return text.split(" ").map((word, idx) => (
    <span
      key={idx}
      className="word"
      style={{ animationDelay: `${startDelay + idx * wordDelay}s` }}
    >
      {word}&nbsp;
    </span>
  ));
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });

  const goTo = (index) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
    restartProgress();
  };

  const restartProgress = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, DURATION);
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (progressRef.current) {
            progressRef.current.style.transition = `width ${DURATION}ms linear`;
            progressRef.current.style.width = "100%";
          }
        });
      });
    }
  };

  useEffect(() => {
    restartProgress();
    return () => clearInterval(timerRef.current);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 86px)",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        /* Existing slide‑change animation (whole block fade-up) */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-text-animate > * { animation: heroFadeUp 0.65s ease both; }
        .hero-text-animate .h-eyebrow  { animation-delay: 0.08s; }
        .hero-text-animate .h-headline { animation-delay: 0.17s; }
        .hero-text-animate .h-desc     { animation-delay: 0.28s; }
        .hero-text-animate .h-cta      { animation-delay: 0.36s; }

        /* Word-by-word animation (scroll triggered) */
        @keyframes wordPop {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
            filter: blur(3px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .hero-word-animate .word {
          display: inline-block;
          opacity: 0;
          animation: wordPop 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }

        .hero-thumb:hover  { opacity: 0.65 !important; }
        .h-btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .h-btn-outline:hover { border-color: rgba(255,255,255,0.7) !important; background: rgba(255,255,255,0.05) !important; }
        .h-btn-primary, .h-btn-outline { transition: all 0.2s ease !important; }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-right-nav {
            display: none !important;
          }
          .hero-left-content {
            max-width: 100% !important;
            padding: 0 20px !important;
            text-align: center;
          }
          .hero-headline {
            font-size: clamp(36px, 8vw, 64px) !important;
            white-space: normal !important;
            word-break: break-word;
          }
          .hero-desc {
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-cta {
            justify-content: center !important;
          }
        }
        @media (max-width: 640px) {
          .hero-left-content {
            padding: 0 16px !important;
          }
          .hero-eyebrow {
            font-size: 10px !important;
            letter-spacing: 2px !important;
          }
          .h-btn-primary, .h-btn-outline {
            padding: 10px 20px !important;
            font-size: 12px !important;
          }
          .hero-headline {
            white-space: normal !important;
            word-break: break-word !important;
            font-size: clamp(28px, 9vw, 42px) !important;
            line-height: 1.2 !important;
          }
        }
      `}</style>

      {slides.map((slide, i) => {
        const { SVGIllustration } = slide;
        // Force word animation replay when hero enters viewport
        const wordAnimKey = `${i}-${heroInView ? "word" : "static"}-${animKey}`;
        const shouldAnimateWords = i === current && heroInView;

        return (
          <div
            key={slide.id}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.9s ease",
              zIndex: i === current ? 2 : 0,
            }}
          >
            {/* Background gradient + SVG illustration */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgVia} 40%, ${slide.bgTo} 100%)`,
              }}
            >
              <SVGIllustration />
            </div>

            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(5,8,18,0.93) 0%, rgba(5,8,18,0.55) 52%, rgba(5,8,18,0.08) 100%)",
              }}
            />

            {/* Row: left content | right nav */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 52px",
                zIndex: 3,
              }}
            >
              {/* LEFT: slide text */}
              <div
                className={`hero-left-content ${
                  i === current && !shouldAnimateWords ? "hero-text-animate" : ""
                }`}
                style={{ maxWidth: 560, flex: "0 0 auto" }}
              >
                {/* Eyebrow (simple fade) */}
                <div
                  className="h-eyebrow hero-eyebrow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ display: "block", width: 24, height: 1.5, background: "currentColor", borderRadius: 1 }} />
                  {slide.eyebrow}
                </div>

                {/* Headline – word by word */}
                <h1
                  key={`headline-${wordAnimKey}`}
                  className={`h-headline hero-headline ${shouldAnimateWords ? "hero-word-animate" : ""}`}
                  style={{
                    fontSize: "clamp(48px, 7vw, 88px)",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-1px",
                    color: YELLOW,
                    margin: "0 0 18px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {shouldAnimateWords
                    ? splitWords(slide.headline, 0.05, 0.05)
                    : slide.headline}
                </h1>

                {/* Description – word by word */}
                <p
                  key={`desc-${wordAnimKey}`}
                  className={`h-desc hero-desc ${shouldAnimateWords ? "hero-word-animate" : ""}`}
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.80)",
                    lineHeight: 1.75,
                    maxWidth: 440,
                    margin: "0 0 28px",
                  }}
                >
                  {shouldAnimateWords
                    ? splitWords(slide.desc, 0.25, 0.03)
                    : slide.desc}
                </p>

                {/* Buttons – no word split */}
                <div className="h-cta hero-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                  <Link
                    to="/contact"
                    className="h-btn-primary"
                    style={{
                      padding: "13px 28px",
                      borderRadius: 50,
                      fontSize: 14,
                      fontWeight: 600,
                      background: YELLOW,
                      color: "#0a0f1a",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "inline-block",
                      lineHeight: 1,
                      letterSpacing: "0.2px",
                    }}
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    to="/projects"
                    className="h-btn-outline"
                    style={{
                      padding: "12px 28px",
                      borderRadius: 50,
                      fontSize: 14,
                      fontWeight: 500,
                      background: "transparent",
                      color: "#fff",
                      border: "1.5px solid rgba(255,255,255,0.35)",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "inline-block",
                      lineHeight: 1,
                      letterSpacing: "0.2px",
                    }}
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* RIGHT: slide navigation (unchanged) */}
              <div
                className="hero-right-nav"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 240,
                  flexShrink: 0,
                }}
              >
                {slides.map((s, idx) => (
                  <div
                    key={s.id}
                    className="hero-thumb"
                    onClick={() => goTo(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      cursor: "pointer",
                      opacity: idx === current ? 1 : 0.28,
                      transition: "opacity 0.3s",
                      padding: "13px 0",
                      borderTop: "0.5px solid rgba(255,255,255,0.10)",
                      ...(idx === slides.length - 1
                        ? { borderBottom: "0.5px solid rgba(255,255,255,0.10)" }
                        : {}),
                    }}
                  >
                    <div
                      style={{
                        width: 2,
                        height: 32,
                        background: "rgba(255,255,255,0.12)",
                        borderRadius: 2,
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <ThumbFill active={idx === current} duration={DURATION} animKey={animKey} color={YELLOW} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: idx === current ? YELLOW : "#fff",
                          lineHeight: 1.3,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          transition: "color 0.3s",
                        }}
                      >
                        {s.headline}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 400,
                          color: "rgba(255,255,255,0.38)",
                          marginTop: 3,
                        }}
                      >
                        {s.eyebrow}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.30)",
                        minWidth: 18,
                      }}
                    >
                      {pad(idx + 1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide counter (top left) */}
      <div
        style={{
          position: "absolute",
          top: 22,
          left: 52,
          fontSize: 11,
          fontWeight: 500,
          color: "rgba(255,255,255,0.28)",
          letterSpacing: "1px",
          zIndex: 5,
        }}
      >
        {pad(current + 1)} / {pad(slides.length)}
      </div>

      {/* Bottom progress line */}
      <div
        ref={progressRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          width: "0%",
          background: YELLOW,
          zIndex: 10,
        }}
      />
    </section>
  );
};

const ThumbFill = ({ active, duration, animKey, color }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    if (active) {
      ref.current.style.transition = "none";
      ref.current.style.height = "0%";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transition = `height ${duration}ms linear`;
            ref.current.style.height = "100%";
          }
        });
      });
    } else {
      ref.current.style.transition = "none";
      ref.current.style.height = "0%";
    }
  }, [active, animKey, duration]);
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        background: color,
        height: "0%",
      }}
    />
  );
};

export default Hero;