"use client";

import type { ReactNode, MouseEvent } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
  glow?: string;
};

export default function Spotlight({
  children,
  className = "",
  glow = "rgba(122,47,224,0.14)",
}: SpotlightProps) {
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={`group relative overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-0.5 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), ${glow}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
