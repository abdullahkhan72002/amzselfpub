import { ScaleCarousel } from "@/components/scale-carousel";

const categories = [
  { label: "Non Fiction", icon: "/images/icon-nonfiction.svg", highlight: false },
  { label: "Fiction", icon: "/images/icon-fiction.svg", highlight: true },
  { label: "History", icon: "/images/icon-history.svg", highlight: false },
  { label: "Poetry", icon: "/images/icon-poetry.svg", highlight: false },
  { label: "Thriller", icon: "/images/icon-thrill.svg", highlight: false },
  { label: "Memoir", icon: "/images/icon-astronaut.svg", highlight: false },
];

export function Services() {
  return (
    <section id="services" className="overflow-x-clip bg-[linear-gradient(180deg,#fff4e6_0%,#ffffff_62%)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex items-center justify-center gap-3 text-sm text-navy">
          <span className="h-0.5 w-8 bg-teal" />
          Our Services
          <span className="h-0.5 w-8 bg-teal" />
        </div>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-heading text-4xl leading-tight text-navy sm:text-5xl">
          Comprehensive Publishing Services
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-[#5c6570] sm:text-lg">
          AMZSelfpub offers a complete, author-focused publishing experience, supporting
          writers through manuscript development, editing, publishing, and promotion with
          expert guidance and dedicated support.
        </p>

        <ScaleCarousel
          ariaLabel="Publishing categories"
          initial={1}
          slides={categories.map((item) => (
            <div
              key={item.label}
              className="flex w-full items-center gap-4 rounded-3xl bg-card px-5 py-5 shadow-[0_8px_24px_rgba(67,80,88,0.12)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" width={56} height={56} />
              <span className={`text-lg font-medium ${item.highlight ? "text-navy" : "text-[#3c4654]"}`}>
                {item.label}
              </span>
            </div>
          ))}
        />
      </div>
    </section>
  );
}
