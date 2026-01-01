import React from "react";
import SectionWrapper from "../components/SectionWrapper.jsx";
import TradixLogo from "../assets/Tradix_TX only.png";

const About = () => (
  <>
    <SectionWrapper
      id="about"
      eyebrow="About Us"
      title="Consulting-First, Engineering-Led AI & Software Products for SMEs"
    >
      <div className="stack">
        <p>
          <b>Aizantra Intelligence Pvt. Ltd.</b> is a consulting-first,
          engineering-led AI and software product development company enabling
          SMEs and mid-market enterprises to operate smarter, faster, and more
          efficiently—without the complexity, cost, or rigidity of
          large-enterprise consulting models.
        </p>
        <br />
        <p>
          <b>
            Our approach is shaped by decades of experience building, scaling,
            and operating enterprise-grade software products and platforms in
            complex, highly regulated global environments.
          </b>{" "}
          Our founders have led end-to-end product journeys—from product vision,
          architecture, and roadmap definition to engineering, modernization,
          and AI enablement—delivering platforms used at scale with strong
          foundations in security, data governance, and resilience.
        </p>{" "}
        <br />
        <p>
          This product-builder mindset informs how we design and deliver
          scalable, cloud-native software products and AI-enabled systems for
          growing businesses.
          <b>
            {" "}
            We combine consulting-led clarity with deep product engineering and
            system integration, ensuring AI, data, and software products deliver
            real, measurable business outcomes—not experiments or prototypes.
          </b>
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper id="mission-vision" title="Mission & Philosophy">
      <div className="grid grid-2">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            We help SMEs and growing enterprises scale with confidence by
            designing, building, and operating intelligent, AI-enabled digital
            products and platforms that turn data into action and deliver
            measurable business outcomes.
          </p>
        </div>
        <div className="card">
          <h3>Our Leadership Philosophy</h3>
          <p>
            AI creates real impact only when data readiness, system integration,
            governance, people, and change move together. At Aizantra
            Intelligence, we bridge SME ambition with hands-on product
            engineering and disciplined execution, drawing on decades of
            experience building and operating mission-critical
            platforms—including TRADIX®, proven in live SME environments.
            <br /><br />
            <b>
              Our philosophy is simple: no AI without strong foundations, and no
              strategy without execution.
            </b>
          </p>
          
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default About;
