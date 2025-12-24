import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

const ServiceCard = ({ title, points }) => (
  <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
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
  </motion.div>
);

export default ServiceCard;