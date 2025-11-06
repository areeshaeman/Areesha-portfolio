import React from "react";

const ExperienceEducation = () => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([document.documentElement.outerHTML], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = "experience-education.html";
    document.body.appendChild(element);
    element.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main  className="max-w-6xl mx-auto my-12 p-6 bg-[#D9D9D9] min-h-screen text-[#40342D] font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#40342D] text-white flex items-center justify-center text-2xl font-bold shadow-lg">
          EX
        </div>
        <div>
          <h1 className="text-3xl font-bold  text-[#40342D]">Experience & Education</h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            A concise timeline of relevant roles, projects, and academic background.
            Swap entries with your own details to fit your portfolio.
          </p>
        </div>
      </header>

      {/* Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience */}
        <div className="bg-white/60 rounded-xl shadow-lg backdrop-blur-sm p-5">
          <h2 className="text-xl font-semibold mb-3">Professional Experience</h2>
          <div className="relative border-l-4 border-[#40342D] pl-4 space-y-6 space-x-12">
            <div className="relative">
              <h3 className="font-semibold">Senior Frontend Developer — Upwork.</h3>
              <p className="text-sm text-gray-600 mb-1">
                Jan 2024 — Present · Remote <span className="bg-[#701C1C]/10 text-[#40342D] px-2 py-0.5 rounded-full ml-2">Full-time</span>
              </p>
              <p className="text-gray-700 text-sm">
                Leading the frontend team to build scalable React applications using
                TypeScript, Ant Design, and RTK Query.
              </p>
            </div>


            <div className="relative">
              <h3 className="font-semibold">Fronted developer — Codelab</h3>
              <p className="text-sm text-gray-600 mb-1">Dec 2023 — oct 2025</p>
              <p className="text-gray-700 text-sm">
                Assisted in creating dynamic web pages, optimized front-end performance, and collaborated with designers to implement responsive designs
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/60 rounded-xl shadow-lg backdrop-blur-sm p-5">
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <div className="relative border-l-4 border-[#40342D] pl-4 space-y-6">
            <div className="relative">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">BS Computer Science</h3>
                  <p className="text-sm text-gray-600">University of Bahawalpur · 2022 — 2025</p>
                </div>
                <p className="text-sm text-gray-600">GPA: 3.8</p>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                Thesis on scalable UI architectures for single-page applications and
                accessibility best practices.
              </p>
            </div>

           

            <div className="relative">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Front-end Bootcamp — CodeSchool</h3>
                  <p className="text-sm text-gray-600">2020 · 12 weeks</p>
                </div>
                <p className="text-sm text-gray-600">Certificate</p>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                Practical course covering React, modern CSS, and testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-3 mt-8">
        <button
          onClick={handleDownload}
          className="bg-[#40342D] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#40342D] transition"
        >
          Download HTML
        </button>
        <button
          onClick={handlePrint}
          className="border border-[#40342D] text-[#40342D] px-4 py-2 rounded-lg hover:bg-[#40342D]/10 transition"
        >
          Print
        </button>
       
      </div>
    </main>
  );
};

export default ExperienceEducation;