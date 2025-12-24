import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import TradixLogo from '../assets/Tradix_TX only.png';

const About = () => (
  <>
    <SectionWrapper
      id="about"
      eyebrow="About Us"
      title="Consulting-First, Engineering-Led AI for SMEs"
    >
      <div className="stack">
        <p>
          Aizantra Intelligence Pvt. Ltd. is a consulting-first, engineering-led AI and software product
          development company enabling SMEs and mid-market enterprises to operate smarter,
          faster, and more efficiently—without large-enterprise consulting complexity.
        </p>
        <p>
          Our approach is shaped by building and operating real platforms, not just advising on them.
          This product-builder mindset informs how we design scalable, resilient systems for growing
          businesses. We combine consulting-led clarity with engineering execution—so AI and technology
          deliver outcomes, not experiments.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper id="mission-vision" title="Mission and Philosophy">
      <div className="grid grid-2">
        <div className="card">
          <h3>Mission</h3>
          <p>
            To engineer intelligent, scalable digital systems that accelerate SME and mid-market growth
            and unlock real, measurable ROI—through strong data foundations, responsible AI, and
            production-ready engineering.
          </p>
        </div>
        <div className="card">
          <h3>Leadership Philosophy</h3>
          <p>
            AI succeeds only when data readiness, system integration, governance, people, and change
            are aligned. AIzantra bridges SME business ambition with real-world product engineering
            and execution, grounded in experience operating mission-critical platforms including
            TRADIX<sup>®</sup>, in live SME environments.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper id="values" title="Our Approach">
      <div className="tag-row">
        <span className="tag">Engineering-led</span>
        <span className="tag">Product-driven</span>
        <span className="tag">Outcome-focused</span>
        <span className="tag">Responsible AI</span>
        <span className="tag">SME Expertise</span>
      </div>
      <p className="section-subtext">
        We differentiate through consulting grounded in real product and platform experience,
        a standard B2B supply-chain offering (TRADIX<sup>®</sup>) complemented by custom engineering,
        responsible AI with governance built-in, and a focus on helping SMEs move faster, spend smarter,
        and scale with confidence.
      </p>
    </SectionWrapper>

    <SectionWrapper id="tradix" title="TRADIX">
      <p><span>TRADIX<sup>®</sup> is a trademark of AIzantra Intelligence Pvt. Ltd.</span> </p>
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
