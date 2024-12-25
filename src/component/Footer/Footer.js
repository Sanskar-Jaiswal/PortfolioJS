import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2024 Sanskar Jaiswal. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/sanskar-dev-ops/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Sanskarjaas" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:aaryanjaiswal2136@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
