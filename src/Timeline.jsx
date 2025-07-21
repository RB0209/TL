import React from "react";

const timelineData = {
  2011: [
    {
      title: "Project 1",
      image: "https://via.placeholder.com/150",
      description: "Short description for Project 1.",
      fullDescription: "Detailed description for Project 1, including goals, features, and insights.",
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/150",
      description: "Short description for Project 2.",
      fullDescription: "Detailed description for Project 2, including goals, features, and insights.",
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/150",
      description: "Short description for Project 3.",
      fullDescription: "Detailed description for Project 3, including goals, features, and insights.",
    },
    {
      title: "Project 4",
      image: "https://via.placeholder.com/150",
      description: "Short description for Project 4.",
      fullDescription: "Detailed description for Project 4, including goals, features, and insights.",
    },
  ],
  // Repeat this for years 2012 to 2025
  2012: [/*...*/],
  // ...
  2025: [/*...*/],
};

// You can copy the rest years from me if you want.

const Timeline = () => {
  return (
    <div className="p-6 bg-white text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: "#0074D9" }}>
        Project Timeline (2011 - 2025)
      </h1>
      {Object.entries(timelineData).map(([year, projects]) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-blue-500">{year}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center">
                  <h3 className="font-bold text-lg mb-2 text-blue-700">{project.title}</h3>
                  <p className="text-sm text-gray-800">{project.fullDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
