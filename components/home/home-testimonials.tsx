import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  quoteIcon: string;
};

const reviews: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Author of Anna's Friends: The Assignment",
    avatar: "/images/authors/yvonne.png",
    quote:
      "The edit kept my classroom scenes intact and only tightened the chapters that were slowing the story. I approved the cover before it was attached to the paperback file.",
    quoteIcon: "/images/home/imgInvertedCommas.svg",
  },
  {
    name: "Emily Carter",
    role: "Author of The Lady Beauty Scarlett",
    avatar: "/images/authors/elena.png",
    quote:
      "I sent a period novel with uneven chapters. The editor marked the timeline problems, and the cover direction matched the era instead of looking like a modern romance.",
    quoteIcon: "/images/home/imgVector6.svg",
  },
  {
    name: "James Walker",
    role: "Author of Great Travel At Desert",
    avatar: "/images/authors/marcus.png",
    quote:
      "The interior was set for the trim I chose, and I saw a proof before the print file left the project. The ebook used the same chapter breaks.",
    quoteIcon: "/images/home/imgInvertedCommas1.svg",
  },
  {
    name: "Jessica Brooks",
    role: "Author of Simple Way Of Piece Life",
    avatar: "/images/authors/priya.png",
    quote:
      "I had a short nonfiction draft and no retailer account. They formatted the ebook, wrote the listing with me, and left the KDP account in my name.",
    quoteIcon: "/images/home/imgInvertedCommas.svg",
  },
  {
    name: "Michael Bennett",
    role: "Author of Once Upon A Time",
    avatar: "/images/authors/daniel.png",
    quote:
      "The children’s text was cut to the age I named, and I reviewed the illustration notes before the pages were locked for print.",
    quoteIcon: "/images/home/imgVector6.svg",
  },
  {
    name: "Lauren Hayes",
    role: "Author of a business guide",
    avatar: "/images/authors/hannah.png",
    quote:
      "Ghostwriting started from my interviews, not a generic outline. I owned the finished manuscript and used it for both the paperback and the ebook.",
    quoteIcon: "/images/home/imgInvertedCommas2.svg",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article
      className="relative flex h-full flex-col gap-4 rounded-[20px] bg-white px-6 py-7"
      style={{
        boxShadow: "0px 2px 10px rgba(0,0,0,0.07)",
      }}
    >
      <div className="flex items-start gap-3 pr-8">
        <Image
          src={item.avatar}
          alt=""
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-full object-cover"
        />
        <div className="flex min-w-0 flex-col gap-0.5">
          <p className="font-jakarta text-base font-semibold leading-normal text-[#343434] sm:text-[18px]">
            {item.name}
          </p>
          <p className="font-jakarta text-[13px] font-light leading-normal text-[#6b6b6b] sm:text-sm">
            {item.role}
          </p>
        </div>
      </div>
      <p className="font-jakarta text-sm font-light leading-[1.6] text-[#6b6b6b] sm:text-[15px]">
        {item.quote}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.quoteIcon}
        alt=""
        className="pointer-events-none absolute top-5 right-5 size-7 object-contain object-left-top sm:size-8"
      />
    </article>
  );
}

export function HomeTestimonials() {
  return (
    <section className="bg-white py-16 xl:py-24">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <h2 className="text-center font-tinos text-[32px] font-normal leading-[1.2] tracking-[-0.6px] text-black xl:text-[44px] xl:tracking-[-1px]">
          Author Reviews
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:mt-14">
          {reviews.map((item) => (
            <li key={item.name}>
              <TestimonialCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
