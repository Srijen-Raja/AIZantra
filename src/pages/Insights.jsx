import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';

const posts = [
  {
    title: 'How AI Is Transforming Enterprise Decision-Making',
    excerpt:
      'How enterprises are moving from intuition-led decisions to AI-assisted decision intelligence, and what it takes to embed AI responsibly into everyday decision-making at scale.'
  },
  {
    title: 'Why Generative AI Initiatives Fail at Scale Without Data Governance',
    excerpt:
      'Why pilots show early promise but fail to scale: fragmented data, unclear ownership, and weak governance — and how an operational data foundation enables safe, enterprise-grade adoption.'
  },
  {
    title: 'Platform Modernization: The Foundation of Digital Transformation',
    excerpt:
      'Why legacy platforms constrain digital and AI outcomes, and how modern, API- and data-centric architectures enable speed, scalability, and sustained transformation.'
  },
  {
    title: 'AI Adoption in Indian SMEs: High Intent, Limited Impact',
    excerpt:
      'Exploring why Indian SMEs show strong interest in AI but struggle to translate intent into outcomes due to fragmented operations, inconsistent data, and execution challenges.',
    link: 'https://www.linkedin.com/posts/aizantra-intelligence-private-limited_sme-msme-aizantra-activity-7417562086655881216-vPOk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAJ5Tn4BBYQHLHOok8oMdxi4GUU2TOw-rHM'
  },
  {
    title: 'Practical AI Use Cases for Indian SMEs with 90-Day ROI',
    excerpt:
      'Low-risk, high-impact AI applications that can deliver measurable improvements in margins, cashflow, and efficiency within 60–90 days for Indian SMEs.'
  },
  {
    title: 'Top AI Use Cases in Banking & Payments',
    excerpt:
      'High-impact AI use cases across banking and payments — fraud, risk, personalization, and operations — focused on measurable business outcomes.'
  },
  {
    title: 'Responsible AI in Regulated Industries',
    excerpt:
      'How organizations in regulated industries can adopt AI at scale while balancing innovation with trust, compliance, transparency, and auditability.'
  },
  {
    title: 'From Strategy to Scale: An AI Implementation Roadmap',
    excerpt:
      'A pragmatic roadmap for moving from AI strategy and pilots to production-ready systems through disciplined prioritization, operating models, and governance.'
  }
];

const Insights = () => (
  <SectionWrapper
    id="insights"
    eyebrow="Insights"
    title="Thought leadership on AI, platforms, and transformation"
  >
    <ul className="list-cards">
      {posts.map(({ title, excerpt, link }) => (
        <li key={title} className="card">
          <h3>{title}</h3>
          <p>{excerpt}</p>
          {link && (
            <p>
              <a href={link} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                Read more
              </a>
            </p>
          )}
        </li>
      ))}
    </ul>
  </SectionWrapper>
);

export default Insights;
