import { useEffect, useRef } from 'react';

const COLORS = ['#E8634A','#F5A623','#6BAB8E','#8B7BA8','#1A1A2E'];

export default function CustomCursor() {
  const dot = useRef(null);
  const trail = useRef(null);
  let rx = 0, ry = 0;
  let mx = 0, my = 0;

  useEffect(() => {
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + 'px';
        dot.current.style.top  = my + 'px';
      }
      // spawn sparkle occasionally
      if (Math.random() < 0.22) spawnSpark(mx, my);
    };

    const onHover = (e) => {
      const el = e.target.closest('a,button,[role="button"],.skill-pill,.ptag,.soc-icon,.btn,.nav-link,.detail-chip,.research-card,.pcard,.glass-card');
      if (el) {
        dot.current?.classList.add('on-link');
        trail.current?.classList.add('on-link');
      } else {
        dot.current?.classList.remove('on-link');
        trail.current?.classList.remove('on-link');
      }
    };

    const spawnSpark = (x, y) => {
      const el = document.createElement('div');
      el.className = 'spark';
      const angle = Math.random() * Math.PI * 2;
      const dist = 18 + Math.random() * 22;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.cssText = `left:${x}px;top:${y}px;background:${color};--dx:${Math.cos(angle)*dist}px;--dy:${Math.sin(angle)*dist}px;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 650);
    };

    let raf;
    const animTrail = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (trail.current) {
        trail.current.style.left = rx + 'px';
        trail.current.style.top  = ry + 'px';
      }
      raf = requestAnimationFrame(animTrail);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onHover);
    raf = requestAnimationFrame(animTrail);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onHover);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="c-dot"  ref={dot}   />
      <div className="c-trail" ref={trail} />
    </>
  );
}
