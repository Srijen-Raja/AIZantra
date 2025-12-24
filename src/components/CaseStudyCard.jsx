import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

const CaseStudyCard = ({ title, bullets }) => (
  <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
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
  </motion.div>
);

export default CaseStudyCard;