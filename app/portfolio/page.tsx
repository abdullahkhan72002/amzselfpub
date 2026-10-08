import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Portfolio | AMZ Self Pub",
  description: "Covers, interiors, and listings produced for independent authors who published in their own name.",
};

const books = [
  { src: "/images/home/Bullfrog C3 R1.jpg", title: "Bullfrog", width: 1800, height: 2700 },
  { src: "/images/home/Cover 02 R2.jpg", title: "The first Adventure of PO Bear", width: 1800, height: 2700 },
  { src: "/images/home/Cover Design Kingdom Living.jpg", title: "Rebuilding for Kingdom Living", width: 2550, height: 3300 },
  { src: "/images/home/Cover.jpg", title: "Ring the Bells That Still Can Ring", width: 1800, height: 2700 },
  { src: "/images/home/Cover02.jpg", title: "PooPoo Fairy", width: 2550, height: 3300 },
  { src: "/images/home/IN THE STREETS OF 02.jpg", title: "In the Streets of the Alleyways", width: 2400, height: 3300 },
  { src: "/images/carousel/book-5.png", title: "Simple Way Of Piece Life", width: 900, height: 1306 },
  { src: "/images/carousel/book-3.png", title: "Great Travel At Desert", width: 900, height: 720 },
  { src: "/images/carousel/book-16.png", title: "The Lady Beauty Scarlett", width: 900, height: 1306 },
  { src: "/images/hero-book.png", title: "The Song of Achilles", width: 424, height: 660 },
  { src: "/images/carousel/book-4.png", title: "Once Upon A Time", width: 900, height: 1306 },
  { src: "/images/about-book.png", title: "Anna's Friends: The Assignment", width: 475, height: 600 },
  { src: "/images/carousel-1.png", title: "The Little Star's Big Journey", width: 355, height: 520 },
  { src: "/images/carousel-2.png", title: "The Universe Within", width: 355, height: 520 },
  { src: "/images/carousel-3.png", title: "Ignite Your Growth", width: 355, height: 520 },
  { src: "/images/carousel-4.png", title: "The Coven", width: 355, height: 520 },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Our Work"
        title="Books We've Helped Bring to Life"
        text="Every cover, interior, and listing shown here was produced for an independent author who wanted a professionally published book in their own name. Browse the titles below to see the standard we hold across genres, formats, and publishing stages."
      />
      <section className="bg-white">
        <ul className="mx-auto max-w-6xl columns-1 gap-6 px-5 pb-20 sm:columns-2 sm:px-8 lg:columns-3">
          {books.map((book) => (
            <li
              key={book.src}
              className="mb-6 inline-block w-full break-inside-avoid bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={book.src}
                alt={book.title}
                width={book.width}
                height={book.height}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="h-auto w-full"
              />
              <p className="mt-4 font-medium text-navy">{book.title}</p>
            </li>
          ))}
        </ul>
        <div className="pb-20 text-center">
          <Link href="/book-publishing" className="inline-flex rounded-xl bg-teal px-6 py-3 font-medium text-white">
            Start Book Publishing
          </Link>
        </div>
      </section>
    </main>
  );
}
