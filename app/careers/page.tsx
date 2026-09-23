import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Spotlight from "@/components/Spotlight";
import CareerForm from "@/components/CareerForm";
import RoleCard, { type Role } from "@/components/RoleCard";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Invorious, a small senior Sydney software team. Open roles: Smart Contract Engineer, Web3 Frontend Engineer, Go/Rust Infrastructure Engineer, Web3 Backend Engineer, Marketing Manager — full-time and internship.",
  openGraph: {
    title: "Careers — Invorious Software Agency",
    description:
      "Open roles at Invorious across smart contracts, Web3 frontend/backend, infrastructure and marketing — full-time and internship tracks, Sydney-based.",
  },
};

const perks = [
  { label: "Small team", body: "Ten people or fewer, so your work is visible and your input matters." },
  { label: "Direct client contact", body: "You'll talk to the businesses you're building for, not just a manager." },
  { label: "Breadth", body: "Move between consulting, Web2 and Web3 work instead of staying in one lane." },
  { label: "Sydney-based", body: "In-person when it helps, flexible when it doesn't." },
];

const roles: Role[] = [
  {
    title: "Smart Contract Engineer",
    compensation: "$120k – $160k USD",
    blurb:
      "Design, write and prepare audit-ready Solidity smart contracts for client Web3 products — from token mechanics to on-chain protocol logic.",
    ideal:
      "Solid Solidity experience, a working understanding of gas optimisation and common attack vectors, and at least one contract shipped to testnet or mainnet.",
    internship:
      "A 3–6 month paid placement working alongside a senior smart contract engineer on real client contracts, from spec through to test coverage.",
  },
  {
    title: "Web3 Frontend Engineer",
    compensation: "$100k – $140k USD",
    blurb:
      "Build the interfaces people actually use to interact with on-chain products — wallet connections, transaction flows, and the React apps around them.",
    ideal:
      "Strong React and TypeScript, comfortable with wagmi/viem or ethers.js, and an eye for interfaces that make blockchain feel ordinary rather than intimidating.",
    internship:
      "A 3–6 month paid placement building real dApp screens under a senior engineer, from wallet integration through to shipped UI.",
  },
  {
    title: "Go/Rust Infrastructure Engineer",
    compensation: "$110k – $150k USD",
    blurb:
      "Build and run the infrastructure behind our on-chain and off-chain systems — indexers, monitoring, and the services that keep them honest.",
    ideal:
      "Production experience in Go or Rust, and comfort with distributed systems, observability, and infrastructure-as-code.",
    internship:
      "A 3–6 month paid placement supporting real infrastructure work — indexing pipelines, monitoring, and deployment tooling — under a senior engineer.",
  },
  {
    title: "Web3 Backend Engineer",
    compensation: "$100k – $140k USD",
    blurb:
      "Design the APIs and off-chain services that connect blockchain systems to the rest of a client's business.",
    ideal:
      "Backend experience in Node, Go or Rust, an understanding of blockchain data models, and comfort with event-driven architectures.",
    internship:
      "A 3–6 month paid placement building and testing real backend services under a senior engineer, from API design through to deployment.",
  },
  {
    title: "Marketing Manager",
    compensation: "$85k – $115k USD",
    blurb:
      "Own brand, content and lead-generation marketing across Invorious's consulting, Web2 and Web3 work.",
    ideal:
      "B2B tech or agency marketing experience, strong writing, and comfort marketing to a technical audience — Web3/crypto marketing experience is a plus.",
    internship:
      "A 3–6 month paid placement running real campaigns and content under the marketing lead, with ownership of at least one channel by the end.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <div className="brand-grid border-b border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium text-brand-violet">Careers</p>
          <h1 className="mt-3 max-w-prose font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
            Join a small, senior team in Sydney.
          </h1>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink/70">
            We stay deliberately small so the people doing the work stay close to the
            clients it's for. If that sounds like how you'd rather work, we'd like to hear
            from you.
          </p>
        </div>
      </div>

      {/* Culture / perks */}
      <Section id="culture">
        <p className="text-xs font-medium text-brand-violet">Why Invorious</p>
        <h2 className="mt-3 max-w-prose font-display text-2xl font-semibold text-ink">
          What it's like to work here
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {perks.map((p) => (
            <Spotlight key={p.label} className="border border-line bg-paper p-5 hover:border-brand-violet/30">
              <h3 className="font-display text-base font-semibold text-ink">{p.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.body}</p>
            </Spotlight>
          ))}
        </div>
      </Section>

      {/* Open roles */}
      <Section id="open-roles" className="bg-brand-gradient text-white" bordered={false} reveal>
        <p className="text-xs font-medium text-white/90">Open roles</p>
        <h2 className="mt-3 max-w-prose font-display text-2xl font-semibold">
          Currently hiring — every role also open as a paid internship
        </h2>
        <p className="mt-3 max-w-prose text-sm text-white/70">
          Tap a role for the full picture: what you'd work on, compensation, who tends to
          thrive here, and what the internship track looks like.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <RoleCard key={role.title} role={role} />
          ))}
        </div>
        <p className="mt-6 text-sm text-white/60">
          Don't see the right fit?{" "}
          <a href="mailto:hello@invorious.com" className="underline underline-offset-2">
            Email us
          </a>{" "}
          — we're consistently looking for strong engineers and consultants.
        </p>
      </Section>

      {/* Apply */}
      <Section id="apply">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium text-brand-violet">Apply</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              Tell us about yourself
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              A few lines about what you'd want to work on is more useful to us than a
              formal cover letter. Mention which role and whether you're applying for the
              full-time or internship track. Prefer email? Write to{" "}
              <a href="mailto:hello@invorious.com" className="underline underline-offset-2">
                hello@invorious.com
              </a>
              .
            </p>
          </div>
          <CareerForm />
        </div>
      </Section>

      {/* Closing CTA */}
      <Section id="careers-cta">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Hiring for a client project?
            </h2>
            <p className="mt-3 max-w-prose text-ink/70">
              If you're a business rather than a candidate, this isn't the form you want.
            </p>
          </div>
          <Button href="/start-a-project">Start a project</Button>
        </div>
      </Section>
    </>
  );
}
