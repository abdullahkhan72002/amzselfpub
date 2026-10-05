import { LegalPage, legalMetadata } from "@/components/legal-page";

export const metadata = legalMetadata(
  "Privacy Policy",
  "How AMZ Self Pub collects, uses, and protects the information you share.",
);

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      text="AMZ Self Pub keeps the personal details you share with us for the purpose of answering you and delivering the publishing work you asked for. Please read this policy, and check it again when you return, because we update it when our practices change."
    >
      <section>
        <h2 className="font-heading text-2xl text-navy">Information we collect</h2>
        <p className="mt-3">
          While you use www.amzselfpub.com we may collect and process the following:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            Details about how you use the site, such as pages viewed, general location, and traffic
            data. This is used to understand which pages are useful.
          </li>
          <li>
            Information you give us yourself, including your name, phone number, email address, and
            the message you send through a form, or the files you send when you hire us.
          </li>
          <li>Information you provide when you call, email, or otherwise write to us about a project.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Cookies</h2>
        <p className="mt-3">
          Cookies are small files stored on the device you use to browse. We may use them to see
          how the site is used and to improve it. That information is statistical. It is not used
          to identify you by name.
        </p>
        <p className="mt-3">
          You can set your browser to refuse cookies. Some parts of the site may not remember your
          choices if you do. If a third-party advertiser places a cookie after you click an ad, that
          cookie is controlled by them, not by AMZ Self Pub.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">How we use your information</h2>
        <p className="mt-3">We use what we collect to provide the service you requested, and also:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>To reply with information about our publishing, editing, design, or promotion services.</li>
          <li>
            To tell you about related services, only where you have agreed to hear from us. You can
            withdraw that agreement at any time.
          </li>
          <li>To tell you about changes to the site or to a service you are using.</li>
          <li>
            If you have already hired us, to contact you about similar work that fits the project
            you started.
          </li>
        </ul>
        <p className="mt-3">
          We add inquiry details to our CRM so we can follow up on your request. We do not sell
          your personal information. If we ever allow a selected partner to contact you about an
          unrelated offer, we will do that only with consent you can withdraw.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Storing your information</h2>
        <p className="mt-3">
          Project files and form details may be stored or processed by service providers that sit
          outside your state or country. By sending us your information, you agree to that transfer
          and storage. We take reasonable steps to keep it protected.
        </p>
        <p className="mt-3">
          Inquiry details stay with us while we are talking with you and for a reasonable period
          afterward. Project files stay for the life of the engagement and as long as we need them
          for our records. Information sent over the internet is not perfectly secure. You send
          electronic files at your own risk, and we cannot guarantee that a message will never be
          intercepted.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">When we share information</h2>
        <p className="mt-3">We do not disclose your personal information except as described here:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>To a buyer, if we sell all or part of the business.</li>
          <li>When the law requires us to disclose it.</li>
          <li>To reduce fraud or to investigate a suspected fraudulent transaction.</li>
          <li>To a vendor who is processing a file, payment, or message solely to complete your project.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Third-party links</h2>
        <p className="mt-3">
          The site may link to retailers, printers, or other sites. A link is not an endorsement of
          that site’s privacy practices. Read their policy before you send them personal data.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Access to your information</h2>
        <p className="mt-3">
          You may ask what personal information we hold about you. Write to us through the contact
          page with enough detail for us to find the record. We may charge a reasonable
          administrative fee if compiling the response requires more than a simple lookup.
        </p>
      </section>
      <section>
        <h2 className="font-heading text-2xl text-navy">Contact</h2>
        <p className="mt-3">
          Questions about this policy can be sent through the contact page. Phone{" "}
          <a href="tel:+14242868260" className="text-teal">
            (424) 286-8260
          </a>
          . Email{" "}
          <a href="mailto:info@amzselfpub.com" className="text-teal">
            info@amzselfpub.com
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
