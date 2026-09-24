"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Role = {
  title: string;
  compensation: string;
  blurb: string;
  ideal: string;
  contract: string;
  internship: string;
};

export default function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/20 bg-white/5 transition-colors duration-200 hover:border-white/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-base font-semibold text-white">{role.title}</h3>
            <span className="rounded-full border border-white/30 px-2 py-0.5 text-[11px] font-medium text-white/80">
              Fully remote
            </span>
          </div>
          <p className="mt-1 text-sm text-white/70">{role.compensation} (full-time)</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-xl leading-none text-white/70"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/15 p-5 pt-4">
              <div>
                <p className="text-xs font-medium text-white/60">What you'd work on</p>
                <p className="mt-1 text-sm leading-relaxed text-white/85">{role.blurb}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-white/60">Ideal candidate</p>
                <p className="mt-1 text-sm leading-relaxed text-white/85">{role.ideal}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="border border-white/15 p-3">
                  <p className="text-xs font-medium text-white/60">Full-time</p>
                  <p className="mt-1 text-sm text-white/90">{role.compensation}</p>
                </div>
                <div className="border border-white/15 p-3">
                  <p className="text-xs font-medium text-white/60">Contract</p>
                  <p className="mt-1 text-sm text-white/90">{role.contract}</p>
                </div>
                <div className="border border-white/15 p-3">
                  <p className="text-xs font-medium text-white/60">Internship</p>
                  <p className="mt-1 text-sm text-white/90">{role.internship}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
