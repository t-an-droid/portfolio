import { useEffect, useRef } from 'react';

// Flowing ribbon / worm canvas animation - slowed way down
function FlowCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let W, H, raf;
    let t = 0;

    const RIBBONS = [
      { color: 'rgba(232,99,74,0.10)',  width: 2.5, speed: 0.00035, amp: 80, freq: 0.012, yBase: 0.28 },
      { color: 'rgba(245,166,35,0.08)', width: 2,   speed: 0.00022, amp: 55, freq: 0.018, yBase: 0.55 },
      { color: 'rgba(107,171,142,0.08)',width: 2,   speed: 0.00028, amp: 65, freq: 0.014, yBase: 0.75 },
      { color: 'rgba(139,123,168,0.07)',width: 1.5, speed: 0.00018, amp: 45, freq: 0.010, yBase: 0.42 },
    ];

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 1;

      RIBBONS.forEach(r => {
        const N = 220;
        ctx.beginPath();
        for (let i = 0; i <= N; i++) {
          const x = (i / N) * W;
          const phase = i * r.freq * W * 0.01 + t * r.speed * 80;
          const y = H * r.yBase + Math.sin(phase) * r.amp + Math.cos(phase * 0.5) * r.amp * 0.3;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = r.color;
        ctx.lineWidth = r.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none', opacity: 1,
      }}
    />
  );
}

export default function Background() {
  return (
    <>
      <div className="dot-grid" />
      <div className="bg-canvas">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>
      <FlowCanvas />
    </>
  );
}
