// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';


// const AboutUs = () => {
//   const { ref, inView } = useInView({ triggerOnce: true });

//   return (
//     <section
//       className="bg-[#701C1C] py-16 px-4 text-white transition-all duration-1000 ease-in-out hover:bg-[#5f1818]"
//     >
//       {/* Header */}
//       <div className="absolute w-[500px] h-[500px] bg-[#963838] opacity-10 rounded-full animate-pulse-slow top-[-100px] left-[-100px] z-0"></div>
//       <div className="text-center mb-12 transition-opacity duration-1000 ease-in-out">
//         <div className="flex items-center justify-center space-x-2 mb-2">
//           <span className="w-2 h-2  rounded-full"></span>
//           <span className="text-sm font-medium text-[#F0EADC]">About Us</span>
//         </div>
//         <h2 className=" text-3xl font-bold  ">
//           Empowering Your Success <br /> with Digital Expertise
//         </h2>
//         <p className="mt-4 text-[#F0EADC] max-w-xl mx-auto">
// At Areesha Creations, we focus on crafting modern, responsive, and user-friendly websites that bring ideas to life. Our work combines clean design, smooth functionality, and interactive experiences to ensure every project stands out.
//         </p>
//       </div>

//       {/* Main Grid */}
//       <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
//         {/* Left Images */}
//         <div className="space-y-4">
//           <img src="https://i.pinimg.com/736x/30/f8/56/30f85663a6807ca681cfe3bcbd841b66.jpg" alt="Team 1" className="rounded-xl shadow-md" width={400} height={100} />
//         </div>

//         {/* Center Badge */}
//         <div className="flex justify-center md:order-none order-last">
//           <div className="w-48 h-48 bg-[#F0EADC] text-center rounded-full flex items-center justify-center border-4 border-red -400 shadow-md">
//             <div>
//               <p className="font-bold text-lg">Certified</p>
//               <p className="text-sm text-gray-700">Quality Mark</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Progress Bars */}
//         <div className="space-y-5">
//           {[
//             ['Marketing & Business Growth', 91],
//             ['Creativity & Innovation', 80],
//             ['Business & Financial Management', 85],
//           ].map(([title, percent], idx) => (
//             <div key={idx}>
//               <div className="flex justify-between text-sm font-medium text-[#F0EADC] mb-1">
//                 <span>{title}</span>
//                 <span>{percent}%</span>
//               </div>
//               <div className="w-full h-2 bg-gray-300 rounded-full">
//                 <div
//                   className="h-full bg-red-500 rounded-full transition-all duration-1000"
//                   style={{ width: `${inView ? percent : 0}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}

//           <button className="mt-4 bg-[#F0EADC] text-[#701C1C] px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300 transition">
//             About Us
//           </button>
//         </div>
//       </div>

//       {/* Bottom Stats */}
//       <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-16 text-[#F0EADC]">
//         {[
//           ['200', 'Successful Projects'],
//           ['20', 'Expert Team'],
//           ['350', 'Happy Customers'],
//           ['6', 'Years of Experience'],
//         ].map(([count, label], idx) => (
//           <div key={idx}>
//             <h3 className="text-2xl font-bold text-white">
//               {inView && <CountUp end={parseInt(count)} duration={2} />}
//               {label.includes('+') && '+'}
//               {label.includes('k') && 'k'}
//             </h3>
//             <p className="text-sm mt-1">{label.replace(/\d+\+?k?/, '')}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
// AboutSection.jsx


// import { motion } from "framer-motion";

// const AboutSection = () => {
//   return (
//     <div className="relative bg-[#701C1C] text-white py-16 overflow-hidden">
//       {/* Subtle animated background circle */}
//       <div className="absolute w-[500px] h-[500px] bg-[#766868] opacity-10 rounded-full animate-pulse-slow top-[-100px] left-[-100px] z-0"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-4">
//         <p className="text-sm text-[#701C1C] font-semibold mb-2">🟢 About Us</p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           Empowering Your Success <br /> with Digital Expertise
//         </h2>
//         <p className="text-gray-700 max-w-xl mb-10">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>

//         {/* Progress Section */}
//         <div className="grid md:grid-cols-2 gap-10">
//           <div className="flex flex-col gap-6">
//             <Progress label="Marketing & Business Growth" value={85} />
//             <Progress label="Creativity & Innovation" value={80} />
//             <Progress label="Business & Financial Management" value={85} />
//             <button className="w-fit mt-4 bg-[#701C1C] text-white px-6 py-2 rounded-md hover:bg-[#5a1414] transition">
//               About Us
//             </button>
//           </div>

//           {/* Images */}
//           <div className="flex flex-col gap-6">
//             <img
//               src="/images/team1.jpg"
//               alt="Team 1"
//               className="rounded-lg shadow-md"
//             />
//             <img
//               src="/images/team2.jpg"
//               alt="Team 2"
//               className="rounded-lg shadow-md"
//             />
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 text-center">
//           <Stat number="3k+" label="Successful Projects" />
//           <Stat number="200+" label="Expert Team" />
//           <Stat number="350+" label="Happy Customers" />
//           <Stat number="16+" label="Years of Experience" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Progress = ({ label, value }) => (
//   <div>
//     <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
//       <span>{label}</span>
//       <span>{value}%</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-3">
//       <motion.div
//         className="bg-[#701C1C] h-3 rounded-full"
//         initial={{ width: 0 }}
//         animate={{ width: `${value}%` }}
//         transition={{ duration: 1.5 }}
//       />
//     </div>
//   </div>
// );

// const Stat = ({ number, label }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//   >
//     <h3 className="text-2xl font-bold text-[#701C1C]">{number}</h3>
//     <p className="text-gray-700">{label}</p>
//   </motion.div>
// );

// export default AboutSection;
// import React from 'react'

// const About = () => {
//   return (
//     <div>
//       dd
//     </div>
//   )
// }

// export default About

import React from "react";
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
} from "react-icons/si";

const skills = [
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    description: "Strong JS knowledge and advanced web development.",
  },
  {
    icon: <SiReact />,
    title: "React",
    description: "Building fast and efficient React apps and websites.",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    description: "Fast server-side rendering and dynamic routing.",
  },
  {
    icon: <SiVuedotjs />,
    title: "Vue.js",
    description: "I build web interfaces and single-page applications.",
  },
  {
    icon: <SiBootstrap />,
    title: "Bootstrap",
    description: "Using MongoDB for scalable backend databases.",
  },
  {
    icon: <SiGit />,
    title: "Git",
    description: "DevOps tool for streamlined source code management.",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description: "A utility-first widely used frontend CSS framework.",
  },
  {
    icon: <SiSass />,
    title: "CSS & Sass",
    description: "I use Sass as my preferred CSS pre-processor.",
  },
];

const SkillsSection = () => {
  return (
    <section
     
      className="bg-[#F0EADC] text-[#701C1C] py-24 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-center tracking-wide relative">
        My <span className="text-[#701C1C]">Skills</span>
        <span className="block w-24 h-1 bg-[#701C1C] mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden border border-[#701C1C]/20"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#701C1C] to-[#F0EADC] transition-all duration-500"></div>

            {/* Icon */}
            <div className="text-5xl text-[#701C1C] mb-4 transition-transform duration-500 group-hover:scale-110">
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#701C1C]">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#701C1C]/80 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
