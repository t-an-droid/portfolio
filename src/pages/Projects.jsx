import { useEffect, useState, useRef } from 'react';

const PROJECTS = [
  {
    title: 'Item Loaning & Lending System',
    date: 'Jan 2026 – Present',
    number: '01',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Socket.io', 'JWT'],
    bullets: [
      'Built full-stack MERN lending platform with JWT auth and security hardening (Helmet, XSS, Mongo-sanitize).',
      'Designed MongoDB schema with interest accrual, late penalty enforcement, and repayment history tracking.',
      'Implemented fraud detection service with behavioral risk scoring across loan velocity and credit thresholds.',
      'Engineered dynamic credit score engine weighing 5 factors: repayments, loan performance, and account age.',
      'Integrated real-time Socket.io messaging with gated access, unlocking chat only after request approval.',
    ],
    github: 'https://github.com/manognachalasani/lending-system',
    accent: '#E8634A',
    bg: 'rgba(232,99,74,0.06)',
  },
  {
    title: 'Social Media Analytics Dashboard',
    date: 'Dec 2025',
    number: '02',
    category: 'Frontend',
    tags: ['React.js', 'JavaScript', 'Recharts', 'Axios', 'CSS Grid', 'Flexbox'],
    bullets: [
      'Architected React component hierarchy with reusable UI elements and modular folder structure.',
      'Implemented CRUD operations for content calendar using React hooks for state management.',
      'Integrated Recharts for multi-platform data visualization across 6 social networks.',
      'Built notification system using browser APIs with real-time updates.',
      'Engineered responsive UI with CSS Grid, Flexbox, and dynamic theme switching.',
    ],
    github: 'https://github.com/t-an-droid/social-media-dashboard',
    accent: '#8B7BA8',
    bg: 'rgba(139,123,168,0.06)',
  },
  {
    title: 'Hybrid Predictive Maintenance',
    date: 'May 2025',
    number: '03',
    category: 'AI / ML',
    tags: ['Python', 'NumPy', 'Pandas', 'K-Means', 'Classification', 'Regression', 'GNUplot'],
    bullets: [
      'Applied K-Means clustering to identify engine degradation stages using NASA CMAPSS dataset.',
      'Implemented classification and regression models from scratch without ML libraries.',
      'Performed manual feature scaling and rigorous performance evaluation.',
      'Visualized engine degradation patterns using GNUplot for clear insights.',
    ],
    github: 'https://github.com/himasree-d/Predictive-Maintenance-System/tree/main',
    accent: '#6BAB8E',
    bg: 'rgba(107,171,142,0.06)',
  },
];

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.21 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function ProjectCard({ p, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`proj-card${visible ? ' proj-card--visible' : ''}${hovered ? ' proj-card--hovered' : ''}`}
      style={{ '--accent': p.accent, '--card-bg': p.bg, animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* left accent strip */}
      <div className="proj-card-strip" />

      {/* large watermark number */}
      <div className="proj-card-watermark" aria-hidden="true">{p.number}</div>

      <div className="proj-card-body">

        {/* ── TOP ROW: number badge + category + date ── */}
        <div className="proj-card-meta">
          <span className="proj-card-num-badge">{p.number}</span>
          <span className="proj-card-category" style={{ color: p.accent, background: p.bg, border: `1px solid ${p.accent}30` }}>
            {p.category}
          </span>
          <span className="proj-card-date">{p.date}</span>
        </div>

        {/* ── TITLE ── */}
        <h2 className="proj-card-title">{p.title}</h2>

        {/* ── TAGS ── */}
        <div className="proj-card-tags">
          {p.tags.map(t => (
            <span className="proj-card-tag" key={t} style={{ '--accent': p.accent }}>
              {t}
            </span>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <div className="proj-card-divider" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

        {/* ── BULLETS ── */}
        <ul className="proj-card-bullets">
          {p.bullets.map((b, i) => (
            <li key={i} className="proj-card-bullet" style={{ '--delay': `${i * 0.06}s` }}>
              <span className="proj-bullet-dot" style={{ background: p.accent }} />
              {b}
            </li>
          ))}
        </ul>

        {/* ── FOOTER: github CTA ── */}
        <div className="proj-card-footer">
          <a
            className="proj-gh-btn"
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--accent': p.accent }}
          >
            <GithubIcon />
            View on GitHub
            <span className="proj-gh-arrow"><ArrowIcon /></span>
          </a>
        </div>

      </div>
    </article>
  );
}

export default function Projects() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page-wrap page-enter">
      <div className="container projects-page">

        {/* ── PAGE HEADER ── */}
        <div className="projects-eyebrow reveal">
          <span className="projects-eyebrow-star">✦</span> What I've Built
        </div>

        <h1 className="sec-title reveal" style={{ marginBottom: '0.5rem' }}>
          My <em>Projects</em>
        </h1>

        <p className="proj-page-sub reveal">
          A collection of things I've shipped — full-stack platforms, dashboards, and ML systems.
        </p>

        {/* ── CARDS ── */}
        <div className="proj-cards-list">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
}
