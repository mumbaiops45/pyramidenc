import React from 'react';
import { FaLeaf, FaFlask, FaRecycle, FaChartLine, FaShieldAlt, FaBolt, FaGlobe } from 'react-icons/fa';
import { GiPlantSeed, GiGasPump } from 'react-icons/gi';
import { MdBiotech } from 'react-icons/md';
import { Link } from "react-router-dom";

const BioChemicals = () => {
  return (
    <div className="bg-white">


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Bio Chemicals
                <span className="block text-amber-400">Sustainable Technology</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Pyramid E&C offers modern, efficient, and fully automated Conventional and Cellulosic
                Bioethanol plants with Zero Liquid Discharge (ZLD) and Zero Greenhouse Gas (GHG) emissions.
              </p>

            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/biochemicals.jpg"
                  alt="Bioethanol plant and green technology"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Core Bio-Chemical Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Sustainable Bio-Products
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              From first-generation ethanol to advanced bioplastics and SAF, we deliver complete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1G Bioethanol */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  <GiPlantSeed size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">1G Bioethanol</h3>
                <p className="text-gray-500 text-sm mt-2">First generation ethanol from sugar/starch crops</p>
              </div>
            </div>

            {/* Bio Methanol */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  <FaFlask size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Bio Methanol</h3>
                <p className="text-gray-500 text-sm mt-2">Renewable methanol from biomass or captured CO₂</p>
              </div>
            </div>

            {/* Bio LNG */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  <GiGasPump size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Bio LNG</h3>
                <p className="text-gray-500 text-sm mt-2">Liquefied biomethane for clean transport</p>
              </div>
            </div>

            {/* Bioplastics */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-t-2xl"></div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  <FaRecycle size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Bioplastics</h3>
                <p className="text-gray-500 text-sm mt-2">Renewable and biodegradable polymers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Plant Capacities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Own Technology */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border-b-4 border-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <FaLeaf className="text-amber-600 text-3xl" />
                <h3 className="text-2xl font-bold text-gray-900">Own Technology</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Proprietary technology for <strong>Bioethanol</strong> and <strong>Bio-methanol</strong> production,
                developed in-house for maximum efficiency, lower CAPEX/OPEX, and seamless integration.
              </p>
            </div>

            {/* Standard Plants */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border-b-4 border-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <FaChartLine className="text-amber-600 text-3xl" />
                <h3 className="text-2xl font-bold text-gray-900">Standard Plants</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Pre-engineered Bioethanol plants available in standard capacities:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">100 KL/day</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">200 KL/day</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">400 KL/day</span>
              </div>
              <p className="text-gray-600 text-sm mt-3">Fully automated with ZLD and zero GHG emissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAF and Partner Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* SAF Card */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-xl">✈️</span>
                  </div>
                  <h3 className="text-2xl font-bold">Sustainable Aviation Fuel (SAF)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Through strategic partnerships, Pyramid E&C offers advanced technology for Sustainable Aviation Fuel production,
                  enabling decarbonization of the aviation sector via HEFA, ATJ, and Gasification-FT routes.
                </p>
              </div>
            </div>

            {/* Partner Technologies */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <MdBiotech className="text-amber-600 text-3xl" />
                  <h3 className="text-2xl font-bold text-gray-900">Partner Technologies</h3>
                </div>
                <p className="text-gray-700 mb-4">Licensed access to world-class technologies for:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-gray-800 font-medium">Ethylene Glycol</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-gray-800 font-medium">Ethylene Oxide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-gray-800 font-medium">Sustainable Aviation Fuel (SAF)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Zero Liquid Discharge</h4>
              <p className="text-gray-600">Complete water recycling and effluent elimination.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaBolt />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Zero GHG Emissions</h4>
              <p className="text-gray-600">Carbon-neutral processes with carbon capture integration.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="text-amber-600 text-4xl mb-3 flex justify-center">
                <FaGlobe />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Circular Economy</h4>
              <p className="text-gray-600">Waste-to-value conversion and sustainable feedstocks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Drive the green transition with Pyramid E&C</h2>
          <p className="text-gray-300 text-lg mb-8">
            From concept to commissioning, our bio-chemical solutions help you achieve sustainability goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BioChemicals;