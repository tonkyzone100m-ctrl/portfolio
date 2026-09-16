import cvMakerDashboard from "../assets/cv-maker-dashboard.png";

function CVMakerCaseStudy() {
  return (
    <main className="case-study">

      {/* HERO */}
      <section className="case-hero">
        <div className="case-container">

          <a href="/" className="back-link">
            ← Back to portfolio
          </a>

          <p className="case-label">
            CASE STUDY · CAREER & PRODUCTIVITY TOOL
          </p>

          <h1>
            CV Maker
          </h1>

          <p className="case-intro">
            A modern web application designed to help users build,
            customize, and download professional resumes quickly with
            real-time previews and automated AI summary generation.
          </p>

          <div className="case-meta">
            <div>
              <span>ROLE</span>
              <strong>Full-Stack / Software Developer</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>Live</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>React · Node.js · Express · Prisma · PostgreSQL</strong>
            </div>
          </div>

          {/* Quick Live Demo Action in Hero */}
          <div style={{ marginTop: "35px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="https://cv-maker-sigma-puce.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              View Live App ↗
            </a>
          </div>

        </div>
      </section>


      {/* MAIN PROJECT IMAGE */}
      <section className="case-image-section">
        <div className="case-container">

          <div className="case-image-wrapper">
            <img
              src={cvMakerDashboard}
              alt="CV Maker dashboard showing live resume preview and editor fields"
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
              Simplifying professional resume creation
              through interactive web design.
            </h2>
          </div>

          <div className="case-text">
            <p>
              Creating clean, well-formatted resumes can often be tedious
              and frustrating using standard office software or rigid document editors.
              Users frequently spend more time adjusting layouts than focusing on the actual content.
            </p>

            <p>
              CV Maker was built to streamline this process by providing a centralized
              platform featuring live visual previews, structured section management,
              secure user accounts, and AI-assisted summary writing.
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
              Formatting shouldn't block content.
              Writing summaries shouldn't be a chore.
            </h2>
          </div>

          <div className="case-text">

            <div className="problem-item">
              <span>01</span>
              <p>
                Traditional document tools make maintaining consistent, 
                professional resume formatting difficult and time-consuming.
              </p>
            </div>

            <div className="problem-item">
              <span>02</span>
              <p>
                Users struggle to keep track of multiple resume versions 
                securely across different devices.
              </p>
            </div>

            <div className="problem-item">
              <span>03</span>
              <p>
                Crafting concise, high-impact professional summaries tailored 
                to specific experiences is challenging for many job seekers.
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
            A seamless experience from data entry
            to final document download.
          </h2>

          <div className="feature-grid">

            <article className="feature-card">
              <span>01</span>
              <h3>Live Preview Editor</h3>
              <p>
                Changes made in the form fields update the document preview
                instantly in real-time.
              </p>
            </article>

            <article className="feature-card">
              <span>02</span>
              <h3>Secure Authentication</h3>
              <p>
                Users can securely register, log in, and manage their personal 
                saved resume records via a robust backend.
              </p>
            </article>

            <article className="feature-card">
              <span>03</span>
              <h3>AI Summary Generation</h3>
              <p>
                Integrated AI processing assists users in generating polished, 
                professional profile summaries based on their provided history.
              </p>
            </article>

            <article className="feature-card">
              <span>04</span>
              <h3>Print & PDF Ready</h3>
              <p>
                Optimized CSS print layouts allow users to export clean, 
                standardized A4 documents effortlessly.
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
              Powered by a reliable full-stack architecture.
            </h2>
          </div>

          <div className="tech-list">
            <span>React</span>
            <span>Vite</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>Prisma</span>
            <span>PostgreSQL</span>
            <span>Tailwind CSS</span>
            <span>Git</span>
          </div>

        </div>
      </section>


      {/* PROCESS */}
      <section className="case-section">
        <div className="case-container">

          <p className="case-label">05 · DEVELOPMENT PROCESS</p>

          <h2 className="section-title">
            From concept to production deployment.
          </h2>

          <div className="process">

            <div>
              <span>01</span>
              <strong>Architecture</strong>
              <p>Planning database schemas and API routing structures.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Frontend</strong>
              <p>Developing component states, forms, and live print styling.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Integration</strong>
              <p>Connecting authentication middleware and database controllers.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Deployment</strong>
              <p>Hosting frontend on Vercel and backend containerized on Render.</p>
            </div>

          </div>

        </div>
      </section>


      {/* STATUS */}
      <section className="case-final">
        <div className="case-container">

          <p className="case-label">06 · CURRENT STATUS</p>

          <h2>
            CV Maker is live and fully functional.
          </h2>

          <p>
            The platform is successfully deployed with active user authentication,
            database persistence, and continuous performance improvements.
          </p>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="https://cv-maker-sigma-puce.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Launch Live App ↗
            </a>

            <a href="/" className="secondary-button" style={{ color: "#fff", borderColor: "var(--border)" }}>
              ← Back to Portfolio
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default CVMakerCaseStudy;