// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// const menuItems = [
//   { name: "Home", path: "/" },

//   {
//     name: "About",
//     // path: "/about",
//     subMenu: [
//       { name: "Pyramid E&C Group", path: "/about/pyramid-e-c-group" },
//       { name: "Guiding Principles", path: "/about/guiding-principles" },
//       { name: "History", path: "/about/history" },
//       { name: "Leadership", path: "/about/leadership" },
//       { name: "Management Team", path: "/about/management-team" },
//       { name: "Our Markets", path: "/about/markets" },
//     ],
//   },

//   {
//     name: "Products & Solutions",
//     // path: "/products",
//     subMenu: [
//       { name: "Oil & Gas", path: "/products/oilgas" },
//       { name: "Midstream", path: "/products/midstream" },
//       { name: "Bio Chemicals", path: "/products/biochemicals" },
//       { name: "Syngas Derivatives", path: "/products/syngas" },
//       { name: "Decarbonization", path: "/products/decarbonization" },
//       { name: "Digitalization", path: "/products/digitalization" },
//     ],
//   },

//   {
//     name: "Services",
//     // path: "/services",
//     subMenu: [
//       { name: "Research & Development", path: "/services/research-and-development" },
//       { name: "Project Development", path: "/services/project-development" },
//       { name: "EPCM Services", path: "/services/epcm-services" },
//       { name: "Turnkey EPC Services", path: "/services/epc" },
//       { name: "Modular Fabrication", path: "/services/modular" },
//     ],
//   },

//   { name: "News", path: "/news" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const NavItem = ({ item, isActive }) => {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <Link
//         to={item.path}
//         className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
//           isActive
//             ? "text-primery bg-white/5"
//             : "text-gray-400 hover:text-primery hover:bg-white/5"
//         }`}
//       >
//         {item.name}
//       </Link>

//       {item.subMenu && (
//         <div
//           className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 z-50 ${
//             open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
//           }`}
//         >
//           <div className="rounded-xl overflow-hidden shadow-xl border border-border bg-black-soft">
//             {item.subMenu.map((sub, i) => (
//               <Link
//                 key={i}
//                 to={sub.path}
//                 className="block px-4 py-2.5 text-sm text-gray-400 hover:text-primery hover:bg-white/5 transition"
//               >
//                 {sub.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedMobile, setExpandedMobile] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     setMobileOpen(false);
//     setExpandedMobile(null);
//   }, [location]);

//   const isActive = (path) =>
//     path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

//   return (
//     <nav className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3">
//       <div className="w-full max-w-7xl rounded-2xl bg-black-soft border border-primery shadow-lg">
//         <div className="px-5 lg:px-8">
//           <div className="flex items-center justify-between h-20">

//             {/* Logo */}
//             <Link to="/" className="flex-shrink-0">
//               <img
//                 src="/PYRAMID-EC-Logo.png"
//                 alt="logo"
//                 className="h-6"
//               />
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-4">
//               {menuItems.map((item, i) => (
//                 <NavItem key={i} item={item} isActive={isActive(item.path)} />
//               ))}
//             </div>

//             {/* CTA */}
//             {/* <Link
//               to="/contact"
//               className="hidden lg:inline-flex px-5 py-2 rounded-full text-sm font-semibold text-black bg-primery hover:bg-primery-light transition"
//             >
//               Get in touch →
//             </Link> */}

//             {/* Mobile Button */}
//             <button
//               className="lg:hidden text-white"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               ☰
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`lg:hidden overflow-hidden transition-all duration-300 ${
//               mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="pt-3 pb-5 border-t border-border space-y-1">
//               {menuItems.map((item, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between items-center">
//                     <Link
//                       to={item.path}
//                       className="flex-1 px-3 py-2 text-gray-300"
//                     >
//                       {item.name}
//                     </Link>

//                     {item.subMenu && (
//                       <button
//                         onClick={() =>
//                           setExpandedMobile(expandedMobile === i ? null : i)
//                         }
//                         className="text-gray-400 px-2"
//                       >
//                         ▼
//                       </button>
//                     )}
//                   </div>

//                   {item.subMenu && (
//                     <div
//                       className={`pl-5 overflow-hidden transition-all ${
//                         expandedMobile === i ? "max-h-96" : "max-h-0"
//                       }`}
//                     >
//                       {item.subMenu.map((sub, j) => (
//                         <Link
//                           key={j}
//                           to={sub.path}
//                           className="block px-3 py-1 text-sm text-gray-500"
//                         >
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}

