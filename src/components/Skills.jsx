function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p>TECHNICAL SKILLS</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        <article className="skill-card">
          <span className="skill-number">01</span>

          <h3>Software Development</h3>

          <p>
            Building responsive web interfaces and application
            functionality using modern web technologies.
          </p>

          <div className="skill-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">02</span>

          <h3>Backend & Database</h3>

          <p>
            Developing server-side functionality and working with
            relational databases to store and manage application data.
          </p>

          <div className="skill-tags">
            <span>PHP</span>
            <span>MySQL</span>
            <span>SQL</span>
            <span>API Development</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">03</span>

          <h3>Networking & Systems</h3>

          <p>
            Exploring computer networking, Linux, system
            administration, and IT infrastructure.
          </p>

          <div className="skill-tags">
            <span>Networking</span>
            <span>Linux</span>
            <span>Windows Server</span>
            <span>System Administration</span>
          </div>
        </article>

        <article className="skill-card">
          <span className="skill-number">04</span>

          <h3>Development Tools</h3>

          <p>
            Using modern tools and workflows to design, develop,
            manage, and collaborate on software projects.
          </p>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Figma</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills