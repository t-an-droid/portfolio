import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to anchor — navigate home first if needed, then scroll
  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-mesh">
        <div className="footer-blob footer-blob-1" />
        <div className="footer-blob footer-blob-2" />
      </div>

      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            <div className="footer-brand-dot" />
            Tanvi.
          </div>
          <p className="footer-sub">
            CS student at Mahindra University building full-stack
            systems and ML-powered experiences. Always learning, always shipping.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '1.4rem' }}>
            <a className="soc-icon" href="https://github.com/t-an-droid" target="_blank" rel="noopener noreferrer" title="GitHub"
               style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.21 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>
            </a>
            <a className="soc-icon" href="https://linkedin.com/in/tanvi-borkar" target="_blank" rel="noopener noreferrer" title="LinkedIn"
               style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a className="soc-icon" href="mailto:tanviborkar06@gmail.com" title="Email"
               style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="footer-links-title">Navigate</div>
          <div className="footer-links">
            <button className="footer-link" onClick={() => scrollTo('about')} style={{background:'none',border:'none',padding:0,textAlign:'left'}}>About Me</button>
            <button className="footer-link" onClick={() => scrollTo('research')} style={{background:'none',border:'none',padding:0,textAlign:'left'}}>Research Interests</button>
            <button className="footer-link" onClick={() => scrollTo('skills')} style={{background:'none',border:'none',padding:0,textAlign:'left'}}>Skills</button>
            <a className="footer-link" onClick={() => navigate('/projects')}>Projects</a>
            <a className="footer-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a className="footer-link" href="mailto:tanviborkar06@gmail.com">Say Hello</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
