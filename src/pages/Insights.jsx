import React from 'react';
import SectionWrapper from '../components/SectionWrapper.jsx';

const posts = [
  'How AI Is Transforming Enterprise Decision-Making',
  'Why Generative AI Fails Without Data Governance',
  'Top 10 AI Use Cases in Banking & Payments',
  'How Retailers Can Use AI for Margin Improvements',
  'Platform Modernization: The Foundation of Digital Transformation'
];

const Insights = () => (
  <SectionWrapper
    id="insights"
    eyebrow="Insights"
    title="Thought leadership on AI, platforms, and transformation"
  >
    <ul className="list-cards">
      {posts.map((title) => (
        <li key={title} className="card">
          <h3>{title}</h3>
          <p>
            Coming soon: a detailed point of view on this topic and how enterprises can
            translate ideas into execution.
          </p>
        </li>
      ))}
    </ul>
  </SectionWrapper>
);

export default Insights;
