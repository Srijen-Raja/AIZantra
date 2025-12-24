import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer className="footer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <div className="container">
      {/* Top section */}
      <div className="footer-top">
        <div>
          <h4 className="footer-brand">AIzantra Intelligence</h4>
          <p className="footer-tagline">
            Engineering intelligent digital systems that accelerate enterprise success
            and unlock real, measurable business value.
          </p>
          <p className="footer-meta">
            CIN: U70200UP2025PTC238807
          </p>
        </div>

        <div className="footer-cta">
          <p className="footer-cta-text">
            Ready to explore how AI, data, and product engineering can transform your business?
          </p>
          <Link to="/contact" className="btn btn-primary footer-cta-button">
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Columns */}
      <div className="footer-grid">
        <div className="footer-col">
          <h5>Navigate</h5>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/insights">Insights</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <ul className="footer-links">
            <li><a href="#">Blogs & Insights</a></li>
            <li><a href="#">Whitepapers</a></li>
            <li><a href="#">POVs</a></li>
            <li><a href="#">Client Stories</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul className="footer-links">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h5>Contact</h5>
          <p className="footer-meta">
            <a href="mailto:contact@aizantraintelligence.com">
              contact@aizantraintelligence.com
            </a>
          </p>
          <p className="footer-meta">
            1A4, GHS-02, Sigma Apartment,<br />
            Beta 1, Greater Noida,<br />
            U.P. 201308, India
          </p>

          <div className="footer-social">
            <a
              href="https://linkedin.com/company/aizantra-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with us on LinkedIn (opens in new tab)"
              className="footer-social-icon"
            >
              <span className="footer-social-icon-inner" aria-hidden="true">in</span>
            </a>
            <a
              href="https://youtube.com/@aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel (opens in new tab)"
              className="footer-social-icon"
            >
              <span className="footer-social-icon-inner" aria-hidden="true">▶</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <span>© 2025 Aizantra Intelligence Pvt. Ltd. All Rights Reserved.</span>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
