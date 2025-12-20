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
                Available during business hours (IST)
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Headquarters</div>
              <div className="contact-info-value">
                Aizantra Intelligence Pvt. Ltd.<br />
                1A4, GHS-02, Sigma Apartment,<br />
                Beta 1, Greater Noida,<br />
                U.P. 201308, India
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Company Registration</div>
              <div className="contact-info-value">
                CIN: U70200UP2025PTC238807
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-info-label">Connect With Us</div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(26, 31, 58, 0.6)',
                    fontSize: '1.3rem',
                    transition: 'all 200ms ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.background = 'rgba(99, 102, 241, 0.15)';
                    e.target.style.color = 'var(--accent-primary-bright)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = 'var(--border-color-light)';
                    e.target.style.background = 'rgba(26, 31, 58, 0.6)';
                    e.target.style.color = 'inherit';
                  }}
                >
                  in
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  title="YouTube"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(26, 31, 58, 0.6)',
                    fontSize: '1.3rem',
                    transition: 'all 200ms ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.background = 'rgba(99, 102, 241, 0.15)';
                    e.target.style.color = 'var(--accent-primary-bright)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = 'var(--border-color-light)';
                    e.target.style.background = 'rgba(26, 31, 58, 0.6)';
                    e.target.style.color = 'inherit';
                  }}
                >
                  ▶
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