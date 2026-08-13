import React from 'react';

// Import your real images
import vetMedicinesImg from '../assets/images/vet-medicines.jpg';
import feedSupplementsImg from '../assets/images/feed-supplements.jpg';
import seedsImg from '../assets/images/seeds.jpg';
import fertilizersImg from '../assets/images/fertilizers.jpg';
import farmEquipmentImg from '../assets/images/farm-equipment.jpg';
import storageSuppliesImg from '../assets/images/storage-supplies.jpg';

const services = [
  {
    image: vetMedicinesImg,
    title: 'Veterinary Medicines',
    desc: 'A complete range of medicines and vaccines to keep your livestock healthy and productive.',
  },
  {
    image: feedSupplementsImg,
    title: 'Feed Supplements',
    desc: 'Nutrient-rich feed supplements for cattle, poultry, and other livestock to boost growth and health.',
  },
  {
    image: seedsImg,
    title: 'Seeds',
    desc: 'High-yield, quality-tested seeds suited to local soil and climate conditions.',
  },
  {
    image: fertilizersImg,
    title: 'Fertilizers',
    desc: 'Organic and chemical fertilizers to help your crops grow strong and healthy.',
  },
  {
    image: farmEquipmentImg,
    title: 'Farm Equipment',
    desc: 'Essential tools and equipment to make everyday farm work easier and more efficient.',
  },
  {
    image: storageSuppliesImg,
    title: 'Poultry Farm Equipment',
    desc: 'Equipment and supplies for poultry farms, including feeders, drinkers, and housing solutions.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services fade-in">
      <div className="section-container">
        <h2 className="section-heading center">Our Products &amp; Services</h2>
        <p className="section-subheading center">
          We proudly stock both <strong>local and international brands</strong> to give you
          choices you can trust.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;