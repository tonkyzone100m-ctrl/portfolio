function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">

        <a href="#home" className="brand">
          <span className="brand-name">Alain Fils</span>
          <span className="brand-role">
            IT • Software • Networking
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;