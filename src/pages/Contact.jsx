import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ fullName: '', companyName: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SectionWrapper
        eyebrow="Get In Touch"
        title="Let's talk about your transformation"
        subtitle="Share your challenges and objectives. Our team will explore how AI, data, and engineering can unlock measurable business value for your enterprise."
      >
        <div className="grid grid-2">
          <form className="card contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Your company"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message / Requirements *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your transformation goals and challenges..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Request a Consultation
            </button>
            {submitted && (
              <div className="form-success">
                ✓ Thank you! Our team will contact you shortly.
              </div>
            )}
          </form>

          <div className="card contact-details">
            <h3>Contact Information</h3>

            <div className="contact-info-block">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value">
                <a href="mailto:contact@aizantraintelligence.com">
                  contact@aizantraintelligence.com
                </a>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-value">
                {/* Update with phone number from letterhead */}
                 <a href="tel:+919999646734">(+91-9999646734 <svg fill="#000000" width="20" height="20" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 8, display: 'inline-flex', verticalAlign: 'middle' }}><title>whatsapp</title>
                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
              </svg> )</a>
                <br />
                <small>Available during business hours (IST)</small>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Headquarters</div>
              <div className="contact-info-value">
                AIzantra Intelligence Pvt. Ltd.<br />
                {/* Update with exact address from letterhead */}
                1A4, GHS-02, Sigma Apartment,<br />
                Beta 1, Greater Noida,<br />
                U.P. 201308, India
              </div>
            </div>

            {/* Add additional office addresses from letterhead if needed */}
            {/* <div className="contact-info-block">
              <div className="contact-info-label">Sales Office</div>
              <div className="contact-info-value">
                Address from letterhead
              </div>
            </div> */}

            <div className="contact-info-block">
              <div className="contact-info-label">Company Registration</div>
              <div className="contact-info-value">
                CIN: U70200UP2025PTC238807
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Connect Us</div>

              <div className="contact-social-links">
                <a
                  href="https://linkedin.com/company/aizantra-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn (opens in new tab)"
                  className="contact-social-icon"
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
                  className="contact-social-icon"
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
                  className="contact-social-icon"
                  title="Instagram"
                >
                  <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#000000"/>
</svg>
                  {/* <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.63c-.794.297-1.473.645-2.148 1.32-.676.675-1.023 1.354-1.32 2.148-.297.788-.5 1.657-.56 2.935C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.263 2.148.56 2.935.297.793.645 1.473 1.32 2.148.675.675 1.354 1.023 2.148 1.32.788.297 1.66.5 2.938.56 1.27.06 1.677.072 4.947.072s3.668-.015 4.947-.072c1.277-.06 2.148-.263 2.935-.56.793-.297 1.473-.645 2.148-1.32.675-.675 1.023-1.354 1.32-2.148.297-.791.5-1.657.56-2.935.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.263-2.149-.56-2.935-.297-.794-.645-1.475-1.32-2.15-.675-.675-1.354-1.023-2.148-1.32-.788-.297-1.657-.5-2.935-.56C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.053 1.805.245 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.356 1.056.41 2.227.061 1.264.07 1.646.07 4.849s-.009 3.586-.07 4.849c-.053 1.171-.245 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.356-2.227.41-1.264.061-1.646.07-4.849.07s-3.586-.009-4.849-.07c-1.171-.053-1.805-.245-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.356-1.056-.41-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.586.07-4.849c.053-1.171.245-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.056-.356 2.227-.41 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881zM8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></s */}
                </a>
                <a
                  href="https://twitter.com/aizantraintelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Twitter (opens in new tab)"
                  className="contact-social-icon"
                  title="Twitter"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <path d="M19 7.5c-.5.25-1.05.42-1.62.5.58-.35 1.02-.9 1.23-1.56-.55.33-1.17.57-1.83.7C16.7 6.5 15.9 6 15 6c-1.65 0-3 1.35-3 3 0 .24.03.48.08.7C9.7 9.57 7.5 8.1 6.1 6c-.26.45-.41.97-.41 1.53 0 1.05.53 1.98 1.35 2.52-.48-.02-.93-.15-1.33-.36v.04c0 1.47 1.05 2.7 2.44 2.98-.25.07-.52.11-.79.11-.19 0-.38-.02-.56-.06.38 1.18 1.48 2.04 2.78 2.06-1.02.8-2.31 1.28-3.71 1.28-.24 0-.48-.01-.71-.04 1.33.85 2.9 1.35 4.59 1.35 5.5 0 8.51-4.56 8.51-8.51 0-.13 0-.25-.01-.38.58-.42 1.08-.95 1.48-1.56-.54.24-1.12.41-1.72.49z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
