function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="text-brand">Tobechukwu Ofili</span></h1>
            <p className="hero-subtitle">
              A passionate developer building modern web applications
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a developer with a passion for creating clean, functional, and 
              user-friendly web applications. I enjoy solving problems and bringing 
              ideas to life through code.
            </p>
            <p>
              My focus is on building responsive, accessible websites that provide 
              great user experiences. I'm constantly learning new technologies and 
              improving my craft.
            </p>
            <p>
              When I'm not coding, you can find me active in my community, exploring 
              nature, or indulging in my love for sports.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project Name</h3>
              <p>Project description goes here</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
            
            <div className="project-card">
              <h3>Project Name</h3>
              <p>Project description goes here</p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
            
            <div className="project-card">
              <h3>Project Name</h3>
              <p>Project description goes here</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">API</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </p>
            <div className="contact-cta">
              <a href="mailto:ofilitobe@gmail.com" className="btn">Send Email</a>
              <a href="https://wa.me/2349067051794" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Tobechukwu Fredrick Ofili.</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;