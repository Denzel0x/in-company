"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const MotionLink = motion(Link);

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity duration-150";
  const styles =
    variant === "primary"
      ? "bg-brand-gradient text-white hover:opacity-90"
      : "border border-ink/15 text-ink hover:border-ink/40";

  return (
    <MotionLink
      href={href}
      className={`${base} ${styles} ${className}`}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionLink>
  );
}
