import React from 'react';

const CaseStudyCard = ({ title, bullets }) => (
  <div className="card case-study-card">
    <h3>{title}</h3>
    <ul>
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </div>
);

export default CaseStudyCard;
