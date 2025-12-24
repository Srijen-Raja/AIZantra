import React from 'react';
import Hero from '../components/Hero.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CaseStudyCard from '../components/CaseStudyCard.jsx';
import tradixImg from '../assets/Tradix_TX only.png';

const Home = () => (
  <>
    <Hero />

    <SectionWrapper
      id="why"
      eyebrow="Why Aizantra"
      title="Why Aizantra for SMEs"
    >
      <p className="section-subtitle">
        We combine consulting-led clarity with engineering execution—so AI and technology
        deliver outcomes, not experiments.
      </p>
      <div className="grid grid-3">
        <div className="card">
          <h3>25+ years of hands-on product and platform leadership</h3>
          <p>
            Proven success across Banking, Payments, Retail, Media, and B2B supply chains.
            Experience pragmatically applied for SMEs.
          </p>
        </div>
        <div className="card">
          <h3>Faster time-to-market (up to 50%)</h3>
          <p>
            Modern engineering practices and automation tailored to SME constraints.
            Get to market faster without large-enterprise consulting complexity.
          </p>
        </div>
        <div className="card">
          <h3>Cost reduction through modernization (up to 40%)</h3>
          <p>
            Data and platform modernization delivering measurable ROI.
            Engineering-led AI, Product, and Data expertise—beyond advisory.
          </p>
        </div>
      </div>
      <p className="section-subtext" style={{marginTop: 24}}>
        <strong>Credential Highlight:</strong> We have designed, built, and operated a production-grade B2B supply-chain 
        platform (TRADIX<sup>®</sup>), giving us firsthand insight into real SME operating realities.
      </p>
    </SectionWrapper>

    <SectionWrapper
      id="product"
      eyebrow="Platform"
      title="TRADIX — B2B Supply-Chain Platform for SMEs"
    >
      <div className="grid grid-2">
        <div className="card">
          <img src={tradixImg} alt="TRADIX" style={{maxWidth: 420, width: '100%', marginBottom: 16}} />
          <h3>Overview</h3>
          <p>
            TRADIX is a ready-to-deploy B2B supply-chain platform designed for SMEs. It unifies distributor, retailer, 
            and supplier operations with built-in KYC, procurement, inventory management, and integrated payments.
          </p>
        </div>

        <div className="card">
          <h3>Key Capabilities</h3>
          <ul>
            <li>Distributor, retailer, and supplier onboarding with KYC</li>
            <li>Unified procurement, sales, inventory, and order management</li>
            <li>Warehouse and fulfillment operations</li>
            <li>Retailer billing, invoicing, and integrated payments</li>
            <li>Analytics with AI-ready data foundations</li>
          </ul>

          <h3 style={{marginTop: 12}}>Learn More</h3>
          <p>TRADIX demonstrates our capability to build and operate production-grade SME systems. <a href="/tradix">Explore TRADIX</a>.</p>
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
      eyebrow="Differentiation"
      title="What Sets Us Apart"
    >
      <div className="grid grid-2">
        <div className="card">
          <h3>Engineering-led. Product-driven. Outcome-focused.</h3>
          <ul>
            <li>Consulting grounded in real product and platform experience</li>
            <li>A standard B2B supply-chain offering (TRADIX<sup>®</sup>) complemented by custom engineering</li>
            <li>Responsible AI with governance built-in</li>
            <li>Focus on helping SMEs move faster, spend smarter, and scale with confidence</li>
          </ul>
        </div>
        <div className="card">
          <h3>End-to-End Execution</h3>
          <p>
            We don't just advise—we build and operate. Our product-builder mindset means we deliver 
            scalable, resilient systems designed for growing SME businesses. From strategy to production, 
            we ensure AI and technology create measurable business value.
          </p>
          <p style={{marginTop: 12}}>
            <strong>Data readiness, system integration, governance, people, and change alignment</strong> are 
            the foundation of successful AI. We bridge your business ambition with real-world engineering execution.
          </p>
        </div>
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
