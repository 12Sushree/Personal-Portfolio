import React from "react";
import profileImg from "../assets/Profile.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
                 bg-black px-4"
    >
      {/* Left */}
      <div className="flex-1 text-center md:text-left space-y-6 pl-6 md:pl-12 animate-slideFade">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hi, I'm <span className="text-indigo-400">Sushreeta Kumari Sahu</span>
        </h1>

        <h2 className="text-3xl text-indigo-300 font-bold">
          <Typewriter
            words={[
              "Full-Stack Developer (MERN)",
              "Java Enthusiast",
              "Problem Solver",
              "Tech Explorer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0">
          I specialize in building scalable applications using{" "}
          <strong>Core Java</strong> & the <strong>MERN Stack</strong>. I love
          solving problems and learning new technologies.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 text-indigo-400 px-6 py-2 rounded-xl hover:bg-indigo-900 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center animate-fadeIn">
        <img
          src={profileImg}
          alt="Profile"
          className="rounded-full w-50 h-50 object-cover shadow-lg border-4 border-indigo-400 hover:scale-105 transition-transform duration-300 animate-glow"
        />
      </div>
    </section>
  );
}
