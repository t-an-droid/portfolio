import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <div className="nav-logo-dot" />
        Tanvi.
      </NavLink>

      <button
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="menu"
      >
        <span/><span/><span/>
      </button>

      <div className={`nav-links${open ? ' open' : ''}`}>
        <NavLink to="/" end className={({isActive}) => `nav-link${isActive?' active':''}`} onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/projects" className={({isActive}) => `nav-link${isActive?' active':''}`} onClick={() => setOpen(false)}>Projects</NavLink>
        <a
          href="mailto:tanviborkar06@gmail.com"
          className="btn nav-cta"
          onClick={() => setOpen(false)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