//               {/* <Link
//                 to="/contact"
//                 className="block mt-4 mx-1 text-center text-sm font-semibold text-black bg-primery rounded-xl py-3"
//               >
//                 Get in touch →
//               </Link> */}
//             </div>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// const menuItems = [
//   { name: "Home", path: "/" },

//   {
//     name: "About",
//     subMenu: [
//       { name: "Pyramid E&C Group", path: "/about/pyramid-e-c-group" },
//       { name: "Guiding Principles", path: "/about/guiding-principles" },
//       { name: "History", path: "/about/history" },
//       { name: "Leadership", path: "/about/leadership" },
//       { name: "Management Team", path: "/about/management-team" },
//       { name: "Our Markets", path: "/about/markets" },
//     ],
//   },

//   {
//     name: "Products & Solutions",
//     subMenu: [
//       { name: "Oil & Gas", path: "/products/oilgas" },
//       { name: "Midstream", path: "/products/midstream" },
//       { name: "Bio Chemicals", path: "/products/biochemicals" },
//       { name: "Syngas Derivatives", path: "/products/syngas" },
//       { name: "Decarbonization", path: "/products/decarbonization" },
//       { name: "Digitalization", path: "/products/digitalization" },
//     ],
//   },

//   {
//     name: "Services",
//     subMenu: [
//       { name: "Research & Development", path: "/services/research-and-development" },
//       { name: "Project Development", path: "/services/project-development" },
//       { name: "EPCM Services", path: "/services/epcm-services" },
//       { name: "Turnkey EPC Services", path: "/services/epc" },
//       { name: "Modular Fabrication", path: "/services/modular" },
//     ],
//   },

//   { name: "News", path: "/news" },
//   { name: "Career", path: "/career" },        
//   { name: "Contact Us", path: "/contact" },
// ];

// const NavItem = ({ item, isActive }) => {
//   const [open, setOpen] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//     >
//       <Link
//         to={item.path}
//         className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
        

//             isActive
//   ? "text-amber-400 bg-white/5"
//   : "text-gray-400 hover:text-amber-400 hover:bg-white/5"
//         }`}
//       >
//         {item.name}
//       </Link>

//       {item.subMenu && (
//         <div
//           className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 z-50 ${
//             open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
//           }`}
//         >
//           {/* <div className="rounded-xl overflow-hidden shadow-xl border border-border bg-black-soft"> */}
//             <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900">
//             {item.subMenu.map((sub, i) => (
//               <Link
//                 key={i}
//                 to={sub.path}
//                 // className="block px-4 py-2.5 text-sm text-gray-400 hover:text-primery hover:bg-white/5 transition"
//                 className="block px-4 py-2.5 text-sm text-gray-400 hover:text-amber-400 hover:bg-white/5 transition"
//               >
//                 {sub.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedMobile, setExpandedMobile] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     setMobileOpen(false);
//     setExpandedMobile(null);
//   }, [location]);

//   const isActive = (path) =>
//     path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

//   return (
//     <nav className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3">
//       {/* <div className="w-full max-w-7xl rounded-2xl bg-black-soft border border-primery shadow-lg"> */}
//         <div className="w-full max-w-7xl rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-amber-500/20 shadow-lg backdrop-blur-md">
        
//         <div className="px-5 lg:px-8">
//           <div className="flex items-center justify-between h-20">

//             {/* Logo */}
//             <Link to="/" className="flex-shrink-0">
//               <img
//                 src="/PYRAMID-EC-Logo.png"
//                 alt="logo"
//                 className="h-6"
//               />
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center gap-4">
//               {menuItems.map((item, i) => (
//                 <NavItem key={i} item={item} isActive={isActive(item.path)} />
//               ))}
//             </div>

