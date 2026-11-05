import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="about" className="section fade-in">
        <AboutMe />
      </section>
      
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-dot"></div>
        <div className="divider-line"></div>
      </div>
      
      <section id="skills" className="section fade-in">
        <Skills />
      </section>
      
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-dot"></div>
        <div className="divider-line"></div>
      </div>
      
      <section id="projects" className="section fade-in">
        <Projects />
      </section>
      
      <div className="section-divider">
        <div className="divider-line"></div>
        <div className="divider-dot"></div>
        <div className="divider-line"></div>
      </div>
      
      <section id="contact" className="section fade-in">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
