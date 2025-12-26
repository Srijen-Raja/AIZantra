import React from 'react';
import Hero from '../components/Hero.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';
import tradixImg from '../assets/Tradix_TX only.png';
import { BankIcon, PaymentIcon, MediaIcon } from '../components/icons.jsx';

const Home = () => (
  <>
    <Hero />

    <SectionWrapper
      id="why"
      eyebrow="Why Aizantra"
      title="Why Aizantra for SMEs"
    >
      <p className="section-subtitle">
        Enterprise Experience, Practically Applied — right-sized AI and product engineering for SMEs.
      </p>
      <div className="grid grid-3">
        <div className="card">
          <h3>Enterprise Experience, Pragmatically Applied</h3>
          <p>
            Decades of experience building and operating mission-critical platforms in complex enterprises—translated into practical, right-sized solutions for SMEs without enterprise overhead.
          </p>
        </div>
        <div className="card">
          <h3>Built for Real SME Operating Realities</h3>
          <p>
            Designed for fragmented environments across ERP, Tally, CRM, spreadsheets, and vendor systems, bringing integration, structure, and intelligence without disruptive rip-and-replace programs.
          </p>
        </div>
        <div className="card">
          <h3>Consulting-Led Strategy, Battle-Tested Engineering</h3>
          <p>
            Clear strategy and product thinking paired with proven engineering execution—moving initiatives from roadmap to production with measurable business outcomes.
          </p>
        </div>
      </div>
      <div className="grid grid-3" style={{marginTop:24}}>
        <div className="card">
          <h3>Product Builders, Not Just Advisors</h3>
          <p>
            Hands-on experience designing, building, and operating production platforms, including TRADIX®, giving us firsthand insight into scale, cost, reliability, and day-to-day SME execution challenges.
          </p>
        </div>
        <div className="card">
          <h3>Applied AI with Purpose</h3>
          <p>
            AI embedded into decisions and workflows—driving automation, risk detection, personalization, and operational efficiency, always tied to ROI rather than pilots.
          </p>
        </div>
        <div className="card">
          <h3>Measurable Cost & Efficiency Gains</h3>
          <p>
            Outcome-driven delivery that accelerates time-to-market, reduces operating and development costs, and provides clear end-to-end accountability.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper
      id="product"
      eyebrow="Platform"
      title="TRADIX® — B2B Supply-Chain Platform for SMEs"
    >
      <div className="grid grid-2">
        <div className="card">
          <img src={tradixImg} alt="TRADIX logo" style={{maxWidth: 360, maxHeight: 160, width: '100%', objectFit: 'contain', marginBottom: 8, display: 'block'}} />
          <h3 style={{marginTop: 4, marginBottom: 8}}>Overview — TRADIX®</h3>
          <p>
            <b>TRADIX®</b> is a ready-to-deploy B2B supply-chain platform for SMEs. It connects business buyers, sellers, and fulfillment partners, enabling seamless onboarding, procurement, inventory visibility, and payment workflows.
          </p>
        </div>

        <div className="card">
          <h3>Key Capabilities</h3>
          <ul>
            <li>Participant onboarding and compliance with built-in KYC</li>
            <li>Unified transaction, inventory, and order workflows</li>
            <li>Storage, logistics, and fulfillment operations</li>
            <li>Digital billing, invoicing, and integrated payments</li>
            <li>Analytics built on AI-ready data foundations</li>
          </ul>

          <h3 style={{marginTop: 12}}>Learn More</h3>
          <p>TRADIX® demonstrates our capability to build and operate production-grade SME systems. <a href="/tradix">Explore TRADIX®</a>.</p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper
      id="services"
      eyebrow="Services"
      title="Services Built for SME Success"
    >
      <div className="grid grid-3">
        <ServiceCard
          title="AI Strategy & Consulting"
          points={[
            'ROI-first roadmaps aligned to SME constraints and priorities',
            'AI readiness & opportunity assessment',
            'Custom AI governance frameworks',
            'Responsible AI implementation'
          ]}
        />
        <ServiceCard
          title="Software Product Engineering"
          points={[
            'Custom platforms integrating ERP, Tally, CRM, and legacy tools',
            'Modern systems for SME operations',
            'Full-stack & microservices development',
            'Production-ready engineering execution'
          ]}
        />
        <ServiceCard
          title="Generative AI Solutions"
          points={[
            'Applied AI embedded into workflows—not standalone pilots',
            'Document automation and intelligence',
            'Workflow optimization and automation',
            'Knowledge management intelligence'
          ]}
        />
      </div>
    </SectionWrapper>

    <SectionWrapper
      id="differentiation"
      eyebrow="The AIzantra Difference"
      title="Enterprise-Grade, Without Enterprise Overhead"
    >
      <div className="grid grid-1">
        <div className="card">
          <h3>Engineering-Led. Product-Driven. Outcome-Focused.</h3>
          <ul>
            <li>Consulting grounded in hands-on experience designing, building, and operating data- and AI-enabled products and platforms</li>
            <li>A standard B2B supply-chain platform (TRADIX®) complemented by custom software, data platforms, and AI/GenAI engineering</li>
            <li>Responsible AI with governance, security, and data accountability embedded by design</li>
            <li>Helping SMEs move faster, spend smarter, and scale with confidence</li>
          </ul>
          <p style={{marginTop: 12}}>
            <strong>Data readiness, system integration, governance, people, and change alignment</strong> are the foundation of successful AI. We bridge your business ambition with real-world engineering execution.
          </p>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper
      id="case-studies"
      eyebrow="Impact"
      title="Real-World Impact"
    >
      <div className="grid grid-3">
        <CaseStudyCard
          title="Bank AI Automation — Real-World Impact"
          icon={<BankIcon />}
          description={"Measured outcomes from applied AI, data intelligence, and platform modernization across banking operations."}
          bullets={[
            <><strong>Anomaly Detection & Fraud Prevention</strong> <br/> t transaction monitoring to identify abnormal patterns, reducing fraud losses by 35–45% and false positives by 30%+.</>,
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

export default Home;
