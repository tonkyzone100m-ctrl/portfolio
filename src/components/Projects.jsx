import { Link } from 'react-router-dom'
import reportHubDashboard from '../assets/reporthub-dashboard.png'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p>SELECTED WORK</p>
        <h2>Projects built to solve real problems.</h2>
      </div>

      <article className="project-feature">
        <div className="project-image">
         <img
  src={reportHubDashboard}
  alt="ReportHub administration dashboard showing infrastructure reports and analytics"
/>
        </div>

        <div className="project-content">
          <p className="project-category">
            INFRASTRUCTURE REPORTING PLATFORM
          </p>

          <h3>ReportHub</h3>

          <p className="project-description">
            A digital platform designed to connect citizens with
            authorities by providing a structured way to report,
            track, manage, and resolve infrastructure issues.
          </p>

          <div className="project-details">
            <div>
              <span>Problem</span>
              <p>
                Infrastructure issues can be difficult to report
                and track through traditional communication channels.
              </p>
            </div>

            <div>
              <span>Solution</span>
              <p>
                A centralized reporting platform with tracking,
                management, analytics, and administrative tools.
              </p>
            </div>
          </div>

          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>

          <div className="project-actions">
            <Link
  to="/projects/reporthub"
  className="primary-button"
>
  View Case Study
</Link>

            <span className="project-status">
              In Development
            </span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Projects