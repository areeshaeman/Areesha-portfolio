import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";



const BROWN = "#40342D";
const CREAM = "#F5EFE6";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut", delay } },
});

const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut", delay } },
});

const services = [
  {
    icon: "fas fa-desktop",
    title: "Responsive Websites",
    desc: "Build pixel-perfect websites that look stunning on every screen size and device.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Creative UI Design",
    desc: "Clean, modern, and intuitive interfaces crafted with an eye for detail and usability.",
  },
  {
    icon: "fas fa-bolt",
    title: "Performance & Speed",
    desc: "Fast-loading, optimized, and scalable code built for long-term success.",
  },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Done" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "10K+", label: "Followers" },
];

const CounterStat = ({ value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="relative flex flex-col items-center justify-center rounded-2xl p-6 cursor-default group overflow-hidden"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(245,239,230,0.12)" }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "rgba(245,239,230,0.07)" }}
      />
      <motion.p
        className="text-3xl font-black tracking-tight mb-1"
        style={{ color: CREAM }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay, type: "spring", bounce: 0.4 }}
      >
        {value}
      </motion.p>
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(245,239,230,0.55)" }}>
        {label}
      </p>
    </motion.div>
  );
};

const ServiceCard = ({ item, index }) => (
  <motion.div
    variants={slideLeft(0.2 + index * 0.15)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ x: 6 }}
    className="flex items-start gap-5 group cursor-default"
  >
    <motion.div
      whileHover={{ rotate: 10, scale: 1.12 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
      style={{ background: CREAM }}
    >
      <i className={`${item.icon} text-lg`} style={{ color: BROWN }} />
    </motion.div>
    <div>
      <h3 className="font-bold text-base mb-1" style={{ color: CREAM }}>
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.65)" }}>
        {item.desc}
      </p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: BROWN, fontFamily: "'Georgia', serif" }}
    >
      {/* Decorative background blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480,
          height: 480,
          background: "rgba(245,239,230,0.04)",
          top: -120,
          right: -120,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background: "rgba(245,239,230,0.03)",
          bottom: -80,
          left: -80,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        {/* Section Label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-[2px] rounded-full" style={{ background: CREAM }} />
          <span className="text-xs font-bold uppercase tracking-[4px]" style={{ color: "rgba(245,239,230,0.6)" }}>
            About Me
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black leading-tight mb-6"
          style={{ color: CREAM }}
        >
          Crafting Digital
          <br />
          <span
            className="relative inline-block"
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${CREAM}`,
            }}
          >
            Experiences
          </span>
          {" "}that{" "}
          <span style={{ color: CREAM }}>Matter</span>
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base leading-relaxed mb-16 max-w-2xl"
          style={{ color: "rgba(245,239,230,0.7)" }}
        >
          I'm{" "}
          <span className="font-bold" style={{ color: CREAM }}>
            Areesha Eman
          </span>
          , a passionate Frontend Developer who loves turning ideas into clean, modern,
          and interactive web experiences. With a strong foundation in React, Tailwind CSS,
          and JavaScript, I specialize in building responsive websites that deliver smooth,
          intuitive user experiences — every pixel, every animation, every interaction crafted with care.
        </motion.p>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

          {/* Left — What I Do */}
          <div>
            <motion.div
              variants={slideLeft(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-8"
              style={{ background: CREAM, color: BROWN }}
            >
              What I Do
            </motion.div>
            <div className="flex flex-col gap-8">
              {services.map((item, i) => (
                <ServiceCard key={i} item={item} index={i} />
              ))}
            </div>

            <motion.button
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, background: "#8C7C6D" }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300"
              style={{ background: CREAM, color: BROWN, border: "none", cursor: "pointer" }}
            >
              Hire Me →
            </motion.button>
          </div>

          {/* Right — Fun Facts / Image card */}
          <motion.div
            variants={slideRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-8"
              style={{ background: CREAM, color: BROWN }}
            >
              Fun Facts
            </motion.div>

            {/* Image with overlay card */}
            <div className="relative rounded-3xl overflow-hidden mb-8" style={{ height: 280 }}>
              <img
                src="https://i.pinimg.com/1200x/4d/a4/f5/4da4f5b2509cfd8114f3f6dd643aa4cf.jpg"
                alt="Areesha working"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(64,52,45,0.85) 30%, transparent 100%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(245,239,230,0.6)" }}>
                  Currently working on
                </p>
                <p className="text-base font-bold" style={{ color: CREAM }}>
                  Portfolio & Client Projects
                </p>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <CounterStat key={i} value={s.value} label={s.label} delay={0.3 + i * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom divider line */}
        <motion.div
          className="w-full h-px"
          style={{ background: "rgba(245,239,230,0.12)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* Skills pill row */}
        <motion.div
          className="flex flex-wrap gap-3 mt-10 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
        >
          {["React", "JavaScript", "Tailwind CSS", "Next.js", "Framer Motion", "Git", "Sass", "Vue.js"].map((skill) => (
            <motion.span
              key={skill}
              variants={fadeUp(0)}
              whileHover={{ scale: 1.08, y: -3 }}
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-default"
              style={{ background: "rgba(245,239,230,0.08)", color: CREAM, border: "1px solid rgba(245,239,230,0.18)" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;