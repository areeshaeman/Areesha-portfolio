import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // ✅ import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses =
    "hover:text-yellow-300 cursor-pointer transition-colors duration-300";

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
        <li><Link to="home" smooth={true} duration={600} className={linkClasses}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={600} className={linkClasses}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={600} className={linkClasses}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={600} className={linkClasses}>Projects</Link></li>
        <li><Link to="experience" smooth={true} duration={600} className={linkClasses}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={600} className={linkClasses}>Contact</Link></li>
      </ul>

      {/* Desktop Contact Button */}
      <Link
        to="contact"
        smooth={true}
        duration={600}
        className="hidden md:block bg-white text-[#701C1C] px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-yellow-300 hover:text-[#701C1C] transition-all duration-300 cursor-pointer"
      >
        Contact Me
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#701C1C]/95 backdrop-blur-md rounded-2xl w-11/12 mx-auto flex flex-col items-center space-y-4 py-6 text-sm font-medium shadow-lg md:hidden transition-all duration-500">
          {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              onClick={toggleMenu}
              className={linkClasses}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={600}
            onClick={toggleMenu}
            className="bg-yellow-400 text-[#701C1C] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
