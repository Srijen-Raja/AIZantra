import React from 'react';

const SectionWrapper = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="section">
    <div className="container">
      {(eyebrow || title) && (
        <div className="section-header">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default SectionWrapper;
