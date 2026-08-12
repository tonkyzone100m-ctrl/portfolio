import reportHubDashboard from "../assets/reporthub-dashboard.png";

function ReportHubCaseStudy() {
  return (
    <main className="case-study">

      {/* HERO */}
      <section className="case-hero">
        <div className="case-container">

          <a href="/" className="back-link">
            ← Back to portfolio
          </a>

          <p className="case-label">
            CASE STUDY · INFRASTRUCTURE TECHNOLOGY
          </p>

          <h1>
            ReportHub
          </h1>

          <p className="case-intro">
            A digital infrastructure reporting platform designed
            to connect citizens with authorities and make public
            infrastructure issues easier to report, track, and manage.
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>IT / Software Developer</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>In Development</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>React · PHP · MySQL</strong>
            </div>
          </div>

        </div>
      </section>


      {/* MAIN PROJECT IMAGE */}
      <section className="case-image-section">
        <div className="case-container">

          <div className="case-image-wrapper">
            <img
              src={reportHubDashboard}
              alt="ReportHub administration dashboard"
            />
          </div>

        </div>
      </section>


      {/* OVERVIEW */}
      <section className="case-section">
        <div className="case-container case-two-column">

          <div>
            <p className="case-label">01 · OVERVIEW</p>
            <h2>
              Turning infrastructure problems into
              structured digital reports.
            </h2>
          </div>

          <div className="case-text">
            <p>
              Infrastructure problems can be difficult to report
              and follow through traditional communication channels.
              Citizens may not know where to report an issue, while
              authorities can struggle to organize and prioritize
              incoming problems.
            </p>

            <p>
              ReportHub was created to provide a centralized digital
              platform where infrastructure issues can be submitted,
              tracked, managed, and resolved.
            </p>
          </div>

        </div>
      </section>


      {/* PROBLEM */}
      <section className="case-section case-dark">
        <div className="case-container case-two-column">

          <div>
            <p className="case-label">02 · THE PROBLEM</p>

            <h2>
              Reporting should be simple.
              Managing reports should be organized.
            </h2>
          </div>

          <div className="case-text">

            <div className="problem-item">
              <span>01</span>
              <p>
                Infrastructure issues can be difficult for citizens
                to communicate through traditional channels.
              </p>
            </div>

            <div className="problem-item">
              <span>02</span>
              <p>
                Reports can become difficult to organize and track.
              </p>
            </div>

            <div className="problem-item">
              <span>03</span>
              <p>
                Authorities need better visibility into priorities
                and unresolved issues.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* SOLUTION */}
      <section className="case-section">
        <div className="case-container">

          <p className="case-label">03 · THE SOLUTION</p>

          <h2 className="section-title">
            One platform connecting reporting,
            management, and resolution.
          </h2>

          <div className="feature-grid">

            <article className="feature-card">
              <span>01</span>
              <h3>Report Issues</h3>
              <p>
                Citizens can submit infrastructure problems
                through a structured reporting process.
              </p>
            </article>

            <article className="feature-card">
              <span>02</span>
              <h3>Track Reports</h3>
              <p>
                Users can monitor the progress and current status
                of submitted issues.
              </p>
            </article>

            <article className="feature-card">
              <span>03</span>
              <h3>Manage Reports</h3>
              <p>
                Authorities can review, assign, update, and
                manage incoming reports.
              </p>
            </article>

            <article className="feature-card">
              <span>04</span>
              <h3>Analyze Issues</h3>
              <p>
                Administrative tools can help identify patterns,
                priorities, and areas requiring attention.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* TECHNOLOGY */}
      <section className="case-section case-tech">
        <div className="case-container case-two-column">

          <div>
            <p className="case-label">04 · TECHNOLOGY</p>

            <h2>
              Built with modern web technologies.
            </h2>
          </div>

          <div className="tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>Figma</span>
          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="case-section">
        <div className="case-container">

          <p className="case-label">05 · DEVELOPMENT PROCESS</p>

          <h2 className="section-title">
            From problem to working system.
          </h2>

          <div className="process">

            <div>
              <span>01</span>
              <strong>Research</strong>
              <p>Understanding the problem and users.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Design</strong>
              <p>Creating user flows and interface designs.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Development</strong>
              <p>Building the frontend, backend, and database.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Testing</strong>
              <p>Testing functionality and improving the system.</p>
            </div>

          </div>

        </div>
      </section>


      {/* STATUS */}
      <section className="case-final">
        <div className="case-container">

          <p className="case-label">06 · CURRENT STATUS</p>

          <h2>
            ReportHub is currently in development.
          </h2>

          <p>
            The project is being continuously improved with
            additional functionality, testing, and refinements
            planned for future versions.
          </p>

          <a href="/" className="primary-button">
            ← Back to Portfolio
          </a>

        </div>
      </section>

    </main>
  );
}

export default ReportHubCaseStudy;