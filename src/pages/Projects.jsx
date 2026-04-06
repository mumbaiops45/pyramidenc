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
    <section className="bg-black-deep text-white py-20 lg:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-primery"></span>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-primery">
              Our Work
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-extrabold">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {project.location}
                </p>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primery group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;