//             {/* Mobile Button */}
//             <button
//               className="lg:hidden text-white"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               ☰
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`lg:hidden overflow-hidden transition-all duration-300 ${
//               mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             <div className="pt-3 pb-5 border-t border-border space-y-1">
//               {menuItems.map((item, i) => (
//                 <div key={i}>
//                   <div className="flex justify-between items-center">
//                     <Link
//                       to={item.path}
//                       className="text-gray-300 hover:text-amber-400"
//                     >
//                       {item.name}
//                     </Link>

//                     {item.subMenu && (
//                       <button
//                         onClick={() =>
//                           setExpandedMobile(expandedMobile === i ? null : i)
//                         }
//                         className="text-gray-400 px-2"
//                       >
//                         ▼
//                       </button>
//                     )}
//                   </div>

//                   {item.subMenu && (
//                     <div
//                       className={`pl-5 overflow-hidden transition-all ${
//                         expandedMobile === i ? "max-h-96" : "max-h-0"
//                       }`}
//                     >
//                       {item.subMenu.map((sub, j) => (
//                         <Link
//                           key={j}
//                           to={sub.path}
//                           className="block px-3 py-1 text-sm text-gray-500"
//                         >
//                           {sub.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    subMenu: [
      { name: "Pyramid E&C Group", path: "/about/pyramid-e-c-group" },
      { name: "Guiding Principles", path: "/about/guiding-principles" },
      { name: "History", path: "/about/history" },
      { name: "Leadership", path: "/about/leadership" },
      { name: "Management Team", path: "/about/management-team" },
      { name: "Certifications", path: "/about/certifications" },

    ],
  },
  {
    name: "Products & Solutions",
    subMenu: [
      { name: "Oil & Gas", path: "/products/oilgas" },
      { name: "Midstream", path: "/products/midstream" },
      { name: "Bio Chemicals", path: "/products/biochemicals" },
      { name: "Syngas Derivatives", path: "/products/syngas" },
      { name: "Decarbonization", path: "/products/decarbonization" },
      { name: "Digitalization", path: "/products/digitalization" },
    ],
  },
  {
    name: "Services",
    subMenu: [
      { name: "Research & Development", path: "/services/research-and-development" },
      { name: "Project Development", path: "/services/project-development" },
      { name: "EPCM Services", path: "/services/epcm-services" },
      { name: "Turnkey EPC Services", path: "/services/epc" },
      { name: "Modular Fabrication", path: "/services/modular" },
    ],
  },
  { name: "News", path: "/news" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const NavItem = ({ item, isActive }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.path}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          isActive
            ? "text-amber-400 bg-white/5"
            : "text-gray-400 hover:text-amber-400 hover:bg-white/5"
        }`}
      >
        {item.name}
      </Link>

      {item.subMenu && (
        <div
          className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 z-50 ${
            open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
          }`}
        >
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-900">
            {item.subMenu.map((sub, i) => (
              <Link
                key={i}
                to={sub.path}
                className="block px-4 py-2.5 text-sm text-gray-400 hover:text-amber-400 hover:bg-white/5 transition"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
  }, [location]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-b border-amber-500/20 shadow-lg backdrop-blur-md">
      <div className="px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/PYRAMID-EC-Logo.png" alt="logo" className="h-6" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            {menuItems.map((item, i) => (
              <NavItem key={i} item={item} isActive={isActive(item.path)} />
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-3 pb-5 border-t border-gray-800 space-y-1">
            {menuItems.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center">
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-amber-400"
                  >
                    {item.name}
                  </Link>

                  {item.subMenu && (
                    <button
                      onClick={() =>
                        setExpandedMobile(expandedMobile === i ? null : i)
                      }
                      className="text-gray-400 px-2"
                    >
                      ▼
                    </button>
                  )}
                </div>

                {item.subMenu && (
                  <div
                    className={`pl-5 overflow-hidden transition-all ${
                      expandedMobile === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.subMenu.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        className="block px-3 py-1 text-sm text-gray-500"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;