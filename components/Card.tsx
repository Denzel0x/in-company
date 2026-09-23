import type { ReactNode } from "react";
import Spotlight from "./Spotlight";

type CardProps = {
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ label, title, children, className = "" }: CardProps) {
  return (
    <Spotlight className={`border border-line bg-paper p-7 hover:border-brand-violet/30 ${className}`}>
      <p className="text-xs font-medium text-brand-violet">{label}</p>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{children}</p>
    </Spotlight>
  );
}
