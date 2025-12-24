import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.footer className="footer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <div className="container">
      {/* Top section */}
      <div className="footer-top">
        <div>
          <h4 className="footer-brand">AIzantra Intelligence Pvt Ltd.</h4>
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
          <div className="footer-cta-buttons">
            <Link to="/contact" className="btn btn-primary footer-cta-button">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="footer-grid">
        <div className="footer-col">
          <h5>Navigate</h5>
          <ul className="footer-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Product</Link></li>
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
          <div className="footer-addresses">
            <p className="footer-meta"><strong>Registered Office:</strong><br />
              1A4, GHS-02, Sigma Apartment,<br />
              Sector Beta 1,<br />
              Greater Noida, UP 201310
            </p>

            <p className="footer-meta"><strong>Corporate Office:</strong><br />
              A-335, Defence Colony,<br />
              Second Floor, New Delhi, 110024
            </p>

            <p className="footer-meta">
              Contact Us: <a href="tel:+9101204343465">+91-0120-4343465</a> | <a href="tel:+9101140158284">+91-011-40158284</a> | <a href="tel:+919999646734">+91-9999646734</a>
            </p>
          </div>

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
              href="https://facebook.com/aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook (opens in new tab)"
              className="footer-social-icon"
            >
              <span className="footer-social-icon-inner" aria-hidden="true">f</span>
            </a>

            <a
              href="https://instagram.com/aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram (opens in new tab)"
              className="footer-social-icon"
            >
              <span className="footer-social-icon-inner" aria-hidden="true">★</span>
            </a>

            <a
              href="https://twitter.com/aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter (opens in new tab)"
              className="footer-social-icon"
            >
              <span className="footer-social-icon-inner" aria-hidden="true">t</span>
            </a>

          </div>

          <div className="footer-whatsapp" style={{marginTop:12}}>
            <label style={{display:'block', fontWeight:700, marginBottom:6}}>WhatsApp number</label>
            <input type="text" readOnly value="+91-9999646734" style={{padding:'8px 10px', borderRadius:8, border:'1px solid rgba(0,0,0,0.08)', minWidth:180}} />
          </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <span>© 2025 AIzantra Intelligence Pvt Ltd. All Rights Reserved.</span>
          <div className="footer-trademark">
            <span>TRADIX<sup>®</sup> is a trademark of AIzantra Intelligence Pvt Ltd.</span>
          </div>
        </div>
      </div>
    
  </motion.footer>
);

export default Footer;
