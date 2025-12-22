import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Industries from './pages/Industries.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Insights from './pages/Insights.jsx';
import Contact from './pages/Contact.jsx';

const AppRouter = () => {
  const location = useLocation();
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    // trigger enter animation on route change
    setEntering(true);
    const t = setTimeout(() => setEntering(false), 520);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className={`route-container ${entering ? 'route-enter' : ''}`} key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
