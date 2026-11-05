import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div style={{ gridColumn: "1 / -1" }}>
        <h3>WHAT I WORK WITH</h3>
        <h1>Technical Skills</h1>
      </div>
      <div id="python-card" className="skill-card">
        <div className="skill-info-container">
          <h2 className="skill-title">Python</h2>
          <div>Primary Language</div>
          <div>6 Years</div>
        </div>
        <p className="text">
          My most experienced language. Used for backend development, API
          design, database design ,interpreter implementation and scripting.
          I've built everything from FastAPI web servicese and SQL databases to
          custum language interpretations in python.
        </p>
      </div>

      <div className="skill-card">
        <h2 className="skill-title">Programming Languages</h2>
        <div className="skill-bubble-container">
          <div>Python</div>
          <div>JavaScript</div>
          <div>HTML5</div>
          <div>CSS3</div>
        </div>
      </div>

      <div className="skill-card">
        <h2 className="skill-title">Frontend Development</h2>
        <div className="skill-bubble-container">
          <div>React</div>
          <div>React Native</div>
          <div>Responsive Design</div>
          <div>TypeScript</div>
        </div>
      </div>

      <div className="skill-card">
        <h2 className="skill-title">Backend Development</h2>
        <div className="skill-bubble-container">
          <div>FastAPI</div>
          <div>Node.js</div>
          <div>REST APIs</div>
          <div>Authentication</div>
        </div>
      </div>

      <div className="skill-card">
        <h2 className="skill-title">Databases</h2>
        <div className="skill-bubble-container">
          <div>SQL</div>
          <div>SQLite</div>
          <div>Database Design</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
