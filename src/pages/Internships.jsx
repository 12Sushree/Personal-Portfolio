import React from "react";

export default function Internships() {
  const internship = {
    company: "Hebbale Academy",
    role: "Web Development Intern",
    duration: "May 2024 - June 2024",
    description:
      "Worked on building and optimizing frontend components using HTML, CSS and JavaScript, developed backend with Python, and deployed on AWS Cloud.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "AWS"],
  };

  return (
    <section
      id="internships"
      className="min-h-screen flex items-center justify-center 
                 bg-black px-4 py-16"
    >
      <div
        className="max-w-3xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg 
                      hover:shadow-[#A855F7] hover:scale-[1.02] transition transform duration-300"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-[#A855F7] after:mx-auto after:mt-2 after:rounded-full">
          Internship
        </h2>

        {/* Internship Card */}
        <div className="animate-fadeIn">
          <h3 className="text-xl font-semibold text-[#A855F7]">
            {internship.role}
          </h3>
          <p className="text-white text-lg">{internship.company}</p>
          <span className="block text-gray-400 mb-3">
            {internship.duration}
          </span>
          <p className="text-gray-300 mb-4">{internship.description}</p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {internship.tech.map((t, i) => (
              <span
                key={i}
                className="bg-[#4f2379] text-white px-2 py-0.5 rounded text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
