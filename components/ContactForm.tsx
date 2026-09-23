"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink outline-none";

const projectTypes = ["Technology Consulting", "Web2 — Apps & Web", "Web3 — Blockchain", "Not sure yet"];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const projectType = String(data.get("projectType") || "");
    const message = String(data.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message || message.length < 10) nextErrors.message = "Add a few details about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, projectType, message }),
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
        Thanks — we've got your message and will reply soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-xs font-medium text-ink/70">
          Name
        </label>
        <input id="c-name" name="name" type="text" className={inputClass} aria-invalid={!!errors.name} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-xs font-medium text-ink/70">
          Email
        </label>
        <input id="c-email" name="email" type="email" className={inputClass} aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="c-company" className="mb-1.5 block text-xs font-medium text-ink/70">
          Company (optional)
        </label>
        <input id="c-company" name="company" type="text" className={inputClass} />
      </div>

      <div>
        <label htmlFor="c-project-type" className="mb-1.5 block text-xs font-medium text-ink/70">
          Project type
        </label>
        <select id="c-project-type" name="projectType" className={inputClass} defaultValue={projectTypes[0]}>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-xs font-medium text-ink/70">
          What are you building?
        </label>
        <textarea id="c-message" name="message" rows={5} className={inputClass} aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600">Something went wrong — please try again.</p>
      )}
    </form>
  );
}
