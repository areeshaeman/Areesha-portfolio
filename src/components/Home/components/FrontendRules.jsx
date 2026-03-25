import { motion } from "framer-motion";

export default function RulesSection() {
  const rules = [
    { id: "1", title: "6 games", text: "Each harder. Each deadlier" },
    { id: "2", title: "No second chances", text: "One move. One shot." },
    { id: "3", title: "Trust no one", text: "Allies can betray you" },
    { id: "4", title: "Time is running", text: "Decide fast — or die" },
  ];

  // left positions for cards
  const leftPositions = ["10%", "35%", "60%", "80%"];

  return (
    <section className="relative bg-black min-h-screen text-white overflow-hidden">
      {/* vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-20 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-white/20 h-full"></div>
        ))}
      </div>

      {/* floating triangles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-1/3 w-10 h-10 border border-pink-500 rotate-45"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 right-1/3 w-10 h-10 border border-pink-500 rotate-45"
      />

      {/* center title */}
      <div className="absolute right-30 top-1/3 text-right z-10">
        <h1 className="text-7xl font-bold text-pink-500 tracking-widest">
          RULES
        </h1>
        <p className="text-white text-sm tracking-[0.4em]">OF SURVIVAL</p>
      </div>

      {/* rule numbers with alternating vertical positions */}
      {rules.map((rule, i) => {
        // alternate top or bottom
        const verticalStyle =
          i % 2 === 0 ? { bottom: "10%" } : { top: "40%" };

        return (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="absolute space-y-2"
            style={{ left: leftPositions[i], ...verticalStyle }}
          >
            <h2 className="text-7xl font-bold text-cyan-400">{rule.id}</h2>
            <h3 className="text-pink-500 text-lg uppercase tracking-wider">
              {rule.title}
            </h3>
            <p className="text-gray-400 text-sm">{rule.text}</p>
          </motion.div>
        );
      })}
    </section>
  );
}