import type { Metadata } from "next";
import { CONTACT_EMAIL, PHONE_NUMBER, PHONE_TEL } from "@/components/hero-actions";
import { LeadForm } from "@/components/lead-form";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Contact Us | AMZ Self Pub",
  description: "Talk with a publishing expert about your book.",
};

export default function ContactUsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Contact Us"
        title="Discuss your project with our publishing expert"
        text="Share your manuscript plans and we will follow up with the next step."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
          <LeadForm id="hire" title="Hire A Book Publisher" align="left" />
          <address className="not-italic">
            <h2 className="font-sans text-sm font-bold text-teal">Contact</h2>
            <p className="mt-4">
              <a href={`tel:${PHONE_TEL}`} className="text-navy">
                {PHONE_NUMBER}
              </a>
            </p>
            <p className="mt-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy">
                {CONTACT_EMAIL}
              </a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}
