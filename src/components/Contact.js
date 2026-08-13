import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact fade-in">
      <div className="section-container">
        <h2 className="section-heading center">Visit or Call Us</h2>
        <p className="section-subheading center">
          We're here to help with all your farming and livestock needs.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Address</h4>
                <p>Ratnanagar-15, Bhatta Chowk, Nepal</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:9845585413">9845585413</a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaClock className="contact-icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>Sun - Fri: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
              </div>
            </div>

            <a href="tel:9845585413" className="btn btn-primary contact-call-btn">
              <FaPhoneAlt /> Call Now: 9845585413
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Duwadi Agrovets Location"
              src="https://maps.google.com/maps?q=ratnanagar+15+bhatta+chowk&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;