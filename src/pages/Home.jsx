import SunIcon from '../components/SunIcon';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <img src="/passport.jpg" alt="Tobechukwu Ofili" className="hero-image" />
            <div className="hero-text">
              <div className="hero-title-wrapper">
                <h1>Hi, I'm <span className="text-brand">Tobechukwu Ofili</span></h1>
                <SunIcon />
              </div>
              <p className="hero-subtitle">
                A passionate developer building modern web applications
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn">View My Work</a>
                <a href="#contact" className="btn btn-outline">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
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

      <section id="projects" className="section projects-section">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <ProjectCard 
              title="Currency Quotes API"
              description="A REST API built with Java Spring Boot that converts various currency pairs to Nigerian Naira with real-time exchange rates. Demonstrates CI/CD principles and modern API development practices."
              image="/currency-api.jpg"
              techStack={["Java", "Spring Boot", "REST API", "CI/CD"]}
              link="https://github.com/TobeOf17/currency-quotes-api"
            />
            
            <ProjectCard 
              title="Folio"
              description="A comprehensive full-stack employee and shift management system built with Java Spring Boot. Features include employee tracking, shift scheduling, and administrative dashboard."
              image="/folio.jpg"
              techStack={["Java", "Spring Boot", "Full Stack", "MySQL"]}
              detailPage="folio"
            />
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
              <a href="https://wa.me/2349067051794" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="https://linkedin.com/in/tobechukwu-ofili" className="btn btn-linkedin" target="_blank" rel="noopener noreferrer">
                LinkedIn
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