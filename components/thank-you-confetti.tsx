"use client";

import { useEffect, useRef } from "react";

type Piece = {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  color: string;
};

const colors = ["#fe951f", "#161616", "#fff4e6", "#e58612", "#ffffff", "#ffd59a"];

export function ThankYouConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pieces: Piece[] = [];
    let frame = 0;
    let raf = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function burst(originY: number) {
      for (let index = 0; index < 90; index += 1) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
        const speed = 8 + Math.random() * 10;
        pieces.push({
          x: canvas.width * (0.2 + Math.random() * 0.6),
          y: canvas.height * originY,
          w: 7 + Math.random() * 7,
          h: 10 + Math.random() * 8,
          vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
          vy: Math.sin(angle) * speed,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.28,
          color: colors[index % colors.length],
        });
      }
    }

    function tick() {
      frame += 1;
      context.clearRect(0, 0, canvas.width, canvas.height);
      pieces = pieces.filter((piece) => piece.y < canvas.height + 30);
      for (const piece of pieces) {
        piece.vy += 0.22;
        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rot += piece.vr;
        context.save();
        context.translate(piece.x, piece.y);
        context.rotate(piece.rot);
        context.fillStyle = piece.color;
        context.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
        context.restore();
      }
      if (pieces.length > 0 && frame < 420) {
        raf = requestAnimationFrame(tick);
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    resize();
    burst(0.28);
    window.setTimeout(() => burst(0.2), 280);
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-30" aria-hidden />;
}
