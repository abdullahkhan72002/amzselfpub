import Image from "next/image";

const points = [
  {
    number: "01",
    title: "You keep the book",
    body: "Copyright, retailer accounts, and royalties stay in your name. We prepare the files and the listing. We do not take ownership of the manuscript.",
  },
  {
    number: "02",
    title: "One team, one brief",
    body: "Editing, cover design, formatting, and publishing setup are scoped in writing before that stage starts, so you are not hiring a new vendor for each file.",
  },
  {
    number: "03",
    title: "Proof before print",
    body: "You approve the edited text, the cover, and the interior before anything is uploaded or sent to press. Changes after that approval are a new stage.",
  },
  {
    number: "04",
    title: "Print and digital together",
    body: "Paperback, ebook, and audiobook can be prepared from the same approved manuscript, each sized for the retailer or printer that will carry it.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[linear-gradient(90deg,#fff4e6_0%,#ffffff_42%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <h2 className="font-heading text-4xl text-navy sm:text-5xl">Why Choose Us</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#7b8490]">
            AMZ Self Pub is built for authors who want a finished book in their own name, with a
            clear scope for editing, design, and release.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Image
              src="/images/how-bg.png"
              alt="Bookshelves in a store"
              width={480}
              height={640}
              className="h-56 w-full rounded-2xl object-cover sm:h-80"
            />
            <Image
              src="/images/coupon-books.png"
              alt="Stack of published books"
              width={480}
              height={640}
              className="h-56 w-full rounded-2xl object-cover sm:h-80"
            />
          </div>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point.number}>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white font-heading text-xl text-teal shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                {point.number}
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#66707a]">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
