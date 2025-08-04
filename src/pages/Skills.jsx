import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiC,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "C", icon: <SiC className="text-red-600" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center 
                 bg-black px-4 py-16"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          My Technical Skills
        </h2>
        <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
          Technologies I use to build modern and scalable applications:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-md hover:shadow-[#A855F7] transition text-center"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <span className="text-gray-200 font-medium">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
