import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineData = {
  2025: [
    { title: "Project 1", description: "Description for Project 1", image: "/images/2025/project1.jpg" },
    { title: "Project 2", description: "Description for Project 2", image: "/images/2025/project2.jpg" },
    { title: "Project 3", description: "Description for Project 3", image: "/images/2025/project3.jpg" },
    { title: "Project 4", description: "Description for Project 4", image: "/images/2025/project4.jpg" },
  ],
  2024: [/* ... add similar structure ... */],
  // Add years down to 2011
};

const years = Object.keys(timelineData).sort((a, b) => b - a);

const Timeline = () => {
  const [activeYear, setActiveYear] = useState("2025");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Timeline: 2011 - 2025</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeYear === year
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-white hover:bg-blue-100 hover:text-blue-700 border"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <motion.div
        key={activeYear}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
      >
        {timelineData[activeYear].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform overflow-hidden cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
