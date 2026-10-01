const reviews = [
  {
    name: "Yvonne G. Williams",
    role: "Author of Anna's Friends: The Assignment",
    image: "/images/authors/yvonne.png",
    quote:
      "The edit kept my classroom scenes intact and only tightened the chapters that were slowing the story. I approved the cover before it was attached to the paperback file.",
    mark: "text-teal",
  },
  {
    name: "Elena Voss",
    role: "Author of The Lady Beauty Scarlett",
    image: "/images/authors/elena.png",
    quote:
      "I sent a period novel with uneven chapters. The editor marked the timeline problems, and the cover direction matched the era instead of looking like a modern romance.",
    mark: "text-navy",
  },
  {
    name: "Marcus Hale",
    role: "Author of Great Travel At Desert",
    image: "/images/authors/marcus.png",
    quote:
      "The interior was set for the trim I chose, and I saw a proof before the print file left the project. The ebook used the same chapter breaks.",
    mark: "text-teal",
  },
  {
    name: "Priya Shah",
    role: "Author of Simple Way Of Piece Life",
    image: "/images/authors/priya.png",
    quote:
      "I had a short nonfiction draft and no retailer account. They formatted the ebook, wrote the listing with me, and left the KDP account in my name.",
    mark: "text-navy",
  },
  {
    name: "Daniel Okonkwo",
    role: "Author of Once Upon A Time",
    image: "/images/authors/daniel.png",
    quote:
      "The children’s text was cut to the age I named, and I reviewed the illustration notes before the pages were locked for print.",
    mark: "text-teal",
  },
  {
    name: "Hannah Cole",
    role: "Author of a business guide",
    image: "/images/authors/hannah.png",
    quote:
      "Ghostwriting started from my interviews, not a generic outline. I owned the finished manuscript and used it for both the paperback and the ebook.",
    mark: "text-navy",
  },
];

function Card({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="w-[min(20rem,78vw)] shrink-0 rounded-2xl bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:w-[26rem]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={review.image} alt={review.name} className="h-14 w-14 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-ink">{review.name}</p>
            <p className="text-sm text-[#8b939c]">{review.role}</p>
          </div>
        </div>
        <span className={`font-heading text-5xl leading-none ${review.mark}`} aria-hidden="true">
          ”
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#5c6570]">{review.quote}</p>
    </article>
  );
}

function Row({ items, reverse = false }: { items: typeof reviews; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className={`flex w-max gap-5 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
      {loop.map((review, index) => (
        <Card key={`${review.name}-${index}`} review={review} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="max-w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 lg:pt-24">
        <h2 className="text-center font-heading text-4xl text-navy sm:text-5xl">Author Reviews</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#5c6570]">
          Notes from authors who used AMZ Self Pub for editing, design, or publishing setup.
        </p>
      </div>
      <div className="mt-10 w-full max-w-full space-y-5 overflow-hidden pb-16 lg:pb-24">
        <Row items={reviews.slice(0, 3)} />
        <Row items={reviews.slice(3)} reverse />
      </div>
    </section>
  );
}
