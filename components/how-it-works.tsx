import Image from "next/image";
import { ConsultButton } from "@/components/consultation";
import { PHONE_NUMBER, PHONE_TEL } from "@/components/hero-actions";

const icons = ["/images/icon-handshake.svg", "/images/icon-screen.svg", "/images/icon-star.svg"];

const defaultSteps = [
  {
    title: "Tell us about the book",
    body: "Share the genre, the audience, and whether you have a finished manuscript, a partial draft, or only an outline.",
  },
  {
    title: "Agree the scope",
    body: "We confirm which stages you need: editing, cover, formatting, publishing setup, print, or promotion, and the fee for each.",
  },
  {
    title: "Approve, then release",
    body: "You review the files. After you sign off, we upload the listing or send the print-ready package to production.",
  },
];

export function HowItWorks({
  title = "How It Works",
  intro = "A book moves through a short sequence: a conversation, a written scope, and files you approve before they go live or to press.",
  steps = defaultSteps,
}: {
  title?: string;
  intro?: string;
  steps?: { title: string; body: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Image src="/images/how-bg.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#111111]/78" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="text-center font-heading text-4xl sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white/90 sm:text-lg">
          {intro}
        </p>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-white p-6 text-ink shadow-xl">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icons[index % icons.length]} alt="" width={28} height={28} />
                </span>
                <span className="text-sm font-medium text-[#8b8b8b]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 font-heading text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6c6c6c]">{step.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ConsultButton className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-medium text-white">
            Get Free Consultation
          </ConsultButton>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-navy">
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
