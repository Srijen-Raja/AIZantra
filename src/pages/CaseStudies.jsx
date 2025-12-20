import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';

const CaseStudies = () => (
  <>
    <SectionWrapper
      id="case-studies"
      eyebrow="Case Studies"
      title="Real-world impact from AI, data, and modernization programs"
    >
      <p className="section-subtitle">
        Each engagement is structured around clear business context, measurable outcomes,
        and robust engineering foundations.
      </p>
    </SectionWrapper>

    <SectionWrapper id="case-studies-list">
      <div className="grid grid-3">
        <CaseStudyCard
          title="Bank AI Automation"
          bullets={[
            'Automated 65% of repetitive queries across customer service',
            'Reduced operational cost by 40%',
            'Improved average resolution time by 60%'
          ]}
        />
        <CaseStudyCard
          title="Retail AI Forecasting"
          bullets={[
            'Orchestrated performance for 2,200+ retailers',
            'Reduced stock-outs by 25%',
            'Enabled real-time business and margin insights'
          ]}
        />
        <CaseStudyCard
          title="Payment Platform Modernization"
          bullets={[
            'Improved time-to-market by 50%',
            'Reduced development costs by 40%',
            'Delivered modern, globally scalable APIs'
          ]}
        />
      </div>
    </SectionWrapper>
  </>
);

export default CaseStudies;
