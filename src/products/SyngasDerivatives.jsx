import React from 'react';
import { FaWind, FaFlask, FaLeaf, FaCompress, FaWarehouse, FaChartLine, FaShieldAlt, FaBolt, FaGlobe, FaDownload } from 'react-icons/fa';
import { GiChemicalDrop, GiGasPump } from 'react-icons/gi';

const SyngasDerivatives = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
     

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Syngas Derivatives
                <span className="block text-amber-400">Hydrogen · Ammonia · Methanol</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C delivers comprehensive engineering solutions for Syngas Derivatives, supporting 
                the development of Hydrogen, Ammonia, and Methanol production facilities with a focus on 
                efficiency, safety, and sustainability.
              </p>
             
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/syngas-hero.jpg"
                  alt="Syngas derivatives plant - Hydrogen, Ammonia, Methanol"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Key Derivatives - Three Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Core Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Syngas-Based Derivatives
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              From green hydrogen to low-carbon ammonia and methanol, we deliver complete engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hydrogen Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaWind size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Hydrogen</h3>
                <p className="text-gray-600 mb-4">
                  Complete hydrogen solutions from production to storage and distribution.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Green, blue & conventional hydrogen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Electrolysis & reforming technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Compression & storage systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ammonia Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <GiChemicalDrop size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ammonia</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end ammonia synthesis, storage, and handling infrastructure.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Ammonia synthesis loops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Low-carbon & green ammonia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Refrigerated storage & export terminals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Methanol Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                  <FaFlask size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Methanol</h3>
                <p className="text-gray-600 mb-4">
                  Methanol production units tailored to global market demands.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Conventional & renewable methanol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Methanol synthesis & purification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">▹</span>
                    <span>Storage and distribution systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Engineering Capabilities</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From reforming to utilities integration, we deliver optimized plant performance across the syngas value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <FaCompress className="text-amber-600 text-2xl mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reforming Technologies</h3>
              <p className="text-gray-600 text-sm">SMR, ATR, POx, and electrified reforming for hydrogen and syngas production.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <GiGasPump className="text-amber-600 text-2xl mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Synthesis Loops</h3>
              <p className="text-gray-600 text-sm">Ammonia and methanol synthesis loop design, catalyst selection, and optimization.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <FaCompress className="text-amber-600 text-2xl mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compression Systems</h3>
              <p className="text-gray-600 text-sm">Synthesis gas compressors, recycle compressors, and driver selection.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <FaWarehouse className="text-amber-600 text-2xl mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Storage & Handling</h3>
              <p className="text-gray-600 text-sm">Cryogenic tanks, pressurized bullets, and loading/unloading facilities.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <FaChartLine className="text-amber-600 text-2xl mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Utilities Integration</h3>
              <p className="text-gray-600 text-sm">Steam systems, cooling water, power generation, and waste heat recovery.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
              <FaShieldAlt className="text-amber-600 text-2xl mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety & Sustainability</h3>
              <p className="text-gray-600 text-sm">Hazard analysis, carbon capture integration, and low-carbon design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color-coded Project Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaBolt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Concept to Detail</h4>
              <p className="text-gray-600">FEED, detailed engineering, and execution support for syngas derivatives.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaGlobe />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Global Standards</h4>
              <p className="text-gray-600">Compliance with API, ASME, ISO, and international codes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaLeaf />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sustainable Solutions</h4>
              <p className="text-gray-600">Green, blue, and low-carbon pathways for future energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to advance your syngas derivatives project?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with Pyramid E&C for innovative, safe, and efficient hydrogen, ammonia, and methanol facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Contact Our Experts
            </button>
            <button className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all flex items-center gap-2">
              <FaDownload className="text-sm" /> Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SyngasDerivatives;