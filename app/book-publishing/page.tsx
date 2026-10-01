import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/faq";
import { HeroActions } from "@/components/hero-actions";
import { ServiceConnect } from "@/components/service-connect";

export const metadata: Metadata = {
  title: "Book Publishing | AMZ Self Pub",
  description:
    "Professional book publishing with editing, design, printing, and global distribution.",
};

const steps = [
  "Project brief",
  "Manuscript edit",
  "Cover design",
  "Interior formatting",
  "Listing setup",
  "Your approval",
];

const publishingFaqs = [
  {
    question: "What does book publishing include?",
    answer:
      "The stages named in your agreement: editing, cover, formatting, and the retailer setup. Print and marketing are added only when you ask for them.",
  },
  {
    question: "When is the book mine to sell?",
    answer:
      "From the start. You approve the files, the account is yours, and royalties are paid to you.",
  },
  {
    question: "How long does a typical release take?",
    answer:
      "Most projects run from a few weeks to about three months, depending on how much editing and design the manuscript needs.",
  },
  {
    question: "Can I publish only an ebook?",
    answer:
      "Yes. Paperback and hardcover are optional. Each format is prepared only if it is in the scope.",
  },
];

const fadedCovers = [
  { src: "/images/book-16.png", className: "right-[18%] top-6 w-40 rotate-6 opacity-30" },
  { src: "/images/book-5.png", className: "right-[2%] top-16 w-44 -rotate-3 opacity-25" },
  { src: "/images/book-3.png", className: "right-[28%] bottom-0 w-36 rotate-2 opacity-20" },
  { src: "/images/hero-book.png", className: "right-[8%] bottom-4 hidden w-36 opacity-20 lg:block" },
];

export default function BookPublishingPage() {
  return (
    <main className="overflow-x-clip">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff8f0_100%)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%]">
          {fadedCovers.map((book) => (
            <Image
              key={book.className}
              src={book.src}
              alt=""
              width={220}
              height={320}
              className={`absolute h-auto ${book.className}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <h1 className="font-heading text-4xl leading-[1.15] sm:text-6xl">
            <span className="text-teal">Professional</span>{" "}
            <span className="text-navy">Book Publishing</span>
            <span className="mt-2 block text-navy">Seamless Publishing Endless Possibilities</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#4d5560] sm:text-lg">
            AMZ Self Pub edits, designs, and prepares your book for release. You approve each file,
            and the finished book stays in your name.
          </p>
          <HeroActions align="center" />
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#fff1e0_0%,#f7f9fb_46%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="max-w-md font-heading text-4xl leading-tight text-navy sm:text-5xl">
              Your Journey to Published Success Starts Here
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5c6570]">
              Turning your manuscript into a published book is a transformative experience, and
              AMZ Self Pub is here to guide you every step of the way. Our book publishing
              services cover editing, design, printing, and distribution, while you keep ownership
              of the work.
            </p>
          </div>
          <Image
            src="/images/journey-books.jpg"
            alt="Person holding a stack of books"
            width={900}
            height={700}
            className="h-auto w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <ServiceConnect title="Start book publishing with a free consultation" />

      <section className="bg-[linear-gradient(90deg,#ffffff_0%,#fff4e6_100%)]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 className="text-center font-heading text-4xl leading-tight text-navy sm:text-5xl">
            How a book goes from manuscript to listing
          </h2>
          <ul className="mt-12 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={`${step}-${index}`}
                className="flex min-w-0 items-center gap-3 rounded-3xl bg-white px-3 py-2.5 text-sm font-medium text-navy shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-white">
                  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none">
                    <path d="M5 10.5 8.2 14 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={publishingFaqs} title="Book publishing questions" />
    </main>
  );
}
