import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Screenshot from "../../../assets/Screenshot 2025-08-01 235324.png";
import Screenshot1 from "../../../assets/Screenshot 2025-08-02 033231.png";
import screenshot2 from "../../../assets/Screenshot 2025-09-04 220943.png";
import screenshot3 from "../../../assets/Screenshot 2025-11-03 024209.png";
import screenshot4 from "../../../assets/Screenshot 2025-11-03 032248.png";
import screenshot5 from "../../../assets/Screenshot 2025-11-04 075325.png";
import screenshot6 from "../../../assets/Screenshot 2025-11-04 193336.png";
import screenshot7 from "../../../assets/Screenshot 2025-11-04 194727.png";
import screenshot8 from "../../../assets/Screenshot 2025-11-05 085957.png";
import Fashion from "../../../assets/Fashion.png";
import Rohi from "../../../assets/imagecopy.png";
import Click from "../../../assets/click&sale.png";

const BROWN = "#40342D";
const CREAM = "#F5EFE6";

const projects = [
  {
    title: "Rohies Skills Learning Hub",
    description: "Developed as part of a team project. I was responsible for designing and developing the dashboard and overall user interface of the application.",
    image: Rohi,
    tags: ["React", "Node.js"],
    link: "https://rohieskillslearninghub.com/",
    category: "React",
  },
    {
    title: "Click and Sales",
    description: "Developed a clean, responsive e‑commerce website with product categories like Electronics, Fashion, Home Essentials, enabling users to browse items and complete purchases online with team.",
    image: Click,
    tags: ["React", "php","laravel"],
    link: "https://click-and-sales.codelab.pk/",
    category: "React",
  },
  {
    title: "Swift Cart",
    description: "Swift Cart is a modern e-commerce web application built to deliver a fast, seamless, and user-friendly online shopping experience with cart and responsive interface.",
    image: screenshot4,
    tags: ["React", "Node.js"],
    link: "https://swift-cart-rosy.vercel.app/",
    category: "React",
  },
  {
    title: "Fashion Store",
    description: "A modern fashion e-commerce website built with React and Redux Toolkit Query. Features dynamic product fetching, clean UI, and optimized state management using RTK Query.",
    image: Fashion,
    tags: ["React", "Node.js", "RTK Query"],
    link: "https://fashion-zjqx.vercel.app/",
    category: "React",
  },
  {
    title: "Today Weather",
    description: "A modern responsive weather application providing real-time updates for any location. View current conditions, temperature, humidity, wind speed, and a 7-day forecast.",
    image: screenshot8,
    tags: ["HTML", "CSS", "JS"],
    link: "https://areeshaeman.github.io/Today-weather/",
    category: "HTML",
  },
  {
    title: "Raoc Trader",
    description: "A custom Shopify store built to provide a professional and engaging online shopping experience with clean, responsive layout and seamless checkout process.",
    image: screenshot7,
    tags: ["Next.js", "Stripe", "CSS"],
    link: "https://www.raochtrader.com/",
    category: "Next.js",
  },
  {
    title: "Taste It",
    description: "A modern restaurant landing page with elegant visuals, smooth animations and a clean layout designed to attract customers with mouth-watering imagery.",
    image: screenshot2,
    tags: ["HTML", "CSS"],
    link: "https://taste-its.vercel.app/",
    category: "HTML",
  },
  {
    title: "Car.com",
    description: "A modern, responsive car rental website designed to provide a seamless user experience for browsing and booking premium cars online.",
    image: screenshot3,
    tags: ["JS", "HTML", "CSS"],
    link: "https://cars-com-55zv.vercel.app/",
    category: "HTML",
  },
  {
    title: "Mobrise",
    description: "A business landing website built to promote modern tech and startup solutions with a clean corporate-style interface and smooth scrolling effects.",
    image: Screenshot1,
    tags: ["HTML", "Tailwind", "AOS"],
    link: "https://areeshaeman.github.io/Mobrise/",
    category: "HTML",
  },
  {
    title: "Themebau",
    description: "A modern and minimal portfolio website built to showcase creative projects with smooth animations and a refined, pixel-perfect aesthetic.",
    image: screenshot5,
    tags: ["HTML", "Bootstrap", "AOS"],
    link: "https://areeshaeman.github.io/Themebau/",
    category: "HTML",
  },
  {
    title: "Netflix Clone",
    description: "A fully responsive movie streaming web app inspired by Netflix. Browse, search, and stream movies with a rich UI and Firebase-powered authentication.",
    image: screenshot6,
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "https://your-netflix-clone.vercel.app",
    category: "React",
  },
];

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.3 } },
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      layout
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden group block cursor-pointer"
      style={{
        background: "#fff",
        border: "1px solid rgba(64,52,45,0.1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(64,52,45,0.18)"
          : "0 2px 16px rgba(64,52,45,0.07)",
        transition: "box-shadow 0.4s ease",
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 230 }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill object-top"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Dark overlay on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(64,52,45,0.0)" }}
          animate={{ background: hovered ? "rgba(64,52,45,0.55)" : "rgba(64,52,45,0.0)" }}
          transition={{ duration: 0.35 }}
        >
          <motion.span
            className="text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full"
            style={{ background: CREAM, color: BROWN }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.25 }}
          >
            View Project →
          </motion.span>
        </motion.div>

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ background: BROWN, color: CREAM }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-bold mb-2 leading-tight"
          style={{ color: BROWN }}
        >
          {project.title}
        </h3>
        <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "#7a6a60" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full font-semibold"
              style={{ background: "rgba(64,52,45,0.08)", color: BROWN }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] rounded-b-2xl"
        style={{ background: BROWN }}
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.a>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{ background: CREAM }}
    >
      {/* Decorative bg circles */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: "rgba(64,52,45,0.04)", top: -150, right: -150 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 320, height: 320, background: "rgba(64,52,45,0.03)", bottom: -100, left: -100 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] rounded-full" style={{ background: BROWN }} />
            <span className="text-xs font-bold uppercase tracking-[4px]" style={{ color: "rgba(64,52,45,0.5)" }}>
              Portfolio
            </span>
            <span className="w-8 h-[2px] rounded-full" style={{ background: BROWN }} />
          </div>

          <h2
            className="text-5xl md:text-6xl font-black leading-tight mb-4"
            style={{ color: BROWN }}
          >
            My{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${BROWN}`,
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(64,52,45,0.6)" }}>
            A curated collection of real-world projects — each one crafted with
            attention to design, performance, and user experience.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {allCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300"
              style={{
                background: activeFilter === cat ? BROWN : "rgba(64,52,45,0.08)",
                color: activeFilter === cat ? CREAM : BROWN,
                border: `1.5px solid ${activeFilter === cat ? BROWN : "rgba(64,52,45,0.15)"}`,
                cursor: "pointer",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project count */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-widest text-center mb-8"
          style={{ color: "rgba(64,52,45,0.4)" }}
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.title + index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm mb-5" style={{ color: "rgba(64,52,45,0.55)" }}>
            Want to see more or work together?
          </p>
          <motion.a
            href="mailto:areesha@example.com"
            whileHover={{ scale: 1.05, background: "#8C7C6D" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300"
            style={{ background: BROWN, color: CREAM }}
          >
            Let's Collaborate →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;