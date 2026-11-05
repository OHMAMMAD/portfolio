import "../styles/Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar fade-in">
      <div className="name-logo-container">
        <h1 className="name-logo">RH</h1>
        <div className="logo-glow"></div>
      </div>
      <div className="links-container">
        <button 
          className={`page-link ${activeSection === "about" ? "active" : ""}`}
          onClick={() => scrollToSection("about")}
        >
          About Me
        </button>
        <button 
          className={`page-link ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </button>
        <button 
          className={`page-link ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button 
          className={`page-link ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </button>
      </div>
      <div className="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
