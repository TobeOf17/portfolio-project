import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main>
      <Hero />

      <About />

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

      <Contact />

      <Footer />
    </main>
  );
}

export default Home;
