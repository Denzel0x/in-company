"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-ink outline-none";

const projectTypes = [
  { value: "consulting", label: "Technology Consulting" },
  { value: "web2", label: "Web2 — Apps & Web" },
  { value: "web3", label: "Web3 — Blockchain" },
  { value: "other", label: "Other / not sure yet" },
];

const budgets = ["Under $20k", "$20k – $50k", "$50k – $150k", "$150k+", "Not sure yet"];
const timelines = ["ASAP", "Within 1–3 months", "3–6 months", "No fixed timeline"];

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
};

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: budgets[0],
  timeline: timelines[0],
  description: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const steps = ["About you", "Project type", "Project details"];

export default function StartProjectForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function validateStep(current: number): boolean {
    const nextErrors: Record<string, string> = {};
    if (current === 0) {
      if (!data.name.trim()) nextErrors.name = "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = "Enter a valid email address.";
    }
    if (current === 1) {
      if (!data.projectType) nextErrors.projectType = "Choose a project type.";
    }
    if (current === 2) {
      if (!data.description.trim() || data.description.trim().length < 20) {
        nextErrors.description = "Add a few sentences (20 characters minimum).";
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    if (!validateStep(2)) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/start-a-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-line bg-paper p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">Thanks, {data.name.split(" ")[0]}.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          We've got your project details and will reply within one business day — with next
          steps, not a sales pitch.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <ol className="mb-8 flex items-center gap-3 text-xs font-medium text-ink/50">
        {steps.map((label, i) => (
          <li key={label} className="flex items-center gap-3">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                i <= step ? "border-transparent bg-brand-gradient text-white" : "border-line text-ink/40"
              }`}
            >
              {i + 1}
            </span>
            <span className={i === step ? "text-ink" : ""}>{label}</span>
            {i < steps.length - 1 && <span className="h-px w-6 bg-line" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (step === steps.length - 1) handleSubmit();
          else goNext();
        }}
        className="space-y-5"
      >
        {step === 0 && (
          <>
            <div>
              <label htmlFor="sp-name" className="mb-1.5 block text-xs font-medium text-ink/70">
                Name
              </label>
              <input
                id="sp-name"
                type="text"
                className={inputClass}
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="sp-email" className="mb-1.5 block text-xs font-medium text-ink/70">
                Email
              </label>
              <input
                id="sp-email"
                type="email"
                className={inputClass}
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="sp-company" className="mb-1.5 block text-xs font-medium text-ink/70">
                Company (optional)
              </label>
              <input
                id="sp-company"
                type="text"
                className={inputClass}
                value={data.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </div>
          </>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="mb-3 text-xs font-medium text-ink/70">
              What kind of project is this?
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {projectTypes.map((type) => (
                <label
                  key={type.value}
                  className={`flex cursor-pointer items-center gap-3 border p-4 text-sm ${
                    data.projectType === type.value ? "border-transparent bg-brand-gradient text-white" : "border-line text-ink/80"
                  }`}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type.value}
                    checked={data.projectType === type.value}
                    onChange={(e) => update("projectType", e.target.value)}
                    className="sr-only"
                  />
                  {type.label}
                </label>
              ))}
            </div>
            {errors.projectType && <p className="mt-2 text-xs text-red-600">{errors.projectType}</p>}
          </fieldset>
        )}

        {step === 2 && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="sp-budget" className="mb-1.5 block text-xs font-medium text-ink/70">
                  Budget
                </label>
                <select
                  id="sp-budget"
                  className={inputClass}
                  value={data.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sp-timeline" className="mb-1.5 block text-xs font-medium text-ink/70">
                  Timeline
                </label>
                <select
                  id="sp-timeline"
                  className={inputClass}
                  value={data.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                >
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="sp-description" className="mb-1.5 block text-xs font-medium text-ink/70">
                What are you building?
              </label>
              <textarea
                id="sp-description"
                rows={5}
                className={inputClass}
                value={data.description}
                onChange={(e) => update("description", e.target.value)}
                aria-invalid={!!errors.description}
              />
              {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
            </div>
          </>
        )}

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="text-sm text-ink/60 underline-offset-2 hover:underline disabled:opacity-0"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {step === steps.length - 1
              ? status === "submitting"
                ? "Sending…"
                : "Send project details"
              : "Continue"}
          </button>
        </div>

        {status === "error" && (
          <p className="text-xs text-red-600">Something went wrong — please try again.</p>
        )}
      </form>
    </div>
  );
}
