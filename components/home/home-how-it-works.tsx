/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { PHONE_NUMBER } from "@/components/hero-actions";

const steps = [
  {
    n: "01",
    title: "Tell us about the book",
    body: "Share the genre, the audience, and whether you have a finished manuscript, a partial draft, or only an outline.",
    icon: "/images/home/imgHandshakeFill0Wght200Grad0Opsz241.svg",
    featured: false,
  },
  {
    n: "02",
    title: "Agree the scope",
    body: "We confirm which stages you need: editing, cover, formatting, publishing setup, print, or promotion, and the fee for each.",
    icon: "/images/home/imgFitScreenFill0Wght200Grad0Opsz241.svg",
    featured: true,
  },
  {
    n: "03",
    title: "Approve, then release",
    body: "You review the files. After you sign off, we upload the listing or send the print-ready package to production.",
    icon: "/images/home/imgStarFill0Wght200Grad0Opsz2411.svg",
    featured: false,
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
          A book moves through a short sequence: a conversation, a written scope, and files you approve before they go live or to press.
        </p>

        <ul className="mx-auto mt-8 flex w-full flex-col items-center gap-4 xl:mt-10 xl:flex-row xl:items-start xl:justify-center xl:gap-4">
          {steps.map((step) =>
            step.featured ? (
              <li
                key={step.n}
                className="flex w-full flex-col rounded-[13px] bg-white px-5 pt-8 pb-6 xl:w-[400px] xl:flex-none xl:px-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-[80px] shrink-0 items-center justify-center rounded-[12px] bg-brand">
                    <img alt="" src={step.icon} className="size-[42px]" />
                  </div>
                  <span className="mt-6 font-inter text-base font-medium leading-[1.3] text-black">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-8 font-sans text-[22px] font-medium leading-[1.3] text-black">
                  {step.title}
                </h3>
                <p className="mt-4 font-sans text-base font-normal leading-[1.6] text-[#6c6c6c]">
                  {step.body}
                </p>
              </li>
            ) : (
              <li
                key={step.n}
                className="flex w-full flex-col rounded-[13px] bg-white px-5 pt-5 pb-5 xl:w-[280px] xl:flex-none"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[6px] bg-brand">
                    <img alt="" src={step.icon} className="size-5" />
                  </div>
                  <span className="mt-2 font-inter text-[15px] font-medium leading-[1.3] text-black">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-[20px] font-medium leading-[1.3] text-black">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-[15px] font-normal leading-[1.6] text-[#6c6c6c]">
                  {step.body}
                </p>
              </li>
            ),
          )}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row xl:mt-10 xl:gap-6">
          <a
            href="/contact-us"
            className="inline-flex h-12 items-center justify-center gap-1.5 rounded-[16px] bg-brand px-6 font-sans text-base font-medium text-white transition hover:bg-[#e88712] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <img alt="" src="/images/home/imgVector5.svg" className="h-[22px] w-[21px] shrink-0" />
            Get Free Consultation
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex h-12 items-center justify-center rounded-[16px] bg-brand px-6 font-sans text-base font-medium text-white transition hover:bg-[#e88712] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
