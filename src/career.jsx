import React, { useState, useEffect, useRef } from "react";
import {
  FaArrowRight,
  FaPaperPlane,
  FaBriefcase,
  FaGraduationCap,
  FaChartLine,
  FaCloudUploadAlt,
  FaExclamationCircle,
} from "react-icons/fa";

// ============================================================================
// Custom hook for scroll animations
// ============================================================================
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

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    otp: "",
    phone: "",
    country: "",
    jobType: "",
    experience: "",
    city: "",
    position: "",
    currentOrganization: "",
    dateOfBirth: "",
    resume: null,
  });

  // Validation errors state
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const openings = [
    "Vice President - Engineering",
    "Vice President - BD (Oil & Gas - Middle East)",
    "Project Manager",
    "BD & Sales Manager",
    "Procurement Manager",
    "Document Controller",
  ];

  // Validation functions
  const validateFullName = (name) => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    // ✅ Fixed: removed unnecessary backslash before apostrophe
    if (!/^[a-zA-Z\s\-']+$/.test(name.trim()))
      return "Name can only contain letters, spaces, hyphens, apostrophes, and dots";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email address is required";
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address (e.g., name@domain.com)";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Phone number is required";
    // ✅ Fixed: removed unnecessary escapes inside character class
    const phoneRegex = /^[+\d\s\-()]{8,20}$/;
    if (!phoneRegex.test(phone.trim())) return "Please enter a valid phone number (8-20 digits, may include +, -, spaces, parentheses)";
    const digitCount = phone.replace(/\D/g, "").length;
    if (digitCount < 8 || digitCount > 15) return "Phone number must have 8-15 digits";
    return "";
  };

  // Run validation whenever formData changes
  useEffect(() => {
    const nameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setErrors({
      fullName: touched.fullName ? nameError : "",
      email: touched.email ? emailError : "",
      phone: touched.phone ? phoneError : "",
    });
  }, [formData.fullName, formData.email, formData.phone, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ fullName: true, email: true, phone: true });

    const nameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    if (nameError || emailError || phoneError) {
      alert("Please fix the errors in the form before submitting.");
      return;
    }

    const otherRequired = ["otp", "country", "jobType", "experience", "city", "position", "dateOfBirth"];
    const missing = otherRequired.filter(field => !formData[field]);
    if (missing.length > 0) {
      alert(`Please fill in all required fields: ${missing.join(", ")}`);
      return;
    }
    if (!formData.resume) {
      alert("Please upload your resume/CV.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Application submitted:", formData);
    alert("Application submitted successfully! (Demo)");
    setIsSubmitting(false);
    setFormData({
      fullName: "", email: "", otp: "", phone: "", country: "", jobType: "",
      experience: "", city: "", position: "", currentOrganization: "", dateOfBirth: "", resume: null,
    });
    setFileName("");
    setTouched({ fullName: false, email: false, phone: false });
  };

  const countries = [
    "India", "United States", "United Kingdom", "UAE", "Nigeria", "Canada",
    "Australia", "Germany", "France", "Singapore", "Other"
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
    .animate-fadeUp { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeLeft { animation: fadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .animate-fadeRight { animation: fadeRight 0.8s cubic-bezier(0.22,1,0.36,1) forwards; }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

  // Refs for fade‑in sections
  const [openingsRef, openingsInView] = useInView();
  const [competenceRef, competenceInView] = useInView();
  const [careerPathRef, careerPathInView] = useInView();
  const [formRef, formInView] = useInView();

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
            <span className="text-amber-400 font-medium">Career</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fadeUp delay-100">
            Work With{" "}
            <span
              className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 3s linear infinite" }}
            >
              Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
            Join Pyramid E&C – a global leader in hydrocarbon engineering. Build your career with world-class projects and a culture of excellence.
          </p>
        </div>
      </section>

      {/* Main Content – Two Columns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <div ref={openingsRef} className="mb-10 transition-all duration-700" style={{ opacity: openingsInView ? 1 : 0, transform: openingsInView ? "translateY(0)" : "translateY(30px)" }}>
                <div className="flex items-center gap-2 mb-4">
                  <FaBriefcase className="text-amber-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Current Openings</h2>
                </div>
                <ul className="space-y-2 pl-6 list-disc text-gray-700">
                  {openings.map((opening, idx) => <li key={idx}>{opening}</li>)}
                </ul>
              </div>

              <div ref={competenceRef} className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-100 transition-all duration-700" style={{ opacity: competenceInView ? 1 : 0, transform: competenceInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
                <div className="flex items-center gap-2 mb-3">
                  <FaGraduationCap className="text-amber-500" />
                  <h3 className="text-xl font-bold text-gray-900">Competence Development</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The employees at Pyramid E&C are exposed to world class engineering and project management skills
                  as well as hydrocarbon industry practices, thus the hardworking professionals can gain a great wealth
                  of knowledge in a relatively short time and further their career expeditiously. Pyramid E&C recognizes
                  the value of professional development and personal growth for employees and has established a skill
                  set based system for competence development to cover various functional areas.
                </p>
              </div>

              <div ref={careerPathRef} className="p-6 bg-amber-50 rounded-xl border border-amber-100 transition-all duration-700" style={{ opacity: careerPathInView ? 1 : 0, transform: careerPathInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.2s" }}>
                <div className="flex items-center gap-2 mb-3">
                  <FaChartLine className="text-amber-500" />
                  <h3 className="text-xl font-bold text-gray-900">Career Path</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Pyramid E&C provides a full career cycle to a professional beginning from core department,
                  progressing into project management and then into manufacturing, construction and operation of
                  hydrocarbon facilities. Pyramid E&C has a global geographical spread of projects across Asia,
                  Middle East, Africa and Americas, thereby providing exposure to international practices and
                  cultural diversity. Merit and performance are recognized and rewarded. We hire Corporate,
                  Engineering and Project Management professionals at our main offices in Houston, London, Dubai
                  and Mumbai, while Manufacturing professionals are employed at Mundra Fabrication yard, Gujarat, India.
                </p>
              </div>
            </div>

            {/* Right Column: Application Form with validation */}
            <div ref={formRef} className="transition-all duration-700" style={{ opacity: formInView ? 1 : 0, transform: formInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "0.1s" }}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FaPaperPlane className="text-white" />
                    <h2 className="text-xl font-bold text-white">Submit Your Application</h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name with validation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.fullName && touched.fullName ? "border-red-500" : "border-gray-300"}`}
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                        {errors.fullName && touched.fullName && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.fullName}</p>
                        )}
                      </div>
                      {/* Email with validation */}
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                        {errors.email && touched.email && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* OTP and Phone – Phone with validation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Enter OTP *</label>
                        <input
                          type="text"
                          name="otp"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.otp}
                          onChange={handleChange}
                          required
                        />
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
                          required
                        />
                        {errors.phone && touched.phone && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle size={10} /> {errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Country & Job Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Country *</label>
                        <select name="country" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.country} onChange={handleChange} required>
                          <option value="">-- Select a country --</option>
                          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Job Type *</label>
                        <select name="jobType" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.jobType} onChange={handleChange} required>
                          <option value="">-- Select --</option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                        </select>
                      </div>
                    </div>

                    {/* Experience & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Experience *</label>
                        <input type="text" name="experience" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.experience} onChange={handleChange} placeholder="e.g., 5+ years" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">City *</label>
                        <input type="text" name="city" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.city} onChange={handleChange} required />
                      </div>
                    </div>

                    {/* Position & Current Organization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Position Apply *</label>
                        <select name="position" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.position} onChange={handleChange} required>
                          <option value="">-- Select position --</option>
                          {openings.map((pos, idx) => <option key={idx} value={pos}>{pos}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Current Organization</label>
                        <input type="text" name="currentOrganization" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.currentOrganization} onChange={handleChange} />
                      </div>
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Date of Birth *</label>
                      <input type="date" name="dateOfBirth" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition" value={formData.dateOfBirth} onChange={handleChange} required />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Upload Resume/CV *</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 transition">
                        <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm mb-2">{fileName ? fileName : "Drop your file here or click here to upload"}</p>
                        <p className="text-xs text-gray-400">You can upload up to 1 file (PDF, DOC, DOCX)</p>
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" id="resume-upload" onChange={handleFileChange} />
                        <button type="button" onClick={() => document.getElementById("resume-upload").click()} className="mt-3 text-sm text-amber-600 hover:text-amber-700 font-medium">Choose File</button>
                      </div>
                    </div>

                    {/* reCaptcha placeholder */}
                    <div className="bg-gray-100 rounded-lg p-3 text-center text-gray-500 text-sm">🔒 reCAPTCHA placeholder (Demo)</div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"} <FaArrowRight className="text-sm" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section – Light yellow gradient */}
      <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-600"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">Shape the Future of Energy</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">Join a global team driving innovation</h2>
          <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">Be part of Pyramid E&C – where your career meets excellence in hydrocarbon and renewable technologies.</p>
          <button onClick={() => document.querySelector(".bg-gradient-to-r.from-amber-500")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg">
            Apply Now →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;