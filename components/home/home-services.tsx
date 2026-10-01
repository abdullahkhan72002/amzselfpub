"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const categories = [
  { label: "Non Fiction", icon: "/images/home/imgNonFictionIcon.svg", href: "#hire" },
  { label: "Fiction", icon: "/images/home/imgNonFictionIcon1.svg", href: "/fiction-writing" },
  { label: "Children's", icon: "/images/home/children.svg", href: "#hire" },
  { label: "Poetry", icon: "/images/home/imgNonFictionIcon3.svg", href: "#hire" },
  { label: "Thriller", icon: "/images/home/imgNonFictionIcon4.svg", href: "#hire" },
  { label: "Memoir", icon: "/images/home/imgNonFictionIcon5.svg", href: "#hire" },
] as const;

function usePageSize() {
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    const tablet = window.matchMedia("(min-width: 768px)");
    const update = () => setPageSize(tablet.matches ? 3 : 1);
    update();
    tablet.addEventListener("change", update);
    return () => tablet.removeEventListener("change", update);
  }, []);

  return pageSize;
}

function PagerButtons({
  onPrev,
  onNext,
  inert,
}: {
  onPrev: () => void;
  onNext: () => void;
  inert: boolean;
}) {
  return (
    <>
      <button
        type="button"
        aria-label="Previous genres"
        aria-disabled={inert}
        onClick={onPrev}
        className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-solid border-black bg-[#f1f2ee] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] transition hover:bg-white"
      >
        <span className="flex size-6 -scale-y-100 rotate-180 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/home/imgFrame.svg" className="block size-full max-w-none" />
        </span>
      </button>
      <button
        type="button"
        aria-label="Next genres"
        aria-disabled={inert}
        onClick={onNext}
        className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-solid border-black bg-brand shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] transition hover:brightness-95"
      >
        <span className="relative size-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/home/imgFrame1.svg" className="absolute inset-0 block size-full max-w-none" />
        </span>
      </button>
    </>
  );
}

export function HomeServices() {
  const pageSize = usePageSize();
  const [pageIndex, setPageIndex] = useState(0);
  const pageCount = Math.max(1, Math.ceil(categories.length / pageSize));
  const page = pageIndex % pageCount;
  const visible = categories.slice(page * pageSize, page * pageSize + pageSize);

  function step(delta: number) {
    setPageIndex((current) => {
      const count = Math.max(1, Math.ceil(categories.length / pageSize));
      if (count <= 1) return 0;
      return (current + delta + count) % count;
    });
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-146px] flex h-full w-[2154px] items-center justify-center">
          <div
            className="h-full w-[2154px] -scale-y-100"
            style={{
              backgroundImage:
                "linear-gradient(75.01009789261643deg, rgb(254, 149, 31) 13.992%, rgba(255, 255, 255, 0.1) 27.019%, rgb(255, 255, 255) 57.124%, rgb(255, 255, 255) 129.83%)",
            }}
          />
        </div>
        <div className="absolute top-0 left-1/2 flex h-full w-[2408px] -translate-x-1/2 items-center justify-center">
          <div
            className="h-full w-[2408px] -scale-y-100"
            style={{
              backgroundImage:
                "linear-gradient(72.75639064750202deg, rgb(254, 149, 31) 13.992%, rgba(255, 255, 255, 0.1) 27.019%, rgb(255, 255, 255) 57.124%, rgb(255, 255, 255) 129.83%)",
            }}
          />
        </div>
      </div>

      <div className="absolute top-[157px] right-[93px] z-10 hidden gap-3.5 xl:flex">
        <PagerButtons onPrev={() => step(-1)} onNext={() => step(1)} inert={pageCount <= 1} />
      </div>

      <div className="relative mx-auto w-full max-w-[1140px] px-5 py-[60px] xl:py-[90px]">
        <div className="flex items-center justify-center gap-3">
          <span className="h-[3px] w-8 shrink-0 bg-brand xl:w-11" />
          <p className="text-center font-inter text-sm font-bold tracking-[0.12em] text-black xl:text-base">
            Our Services
          </p>
          <span className="h-[3px] w-8 shrink-0 bg-brand xl:w-11" />
        </div>

        <div className="mt-3">
          <h2 className="mx-auto w-full max-w-[520px] text-center font-tinos text-[30px] leading-[1.2] font-bold text-black sm:text-[32px] xl:text-[42px]">
            Comprehensive Publishing Services
          </h2>
          <div className="mt-5 flex justify-center gap-3.5 xl:hidden">
            <PagerButtons onPrev={() => step(-1)} onNext={() => step(1)} inert={pageCount <= 1} />
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-[720px] text-center font-sans text-base leading-[1.65] font-medium text-[rgba(0,0,0,0.7)]">
          AMZSelfpub offers a complete, author-focused publishing experience, supporting writers through manuscript development, editing, publishing, and promotion with expert guidance and dedicated support.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
          {visible.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="flex min-h-[112px] items-center rounded-[18px] bg-[#f1f2ee] px-5 py-4 drop-shadow-[0px_3px_17px_rgba(67,80,88,0.15)] transition hover:brightness-[0.98] xl:min-h-[120px] xl:px-6"
            >
              <span className="flex min-w-0 items-center gap-4 xl:gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src={category.icon}
                  className="size-10 shrink-0 xl:size-12"
                />
                <span className="min-w-0 font-sans text-[20px] leading-[1.3] tracking-[-0.2px] text-black xl:text-[24px]">
                  {category.label}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
