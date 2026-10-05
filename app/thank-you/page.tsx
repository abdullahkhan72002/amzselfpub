import type { Metadata } from "next";
import Link from "next/link";
import { CallButton } from "@/components/hero-actions";
import { ThankYouConfetti } from "@/components/thank-you-confetti";

export const metadata: Metadata = {
  title: "Thank You | AMZ Self Pub",
  description: "We received your message and a publishing expert will be in touch.",
};

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouConfetti />
      <section className="flex min-h-[calc(100vh-96px)] items-center bg-[linear-gradient(180deg,#fff4e6_0%,#ffffff_62%)]">
        <div className="mx-auto w-full max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="font-sans text-base font-semibold tracking-[0.2em] text-brand uppercase sm:text-lg">Thank you</p>
          <h1 className="mt-5 font-tinos text-5xl leading-[1.05] font-bold tracking-[-1px] text-black sm:text-7xl xl:text-[92px]">
            We received your message
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-lg leading-relaxed text-[#5c6570] sm:text-2xl">
            A publishing expert will be in touch shortly. If you would rather talk now, call us.
          </p>
          <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-[16px] bg-brand px-6 font-sans text-base font-medium text-white transition hover:bg-[#e58612]"
            >
              Back to home
            </Link>
            <CallButton />
          </div>
        </div>
      </section>
    </main>
  );
}
