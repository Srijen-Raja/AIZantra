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
      <div className="full-bleed">
        <p className="section-subtitle">
          <strong>
            From strategy to execution, Aizantra provides end-to-end capabilities to design,
            build, and scale intelligent products and platforms—optimized for SME needs and constraints.
          </strong>
        </p>
      </div>
    </SectionWrapper>

    {/* <SectionWrapper id="ai-strategy" title="AI Strategy & Consulting">
      <p className="section-subtitle">
        Advisory-led AI and GenAI strategy services focused on clarity, ROI, and responsible adoption—tailored to SME and mid-market constraints.
      </p>
    </SectionWrapper> */}

    <SectionWrapper id="services-detail">
      <div className="grid grid-3">
        <ServiceCard
          title="AI Strategy & Consulting"
          description="Advisory-led AI and GenAI strategy services focused on clarity, ROI, and responsible adoption—tailored to SME and mid-market constraints."
          points={[
            'ROI-first AI roadmaps and prioritized use cases',
            'AI readiness assessment and governance frameworks',
            'Responsible AI strategy covering risk, security, and compliance'
          ]}
        />
        <ServiceCard
          title="Applied AI & GenAI Solutions"
          description="Practical, execution-focused AI solutions embedded directly into business workflows—designed to deliver measurable outcomes, not pilots."
          points={[
            'GenAI copilots, conversational AI, and RAG-based intelligence systems',
            'Document automation, knowledge management, and workflow automation',
            'Predictive analytics, decision intelligence, and AI-driven optimization'
          ]}
        />
        <ServiceCard
          title="Software Product Development & Engineering"
          description="End-to-end product engineering services to design, build, and scale modern digital products and platforms."
          points={[
            'Custom web and mobile product development',
            'SaaS platforms and internal enterprise systems',
            'Cloud-native engineering with APIs, microservices, and event-driven architecture'
          ]}
        />
        <ServiceCard
          title="Data, Integration & Platform Modernization"
          description="Modern data and integration foundations that enable analytics, AI, and scalable digital operations."
          points={[
            'Data unification across ERP, CRM, legacy, and operational systems',
            'Scalable data pipelines, middleware, and integration layers',
            'Legacy platform modernization to support AI and automation'
          ]}
        />
      </div>
    </SectionWrapper>
  </>
);

export default Services;
