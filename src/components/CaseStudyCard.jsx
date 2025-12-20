import React from 'react';

const CaseStudyCard = ({ title, bullets }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>
      Real-world impact from our AI, data, and modernization programs with proven measurable outcomes.
    </p>
    <div className="card-list">
      {bullets.map((bullet, idx) => (
        <div key={idx} className="card-list-item">
          <span>{bullet}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CaseStudyCard;