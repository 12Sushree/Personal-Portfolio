import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Internships from "./pages/Internships";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Internships />
        <Contact />
      </main>
    </div>
  );
}

export default App;
