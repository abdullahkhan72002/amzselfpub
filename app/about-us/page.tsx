import type { Metadata } from "next";
import Image from "next/image";
import { CallButton } from "@/components/hero-actions";
import { PageBanner } from "@/components/page-banner";
import { Ghostwriting } from "@/components/ghostwriting";

export const metadata: Metadata = {
  title: "About Us | AMZ Self Pub",
  description: "Author-focused self-publishing from manuscript to marketing.",
};

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About Us"
        title="A Streamlined Path to Self-Publishing"
        text="AMZSelfPub provides a simple, flexible, and author-focused self-publishing experience tailored to your goals."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-8">
          <div className="space-y-5 text-base leading-relaxed text-[#5c6570] sm:text-lg">
            <p>
              From manuscript development to publishing, distribution, and marketing, we support
              you throughout the process while keeping your creative vision at the center of every
              step.
            </p>
            <p>
              AMZSelfpub offers a complete publishing experience, supporting writers through
              editing, publishing, and promotion with expert guidance and dedicated support.
            </p>
            <CallButton className="mt-2" />
          </div>
          <div className="relative">
            <div className="absolute right-0 bottom-6 h-[72%] w-[72%] rounded-[48%_42%_46%_18%] bg-teal" />
            <Image
              src="/images/second-sec.png"
              alt="Stack of books resting on a laptop"
              width={807}
              height={682}
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
      <Ghostwriting />
    </main>
  );
}
