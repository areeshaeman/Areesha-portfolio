import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";

const BROWN = "#40342D";
const CREAM = "#F5EFE6";
const LIGHT_BG = "#EFEBE4";

const categories = [
  {
    label: "Frontend",
    skills: [
      { icon: <SiReact />, title: "React.js", level: 90, color: "#61DAFB" },
      { icon: <SiJavascript />, title: "JavaScript", level: 88, color: "#F7DF1E" },
      { icon: <SiNextdotjs />, title: "Next.js", level: 78, color: "#000000" },
      { icon: <SiTailwindcss />, title: "Tailwind CSS", level: 92, color: "#38BDF8" },
      { icon: <SiVuedotjs />, title: "Vue.js", level: 70, color: "#42B883" },
      { icon: <SiBootstrap />, title: "Bootstrap", level: 85, color: "#7952B3" },
      { icon: <SiSass />, title: "Sass / CSS", level: 88, color: "#CC6699" },
    ],
  },
  {
    label: "Backend & DB",
    skills: [
      { icon: <SiNodedotjs />, title: "Node.js", level: 72, color: "#339933" },
      { icon: <SiMongodb />, title: "MongoDB", level: 68, color: "#47A248" },
      { icon: <SiFirebase />, title: "Firebase", level: 75, color: "#FFCA28" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <SiGit />, title: "Git", level: 85, color: "#F05032" },
      { icon: <SiGithub />, title: "GitHub", level: 88, color: "#181717" },
      { icon: <SiFigma />, title: "Figma", level: 72, color: "#F24E1E" },
      { icon: <SiVercel />, title: "Vercel", level: 80, color: "#000000" },
    ],
  },
];

const allTabs = ["All", ...categories.map((c) => c.label)];

const getAllSkills = () => categories.flatMap((c) => c.skills);

const ProgressBar = ({ level, color, inView }) => (
  <div className="w-full rounded-full overflow-hidden" style={{ height: 4, background: "rgba(64,52,45,0.12)" }}>
    <motion.div
      className="h-full rounded-full"
      style={{ background: color }}
      initial={{ width: 0 }}
      animate={{ width: inView ? `${level}%` : 0 }}
      transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
    />
  </div>
);

const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [8, -8]);
  const rotateY = useTransform(x, [-40, 40], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.94 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: index * 0.07 } },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setHovered(true); setInView(true); }}
      onMouseLeave={handleMouseLeave}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 600 }}
      className="relative rounded-2xl p-6 flex flex-col gap-4 cursor-default group"
      whileHover={{ y: -6 }}
    >
      {/* Card bg */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-400"
        style={{
          background: hovered ? "#fff" : "rgba(255,255,255,0.7)",
          border: `1px solid ${hovered ? "rgba(64,52,45,0.18)" : "rgba(64,52,45,0.08)"}`,
          boxShadow: hovered ? "0 16px 48px rgba(64,52,45,0.14)" : "0 2px 12px rgba(64,52,45,0.05)",
          transition: "all 0.35s ease",
        }}
      />

      {/* Colored top accent */}
      <motion.div
        className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full"
        style={{ background: skill.color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon bubble */}
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${skill.color}18`, color: skill.color }}
          animate={{ rotate: hovered ? [0, -8, 8, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          {skill.icon}
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-sm" style={{ color: BROWN }}>
              {skill.title}
            </h3>
            <motion.span
              className="text-xs font-black"
              style={{ color: skill.color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.6 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <ProgressBar level={skill.level} color={skill.color} inView={inView} />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const visibleSkills =
    activeTab === "All"
      ? getAllSkills()
      : categories.find((c) => c.label === activeTab)?.skills ?? [];

  return (
    <section
      className="relative overflow-hidden py-24 px-6"
      style={{ background: LIGHT_BG }}
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 420, height: 420, background: "rgba(64,52,45,0.04)", top: -100, left: -100 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 280, height: 280, background: "rgba(64,52,45,0.04)", bottom: -80, right: -80 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating skill pills in bg */}
      {["React", "JS", "CSS", "Git", "Next"].map((t, i) => (
        <motion.span
          key={i}
          className="absolute text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full pointer-events-none select-none"
          style={{
            color: "rgba(64,52,45,0.1)",
            border: "1px solid rgba(64,52,45,0.08)",
            top: `${15 + i * 17}%`,
            left: i % 2 === 0 ? "3%" : "auto",
            right: i % 2 !== 0 ? "3%" : "auto",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
        >
          {t}
        </motion.span>
      ))}

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
              Tech Stack
            </span>
            <span className="w-8 h-[2px] rounded-full" style={{ background: BROWN }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-4" style={{ color: BROWN }}>
            My{" "}
            <span style={{ color: "transparent", WebkitTextStroke: `2px ${BROWN}` }}>
              Skills
            </span>
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(64,52,45,0.55)" }}>
            Tools and technologies I've mastered building real-world projects — from pixel-perfect
            UIs to full-stack deployments.
          </p>
        </motion.div>

        {/* Tab filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {allTabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider overflow-hidden"
              style={{
                background: activeTab === tab ? BROWN : "rgba(64,52,45,0.07)",
                color: activeTab === tab ? CREAM : BROWN,
                border: `1.5px solid ${activeTab === tab ? BROWN : "rgba(64,52,45,0.14)"}`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
          >
            {visibleSkills.map((skill, i) => (
              <SkillCard key={skill.title} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Proficiency legend */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[["90–100%", "Expert"], ["75–89%", "Proficient"], ["60–74%", "Familiar"]].map(([range, label]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-8 h-[3px] rounded-full" style={{ background: BROWN, opacity: label === "Expert" ? 1 : label === "Proficient" ? 0.55 : 0.28 }} />
              <span className="text-xs font-semibold" style={{ color: "rgba(64,52,45,0.55)" }}>
                {label} <span className="opacity-60">({range})</span>
              </span>
            </div>
          ))}
        </motion.div>

     
        
      </div>
    </section>
  );
};

export default SkillsSection;