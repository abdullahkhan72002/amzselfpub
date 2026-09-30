import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/faq";
import { HeroActions } from "@/components/hero-actions";
import { HowItWorks } from "@/components/how-it-works";
import { ServiceConnect } from "@/components/service-connect";
import { WhyChoose } from "@/components/why-choose";
import { getServiceFaqs } from "@/lib/service-faqs";
import { getServiceStepNotes } from "@/lib/service-steps";
import type { ServiceContent } from "@/lib/services";

const servicePhotos: Record<string, { primary: string; consult: string; width: number; height: number; alt: string }> = {
  "book-editing": {
    primary: "/images/book-editing-1.webp",
    consult: "/images/book-editing-2.webp",
    width: 1600,
    height: 1068,
    alt: "Book editing workspace",
  },
  "book-marketing": {
    primary: "/images/book-marketing-1.webp",
    consult: "/images/book-marketing-2.webp",
    width: 1600,
    height: 1068,
    alt: "Book marketing materials",
  },
  "amazon-publishing": {
    primary: "/images/amazon-publishing-1.webp",
    consult: "/images/amazon-publishing-2.webp",
    width: 1600,
    height: 1066,
    alt: "Books prepared for Amazon publishing",
  },
  "audio-book-narration": {
    primary: "/images/audio-narration-1.webp",
    consult: "/images/audio-narration-2.webp",
    width: 1600,
    height: 2400,
    alt: "Audiobook narration session",
  },
  "authors-website": {
    primary: "/images/author-website-1.webp",
    consult: "/images/author-website-2.webp",
    width: 1600,
    height: 1200,
    alt: "Author website on a screen",
  },
  "book-cover-design": {
    primary: "/images/book-cover-design-1.webp",
    consult: "/images/book-cover-design-2.webp",
    width: 1600,
    height: 1067,
    alt: "Red hardcover notebook with an elastic band",
  },
  "book-formatting": {
    primary: "/images/book-formatting-1.webp",
    consult: "/images/book-formatting-2.webp",
    width: 1600,
    height: 1067,
    alt: "Laid-out book pages",
  },
  "book-printing": {
    primary: "/images/book-printing-1.webp",
    consult: "/images/book-printing-2.webp",
    width: 1600,
    height: 1067,
    alt: "Close-up of the colored edges of printed book pages",
  },
  "children-book": {
    primary: "/images/childrens-book-1.webp",
    consult: "/images/childrens-book-2.webp",
    width: 1600,
    height: 1067,
    alt: "Illustrated children's book",
  },
  "ebook-writing": {
    primary: "/images/ebook-writing-1.webp",
    consult: "/images/ebook-writing-2.webp",
    width: 1600,
    height: 1063,
    alt: "Person reading a manuscript on a tablet",
  },
  "fiction-writing": {
    primary: "/images/fiction-writing-1.webp",
    consult: "/images/fiction-writing-2.webp",
    width: 1600,
    height: 900,
    alt: "Open book on a wooden desk",
  },
  "ghost-writing": {
    primary: "/images/ghostwriting-1.webp",
    consult: "/images/ghostwriting-2.webp",
    width: 1600,
    height: 1068,
    alt: "Writer drafting a manuscript",
  },
  "proof-reading": {
    primary: "/images/proof-reading-1.webp",
    consult: "/images/proof-reading-2.webp",
    width: 1600,
    height: 1067,
    alt: "Hand holding a magnifying glass over printed text",
  },
  "video-trailer": {
    primary: "/images/video-trailer-1.webp",
    consult: "/images/video-trailer-2.webp",
    width: 1600,
    height: 900,
    alt: "Editor reviewing video clips on a laptop",
  },
};

const fadedCovers = [
  { src: "/images/book-16.png", className: "right-[18%] top-6 w-40 rotate-6 opacity-30" },
  { src: "/images/book-5.png", className: "right-[2%] top-16 w-44 -rotate-3 opacity-25" },
  { src: "/images/book-3.png", className: "right-[28%] bottom-0 w-36 rotate-2 opacity-20" },
  { src: "/images/hero-book.png", className: "right-[8%] bottom-4 hidden w-36 opacity-20 lg:block" },
];

export function serviceMetadata(service: ServiceContent): Metadata {
  return {
    title: `${service.nav} | AMZ Self Pub`,
    description: service.description,
  };
}

export function ServicePageView({ service }: { service: ServiceContent }) {
  const notes = getServiceStepNotes(service.slug);
  const photo = servicePhotos[service.slug];
  const steps = service.steps.map((title, index) => ({
    title,
    body: notes[index] ?? "",
  }));

  return (
    <main className="overflow-x-clip">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3fbfa_100%)]">
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
            <span className="text-teal">{service.accent}</span>{" "}
            <span className="text-navy">{service.headline}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#4d5560] sm:text-lg">
            {service.intro}
          </p>
          <HeroActions align="center" />
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#e7eef6_0%,#f7f9fb_46%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="max-w-md font-heading text-4xl leading-tight text-navy sm:text-5xl">
              {service.journeyTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5c6570]">{service.journey}</p>
          </div>
          <Image
            src={photo?.primary ?? "/images/journey-books.jpg"}
            alt={photo?.alt ?? "Person holding a stack of books"}
            width={photo?.width ?? 900}
            height={photo?.height ?? 700}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="text-center font-heading text-4xl leading-tight text-navy sm:text-5xl">
            {service.includesTitle}
          </h2>
          <ul className="mt-12 grid min-w-0 gap-5 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex min-w-0 items-center gap-3 rounded-3xl bg-white px-3 py-2.5 text-sm font-medium text-navy shadow-[0_10px_28px_rgba(5,63,126,0.1)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-navy text-white">
                  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none">
                    <path d="M5 10.5 8.2 14 15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {service.details.map((detail) => (
              <li key={detail.title}>
                <h3 className="font-heading text-2xl text-navy">{detail.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#5c6570]">{detail.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceConnect title={`Start ${service.nav} with a free consultation`} image={photo?.consult} />

      <WhyChoose />

      <HowItWorks
        title="How It Works"
        intro={`${service.nav} follows this order. You review the work before the files are delivered.`}
        steps={steps}
      />

      <Faq items={getServiceFaqs(service.slug)} title={`${service.nav} questions`} />
    </main>
  );
}
