import { useEffect, useState } from 'react';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    color: '#E8634A',
    skills: ['C', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    color: '#F5A623',
    skills: ['React', 'HTML', 'CSS', 'Webpack'],
  },
  {
    label: 'Backend & Databases',
    color: '#6BAB8E',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    label: 'AI / Data',
    color: '#8B7BA8',
    skills: ['pandas', 'NumPy', 'Matplotlib', 'K-Means', 'Scikit-learn'],
  },
  {
    label: 'Tools',
    color: '#4A90D9',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
];

// Scatter each skill pill into a loose cloud layout
const SCATTER_SEEDS = [
  // [left%, top%, rotate_deg, delay_ms]
  // Languages row
  [2,  4,  -3,  0],   [14, 0,   2,   60],  [25, 6,  -1,  120], [36, 1,   4,  180], [47, 7,  -2, 240],
  // Frontend
  [2, 22,   2,  80],  [13,18,  -4,  140],  [23,24,   1,  200], [34,19,   3,  260],
  // Backend
  [1, 38,  -2, 100],  [12,34,   3,  160],  [24,40,  -1,  220], [37,35,   2,  280], [50,41,  -3, 340],
  // AI/Data
  [2, 55,   1,  50],  [14,51,  -3,  110],  [26,57,   2,  170], [39,52,  -1,  230], [52,58,   4,  290],
  // Tools
  [1, 71,  -2,  30],  [12,67,   3,   90],  [23,73,  -1,  150],
];

const CONTACT = [
  {
    label: 'Name',
    value: 'Tanvi Ganesh Borkar',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    accent: '#E8634A',
  },
  {
    label: 'Phone',
    value: '+91 6304878949',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.53 6.53l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    accent: '#F5A623',
  },
  {
    label: 'Personal Email',
    value: 'tanviborkar06@gmail.com',
    href: 'mailto:tanviborkar06@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    accent: '#6BAB8E',
  },
  {
    label: 'College Email',
    value: 'se23ucse172@mahindrauniversity.edu.in',
    href: 'mailto:se23ucse172@mahindrauniversity.edu.in',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    accent: '#8B7BA8',
  },
  {
    label: 'GitHub',
    value: 'github.com/t-an-droid',
    href: 'https://github.com/t-an-droid',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.21 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z"/>
      </svg>
    ),
    accent: '#1A1A2E',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tanvi-borkar',
    href: 'https://www.linkedin.com/in/tanvi-borkar-924540333/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    ),
    accent: '#0A66C2',
  },
];

const FullstackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rc-icon-svg">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <polyline points="7,8 10,11 7,14"/>
    <line x1="13" y1="14" x2="17" y2="14"/>
  </svg>
);

const AiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="rc-icon-svg">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    <circle cx="12" cy="12" r="7" strokeDasharray="3 2" opacity="0.4"/>
  </svg>
);

// Flat list of all skills with their group info
const ALL_SKILLS = SKILL_GROUPS.flatMap(g =>
  g.skills.map(s => ({ skill: s, label: g.label, color: g.color }))
);

