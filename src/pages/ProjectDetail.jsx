import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectOverview from '../components/ProjectOverview';
import ProjectProblem from '../components/ProjectProblem';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectTech from '../components/ProjectTech';
import ProjectLearnings from '../components/ProjectLearnings';
import Footer from '../components/Footer';

function ProjectDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="project-detail">
      <div className="container">
        <div className="project-top">
          <Link to="/" className="back-link">← Back to Home</Link>
          
          <div className="project-header">
            <h1>Folio</h1>
            <p className="project-tagline">Employee and Shift Management System</p>
          </div>

          <div className="project-hero-image">
            <img src="/folio.jpg" alt="Folio Main" />
          </div>
        </div>

        <ProjectOverview />
        <ProjectProblem />
        <ProjectFeatures />
        <ProjectTech />
        <ProjectLearnings />

        <div className="project-footer">
          <a href="https://github.com/yourusername/folio" target="_blank" rel="noopener noreferrer" className="btn">
            View on GitHub →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default ProjectDetail;