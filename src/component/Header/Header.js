import React from 'react';
import './Header.css';

// {<a href='https://ecommerce-react-three-zeta.vercel.app/' className="download-link">mysite</a>}

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1> SJ </h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#certification">Certification</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="download-btn">
        <a href="./pdf/SanskarJaiswalResume.pdf" download="Sanskar_Jaiswal_Resume" className="download-link">
          Download Resume
        </a>
       
      </div>
    </header>
  );
};

export default Header;
