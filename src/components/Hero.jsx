import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroimg from '/src/assets/hero.jpg';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const Hero = () => (
  <motion.section 
    className="hero" 
    initial="hidden" 
    animate="visible" 
    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
  >
    <div className="hero-background">
      <img 
        src={heroimg} 
        alt="Professional workplace environment with consultants collaborating on enterprise AI transformation" 
        className="hero-bg-image"
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true"></div>
    </div>
    <div className="container hero-content">
      <motion.div className="hero-text" variants={fadeUp}>
        <h1>Turn Ambition Into Execution. AI Built for Scale.</h1>
        <p>
          Aizantra Intelligence helps SMEs and mid-market enterprises turn ambition into
          execution—unlocking measurable business outcomes through AI strategy, enterprise-grade
          software product development, data modernization, and intelligent automation built for
          cost, scale, and speed.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-hero">
            Book Demo
          </Link>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default Hero;
