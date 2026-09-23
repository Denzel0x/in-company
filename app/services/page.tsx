import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technology consulting, Web2 application development and Web3 blockchain engineering, delivered by Invorious in Sydney.",
  openGraph: {
    title: "Services — Invorious Software Agency",
    description:
      "Technology consulting, Web2 application development and Web3 blockchain engineering, delivered by Invorious in Sydney.",
  },
};

const consultingDeliverables = [
  "Architecture review of an existing system",
  "Technology roadmap and vendor evaluation",
  "Technical due diligence before you invest or acquire",
  "Scoping and estimation for a build you're planning",
];

const web2Deliverables = [
  "Custom web applications and customer portals",
  "iOS and Android apps",
  "Internal tools and process automation",
  "API design, integrations and legacy modernisation",
];

const web3Deliverables = [
  "Smart contract design, development and audit-readiness",
  "Token systems and on-chain mechanics",
  "Wallet integrations and dApp front ends",
  "Infrastructure for indexing and monitoring on-chain activity",
];

export default function ServicesPage() {
  return (
    <>
      <div className="brand-grid border-b border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium text-brand-violet">Services</p>
          <h1 className="mt-3 max-w-prose font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
            Three ways to work with Invorious.
          </h1>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink/70">
            Some projects start with a question, others with a finished spec. Wherever
            you're starting from, these are the engagements we run.
          </p>
        </div>
      </div>

      {/* Technology Consulting */}
      <Section id="consulting">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-medium text-brand-violet">01 — Technology Consulting</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Plan before you build
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
              We assess what you have, what you actually need, and where the two diverge —
              before any code gets written. This is the right starting point if you're not
              yet sure what to build, or need a second opinion on a plan already on the table.
            </p>
            <Button href="/contact" className="mt-6">
              Book a consultation
            </Button>
          </div>
          <ul className="space-y-3">
            {consultingDeliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 border border-line bg-paper p-4 text-sm text-ink/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Web2 */}
      <Section id="web2" className="bg-brand-gradient text-white" bordered={false} reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-medium text-white/90">02 — Web2, Apps & Web</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Products people can rely on
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/70">
              Web applications, mobile apps and internal tools, built with production
              discipline from the first commit — tested, documented, and handed over in a
              state your own team can maintain.
            </p>
            <Button href="/contact" className="mt-6 !bg-paper !text-ink hover:!bg-brand-light">
              Discuss a build
            </Button>
          </div>
          <ul className="space-y-3">
            {web2Deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 border border-paper/20 p-4 text-sm text-paper/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Web3 */}
      <Section id="web3">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-medium text-brand-violet">03 — Web3, Blockchain</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Decentralised, done properly
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
              Blockchain work carries a different risk profile to a typical web build. We
              bring the same engineering rigour to smart contracts and on-chain systems as
              we do everywhere else — nothing shipped that hasn't been reasoned through.
            </p>
            <Button href="/contact" className="mt-6">
              Talk about your idea
            </Button>
          </div>
          <ul className="space-y-3">
            {web3Deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 border border-line bg-paper p-4 text-sm text-ink/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-sm">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="services-cta">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Have a project in mind?
            </h2>
            <p className="mt-3 max-w-prose text-ink/70">
              Tell us where you're at — most projects touch more than one of these.
            </p>
          </div>
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
