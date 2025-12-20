import React from 'react';

const ServiceCard = ({ title, points }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>
      Comprehensive services designed to deliver measurable results and drive sustainable growth.
    </p>
    <div className="card-list">
      {points.map((point, idx) => (
        <div key={idx} className="card-list-item">
          <span>{point}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ServiceCard;