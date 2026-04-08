import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function RulesSection() {
const rules = [
  { id: "01", title: "User First", text: "Design for people, not just screens" },
  { id: "02", title: "Clean Code", text: "Simple, readable, and reusable" },
  { id: "03", title: "Responsive Always", text: "Perfect on every device" },
  { id: "04", title: "Speed Matters", text: "Fast load. Smooth experience" },
];

  const leftPositions = ["6%", "30%", "57%", "78%"];
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax tracking
  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 30,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#F2F2F2", fontFamily: "'Georgia', serif" }}
      className="relative min-h-screen text-white overflow-hidden"
    >
      {/* Animated grain texture overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.5,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Vertical grid lines — warm brown tint */}
      <div className="absolute inset-0 flex justify-between px-16 z-0">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px h-full"
            style={{ background: "#40342D" }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.12, scaleY: 1 }}
            transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Horizontal accent line */}
      <motion.div
        className="absolute left-0 right-0 z-0"
        style={{ top: "50%", height: "1px", background: "#40342D", opacity: 0.15 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Mouse-tracked floating diamond — top left */}
      <motion.div
        className="absolute top-28 left-24 z-10"
        animate={{
          x: mousePos.x * 0.6,
          y: mousePos.y * 0.6,
          rotate: [45, 90, 45],
        }}
        transition={{
          x: { type: "spring", stiffness: 60 },
          y: { type: "spring", stiffness: 60 },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            border: "1.5px solid #40342D",
            opacity: 0.5,
            transform: "rotate(45deg)",
          }}
        />
      </motion.div>

      {/* Mouse-tracked floating diamond — bottom right */}
      <motion.div
        className="absolute bottom-32 right-28 z-10"
        animate={{
          x: -mousePos.x * 0.4,
          y: -mousePos.y * 0.4,
          rotate: [45, -45, 45],
        }}
        transition={{
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 },
          rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            border: "1.5px solid #40342D",
            opacity: 0.35,
            transform: "rotate(45deg)",
          }}
        />
      </motion.div>

      {/* Pulsing circle — center ambient */}
      <motion.div
        className="absolute z-0"
        style={{
          top: "30%",
          left: "50%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid #40342D",
          opacity: 0.08,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* RULES title — with letter stagger */}
      <div className="absolute right-24 top-1/5 text-right z-10">
        <div className="overflow-hidden">
          {"RULES".split("").map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              style={{
                fontSize: "6rem",
                fontWeight: 900,
                color: "#40342D",
                letterSpacing: "0.12em",
                lineHeight: 1,
                fontFamily: "'Georgia', serif",
              }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.p
          style={{
            color: "#40342D",
            fontSize: "0.75rem",
            letterSpacing: "0.45em",
            fontFamily: "monospace",
            opacity: 0.6,
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          OF Coding
        </motion.p>

        {/* Animated underline */}
        <motion.div
          style={{ height: "1px", background: "#40342D", originX: 1 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
      </div>

      {/* Rule cards with staggered entrance + hover lift */}
      {rules.map((rule, i) => {
        const verticalStyle = i % 2 === 0 ? { bottom: "12%" } : { top: "38%" };

        return (
          <motion.div
            key={rule.id}
            className="absolute z-10 group"
            style={{ left: leftPositions[i], ...verticalStyle }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.7, delay: i * 0.25 },
              y: { type: "spring", stiffness: 200, damping: 18 },
            }}
          >
            {/* Number */}
            <motion.h2
              style={{
                fontSize: "5.5rem",
                fontWeight: 900,
                color: "#40342D",
                fontFamily: "'Georgia', serif",
                lineHeight: 1,
                opacity: 0.15,
                paddingTop: "1rm",
              }}
              animate={{ opacity: [0.12, 0.22, 0.12] }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              {rule.id}
            </motion.h2>

            {/* Solid number overlay */}
            <div
              style={{
                fontSize: "5.5rem",
                fontWeight: 900,
                color: "#40342D",
                fontFamily: "'Georgia', serif",
                lineHeight: 1,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              {rule.id}
            </div>

            <div className="mt-2 space-y-1">
              {/* Accent bar */}
              <motion.div
                style={{ height: "2px", background: "#40342D", width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
              />
              <h3
                style={{
                  color: "#40342D",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                {rule.title}
              </h3>
              <p
                style={{
                  color: "#40342D",
                  fontSize: "0.78rem",
                  opacity: 0.55,
                  fontFamily: "monospace",
                }}
              >
                {rule.text}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Scroll-driven floating label */}
      <motion.div
        className="absolute bottom-8 left-8 z-10"
        style={{ color: "#40342D", opacity: 0.3, fontSize: "0.65rem", letterSpacing: "0.3em", fontFamily: "monospace" }}
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        SCROLL TO SURVIVE
      </motion.div>
    </section>
  );
}