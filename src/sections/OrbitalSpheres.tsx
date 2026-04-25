import { useEffect, useRef } from 'react';

export default function OrbitalSpheres() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // Sphere config
    const SPHERE_RADIUS = 7;
    const PANIC_DIST = 90;
    const RECOVER_DIST = 250;
    const BASE_SPEED = 0.007;
    const PANIC_MAX_SPEED = 5.5;

    const TEAL = { r: 0, g: 209, b: 209 };
    const CYAN = { r: 56, g: 189, b: 248 };
    const NEON_CYAN = { r: 34, g: 211, b: 238 };
    const ORANGE = { r: 249, g: 115, b: 22 };

    function randColor() {
      const palette = [TEAL, CYAN, NEON_CYAN, ORANGE];
      return palette[Math.floor(Math.random() * palette.length)];
    }

    interface Orbit {
      cx: number;
      cy: number;
      orbitR: number;
      angle: number;
      tiltX: number;
      tiltY: number;
      baseSpeed: number;
      color: { r: number; g: number; b: number };
      trail: { x: number; y: number }[];
      trailLen: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      isPanicked: boolean;
    }

    function makeOrbit(cx: number, cy: number, orbitR: number, angle: number, tiltX: number, tiltY: number, color: any): Orbit {
      const x = cx + Math.cos(angle) * orbitR * tiltX;
      const y = cy + Math.sin(angle) * orbitR * tiltY;
      
      return {
        cx, cy,
        orbitR,
        angle,
        tiltX,
        tiltY,
        baseSpeed: BASE_SPEED + Math.random() * 0.008,
        color,
        trail: [],
        trailLen: 15,
        x, y,
        vx: 0, vy: 0,
        isPanicked: false
      };
    }

    let orbits: Orbit[] = [];

    function placeOrbits() {
      orbits = [];
      const cols = Math.max(3, Math.floor(W / 300));
      const rows = Math.max(2, Math.floor(H / 300));
      const cellW = W / cols;
      const cellH = H / rows;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = cellW * c + cellW * (0.2 + Math.random() * 0.6);
          const cy = cellH * r + cellH * (0.2 + Math.random() * 0.6);
          const orbitR = 30 + Math.random() * 45;
          const angle = Math.random() * Math.PI * 2;
          const tiltX = 0.3 + Math.random() * 0.6;
          const tiltY = 0.3 + Math.random() * 0.6;
          orbits.push(makeOrbit(cx, cy, orbitR, angle, tiltX, tiltY, randColor()));
        }
      }
    }
    placeOrbits();

    function drawOrbitRing(o: Orbit) {
      if (o.isPanicked || !ctx) return;
      ctx.save();
      ctx.translate(o.cx, o.cy);
      ctx.scale(o.tiltX, o.tiltY);
      ctx.beginPath();
      ctx.ellipse(0, 0, o.orbitR, o.orbitR, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${o.color.r},${o.color.g},${o.color.b},0.12)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    function drawTrail(o: Orbit) {
      if (!ctx) return;
      for (let i = 0; i < o.trail.length; i++) {
        const alpha = (i / o.trail.length) * (o.isPanicked ? 0.3 : 0.15);
        const r = SPHERE_RADIUS * (i / o.trail.length) * (o.isPanicked ? 0.8 : 0.6);
        ctx.beginPath();
        ctx.arc(o.trail[i].x, o.trail[i].y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${o.color.r},${o.color.g},${o.color.b},${alpha})`;
        ctx.fill();
      }
    }

    function drawSphere(o: Orbit, boosted: boolean) {
      if (!ctx) return;
      const pos = { x: o.x, y: o.y };
      const fact = boosted || o.isPanicked ? 2.5 : 1.5;
      
      const glow = ctx.createRadialGradient(
        pos.x - 2, pos.y - 3, 0,
        pos.x, pos.y, SPHERE_RADIUS * fact
      );
      const { r, g, b } = o.color;
      glow.addColorStop(0, `rgba(${r},${g},${b},${boosted || o.isPanicked ? 0.6 : 0.3})`);
      glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, SPHERE_RADIUS * fact, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      const grad = ctx.createRadialGradient(
        pos.x - SPHERE_RADIUS * 0.3,
        pos.y - SPHERE_RADIUS * 0.35,
        0,
        pos.x, pos.y, SPHERE_RADIUS
      );
      grad.addColorStop(0, `rgba(255,255,255,${boosted || o.isPanicked ? 1 : 0.8})`);
      grad.addColorStop(0.3, `rgba(${r},${g},${b},1)`);
      grad.addColorStop(1, `rgba(${Math.max(0,r-50)},${Math.max(0,g-50)},${Math.max(0,b-50)},0.9)`);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, SPHERE_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    let animId: number;
    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      for (const o of orbits) {
        const targetX = o.cx + Math.cos(o.angle) * o.orbitR * o.tiltX;
        const targetY = o.cy + Math.sin(o.angle) * o.orbitR * o.tiltY;

        const dx = o.x - mx, dy = o.y - my;
        const distToMouse = Math.sqrt(dx*dx + dy*dy);

        if (distToMouse < PANIC_DIST && !o.isPanicked) {
          o.isPanicked = true;
          const panicAngle = Math.random() * Math.PI * 2;
          o.vx = Math.cos(panicAngle) * PANIC_MAX_SPEED;
          o.vy = Math.sin(panicAngle) * PANIC_MAX_SPEED;
        }

        if (o.isPanicked) {
          o.x += o.vx;
          o.y += o.vy;
          if (o.x < SPHERE_RADIUS || o.x > W - SPHERE_RADIUS) o.vx *= -1;
          if (o.y < SPHERE_RADIUS || o.y > H - SPHERE_RADIUS) o.vy *= -1;

          if (distToMouse > RECOVER_DIST) {
            const rx = targetX - o.x;
            const ry = targetY - o.y;
            const distToOrbit = Math.sqrt(rx*rx + ry*ry);
            o.vx += (rx / distToOrbit) * 0.4;
            o.vy += (ry / distToOrbit) * 0.4;
            const speed = Math.sqrt(o.vx*o.vx + o.vy*o.vy);
            if (speed > PANIC_MAX_SPEED) {
              o.vx = (o.vx / speed) * PANIC_MAX_SPEED;
              o.vy = (o.vy / speed) * PANIC_MAX_SPEED;
            }
            if (distToOrbit < 10) {
              o.isPanicked = false;
              o.vx = 0; o.vy = 0;
            }
          }
        } else {
          o.x = targetX;
          o.y = targetY;
        }

        o.trail.push({ x: o.x, y: o.y });
        if (o.trail.length > o.trailLen) o.trail.shift();
        o.angle += o.baseSpeed;

        drawOrbitRing(o);
        drawTrail(o);
        drawSphere(o, distToMouse < PANIC_DIST);
      }
      animId = requestAnimationFrame(tick);
    }
    tick();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      placeOrbits();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
