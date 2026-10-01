"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const books = [
  { src: "/images/carousel-1.png", alt: "The Little Star's Big Journey" },
  { src: "/images/carousel-2.png", alt: "The Universe Within" },
  { src: "/images/carousel-3.png", alt: "Ignite Your Growth" },
  { src: "/images/carousel-4.png", alt: "The Coven" },
  { src: "/images/carousel/book-5.png", alt: "Simple Way Of Piece Life" },
  { src: "/images/carousel/book-16.png", alt: "The Lady Beauty Scarlett" },
  { src: "/images/carousel/book-4.png", alt: "Once Upon A Time" },
  { src: "/images/home/Bullfrog C3 R1.jpg", alt: "Bullfrog" },
  { src: "/images/home/Cover 02 R2.jpg", alt: "Cover" },
  { src: "/images/home/Cover Design Kingdom Living.jpg", alt: "Kingdom Living" },
  { src: "/images/home/Cover.jpg", alt: "Cover" },
  { src: "/images/home/Cover02.jpg", alt: "Cover" },
  { src: "/images/home/IN THE STREETS OF 02.jpg", alt: "In the Streets" },
] as const;

const regular =
  "font-tinos text-[30px] leading-[1.2] font-normal tracking-[-0.6px] text-white sm:text-[32px] xl:text-[42px] xl:tracking-[-1px]";
const accent =
  "font-tinos text-[32px] leading-[1.2] font-bold text-brand sm:text-[34px] xl:text-[44px]";

function BookCard({
  book,
  featured,
  widthClass,
}: {
  book: (typeof books)[number];
  featured: boolean;
  widthClass: string;
}) {
  return (
    <article className={`relative h-[360px] shrink-0 overflow-hidden border border-solid border-[#eae8df] bg-[#1a120c] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] ${widthClass}`}>
      <Image src={book.src} alt={book.alt} fill sizes="280px" className="object-cover" />
      {featured ? <div className="absolute inset-0 bg-black/15" /> : null}
      {featured ? (
        <Link
          href="#hire"
          className="absolute bottom-5 left-1/2 z-10 flex h-12 w-[min(220px,92%)] -translate-x-1/2 items-center justify-center bg-brand px-3 transition hover:brightness-95"
        >
          <span className="font-inter text-base font-medium tracking-[1.2px] whitespace-nowrap text-white uppercase">
            Publish Your Book
          </span>
        </Link>
      ) : null}
    </article>
  );
}

function BookTrack({
  active,
  className,
  cardClass,
  shift,
}: {
  active: number;
  className: string;
  cardClass: string;
  shift: string;
}) {
  const loop = [...books, ...books];

  return (
    <div className={`mx-auto overflow-hidden ${className}`} style={{ containerType: "inline-size" }}>
      <div
        className="flex gap-[30px] transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(calc(${-active} * ${shift}))` }}
      >
        {loop.map((book, index) => (
          <BookCard key={`${book.src}-${index}`} book={book} featured={index === active} widthClass={cardClass} />
        ))}
      </div>
    </div>
  );
}

export function HomeAudience() {
  const [active, setActive] = useState(0);

  function step(delta: number) {
    setActive((current) => (current + delta + books.length) % books.length);
  }

  return (
    <section className="relative overflow-hidden" aria-roledescription="carousel" aria-label="Published books">
      <div className="pointer-events-none absolute top-0 left-[calc(50%-7px)] h-full w-[5960px] max-w-none -translate-x-1/2">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/imgBookSotiHeaderLogin.png"
            alt=""
            width={1920}
            height={640}
            sizes="100vw"
            className="absolute top-[-59.76%] left-0 h-[236.07%] w-full max-w-none"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.66)]" />

      <div className="relative mx-auto w-full max-w-[1140px] px-5 py-[60px] xl:pt-[90px] xl:pb-[72px]">
        <h2 className="mx-auto w-full max-w-[480px] text-center font-tinos tracking-[0.2px] text-white">
          <span className={regular}>Your Book</span>
          <span className={regular}> </span>
          <span className={accent}>Deserves</span>
          <span className={regular}> </span>
          <span className={regular}>a </span>
          <span className={regular}>Global</span>
          <span className={regular}> </span>
          <span className={regular}>Audience</span>
        </h2>

        <div className="mt-8">
          <div className="flex justify-center md:hidden">
            <BookCard book={books[active]} featured widthClass="w-[min(100%,248px)]" />
          </div>
          <BookTrack
            active={active}
            className="hidden w-[526px] md:block xl:hidden"
            cardClass="w-[248px]"
            shift="(248px + 30px)"
          />
          <BookTrack
            active={active}
            className="hidden w-full xl:block"
            cardClass="w-[calc((100cqw-90px)/4)]"
            shift="((100cqw + 30px) / 4)"
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3.5 xl:mt-12">
          <button
            type="button"
            aria-label="Previous book"
            onClick={() => step(-1)}
            className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-solid border-white bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] transition hover:bg-[#f1f2ee]"
          >
            <span className="flex size-6 -scale-y-100 rotate-180 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/images/home/imgFrame.svg" className="block size-full max-w-none" />
            </span>
          </button>
          <button
            type="button"
            aria-label="Next book"
            onClick={() => step(1)}
            className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-solid border-brand bg-brand shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] transition hover:brightness-95"
          >
            <span className="relative size-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src="/images/home/imgFrame1.svg" className="absolute inset-0 block size-full max-w-none" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
