import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center 
                 bg-black px-4 py-16"
    >
      <div className="max-w-xl w-full text-center bg-gray-900 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">My Resume</h2>
        <p className="text-gray-300 mb-6">
          Download my resume and explore my work experience & skills.
        </p>

        <a
          href="https://drive.google.com/file/d/1yURP8J7kAoG9v7jwF8np-JQnV7VWA721/view?usp=sharing"
          // href={`${process.env.PUBLIC_URL}/Sushreeta_Sahu_Resume_V1.pdf`}
          download
          className="inline-flex items-center gap-2 bg-[#4f2379] text-white px-6 py-3 rounded-md text-lg font-medium"
        >
          <FaDownload className="text-xl" /> Download Resume
        </a>
      </div>
    </section>
  );
}
