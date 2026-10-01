import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | AMZ Self Pub",
  description: "Practical notes on editing, ISBNs, early readers, and the cost of self-publishing.",
};

export default function BlogPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Blog"
        title="Notes for authors who are ready to publish"
        text="Short guides from AMZ Self Pub on what to prepare, how editions work, and how to read a publishing quote."
      />
      <section className="bg-white">
        <ul className="mx-auto grid max-w-6xl gap-6 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug} className="bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <p className="text-sm text-teal">{post.date}</p>
              <h2 className="mt-2 font-heading text-2xl text-navy">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6570]">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-medium text-teal">
                Read note
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
