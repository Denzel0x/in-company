"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 340, y: 60, label: "Consulting" },
  { x: 420, y: 170, label: "Web2" },
  { x: 300, y: 260, label: "Web3" },
];

const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.9, delay: 0.3 + i * 0.15, ease: "easeInOut" }, opacity: { duration: 0.2, delay: 0.3 + i * 0.15 } },
  }),
};

const nodeShow = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, delay: 0.9 + i * 0.15, ease: "easeOut" },
  }),
};

export default function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Diagram showing Invorious at the centre, connected to Technology Consulting, Web2 and Web3 services"
    >
      <defs>
        <linearGradient id="brandLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A2FE0" />
          <stop offset="45%" stopColor="#5B3FE5" />
          <stop offset="100%" stopColor="#2F6FE0" />
        </linearGradient>
      </defs>

      <circle cx="150" cy="170" r="34" fill="url(#brandLine)" />
      <text x="150" y="174" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fontWeight={600} fill="#FFFFFF">
        INVORIOUS
      </text>

      {nodes.map((n, i) => (
        <motion.line
          key={n.label}
          x1={150}
          y1={170}
          x2={n.x}
          y2={n.y}
          stroke="url(#brandLine)"
          strokeWidth={1.5}
          custom={i}
          variants={lineDraw}
          initial="hidden"
          animate="show"
        />
      ))}

      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          custom={i}
          variants={nodeShow}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px`, cursor: "default" }}
        >
          <circle cx={n.x} cy={n.y} r="26" className="fill-paper" stroke="url(#brandLine)" strokeWidth="1.5" />
          <circle cx={n.x} cy={n.y} r="3" fill="#6FB8F5" />
          <text
            x={n.x}
            y={n.y + 42}
            textAnchor="middle"
            fontFamily="var(--font-body)"
            fontSize="11"
            fontWeight={500}
            className="fill-ink"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
