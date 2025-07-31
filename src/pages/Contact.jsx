import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center 
                 bg-black px-4 py-16"
    >
      <div className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-lg max-w-lg w-full animate-slideFade">
        <h2 className="text-3xl font-extrabold text-center text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-center mb-6">
          I'm open to <strong>internship</strong> and{" "}
          <strong>entry-level</strong> opportunities. Let's connect!
        </p>

        <div className="flex justify-center gap-8 mt-8 text-3xl">
          <a
            href="https://github.com/12Sushree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-125 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/12Sushree"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sushreeta.shu@gmail.com"
            className="text-gray-400 hover:text-red-400 hover:scale-125 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
