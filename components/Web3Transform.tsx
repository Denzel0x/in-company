"use client";

import { motion } from "framer-motion";

const web2Satellites = [
  { x: 40, y: 55 },
  { x: 40, y: 205 },
  { x: 175, y: 40 },
  { x: 175, y: 220 },
];

const web3Nodes = [
  { x: 430, y: 85 },
  { x: 505, y: 60 },
  { x: 555, y: 130 },
  { x: 500, y: 205 },
  { x: 420, y: 195 },
  { x: 465, y: 135 },
];

const web3Edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [5, 1],
  [5, 3],
];

const coins = [
  { x: 300, y: 40, delay: 0 },
  { x: 340, y: 235, delay: 0.6 },
  { x: 250, y: 200, delay: 1.2 },
];

const flowDots = [0, 1, 2, 3];

export default function Web3Transform() {
  return (
    <svg
      viewBox="0 0 600 260"
      className="h-auto w-full max-w-2xl"
      role="img"
      aria-label="Animated diagram of a centralised Web2 system transforming into a decentralised Web3 network, with coin icons representing on-chain value"
    >
      <defs>
        <linearGradient id="w3grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A2FE0" />
          <stop offset="45%" stopColor="#5B3FE5" />
          <stop offset="100%" stopColor="#2F6FE0" />
        </linearGradient>
      </defs>

      {/* Web2 — centralised hub and spoke */}
      <g>
        {web2Satellites.map((n, i) => (
          <line
            key={i}
            x1="110"
            y1="130"
            x2={n.x}
            y2={n.y}
            stroke="url(#w3grad)"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
        {web2Satellites.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="7" className="fill-line" />
        ))}
        <circle cx="110" cy="130" r="30" className="fill-paper" stroke="url(#w3grad)" strokeWidth="2" />
        <text
          x="110"
          y="134"
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontSize="12"
          fontWeight={600}
          className="fill-ink"
        >
          Web2
        </text>
        <text
          x="110"
          y="182"
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontSize="10"
          className="fill-ink"
          opacity="0.5"
        >
          Centralised
        </text>
      </g>

      {/* Web3 — decentralised mesh */}
      <g>
        {web3Edges.map(([a, b], i) => (
          <line
            key={i}
            x1={web3Nodes[a].x}
            y1={web3Nodes[a].y}
            x2={web3Nodes[b].x}
            y2={web3Nodes[b].y}
            stroke="url(#w3grad)"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
        {web3Nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="8"
            fill="url(#w3grad)"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}
        <text
          x="475"
          y="240"
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontSize="12"
          fontWeight={600}
          className="fill-ink"
        >
          Web3
        </text>
        <text
          x="475"
          y="20"
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontSize="10"
          className="fill-ink"
          opacity="0.5"
        >
          Decentralised
        </text>
      </g>

      {/* Flow of value from Web2 toward Web3, looping */}
      {flowDots.map((i) => (
        <motion.circle
          key={i}
          r="4"
          fill="#6FB8F5"
          animate={{
            cx: [148, 230, 320, 400],
            cy: [130, 95, 110, 120],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 3, delay: i * 0.75, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Coin icons, gently floating */}
      {coins.map((c, i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
          style={{ transformOrigin: `${c.x}px ${c.y}px` }}
        >
          <circle cx={c.x} cy={c.y} r="12" fill="url(#w3grad)" stroke="#FAFAFC" strokeWidth="1.5" />
          <circle cx={c.x} cy={c.y} r="8" fill="none" stroke="#FAFAFC" strokeWidth="1" opacity="0.6" />
          <text x={c.x} y={c.y + 4} textAnchor="middle" fontSize="11" fontWeight={700} fill="#FFFFFF">
            $
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
