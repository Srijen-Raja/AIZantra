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
                <a href="tel:+919999646734">+91-9999646734 <svg fill="#25D366" width="20" height="20" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 8, display: 'inline-flex', verticalAlign: 'middle' }}><title>whatsapp</title>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="Layer_1"
                    width="30"
                    height="30"
                    version="1.1"
                    viewBox="0 0 382 382"
                  >
                    <path
                      fill="#0077B7"
                      d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0M118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666M341.91 330.654a9.247 9.247 0 0 1-9.246 9.246H286.73a9.247 9.247 0 0 1-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 0 1-9.246 9.246h-44.426a9.247 9.247 0 0 1-9.246-9.246V149.593a9.247 9.247 0 0 1 9.246-9.246h44.426a9.247 9.247 0 0 1 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472z"
                    ></path>
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
                  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg9"
    width="30"
    height="30"
    version="1.1"
    viewBox="0 0 700 700"
  >
    <defs id="defs13">
      <clipPath id="clipPath25" clipPathUnits="userSpaceOnUse">
        <path id="path23" d="M0 700h700V0H0Z"></path>
      </clipPath>
    </defs>
    <g id="g17" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)">
      <g id="g19">
        <g id="g21" clipPath="url(#clipPath25)">
          <g id="g27" transform="translate(600 350)">
            <path
              id="path29"
              fill="#0866ff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0"
            ></path>
          </g>
          <g id="g31" transform="translate(447.918 273.604)">
            <path
              id="path33"
              fill="#fff"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.6 250.6 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z"
            ></path>
          </g>
        </g>
      </g>
    </g>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="30"
                    height="30"
                  >
                    <defs>
                      <radialGradient
                        xlinkHref="#a"
                        id="c"
                        cx="35.996"
                        cy="131.351"
                        r="14.773"
                        fx="35.996"
                        fy="131.351"
                        gradientTransform="matrix(0 -.4509 .419 0 -234.434 103.198)"
                        gradientUnits="userSpaceOnUse"
                      ></radialGradient>
                      <radialGradient
                        xlinkHref="#b"
                        id="d"
                        cx="33.582"
                        cy="107.607"
                        r="14.773"
                        fx="33.582"
                        fy="107.607"
                        gradientTransform="matrix(.0395 .1975 -.8139 .1629 375.076 -106.188)"
                        gradientUnits="userSpaceOnUse"
                      ></radialGradient>
                      <linearGradient id="b">
                        <stop offset="0" stopColor="#3771c8"></stop>
                        <stop offset="0.128" stopColor="#3771c8"></stop>
                        <stop offset="1" stopColor="#60f" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="a">
                        <stop offset="0" stopColor="#fd5"></stop>
                        <stop offset="0.1" stopColor="#fd5"></stop>
                        <stop offset="0.5" stopColor="#ff543e"></stop>
                        <stop offset="1" stopColor="#c837ab"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#c)"
                      d="M14.782 0c-6.174 0-7.973.006-8.32.035C5.196.14 4.409.339 3.549.723a5.9 5.9 0 0 0-1.701 1.169C.91 2.812.372 4.024.16 5.393c-.1.688-.13.828-.137 4.344-.003 1.172 0 2.714 0 4.783 0 6.135.007 7.933.036 8.278.103 1.225.294 1.996.701 2.84a6.18 6.18 0 0 0 4 3.278c.604.156 1.271.24 2.127.283.362.016 4.059.027 7.747.027s7.375-.004 7.742-.023c.99-.046 1.565-.127 2.201-.289a6.13 6.13 0 0 0 3.995-3.287c.397-.824.598-1.623.689-2.785.02-.253.028-4.289.028-8.323s-.009-8.068-.029-8.321c-.092-1.182-.294-1.977-.704-2.817a5.9 5.9 0 0 0-1.252-1.728C26.45.826 25.363.306 23.961.101c-.69-.1-.827-.13-4.348-.137h-4.82z"
                      transform="translate(.228 .227)"
                    ></path>
                    <path
                      fill="url(#d)"
                      d="M14.782 0c-6.174 0-7.973.006-8.32.035C5.196.14 4.409.339 3.549.723a5.9 5.9 0 0 0-1.701 1.169C.91 2.812.372 4.024.16 5.393c-.1.688-.13.828-.137 4.344-.003 1.172 0 2.714 0 4.783 0 6.135.007 7.933.036 8.278.103 1.225.294 1.996.701 2.84a6.18 6.18 0 0 0 4 3.278c.604.156 1.271.24 2.127.283.362.016 4.059.027 7.747.027s7.375-.004 7.742-.023c.99-.046 1.565-.127 2.201-.289a6.13 6.13 0 0 0 3.995-3.287c.397-.824.598-1.623.689-2.785.02-.253.028-4.289.028-8.323s-.009-8.068-.029-8.321c-.092-1.182-.294-1.977-.704-2.817a5.9 5.9 0 0 0-1.252-1.728C26.45.826 25.363.306 23.961.101c-.69-.1-.827-.13-4.348-.137h-4.82z"
                      transform="translate(.228 .227)"
                    ></path>
                    <path
                      fill="#fff"
                      d="M15.002 4.09c-2.956 0-3.327.013-4.487.066-1.158.053-1.949.239-2.64.511A5.4 5.4 0 0 0 5.948 5.93a5.4 5.4 0 0 0-1.262 1.927c-.271.691-.457 1.482-.51 2.64-.053 1.16-.066 1.531-.066 4.488s.013 3.327.066 4.486.239 1.949.51 2.64a5.4 5.4 0 0 0 1.263 1.927A5.4 5.4 0 0 0 7.875 25.3c.691.271 1.482.457 2.64.51 1.16.053 1.531.066 4.487.066s3.328-.013 4.487-.066 1.95-.239 2.642-.51a5.4 5.4 0 0 0 1.926-1.263 5.4 5.4 0 0 0 1.262-1.927c.269-.691.455-1.482.51-2.64.052-1.16.065-1.531.065-4.487s-.013-3.327-.065-4.486c-.055-1.158-.241-1.949-.51-2.64a5.4 5.4 0 0 0-1.262-1.927 5.4 5.4 0 0 0-1.927-1.263c-.692-.271-1.483-.457-2.642-.51s-1.53-.066-4.487-.066zm-.977 1.961h.977c2.91 0 3.258.01 4.404.063 1.062.048 1.638.226 2.019.374.507.197.869.432 1.25.813.382.382.617.744.814 1.251.149.381.326.957.374 2.019.053 1.146.063 1.494.063 4.403s-.01 3.257-.063 4.403c-.048 1.062-.226 1.638-.374 2.02a3.4 3.4 0 0 1-.814 1.25 3.35 3.35 0 0 1-1.25.813c-.381.15-.957.327-2.019.375-1.146.053-1.494.063-4.404.063s-3.258-.011-4.404-.063c-1.062-.049-1.638-.227-2.02-.375a3.4 3.4 0 0 1-1.25-.813 3.4 3.4 0 0 1-.814-1.251c-.149-.381-.326-.957-.374-2.019-.053-1.146-.063-1.494-.063-4.404s.011-3.257.063-4.403c.048-1.062.226-1.638.374-2.02.197-.507.432-.869.814-1.25a3.4 3.4 0 0 1 1.25-.814c.382-.15.958-.327 2.02-.375 1.003-.045 1.391-.059 3.417-.061zm6.769 1.769a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6m-5.785 1.516a5.562 5.562 0 1 0-.001 11.123 5.562 5.562 0 0 0 .001-11.123m0 1.952a3.607 3.607 0 0 1 3.609 3.611 3.607 3.607 0 0 1-3.609 3.609 3.607 3.607 0 0 1-3.611-3.609 3.61 3.61 0 0 1 3.611-3.611"
                    ></path>
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
                  <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="22" height="22" rx="5" fill="#1DA1F2" />
                    <path d="M19 7.5c-.5.25-1.05.42-1.62.5.58-.35 1.02-.9 1.23-1.56-.55.33-1.17.57-1.83.7C16.7 6.5 15.9 6 15 6c-1.65 0-3 1.35-3 3 0 .24.03.48.08.7C9.7 9.57 7.5 8.1 6.1 6c-.26.45-.41.97-.41 1.53 0 1.05.53 1.98 1.35 2.52-.48-.02-.93-.15-1.33-.36v.04c0 1.47 1.05 2.7 2.44 2.98-.25.07-.52.11-.79.11-.19 0-.38-.02-.56-.06.38 1.18 1.48 2.04 2.78 2.06-1.02.8-2.31 1.28-3.71 1.28-.24 0-.48-.01-.71-.04 1.33.85 2.9 1.35 4.59 1.35 5.5 0 8.51-4.56 8.51-8.51 0-.13 0-.25-.01-.38.58-.42 1.08-.95 1.48-1.56-.54.24-1.12.41-1.72.49z" fill="#fff" />
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
