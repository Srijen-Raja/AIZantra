
import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const Services = () => (
  <>
    <SectionWrapper
      id="services-overview"
      eyebrow="Services"
      title="Services for SME Success"
    >
      <p className="section-subtitle">
        From strategy to execution, Aizantra provides end-to-end capabilities to design,
        build, and scale intelligent products and platforms—optimized for SME needs and constraints.
      </p>
    </SectionWrapper>

    <SectionWrapper id="services-detail">
      <div className="grid grid-3">
        <ServiceCard
          title="AI Strategy & Consulting"
          points={[
            'ROI-first roadmaps aligned to SME constraints and priorities',
            'AI readiness & opportunity assessment',
            'Custom AI governance frameworks',
            'Responsible AI implementation',
            'Prototyping & PoCs'
          ]}
        />
        <ServiceCard
          title="Software Product Engineering"
          points={[
            'Custom platforms integrating ERP, Tally, CRM, and legacy tools',
            'End-to-end product engineering',
            'Full-stack & modern architecture',
            'Cloud-native systems',
            'Enterprise platform engineering'
          ]}
        />
        <ServiceCard
          title="Generative AI Solutions"
          points={[
            'Applied AI embedded into workflows—not standalone pilots',
            'Document automation and intelligence',
            'AI workflow optimization',
            'Knowledge management automation',
            'Workflow and process intelligence'
          ]}
        />
        <ServiceCard
          title="Data & Platform Modernization"
          points={[
            'Intelligence-ready data foundations',
            'Governance by design',
            'Cloud migration & optimization',
            'Real-time analytics platforms',
            'Master data management'
          ]}
        />
        <ServiceCard
          title="Digital Transformation"
          points={[
            'End-to-end execution focused on measurable business outcomes',
            'Business process redesign',
            'RPA & workflow automation',
            'Legacy system modernization',
            'Supply chain digitalization'
          ]}
        />
      </div>
    </SectionWrapper>
  </>
);

export default Services;
