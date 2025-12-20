import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <h4>Aizantra Intelligence Pvt. Ltd.</h4>
        <p className="footer-tagline">
          AI • Digital Transformation • Product Engineering • Modernization
        </p>
        <p className="footer-small">
          CIN: U70200UP2025PTC238807
        </p>
        <p className="footer-small">
          Registered Office: 1A4, GHS-02, Sigma Apartment, Beta 1, Greater Noida, U.P. 201308
        </p>
      </div>

      <div>
        <h5>Quick Links</h5>
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/insights">Insights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h5>Legal</h5>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div>
        <h5>Contact</h5>
        <p className="footer-small">
          Email: <a href="mailto:contact@aizantraintelligence.com">contact@aizantraintelligence.com</a>
        </p>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      © 2025 Aizantra Intelligence Pvt. Ltd. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
