import Image from "next/image";
import { LeadForm } from "@/components/lead-form";

export function Coupon() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy">
      <Image src="/images/how-bg.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#111111]/80" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <LeadForm
          id="coupon"
          title="Request a Free Consultation"
          subtitle="Tell us the genre, the draft you have, and whether you need editing, design, or a full publishing setup."
          tone="plain"
          align="left"
          theme="onDark"
        />
        <Image
          src="/images/coupon-books.png"
          alt="Stack of published books"
          width={892}
          height={688}
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
