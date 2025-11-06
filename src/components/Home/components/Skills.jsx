// import React from 'react';
// import { motion } from 'framer-motion';

// const skills = [
//   {
//     title: 'Frontend',
//     items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
//   },
//   {
//     title: 'Backend',
//     items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
//   },
//   {
//     title: 'Tools & Platforms',
//     items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Netlify', 'Vercel'],
//   },
//   {
//     title: 'Others',
//     items: ['REST API', 'Responsive Design', 'Deployment', 'Debugging'],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className="min-h-screen bg-[#F0EADC] text-[#701C1C] py-16 px-4 transition-all duration-700 ease-in-out">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold text-center mb-16"
//         >
//           Skills & Tools
//         </motion.h2>

//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//           {skills.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-[#701C1C] text-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-transform duration-300"
//             >
//               <h3 className="text-2xl font-semibold mb-4 border-b border-[#F0EADC] pb-2">
//                 {category.title}
//               </h3>
//               <ul className="space-y-2 text-sm tracking-wide">
//                 {category.items.map((skill, i) => (
//                   <li key={i} className="hover:text-[#F0EADC] transition-colors">
//                     • {skill}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
// import React from "react";

// export default function Skills() {
//   return (
//     <div className="min-h-screen bg-[#F0EADC] text-black font-sans p-10">
//       <h1 className="text-4xl font-bold border-l-8 border-[#701C1C] pl-4 mb-6 uppercase">
//         About Me
//       </h1>

//       <p className="text-lg mb-8">
//         I’m <span className="font-bold"> Areesha Eman</span>, web developer
//       </p>

//       <p className="max-w-3xl mb-10 text-gray-700">
// I’m a passionate Frontend Developer who loves turning ideas into clean, modern, and interactive web experiences. With a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS, I specialize in building responsive websites that not only look great but also deliver smooth user experiences.
// I enjoy bringing creativity to life through animations, transitions, and intuitive UI design. My focus is always on writing clean, scalable code and ensuring that every project I work on is both visually appealing and user-friendly.
//       </p>

//       <div className="grid md:grid-cols-2 gap-10">
//         {/* What I Do Section */}
//         <div>
//           <h2 className="text-xl font-bold mb-4 text-white bg-[#701C1C] px-4 py-2 inline-block rounded">
//             What I Do?
//           </h2>
//           <div className="space-y-6 mt-4">
//             <div className="flex items-start space-x-4">
//               <div className="bg-[#FBBF24] p-3 rounded-full">
//                 <i className="fas fa-print text-[#701C1C]"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg">Responsive websites</h3>
//                 <p className="text-sm text-gray-700">
//                  Build responsive websites that look great on all devicesDesign intuitive UI/UX with attention to detail
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="bg-[#FBBF24] p-3 rounded-full">
//                 <i className="fas fa-globe text-[#701C1C]"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg">Web Design</h3>
//                 <p className="text-sm text-gray-700">
//                   Clean, responsive websites that are both visually appealing
//                   and user-friendly.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <div className="bg-[#FBBF24] p-3 rounded-full">
//                 <i className="fas fa-camera text-[#701C1C]"></i>
//               </div>
//               <div>
//                 <h3 className="font-bold text-lg">Performance</h3>
//                 <p className="text-sm text-gray-700">
//                  Ensure fast performance & clean code for long-term scalability
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Fun Facts Section */}
//         <div>
//           <h2 className="text-xl font-bold mb-4 text-white bg-[#701C1C] px-4 py-2 inline-block rounded">
//             Fun Facts
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
//             {[
//               ["10+ ", "Years Experience"],
//               ["450", "Projects Done"],
//               ["65", "Won Awards"],
//               ["300+", "Happy Clients"],
//               ["650K", "Satisfied Followers"],
//               ["+10", "New Videos Each Month"],
//             ].map(([value, label], index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded shadow p-4 text-center"
//               >
//                 <p className="text-2xl font-bold text-[#701C1C]">{value}</p>
//                 <p className="text-sm text-gray-600">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















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
     
      className="bg-[#D9D9D9] text-[#40342D] py-24 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold mb-16 text-center tracking-wide relative">
        My <span className="text-[#40342D]">Skills</span>
        <span className="block w-24 h-1 bg-[#40342D] mx-auto mt-3 rounded-full"></span>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden border border-[#701C1C]/20"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#40342D] to-[#F0EADC] transition-all duration-500"></div>

            {/* Icon */}
            <div className="text-5xl text-[#40342D] mb-4 transition-transform duration-500 group-hover:scale-110">
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#40342D]">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#40342D]/80 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;