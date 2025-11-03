// import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

// export default function PortfolioFooter() {
//   return ( 
//     <footer  id="contact" className="bg-[#F0EADC] border-t-4 border-[#701C1C] mt-12  ">
//       <div className="w-6xl mx-auto my-12 p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Brand Section */}
//         <div>
//           <h2 className="text-2xl font-bold text-[#701C1C]">Areesha Eman</h2>
//           <p className="mt-3 text-sm text-gray-700">
//             Front‑End Developer & Designer crafting clean, performant, and
//             accessible web experiences.
//           </p>
//           <div className="flex space-x-4 mt-4">
//             <a
//               href="https://wa.me/03287983903"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="WhatsApp"
//               className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
//             >
//               <FaWhatsapp />
//             </a>

//             <a
//               href="https://github.com/areeshaeman/"
//               aria-label="GitHub"
//               className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="#"
//               aria-label="LinkedIn"
//               className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="#"
//               aria-label="Twitter"
//               className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
//             >
//               <FaTwitter />
//             </a>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#701C1C] mb-3 uppercase">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               <a href="#about" className="hover:text-[#701C1C]">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#projects" className="hover:text-[#701C1C]">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-[#701C1C]">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#701C1C] mb-3 uppercase">
//             Contact
//           </h3>
//           <p className="text-gray-700">
//             Email:{" "}
//             <a
//               href="mailto:areeshae760@gmail.com"
//               className="text-[#701C1C] hover:underline"
//             >
//               areeshae760@gmail.com
//             </a>
//           </p>
//           <p className="text-gray-700 mt-2">Location: Bahawalpur </p>
//         </div>

//         {/* Newsletter Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-[#701C1C] mb-3 uppercase">
//             Newsletter
//           </h3>
//           <form className="flex flex-col sm:flex-row gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-2 py-2 border border-[#701C1C] rounded-md focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-[#701C1C] text-[#F0EADC] px-2 py-2 rounded-md font-semibold hover:opacity-90"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Note */}
//       <div className="border-t border-[#701C1C]/30 mt-8">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
//           <p>© {new Date().getFullYear()} AreeshaEman. All rights reserved.</p>
//           <a
//             href="#top"
//             className="mt-2 md:mt-0 px-3 py-1 border border-[#701C1C] rounded-full text-[#701C1C] hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
//           >
//             Back to Top
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function PortfolioFooter() {
  return (
    <footer
      id="contact"
      className="bg-[#F0EADC] border-t-4 border-[#701C1C] mt-12"
    >
      <div className="max-w-6xl mx-auto my-12 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#701C1C]">Areesha Eman</h2>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Front-End Developer & Designer crafting clean, performant, and
            accessible web experiences.
          </p>

          <div className="flex justify-center sm:justify-start space-x-4 mt-5">
            <a
              href="https://wa.me/03287983903"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/areeshaeman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="p-2 border border-[#701C1C] rounded-full hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#701C1C] mb-3 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#about" className="hover:text-[#701C1C]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#701C1C]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#701C1C]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#701C1C] mb-3 uppercase">
            Contact
          </h3>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:areeshae760@gmail.com"
              className="text-[#701C1C] hover:underline break-all"
            >
              areeshae760@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mt-2">Location: Bahawalpur</p>
        </div>

        {/* Newsletter Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-[#701C1C] mb-3 uppercase">
            Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-[#701C1C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#701C1C]"
            />
            <button
              type="submit"
              className="bg-[#701C1C] text-[#F0EADC] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-[#701C1C]/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 text-center md:text-left">
          <p>© {new Date().getFullYear()} AreeshaEman. All rights reserved.</p>
          <a
            href="#top"
            className="mt-3 md:mt-0 px-3 py-1 border border-[#701C1C] rounded-full text-[#701C1C] hover:bg-[#701C1C] hover:text-[#F0EADC] transition"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
