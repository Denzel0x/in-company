import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Spotlight from "@/components/Spotlight";

export const metadata: Metadata = {
  title: "About",
  description:
    "Invorious is a Sydney-based custom software agency founded in 2021, built around a client-centred approach to technology consulting, Web2 and Web3 development.",
  openGraph: {
    title: "About — Invorious Software Agency",
    description:
      "Founded in Sydney in 2021, Invorious is a small, senior team working across technology consulting, Web2 and Web3 development.",
  },
};

const values = [
  {
    title: "We scope before we estimate",
    body: "A number without a shared understanding of the problem isn't useful to either of us. We take the time to understand what you're solving for first.",
  },
  {
    title: "You talk to the people building it",
    body: "There's no account layer between you and the engineers. Questions get answered by someone who can actually answer them.",
  },
  {
    title: "We hand over systems, not black boxes",
    body: "Documentation, clean commits and a codebase your future team — or ours — can pick up without a translation layer.",
  },
];

const stats = [
  { value: "2021", label: "Founded in Sydney" },
  { value: "2–10", label: "A deliberately small, senior team" },
  { value: "3", label: "Specialties: consulting, Web2, Web3" },
  { value: "1:1", label: "Direct access to your engineers" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="brand-grid border-b border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium text-brand-violet">About</p>
          <h1 className="mt-3 max-w-prose font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
            Client-centred, by design.
          </h1>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink/70">
            Invorious was founded in Sydney in 2021 to work differently to the agencies and
            consultancies we'd come up through: fewer layers between the client and the
            people doing the work, and a refusal to hand over a build without making sure
            it actually fits the business it was built for.
          </p>
        </div>
      </div>

      {/* Story */}
      <Section id="story">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium text-brand-violet">Our story</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              Why Invorious exists
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink/70">
            <p>
              That founding idea has stayed true as we've grown into a small team spanning
              technology consulting, Web2 application development and Web3 engineering.
              We've kept the team deliberately compact — big enough to cover the
              specialties our clients need, small enough that nothing gets lost in
              handoffs.
            </p>
            <p>
              We're a team of 2–10 based in Sydney. We'd rather introduce you to the people
              who'd actually work on your project during a first call than fill this page
              with headshots and titles.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats block, reused from Home */}
      <Section id="stats" className="bg-brand-gradient text-white" bordered={false} reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-medium text-white/90">Since 2021</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Small by design, not by accident.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-white">{s.value}</p>
                <p className="mt-2 text-sm text-paper/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values / approach */}
      <Section id="values">
        <p className="text-xs font-medium text-brand-violet">Client-centred, in practice</p>
        <h2 className="mt-3 max-w-prose font-display text-2xl font-semibold text-ink">
          What that actually means day to day
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <Spotlight key={v.title} className="border border-line bg-paper p-6 hover:border-brand-violet/30">
              <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.body}</p>
            </Spotlight>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section id="about-cta">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Want to meet the team?
            </h2>
            <p className="mt-3 max-w-prose text-ink/70">
              The best way to get to know us is to tell us what you're building.
            </p>
          </div>
          <Button href="/start-a-project">Start a project</Button>
        </div>
      </Section>
    </>
  );
}
