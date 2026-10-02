import type { ReactNode } from "react";
import { HeroActions } from "@/components/hero-actions";
import { HeroLeadForm } from "@/components/hero-lead-form";

export function SplitHero({
  title,
  text,
  formId,
  formSource,
}: {
  title: ReactNode;
  text: string;
  formId: string;
  formSource: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#fff8f0_0%,#ffffff_42%)]" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-5 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="max-w-[640px] font-tinos text-[36px] leading-[1.15] font-bold tracking-[-0.5px] text-black sm:text-[44px] xl:text-[54px] xl:tracking-[-1px]">
              {title}
            </h1>
            <p className="mt-4 max-w-[510px] font-sans text-base leading-relaxed text-black xl:mt-5">{text}</p>
            <HeroActions className="mt-6" />
          </div>
          <HeroLeadForm id={formId} source={formSource} />
        </div>
      </div>
    </section>
  );
}
