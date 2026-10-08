/* eslint-disable @next/next/no-img-element */

const features = [
  {
    title: "Skilled Storytellers at Your Service",
    body: "Our ghostwriters are experienced across fiction, nonfiction, memoir, and business writing. They work closely with you to capture your voice, understand your message, and produce a manuscript that reads exactly the way you want, without sounding like anyone else wrote it. The finished book is authentically yours, from the first page to the last.",
    icon: "/images/home/imgGroup1171275050.svg",
    accent: "/images/home/imgVector3.svg",
    accentClass: "top-[-16px] left-[108px]",
  },
  {
    title: "Precision-Driven Quality Control",
    body: "Every manuscript produced by our ghostwriting team moves through a structured editorial review before delivery. Senior editors check for consistency, clarity, structure, and tone throughout the draft. Grammar and formatting are verified at every pass, so what you receive is ready for the next stage of the publishing process.",
    icon: "/images/home/imgGroup1171275049.svg",
    accent: "/images/home/imgVector4.svg",
    accentClass: "top-[8px] left-[108px]",
  },
  {
    title: "Deep-Dive Research Expertise",
    body: "For nonfiction, business, and educational titles, strong research is the foundation of a credible book. Our team sources reliable references, verifies facts, and ensures your content reflects current, accurate information. Whether your subject is personal finance, health, history, or a specialized field, readers will find the depth they expect from a published authority.",
    icon: "/images/home/imgGroup1171275048.svg",
    accent: "/images/home/imgVector3.svg",
    accentClass: "top-[-16px] left-[108px]",
  },
  {
    title: "Fast, Reliable Turnarounds",
    body: "We work to realistic, agreed-upon timelines, and we meet them. Every ghostwriting project begins with a delivery schedule outlined in writing, and our team communicates proactively if anything changes. You will always know where your manuscript stands and when to expect it.",
    icon: "/images/home/imgGroup1171275051.svg",
    accent: "/images/home/imgVector4.svg",
    accentClass: "top-[8px] left-[108px]",
  },
] as const;

function FeatureIcon({
  src,
  accent,
  accentClass,
}: {
  src: string;
  accent: string;
  accentClass: string;
}) {
  return (
    <div className="relative size-[72px] shrink-0 xl:size-[100px]">
      <div className="absolute inset-[-2.53%]">
        <img alt="" src={src} className="block size-full max-w-none" />
      </div>
      <div className={`absolute hidden h-[52px] w-[4px] xl:block ${accentClass}`} aria-hidden>
        <img
          alt=""
          src={accent}
          className="absolute top-1/2 left-1/2 h-[4px] w-[52px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90 -scale-x-100"
        />
      </div>
    </div>
  );
}

function FeatureCopy({
  title,
  body,
  className = "",
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <h3 className="font-heading text-lg font-semibold leading-[1.3] text-[rgba(0,0,0,0.7)] xl:text-[20px]">
        {title}
      </h3>
      <p className="mt-2 font-sans text-[15px] font-medium leading-[1.6] text-[rgba(0,0,0,0.7)] xl:text-base">
        {body}
      </p>
    </div>
  );
}

export function HomeGhostwriting() {
  const [storytellers, quality, research, turnarounds] = features;

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 left-1/2 flex h-[1010px] w-[2314px] -translate-x-1/2 items-center justify-center"
        aria-hidden
      >
        <div className="-scale-y-100">
          <div
            className="h-[1010px] w-[2314px]"
            style={{
              backgroundImage:
                "linear-gradient(74.35988109822345deg, rgb(254, 149, 31) 13.992%, rgba(255, 255, 255, 0.1) 27.019%, rgb(255, 255, 255) 57.124%, rgb(255, 255, 255) 129.83%)",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1140px] px-5 py-[60px] xl:pt-[96px] xl:pb-[80px]">
        <h2 className="mx-auto text-center font-tinos text-[32px] font-bold leading-[1.2] tracking-[0.2px] text-black xl:text-[42px]">
          Looking for Professional <span className="text-brand">Ghostwriting</span>
          <br />
          Services? Here&apos;s What You Can Expect
        </h2>
        <p className="mx-auto mt-4 max-w-[820px] text-center font-sans text-base leading-[1.65] text-[rgba(0,0,0,0.7)]">
          If you have a book idea but not the time, or the words, to write it yourself, our professional ghostwriting team turns your vision into a compelling, publish-ready manuscript. Here is what every ghostwriting engagement includes.
        </p>

        <div className="mx-auto mt-10 flex flex-col gap-10 xl:hidden">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <FeatureIcon src={feature.icon} accent={feature.accent} accentClass={feature.accentClass} />
              <FeatureCopy title={feature.title} body={feature.body} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 hidden xl:grid xl:grid-cols-2 xl:gap-x-16">
          <div className="relative flex min-w-0 flex-col gap-16">
            <img
              alt=""
              src="/images/home/imgVector2.svg"
              className="pointer-events-none absolute top-[-24px] left-[33px] h-[calc(100%+24px)] w-[34px]"
            />
            <div className="relative z-10 flex items-start gap-5">
              <FeatureIcon
                src={storytellers.icon}
                accent={storytellers.accent}
                accentClass={storytellers.accentClass}
              />
              <FeatureCopy title={storytellers.title} body={storytellers.body} />
            </div>
            <div className="relative z-10 flex items-start gap-5">
              <FeatureIcon src={quality.icon} accent={quality.accent} accentClass={quality.accentClass} />
              <FeatureCopy title={quality.title} body={quality.body} />
            </div>
          </div>

          <div className="relative flex min-w-0 flex-col gap-16">
            <img
              alt=""
              src="/images/home/imgVector2.svg"
              className="pointer-events-none absolute top-[-24px] left-[33px] h-[calc(100%+24px)] w-[34px]"
            />
            <div className="relative z-10 flex items-start gap-5">
              <FeatureIcon src={research.icon} accent={research.accent} accentClass={research.accentClass} />
              <FeatureCopy title={research.title} body={research.body} />
            </div>
            <div className="relative z-10 flex items-start gap-5">
              <FeatureIcon
                src={turnarounds.icon}
                accent={turnarounds.accent}
                accentClass={turnarounds.accentClass}
              />
              <FeatureCopy title={turnarounds.title} body={turnarounds.body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
