import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ram Bahadur Thapa',
    role: 'Dairy Farmer, Ratnanagar',
    text: 'Duwadi Agrovets has been my go-to shop for cattle medicine for years. Sujan ji always gives honest advice, not just a sale.',
  },
  {
    name: 'Sita Kumari Gurung',
    role: 'Poultry Farmer, Bhatta Chowk',
    text: 'The feed supplements I bought here really improved my poultry health. Great quality products and fair prices every time.',
  },
  {
    name: 'Hari Prasad Koirala',
    role: 'Vegetable Farmer, Ratnanagar-15',
    text: 'I trust Duwadi Agrovets for all my seeds and fertilizers. They explain everything clearly, even for someone like me who is not tech-savvy.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials fade-in">
      <div className="section-container">
        <h2 className="section-heading center">What Farmers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <FaQuoteLeft className="testimonial-quote-icon" />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;