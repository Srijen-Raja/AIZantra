import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Aizantra_logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/#product', label: 'Product', hash: true },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact' }
  ];

  // Header remains white; removed scroll-based color change per request.

  // Ensure the nav toggle doesn't receive focus on initial load
  const toggleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (toggleRef.current && document.activeElement === toggleRef.current) {
      toggleRef.current.blur();
    }
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    setOpen(false);
    if (toggleRef.current) toggleRef.current.blur();
  }, [location.pathname]);

  // Force-close nav on initial mount to avoid flash-open on reload
  useEffect(() => {
    setOpen(false);
    if (toggleRef.current) toggleRef.current.blur();
    const id = setTimeout(() => setOpen(false), 50);
    return () => clearTimeout(id);
  }, []);

  // Track mobile breakpoint to apply inline hiding only on mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.header 
      className={`header`} 
      initial={{ opacity: 0, y: -8 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="AIzantra Intelligence Home">
          <img 
            src={logo} 
            alt="AIzantra Intelligence Logo" 
            className="logo-mark"
            loading="eager"
            width="48"
            height="48"
          />
          <span className="logo-text">
            <span className="logo-text-main">AIZANTRA</span>
            <span className="logo-text-sub">INTELLIGENCE</span>
          </span>
        </Link>

        <button
          type="button"
          ref={toggleRef}
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>

        <nav
          className={`nav ${open ? 'nav-open' : ''}`}
          style={isMobile && !open ? { display: 'none' } : undefined}
        >
          {navItems.map((item) => {
            if (item.hash) {
              return (
                <a
                  key={item.to}
                  href={item.to}
                  className={`nav-link`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            }

            return (
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
            );
          })}
          <Link to="/contact" className="btn btn-primary nav-cta">
            Book Demo
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
