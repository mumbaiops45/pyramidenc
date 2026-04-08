import React from 'react';
import {
  FaMobileAlt, FaChartLine, FaRobot, FaCogs, FaLink,
  FaBrain, FaTachometerAlt, FaUsers, FaMoneyBillWave,
  FaHeadset, FaShieldAlt, FaBolt, FaGlobe
} from 'react-icons/fa';
import { GiArtificialIntelligence, GiDigitalTrace } from 'react-icons/gi';
import { Link } from "react-router-dom";


const Digitalization = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-amber-500 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">Optimax App</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Digitalization
                <span className="block text-amber-400">Plants by Design</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C supplies plants that are truly <strong>Digital by design</strong>. Advanced features such as
                real-time process optimization and remote performance management via handheld devices provide complete
                control to stakeholders.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/digitalization-hero.jpg"
                  alt="Digital plant control dashboard on mobile device"
                  className="w-600 h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Digitalization Program Roadmap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Digitalization Program
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              A comprehensive step-by-step approach to transform your plant into a smart, connected, and optimized facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Operator Training Simulator */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaCogs size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Operator Training Simulator</h3>
              </div>
              <p className="text-gray-600 text-sm">Immersive simulation for safe and efficient operator training.</p>
            </div>

            {/* Process Digital Twin */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <GiDigitalTrace size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Process Digital Twin</h3>
              </div>
              <p className="text-gray-600 text-sm">Virtual replica of process for real-time monitoring and analysis.</p>
            </div>

            {/* Mechanical Digital Twin */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaRobot size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Mechanical Digital Twin</h3>
              </div>
              <p className="text-gray-600 text-sm">Equipment and asset modeling for predictive maintenance.</p>
            </div>

            {/* Data Linkage with Plant Control System */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaLink size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Data Linkage with DCS/PLC</h3>
              </div>
              <p className="text-gray-600 text-sm">Seamless integration of digital twin with plant control systems.</p>
            </div>

            {/* Real Time Performance Simulations */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaChartLine size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Real-Time Simulations</h3>
              </div>
              <p className="text-gray-600 text-sm">Live performance simulations for operational decision support.</p>
            </div>

            {/* AI Techniques to Predict Plant Performance */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <GiArtificialIntelligence size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">AI Performance Prediction</h3>
              </div>
              <p className="text-gray-600 text-sm">Machine learning models to forecast and optimize plant KPIs.</p>
            </div>

            {/* Performance Dashboard for Top Management */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaTachometerAlt size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Management Dashboard</h3>
              </div>
              <p className="text-gray-600 text-sm">Executive KPIs and performance analytics in one view.</p>
            </div>

            {/* Physical Operation Support */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaUsers size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">On-Site Operation Support</h3>
              </div>
              <p className="text-gray-600 text-sm">Physical operation support on a visit basis as needed.</p>
            </div>

            {/* Performance-based Revenue Model */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-amber-500 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                  <FaMoneyBillWave size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Performance-based Revenue Model</h3>
              </div>
              <p className="text-gray-600 text-sm">Align incentives with actual plant performance improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Support & Remote Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <FaHeadset className="text-gray-900 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">24/7 Help Desk & Advisory</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To maximize plant performance, Pyramid E&C offers comprehensive Digitalization solutions for hydrocarbon
                  asset owners across the globe with round-the-clock help desk and advisory services.
                </p>
                <div className="mt-6 flex items-center gap-2 text-amber-400">
                  <FaMobileAlt />
                  <span className="text-sm">Remote performance management via handheld devices</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaBrain className="text-amber-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-gray-900">Advanced Features</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Real-time process optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Remote performance management via handheld devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Complete stakeholder controls while on the move</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-amber-200">
                  <p className="text-gray-800 font-medium">Stakeholders can access and manage plants from anywhere, anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Data Security</h4>
              <p className="text-gray-600">Enterprise-grade cybersecurity for plant data and control systems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaBolt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Operational Agility</h4>
              <p className="text-gray-600">Faster response to process upsets and market changes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaGlobe />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Support</h4>
              <p className="text-gray-600">24/7 help desk and advisory services worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}



      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to digitize your plant?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Unlock real-time insights, predictive intelligence, and unmatched operational control with Pyramid E&C.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Business Enquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Digitalization;