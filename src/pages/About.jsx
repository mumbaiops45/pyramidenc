// import React from "react";
// import { GiGears, GiFactory } from "react-icons/gi";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaLeaf, FaLaptopCode } from "react-icons/fa";
// import { MdEngineering } from "react-icons/md";

// const About = () => {
//   return (
//     <section className="px-6 py-16 lg:py-24 max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50">
//       {/* Section header */}
//       <div className="text-center mb-12">
//         <div className="flex items-center justify-center gap-2 mb-3">
//           <span className="w-8 h-0.5 rounded bg-primery"></span>
//           <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
//             Who We Are
//           </span>  
//         </div>
//         <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
//           Pioneering Energy Transition
//         </h2>
//       </div>

//       {/* Main description card */}
//       <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-10 mb-10 shadow-md hover:shadow-lg transition-shadow duration-300">
//         <p className="text-gray-700 leading-relaxed">
//           Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
//           comprising of research, engineering, automation, digitalization, manufacturing and
//           construction firms. The Group specializes in Oil & Gas Production, Petroleum Refining,
//           Natural Gas Reforming and Bio Chemicals where we supply sustainable, low carbon impact
//           processing solutions.
//         </p>
//       </div>

//       {/* Key capabilities grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[
//           {
//             icon: <GiGears className="text-3xl" />,
//             title: "Technologies",
//             desc: "A portfolio of 27 technologies in conventional and renewable space. Own laboratory and pilot facility to develop and test new technologies.",
//           },
//           {
//             icon: <MdEngineering className="text-3xl" />,
//             title: "Engineering",
//             desc: "Over a million manhours of process design and multidisciplinary engineering capability.",
//           },
//           {
//             icon: <GiFactory className="text-3xl" />,   // replaced GiMechanicalGears
//             title: "Modular Fabrication",
//             desc: "Specialist in process modules having port side facility for 1000 MT LOLO cargo.",
//           },
//           {
//             icon: <IoSettingsSharp className="text-3xl" />,
//             title: "TEPC Services",
//             desc: "Technology + EPC delivery with process performance warranties.",
//           },
//           {
//             icon: <FaLeaf className="text-3xl" />,
//             title: "Decarbonization",
//             desc: "HydroBlue® range of induction reformers to completely eliminate carbon dioxide emissions and reduce feedstock consumption.",
//           },
//           {
//             icon: <FaLaptopCode className="text-3xl" />,
//             title: "Digitalization",
//             desc: "OPTIMAX® system to monitor and control process plants or equipment fleet remotely.",
//           },
//         ].map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primery hover:shadow-lg transition-all duration-300 group"
//           >
//             <div className="text-primery mb-4 group-hover:scale-110 transition-transform">
//               {item.icon}
//             </div>
//             <h3 className="text-gray-900 font-bold text-lg mb-2">{item.title}</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Closing statement */}
//       <div className="mt-12 text-center">
//         <div className="inline-block bg-gray-100 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
//           <p className="text-gray-700 text-sm">
//             Pyramid E&C works with developers and asset owners in all project phases – from conceptualization to after‑sales support.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import { GiGears, GiFactory } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaLeaf, FaLaptopCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const About = () => {
  return (
    <section className="bg-black-soft text-white py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-10 h-[2px] bg-primery"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
              Who We Are
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold">
            Pioneering Energy Transition
          </h2>
        </div>

        {/* 🔥 Description Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-10 mb-14 hover:border-primery transition-all duration-300">
          <p className="text-gray-300 leading-relaxed text-sm lg:text-base max-w-4xl mx-auto text-center">
            Pyramid E&C group, founded in 1995, is a global hydrocarbon processing solution provider
            comprising research, engineering, automation, digitalization, manufacturing and construction firms.
            We specialize in Oil & Gas Production, Petroleum Refining, Natural Gas Reforming and Bio Chemicals,
            delivering sustainable and low carbon processing solutions.
          </p>
        </div>

        {/* 🔥 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <GiGears />,
              title: "Technologies",
              desc: "27+ technologies across conventional & renewable sectors with in-house R&D labs.",
            },
            {
              icon: <MdEngineering />,
              title: "Engineering",
              desc: "Over a million manhours of multidisciplinary engineering expertise.",
            },
            {
              icon: <GiFactory />,
              title: "Modular Fabrication",
              desc: "Advanced process modules with port-side heavy cargo handling.",
            },
            {
              icon: <IoSettingsSharp />,
              title: "TEPC Services",
              desc: "End-to-end delivery with guaranteed process performance.",
            },
            {
              icon: <FaLeaf />,
              title: "Decarbonization",
              desc: "HydroBlue® tech eliminates CO₂ emissions efficiently.",
            },
            {
              icon: <FaLaptopCode />,
              title: "Digitalization",
              desc: "OPTIMAX® enables remote monitoring & control systems.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primery hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-primery text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 Bottom Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <p className="text-gray-400 text-sm">
              From concept to commissioning — we deliver complete engineering solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;