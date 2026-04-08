import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LuProjector } from "react-icons/lu";

const BROWN = "#40342D";
const BROWN_MID = "#8C7C6D";
const CREAM = "#F5EFE6";
const BG = "#EFEBE4";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: 4 + Math.random() * 7,
  left: Math.random() * 100,
  top: 20 + Math.random() * 70,
  dur: 5 + Math.random() * 6,
  delay: -(Math.random() * 8),
  op: 0.12 + Math.random() * 0.2,
}));

const ROLES = [
  "Frontend Developer",
  "UI / UX Designer",
  "React Specialist",
  "Next.js Enthusiast",
  "Creative Coder",
];

function useTypewriter(words, speed = 80, pause = 1600) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const Particle = ({ p }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, background: BROWN, opacity: p.op }}
    animate={{ y: [0, -100], opacity: [p.op, p.op * 1.3, 0], scale: [1, 1.1, 0.4] }}
    transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
  />
);

const NavIcon = ({ icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.45, ease: "easeOut" }}
    whileHover={{ scale: 1.18, rotate: 6 }}
    whileTap={{ scale: 0.92 }}
    title={label}
    className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
    style={{ background: BROWN, color: CREAM }}
  >
    <i className={`${icon} text-sm`} />
  </motion.div>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const typed = useTypewriter(ROLES);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 130, damping: 20 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 130, damping: 20 });

  const handleMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: BG }}
    >
      {/* Shimmer sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(118deg, transparent 28%, rgba(64,52,45,0.045) 50%, transparent 72%)`,
          backgroundSize: "220% 100%",
        }}
        animate={{ backgroundPosition: ["220% 50%", "-220% 50%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 520, height: 520, background: "rgba(64,52,45,0.05)", top: -160, right: -160 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 360, height: 360, background: "rgba(64,52,45,0.04)", bottom: -100, left: -100 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Particles */}
      {PARTICLES.map((p) => <Particle key={p.id} p={p} />)}

      {/* Layout */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 sm:px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

        {/* ══ LEFT ══ */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-5">

          {/* Available pill */}
          <motion.div {...fadeUp(0.05)} className="flex items-center gap-2">
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: "#4ADE80" }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[3px] px-4 py-1.5 rounded-full"
              style={{ background: "rgba(64,52,45,0.09)", color: BROWN }}
            >
              Available for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeUp(0.15)}>
            <p className="text-sm font-bold uppercase tracking-[4px] mb-2" style={{ color: BROWN_MID }}>
              Hi there! 👋
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08]" style={{ color: "#1a1210" }}>
              I&apos;m{" "}
              <motion.span
                style={{ color: BROWN }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                Areesha
              </motion.span>
              <br />
              <span style={{ color: "transparent", WebkitTextStroke: `2px ${BROWN}` }}>
                Eman
              </span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div {...fadeUp(0.28)} className="flex items-center gap-2 h-8">
            <span className="w-1 h-6 rounded-full" style={{ background: BROWN }} />
            <span className="text-base sm:text-lg font-bold" style={{ color: BROWN }}>
              {typed}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-0.5"
                style={{ color: BROWN }}
              >
                |
              </motion.span>
            </span>
          </motion.div>



          {/* Bio */}
          <motion.p {...fadeUp(0.5)} className="text-sm sm:text-base leading-relaxed max-w-md" style={{ color: "rgba(64,52,45,0.65)" }}>
            Passionate about crafting interactive applications and pixel-perfect experiences on the web.
            Let&apos;s build something amazing together.
          </motion.p>


        </div>

        {/* ══ RIGHT ══ */}
        <div className="w-full md:w-1/2 flex justify-center relative">

          {/* Orbiting ring */}
          <motion.div
            className="absolute rounded-full border pointer-events-none"
            style={{ width: 320, height: 320, borderColor: "rgba(64,52,45,0.1)", borderWidth: 1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute rounded-full"
              style={{ width: 10, height: 10, background: BROWN, top: -5, left: "50%", marginLeft: -5, opacity: 0.5 }}
            />
          </motion.div>

          {/* Pulse rings */}
          {[260, 292].map((size, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ width: size, height: size, border: `1.5px solid rgba(64,52,45,${0.18 - i * 0.07})` }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.12, 0.5] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            />
          ))}

          {/* 3-D tilt image */}
          <motion.div
            style={{ rotateY: rotY, rotateX: rotX, perspective: 900, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ boxShadow: `0 0 0 4px ${BROWN}, 0 0 48px rgba(64,52,45,0.2)` }}
            />
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/9f/99/61/9f9961e2086884023420b16d360d0f62.jpg"
                alt="Areesha"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge top-left */}
            <motion.div
              className="absolute -top-5 -left-8 rounded-2xl px-3 py-2 flex items-center gap-2"
              style={{ background: "#fff", border: "1px solid rgba(64,52,45,0.1)", boxShadow: "0 4px 20px rgba(64,52,45,0.1)" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span style={{ fontSize: 18 }}>⚡</span>
              <div>
                <p className="text-xs font-black leading-none" style={{ color: BROWN }}>2+ Years</p>
                <p className="text-[10px] font-semibold" style={{ color: "rgba(64,52,45,0.5)" }}>Experience</p>
              </div>
            </motion.div>

            {/* Floating badge bottom-right */}
            <motion.div
              className="absolute -bottom-5 -right-8 rounded-2xl px-3 py-2 flex items-center gap-2"
              style={{ background: "#fff", border: "1px solid rgba(64,52,45,0.1)", boxShadow: "0 4px 20px rgba(64,52,45,0.1)" }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span style={{ fontSize: 18 }}><LuProjector/></span>
              <div>
                <p className="text-xs font-black leading-none" style={{ color: BROWN }}>20+ Projects</p>
                <p className="text-[10px] font-semibold" style={{ color: "rgba(64,52,45,0.5)" }}>Delivered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Side nav icons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-[-20px] hidden xl:flex flex-col gap-3">
            {[
              { icon: "fas fa-user", label: "About" },
              { icon: "fas fa-briefcase", label: "Work" },
              { icon: "fas fa-comments", label: "Contact" },
              { icon: "fas fa-bullhorn", label: "Blog" },
            ].map((item, i) => (
              <NavIcon key={i} icon={item.icon} label={item.label} delay={0.9 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-[3px] font-semibold" style={{ color: "rgba(64,52,45,0.35)" }}>
          Scroll
        </span>
        <motion.div
          className="w-[1.5px] rounded-full"
          style={{ background: BROWN, height: 32, originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;