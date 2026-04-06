import React from 'react';
import { 
  FaLeaf, FaSnowflake, FaFire, FaArrowDown, FaFlask, 
  FaRecycle, FaSolarPanel, FaShieldAlt, FaBolt, FaGlobe, 
  FaDownload, FaChartLine 
} from 'react-icons/fa';
import { GiWindmill } from 'react-icons/gi';

const Decarbonization = () => {
  return (
    <div className="bg-white">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Decarbonization
                <span className="block text-amber-400">Process Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C offers several solutions to reduce carbon impact of hydrocarbon processing, 
                from electric reforming and CO₂ liquefaction to flare mitigation and green petrochemicals.
              </p>
             
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/decarbonization-hero.jpg"
                  alt="Decarbonization plant"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Our Technologies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Carbon Reduction Solutions
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Innovative approaches to lower emissions, capture carbon, and create value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Electric Reforming */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaLeaf size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Electric Reforming</h3>
                <p className="text-gray-600 text-sm mt-2">
                  The innovative <strong>HydroBlue® Reformer</strong> eliminates flue gas emissions.
                </p>
              </div>
            </div>

            {/* CO2 Liquefaction */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaSnowflake size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">CO₂ Liquefaction</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Concentrated CO₂ is efficiently liquefied or converted into dry ice.
                </p>
              </div>
            </div>

            {/* Flare Mitigation */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaFire size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Flare Mitigation</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Liquefy flared hydrocarbons into "Blue" Ammonia or Methanol.
                </p>
              </div>
            </div>

            {/* Carbon Sequestration */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaArrowDown size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Carbon Sequestration</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Compression and reinjection to store CO₂ in subsurface reservoirs.
                </p>
              </div>
            </div>

            {/* Fuel Ethanol */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaFlask size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fuel Ethanol</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Anhydrous Bio-Ethanol from grains, sugar cane, or cellulosic feedstock.
                </p>
              </div>
            </div>

            {/* Green Petrochemicals */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 text-amber-600">
                  <FaRecycle size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Green Petrochemicals</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Bio-Ethanol as feedstock for petrochemicals, plastics, and hydrogen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Energy Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <FaSolarPanel className="text-gray-900 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Alternative Energy Integration</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Energy audit and replacement of conventional power with solar, wind, or other renewables.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <GiWindmill className="text-amber-400 mx-auto text-2xl mb-1" />
                    <span className="text-sm">Wind Power</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <FaSolarPanel className="text-amber-400 mx-auto text-2xl mb-1" />
                    <span className="text-sm">Solar PV</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartLine className="text-amber-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-gray-900">Integrated Approach</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Combining process engineering, renewables, and carbon management for holistic decarbonization.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Carbon Footprint Analysis</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Feasibility Studies</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">Technology Selection</span>
                  <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-medium">EPC Implementation</span>
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
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaShieldAlt /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Net Zero Ready</h4>
              <p className="text-gray-600">Solutions for carbon neutrality.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaBolt /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Value Creation</h4>
              <p className="text-gray-600">Turning waste into revenue.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center"><FaGlobe /></div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">ESG Excellence</h4>
              <p className="text-gray-600">Enhance your ESG performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to decarbonize your operations?</h2>
          <p className="text-gray-300 text-lg mb-8">Partner with Pyramid E&C to lead the energy transition.</p>
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

export default Decarbonization;