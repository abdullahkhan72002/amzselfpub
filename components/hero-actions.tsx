import { ConsultButton } from "@/components/consultation";
import { PHONE_NUMBER, PHONE_TEL } from "@/lib/contact";

export { CONTACT_EMAIL, PHONE_NUMBER, PHONE_TEL } from "@/lib/contact";

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

export function HeroActions({ align = "start", className = "mt-8" }: { align?: "start" | "center"; className?: string }) {
  return (
    <div className={`inline-flex flex-wrap items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"} ${className}`}>
      <ConsultButton className="inline-flex h-12 items-center justify-center rounded-[16px] bg-brand px-6 font-sans text-base font-medium text-white transition hover:bg-[#e58612]">
        Get Free Consultation
      </ConsultButton>
      <CallButton />
    </div>
  );
}
