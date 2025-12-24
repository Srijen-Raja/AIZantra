import React from 'react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const SectionWrapper = ({ id, eyebrow, title, subtitle, children, headingLevel = 2 }) => {
  const HeadingTag = `h${Math.min(Math.max(parseInt(headingLevel, 10), 1), 6)}`;
  
  return (
    <motion.section 
      id={id} 
      className="section" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.15 }} 
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      <div className="container">
        {(eyebrow || title) && (
          <motion.div className="section-header" variants={reveal}>
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && React.createElement(HeadingTag, null, title)}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div variants={reveal}>{children}</motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
