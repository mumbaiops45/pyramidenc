import React, { useState } from "react";
import {
  FaArrowRight,
  FaPaperPlane,
  FaBriefcase,
  FaGraduationCap,
  FaChartLine,
  FaCloudUploadAlt,
} from "react-icons/fa";

const Career = () => {
  const [ setIsModalOpen] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Application submitted:", formData);
    alert("Application submitted successfully! (Demo)");
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  const countries = [
    "India", "United States", "United Kingdom", "UAE", "Nigeria", "Canada", "Australia", "Germany", "France", "Singapore", "Other"
  ];

  return (
    <div className="bg-white">
      {/* Fix dropdown option colors */}
      <style>
        {`
          select option {
            color: #1f2937 !important;
            background-color: #ffffff !important;
          }
          select {
            color: #1f2937;
            background-color: #ffffff;
          }
        `}
      </style>


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50 py-16 md:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Work With <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join Pyramid E&C – a global leader in hydrocarbon engineering. Build your career with world-class projects and a culture of excellence.
          </p>
        </div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </section>

      {/* Main Content – Two Columns */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Openings, Competence, Career Path */}
            <div>
              {/* Current Openings */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <FaBriefcase className="text-amber-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Current Openings</h2>
                </div>
                <ul className="space-y-2 pl-6 list-disc text-gray-700">
                  {openings.map((opening, idx) => (
                    <li key={idx}>{opening}</li>
                  ))}
                </ul>
              </div>

              {/* Competence Development */}
              <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
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

              {/* Career Path */}
              <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
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

            {/* Right Column: Application Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FaPaperPlane className="text-white" />
                    <h2 className="text-xl font-bold text-white">Submit Your Application</h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 text-sm mb-6">
                    Submit your resume in English language, having a minimum of educational qualifications, experience,
                    skill set, intended position and latest color photograph. Please read our Privacy and Information
                    Security Policy carefully. Supporting documents need not be submitted at this stage.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

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
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Country *</label>
                        <select
                          name="country"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        >
                          <option value="">-- Select a country --</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Job Type *</label>
                        <select
                          name="jobType"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.jobType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">-- Select --</option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Experience *</label>
                        <input
                          type="text"
                          name="experience"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.experience}
                          onChange={handleChange}
                          placeholder="e.g., 5+ years"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">City *</label>
                        <input
                          type="text"
                          name="city"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Position Apply *</label>
                        <select
                          name="position"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.position}
                          onChange={handleChange}
                          required
                        >
                          <option value="">-- Select position --</option>
                          {openings.map((pos, idx) => (
                            <option key={idx} value={pos}>{pos}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Current Organization</label>
                        <input
                          type="text"
                          name="currentOrganization"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                          value={formData.currentOrganization}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Upload Resume/CV *</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-amber-400 transition">
                        <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm mb-2">
                          {fileName ? fileName : "Drop your file here or click here to upload"}
                        </p>
                        <p className="text-xs text-gray-400">You can upload up to 1 file (PDF, DOC, DOCX)</p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          id="resume-upload"
                          onChange={handleFileChange}
                        />
                        <button
                          type="button"
                          onClick={() => document.getElementById("resume-upload").click()}
                          className="mt-3 text-sm text-amber-600 hover:text-amber-700 font-medium"
                        >
                          Choose File
                        </button>
                      </div>
                    </div>

                    {/* reCaptcha placeholder */}
                    <div className="bg-gray-100 rounded-lg p-3 text-center text-gray-500 text-sm">
                      🔒 reCAPTCHA placeholder (Demo)
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shape the Future of Energy</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join a global team driving innovation in hydrocarbon and renewable technologies.
          </p>
          <button
            onClick={() => document.querySelector(".bg-gradient-to-r.from-amber-500")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Career;