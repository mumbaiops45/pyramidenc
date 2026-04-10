// import React from "react";

// const clients = [
//   { name: "Micro LNG", logo: "/Micro-LNG-Logo-Vertical.png" },
//   { name: "Optimax", logo: "/optimax-logo.png" },
//   { name: "Sphinx", logo: "/Sphinx-White-Logo.png" },
//   { name: "Hydroblue", logo: "/Hydroblue-Logo-Vertical.png" },
// ];

// const scrollingLogos = [...clients, ...clients, ...clients];

// const Clients = () => {
//   return (
//     <section className="bg-black-deep text-white py-12 lg:py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="flex items-center justify-center gap-2 mb-3">
//             <span className="w-8 h-[2px] bg-primery"></span>
//             <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
//               Trusted By Industry Leaders
//             </span>
//           </div>

//           <h2 className="text-3xl lg:text-5xl font-extrabold">
//             Our Clients
//           </h2>
//         </div>

//         {/* Marquee */}
//         <div className="relative overflow-hidden">

//           <div className="flex animate-marquee gap-10">

//             {scrollingLogos.map((client, idx) => (
//               <div
//                 key={idx}
//                 className="w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-primery hover:-translate-y-2 group"
//               >
//                 <img
//                   src={client.logo}
//                   alt={client.name}
//                   className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
//                 />
//               </div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Clients;


import React from "react";

const clients = [
  { name: "Micro LNG", logo: "/Micro-LNG-Logo-Vertical.png" },
  { name: "Optimax", logo: "/optimax-logo.png" },
  { name: "Sphinx", logo: "/Sphinx-White-Logo.png" },
  { name: "Hydroblue", logo: "/Hydroblue-Logo-Vertical.png" },
];

const scrollingLogos = [...clients, ...clients, ...clients];

const Clients = () => {
  return (
    <section className="bg-white text-gray-900 py-12 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-primery"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
              Trusted By Industry Leaders
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900">
            Our Clients
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-10">
            {scrollingLogos.map((client, idx) => (
              <div
                key={idx}
                className="w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white/10 transition-all duration-300 hover:border-primery hover:-translate-y-2 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;