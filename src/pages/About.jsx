import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import TradixLogo from '../assets/Tradix_TX only.png';

const About = () => (
  <>
    <SectionWrapper
      id="about"
      eyebrow="About Us"
      title="Engineering intelligent digital systems for enterprises"
    >
      <div className="stack">
        <p>
          AIzantra Intelligence Pvt. Ltd. is a next-generation AI innovation, software
          product development, and digital transformation company enabling enterprises to
          operate smarter, faster, and more efficiently.
        </p>
        <p>
          The company bridges business ambition with technological execution by aligning
          data, processes, people, and culture to create sustainable competitive advantage.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper id="mission-vision" title="Mission and vision">
      <div className="grid grid-2">
        <div className="card">
          <h3>Mission</h3>
          <p>
            To engineer intelligent digital systems that accelerate enterprise success and
            unlock real, measurable business value.
          </p>
        </div>
        <div className="card">
          <h3>Vision</h3>
          <p>
            To become a global leader in AI-enabled enterprise transformation through
            innovation, integrity, and impactful delivery.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper id="values" title="Core values">
      <div className="tag-row">
        <span className="tag">Innovation First</span>
        <span className="tag">Integrity Always</span>
        <span className="tag">Impact Driven</span>
        <span className="tag">Customer Obsessed</span>
        <span className="tag">Engineering Excellence</span>
      </div>
      <p className="section-subtext">
        Leadership believes AI only succeeds when data, process, people, and culture are
        aligned to a clear business outcome.
      </p>
    </SectionWrapper>

    <SectionWrapper id="tradix" title="TRADIX">
      <p><span>TRADIX<sup>®</sup> is a trademark of AIZantra Intelligence Pvt. Ltd.</span> </p>
      <div className="tradix-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={TradixLogo}
          alt="TRADIX logo"
          style={{ maxWidth: '280px', height: 'auto' }}
        />
      </div>
    </SectionWrapper>
  </>
);

export default About;
