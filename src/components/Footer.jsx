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
              Contact Us: <a href="tel:+919999646734">+91-9999646734</a> <span style={{marginLeft:8, verticalAlign:'middle'}}>
                <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#25D366"><title>whatsapp</title>
                  <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
                </svg>
              </span>
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
              <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20Z" fill="#0A66C2" />
                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#fff" />
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
              <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20Z" fill="#1877F2" />
                <path d="M15 8h-1.5c-0.827 0-1.5 0.673-1.5 1.5V11H10v2h2v6h2v-6h1.5l0.5-2H14V9.5c0-0.276 0.224-0.5 0.5-0.5H15V8z" fill="#fff" />
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
              <svg width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="#E1306C" />
                <circle cx="12" cy="12" r="3" fill="#fff" />
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
              <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="22" rx="5" fill="#1DA1F2" />
                <path d="M19 7.5c-.5.25-1.05.42-1.62.5.58-.35 1.02-.9 1.23-1.56-.55.33-1.17.57-1.83.7C16.7 6.5 15.9 6 15 6c-1.65 0-3 1.35-3 3 0 .24.03.48.08.7C9.7 9.57 7.5 8.1 6.1 6c-.26.45-.41.97-.41 1.53 0 1.05.53 1.98 1.35 2.52-.48-.02-.93-.15-1.33-.36v.04c0 1.47 1.05 2.7 2.44 2.98-.25.07-.52.11-.79.11-.19 0-.38-.02-.56-.06.38 1.18 1.48 2.04 2.78 2.06-1.02.8-2.31 1.28-3.71 1.28-.24 0-.48-.01-.71-.04 1.33.85 2.9 1.35 4.59 1.35 5.5 0 8.51-4.56 8.51-8.51 0-.13 0-.25-.01-.38.58-.42 1.08-.95 1.48-1.56-.54.24-1.12.41-1.72.49z" fill="#fff" />
              </svg>
            </a>

          </div>

          {/* <div className="footer-whatsapp" style={{marginTop:12}}>
            <label style={{display:'block', fontWeight:700, marginBottom:6}}>WhatsApp number</label>
            <input type="text" readOnly value="+91-9999646734" style={{padding:'8px 10px', borderRadius:8, border:'1px solid rgba(0,0,0,0.08)', minWidth:180}} />
          </div> */}
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
