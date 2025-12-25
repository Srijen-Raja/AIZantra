import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

const CaseStudyCard = ({ title, bullets, icon, description }) => (
  <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
      {icon && <div className="card-icon" style={{ flex: '0 0 auto' }}>{icon}</div>}
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
    <p>
      {description || 'Real-world impact from our AI, data, and modernization programs with proven measurable outcomes.'}
    </p>
    <div className="card-list">
      {bullets.map((bullet, idx) => (
        <div key={idx} className="card-list-item">
          <span>{bullet}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default CaseStudyCard;