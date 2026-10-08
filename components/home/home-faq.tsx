"use client";

import { useState } from "react";

const items = [
  {
    question: "How do I get started?",
    answer:
      "Use the contact form to share your genre, a short description of your book, and whatever file or draft you have right now. We reply with a breakdown of the stages that apply to your project and the fee for each, before any work begins.",
  },
  {
    question: "Can you edit a manuscript that's already written?",
    answer:
      "Yes. We offer developmental editing for structure and pacing, line editing for clarity and tone, and proofreading for a final review of spelling and punctuation. You can commission one pass or all three, depending on where your manuscript is today.",
  },
  {
    question: "Do I keep the rights and royalties?",
    answer:
      "Yes, always. You remain the sole author and copyright holder throughout the entire process. Retailer accounts and royalties stay in your name. AMZ SelfPub does not take a cut of your earnings or claim any ownership of your work, at any point.",
  },
  {
    question: "What if my book isn't finished yet?",
    answer:
      "That is not a problem. Our ghostwriting service can begin from an outline, a partial draft, or a series of recorded interviews. Publishing setup and distribution are added only after the manuscript has been approved and is ready to go.",
  },
  {
    question: "Which formats can you prepare?",
    answer:
      "We produce formatted files for ebook, paperback, and hardcover, each sized for the platform or printer carrying the book. Audiobook narration and print run coordination can also be added as separate stages when included in the project agreement.",
  },
];

export function HomeFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1140px] px-5 py-[60px] xl:py-[100px]">
        <h2 className="text-center font-tinos text-[32px] font-normal leading-[1.2] tracking-[-0.6px] text-black xl:text-[42px] xl:tracking-[-1px]">
          A Few <span className="font-bold text-brand xl:text-[44px]">Quick</span> Answers
        </h2>

        <div className="mx-auto mt-8 w-full max-w-[900px] border-t-[1.5px] border-[#5e5e5e] xl:mt-14">
          {items.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.question} className="border-b-[1.5px] border-[#5e5e5e] py-5">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    <span className="font-sans text-base font-medium leading-[1.3] text-[#2b2b2b] xl:text-[18px]">
                      {item.question}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                        expanded ? "bg-brand" : "bg-[#e9e9e9]"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={expanded ? "/images/home/imgArrowRight.svg" : "/images/home/imgArrowDownRight.svg"}
                        alt=""
                        className="size-3.5"
                      />
                    </span>
                  </button>
                </h3>
                {expanded ? (
                  <p className="mt-5 pr-10 font-sans text-[15px] leading-[1.65] text-[#5e5e5e] xl:pr-28 xl:text-base">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
