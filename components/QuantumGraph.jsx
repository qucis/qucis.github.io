"use client";

import { useEffect, useRef } from "react";

export default function OrbitalSpheres() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // ── Mouse tracking ──
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // ── Sphere config ──
    const SPHERE_RADIUS = 9;
    const PANIC_DIST = 80;    // Break orbit if mouse within this px
    const RECOVER_DIST = 220; // Start returning if mouse beyond this px
    const BASE_SPEED = 0.008;
    const PANIC_MAX_SPEED = 5.25;

    const TEAL  = { r: 0, g: 209, b: 209 };
    const CYAN  = { r: 56, g: 189, b: 248 };
    const NEON_CYAN = { r: 34, g: 211, b: 238 };

    function randColor() {
      const palette = [TEAL, CYAN, NEON_CYAN];
      return palette[Math.floor(Math.random() * palette.length)];
    }

    function makeOrbit(cx, cy, orbitR, angle, tiltX, tiltY, color) {
      // Calculate initial position on orbit
      const x = cx + Math.cos(angle) * orbitR * tiltX;
      const y = cy + Math.sin(angle) * orbitR * tiltY;
      
      return {
        cx, cy,           // centre of orbit
        orbitR,           // orbit radius
        angle,            // current angle (radians)
        tiltX,           // x-axis ellipse compression (0..1)
        tiltY,           // y-axis ellipse compression (0..1)
        baseSpeed: BASE_SPEED + Math.random() * 0.006,
        color,
        trail: [],        // last N positions for tail
        trailLen: 18,
        // -- Physics state --
        x, y,             // current actual position
        vx: 0, vy: 0,     // velocity when panicked
        isPanicked: false
      };
    }

    let orbits = [];

    function placeOrbits() {
      orbits = [];
      const cols = 4, rows = 3;
      const cellW = W / cols, cellH = H / rows;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = cellW * c + cellW * (0.2 + Math.random() * 0.6);
          const cy = cellH * r + cellH * (0.2 + Math.random() * 0.6);
          const orbitR = 28 + Math.random() * 36;
          const angle  = Math.random() * Math.PI * 2;
          const tiltX  = 0.35 + Math.random() * 0.55;
          const tiltY  = 0.35 + Math.random() * 0.55;
          orbits.push(makeOrbit(cx, cy, orbitR, angle, tiltX, tiltY, randColor()));
        }
      }
    }
    placeOrbits();

    // ── Draw helpers ──
    function drawOrbitRing(o) {
      if (o.isPanicked) return; // Don't draw the ring if the ball has escaped
      ctx.save();
      ctx.translate(o.cx, o.cy);
      ctx.scale(o.tiltX, o.tiltY);
      ctx.beginPath();
      ctx.ellipse(0, 0, o.orbitR, o.orbitR, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${o.color.r},${o.color.g},${o.color.b},0.08)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    function drawTrail(o) {
      for (let i = 0; i < o.trail.length; i++) {
        const alpha = (i / o.trail.length) * (o.isPanicked ? 0.4 : 0.25);
        const r = SPHERE_RADIUS * (i / o.trail.length) * (o.isPanicked ? 0.9 : 0.7);
        ctx.beginPath();
        ctx.arc(o.trail[i].x, o.trail[i].y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${o.color.r},${o.color.g},${o.color.b},${alpha})`;
        ctx.fill();
      }
    }

    function drawSphere(o, boosted) {
      const pos = { x: o.x, y: o.y };
      const fact = boosted || o.isPanicked ? 2.4 : 1.8;
      
      // Glow halo
      const glow = ctx.createRadialGradient(
        pos.x - 2, pos.y - 3, 0,
        pos.x, pos.y, SPHERE_RADIUS * fact
      );
      const { r, g, b } = o.color;
      glow.addColorStop(0,   `rgba(${r},${g},${b},${boosted || o.isPanicked ? 0.55 : 0.25})`);
      glow.addColorStop(0.5, `rgba(${r},${g},${b},0.08)`);
      glow.addColorStop(1,   `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, SPHERE_RADIUS * fact, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Sphere body
      const grad = ctx.createRadialGradient(
        pos.x - SPHERE_RADIUS * 0.3,
        pos.y - SPHERE_RADIUS * 0.35,
        0,
        pos.x, pos.y, SPHERE_RADIUS
      );
      grad.addColorStop(0,   `rgba(255,255,255,${boosted || o.isPanicked ? 0.95 : 0.8})`);
      grad.addColorStop(0.3, `rgba(${r},${g},${b},${boosted || o.isPanicked ? 1 : 0.85})`);
      grad.addColorStop(1,   `rgba(${Math.max(0,r-60)},${Math.max(0,g-60)},${Math.max(0,b-60)},0.7)`);
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, SPHERE_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // ── Animation loop ──
    let animId;
    function tick() {
      ctx.clearRect(0, 0, W, H);
      const mx = mouseRef.current.x, my = mouseRef.current.y;

      for (const o of orbits) {
        // Target position on original orbit
        const targetX = o.cx + Math.cos(o.angle) * o.orbitR * o.tiltX;
        const targetY = o.cy + Math.sin(o.angle) * o.orbitR * o.tiltY;

        // Mouse proximity check
        const dx = o.x - mx, dy = o.y - my;
        const distToMouse = Math.sqrt(dx*dx + dy*dy);

        // 1. PANIC TRIGGER: If mouse is close, break orbit
        if (distToMouse < PANIC_DIST && !o.isPanicked) {
          o.isPanicked = true;
          // Assign random high velocity vector
          const panicAngle = Math.random() * Math.PI * 2;
          o.vx = Math.cos(panicAngle) * PANIC_MAX_SPEED;
          o.vy = Math.sin(panicAngle) * PANIC_MAX_SPEED;
        }

        // 2. PHYSICS UPDATE
        if (o.isPanicked) {
          // Free movement
          o.x += o.vx;
          o.y += o.vy;

          // Bounce off edges
          if (o.x < SPHERE_RADIUS || o.x > W - SPHERE_RADIUS) o.vx *= -1;
          if (o.y < SPHERE_RADIUS || o.y > H - SPHERE_RADIUS) o.vy *= -1;

          // RECOVERY: If mouse is far, fly back to orbit position
          if (distToMouse > RECOVER_DIST) {
            const rx = targetX - o.x;
            const ry = targetY - o.y;
            const distToOrbit = Math.sqrt(rx*rx + ry*ry);
            
            // Apply steering force towards orbit
            o.vx += (rx / distToOrbit) * 0.45;
            o.vy += (ry / distToOrbit) * 0.45;

            // Cap speed during return
            const speed = Math.sqrt(o.vx*o.vx + o.vy*o.vy);
            if (speed > PANIC_MAX_SPEED) {
              o.vx = (o.vx / speed) * PANIC_MAX_SPEED;
              o.vy = (o.vy / speed) * PANIC_MAX_SPEED;
            }

            // Snap back if very close
            if (distToOrbit < 12) {
              o.isPanicked = false;
              o.vx = 0; o.vy = 0;
            }
          }
        } else {
          // Normal orbiting: sync x,y to orbit target
          o.x = targetX;
          o.y = targetY;
        }

        // Update trail
        o.trail.push({ x: o.x, y: o.y });
        if (o.trail.length > o.trailLen) o.trail.shift();

        // Advance angle on orbit (happens even when panicked so wait for catch up)
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
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
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
