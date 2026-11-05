import "../styles/Projects.css";
import telo_chat from "../assets/telo-chat.png";
import notes from "../assets/notes.jpg";
import telo_main from "../assets/telo-main.png";

function Projects() {
  return (
    <div className="projects-container">
      <h3>WHAT I'VE BUILT</h3>
      <h1>My Projects</h1>
      <div className="projects-card-container">
        <div className="project-card">
          <div className="project-image-container">
            <img
              src={telo_main}
              alt="project-image"
              className="project-image"
              id="telo-image"
            />
            <img
              src={telo_chat}
              alt="project-image"
              className="project-image"
              id="telo-image"
            />
          </div>
          <div className="project-card-text">
            <h2>Telo</h2>
            <p>
              My most recent project. a fully fletched messaging app built with
              fastAPI on the backend and react-native on the fronend. providing
              a native app on android and a smooth experience on website
            </p>
          </div>
          <div className="project-info-bubble-container">
            <div>Python</div>
            <div>React Native</div>
            <div>FastAPI</div>
            <div>SQL</div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image-and-text-container">
            <div className="project-image-container">
              <img src={notes} alt="project-image" className="project-image" />
            </div>
            <div className="project-card-text">
              <h2>Notes</h2>
              <p>
                A fully responsive Notes taking app thats clean and functional,
                built with React, demonstrating component-based UI development
                and state management
              </p>
            </div>
          </div>
          <div className="project-info-bubble-container">
            <div>React</div>
            <div>JavaScript</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
