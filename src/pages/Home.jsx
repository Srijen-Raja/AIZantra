import React from 'react';
import Hero from '../components/Hero.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';

const Home = () => (
  <>
    <Hero />

    <SectionWrapper
      id="why"
      eyebrow="Why Aizantra"
      title="Trusted partner for AI-led enterprise transformation"
    >
      <div className="grid grid-3">
        <div className="card">
          <h3>Deep leadership experience</h3>
          <p>
            25+ years of transformation leadership with proven success in banking, payments,
            media, B2B supply chain, and retail.
          </p>
        </div>
        <div className="card">
          <h3>Faster time-to-market</h3>
          <p>
            Accelerate delivery and reduce time-to-market by up to 50% with modern
            engineering practices and automation.
          </p>
        </div>
        <div className="card">
          <h3>Outcome-focused modernization</h3>
          <p>
            Deliver up to 40% cost reduction through data and platform modernization
            tailored to measurable business outcomes.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper
      id="services"
      eyebrow="Services"
      title="End-to-end AI, product, and modernization capabilities"
    >
      <div className="grid grid-3">
        <ServiceCard
          title="AI Strategy & Consulting"
          points={[
            'AI readiness & maturity assessment',
            'AI roadmap & ROI modeling',
            'AI governance & use case prioritization',
            'Responsible AI frameworks',
            'Prototyping & PoCs'
          ]}
        />
        <ServiceCard
          title="Software Product Development"
          points={[
            'End-to-end product engineering',
            'UX/UI design',
            'Full-stack & microservices development',
            'Cloud-native systems',
            'Enterprise platform engineering'
          ]}
        />
        <ServiceCard
          title="Generative AI Solutions"
          points={[
            'Conversational AI agents',
            'Document automation',
            'AI copilots for workforce',
            'Knowledge management automation',
            'Workflow intelligence'
          ]}
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      id="case-studies"
      eyebrow="Impact"
      title="Proven impact across industries"
    >
      <div className="grid grid-3">
        <CaseStudyCard
          title="Bank AI Automation"
          bullets={[
            'Automated 65% of repetitive queries',
            'Reduced operating cost by 40%',
            'Improved resolution time by 60%'
          ]}
        />
        <CaseStudyCard
          title="Retail AI Forecasting"
          bullets={[
            'Managed 2,200+ retailers',
            'Reduced stock-outs by 25%',
            'Enabled real-time margin insights'
          ]}
        />
        <CaseStudyCard
          title="Payment Platform Modernization"
          bullets={[
            'Improved time-to-market by 50%',
            'Reduced development cost by 40%',
            'Delivered modern globally scalable APIs'
          ]}
        />
      </div>
    </SectionWrapper>
  </>
);

export default Home;
