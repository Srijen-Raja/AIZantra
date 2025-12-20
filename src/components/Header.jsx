import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
        <img src="/public/logo.png" alt="A" className="logo-mark" />
          <span className="logo-text">Aizantra Intelligence</span>
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
    </header>
  );
};

export default Header;
