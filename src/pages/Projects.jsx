import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      description:
        "Full-stack system to manage patient, doctor, and staff details with role-based access.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
      codeLink: "https://github.com/12Sushree/Hospital-Management-System",
    },
    {
      title: "Student Management System",
      description:
        "Web app with CRUD operations to store and retrieve student information efficiently.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
      codeLink: "https://github.com/12Sushree/stdmgmt",
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive personal portfolio website showcasing my work and contact details.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      codeLink: "https://github.com/12Sushree/Personal-Portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center 
                 bg-black px-4 py-16"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-300 text-center mb-10">
          Some of my recent works:
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/40 transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-indigo-800 text-indigo-100 px-2 py-0.5 rounded text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-indigo-400 text-indigo-400 px-4 py-1.5 rounded-md hover:bg-indigo-950 text-sm"
              >
                GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
