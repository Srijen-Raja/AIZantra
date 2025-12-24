import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.header className="header" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="AIzantra Intelligence Home">
          <img 
            src="/logo.png" 
            alt="AIzantra Intelligence Logo" 
            className="logo-mark"
            loading="eager"
            width="40"
            height="40"
          />
          <span className="logo-text">AIzantra Intelligence</span>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav-cta">
            Book Demo
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
