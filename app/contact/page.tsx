import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Invorious Software Agency in Sydney — call 0426 576 625 or send us a message about your project.",
  openGraph: {
    title: "Contact — Invorious Software Agency",
    description:
      "Call 0426 576 625, email hello@invorious.com, or send us a message. Based in Sydney, NSW.",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="brand-grid border-b border-line px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium text-brand-violet">Contact</p>
          <h1 className="mt-3 max-w-prose font-display text-4xl font-semibold leading-[1.1] text-ink md:text-5xl">
            Let's talk.
          </h1>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-ink/70">
            We reply to every message ourselves — no sales queue.
          </p>
        </div>
      </div>

      <Section id="contact-details">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium text-brand-violet">Phone</p>
              <a href="tel:0426576625" className="mt-1 block font-display text-lg text-ink">
                0426 576 625
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-brand-violet">Email</p>
              <a href="mailto:hello@invorious.com" className="mt-1 block font-display text-lg text-ink">
                hello@invorious.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-brand-violet">Location</p>
              <p className="mt-1 font-display text-lg text-ink">Sydney, NSW, Australia</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
