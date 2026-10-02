import Link from "next/link";

export const PHONE_NUMBER = "(202) 555-0147";
export const PHONE_TEL = "+12025550147";
export const CONTACT_EMAIL = "info@amzselfpub.com";

export function CallButton({
  tone = "brand",
  className = "",
}: {
  tone?: "brand" | "onDark";
  className?: string;
}) {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      className={`inline-flex h-12 items-center justify-center rounded-[16px] px-6 font-sans text-base font-medium transition ${
        tone === "onDark"
          ? "bg-white text-black hover:bg-[#fff4e6]"
          : "bg-brand text-white hover:bg-[#e58612]"
      } ${className}`}
    >
      {PHONE_NUMBER}
    </a>
  );
}

export function HeroActions({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div className={`mt-8 flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}>
      <Link
        href="/contact-us"
        className="inline-flex rounded-xl bg-teal px-5 py-3 text-base font-medium text-white transition hover:bg-[#e58612]"
      >
        Get Free Consultation
      </Link>
      <a
        href={`tel:${PHONE_TEL}`}
        className="inline-flex rounded-xl border border-navy bg-white px-5 py-3 text-base font-medium text-navy"
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
}
