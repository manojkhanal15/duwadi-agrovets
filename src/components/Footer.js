import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';
import shopLogo from '../assets/images/logo.png';
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={shopLogo} alt="Duwadi Agrovets Logo" className="footer-logo-img" /> Duwadi Agrovets
          </div>
          <p>Your Trusted Partner in Farming &amp; Livestock Care.</p>
        </div>

        <div className="footer-contact">
          <p>
            <FaMapMarkerAlt /> Ratnanagar-15, Bhatta Chowk, Nepal
          </p>
          <p>
            <FaPhoneAlt /> <a href="tel:9845585413">9845585413</a>
          </p>
          <p>
            <FaFacebook /> Duwadi Agrovets on Facebook
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} Duwadi Agrovets. All rights reserved. Owned by Sujan Duwadi.</p>
      </div>
    </footer>
  );
};

export default Footer;