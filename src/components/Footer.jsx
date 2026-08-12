import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Alain Fils. All rights reserved.</p>

      <div className="footer-links">
        <a
          href="https://github.com/https://github.com/tonkyzone100m-ctrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.instagram.com/alain_fils_kb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;