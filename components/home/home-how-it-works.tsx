/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { ConsultButton } from "@/components/consultation";
import { CallButton } from "@/components/hero-actions";

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Book",
    body: "Share the genre, your target audience, and what you have so far: a finished manuscript, a partial draft, or a working outline. There is no minimum requirement to get started.",
    icon: "/images/home/imgHandshakeFill0Wght200Grad0Opsz241.svg",
  },
  {
    n: "02",
    title: "Agree on the Scope",
    body: "We confirm which stages your book needs: editing, cover design, formatting, publishing setup, print production, or promotional content, and provide the fee for each in writing before any work begins.",
    icon: "/images/home/imgFitScreenFill0Wght200Grad0Opsz241.svg",
  },
  {
    n: "03",
    title: "Approve, Then Publish",
    body: "You review every deliverable before it moves forward. Once you approve the edited text, the cover design, and the interior files, we upload your listing or send the print-ready package to production.",
    icon: "/images/home/imgStarFill0Wght200Grad0Opsz2411.svg",
  },
] as const;

export function HomeHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full opacity-[0.24] xl:-left-[128px] xl:w-[calc(100%+128px)]" aria-hidden>
        <Image
          src="/images/home/imgRectangle4175.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1140px] px-5 py-[60px] xl:py-[88px]">
        <h2 className="text-center font-tinos text-[32px] font-bold leading-[1.2] tracking-[0.2px] text-white xl:text-[44px]">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-[920px] text-center font-sans text-[15px] font-medium leading-[1.65] text-[rgba(255,255,255,0.7)] xl:text-base">
          Getting published is a short, structured process. Here is how a project moves from your first message to a finished, listed book.
        </p>

        <ul className="mx-auto mt-8 grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-3 xl:mt-10">
          {steps.map((step) => (
            <li key={step.n} className="flex h-full flex-col rounded-[13px] bg-white px-6 py-7">
              <div className="flex items-start justify-between">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-[12px] bg-brand">
                  <img alt="" src={step.icon} className="size-8" />
                </div>
                <span className="font-inter text-base font-medium leading-[1.3] text-black">{step.n}</span>
              </div>
              <h3 className="mt-6 font-heading text-[20px] font-medium leading-[1.3] text-black">{step.title}</h3>
              <p className="mt-3 font-sans text-[15px] font-normal leading-[1.6] text-[#6c6c6c]">{step.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row xl:mt-10 xl:gap-6">
          <ConsultButton className="inline-flex h-12 items-center justify-center gap-1.5 rounded-[16px] bg-brand px-6 font-sans text-base font-medium text-white transition hover:bg-[#e88712] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <img alt="" src="/images/home/imgVector5.svg" className="h-[22px] w-[21px] shrink-0" />
            Get Free Consultation
          </ConsultButton>
          <CallButton />
        </div>
      </div>
    </section>
  );
}
