import React from "react";
import { motion } from "framer-motion";

import Screenshot from "../../../assets/Screenshot 2025-08-01 235324.png";
import Screenshot1 from "../../../assets/Screenshot 2025-08-02 033231.png"
import screenshot2 from "../../../assets/Screenshot 2025-09-04 220943.png"
import  screenshot3 from "../../../assets/Screenshot 2025-11-03 024209.png"
import screenshot4 from "../../../assets/Screenshot 2025-11-03 032248.png"

const projects = [
  {
    title: "Swift Cart",
    description: "Full-stack task management app with authentication and drag-and-drop functionality.",
    image: screenshot4,
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://swift-cart-rosy.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description: "A clone of Netflix using Firebase for auth and TMDB for movies.",
    image: "/assets/netflixclone.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "https://your-netflix-clone.vercel.app",
  },
  {
    title:"Taste it",
    description: "Complete e-commerce platform with cart, checkout, and admin dashboard.",
    image: screenshot2 ,
    tags: ["Next.js", "Stripe", "Sanity CMS"],
    link: "https://taste-its.vercel.app/",
  },
    {
    title:"Car.com",
    description: "Complete e-commerce platform with cart, checkout, and admin dashboard.",
    image: screenshot3 ,
    tags: ["Next.js", "Stripe", "Sanity CMS"],
    link: "https://cars-com-55zv.vercel.app/",
  },
      {
    title:"Car.com",
    description: "Complete e-commerce platform with cart, checkout, and admin dashboard.",
    image: Screenshot1 ,
    tags: ["Next.js", "Stripe", "Sanity CMS"],
    link: "https://taste-its.vercel.app/",
  },
      {
    title:"Car.com",
    description: "Complete e-commerce platform with cart, checkout, and admin dashboard.",
    image: Screenshot ,
    tags: ["Next.js", "Stripe", "Sanity CMS"],
    link: "https://taste-its.vercel.app/",
  }
  // Add more projects here
];
const Projects = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6" id="projects">
      <h2 className="text-4xl font-bold text-center text-[#701C1C] mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52   bg-center bg-cover p-2 rounded-2xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#333] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#701C1C] text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
