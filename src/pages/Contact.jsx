// // import React, { useState, useEffect } from "react";
// // import {
// //   FaMapMarkerAlt,
// //   FaPhoneAlt,
// //   FaGlobeAmericas,
// //   FaArrowRight,
// //   FaPaperPlane,
// //   FaTimes,
// //   FaEnvelope,
// // } from "react-icons/fa";

// // const Contact = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     company: "",
// //     website: "",
// //     phone: "",
// //     email: "",
// //     otp: "",
// //     description: "",
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   useEffect(() => {
// //     if (window.location.hash === "#enquiry") {
// //       setIsModalOpen(true);
// //     }
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     await new Promise((resolve) => setTimeout(resolve, 1000));
// //     console.log("Form submitted:", formData);
// //     alert("Enquiry submitted successfully! (Demo)");
// //     setIsSubmitting(false);
// //     setIsModalOpen(false);
// //   };

// //   const offices = [
// //     {
// //       region: "Americas & Caribbean",
// //       address: "16420 Park Ten Place, Suite 585, Houston, Texas – 77084, United States",
// //       phone: "+1 713 429 5499",
// //     },
// //     {
// //       region: "Europe & Russia",
// //       address: "One Kingdom Street, Paddington Central, London, W2 6BD, United Kingdom",
// //       phone: "+44 74356 80880",
// //     },
// //     {
// //       region: "Middle East & North Africa",
// //       address: "48 BurjGate Tower, Level 20, Dubai, UAE, PO BOX 36615",
// //       phone: "+971 4 518 2635",
// //     },
// //     {
// //       region: "Asia Pacific",
// //       address: "4th Floor, Hamilton ‘A’–Wing, Hiranandani Business Park, Thane – 400 607, India",
// //       phone: "+91 22 4038 1000",
// //     },
// //     {
// //       region: "Sub-Saharan Africa",
// //       address: "Plot 307 Danjuma Drive, Trans Amadi, Port Harcourt, Nigeria",
// //       phone: "+1 713 429 5499",
// //     },
// //   ];

// //   return (
// //     <div className="bg-white">
// //       {/* Hero Section with rounded border container */}
// //       <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50 py-16 md:py-20">
// //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           {/* Rounded container with border */}
// //           <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200 shadow-lg p-6 md:p-10">
// //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
// //               Contact <span className="text-amber-500">Us</span>
// //             </h1>
// //             <p className="text-lg text-gray-700 max-w-2xl mx-auto">
// //               Connect with Pyramid E&C to explore tailored engineering, modular plant and energy-transition
// //               solutions backed by over 25 years of global hydrocarbon expertise.
// //             </p>
// //           </div>
// //         </div>
// //         <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
// //         <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
// //       </section>

// //       {/* Regional Offices – New two-column minimal design */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Global Presence</span>
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Regional Offices</h2>
// //             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
// //             <p className="text-gray-600 max-w-2xl mx-auto mt-6">
// //               Pyramid E&C’s global presence spans strategic regional offices across five continents.
// //             </p>
// //           </div>

// //           {/* Two‑column grid layout */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {offices.map((office, idx) => (
// //               <div
// //                 key={idx}
// //                 className="relative border border-gray-100 rounded-xl p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-md group"
// //               >
// //                 {/* Top accent line on hover */}
// //                 <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                
// //                 <div className="flex items-start gap-4">
// //                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
// //                     <FaGlobeAmericas size={20} />
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-lg font-bold text-gray-900 mb-2">{office.region}</h3>
// //                     <div className="space-y-2 text-sm text-gray-600">
// //                       <div className="flex items-start gap-2">
// //                         <FaMapMarkerAlt className="text-amber-500 mt-0.5 flex-shrink-0" size={14} />
// //                         <span>{office.address}</span>
// //                       </div>
// //                       <div className="flex items-center gap-2">
// //                         <FaPhoneAlt className="text-amber-500 flex-shrink-0" size={14} />
// //                         <span>{office.phone}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Floating Button */}
// //       <button
// //         onClick={() => setIsModalOpen(true)}
// //         className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-amber-500 hover:bg-amber-600 text-white px-3 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex flex-col items-center gap-2 hidden md:flex"
// //       >
// //         <FaEnvelope className="text-xl group-hover:scale-110 transition" />
// //         <span className="text-xs font-semibold tracking-wider">Get in<br />touch</span>
// //       </button>

// //       {/* Modal */}
// //       {isModalOpen && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
// //           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
// //             <div className="sticky top-0 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 flex justify-between items-center rounded-t-2xl">
// //               <div className="flex items-center gap-2">
// //                 <FaPaperPlane className="text-white" />
// //                 <h2 className="text-xl font-bold text-white">Get in Touch</h2>
// //               </div>
// //               <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-gray-200 transition">
// //                 <FaTimes size={24} />
// //               </button>
// //             </div>
// //             <div className="p-6 md:p-8">
// //               <p className="text-gray-600 text-sm mb-6">
// //                 Please fill out the form below. Communicate only from your company email – an OTP will be required to complete the request. Thank you.
// //               </p>
// //               <form onSubmit={handleSubmit} className="space-y-5">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
// //                     <input
// //                       type="text"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                       value={formData.name}
// //                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 text-sm font-medium mb-1">Company *</label>
// //                     <input
// //                       type="text"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                       value={formData.company}
// //                       onChange={(e) => setFormData({ ...formData, company: e.target.value })}
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-gray-700 text-sm font-medium mb-1">Website *</label>
// //                     <input
// //                       type="url"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                       value={formData.website}
// //                       onChange={(e) => setFormData({ ...formData, website: e.target.value })}
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number *</label>
// //                     <input
// //                       type="tel"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                       value={formData.phone}
// //                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                   <div>
// //                     <label className="block text-gray-700 text-sm font-medium mb-1">Work Email *</label>
// //                     <input
// //                       type="email"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                       value={formData.email}
// //                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 text-sm font-medium mb-1">OTP *</label>
// //                     <input
// //                       type="text"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                       value={formData.otp}
// //                       onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <label className="block text-gray-700 text-sm font-medium mb-1">Project Description *</label>
// //                   <textarea
// //                     rows="4"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
// //                     value={formData.description}
// //                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
// //                     required
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   disabled={isSubmitting}
// //                   className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
// //                 >
// //                   {isSubmitting ? "Submitting..." : "Submit Enquiry"} <FaArrowRight className="text-sm" />
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* CTA Section */}
// //       <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
// //         </div>
// //         <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your next project?</h2>
// //           <p className="text-gray-300 text-lg mb-8">
// //             Let's discuss how Pyramid E&C can bring value to your hydrocarbon or energy transition initiative.
// //           </p>
// //           <button
// //             onClick={() => setIsModalOpen(true)}
// //             className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
// //           >
// //             Contact Our Experts
// //           </button>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Contact;


// import React, { useState, useEffect } from "react";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaGlobeAmericas,
//   FaArrowRight,
//   FaPaperPlane,
//   FaTimes,
//   FaEnvelope,
// } from "react-icons/fa";

// const Contact = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showFloatingButton, setShowFloatingButton] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     website: "",
//     phone: "",
//     email: "",
//     otp: "",
//     description: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (window.location.hash === "#enquiry") {
//       setIsModalOpen(true);
//     }

//     const handleScroll = () => {
//       // Show floating button after scrolling 200px
//       setShowFloatingButton(window.scrollY > 200);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log("Form submitted:", formData);
//     alert("Enquiry submitted successfully! (Demo)");
//     setIsSubmitting(false);
//     setIsModalOpen(false);
//   };

//   const offices = [
//     {
//       region: "Americas & Caribbean",
//       address: "16420 Park Ten Place, Suite 585, Houston, Texas – 77084, United States",
//       phone: "+1 713 429 5499",
//     },
//     {
//       region: "Europe & Russia",
//       address: "One Kingdom Street, Paddington Central, London, W2 6BD, United Kingdom",
//       phone: "+44 74356 80880",
//     },
//     {
//       region: "Middle East & North Africa",
//       address: "48 BurjGate Tower, Level 20, Dubai, UAE, PO BOX 36615",
//       phone: "+971 4 518 2635",
//     },
//     {
//       region: "Asia Pacific",
//       address: "4th Floor, Hamilton ‘A’–Wing, Hiranandani Business Park, Thane – 400 607, India",
//       phone: "+91 22 4038 1000",
//     },
//     {
//       region: "Sub-Saharan Africa",
//       address: "Plot 307 Danjuma Drive, Trans Amadi, Port Harcourt, Nigeria",
//       phone: "+1 713 429 5499",
//     },
//   ];

//   // Generate random bubbles for hero
//   const generateBubbles = (count, baseSize = 20, sizeRange = 40) => {
//     return Array.from({ length: count }, (_, i) => ({
//       id: i,
//       size: Math.random() * sizeRange + baseSize,
//       left: Math.random() * 100,
//       delay: Math.random() * 15,
//       duration: Math.random() * 10 + 8,
//       opacity: Math.random() * 0.3 + 0.2,
//     }));
//   };

//   const heroBubbles = generateBubbles(18, 15, 50);

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
//     @keyframes bubbleFloat {
//       0% { transform: translateY(0) scale(0.2); opacity: 0; }
//       20% { opacity: 0.6; }
//       80% { opacity: 0.4; }
//       100% { transform: translateY(-100vh) scale(1); opacity: 0; }
//     }
//     @keyframes shimmer {
//       0% { background-position: -200% center; }
//       100% { background-position: 200% center; }
//     }
//     .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//     .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//     .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
//     .delay-100 { animation-delay: 0.1s; }
//     .delay-200 { animation-delay: 0.2s; }
//     .delay-300 { animation-delay: 0.3s; }
//     .delay-400 { animation-delay: 0.4s; }
//     .delay-500 { animation-delay: 0.5s; }
//   `;

//   return (
//     <div className="bg-white">
//       <style>{animationStyles}</style>

//       {/* Hero Section – Navbar gradient + bubbles */}
//       <section className="relative overflow-hidden text-white">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {heroBubbles.map((bubble) => (
//             <div
//               key={bubble.id}
//               className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
//               style={{
//                 width: `${bubble.size}px`,
//                 height: `${bubble.size}px`,
//                 left: `${bubble.left}%`,
//                 bottom: "-50px",
//                 opacity: bubble.opacity,
//                 animation: `bubbleFloat ${bubble.duration}s ease-in-out infinite`,
//                 animationDelay: `${bubble.delay}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
//           <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
//             <span>Home</span><span>›</span>
//             <span className="text-amber-400 font-medium">Contact Us</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
//             Contact{" "}
//             <span
//               className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
//               style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
//             >
//               Us
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
//             Connect with Pyramid E&C to explore tailored engineering, modular plant and energy-transition
//             solutions backed by over 25 years of global hydrocarbon expertise.
//           </p>
//         </div>
//       </section>

//       {/* Regional Offices – Two‑column minimal design (unchanged) */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Global Presence</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Regional Offices</h2>
//             <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-6">
//               Pyramid E&C’s global presence spans strategic regional offices across five continents.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {offices.map((office, idx) => (
//               <div
//                 key={idx}
//                 className="relative border border-gray-100 rounded-xl p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-md group"
//               >
//                 <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
//                     <FaGlobeAmericas size={20} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">{office.region}</h3>
//                     <div className="space-y-2 text-sm text-gray-600">
//                       <div className="flex items-start gap-2">
//                         <FaMapMarkerAlt className="text-amber-500 mt-0.5 flex-shrink-0" size={14} />
//                         <span>{office.address}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <FaPhoneAlt className="text-amber-500 flex-shrink-0" size={14} />
//                         <span>{office.phone}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Floating Button – shows only after scrolling */}
//       {showFloatingButton && (
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-amber-500 hover:bg-amber-600 text-white px-3 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex flex-col items-center gap-2 hidden md:flex"
//         >
//           <FaEnvelope className="text-xl group-hover:scale-110 transition" />
//           <span className="text-xs font-semibold tracking-wider">Get in<br />touch</span>
//         </button>
//       )}

//       {/* Modal – unchanged */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 flex justify-between items-center rounded-t-2xl">
//               <div className="flex items-center gap-2">
//                 <FaPaperPlane className="text-white" />
//                 <h2 className="text-xl font-bold text-white">Get in Touch</h2>
//               </div>
//               <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-gray-200 transition">
//                 <FaTimes size={24} />
//               </button>
//             </div>
//             <div className="p-6 md:p-8">
//               <p className="text-gray-600 text-sm mb-6">
//                 Please fill out the form below. Communicate only from your company email – an OTP will be required to complete the request. Thank you.
//               </p>
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">Company *</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                       value={formData.company}
//                       onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">Website *</label>
//                     <input
//                       type="url"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                       value={formData.website}
//                       onChange={(e) => setFormData({ ...formData, website: e.target.value })}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number *</label>
//                     <input
//                       type="tel"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">Work Email *</label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">OTP *</label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                       value={formData.otp}
//                       onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-medium mb-1">Project Description *</label>
//                   <textarea
//                     rows="4"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Enquiry"} <FaArrowRight className="text-sm" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section – Light yellow gradient (matching other pages) */}
//       <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <span className="w-8 h-[2px] bg-amber-600"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
//               Let's Build Together
//             </span>
//           </div>
//           <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Ready to start your next project?
//           </h2>
//           <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
//             Let's discuss how Pyramid E&C can bring value to your hydrocarbon or energy transition initiative.
//           </p>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
//           >
//             Contact Our Experts →
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaArrowRight,
  FaPaperPlane,
  FaTimes,
  FaEnvelope,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    phone: "",
    email: "",
    otp: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#enquiry") {
      setIsModalOpen(true);
    }

    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s\-']+$/.test(name.trim())) return "Name can only contain letters, spaces, hyphens, apostrophes, and dots";
    return "";
  };

  const validateCompany = (company) => {
    if (!company.trim()) return "Company name is required";
    if (company.trim().length < 2) return "Company name must be at least 2 characters";
    return "";
  };

  const validateWebsite = (website) => {
    if (!website.trim()) return "Website is required";
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(website.trim())) return "Please enter a valid website URL (e.g., https://example.com)";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) return "Phone number must have 8-15 digits";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email address is required";
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address (e.g., name@company.com)";
    return "";
  };

  const validateOtp = (otp) => {
    if (!otp.trim()) return "OTP is required";
    if (!/^\d{6}$/.test(otp.trim())) return "OTP must be a 6-digit number";
    return "";
  };

  const validateDescription = (desc) => {
    if (!desc.trim()) return "Project description is required";
    if (desc.trim().length < 10) return "Description must be at least 10 characters";
    return "";
  };

  // Run validation on every field change or blur
  useEffect(() => {
    const newErrors = {
      name: validateName(formData.name),
      company: validateCompany(formData.company),
      website: validateWebsite(formData.website),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
      otp: validateOtp(formData.otp),
      description: validateDescription(formData.description),
    };
    // Only show errors for fields that have been touched
    const visibleErrors = {};
    Object.keys(newErrors).forEach((key) => {
      if (touched[key] && newErrors[key]) {
        visibleErrors[key] = newErrors[key];
      }
    });
    setErrors(visibleErrors);
    // Check if all fields are valid (no errors when touched or empty)
    const allValid = Object.values(newErrors).every((err) => err === "");
    setIsFormValid(allValid);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mark all fields as touched to show all errors
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Re-validate everything
    const nameErr = validateName(formData.name);
    const companyErr = validateCompany(formData.company);
    const websiteErr = validateWebsite(formData.website);
    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);
    const otpErr = validateOtp(formData.otp);
    const descErr = validateDescription(formData.description);

    if (nameErr || companyErr || websiteErr || phoneErr || emailErr || otpErr || descErr) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully! (Demo)");
    setIsSubmitting(false);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: "", company: "", website: "", phone: "", email: "", otp: "", description: "",
    });
    setTouched({});
    setErrors({});
  };

  const offices = [
    {
      region: "Americas & Caribbean",
      address: "16420 Park Ten Place, Suite 585, Houston, Texas – 77084, United States",
      phone: "+1 713 429 5499",
    },
    {
      region: "Europe & Russia",
      address: "One Kingdom Street, Paddington Central, London, W2 6BD, United Kingdom",
      phone: "+44 74356 80880",
    },
    {
      region: "Middle East & North Africa",
      address: "48 BurjGate Tower, Level 20, Dubai, UAE, PO BOX 36615",
      phone: "+971 4 518 2635",
    },
    {
      region: "Asia Pacific",
      address: "4th Floor, Hamilton ‘A’–Wing, Hiranandani Business Park, Thane – 400 607, India",
      phone: "+91 22 4038 1000",
    },
    {
      region: "Sub-Saharan Africa",
      address: "Plot 307 Danjuma Drive, Trans Amadi, Port Harcourt, Nigeria",
      phone: "+1 713 429 5499",
    },
  ];

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
    @keyframes gentlePulse {
      0%, 100% { transform: translateY(-50%) scale(1); }
      50% { transform: translateY(-50%) scale(1.05); }
    }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-pulse-gentle { animation: gentlePulse 2s ease-in-out infinite; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

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
            <span>Home</span><span>›</span>
            <span className="text-amber-400 font-medium">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Contact{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Connect with Pyramid E&C to explore tailored engineering, modular plant and energy-transition
            solutions backed by over 25 years of global hydrocarbon expertise.
          </p>
        </div>
      </section>

      {/* Regional Offices – unchanged */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Global Presence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Regional Offices</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Pyramid E&C’s global presence spans strategic regional offices across five continents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="relative border border-gray-100 rounded-xl p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-md group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <FaGlobeAmericas size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{office.region}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <FaMapMarkerAlt className="text-amber-500 mt-0.5 flex-shrink-0" size={14} />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-amber-500 flex-shrink-0" size={14} />
                        <span>{office.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Button – with gentle pulse animation */}
      {showFloatingButton && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-amber-500 hover:bg-amber-600 text-white px-3 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex flex-col items-center gap-2 hidden md:flex animate-pulse-gentle"
        >
          <FaEnvelope className="text-xl group-hover:scale-110 transition" />
          <span className="text-xs font-semibold tracking-wider">Get in<br />touch</span>
        </button>
      )}

      {/* Modal with 2‑column layout for most fields */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center gap-2">
                <FaPaperPlane className="text-white" />
                <h2 className="text-xl font-bold text-white">Get in Touch</h2>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-gray-200 transition">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-600 text-sm mb-6">
                Please fill out the form below. Communicate only from your company email – an OTP will be required to complete the request. Thank you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.name && touched.name ? "border-red-500" : "border-gray-300"}`}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Company *</label>
                    <input
                      type="text"
                      name="company"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.company && touched.company ? "border-red-500" : "border-gray-300"}`}
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.company}</p>}
                  </div>
                </div>

                {/* Row 2: Website + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Website *</label>
                    <input
                      type="url"
                      name="website"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.website && touched.website ? "border-red-500" : "border-gray-300"}`}
                      value={formData.website}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.website && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.website}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.phone && touched.phone ? "border-red-500" : "border-gray-300"}`}
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.phone}</p>}
                  </div>
                </div>

                {/* Row 3: Email + OTP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">OTP *</label>
                    <input
                      type="text"
                      name="otp"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.otp && touched.otp ? "border-red-500" : "border-gray-300"}`}
                      value={formData.otp}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.otp && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.otp}</p>}
                  </div>
                </div>

                {/* Row 4: Description (full width) */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Project Description *</label>
                  <textarea
                    rows="4"
                    name="description"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.description && touched.description ? "border-red-500" : "border-gray-300"}`}
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.description && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.description}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"} <FaArrowRight className="text-sm" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section – Light yellow gradient */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
              Let's Build Together
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Ready to start your next project?
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Let's discuss how Pyramid E&C can bring value to your hydrocarbon or energy transition initiative.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
          >
            Contact Our Experts →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;