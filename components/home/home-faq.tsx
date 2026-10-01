"use client";

import { useState } from "react";

const items = [
  {
    question: "How do we start?",
    answer:
      "Send the genre, a short description, and the file you have now through the contact form. We reply with the stages that fit that book and the fee for each stage before any work begins.",
  },
  {
    question: "Do you edit a draft that already exists?",
    answer:
      "Yes. Developmental editing looks at structure and pace. Line editing works on clarity and tone. Proofreading is the last pass on spelling and punctuation. You can hire one of those passes or all three.",
  },
  {
    question: "Do I keep the rights and royalties?",
    answer:
      "You remain the author. Retailer accounts and royalties stay in your name. AMZ Self Pub does not claim copyright in your manuscript.",
  },
  {
    question: "Can you help if the book is not finished?",
    answer:
      "Yes. Ghostwriting, fiction writing, and ebook writing can start from an outline or interviews. Publishing setup waits until you have approved the text.",
  },
  {
    question: "Which formats can you prepare?",
    answer:
      "We prepare ebook, paperback, and hardcover files, and we can add audiobook narration or a print run when that stage is in the agreement.",
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
