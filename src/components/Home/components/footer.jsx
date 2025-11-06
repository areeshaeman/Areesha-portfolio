
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function PortfolioFooter() {
  return (
    <footer 
    id="contact"
     
      className="bg-[#40342D] border-t-4 border-[#40342D] mt-12  text-[#F2F2F2]"
    >
      <div className="max-w-6xl mx-auto my-12 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#F2F2F2]">Areesha Eman</h2>
          <p className="mt-3 text-sm text-[#F2F2F2] leading-relaxed">
            Front-End Developer & Designer crafting clean, performant, and
            accessible web experiences.
          </p>

          <div className="flex justify-center sm:justify-start space-x-4 mt-5">
            <a
              href="https://wa.me/03287983903"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 border border-[#F2F2F2] rounded-full hover:bg-[#A69C94] hover:text-[#F0EADC] transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/areeshaeman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 border border-[#40342D] rounded-full hover:bg-[#A69C94] hover:text-[#F0EADC] transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/areesha-eman-999611307/"
              aria-label="LinkedIn"
              className="p-2 border border-[#40342D] rounded-full hover:bg-[#A69C94] hover:text-[#F0EADC] transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-2 border border-[#40342D] rounded-full hover:bg-[#A69C94] hover:text-[#F0EADC] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#F2F2F2] mb-3 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#F2F2F2]">
            <li>
              <a href="#about" className="hover:text-[#A69C94]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#A69C94]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#A69C94]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#F2F2F2] mb-3 uppercase">
            Contact
          </h3>
          <p className="text-[#F2F2F2]">
            Email:{" "}
            <a
              href="mailto:areeshae760@gmail.com"
              className="text-[#F2F2F2] hover:underline break-all"
            >
              areeshae760@gmail.com
            </a>
          </p>
          <p className="text-[#F2F2F2] mt-2">Location: Bahawalpur</p>
        </div>

        {/* Newsletter Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#F2F2F2] mb-3 uppercase">
            Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-[#F2F2F2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#40342D]"
            />
            <button
              type="submit"
              className="bg-[#A69C94] text-[#F2F2F2] px-2 py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-[#F2F2F2]/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#F2F2F2] text-center md:text-left">
          <p>© {new Date().getFullYear()} AreeshaEman. All rights reserved.</p>
          <a
            href="#top"
            className="mt-3 md:mt-0 px-3 py-1 border border-[#F2F2F2] rounded-full text-[#F2F2F2] hover:bg-[#A69C94] hover:text-[#F0EADC] transition"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
