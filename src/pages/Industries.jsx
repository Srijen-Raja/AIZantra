import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';

const Industries = () => (
  <SectionWrapper
    id="industries"
    eyebrow="Industries"
    title="Deep domain expertise across regulated and high-volume industries"
  >
    <div className="grid grid-3">
      <div className="card">
        <h3>Banking & Payments</h3>
        <p>Fraud detection, customer automation, and compliance AI at scale.</p>
      </div>
      <div className="card">
        <h3>Retail & FMCG</h3>
        <p>Demand forecasting, inventory optimization, and retailer onboarding.</p>
      </div>
      <div className="card">
        <h3>Logistics & Supply Chain</h3>
        <p>Predictive logistics and warehouse automation for resilient networks.</p>
      </div>
      <div className="card">
        <h3>Manufacturing</h3>
        <p>Predictive maintenance and quality analytics for smart factories.</p>
      </div>
      <div className="card">
        <h3>Media</h3>
        <p>Personalization and content optimization to maximise engagement.</p>
      </div>
    </div>
  </SectionWrapper>
);

export default Industries;
