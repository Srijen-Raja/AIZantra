import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';
import { BankIcon, PaymentIcon, MediaIcon } from '../components/icons.jsx';

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
          title="Bank AI Automation — Real-World Impact"
          icon={<BankIcon />}
          description={"Measured outcomes from applied AI, data intelligence, and platform modernization across banking operations."}
          bullets={[
            <><strong>Anomaly Detection & Fraud Prevention</strong> <br/> Real-time transaction monitoring to identify abnormal patterns, reducing fraud losses by 35–45% and false positives by 30%+.</>,
            <><strong>Personalized Products & Intelligent Cross-Sell / Up-Sell</strong> <br/> AI-driven customer insights enable targeted offers, improving cross-sell and up-sell conversions by 25–40%.</>,
            <><strong>AI-Driven Underwriting & Risk Assessment</strong> <br/> Predictive risk scoring and alternative data automate underwriting, improving accuracy by 30% and cutting manual reviews by 60%.</>,
            <><strong>Operational Automation at Scale</strong> <br/> Automated 65% of repetitive queries, reduced operating costs by 40%, and improved resolution time by 60%.</>
          ]}
        />

        <CaseStudyCard
          title="Payment Platform Modernization — Real-World Impact"
          icon={<PaymentIcon />}
          description={"Outcome-driven modernization combining cloud-native platforms, governed data foundations, and AI/GenAI integration to scale payments innovation with confidence."}
          bullets={[
            <><strong>Accelerated Time-to-Market</strong> <br/> Modular architectures and reusable services reduced time-to-market by 50%.</>,

            <><strong>Lower Cost & Engineering Efficiency</strong> <br/> Platform standardization and automation reduced development costs by 40%.</>,

            <><strong>Globally Scalable API Platforms</strong> <br/> Delivered secure, versioned, and high-throughput APIs supporting global payment volumes and partner ecosystems.</>,    
            <><strong>Data Products, Insights & AI/GenAI Intelligence</strong> <br/> Governed transaction data powers real-time insights, merchant analytics, revenue growth, anomaly detection, operational intelligence, GenAI copilots, and faster issue resolution across the payments stack.</>,
          ]}
        />

        <CaseStudyCard
          title="Media — Personalization & Content Optimization"
          icon={<MediaIcon />}
          description={"AI-driven audience personalization and content monetization."}
          bullets={[
            <><strong>Audience Personalization & Engagement</strong> <br/> AI-driven audience intelligence delivers personalized content recommendations, increasing engagement, watch time, and retention.</>,
            <><strong>Content & Monetization Optimization</strong> <br/> Real-time analytics optimize content placement, formats, and ad targeting—improving discovery, ad effectiveness, fill rates, and overall revenue yield.</>,
            <><strong>AI-Powered Data Intelligence</strong> <br/> Governed audience and content data enable real-time insights, churn prediction, operational intelligence, and GenAI-assisted content tagging and editorial decisions.</>
          ]}
        />
      </div>
    </SectionWrapper>
  </>
);

export default CaseStudies;
