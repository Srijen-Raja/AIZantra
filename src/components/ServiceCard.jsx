import React from 'react';

const ServiceCard = ({ title, points }) => (
  <div className="card service-card">
    <h3>{title}</h3>
    <ul>
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
