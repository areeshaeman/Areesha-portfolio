
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
    
//     <div className="  relative h-screen bg-[#F0EADC] flex items-center justify-center px-10">
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 space-y-4">
//           <h2 className="text-[#701C1C] text-xl font-bold">HI THERE!</h2>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             I'M <span className="text-[#701C1C]">AREESHA</span>
//           </h1>
//           <div className="flex flex-col space-y-2">
//             <span className="bg-[#701C1C] text-white px-3 py-1 w-max text-sm font-semibold">
//               FRONTEND DEVELOPER / DESIGNER
//             </span>
//             <span className="bg-[#701C1C] text-white  px-3 py-1 w-max text-sm font-semibold">
//               READY TO BUILD YOUR NEXT PROJECT
//             </span>
//           </div>
//           <p className="text-gray-600">
//             Passionate about creating interactive applications and experiences on the web. Let's build something amazing together.
//           </p>
//           <button className="bg-[#701C1C] text-white px-5 py-2 mt-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
//             MORE ABOUT ME
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="w-full md:w-1/2 relative flex justify-center">
//           <div className="rounded-full overflow-hidden w-72 h-72 border-4 border-[#701C1C]">
//             <img
//               src="https://i.pinimg.com/736x/9f/99/61/9f9961e2086884023420b16d360d0f62.jpg"
//               alt="Areesha"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Icons vertically aligned beside image */}
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4 mr-[-40px] hidden md:flex flex-col items-center">
//             <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
//               <i className="fas fa-user"></i>
//             </div>
//             <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
//               <i className="fas fa-briefcase"></i>
//             </div>
//             <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
//               <i className="fas fa-comments"></i>
//             </div>
//             <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
//               <i className="fas fa-bullhorn"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative h-screen bg-[#F0EADC] overflow-hidden">
      {/* Particle Background */}
<Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 w-full h-full z-0"
  options={{
    background: { color: "#F0EADC" },
    particles: {
      number: { value: 35 },
      color: { value: "#ffffff" },
      size: { value: { min: 1, max: 4 } },
      opacity: {
        value: 0.6,
        animation: { enable: true, speed: 0.5 }
      },
      move: {
        enable: true,
        speed: 0.3,
        outModes: "bounce"
      }
    }
  }}
/>


      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-10">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-[#701C1C] text-xl font-bold">HI THERE!</h2>
            <h1 className="text-4xl md:text-5xl font-bold">
              I'M <span className="text-[#701C1C]">AREESHA</span>
            </h1>
            <div className="flex flex-col space-y-2">
              <span className="bg-[#701C1C] text-white px-3 py-1 w-max text-sm font-semibold">
                FRONTEND DEVELOPER / DESIGNER
              </span>
              <span className="bg-[#701C1C] text-white px-3 py-1 w-max text-sm font-semibold">
                READY TO BUILD YOUR NEXT PROJECT
              </span>
            </div>
            <p className="text-gray-600">
              Passionate about creating interactive applications and experiences on the web. Let's build something amazing together.
            </p>
            <button className="bg-[#701C1C] text-white px-5 py-2 mt-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
              MORE ABOUT ME
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="rounded-full overflow-hidden w-72 h-72 border-4 border-[#701C1C]">
              <img
                src="https://i.pinimg.com/736x/9f/99/61/9f9961e2086884023420b16d360d0f62.jpg"
                alt="Areesha"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Icons beside image */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4 mr-[-40px] hidden md:flex flex-col items-center">
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fas fa-user"></i>
              </div>
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fas fa-comments"></i>
              </div>
              <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
                <i className="fas fa-bullhorn"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



