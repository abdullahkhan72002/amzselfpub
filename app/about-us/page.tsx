import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { HeroActions } from "@/components/hero-actions";

export const metadata: Metadata = {
  title: "About Us | AMZ Self Pub",
  description:
    "AMZ SelfPub helps independent authors produce, publish, and distribute professional books in their own name.",
};

const publishDetails = [
  {
    label: "Genres",
    text: "Fiction, Non-Fiction, Memoir, Business and Self-Help, Children's Picture Books, Young Adult, and more",
  },
  {
    label: "Formats",
    text: "Ebook (Kindle and EPUB), Paperback, Hardcover, Audiobook",
  },
  {
    label: "Platforms",
    text: "Amazon KDP, IngramSpark, and major digital retail channels",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-[3px] w-10 shrink-0 bg-brand" />
      <p className="font-inter text-sm font-bold tracking-[0.12em] text-brand sm:text-base">{children}</p>
    </div>
  );
}

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About AMZ SelfPub"
        title="A Self-Publishing Company Built for Independent Authors"
        text="AMZ SelfPub is a US-based self-publishing services company dedicated to helping independent authors produce, publish, and distribute professional-quality books, entirely in their own name. We handle the editorial, design, and publishing work so authors can focus on what they do best: writing."
      />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1140px] px-5 py-16 sm:py-20">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl leading-tight text-navy sm:text-5xl">
            We Help Authors Publish Books They&apos;re Proud Of
          </h2>
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-relaxed text-[#5c6570] sm:text-lg">
            <p>
              Most authors do not want a publishing deal that strips away their rights, takes a share of their royalties, or leaves them waiting years to see their book on a shelf. They want a finished, professionally produced book that reaches the right readers, and stays entirely in their name.
            </p>
            <p>AMZ SelfPub was built for exactly that purpose.</p>
            <p>
              We are a team of editors, cover designers, formatters, and publishing specialists working exclusively with independent authors across the United States. Every project begins with a clear scope, a written breakdown of costs, and an agreed timeline, so there are no surprises from the first conversation to the final upload.
            </p>
            <p>
              We support authors at every stage of the process and across all major genres, including fiction, non-fiction, memoir, business, children&apos;s picture books, and more. Whether you have a finished manuscript ready for editing or an idea that still needs to be written, there is a clear path forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f0]">
        <div className="mx-auto w-full max-w-[1140px] px-5 py-16 sm:py-20">
          <Eyebrow>Our Mission</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl leading-tight text-navy sm:text-5xl">Why AMZ SelfPub Exists</h2>
          <div className="mt-6 max-w-4xl space-y-5 text-base leading-relaxed text-[#5c6570] sm:text-lg">
            <p>
              Independent publishing has never been more accessible, but accessible does not always mean easy. Authors still have to navigate editing, cover design, interior formatting, metadata, and platform setup before a single reader can find their book. Many end up hiring separate vendors for each stage, paying for services they do not fully understand, or working with companies that take a stake in their earnings in exchange for support.
            </p>
            <p>AMZ SelfPub exists to remove that friction.</p>
            <p>
              Our mission is to make professional self-publishing straightforward, transparent, and fully author-centered, so that every writer with a story worth telling has a clear, affordable path to getting it published without giving up ownership, creative control, or a fair share of what they earn.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1140px] px-5 py-16 sm:py-20">
          <Eyebrow>What We Publish</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl leading-tight text-navy sm:text-5xl">Genres and Formats We Support</h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#5c6570] sm:text-lg">
            AMZ SelfPub works with authors across a wide range of genres and in every major publishing format.
          </p>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {publishDetails.map((item) => (
              <li key={item.label} className="rounded-[20px] bg-[#fff8f0] px-6 py-7">
                <h3 className="font-heading text-2xl text-navy">{item.label}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#5c6570]">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-4xl text-base leading-relaxed text-[#5c6570] sm:text-lg">
            Whether you are publishing your first title or adding a new release to an existing catalog, we can prepare your book for every format and platform your readers use.
          </p>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff4e6_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className="font-heading text-4xl leading-tight text-navy sm:text-5xl">Start With a Free Consultation</h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c6570] sm:text-lg">
            If you have a manuscript, a draft, or a working outline, we want to hear about it. Tell us where your book stands and what it needs. Our team will outline the stages that apply to your project and provide the cost for each before anything begins.
          </p>
          <HeroActions align="center" />
        </div>
      </section>
    </main>
  );
}
