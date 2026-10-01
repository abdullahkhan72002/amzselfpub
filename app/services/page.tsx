import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | AMZ Self Pub",
  description: "Editing, design, publishing, printing, and promotion from AMZ Self Pub.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip">
      <PageBanner
        eyebrow="Services"
        title="Publishing support for every stage"
        text="AMZ Self Pub helps with the manuscript, the design, the listing, and the promotion. Pick the part of the project you need, or ask us to run the full path."
      />
      <section className="bg-white">
        <ul className="mx-auto grid max-w-6xl min-w-0 gap-6 px-5 pb-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="min-w-0 bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <h2 className="font-heading text-2xl text-navy">{service.nav}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6570]">{service.description}</p>
              <Link href={`/${service.slug}`} className="mt-5 inline-flex text-sm font-medium text-teal">
                View service
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
