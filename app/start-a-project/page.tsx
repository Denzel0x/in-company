import type { Metadata } from "next";
import Section from "@/components/Section";
import StartProjectForm from "@/components/StartProjectForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Tell Invorious what you're building. A short project brief — no sales pitch, a reply within one business day.",
  openGraph: {
    title: "Start a Project — Invorious Software Agency",
    description:
      "Tell us what you're building and we'll reply with next steps, not a sales pitch.",
  },
};

const reassurances = [
  {
    title: "Direct access to engineers",
    body: "Whoever replies to this form is someone who could actually work on your project.",
  },
  {
    title: "No sales pitch",
    body: "We'll tell you honestly if something isn't a fit, or if you don't need us at all.",
  },
  {
    title: "Reply within 1 business day",
    body: "You'll hear back with next steps, not a generic acknowledgement.",
  },
];

export default function StartProjectPage() {
  return (
    <>
      <div className="brand-grid border-b border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium text-brand-violet">Start a project</p>
          <h1 className="mt-3 max-w-prose font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
            Tell us what you're building.
          </h1>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink/70">
            We'll reply with next steps, not a sales pitch.
          </p>
        </div>
      </div>

      <Section id="start-project-form">
        <div className="mx-auto max-w-2xl">
          <StartProjectForm />
        </div>
      </Section>

      <Section id="reassurance" className="bg-brand-gradient text-white" bordered={false} reveal>
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {reassurances.map((r) => (
            <div key={r.title}>
              <h2 className="font-display text-base font-semibold">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
