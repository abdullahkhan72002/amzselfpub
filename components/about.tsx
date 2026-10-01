import Image from "next/image";

const steps = ["Manuscript review", "Editing", "Cover and layout", "Publishing setup"];

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="h-16 bg-navy" />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-10 -left-24 h-72 w-72 rounded-full bg-[#fff4e6]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="relative">
            <div className="flex items-center gap-3 text-sm text-navy">
              <span className="h-0.5 w-8 bg-teal" />
              About Us
            </div>
            <h2 className="mt-4 max-w-md font-heading text-4xl leading-tight text-navy sm:text-5xl">
              A Streamlined Path to Self-Publishing
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5c6570] sm:text-lg">
              AMZSelfPub provides a simple, flexible, and author-focused self-publishing
              experience tailored to your goals. From manuscript development to publishing,
              distribution, and marketing, we support you throughout the process while
              keeping your creative vision at the center of every step.
            </p>
            <ul className="mt-8 grid max-w-lg grid-cols-1 gap-4 min-[420px]:grid-cols-2">
              {steps.map((step, index) => (
                <li
                  key={`${step}-${index}`}
                  className="flex min-w-0 items-center gap-3 rounded-full bg-white px-3 py-2 text-sm font-medium text-navy shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-white">
                    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none">
                      <path d="M5 10.5 8.2 14 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute right-0 bottom-8 h-[78%] w-[78%] rounded-[48%_42%_46%_18%] bg-teal" />
            <Image
              src="/images/second-sec.png"
              alt="Stack of books resting on a laptop"
              width={807}
              height={682}
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
