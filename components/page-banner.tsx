import { HeroActions } from "@/components/hero-actions";

export function PageBanner({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-[linear-gradient(180deg,#fff4e6_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <p className="text-sm font-medium tracking-wide text-teal">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-4xl leading-tight text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-[#5c6570] sm:text-lg">{text}</p>
        <HeroActions align="center" />
      </div>
    </section>
  );
}
