"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
  /** Fade/slide the section in once it's scrolled into view, instead of showing it on load. */
  reveal?: boolean;
};

export default function Section({
  children,
  className = "",
  id,
  bordered = true,
  reveal = false,
}: SectionProps) {
  const sectionClassName = `${bordered ? "border-t border-line" : ""} px-6 py-20 md:px-12 md:py-28 ${className}`;
  const content = <div className="mx-auto max-w-6xl">{children}</div>;

  if (reveal) {
    return (
      <motion.section
        id={id}
        className={sectionClassName}
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClassName}>
      {content}
    </section>
  );
}
