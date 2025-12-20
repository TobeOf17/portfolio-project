function ProjectProblem() {
  return (
    <section className="project-section project-section-reverse">
      <div className="project-section-content">
        <div className="project-image-container">
          <img src="/login.png" alt="Shift Scheduling Interface" />
        </div>
        <div className="project-text">
          <h2>The Problem</h2>
          <p>
            Many small to medium-sized businesses struggle with manual employee scheduling and shift management, 
            leading to:
          </p>
          <ul>
            <li>Time-consuming manual scheduling processes</li>
            <li>Scheduling conflicts and miscommunication</li>
            <li>Difficulty tracking employee hours and availability</li>
            <li>Lack of centralized employee information</li>
            <li>Inefficient shift swap and leave request management</li>
          </ul>
          <p>
            Folio addresses these challenges by providing a centralized, automated system that simplifies 
            workforce management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectProblem;