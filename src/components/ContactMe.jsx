import "../styles/ContactMe.css";

function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for your message! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="contact-container fade-in">
      <div className="contact-header">
        <h3>GET IN TOUCH</h3>
        <h1>Contact Me</h1>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card float-animation">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>radin.hemmasi@example.com</p>
            <a href="mailto:radin.hemmasi@example.com" className="info-link">
              Send Email →
            </a>
          </div>

          <div className="info-card float-animation" style={{ animationDelay: "0.2s" }}>
            <div className="info-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="info-link">
              Visit Profile →
            </a>
          </div>

          <div className="info-card float-animation" style={{ animationDelay: "0.4s" }}>
            <div className="info-icon">💻</div>
            <h3>GitHub</h3>
            <p>Check out my projects</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="info-link">
              View Repositories →
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <span className="btn-text">Send Message</span>
            <span className="btn-icon">🚀</span>
          </button>
        </form>
      </div>

      <div className="contact-footer">
        <p>© {new Date().getFullYear()} Radin Hemmasi. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            𝕏
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            📷
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link">
            🎮
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;