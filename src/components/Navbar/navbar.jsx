// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#701C1C] text-white px-6 py-3 rounded-full w-11/12 max-w-6xl mx-auto flex items-center justify-between mt-6 shadow-md  absolute z-2  left-15">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold">
//           AE
//         </div>
//         <span className="text-white font-semibold text-lg">Areesha.</span>
//       </div>

//       {/* Nav Links */}
//       <ul className="flex space-x-6 text-sm font-medium">
//         <li>
//           <a href="#" className="text-yellow-300">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#about" className="hover:text-yellow-300">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Skill
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Projects
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             Experience
//           </a>
//         </li>
//         <li>
//           <a href="#" className="hover:text-yellow-300">
//             contact
//           </a>
//         </li>
//       </ul>

//       {/* Contact Button */}
//       <button className="bg-white text-[#1f3d2c] px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-yellow-300 transition">
//         Contact Me
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#701C1C] text-white px-8 py-3 rounded-full w-11/12 max-w-6xl mx-auto flex items-center justify-between mt-6 shadow-lg absolute top-4 left-0 right-0 z-50 backdrop-blur-sm">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold">
//           AE
//         </div>
//         <span className="text-white font-semibold text-lg">Areesha.</span>
//       </div>

//       {/* Nav Links */}
//       <ul className="flex space-x-6 text-sm font-medium">
//         <li>
//           <a
//             href="#home"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="#about"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#skills"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Skills
//           </a>
//         </li>
//         <li>
//           <a
//             href="#projects"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href="#experience"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Experience
//           </a>
//         </li>
//         <li>
//           <a
//             href="#contact"
//             className="hover:text-yellow-300 transition-colors duration-300"
//           >
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/* Contact Button */}
//       <button className="bg-white text-[#701C1C] px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-yellow-300 hover:text-[#701C1C] transition-all duration-300">
//         Contact Me
//       </button>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#701C1C] text-white px-8 py-3 rounded-full w-11/12 max-w-6xl mx-auto flex items-center justify-between mt-6 shadow-lg absolute top-4 left-0 right-0 z-50 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold">
          AE
        </div>
        <span className="text-white font-semibold text-lg">Areesha.</span>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li>
          <a href="#home" className="hover:text-yellow-300 transition-colors duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-300 transition-colors duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-yellow-300 transition-colors duration-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-300 transition-colors duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-yellow-300 transition-colors duration-300">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-300 transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Contact Button */}
      <button className="hidden md:block bg-white text-[#701C1C] px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-yellow-300 hover:text-[#701C1C] transition-all duration-300">
        Contact Me
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#701C1C]/95 backdrop-blur-md rounded-2xl w-11/12 mx-auto flex flex-col items-center space-y-4 py-6 text-sm font-medium shadow-lg md:hidden transition-all duration-500">
          <a href="#home" className="hover:text-yellow-300" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-yellow-300" onClick={toggleMenu}>About</a>
          <a href="#skills" className="hover:text-yellow-300" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="hover:text-yellow-300" onClick={toggleMenu}>Projects</a>
          <a href="#experience" className="hover:text-yellow-300" onClick={toggleMenu}>Experience</a>
          <a href="#contact" className="hover:text-yellow-300" onClick={toggleMenu}>Contact</a>

          <button className="bg-yellow-400 text-[#701C1C] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
