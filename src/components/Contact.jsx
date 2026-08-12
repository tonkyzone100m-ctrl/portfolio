function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something useful.</h2>

        <p className="contact-description">
          I'm open to connecting about software development,
          networking, IT projects, collaboration, and
          opportunities to learn and build.
        </p>

        <div className="contact-actions">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="primary-button"
          >
            Send Me an Email
          </a>

          <a
            href="https://github.com/tonkyzone100m-ctrl"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;