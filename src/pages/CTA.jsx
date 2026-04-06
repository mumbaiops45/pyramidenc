import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-black-deep text-white py-20 lg:py-4 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Top Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-primery"></span>
          <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
            Let’s Build Together
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Start Your <br /> Next Project?
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto mb-10">
          Partner with Pyramid E&C to deliver high-performance engineering solutions 
          across oil & gas, energy transition, and industrial infrastructure.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary Button */}
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full text-sm font-semibold text-black bg-primery hover:bg-primery-light transition-all duration-300 shadow-lg"
          >
            Get in Touch →
          </Link>

          {/* Secondary Button */}
          <Link
            to="/projects"
            className="px-8 py-3 rounded-full text-sm font-semibold border border-white/20 hover:border-primery text-white hover:text-primery transition-all duration-300"
          >
            View Projects
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTA;