import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  quoteIcon: string;
};

const rowOne: Testimonial[] = [
  {
    name: "Yvonne G. Williams",
    role: "Author of Anna's Friends: The Assignment",
    avatar: "/images/authors/yvonne.png",
    quote:
      "The edit kept my classroom scenes intact and only tightened the chapters that were slowing the story. I approved the cover before it was attached to the paperback file.",
    quoteIcon: "/images/home/imgInvertedCommas.svg",
  },
  {
    name: "Elena Voss",
    role: "Author of The Lady Beauty Scarlett",
    avatar: "/images/authors/elena.png",
    quote:
      "I sent a period novel with uneven chapters. The editor marked the timeline problems, and the cover direction matched the era instead of looking like a modern romance.",
    quoteIcon: "/images/home/imgVector6.svg",
  },
  {
    name: "Marcus Hale",
    role: "Author of Great Travel At Desert",
    avatar: "/images/authors/marcus.png",
    quote:
      "The interior was set for the trim I chose, and I saw a proof before the print file left the project. The ebook used the same chapter breaks.",
    quoteIcon: "/images/home/imgInvertedCommas1.svg",
  },
];

const rowTwo: Testimonial[] = [
  {
    name: "Priya Shah",
    role: "Author of Simple Way Of Piece Life",
    avatar: "/images/authors/priya.png",
    quote:
      "I had a short nonfiction draft and no retailer account. They formatted the ebook, wrote the listing with me, and left the KDP account in my name.",
    quoteIcon: "/images/home/imgInvertedCommas.svg",
  },
  {
    name: "Daniel Okonkwo",
    role: "Author of Once Upon A Time",
    avatar: "/images/authors/daniel.png",
    quote:
      "The children’s text was cut to the age I named, and I reviewed the illustration notes before the pages were locked for print.",
    quoteIcon: "/images/home/imgVector6.svg",
  },
  {
    name: "Hannah Cole",
    role: "Author of a business guide",
    avatar: "/images/authors/hannah.png",
    quote:
      "Ghostwriting started from my interviews, not a generic outline. I owned the finished manuscript and used it for both the paperback and the ebook.",
    quoteIcon: "/images/home/imgInvertedCommas2.svg",
  },
];

function TestimonialCard({ item, duplicate }: { item: Testimonial; duplicate?: boolean }) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className="relative flex w-[min(85vw,360px)] shrink-0 flex-col gap-4 rounded-[20px] bg-white px-6 py-7 xl:w-[360px] xl:gap-5 xl:px-[30px] xl:py-10"
      style={{
        boxShadow: "-40px 44px 15px rgba(0,0,0,0.04), 0px 2px 10px rgba(0,0,0,0.07)",
      }}
    >
      <div className="flex items-start gap-2.5 pr-8 xl:gap-3">
        <Image
          src={item.avatar}
          alt=""
          width={48}
          height={48}
          className="size-10 shrink-0 rounded-full object-cover xl:size-12"
        />
        <div className="flex min-w-0 flex-col gap-0.5">
          <p className="font-jakarta text-base font-semibold leading-normal text-[#343434] xl:text-[18px]">
            {item.name}
          </p>
          <p className="font-jakarta text-[13px] font-light leading-normal text-[#6b6b6b] xl:text-sm">
            {item.role}
          </p>
        </div>
      </div>
      <p className="font-jakarta text-sm font-light leading-[1.6] text-[#6b6b6b] xl:text-[15px]">
        {item.quote}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.quoteIcon}
        alt=""
        className="pointer-events-none absolute top-4 right-4 size-7 object-contain object-left-top xl:top-6 xl:right-6 xl:size-8"
      />
    </article>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  const sequence = Array.from({ length: 4 }, () => items).flat();
  const loop = [...sequence, ...sequence];

  return (
    <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex w-max items-start gap-5 xl:gap-10`}>
      {loop.map((item, index) => (
        <TestimonialCard
          key={`${item.name}-${item.quoteIcon}-${index}`}
          item={item}
          duplicate={index >= sequence.length}
        />
      ))}
    </div>
  );
}

export function HomeTestimonials() {
  return (
    <section className="relative overflow-hidden bg-white pt-[60px] pb-[60px] xl:pt-[100px] xl:pb-[100px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <h2 className="text-center font-tinos text-[32px] font-normal leading-[1.2] tracking-[-0.6px] text-black xl:text-[44px] xl:tracking-[-1px]">
          Author Reviews
        </h2>
      </div>
      <div className="mt-10 flex flex-col gap-8 overflow-hidden py-4 xl:mt-20 xl:gap-9">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </div>
    </section>
  );
}
