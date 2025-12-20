import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <div className="container hero-grid">
      <div className="hero-text">
        <h1>Engineering Intelligence. Accelerating Transformation.</h1>
        <p>
          Aizantra Intelligence helps large enterprises unlock measurable business value
          through AI strategy, enterprise-grade product development, data modernization,
          and intelligent automation.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Request a Consultation
          </Link>
          <Link to="/case-studies" className="btn btn-secondary">
            View Case Studies
          </Link>
        </div>
        <ul className="hero-stats">
          <li>
            <span className="hero-stat-label">25+ years</span>
            <span className="hero-stat-value">Transformation leadership</span>
          </li>
          <li>
            <span className="hero-stat-label">Up to 50%</span>
            <span className="hero-stat-value">Faster time-to-market</span>
          </li>
          <li>
            <span className="hero-stat-label">Up to 40%</span>
            <span className="hero-stat-value">Cost reduction</span>
          </li>
        </ul>
      </div>
      <div className="hero-visual">
        <div className="hero-card hero-card-primary">
          <h3>AI Strategy</h3>
          <p>Align data, process, people, and culture with execution.</p>
        </div>
        <div className="hero-card hero-card-secondary">
          <h3>Product Engineering</h3>
          <p>Enterprise-grade platforms built for scale and resilience.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
