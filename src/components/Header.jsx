import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Improved Scroll Detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";
      const scrollY = window.scrollY + 150; // offset for header height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Added internships to navigation
  const navItems = [
    "home",
    "about",
    "skills",
    "resume",
    "projects",
    "internships",
    "contact",
  ];

  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 flex justify-between items-center z-50 shadow-lg">
      <h1 className="text-xl font-bold">Sushreeta Kumari Sahu</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`mx-3 transition duration-200 ${
              activeSection === item
                ? "text-[#A855F7] border-b-2 border-[#A855F7]"
                : "hover:text-gray-300"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        <span className="text-2xl">☰</span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col md:hidden p-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className={`transition duration-200 ${
                activeSection === item
                  ? "text-[#A855F7]"
                  : "hover:text-gray-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
