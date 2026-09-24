"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink outline-none";

const roles = [
  "Smart Contract Engineer",
  "Web3 Frontend Engineer",
  "Go/Rust Infrastructure Engineer",
  "Web3 Backend Engineer",
  "Marketing Manager",
  "Other",
];

const tracks = ["Full-time", "Contract", "Internship"];

type Status = "idle" | "submitting" | "success" | "error";

export default function CareerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const role = String(data.get("role") || "");
    const track = String(data.get("track") || "");
    const message = String(data.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message || message.length < 20) nextErrors.message = "Tell us a little more (20 characters minimum).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, track, message, portfolio: data.get("portfolio") }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-line bg-paper p-6 text-sm text-ink">
        Thanks — your application is in. We reply to every one, usually within a week.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink/70">
          Full name
        </label>
        <input id="name" name="name" type="text" className={inputClass} aria-invalid={!!errors.name} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink/70">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClass} aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="role" className="mb-1.5 block text-xs font-medium text-ink/70">
          Role you're interested in
        </label>
        <select id="role" name="role" className={inputClass} defaultValue={roles[0]}>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="track" className="mb-1.5 block text-xs font-medium text-ink/70">
          Track
        </label>
        <select id="track" name="track" className={inputClass} defaultValue={tracks[0]}>
          {tracks.map((track) => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="portfolio" className="mb-1.5 block text-xs font-medium text-ink/70">
          Portfolio or LinkedIn URL (optional)
        </label>
        <input id="portfolio" name="portfolio" type="url" className={inputClass} placeholder="https://" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink/70">
          Tell us about yourself
        </label>
        <textarea id="message" name="message" rows={5} className={inputClass} aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <p className="text-xs leading-relaxed text-ink/60">
        Please also send your résumé separately to{" "}
        <a href="mailto:career@invorious.com" className="underline underline-offset-2">
          career@invorious.com
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send application"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
