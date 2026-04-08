import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BROWN = "#40342D";
const CREAM = "#F5EFE6";

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Upwork",
    period: "Jan 2024 — Present",
    type: "Remote · Full-time",
    desc: "Leading the frontend team to build scalable React applications using TypeScript, Ant Design, and RTK Query. Delivered 10+ client projects with 100% satisfaction.",
    icon: "fas fa-laptop-code",
    color: "#61DAFB",
  },
  {
    role: "Frontend Developer",
    company: "Codelab",
    period: "Dec 2023 — Oct 2025",
    type: "On-site · Part-time",
    desc: "Assisted in creating dynamic web pages, optimized front-end performance, and collaborated with designers to implement responsive designs.",
    icon: "fas fa-code",
    color: "#38BDF8",
  },
];

const education = [
  {
    degree: "BS Computer Science",
    institution: "University of Bahawalpur",
    period: "2022 — 2025",
    detail: "GPA: 3.8",
    desc: "Thesis on scalable UI architectures for single-page applications and accessibility best practices.",
    icon: "fas fa-university",
    color: "#F59E0B",
  },
  {
    degree: "Front-end Bootcamp",
    institution: "CodeSchool",
    period: "2020 · 12 weeks",
    detail: "Certificate",
    desc: "Practical course covering React, modern CSS, and testing methodologies.",
    icon: "fas fa-graduation-cap",
    color: "#A78BFA",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", delay } },
});

const TimelineCard = ({ item, index, type }) => {
  const [hovered, setHovered] = useState(false);
  const isExp = type === "experience";

  return (
    <motion.div
      variants={fadeUp(0.1 + index * 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex gap-5 group"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
          style={{ background: hovered ? item.color : "rgba(64,52,45,0.1)", transition: "background 0.35s ease" }}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i
            className={`${item.icon} text-base`}
            style={{ color: hovered ? "#fff" : BROWN, transition: "color 0.3s" }}
          />
        </motion.div>
        {index < (isExp ? experience : education).length - 1 && (
          <motion.div
            className="w-[2px] mt-2 rounded-full"
            style={{ background: "rgba(64,52,45,0.12)", minHeight: 48, flex: 1 }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        className="flex-1 mb-8 rounded-2xl p-5 relative overflow-hidden"
        style={{
          background: hovered ? "#fff" : "rgba(255,255,255,0.65)",
          border: `1px solid ${hovered ? "rgba(64,52,45,0.15)" : "rgba(64,52,45,0.08)"}`,
          boxShadow: hovered ? "0 12px 40px rgba(64,52,45,0.13)" : "0 2px 10px rgba(64,52,45,0.05)",
          transition: "all 0.35s ease",
        }}
        whileHover={{ y: -3 }}
      >
        {/* Color accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
          style={{ background: item.color }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-black text-base" style={{ color: BROWN }}>
              {isExp ? item.role : item.degree}
            </h3>
            <p className="text-sm font-semibold" style={{ color: item.color }}>
              {isExp ? item.company : item.institution}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: `${item.color}18`, color: item.color }}
            >
              {item.detail ?? item.type}
            </span>
            <p className="text-xs mt-1" style={{ color: "rgba(64,52,45,0.45)" }}>
              {item.period}
            </p>
          </div>
        </div>

        {isExp && (
          <span
            className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
            style={{ background: "rgba(64,52,45,0.07)", color: "rgba(64,52,45,0.6)" }}
          >
            {item.type}
          </span>
        )}

        <p className="text-sm leading-relaxed" style={{ color: "rgba(64,52,45,0.65)" }}>
          {item.desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("both");

  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{ background: "#EFEBE4" }}
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 460, height: 460, background: "rgba(64,52,45,0.04)", top: -120, right: -120 }}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 300, height: 300, background: "rgba(64,52,45,0.04)", bottom: -80, left: -80 }}
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
            <span className="text-xs font-bold uppercase tracking-[4px]" style={{ color: "rgba(64,52,45,0.45)" }}>
              My Journey
            </span>
            <span className="w-8 h-[2px] rounded-full" style={{ background: BROWN }} />
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-4" style={{ color: BROWN }}>
            Experience &{" "}
            <span style={{ color: "transparent", WebkitTextStroke: `2px ${BROWN}` }}>
              Education
            </span>
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(64,52,45,0.55)" }}>
            A timeline of the roles and learning experiences that shaped me into the developer I am today.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          className="flex justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { key: "both", label: "All", icon: "fas fa-th-large" },
            { key: "experience", label: "Experience", icon: "fas fa-briefcase" },
            { key: "education", label: "Education", icon: "fas fa-graduation-cap" },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{
                background: activeTab === tab.key ? BROWN : "rgba(64,52,45,0.07)",
                color: activeTab === tab.key ? CREAM : BROWN,
                border: `1.5px solid ${activeTab === tab.key ? BROWN : "rgba(64,52,45,0.14)"}`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <i className={`${tab.icon} text-xs`} />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={`grid gap-10 ${activeTab === "both" ? "md:grid-cols-2" : "max-w-2xl mx-auto"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Experience column */}
            {(activeTab === "both" || activeTab === "experience") && (
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: BROWN }}
                  >
                    <i className="fas fa-briefcase text-xs" style={{ color: CREAM }} />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-widest" style={{ color: BROWN }}>
                    Work Experience
                  </h3>
                </motion.div>
                {experience.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} type="experience" />
                ))}
              </div>
            )}

            {/* Education column */}
            {(activeTab === "both" || activeTab === "education") && (
              <div>
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: BROWN }}
                  >
                    <i className="fas fa-graduation-cap text-xs" style={{ color: CREAM }} />
                  </div>
                  <h3 className="text-base font-black uppercase tracking-widest" style={{ color: BROWN }}>
                    Education
                  </h3>
                </motion.div>
                {education.map((item, i) => (
                  <TimelineCard key={i} item={item} index={i} type="education" />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom divider + actions */}
        <motion.div
          className="mt-16 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ borderTop: "1px solid rgba(64,52,45,0.1)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05, background: "#8C7C6D" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: BROWN, color: CREAM, transition: "background 0.3s", textDecoration: "none" }}
          >
            <i className="fas fa-download text-xs" />
            Download CV
          </motion.a>
          <motion.button
            onClick={() => window.print()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{
              background: "transparent",
              color: BROWN,
              border: `1.5px solid rgba(64,52,45,0.25)`,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <i className="fas fa-print text-xs" />
            Print
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceEducation;