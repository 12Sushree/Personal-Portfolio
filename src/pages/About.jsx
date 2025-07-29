import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-black via-gray-900 to-black px-6 py-16"
    >
      <div
        className="max-w-4xl w-full text-center md:text-left animate-slideFade 
                      bg-gray-900 bg-opacity-90 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-4xl font-extrabold text-white mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-indigo-500 after:mx-auto md:after:mx-0 after:mt-2 after:rounded-full">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I am{" "}
          <span className="text-indigo-400 font-semibold">
            Sushreeta Kumari Sahu
          </span>
          , a web developer and Java enthusiast skilled in{" "}
          <strong>Core Java</strong> and <strong>MERN Stack</strong>. I enjoy
          creating scalable apps and solving challenging problems while
          continuously learning new tools.
        </p>

        {/* Education */}
        <h3 className="text-2xl font-bold text-white mb-4 mt-8">Education</h3>
        <ul className="space-y-3 text-gray-300">
          <li>
            🎓 <strong>MCA</strong> – GIET University, Odisha{" "}
            <span className="text-gray-400">(2024–2026)</span>
          </li>
          <li>
            🎓 <strong>B.Sc. Computer Science</strong> – Berhampur University{" "}
            <span className="text-gray-400">(2024)</span>
          </li>
          <li>
            🎓 <strong>Higher Secondary</strong> – SSVM Neelakantha Nagar{" "}
            <span className="text-gray-400">(2021)</span>
          </li>
          <li>
            🎓 <strong>Secondary School</strong> – SSVM Gosainuagaon{" "}
            <span className="text-gray-400">(2019)</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
