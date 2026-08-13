import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1620200423727-8127f75d7f53?auto=format&fit=crop&w=600&q=80',
    alt: 'Veterinary medicine bottles on shelf',
  },
  {
    src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80',
    alt: 'Green farmland with crops',
  },
  {
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80',
    alt: 'Seeds and grains',
  },
  {
    src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80',
    alt: 'Cattle grazing on farm',
  },
  {
    src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80',
    alt: 'Farmer tending crops in field',
  },
  {
    src: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=600&q=80',
    alt: 'Agricultural store shelves with products',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery fade-in">
      <div className="section-container">
        <h2 className="section-heading center">Our Store</h2>
        <p className="section-subheading center">
          A glimpse into Duwadi Agrovets — our products, and our shop.
        </p>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;