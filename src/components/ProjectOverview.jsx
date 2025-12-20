function ProjectOverview() {
  return (
    <section className="project-section">
      <div className="project-section-content">
        <div className="project-text">
          <h2>Overview</h2>
          <p>
            Folio is a comprehensive full-stack employee and shift management system designed to streamline 
            workforce operations. The application provides an intuitive interface for managing employee records, 
            scheduling shifts, and tracking work hours in real-time.
          </p>
          <p>
            Built with enterprise-grade technologies, Folio demonstrates modern full-stack development practices 
            with a robust Java Spring Boot backend and a dynamic React TypeScript frontend.
          </p>
        </div>
        <div className="project-image-container">
          <img src="/EmployeeManagement.png" alt="Folio Dashboard" />
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;