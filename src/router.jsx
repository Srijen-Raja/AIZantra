import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Industries from './pages/Industries.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Insights from './pages/Insights.jsx';
import Contact from './pages/Contact.jsx';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/case-studies" element={<CaseStudies />} />
    <Route path="/insights" element={<Insights />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;
