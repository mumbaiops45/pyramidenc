import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Top Label */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-amber-600"></span>
          <span className="text-xs font-semibold tracking-[3px] uppercase text-amber-700">
            Let’s Build Together
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
          Ready to Start Your{" "}
          <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm lg:text-base max-w-2xl mx-auto mb-10">
          Partner with Pyramid E&C to deliver high-performance engineering solutions
          across oil & gas, energy transition, and industrial infrastructure.
        </p>

        {/* Single Button */}
        <Link
          to="/contact"
          className="inline-flex px-8 py-3 rounded-full text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-300 shadow-lg"
        >
          Get in Touch →
        </Link>

      </div>
    </section>
  );
};

export default CTA;