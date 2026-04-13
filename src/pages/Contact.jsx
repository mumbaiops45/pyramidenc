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
  FaBuilding,
  FaShieldAlt,
  FaFileUpload,
  FaCheckCircle,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Enquiry form state
  const [formData, setFormData] = useState({
    name: "", company: "", website: "", phone: "", email: "", otp: "", description: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Supplier form state
  const [supplierData, setSupplierData] = useState({
    name: "", company: "", website: "", phone: "", email: "", otp: "",
  });
  const [supplierErrors, setSupplierErrors] = useState({});
  const [supplierTouched, setSupplierTouched] = useState({});
  const [isSupplierSubmitting, setIsSupplierSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  // Report a Concern form state
  const [concernData, setConcernData] = useState({
    name: "", email: "", phone: "", otp: "", concern: "",
  });
  const [concernErrors, setConcernErrors] = useState({});
  const [concernTouched, setConcernTouched] = useState({});
  const [isConcernSubmitting, setIsConcernSubmitting] = useState(false);
  const [concernOtpSent, setConcernOtpSent] = useState(false);
  const [concernDemoOtp, setConcernDemoOtp] = useState("");

  useEffect(() => {
    if (window.location.hash === "#enquiry") setIsModalOpen(true);
    const handleScroll = () => setShowFloatingButton(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ======================== VALIDATION FUNCTIONS ========================
  // General validations (for enquiry & supplier)
  const validateName    = (v) => !v.trim() ? "Full name is required" : v.trim().length < 2 ? "Min 2 characters" : !/^[a-zA-Z\s\-']+$/.test(v.trim()) ? "Letters only" : "";
  const validateCompany = (v) => !v.trim() ? "Company name is required" : v.trim().length < 2 ? "Min 2 characters" : "";
  const validateWebsite = (v) => !v.trim() ? "Website is required" : !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v.trim()) ? "Enter a valid URL" : "";
  const validatePhone   = (v) => !v.trim() ? "Phone is required" : (v.replace(/\D/g,"").length < 8 || v.replace(/\D/g,"").length > 15) ? "8–15 digits required" : "";
  const validateEmail   = (v) => !v.trim() ? "Email is required" : !/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(v.trim()) ? "Enter a valid email" : "";
  const validateOtp     = (v) => !v.trim() ? "OTP is required" : !/^\d{6}$/.test(v.trim()) ? "6-digit OTP required" : "";
  const validateDesc    = (v) => !v.trim() ? "Description is required" : v.trim().length < 10 ? "Min 10 characters" : "";

  // Special validations for Report a Concern
  const validateConcernName = (v) => {
    if (!v.trim()) return "Full name is required";
    if (v.trim().length < 2) return "Min 2 characters";
    if (/^\d+$/.test(v.trim())) return "Name cannot be only numbers";
    if (!/^[a-zA-Z\s\-']+$/.test(v.trim())) return "Name can only contain letters, spaces, hyphens, and apostrophes";
    return "";
  };
  const validateConcernEmail = (v) => {
    if (!v.trim()) return "Email is required";
    if (!/^[^\s@]+@gmail\.com$/i.test(v.trim())) return "Email must be a valid Gmail address (@gmail.com)";
    return "";
  };
  const validateConcernPhone = (v) => {
    const digits = v.replace(/\D/g, "");
    if (!v.trim()) return "Phone number is required";
    if (digits.length !== 10) return "Phone number must be exactly 10 digits";
    return "";
  };
  const validateConcernOtp = (v, sentOtp) => {
    if (!v.trim()) return "OTP is required";
    if (!/^\d{6}$/.test(v.trim())) return "OTP must be 6 digits";
    if (sentOtp && v !== sentOtp) return "Invalid OTP. Please try again.";
    return "";
  };
  const validateConcernText = (v) => {
    if (!v.trim()) return "Concern description is required";
    if (v.trim().length < 10) return "Please provide at least 10 characters";
    return "";
  };

  // Enquiry form validation
  useEffect(() => {
    const errs = {
      name: validateName(formData.name), company: validateCompany(formData.company),
      website: validateWebsite(formData.website), phone: validatePhone(formData.phone),
      email: validateEmail(formData.email), otp: validateOtp(formData.otp),
      description: validateDesc(formData.description),
    };
    const visible = {};
    Object.keys(errs).forEach(k => { if (touched[k] && errs[k]) visible[k] = errs[k]; });
    setErrors(visible);
    setIsFormValid(Object.values(errs).every(e => e === ""));
  }, [formData, touched]);

  // Supplier form validation
  useEffect(() => {
    const errs = {
      name: validateName(supplierData.name), company: validateCompany(supplierData.company),
      website: validateWebsite(supplierData.website), phone: validatePhone(supplierData.phone),
      email: validateEmail(supplierData.email), otp: validateOtp(supplierData.otp),
    };
    const visible = {};
    Object.keys(errs).forEach(k => { if (supplierTouched[k] && errs[k]) visible[k] = errs[k]; });
    setSupplierErrors(visible);
  }, [supplierData, supplierTouched]);

  // Concern form validation
  useEffect(() => {
    const errs = {
      name: validateConcernName(concernData.name),
      email: validateConcernEmail(concernData.email),
      phone: validateConcernPhone(concernData.phone),
      otp: concernOtpSent ? validateConcernOtp(concernData.otp, concernDemoOtp) : "",
      concern: validateConcernText(concernData.concern),
    };
    const visible = {};
    Object.keys(errs).forEach(k => { if (concernTouched[k] && errs[k]) visible[k] = errs[k]; });
    setConcernErrors(visible);
  }, [concernData, concernTouched, concernOtpSent, concernDemoOtp]);

  // Handlers
  const handleChange = (e) => { const {name,value}=e.target; setFormData(p=>({...p,[name]:value})); };
  const handleBlur   = (e) => { const {name}=e.target; setTouched(p=>({...p,[name]:true})); };

  const handleSupplierChange = (e) => { const {name,value}=e.target; setSupplierData(p=>({...p,[name]:value})); };
  const handleSupplierBlur   = (e) => { const {name}=e.target; setSupplierTouched(p=>({...p,[name]:true})); };

  const handleConcernChange = (e) => { const {name,value}=e.target; setConcernData(p=>({...p,[name]:value})); };
  const handleConcernBlur   = (e) => { const {name}=e.target; setConcernTouched(p=>({...p,[name]:true})); };

  const handleFileChange = (files) => {
    const arr = Array.from(files);
    if (uploadedFiles.length + arr.length > 5) { alert("Max 5 files allowed."); return; }
    setUploadedFiles(p => [...p, ...arr]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = {}; Object.keys(formData).forEach(k => allTouched[k]=true); setTouched(allTouched);
    const errs = [validateName(formData.name),validateCompany(formData.company),validateWebsite(formData.website),validatePhone(formData.phone),validateEmail(formData.email),validateOtp(formData.otp),validateDesc(formData.description)];
    if (errs.some(Boolean)) { alert("Please fix errors before submitting."); return; }
    setIsSubmitting(true);
    await new Promise(r=>setTimeout(r,1000));
    alert("Enquiry submitted! (Demo)");
    setIsSubmitting(false); setIsModalOpen(false);
    setFormData({name:"",company:"",website:"",phone:"",email:"",otp:"",description:""});
    setTouched({}); setErrors({});
  };

  const handleSupplierSubmit = async (e) => {
    e.preventDefault();
    const allTouched = {}; Object.keys(supplierData).forEach(k => allTouched[k]=true); setSupplierTouched(allTouched);
    const errs = [validateName(supplierData.name),validateCompany(supplierData.company),validateWebsite(supplierData.website),validatePhone(supplierData.phone),validateEmail(supplierData.email),validateOtp(supplierData.otp)];
    if (errs.some(Boolean)) { alert("Please fix errors before submitting."); return; }
    setIsSupplierSubmitting(true);
    await new Promise(r=>setTimeout(r,1000));
    alert("Supplier registration submitted! (Demo)");
    setIsSupplierSubmitting(false); setIsSupplierModalOpen(false);
    setSupplierData({name:"",company:"",website:"",phone:"",email:"",otp:""});
    setSupplierTouched({}); setSupplierErrors({}); setUploadedFiles([]);
  };

  const sendConcernOtp = () => {
    if (!concernData.email) {
      alert("Please enter your email address first.");
      return;
    }
    if (validateConcernEmail(concernData.email)) {
      alert("Please enter a valid Gmail address before requesting OTP.");
      return;
    }
    const fakeOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setConcernDemoOtp(fakeOtp);
    setConcernOtpSent(true);
    alert(`Demo OTP sent to ${concernData.email}: ${fakeOtp}`);
  };

  const handleConcernSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, concern: true };
    if (concernOtpSent) allTouched.otp = true;
    setConcernTouched(allTouched);

    const nameErr = validateConcernName(concernData.name);
    const emailErr = validateConcernEmail(concernData.email);
    const phoneErr = validateConcernPhone(concernData.phone);
    const otpErr = concernOtpSent ? validateConcernOtp(concernData.otp, concernDemoOtp) : "";
    const concernErr = validateConcernText(concernData.concern);

    if (nameErr || emailErr || phoneErr || otpErr || concernErr) {
      alert("Please fix errors before submitting.");
      return;
    }
    setIsConcernSubmitting(true);
    await new Promise(r=>setTimeout(r,1000));
    alert("Concern reported successfully! (Demo)");
    setIsConcernSubmitting(false);
    setConcernData({ name: "", email: "", phone: "", otp: "", concern: "" });
    setConcernTouched({});
    setConcernErrors({});
    setConcernOtpSent(false);
    setConcernDemoOtp("");
  };

  const offices = [
    { region: "Americas & Caribbean",       address: "16420 Park Ten Place, Suite 585, Houston, Texas – 77084, United States",                              phone: "+1 713 429 5499"   },
    { region: "Europe & Russia",             address: "One Kingdom Street, Paddington Central, London, W2 6BD, United Kingdom",                              phone: "+44 74356 80880"  },
    { region: "Middle East & North Africa",  address: "48 BurjGate Tower, Level 20, Dubai, UAE, PO BOX 36615",                                               phone: "+971 4 518 2635"  },
    { region: "Asia Pacific",                address: "4th Floor, Hamilton 'A'–Wing, Hiranandani Business Park, Thane – 400 607, India",                     phone: "+91 22 4038 1000" },
    { region: "Sub-Saharan Africa",          address: "Plot 307 Danjuma Drive, Trans Amadi, Port Harcourt, Nigeria",                                          phone: "+1 713 429 5499"  },
  ];

  const generateBubbles = (count, baseSize=20, sizeRange=40) =>
    Array.from({length:count}, (_,i) => ({
      id:i, size:Math.random()*sizeRange+baseSize, left:Math.random()*100,
      delay:Math.random()*15, duration:Math.random()*10+8, opacity:Math.random()*0.3+0.2,
    }));

  const heroBubbles    = generateBubbles(18,15,50);
  const portalBubbles  = generateBubbles(10,10,30);

  const animationStyles = `
    @keyframes fadeUp { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:translateY(0)} }
    @keyframes fadeLeft { 0%{opacity:0;transform:translateX(-30px)} 100%{opacity:1;transform:translateX(0)} }
    @keyframes bubbleFloat { 0%{transform:translateY(0) scale(0.2);opacity:0} 20%{opacity:0.6} 80%{opacity:0.4} 100%{transform:translateY(-100vh) scale(1);opacity:0} }
    @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
    @keyframes gentlePulse { 0%,100%{transform:translateY(-50%) scale(1)} 50%{transform:translateY(-50%) scale(1.05)} }
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-pulse-gentle { animation: gentlePulse 2s ease-in-out infinite; }
    .delay-100{animation-delay:0.1s} .delay-200{animation-delay:0.2s}
    .delay-300{animation-delay:0.3s} .delay-400{animation-delay:0.4s}
  `;

  // Reusable field component for enquiry modal
  const Field = ({label, name, type="text", rows, value, onChange, onBlur, error, touched: t}) => (
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-1">{label} *</label>
      {rows ? (
        <textarea rows={rows} name={name}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none ${t && error ? "border-red-400" : "border-gray-300"}`}
          value={value} onChange={onChange} onBlur={onBlur} />
      ) : (
        <input type={type} name={name}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${t && error ? "border-red-400" : "border-gray-300"}`}
          value={value} onChange={onChange} onBlur={onBlur} />
      )}
      {t && error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10}/>{error}</p>}
    </div>
  );

  // Reusable field for supplier modal (dark style)
  const DarkField = ({label, name, type="text", value, onChange, onBlur, error, touched: t}) => (
    <div>
      <label className="block text-slate-300 text-sm font-medium mb-1">{label} *</label>
      <input type={type} name={name}
        className={`w-full px-4 py-2.5 rounded-lg outline-none transition text-slate-100 text-sm placeholder-slate-500 ${t && error ? "border border-red-400 bg-red-500/5" : "border border-white/10 bg-white/5 focus:border-amber-500/60 focus:bg-white/8"}`}
        style={!(t && error) ? {background:"rgba(255,255,255,0.05)"} : undefined}
        value={value} onChange={onChange} onBlur={onBlur} />
      {t && error && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10}/>{error}</p>}
    </div>
  );

  return (
    <div className="bg-white">
      <style>{animationStyles}</style>

      {/* Hero – unchanged */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {heroBubbles.map(b => (
            <div key={b.id} className="absolute rounded-full bg-gradient-to-tr from-amber-400/30 to-amber-500/10"
              style={{width:`${b.size}px`,height:`${b.size}px`,left:`${b.left}%`,bottom:"-50px",opacity:b.opacity,
                animation:`bubbleFloat ${b.duration}s ease-in-out infinite`,animationDelay:`${b.delay}s`}} />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit animate-fadeLeft">
            <span>Home</span><span>›</span>
            <span className="text-amber-400 font-medium">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Contact{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{backgroundSize:"200% auto",animation:"shimmer 3s linear infinite"}}>Us</span>
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
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Global Presence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Regional{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Offices
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Pyramid E&C's global presence spans strategic regional offices across five continents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, idx) => (
              <div key={idx}
                className="relative border border-gray-100 rounded-xl p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-md group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber-500 rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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

      {/* Procurement Portal Section – unchanged */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{background:"linear-gradient(145deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)"}}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
          style={{background:"radial-gradient(ellipse,rgba(245,158,11,0.1) 0%,transparent 70%)"}} />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{background:"radial-gradient(circle,rgba(245,158,11,0.06) 0%,transparent 70%)"}} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {portalBubbles.map(b => (
            <div key={b.id} className="absolute rounded-full"
              style={{width:`${b.size}px`,height:`${b.size}px`,left:`${b.left}%`,bottom:"-50px",
                opacity:b.opacity*0.5, background:"radial-gradient(circle,rgba(245,158,11,0.3),rgba(245,158,11,0.05))",
                animation:`bubbleFloat ${b.duration}s ease-in-out infinite`,animationDelay:`${b.delay}s`}} />
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-7 h-[2px] bg-amber-500" />
              <span className="text-[11px] font-bold tracking-[4px] uppercase text-amber-500">Suppliers</span>
              <span className="w-7 h-[2px] bg-amber-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-50 mb-3">
              Procurement{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Portal</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Welcome to Pyramid's Procurement Portal, your secure site for conducting E-Business with Pyramid E&C.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <div className="flex flex-col gap-6">
              <p className="text-slate-400 text-[14px] leading-relaxed">
                Pyramid E&C requires continuous supply of Products and Services for Energy & Chemical industries globally.
                The supplies are used in various <span className="text-amber-400 font-semibold">LSTK</span> and{" "}
                <span className="text-amber-400 font-semibold">EPCM</span> projects undertaken by Pyramid.
                Suppliers may contact their nearest Pyramid E&C office.
              </p>

              {[
                { icon: FaBuilding,   title: "Register your company",            desc: "Submit your company profile and credentials to join our supplier network."    },
                { icon: FaFileUpload, title: "Submit documents",                 desc: "Upload compliance documents, certifications, and technical specifications."   },
                { icon: FaShieldAlt,  title: "Supply chain requirements",        desc: "Learn about Pyramid's standards, vendor qualification and audit criteria."    },
              ].map(({icon:Icon, title, desc}) => (
                <div key={title}
                  className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 cursor-default"
                  style={{background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(245,158,11,0.35)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{background:"rgba(245,158,11,0.15)", border:"1px solid rgba(245,158,11,0.3)"}}>
                    <Icon className="text-amber-400" size={16} />
                  </div>
                  <div>
                    <p className="text-slate-100 font-semibold text-sm mb-1">{title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setIsSupplierModalOpen(true)}
                className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all duration-200 shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 transform"
              >
                Register your company
                <FaArrowRight size={12} />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border"
              style={{background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)"}}>
              <div className="h-[3px] w-full bg-gradient-to-r from-amber-400 to-amber-600" />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{background:"rgba(245,158,11,0.15)", border:"1px solid rgba(245,158,11,0.3)"}}>
                    <MdSecurity className="text-amber-400" size={16} />
                  </div>
                  <h3 className="text-slate-100 font-bold text-[15px]">Procurement Portal: Privacy Policy</h3>
                </div>
                <div className="space-y-3 text-slate-400 text-[13px] leading-relaxed">
                  <p>We strive to protect the privacy of users of this site, and will treat in a professional manner any information collected. However, we do not guarantee privacy and cannot guarantee against unauthorized access to the site. We therefore discourage you from providing us with information that you consider confidential.</p>
                  <p>We will not intentionally disclose your information to a third party unless required to do so by law. By using this site to provide us with your personally identifiable information, you consent to our collection and storage of that information.</p>
                  <p>We may store that information and use it to contact you if suitable for content updates and enrollment reminders. Information may be stored on your computer in the form of session cookies to assist your navigation through the site. This site may contain links to other sites whose privacy policies and/or practices we do not control.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Button – unchanged */}
      {showFloatingButton && (
        <button onClick={() => setIsModalOpen(true)}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-amber-500 hover:bg-amber-600 text-white px-3 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex-col items-center gap-2 hidden md:flex animate-pulse-gentle">
          <FaEnvelope className="text-xl group-hover:scale-110 transition" />
          <span className="text-xs font-semibold tracking-wider">Get in<br />touch</span>
        </button>
      )}

      {/* Enquiry Modal – unchanged */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
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
                Please fill out the form below. Communicate only from your company email – an OTP will be required to complete the request.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Full Name"     name="name"    value={formData.name}    onChange={handleChange} onBlur={handleBlur} error={errors.name}    touched={touched.name} />
                  <Field label="Company"       name="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} error={errors.company} touched={touched.company} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Website"       name="website" type="url" value={formData.website} onChange={handleChange} onBlur={handleBlur} error={errors.website} touched={touched.website} />
                  <Field label="Phone Number"  name="phone"   type="tel" value={formData.phone}   onChange={handleChange} onBlur={handleBlur} error={errors.phone}   touched={touched.phone} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Work Email"    name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} />
                  <Field label="OTP"           name="otp"               value={formData.otp}   onChange={handleChange} onBlur={handleBlur} error={errors.otp}   touched={touched.otp} />
                </div>
                <Field label="Project Description" name="description" rows={4} value={formData.description} onChange={handleChange} onBlur={handleBlur} error={errors.description} touched={touched.description} />
                <button type="submit" disabled={isSubmitting || !isFormValid}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"} <FaArrowRight className="text-sm" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Supplier Registration Modal – unchanged */}
      {isSupplierModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[92vh] overflow-y-auto border border-white/10"
            style={{background:"linear-gradient(145deg,#0f172a 0%,#1e293b 100%)"}}>
            <div className="sticky top-0 z-10 px-6 py-4 flex justify-between items-center rounded-t-2xl border-b border-white/10"
              style={{background:"rgba(15,23,42,0.95)"}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{background:"rgba(245,158,11,0.15)", border:"1px solid rgba(245,158,11,0.3)"}}>
                  <FaBuilding className="text-amber-400" size={14} />
                </div>
                <div>
                  <h2 className="text-[15px] font-bold text-slate-100">Register New Supplier</h2>
                  <p className="text-[11px] text-slate-500">Pyramid E&C Procurement Portal</p>
                </div>
              </div>
              <button onClick={() => setIsSupplierModalOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all duration-200">
                <FaTimes className="text-slate-400 hover:text-amber-400" size={14} />
              </button>
            </div>
            <div className="h-[3px] w-full bg-gradient-to-r from-amber-400 to-amber-600" />
            <div className="p-6 md:p-8">
              <div className="mb-6 p-4 rounded-xl flex items-start gap-3 border"
                style={{background:"rgba(245,158,11,0.06)", border:"1px solid rgba(245,158,11,0.2)"}}>
                <FaExclamationCircle className="text-amber-400 flex-shrink-0 mt-0.5" size={15} />
                <p className="text-slate-400 text-[12px] leading-relaxed">
                  <span className="text-amber-400 font-semibold">Report a Concern</span> — Use this form to confidentially
                  report any concerns or issues to Pyramid E&C, ensuring your feedback is sent directly to the company's
                  compliance team for review and follow-up.
                </p>
              </div>
              <form onSubmit={handleSupplierSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <DarkField label="Name"         name="name"    value={supplierData.name}    onChange={handleSupplierChange} onBlur={handleSupplierBlur} error={supplierErrors.name}    touched={supplierTouched.name} />
                  <DarkField label="Company"       name="company" value={supplierData.company} onChange={handleSupplierChange} onBlur={handleSupplierBlur} error={supplierErrors.company} touched={supplierTouched.company} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <DarkField label="Website"       name="website" type="url" value={supplierData.website} onChange={handleSupplierChange} onBlur={handleSupplierBlur} error={supplierErrors.website} touched={supplierTouched.website} />
                  <DarkField label="Phone Number"  name="phone"   type="tel" value={supplierData.phone}   onChange={handleSupplierChange} onBlur={handleSupplierBlur} error={supplierErrors.phone}   touched={supplierTouched.phone} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <DarkField label="Email Address" name="email" type="email" value={supplierData.email} onChange={handleSupplierChange} onBlur={handleSupplierBlur} error={supplierErrors.email} touched={supplierTouched.email} />
                  <DarkField label="Enter OTP"     name="otp"               value={supplierData.otp}   onChange={handleSupplierChange} onBlur={handleSupplierBlur} error={supplierErrors.otp}   touched={supplierTouched.otp} />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Upload Files *</label>
                  <div
                    className={`relative rounded-xl border-2 border-dashed p-6 text-center transition-all duration-200 cursor-pointer ${dragOver ? "border-amber-400 bg-amber-500/5" : "border-white/15 hover:border-amber-400/50"}`}
                    style={!dragOver ? {background:"rgba(255,255,255,0.03)"} : undefined}
                    onDragOver={e=>{e.preventDefault();setDragOver(true)}}
                    onDragLeave={()=>setDragOver(false)}
                    onDrop={e=>{e.preventDefault();setDragOver(false);handleFileChange(e.dataTransfer.files)}}
                    onClick={()=>document.getElementById("supplierFileInput").click()}
                  >
                    <input id="supplierFileInput" type="file" multiple className="hidden"
                      onChange={e=>handleFileChange(e.target.files)} />
                    <FaFileUpload className="text-amber-400 mx-auto mb-2" size={22} />
                    <p className="text-slate-400 text-sm">Drop your file here or <span className="text-amber-400 font-semibold">click here to upload</span></p>
                    <p className="text-slate-600 text-xs mt-1">You can upload up to 5 files.</p>
                  </div>
                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {uploadedFiles.map((f,i) => (
                        <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10"
                          style={{background:"rgba(255,255,255,0.04)"}}>
                          <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-amber-400" size={12} />
                            <span className="text-slate-300 text-xs truncate max-w-[200px]">{f.name}</span>
                          </div>
                          <button type="button" onClick={()=>setUploadedFiles(p=>p.filter((_,j)=>j!==i))}
                            className="text-slate-500 hover:text-red-400 transition-colors">
                            <FaTimes size={11} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10"
                  style={{background:"rgba(255,255,255,0.03)"}}>
                  <div className="w-5 h-5 border-2 border-slate-600 rounded flex-shrink-0" />
                  <span className="text-slate-400 text-sm">I'm not a robot</span>
                  <div className="ml-auto text-right">
                    <p className="text-[10px] text-slate-600 leading-tight">reCAPTCHA</p>
                    <p className="text-[9px] text-slate-700">Privacy · Terms</p>
                  </div>
                </div>
                <button type="submit" disabled={isSupplierSubmitting}
                  className="w-full font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-slate-900 bg-amber-500 hover:bg-amber-400"
                  style={{boxShadow: isSupplierSubmitting ? "none" : "0 4px 20px rgba(245,158,11,0.2)"}}>
                  {isSupplierSubmitting ? "Submitting..." : "Submit"} <FaArrowRight size={12} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* ================= REPORT A CONCERN SECTION (UPDATED VALIDATION) ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
         

          {/* Header with brand styling */}
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
              Confidential
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Report a{" "}
              <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
                Concern
              </span>
            </h2>
            <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full" />
          </div>

          <p className="text-gray-600 text-sm text-center mb-10 leading-relaxed">
            Use this form to confidentially report any concerns or issues to Pyramid E&C,
            ensuring your feedback is sent directly to the company's compliance team for review
            and follow-up.
          </p>

          <form onSubmit={handleConcernSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={concernData.name}
                onChange={handleConcernChange}
                onBlur={handleConcernBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${concernTouched.name && concernErrors.name ? "border-red-400" : "border-gray-300"}`}
              />
              {concernTouched.name && concernErrors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <FaExclamationCircle size={10} /> {concernErrors.name}
                </p>
              )}
            </div>

            {/* Email with OTP button */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <input
                  type="email"
                  name="email"
                  value={concernData.email}
                  onChange={handleConcernChange}
                  onBlur={handleConcernBlur}
                  className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${concernTouched.email && concernErrors.email ? "border-red-400" : "border-gray-300"}`}
                />
                <button
                  type="button"
                  onClick={sendConcernOtp}
                  className="text-xs px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition whitespace-nowrap"
                >
                  {concernOtpSent ? "Resend OTP" : "Send OTP"}
                </button>
              </div>
              {concernTouched.email && concernErrors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <FaExclamationCircle size={10} /> {concernErrors.email}
                </p>
              )}
            </div>

            {/* OTP field (only visible after OTP sent) */}
            {concernOtpSent && (
              <div>
                <label className="text-sm text-gray-700 font-medium">
                  OTP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="otp"
                  value={concernData.otp}
                  onChange={handleConcernChange}
                  onBlur={handleConcernBlur}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${concernTouched.otp && concernErrors.otp ? "border-red-400" : "border-gray-300"}`}
                  placeholder="Enter 6-digit OTP"
                />
                {concernTouched.otp && concernErrors.otp && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <FaExclamationCircle size={10} /> {concernErrors.otp}
                  </p>
                )}
              </div>
            )}

            {/* Phone Number – exactly 10 digits */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={concernData.phone}
                onChange={handleConcernChange}
                onBlur={handleConcernBlur}
                placeholder="10-digit mobile number (no spaces or dashes)"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${concernTouched.phone && concernErrors.phone ? "border-red-400" : "border-gray-300"}`}
              />
              {concernTouched.phone && concernErrors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <FaExclamationCircle size={10} /> {concernErrors.phone}
                </p>
              )}
            </div>

            {/* Concern textarea */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Report a Concern <span className="text-red-500">*</span>
              </label>
              <textarea
                name="concern"
                rows={4}
                maxLength={500}
                value={concernData.concern}
                onChange={handleConcernChange}
                onBlur={handleConcernBlur}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none ${concernTouched.concern && concernErrors.concern ? "border-red-400" : "border-gray-300"}`}
              />
              <div className="flex justify-between items-center mt-1">
                {concernTouched.concern && concernErrors.concern && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <FaExclamationCircle size={10} /> {concernErrors.concern}
                  </p>
                )}
                <p className="text-xs text-gray-400 ml-auto">
                  {concernData.concern.length} / 500 characters
                </p>
              </div>
            </div>

            {/* reCAPTCHA placeholder */}
            {/* <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-3 w-fit rounded-lg">
              <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
              <span className="text-sm text-gray-600">I'm not a robot</span>
              <span className="text-xs text-gray-400 ml-4">reCAPTCHA</span>
            </div> */}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isConcernSubmitting}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConcernSubmitting ? "Submitting..." : "Submit Concern"}
            </button>
          </form>
        </div>
      </section>

      {/* CTA – unchanged */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
            Let's Build Together
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 mt-4">
            Ready to start your{" "}
            <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
              next project?
            </span>
          </h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
            Let's discuss how Pyramid E&C can bring value to your hydrocarbon or energy transition initiative.
          </p>
          <button onClick={() => setIsModalOpen(true)}
            className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Our Experts →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;