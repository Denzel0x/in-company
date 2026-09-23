"use client";

import { useState } from "react";
import Button from "./Button";
import Spotlight from "./Spotlight";

export type Role = {
  title: string;
  compensation: string;
  blurb: string;
  ideal: string;
  internship: string;
};

export default function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);

  return (
    <Spotlight glow="rgba(255,255,255,0.12)" className="border border-white/20 p-6 hover:border-white/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{role.title}</h3>
          <p className="mt-1 text-sm text-white/70">{role.compensation} · Full-time & Internship</p>
        </div>
        <span
          className={`shrink-0 text-2xl font-light text-white/70 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div className="mt-5 space-y-3 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/80">
          <p>{role.blurb}</p>
          <p>
            <span className="font-medium text-white">Ideal candidate — </span>
            {role.ideal}
          </p>
          <p>
            <span className="font-medium text-white">Internship — </span>
            {role.internship}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#apply" className="!bg-white !text-ink hover:!bg-brand-light">
              Apply — Full-time
            </Button>
            <Button
              href="#apply"
              variant="secondary"
              className="!border-white/40 !text-white hover:!border-white"
            >
              Apply — Internship
            </Button>
          </div>
        </div>
      )}
    </Spotlight>
  );
}
