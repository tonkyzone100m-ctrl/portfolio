import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand">
          <span className="brand-name">Alain Fils</span>
          <span className="brand-role">IT • Software • Networking</span>
        </Link>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pages/Gallery">Gallery</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;