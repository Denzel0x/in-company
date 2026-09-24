import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Web3Transform from "@/components/Web3Transform";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="brand-grid border-b border-line px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-brand-violet">Fully remote · Custom software development</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
              Tailored software, built to fit how your{" "}
              <span className="brand-text-gradient">business</span> actually runs.
            </h1>
            <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink/70">
              Invorious designs and builds custom web, mobile and blockchain systems,
              delivered by a fully remote team working from all over the world — from
              first architecture sketch to production. Trust us to help you succeed
              through technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/start-a-project">Start a project</Button>
              <Button href="/services" variant="secondary">
                See our services
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Web3Transform />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <Section id="services-overview">
        <div className="max-w-prose">
          <p className="text-xs font-medium text-brand-violet">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
            Three ways we work with you
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card label="Technology Consulting" title="Plan before you build">
            Architecture reviews, technology roadmaps and technical due diligence, so the
            build you commission is the one your business actually needs.
          </Card>
          <Card label="Web2 — Apps & Web" title="Products people can rely on">
            Custom web applications, mobile apps and internal tools, engineered for
            performance, maintainability and growth.
          </Card>
          <Card label="Web3 — Blockchain" title="Decentralised, done properly">
            Smart contracts, token systems and blockchain-backed applications, built with
            the same engineering discipline as everything else we ship.
          </Card>
        </div>
      </Section>

      {/* How we work / proof — brand cover image as banner backdrop */}
      <Section
        id="approach"
        bordered={false}
        reveal
        className="relative overflow-hidden bg-[url('/brand/cover.jpg')] bg-cover bg-center text-white"
      >
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-medium text-brand-light">Since 2021</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Client-centred, by design.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              We're a fully remote, senior team spread across the world — which means the
              people who scope your project are the people who build it.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-display text-3xl font-semibold text-brand-light">2021</p>
              <p className="mt-2 text-sm text-white/80">Founded in Sydney</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-brand-light">Remote</p>
              <p className="mt-2 text-sm text-white/80">A senior team working from all over the world</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-brand-light">3</p>
              <p className="mt-2 text-sm text-white/80">
                Specialties: consulting, Web2, Web3
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-brand-light">1:1</p>
              <p className="mt-2 text-sm text-white/80">Direct access to your engineers</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Have a project in mind?
            </h2>
            <p className="mt-3 max-w-prose text-ink/70">
              Tell us what you're building. We'll reply with next steps, not a sales pitch.
            </p>
          </div>
          <Button href="/start-a-project">Start a project</Button>
        </div>
      </Section>
    </>
  );
}
