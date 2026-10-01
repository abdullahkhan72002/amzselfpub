import Image from "next/image";
import { HeroActions } from "@/components/hero-actions";
import { LeadForm } from "@/components/lead-form";

const floats = [
  { src: "/images/book-5.png", className: "left-[4%] top-16 w-28 -rotate-12 opacity-25 sm:w-36" },
  { src: "/images/book-3.png", className: "left-[18%] top-6 w-32 rotate-6 opacity-20 sm:w-40" },
  { src: "/images/book-16.png", className: "right-[34%] top-10 hidden w-36 rotate-3 opacity-20 lg:block" },
  { src: "/images/hero-book.png", className: "right-[6%] top-8 w-32 rotate-12 opacity-30 sm:w-44" },
  { src: "/images/book-4.png", className: "right-[18%] bottom-6 hidden w-36 -rotate-6 opacity-25 lg:block" },
];

const badges = [
  { src: "/images/trust-1.png", alt: "Award finalist badge" },
  { src: "/images/trust-2.png", alt: "Clutch badge" },
  { src: "/images/trust-4.png", alt: "Top SEO badge" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        {floats.map((book) => (
          <Image
            key={book.src + book.className}
            src={book.src}
            alt=""
            width={220}
            height={320}
            className={`absolute h-auto ${book.className}`}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div>
          <h1 className="max-w-xl font-heading text-4xl leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            <span className="text-teal">Best</span> Book Publishers for Self-Publishing Success
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#3d3d3d] sm:text-lg">
            AMZ Self Pub takes a manuscript from edit and cover through formatting, print, and
            retailer setup, while you keep the rights and the royalties.
          </p>
          <HeroActions />
          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {badges.map((badge) => (
              <li key={badge.src}>
                <Image src={badge.src} alt={badge.alt} width={88} height={88} className="h-16 w-16 object-contain" />
              </li>
            ))}
          </ul>
        </div>
        <LeadForm id="hire" title="Hire A Book Publisher" />
      </div>
    </section>
  );
}
