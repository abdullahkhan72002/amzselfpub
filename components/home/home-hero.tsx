"use client";

import Image from "next/image";
import { HeroActions } from "@/components/hero-actions";
import { HeroLeadForm } from "@/components/hero-lead-form";

const cards = [
  {
    src: "/images/home/imgRectangle4173.png",
    position: "left-[calc(75%-29px)] top-[-508px] h-[335px] w-[271px]",
    rotate: "rotate-[163.25deg]",
  },
  {
    src: "/images/home/imgRectangle4174.png",
    position: "left-[calc(58.33%+15px)] top-[-354px] h-[332px] w-[266px]",
    rotate: "rotate-[164.62deg]",
  },
  {
    src: "/images/home/imgRectangle4176.png",
    position: "left-[calc(41.67%+36px)] top-[-162px] h-[332px] w-[266px]",
    rotate: "rotate-[164.62deg]",
  },
  {
    src: "/images/home/imgRectangle4177.png",
    position: "left-[calc(50%+28px)] top-[242px] h-[332px] w-[266px]",
    rotate: "rotate-[164.62deg]",
  },
  {
    src: "/images/home/imgRectangle4178.png",
    position: "left-[calc(33.33%+40px)] top-[-565px] h-[332px] w-[266px]",
    rotate: "rotate-[164.62deg]",
  },
  {
    src: "/images/home/imgRectangle4178.png",
    position: "left-[calc(66.67%+5px)] top-[42px] h-[332px] w-[266px]",
    rotate: "rotate-[164.62deg]",
  },
  {
    src: "/images/home/imgRectangle4179.png",
    position: "left-[calc(83.33%-29px)] top-[-106px] h-[331px] w-[263px]",
    rotate: "rotate-[165.28deg]",
  },
  {
    src: "/images/home/imgRectangle4180.png",
    position: "left-[calc(91.67%-47px)] top-[274px] h-[336px] w-[273px]",
    rotate: "rotate-[162.7deg]",
  },
];

const badges = [
  { src: "/images/home/imgTrust11.png", width: 100, height: 100, className: "h-[55px] w-[55px] object-cover xl:h-[76px] xl:w-[76px]" },
  { src: "/images/home/imgTrust21.png", width: 87, height: 93, className: "h-[51px] w-[47px] object-cover xl:h-[71px] xl:w-[66px]" },
  { src: "/images/home/imgTrust31.png", width: 102, height: 102, className: "size-14 object-cover xl:size-[78px]" },
  { src: "/images/home/imgTrust41.png", width: 111, height: 111, className: "size-[61px] object-cover xl:size-[84px]" },
];

function FloatingBook({
  src,
  position,
  rotate,
}: {
  src: string;
  position: string;
  rotate: string;
}) {
  return (
    <div className={`pointer-events-none absolute hidden items-center justify-center xl:flex ${position}`} aria-hidden>
      <div className={`-scale-y-100 flex-none opacity-[0.06] ${rotate}`}>
        <div className="relative h-[291px] w-[194px]">
          <Image src={src} alt="" fill sizes="194px" className="rounded-[18px] object-cover" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/home/imgWishlistIcon.svg" alt="" className="absolute top-[8px] left-[155px] size-[29px]" />
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute top-[-201px] left-[-229px] flex h-[1004px] w-[2154px] items-center justify-center" aria-hidden>
        <div className="rotate-180">
          <div
            className="h-[1004px] w-[2154px]"
            style={{
              backgroundImage:
                "linear-gradient(75.30993877426388deg, rgb(254, 149, 31) 13.992%, rgba(255, 255, 255, 0.1) 27.019%, rgb(255, 255, 255) 57.124%, rgb(255, 255, 255) 129.83%)",
            }}
          />
        </div>
      </div>

      {cards.map((card) => (
        <FloatingBook key={card.position} src={card.src} position={card.position} rotate={card.rotate} />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-5 pt-[60px] pb-[60px] xl:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="max-w-[640px] font-tinos text-[36px] font-bold leading-[1.15] tracking-[-0.5px] text-black sm:text-[44px] xl:text-[54px] xl:tracking-[-1px]">
              <span className="text-brand">Best</span>
              <span> Book Publishers for  Self-Publishing Success</span>
            </h1>
            <p className="mt-4 max-w-[540px] font-sans text-base leading-relaxed text-black xl:mt-5">
              Publishing your book should not feel overwhelming. AMZ SelfPub handles the editing, cover design, formatting, and publishing setup, so your finished book reaches readers on Amazon and beyond, in your name and on your terms.
            </p>
            <HeroActions className="mt-6" />
            <ul className="mt-8 flex flex-wrap items-end gap-4 xl:gap-x-4">
              {badges.map((badge) => (
                <li key={badge.src}>
                  <Image src={badge.src} alt="" width={badge.width} height={badge.height} className={badge.className} />
                </li>
              ))}
            </ul>
          </div>
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}
