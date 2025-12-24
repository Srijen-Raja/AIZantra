import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '/src/assets/Aizantra_logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're on the home page and if we've scrolled past the hero section
      const heroSection = document.querySelector('.hero');
      if (heroSection && location.pathname === '/') {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;
        setIsScrolled(scrollPosition > heroHeight - 100); // Trigger slightly before hero ends
      } else {
        // For other pages, consider scrolled if past initial viewport
        setIsScrolled(window.scrollY > 100);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`} 
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
