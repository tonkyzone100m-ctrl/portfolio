function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-status">
          <span className="hero-status-dot"></span>
          Open to opportunities & collaboration
        </div>

        <p className="hero-label">
          INFORMATION TECHNOLOGY • SOFTWARE DEVELOPMENT • NETWORKING
        </p>

        <h1>
          I build digital
          <span> solutions that matter.</span>
        </h1>

        <p className="hero-description">
          I'm an Information Technology student and software developer focused
          on building practical, reliable, and user-centered digital solutions.
          I work across software development, web technologies, databases,
          networking, and modern IT systems.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Let's Connect
          </a>
        </div>

        <div className="hero-highlights">
          <div className="hero-highlight">
            <strong>IT</strong>
            <span>Technology</span>
          </div>

          <div className="hero-highlight">
            <strong>Web</strong>
            <span>Development</span>
          </div>

          <div className="hero-highlight">
            <strong>Network</strong>
            <span>Infrastructure</span>
          </div>

          <div className="hero-highlight">
            <strong>DB</strong>
            <span>Data Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;