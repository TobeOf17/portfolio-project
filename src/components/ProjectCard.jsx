import { Link } from 'react-router-dom';

function ProjectCard({ title, description, image, techStack, link, detailPage }) {
  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={title} className="project-image" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      {detailPage ? (
        <Link to={`/project/${detailPage}`} className="project-link">
          View Details →
        </Link>
      ) : link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project on Github →
        </a>
      ) : null}
    </div>
  );
}

export default ProjectCard;