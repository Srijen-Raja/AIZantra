import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper.jsx';

const TermsOfService = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const header = document.querySelector('.header');
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          const extraOffset = 12;
          const top = window.pageYOffset + el.getBoundingClientRect().top - headerHeight - extraOffset;
          window.scrollTo({ top: Math.max(0, Math.round(top)), behavior: 'smooth' });
        }, 60);
      }
    }
  }, [location]);

  return (
    <SectionWrapper
  id="terms"
  title={<span style={{ color: '#f97316' }}>Terms of Service</span>}
  // eyebrow={<span style={{ color: '#1f2937' }}>Privacy and Terms</span>}
  subtitle="Effective Date: 26.12.2025"
>
      {/* <h3 className="big-para">Terms of Service</h3> */}
      {/* <p><strong>Effective Date:</strong> 26-12-2025</p> */}
      <p className="big-para">
        These Terms govern access to www.aizantraintelligence.com, operated by AIzantra Intelligence
        Private Limited. By using this website, you agree to these Terms.
      </p>

      <h4 className="big-para">Use of Website</h4>
      <p className="big-para">
        The website provides general information about AIzantra’s consulting services and software
        products. Content does not constitute professional advice.
      </p>

      <h4 className="big-para">Intellectual Property</h4>
      <p className="big-para">
        All website content, trademarks, and materials are owned by AIzantra unless stated otherwise.
        Unauthorized use is prohibited.
      </p>

      <h4 className="big-para">Engagement Terms</h4>
      <p className="big-para">
        Consulting services and software products are governed by separate written agreements. Website
        content does not create any binding obligation.
      </p>

      <h4 className="big-para">Limitation of Liability</h4>
      <p className="big-para">
        To the extent permitted by law, AIzantra shall not be liable for indirect or consequential damages arising from website use.
      </p>

      <h4 className="big-para">Governing Law</h4>
      <p className="big-para">
        These Terms are governed by the laws of India. Courts in Greater Noida shall have exclusive jurisdiction.
      </p>
    </SectionWrapper>
  );
};

export default TermsOfService;
