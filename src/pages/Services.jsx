
import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const Services = () => (
  <>
    <SectionWrapper
      id="services-overview"
      eyebrow="Services"
      title="Comprehensive services across the AI and digital lifecycle"
    >
      <p className="section-subtitle">
        From strategy to execution, Aizantra provides end-to-end capabilities to design,
        build, and scale intelligent products and platforms.
      </p>
    </SectionWrapper>

    <SectionWrapper id="services-detail">
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
            'Full-stack & API/microservices development',
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
        <ServiceCard
          title="Data & Platform Modernization"
          points={[
            'Data engineering & pipelines',
            'Cloud migration (AWS / Azure / GCP)',
            'Master data management',
            'Real-time data platforms',
            'Data governance'
          ]}
        />
        <ServiceCard
          title="Digital Transformation & Automation"
          points={[
            'Business process redesign',
            'RPA & workflow automation',
            'ERP / CRM integrations',
            'Supply chain digitalization'
          ]}
        />
      </div>
    </SectionWrapper>
  </>
);

export default Services;
