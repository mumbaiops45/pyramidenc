import React from 'react';
import { FaOilCan, FaIndustry, FaWater, FaGasPump, FaChartLine, FaShieldAlt, FaBolt, FaGlobe } from 'react-icons/fa';

const OilGas = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Oil & Gas Engineering
                <span className="block text-amber-400">Integrated Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C delivers integrated Oil & Gas engineering solutions across the upstream 
                and midstream value chain, providing reliable, efficient, and safety-focused designs 
                tailored to complex energy projects.
              </p>
              
            </div>

            {/* Right side - Oil & Gas Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/oilgas.jpg"
                  alt="Oil refinery and gas processing plant"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Core Expertise - Three Main Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Industry-Leading Expertise
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Specialized engineering solutions across the entire oil & gas value chain, from surface production to offshore floating systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Surface Production Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaOilCan size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Surface Production</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive surface production facilities engineering for optimal hydrocarbon recovery.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Wellhead systems & flowlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Separation units (3-phase & test separators)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Oil treatment & dehydration solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Produced water treatment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gas Processing Plants Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaIndustry size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Gas Processing Plants</h3>
                <p className="text-gray-600 mb-4">
                  Advanced gas treatment and processing facilities for market-ready products.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Gas sweetening (amine & membrane)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Dehydration (glycol & molecular sieve)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>NGL recovery & fractionation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Compression & refrigeration systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Floating Production Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaWater size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Floating Production</h3>
                <p className="text-gray-600 mb-4">
                  Offshore floating production systems engineering for deepwater developments.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Topside process & utilities design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Structural & hull integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Piping & riser systems engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>FPSO/FSO/Floating LNG support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midstream Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <FaGasPump className="text-gray-900" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold">Midstream Infrastructure</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  End-to-end midstream engineering solutions ensuring reliable transport, storage, and distribution of oil & gas products.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Pipeline Systems</div>
                    <p className="text-sm text-gray-300">Onshore & offshore pipelines, flow assurance, and integrity management.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Compressor & Pump Stations</div>
                    <p className="text-sm text-gray-300">High-efficiency compression and pumping solutions.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Storage Facilities</div>
                    <p className="text-sm text-gray-300">Tank farms, cavern storage, and LNG terminals.</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-semibold text-amber-400 mb-2">Metering & Automation</div>
                    <p className="text-sm text-gray-300">Custody transfer, fiscal metering, and SCADA integration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartLine className="text-amber-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-gray-900">Project Lifecycle Support</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  From concept through detailed engineering and execution support, Pyramid E&C ensures compliance 
                  with international standards (API, ASME, ISO, NACE) while optimizing cost, performance, and operational efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">FEED Studies</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Detailed Engineering</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Procurement Support</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Construction Supervision</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Commissioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Safety-Focused Design</h4>
              <p className="text-gray-600">Hazard identification, risk assessment, and inherently safer design philosophies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaBolt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Operational Efficiency</h4>
              <p className="text-gray-600">Optimized process configurations and energy-efficient systems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaGlobe />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600">Full compliance with international codes and client specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to engineer your next energy project?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with Pyramid E&C for reliable, innovative, and cost-effective oil & gas engineering solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Contact Our Experts
            </button>
            <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGas;