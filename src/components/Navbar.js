import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import shopLogo from '../assets/images/logo.png'; // add this import

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={shopLogo} alt="Duwadi Agrovets Logo" className="navbar-logo-img" />
          <span>
            Duwadi <strong>Agrovets</strong>
          </span>
        </a>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="tel:9845585413" className="navbar-call-btn" onClick={closeMenu}>
            <FaPhoneAlt /> Call Now
          </a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;