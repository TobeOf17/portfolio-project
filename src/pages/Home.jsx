import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

function Home() {
    return (
        <main>
            <section className="hero-section">
                <div className="container">
                    <Hero />

                    <div id="projects" className="projects-grid-large">
                        <ProjectCard
                            title="WatchTower"
                            description="A lightweight observability platform that monitors software reliability through real-time tracking of latency, availability, error rates, traffic, saturation, MTTR, and MTTD, with automated alerting and dashboard-based visualization."
                            image="/watchtower.png"
                            techStack={["Spring Boot", "React", "MySQL", "Java 17"]}
                            link="https://github.com/TobeOf17/watchtower"
                        />

                        <ProjectCard
                            title="WhyFi"
                            description="An interactive financial planning and visualization platform featuring a custom calculation engine for compound interest, inflation-adjusted returns, and investment comparisons, with dynamic insights explaining financial outcomes in plain language."
                            image="/whyfi.png"
                            techStack={["Spring Boot", "React", "Java 21"]}
                            link="https://whyfi-frontend-two.vercel.app"
                        />

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

            <About />

            <Contact />

            <Footer />
        </main>
    );
}

export default Home;