
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

    {/* <SectionWrapper
      id="ai-strategy"
      title="AI Strategy & Consulting"
    >
      <p className="section-subtitle">
        Advisory-led AI and GenAI strategy services focused on clarity, ROI, and responsible adoption—tailored to SME and mid-market constraints.
      </p>

      <div className="grid grid-3">
        <div>
          <h4>What we deliver</h4>
          <ul>
            <li>ROI-first AI roadmaps and prioritized use cases</li>
            <li>AI readiness assessment and governance frameworks</li>
            <li>Responsible AI strategy covering risk, security, and compliance</li>
          </ul>
        </div>
      </div>
    </SectionWrapper> */}

    <SectionWrapper id="services-detail">
      <div className="grid grid-3">
        <ServiceCard
          title="AI Strategy & Consulting"
          description={"Advisory-led AI and GenAI strategy services focused on clarity, ROI, and responsible adoption—tailored to SME and mid-market constraints."}
          points={[
            'ROI-first AI roadmaps and prioritized use cases',
            'AI readiness assessment and governance frameworks',
            'Responsible AI strategy covering risk, security, and compliance'
          ]}
        />
        <ServiceCard
          title="Software Product Engineering"
          description={"End-to-end product engineering services to design, build, and scale modern digital products and platforms."}
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
          description={"Practical, execution-focused AI solutions embedded directly into business workflows—designed to deliver measurable outcomes, not pilots."}
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
          description={"Modern data and integration foundations that enable analytics, AI, and scalable digital operations."}
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
