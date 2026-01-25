import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/Aizantra_logo.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHash = (to) => {
    const parts = to.split('#');
    const path = parts[0] || '/';
    const hash = parts[1] || '';

    const tryScroll = () => {
      if (!hash) return;
      let attempts = 0;
      const maxAttempts = 30;
      const interval = 50;
      const tick = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        attempts += 1;
        if (attempts < maxAttempts) {
          setTimeout(tick, interval);
        }
      };
      tick();
    };

    if (hash) {
      if (location.pathname === path) {
        // Already on target path — update URL hash and attempt to scroll
        try {
          window.history.pushState({}, '', path + `#${hash}`);
        } catch (e) {
          // ignore
        }
        tryScroll();
      } else {
        // Navigate to path+hash, then poll for the element to appear
        navigate(path + (hash ? `#${hash}` : ''));
        // start polling after a small delay to allow route/component mount
        setTimeout(tryScroll, 60);
      }
    } else {
      // no hash — just navigate
      navigate(path);
    }
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/#product', label: 'Product', hash: true },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/case-studies', label: 'Client Success' },
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
    const check = () => setIsMobile(window.innerWidth <= 1440);
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
        <Link to="/" className="logo" aria-label="Aizantra Intelligence Home">
          <img 
            src={logo} 
            alt="Aizantra Intelligence Logo" 
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
                  onClick={(e) => {
                    e.preventDefault();
                    handleHash(item.to);
                    setOpen(false);
                  }}
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
