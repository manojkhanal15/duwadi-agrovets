import React from 'react';
import ownerPhoto from '../assets/images/sujan-duwadi.jpg'; // add this import

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="section-container about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80"
            alt="Sujan Duwadi at the shop"
          />
        </div>
        <div className="about-text">
          <h2 className="section-heading">About Duwadi Agrovets</h2>
          <p>
            Duwadi Agrovets was founded by <strong>Sujan Duwadi</strong> with a simple mission:
            to give the farmers and livestock owners of Ratnanagar and the surrounding
            communities easy access to reliable, high-quality agricultural and veterinary
            products.
          </p>
          <p>
            With years of hands-on experience serving the local farming community, we understand
            the everyday challenges farmers face — from animal health emergencies to choosing the
            right seeds for the season. That's why we stock a carefully selected range of
            veterinary medicines, feed supplements, seeds, fertilizers, and farm equipment from
            trusted local and international brands.
          </p>
          <div className="about-highlight">
            <img
              src={ownerPhoto}
              alt="Sujan Duwadi - Founder and Owner"
              className="about-highlight-photo"
            />
            <div>
              <h4> Dr. Sujan Duwadi</h4>
              <p>Owner / Veterinarian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;