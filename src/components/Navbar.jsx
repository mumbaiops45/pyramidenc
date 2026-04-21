import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about/pyramid-e-c-group",
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
    path: "/products/oilgas",
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
    path: "/services/research-and-development",
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

const NavItem = ({ item, isActive, activeSubPath }) => {
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
        className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          isActive
            ? "text-amber-600"
            : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
        }`}
      >
        {item.name}
        {isActive && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-amber-600 rounded-full"></span>
        )}
      </Link>

      {item.subMenu && (
        <div
          className={`absolute left-0 top-full pt-2 w-60 transition-all duration-200 z-50 ${
            open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
          }`}
        >
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            {item.subMenu.map((sub, i) => (
              <Link
                key={i}
                to={sub.path}
                className={`block px-4 py-2.5 text-sm transition ${
                  activeSubPath === sub.path
                    ? "text-amber-600 bg-amber-50 border-l-4 border-amber-600"
                    : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                }`}
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

  // Check if a menu item (or any of its submenu items) matches the current path
  const isActive = (item) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.subMenu) {
      return item.subMenu.some(sub => location.pathname.startsWith(sub.path));
    }
    return false;
  };

  // Get the currently active submenu path (for highlighting)
  const getActiveSubPath = () => {
    for (const item of menuItems) {
      if (item.subMenu) {
        for (const sub of item.subMenu) {
          if (location.pathname.startsWith(sub.path)) return sub.path;
        }
      }
    }
    return null;
  };

  const activeSubPath = getActiveSubPath();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-5 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-auto lg:translate-x-0 flex-shrink-0"
            >
              <div className="bg-gray-800 rounded-2xl p-3 md:p-4 lg:p-5 flex items-center justify-center transition-all">
                <img 
                  src="/PYRAMID-EC-Logo.png" 
                  alt="logo" 
                  className="h-6 md:h-5 lg:h-5" 
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 ml-auto">
              {menuItems.map((item, i) => (
                <NavItem 
                  key={i} 
                  item={item} 
                  isActive={isActive(item)} 
                  activeSubPath={activeSubPath}
                />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 ml-auto relative z-10 focus:outline-none"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <FaBars size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="bg-gray-800 rounded-2xl p-3">
            <img src="/PYRAMID-EC-Logo.png" alt="logo" className="h-6" />
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <FaTimes size={28} />
          </button>
        </div>

        {/* Drawer Menu Items */}
        <div className="flex flex-col overflow-y-auto h-[calc(100%-80px)] p-5">
          {menuItems.map((item, i) => (
            <div key={i} className="mb-3">
              {item.subMenu ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedMobile(expandedMobile === i ? null : i)
                    }
                    className="flex justify-between items-center w-full text-left py-3 text-gray-800 font-medium text-lg"
                  >
                    {item.name}
                    {expandedMobile === i ? (
                      <FaChevronUp className="text-amber-500" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      expandedMobile === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.subMenu.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        className={`block py-2 text-sm transition ${
                          location.pathname.startsWith(sub.path)
                            ? "text-amber-600 font-medium"
                            : "text-gray-600 hover:text-amber-600"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`block py-3 text-lg font-medium ${
                    isActive(item)
                      ? "text-amber-600"
                      : "text-gray-800 hover:text-amber-600"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;