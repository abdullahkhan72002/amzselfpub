import Link from "next/link";
import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata(
  "Terms & Conditions",
  "Terms for editing, design, publishing, and promotion services from AMZ Self Pub.",
);

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      text="These terms apply when you browse www.amzselfpub.com or hire AMZ Self Pub for manuscript, design, publishing, printing, or promotion work. The exact scope of a project is confirmed in writing before that stage begins."
    >
      <section>
        <h2 className="font-heading text-2xl text-navy">Services</h2>
        <p className="mt-3">
          We provide ghostwriting, editing, proofreading, cover design, formatting, publishing
          setup, printing coordination, author websites, audiobook production, trailers, and related
          promotion. You confirm that you own the rights to the material you send us, or that you
          have permission to publish it. You remain the author and owner of your work.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Revisions</h2>
        <p className="mt-3">
          Revision rounds depend on the package you selected. Within those rounds we will revise
          the agreed deliverable without an extra charge, as long as the concept and scope stay the
          same. A new direction, a new word count, or a different trim size is a new scope and may
          be quoted separately. Revision turnaround is typically 48 hours after we receive clear
          written notes.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Fair use of revisions</h2>
        <p className="mt-3">
          “Unlimited revisions” on a package means revisions that stay inside the original brief,
          up to 30 rounds on that project. Further rounds after that cap are billed at the rate in
          your agreement.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Refunds</h2>
        <p className="mt-3">
          Refunds follow the{" "}
          <Link href="/return-and-refund" className="text-teal">
            Return & Refund
          </Link>{" "}
          page. In short: a written request made before we start the agreed stage can be refunded
          for the unused amount of that stage, less any stated processing fee. Fees for work already
          completed are not refunded. No refund is issued after final files have been delivered, or
          after a website has been launched, or after a trailer storyboard you approved has been
          produced. Custom packages are treated service by service. Approving one part, such as a
          cover, does not by itself cancel the rest of the package.
        </p>
        <p className="mt-3">
          A refund request needs a reason we can compare with the brief and the feedback already
          given. If the work matches the brief, we continue revisions instead of refunding. Orders
          placed with more than one provider for the same job, with the intention of claiming a
          refund from us, are not treated as good-faith orders, and we may decline them.
        </p>
        <p className="mt-3">
          If a refund is approved, rights in the unused concepts we created for that order return
          to AMZ Self Pub, and you agree not to use those unused concepts. Your own manuscript and
          any material you supplied remain yours.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">How to ask</h2>
        <p className="mt-3">
          Send the request through the contact page or call{" "}
          <a href="tel:+12025550147" className="text-teal">
            (202) 555-0147
          </a>{" "}
          or email{" "}
          <a href="mailto:info@amzselfpub.com" className="text-teal">
            info@amzselfpub.com
          </a>
          , and include your name, the project, and the concern. We will try to resolve it through
          a revision first. If a refund is approved, we confirm the amount in writing.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Project messages</h2>
        <p className="mt-3">
          Notes, files, and approvals may be exchanged by email or through the project thread we
          open with you. It is your responsibility to read those messages and reply. Silence is not
          grounds for a refund. If you are unsure how to send files, contact us and we will walk
          you through it.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Reactivation</h2>
        <p className="mt-3">
          If you need to pause, email us and we will hold the project. If we receive no response
          for 45 days, we are not obliged to refund the order. Restarting after that pause requires
          the restart fee stated in your project note before work begins again.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Third-party tools</h2>
        <p className="mt-3">
          Some deliverables use printers, retailers, fonts, stock, or software from other
          companies. Those companies may apply their own terms to the feature you are using. When
          you approve a file that depends on one of those tools, you agree to the third-party terms
          that apply to it. Those terms can change at the other company’s discretion.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Support and quality</h2>
        <p className="mt-3">
          You can reach the team through the contact details published on this website. Designers
          and editors work from the specifications in your order. Covers and interiors are prepared
          after a review of your genre and references so the result is specific to your book.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Revision rounds in your package are there so the deliverable can match the brief.</li>
          <li>We keep revising inside that scope until the agreed deliverable matches the brief.</li>
          <li>If you need files coordinated with your own printer, say so in the project and we will include that handoff.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Delivery</h2>
        <p className="mt-3">
          Files are delivered by the date in your order confirmation, and we email you when they
          are ready. Revision and refund timing is counted from that delivery. You receive a
          project reference so you can ask about status or send revision notes against the right
          job. Standard design delivery is typically 2 to 3 days after the materials and approval
          we need are in hand. A rush schedule, if offered, is quoted separately before it starts.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Communication</h2>
        <p className="mt-3">
          Treat messages as official only when they come from contact details published on
          www.amzselfpub.com, including the phone number listed there. AMZ Self Pub is not
          responsible for mail or calls that pretend to be from us but do not use those details.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Payment</h2>
        <p className="mt-3">
          Fees, milestones, and due dates are stated in your project agreement. Work on a stage
          proceeds once the agreed payment for that stage is received.
        </p>
      </section>
    </LegalPage>
  );
}