export default function Home() {
  const [activeGroup, setActiveGroup] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page-wrap page-enter">

      {/* ── HERO ── */}
      <section className="hero" id="about">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <div className="eyebrow-dot" />
                CS Student · Full Stack · AI/ML
              </div>

              <h1 className="hero-name">
                Hi, I'm{' '}
                <span className="underline-wave"><span className="accent">Tanvi</span></span>
                <br />Borkar
              </h1>

              <p className="hero-bio">
                A passionate Computer Science student at Mahindra University,
                building full-stack systems and ML-powered solutions.
                I turn complex problems into clean, delightful digital experiences.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  View Resume
                </a>
                <a className="btn btn-ink" href="mailto:tanviborkar06@gmail.com">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Get in Touch
                </a>
              </div>

              <div className="hero-social">
                <span className="hero-social-label">Find me on</span>
                <a className="soc-icon" href="https://github.com/t-an-droid" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 2.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.21 21.42 23.5 17.1 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>
                </a>
                <a className="soc-icon" href="https://www.linkedin.com/in/tanvi-borkar-924540333/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                </a>
              </div>
            </div>

            {/* ── profile box with dummy image ── */}
            <div className="hero-img-col">
              <div className="profile-frame">
                <div className="profile-frame-deco" />
                <div className="profile-frame-deco2" />
                <div className="profile-box profile-box--img">
                  {/* DUMMY IMAGE — replace src with your photo */}
                  <img
                    src="photo_3_1.jpg"
                    className="profile-photo"
                  />
                  {/* overlay name strip */}
                  <div className="profile-photo-strip">
                    <div className="name">Tanvi Borkar</div>
                    <div className="role">CS @ Mahindra University</div>
                    <div className="profile-status">
                      <div className="status-dot" />
                      Open to internships
                    </div>
                  </div>
                </div>
                <div className="profile-badge badge-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  GPA 9.04 / 10
                </div>
                <div className="profile-badge badge-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  3 Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="section" id="research">
        <div className="container">
          <p className="sec-label reveal">What drives me</p>
          <h2 className="sec-title reveal">Research <em>Interests</em></h2>
          <div className="research-grid reveal">
            <div className="research-card">
              <div className="rc-icon-bg"><FullstackIcon /></div>
              <div className="rc-title">Full Stack Systems</div>
              <div className="rc-desc">
                I love the challenge of owning an entire system — from database schema to pixel-perfect UI.
                Building full-stack products teaches me how every layer communicates, and I find real joy in
                making those connections seamless, performant, and maintainable.
              </div>
            </div>
            <div className="research-card">
              <div className="rc-icon-bg"><AiIcon /></div>
              <div className="rc-title">AI / Machine Learning</div>
              <div className="rc-desc">
                Machine learning feels like giving software intuition. I'm drawn to how models discover
                patterns humans miss — from predictive maintenance to generative systems.
                My goal is to bridge smart ML with usable, real-world web products.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="section" id="contact" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="sec-label reveal">Say hello</p>
          <h2 className="sec-title reveal">Get in <em>Touch</em></h2>
          <div className="contact-bento reveal">
            {CONTACT.map((c, i) => (
              <a
                key={c.label}
                className={`contact-bento-card contact-bento-card--${i}`}
                href={c.href || undefined}
                target={c.href?.startsWith('http') ? '_blank' : undefined}
                rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ '--accent': c.accent }}
              >
                <div className="cbc-icon" style={{ background: c.accent + '18', border: `1px solid ${c.accent}30`, color: c.accent }}>
                  {c.icon}
                </div>
                <div className="cbc-label">{c.label}</div>
                <div className="cbc-value">{c.value}</div>
                {c.href && (
                  <div className="cbc-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills" style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="container">
          <p className="sec-label reveal">Tech Stack</p>
          <h2 className="sec-title reveal">Skills</h2>

          {/* group filter pills */}
          <div className="skill-filter reveal">
            <button
              className={`skill-filter-btn${activeGroup === null ? ' active' : ''}`}
              onClick={() => setActiveGroup(null)}
            >All</button>
            {SKILL_GROUPS.map(g => (
              <button
                key={g.label}
                className={`skill-filter-btn${activeGroup === g.label ? ' active' : ''}`}
                style={activeGroup === g.label ? { background: g.color, borderColor: g.color } : {}}
                onClick={() => setActiveGroup(activeGroup === g.label ? null : g.label)}
              >{g.label}</button>
            ))}
          </div>

          {/* scattered cloud */}
          <div className="skill-cloud reveal">
            {ALL_SKILLS.map(({ skill, label, color }, idx) => {
              const dimmed = activeGroup !== null && activeGroup !== label;
              const highlighted = activeGroup === label;
              return (
                <span
                  key={skill}
                  className={`skill-float-pill${dimmed ? ' dimmed' : ''}${highlighted ? ' highlighted' : ''}`}
                  style={{
                    '--pill-color': color,
                    animationDelay: `${(idx * 0.07).toFixed(2)}s`,
                  }}
                  title={label}
                >
                  {skill}
                </span>
              );
            })}
          </div>

          {/* legend */}
          <div className="skill-legend reveal">
            {SKILL_GROUPS.map(g => (
              <span key={g.label} className="skill-legend-item">
                <span className="skill-legend-dot" style={{ background: g.color }} />
                {g.label}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
