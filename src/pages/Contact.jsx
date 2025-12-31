import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const actionUrl = form.action;
    const formPayload = new URLSearchParams(new FormData(form));

    try {
      const res = await fetch(actionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formPayload
      });

      if (res.ok || res.status === 200 || res.status === 201) {
        setStatus('success');
        setFormData({ fullName: '', companyName: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        // Server error (4xx/5xx)
        setErrorMessage(`Submission failed (Status: ${res.status}). Please try again.`);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      // Network error
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <SectionWrapper
        eyebrow="Get In Touch"
        title="Let's talk about your transformation"
        subtitle="Share your challenges and objectives. Our team will explore how AI, data, and engineering can unlock measurable business value for your enterprise."
      >
        <div className="grid grid-2">
          <form
            className="card contact-form"
            action="https://formsubmit.co/9992f44f374398a93b52f24e7d723584"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New contact request from website" />
            <input type="hidden" name="_next" value="/contact" />

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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Request a Consultation'}
            </button>

            {status === 'success' && (
              <div className="form-success" style={{ marginTop: '1rem' }}>
                ✓ Thank you! Your Response is submitted.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error" style={{ marginTop: '1rem' }}>
                ✗ {errorMessage}
              </div>
            )}
          </form>

          {/* Contact details section remains unchanged */}
          <div className="card contact-details">
            {/* ... rest of your contact details code stays exactly the same ... */}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
