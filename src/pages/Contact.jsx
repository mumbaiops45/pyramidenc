import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaArrowRight,
  FaPaperPlane,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    phone: "",
    email: "",
    otp: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#enquiry") {
      setIsModalOpen(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    alert("Enquiry submitted successfully! (Demo)");
    setIsSubmitting(false);
    setIsModalOpen(false);
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

  return (
    <div className="bg-white">
      {/* Hero Section with rounded border container */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50 py-16 md:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Rounded container with border */}
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200 shadow-lg p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Contact <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Connect with Pyramid E&C to explore tailored engineering, modular plant and energy-transition
              solutions backed by over 25 years of global hydrocarbon expertise.
            </p>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </section>

      {/* Regional Offices – New two-column minimal design */}
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

          {/* Two‑column grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="relative border border-gray-100 rounded-xl p-5 transition-all duration-300 hover:border-amber-300 hover:shadow-md group"
              >
                {/* Top accent line on hover */}
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

      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-amber-500 hover:bg-amber-600 text-white px-3 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group flex flex-col items-center gap-2 hidden md:flex"
      >
        <FaEnvelope className="text-xl group-hover:scale-110 transition" />
        <span className="text-xs font-semibold tracking-wider">Get in<br />touch</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Company *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Website *</label>
                    <input
                      type="url"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Work Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">OTP *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Project Description *</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"} <FaArrowRight className="text-sm" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your next project?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss how Pyramid E&C can bring value to your hydrocarbon or energy transition initiative.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;