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
              title="LinkedIn"
            >
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"/>
<path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"/>
<path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
</svg>
            </a>

            <a
              href="https://facebook.com/aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook (opens in new tab)"
              className="footer-social-icon"
              title="Facebook"
            >
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
</svg>
            </a>

            <a
              href="https://instagram.com/aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram (opens in new tab)"
              className="footer-social-icon"
              title="Instagram"
            >
              <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#000000"/>
</svg>
            </a>

            <a
              href="https://twitter.com/aizantraintelligence"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter (opens in new tab)"
              className="footer-social-icon"
              title="Twitter"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <path d="M19 7.5c-.5.25-1.05.42-1.62.5.58-.35 1.02-.9 1.23-1.56-.55.33-1.17.57-1.83.7C16.7 6.5 15.9 6 15 6c-1.65 0-3 1.35-3 3 0 .24.03.48.08.7C9.7 9.57 7.5 8.1 6.1 6c-.26.45-.41.97-.41 1.53 0 1.05.53 1.98 1.35 2.52-.48-.02-.93-.15-1.33-.36v.04c0 1.47 1.05 2.7 2.44 2.98-.25.07-.52.11-.79.11-.19 0-.38-.02-.56-.06.38 1.18 1.48 2.04 2.78 2.06-1.02.8-2.31 1.28-3.71 1.28-.24 0-.48-.01-.71-.04 1.33.85 2.9 1.35 4.59 1.35 5.5 0 8.51-4.56 8.51-8.51 0-.13 0-.25-.01-.38.58-.42 1.08-.95 1.48-1.56-.54.24-1.12.41-1.72.49z" fill="currentColor" />
                  </svg>
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
