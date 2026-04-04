import React from "react";
import { GiGears, GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLeaf, FaLaptopCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const About = () => {
  return (
    <section className="px-6 py-16 lg:py-24 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-0.5 rounded bg-primery"></span>
          <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
            Who We Are
          </span>  
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          Pioneering Energy Transition
        </h2>
      </div>

      {/* Main description card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 mb-10 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-gray-700 leading-relaxed">
          Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
          comprising of research, engineering, automation, digitalization, manufacturing and
          construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining,
          Natural Gas Reforming and Bio Chemicals where we supply sustainable, low carbon impact
          processing solutions.
        </p>
      </div>

      {/* Key capabilities grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <GiGears className="text-3xl" />,
            title: "Technologies",
            desc: "A portfolio of 27 technologies in conventional and renewable space. Own laboratory and pilot facility to develop and test new technologies.",
          },
          {
            icon: <MdEngineering className="text-3xl" />,
            title: "Engineering",
            desc: "Over a million manhours of process design and multidisciplinary engineering capability.",
          },
          {
            icon: <GiFactory className="text-3xl" />,   // replaced GiMechanicalGears
            title: "Modular Fabrication",
            desc: "Specialist in process modules having port side facility for 1000 MT LOLO cargo.",
          },
          {
            icon: <IoSettingsSharp className="text-3xl" />,
            title: "TEPC Services",
            desc: "Technology + EPC delivery with process performance warranties.",
          },
          {
            icon: <FaLeaf className="text-3xl" />,
            title: "Decarbonization",
            desc: "HydroBlue® range of induction reformers to completely eliminate carbon dioxide emissions and reduce feedstock consumption.",
          },
          {
            icon: <FaLaptopCode className="text-3xl" />,
            title: "Digitalization",
            desc: "OPTIMAX® system to monitor and control process plants or equipment fleet remotely.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primery hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-primery mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Closing statement */}
      <div className="mt-12 text-center">
        <div className="inline-block bg-gray-100 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
          <p className="text-gray-700 text-sm">
            Pyramid E&C works with developers and asset owners in all project phases – from conceptualization to after‑sales support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;