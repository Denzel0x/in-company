"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/brand/logo.jpg"
            alt="Invorious"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            invorious
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-sm transition-colors ${
                  active ? "text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-gradient"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </Link>
            );
          })}
          <Button href="/start-a-project" className="text-xs">
            Start a project
          </Button>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm ${active ? "font-medium text-ink" : "text-ink/80"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/start-a-project" className="w-fit text-xs">
                Start a project
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
