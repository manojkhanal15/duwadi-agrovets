import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero fade-in"
      style={{
        backgroundImage:
          "linear-gradient(rgba(27, 62, 27, 0.65), rgba(27, 62, 27, 0.65)), url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="hero-content">
        <h1>Duwadi Agrovets</h1>
        <p className="hero-tagline">Your Trusted Partner in Farming &amp; Livestock Care</p>
        <p className="hero-subtext">
          Quality veterinary medicines, seeds, fertilizers &amp; farm supplies serving the
          farmers of Ratnanagar and beyond.
        </p>
        <div className="hero-buttons">
          <a href="tel:9845585413" className="btn btn-primary">
            <FaPhoneAlt /> Call Now
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaMapMarkerAlt /> Visit Our Shop
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;