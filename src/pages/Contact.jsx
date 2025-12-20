import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Talk to Aizantra experts"
      subtitle="Share your context and objectives to explore how AI, data, and engineering can unlock measurable value."
    >
      <div className="grid grid-2">
        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Full Name*</label>
            <input id="fullName" name="fullName" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="companyName">Company Name*</label>
            <input id="companyName" name="companyName" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email*</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />
          </div>
          <div className="field">
            <label htmlFor="message">Message / Requirements*</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Request a Consultation
          </button>
          {submitted && (
            <p className="form-note">
              Thank you for reaching out. The team will contact you shortly.
            </p>
          )}
        </form>

        <div className="card contact-details">
          <h3>Contact details</h3>
          <p>
            Aizantra Intelligence Pvt. Ltd.
            <br />
            Email:{' '}
            <a href="mailto:contact@aizantraintelligence.com">
              contact@aizantraintelligence.com
            </a>
          </p>
          <p>
            Registered Office:
            <br />
            1A4, GHS-02, Sigma Apartment, Beta 1,
            <br />
            Greater Noida, U.P. 201308
          </p>
          <p className="contact-note">
            For partnership, media, or careers queries, mention the topic in your
            message for faster routing.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
