import React from "react";

const projects = [
  {
    title: "LNG Processing Plant",
    location: "India",
    image: "/project1.jpg",
  },
  {
    title: "Gas Compression Unit",
    location: "UAE",
    image: "/project2.png",
  },
  {
    title: "Bio Refinery Plant",
    location: "Europe",
    image: "/project3.png",
  },
  {
    title: "Hydrogen Production Facility",
    location: "UK",
    image: "/project4.jpg",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-amber-200 via-amber-50 to-white py-20 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
  {/* Top label – pill badge style */}
  <span className="text-sm font-semibold tracking-wider uppercase inline-block px-4 py-1 rounded-full bg-[var(--primery)]/10 text-[var(--primery)]">
    Our Work
  </span>

  {/* Title with gradient on the key word */}
  <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
    Featured{" "}
    <span className="bg-gradient-to-r from-[var(--primery)] to-[var(--primery-dark)] bg-clip-text text-transparent">
      Projects
    </span>
  </h2>

  {/* Underline */}
  <div className="w-24 h-1 bg-[var(--primery)] mx-auto mt-4 rounded-full"></div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {project.location}
                </p>
              </div>

              {/* Hover line – gold */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;