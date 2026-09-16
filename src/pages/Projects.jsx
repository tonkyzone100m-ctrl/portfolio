import { Link } from 'react-router-dom'
import reportHubDashboard from '../assets/reporthub-dashboard.png'
import cvMakerDashboard from '../assets/cv-maker-dashboard.png'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p>SELECTED WORK</p>
        <h2>Projects built to solve real problems.</h2>
      </div>

      {/* ReportHub Project */}
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
              <span></span> In Development
            </span>
          </div>
        </div>
      </article>

      {/* CV Maker Project */}
      <article className="project-feature">
        <div className="project-image">
          <img
            src={cvMakerDashboard}
            alt="CV Maker dashboard showing live resume preview and editor fields"
          />
        </div>

        <div className="project-content">
          <p className="project-category">
            CAREER & PRODUCTIVITY TOOL
          </p>

          <h3>CV Maker</h3>

          <p className="project-description">
            A web application that enables users to easily build, customize, 
            and download professional CVs with real-time previews and AI-powered summaries.
          </p>

          <div className="project-details">
            <div>
              <span>Problem</span>
              <p>
                Creating well-formatted, professional resumes can be tedious 
                and time-consuming with traditional tools.
              </p>
            </div>

            <div>
              <span>Solution</span>
              <p>
                An interactive resume builder featuring live templates, 
                secure authentication, and automated AI summary generation.
              </p>
            </div>
          </div>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Prisma</span>
            <span>PostgreSQL</span>
          </div>

          <div className="project-actions">
            <Link
              to="/pages/cvmakercasestudy"
              className="primary-button"
            >
              View Case Study
            </Link>

            {/* Added Live Demo link */}
            <a
              href="https://cv-maker-sigma-puce.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Live Demo ↗
            </a>

            <span className="project-status">
              <span></span> Live
            </span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Projects