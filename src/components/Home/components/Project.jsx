import React from "react";
import { motion } from "framer-motion";

import Screenshot from "../../../assets/Screenshot 2025-08-01 235324.png";
import Screenshot1 from "../../../assets/Screenshot 2025-08-02 033231.png"
import screenshot2 from "../../../assets/Screenshot 2025-09-04 220943.png"
import  screenshot3 from "../../../assets/Screenshot 2025-11-03 024209.png"
import screenshot4 from "../../../assets/Screenshot 2025-11-03 032248.png"
import screenshot5 from "../../../assets/Screenshot 2025-11-04 075325.png"
import screenshot6 from "../../../assets/Screenshot 2025-11-04 193336.png"
import screenshot7 from "../../../assets/Screenshot 2025-11-04 194727.png"


const projects = [
  {
    title: "Swift Cart",
    description: "Swift Cart is a modern e-commerce web application built to deliver a fast, seamless, and user-friendly online shopping experience. It allows users to browse products, add them to cart and responsive interface.",
    image: screenshot4,
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://swift-cart-rosy.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description: "etflix Clone is a fully responsive movie streaming web application inspired by the original Netflix interface. It allows users to browse, search, and stream movies or TV shows with a visually rich UI and Firebase-powered authentication.",
    image: screenshot6,
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "https://your-netflix-clone.vercel.app",
  },
    {
    title:"Roack Trader",
    description: "This project is a custom Shopify store built to provide a professional and engaging online shopping experience. The store features a clean, responsive layout, product collections, and a seamless checkout process",
    image: screenshot7 ,
    tags: ["Next.js", "Stripe", "css"],
    link: "https://www.raochtrader.com/",
  },
  {
    title:"Taste it",
    description: "Taste It is a modern restaurant landing page that highlights experience through elegant visuals, smooth animations & a clean layout. It’s designed to attract customers with mouth-watering imagery",
    image: screenshot2 ,
    tags: ["Html", "Stripe", "Css"],
    link: "https://taste-its.vercel.app/",
  },
    {
    title:"Car.com",
    description: "Car.com is a modern, responsive car rental website designed to provide a seamless user experience for browsing and booking premium cars online. ",
    image: screenshot3 ,
    tags: ["JS", "HTML", "Css"],
    link: "https://cars-com-55zv.vercel.app/",
  },
      {
    title:"Mobrise",
    description: "Mobrise is a business landing website built to promote modern tech and startup solutions. It features a clean, corporate-style interface with engaging visuals, and smooth scrolling effects to ensure a premium user experience.",
    image: Screenshot1 ,
    tags: ["HTML", "Tailwind", "Aos"],
    link: "https://taste-its.vercel.app/",
  },
      {
    title:"Themebau",
    description: "Themebau is a modern and minimal portfolio website built to showcase creative projects with smooth animations and a refined aesthetic. It focuses on elegant & pixel-perfect layout",
    image: screenshot5 ,
    tags: ["HTML", "Bootstrap", " Aos"],
    link: "https://areeshaeman.github.io/Themebau/",
  }
  // Add more projects here
];
const Projects = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6" >
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
