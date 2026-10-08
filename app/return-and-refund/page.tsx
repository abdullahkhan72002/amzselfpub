import Link from "next/link";
import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata(
  "Return & Refund",
  "Refund and cancellation rules for AMZ Self Pub publishing services.",
);

export default function ReturnRefundPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Return & Refund"
      text="Publishing work is made to order. Whether a payment can be returned depends on whether the stage has started, and on whether files have already been delivered."
    >
      <section>
        <h2 className="font-heading text-2xl text-navy">Before work starts</h2>
        <p className="mt-3">
          If you cancel in writing before we begin the agreed stage, we refund the unused amount
          for that stage. A request made within 48 hours of payment, and before work has started,
          is eligible for a refund of the amount paid for that stage, less a 10% processing fee.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">After work has started</h2>
        <p className="mt-3">
          Fees for editing, writing, design, formatting, narration, or setup already completed are
          not refundable. Any amount paid for a stage we have not started is returned. If you have
          taken no action on an order for 30 days after placing it, we will not open a new refund
          review for that idle order. You may still ask us to restart it, and a restart fee may
          apply.
        </p>
        <p className="mt-3">
          Where a service has been started and you request a refund within 7 days of purchase, we
          review the request against the brief and the work already done. After final files are
          delivered, the sale for that deliverable is final.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Deposits</h2>
        <p className="mt-3">
          Deposits and booking fees hold a place in the schedule and cover the time set aside for
          your project. They are not refundable once the date is reserved.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Recurring services</h2>
        <p className="mt-3">
          If you agree to a recurring promotion or retainer, you are consenting to be billed on the
          schedule in that agreement. You may cancel the next cycle through the contact page before
          the next billing date. Work already performed in the current cycle is not refunded.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Cancellations and missed calls</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Tell us at least 24 hours ahead if you need to move or cancel a scheduled call.</li>
          <li>A cancellation inside 24 hours may be charged 50% of the fee reserved for that appointment.</li>
          <li>A missed appointment without notice is not refunded and is not automatically rescheduled.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">If you are unhappy with the work</h2>
        <p className="mt-3">
          Write to us within 3 business days of delivery and tell us what does not match the brief.
          We will, at our discretion:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Clarify the brief and the files that were delivered.</li>
          <li>Make a revision that stays inside the original scope.</li>
          <li>Apply a credit toward a later stage when a revision cannot fix the issue.</li>
        </ul>
        <p className="mt-3">Each case is reviewed on its own. A refund is not guaranteed once work has been delivered.</p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Digital files</h2>
        <p className="mt-3">
          Manuscripts, covers, interiors, audio, and video are digital deliverables. Once they have
          been delivered or downloaded, they cannot be returned, and the fee for that deliverable
          is not refunded.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Printed books</h2>
        <p className="mt-3">
          Approved print runs are produced to order. We replace copies that arrive damaged. We do
          not accept returns of correctly printed books, and we do not refund a print run that
          matched the files you approved.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Chargebacks</h2>
        <p className="mt-3">
          If a charge looks wrong, contact us before you dispute it with your bank. We will work
          through the amount with you. A chargeback opened without contacting us first can result
          in the project being stopped and, where appropriate, further action to recover the fee
          for work already delivered.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">How to request a refund</h2>
        <p className="mt-3">
          Use the{" "}
          <Link href="/contact-us" className="text-teal">
            contact page
          </Link>{" "}
          or call{" "}
          <a href="tel:+14242868260" className="text-teal">
            +1 (424) 286-8260
          </a>{" "}
          or email{" "}
          <a href="mailto:info@amzselfpub.com" className="text-teal">
            info@amzselfpub.com
          </a>
          . Include your name, the project reference, and the reason. We reply with the amount, if
          any, that can be returned. These rules sit alongside the{" "}
          <Link href="/terms-and-conditions" className="text-teal">
            Terms & Conditions
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}
