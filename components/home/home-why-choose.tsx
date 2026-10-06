import Image from "next/image";

const collage = {
  left: [
    { src: "/images/home/imgBase.png", width: 305, height: 277 },
    { src: "/images/home/imgBase2.png", width: 305, height: 181 },
  ],
  right: [
    { src: "/images/home/imgBase1.png", width: 305, height: 181 },
    { src: "/images/home/imgBase3.png", width: 305, height: 277 },
  ],
} as const;

const features = [
  {
    n: "01",
    title: "You keep the book",
    body: "Copyright, retailer accounts, and royalties stay in your name. We prepare the files and the listing. We do not take ownership of the manuscript.",
    bodyClass: "font-sans",
  },
  {
    n: "02",
    title: "One team, one brief",
    body: "Editing, cover design, formatting, and publishing setup are scoped in writing before that stage starts, so you are not hiring a new vendor for each file.",
    bodyClass: "font-sans",
  },
  {
    n: "03",
    title: "Proof before print",
    body: "You approve the edited text, the cover, and the interior before anything is uploaded or sent to press. Changes after that approval are a new stage.",
    bodyClass: "font-inter",
  },
  {
    n: "04",
    title: "Print and digital together",
    body: "Paperback, ebook, and audiobook can be prepared from the same approved manuscript, each sized for the retailer or printer that will carry it.",
    bodyClass: "font-inter",
  },
] as const;

export function HomeWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute top-[180px] left-[58%] hidden size-[440px] xl:block"
        aria-hidden
      >
        <div className="absolute inset-[-121.55%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/home/imgEllipse554.svg" className="block size-full max-w-none" />
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1140px] items-start gap-12 px-5 py-[60px] xl:grid-cols-[472px_minmax(0,1fr)] xl:gap-x-[72px] xl:py-[96px]">
        <div className="min-w-0">
          <h2 className="font-tinos text-[32px] font-bold leading-[1.2] tracking-[0.4px] text-black xl:text-[42px]">
            Why Choose Us
          </h2>
          <p className="mt-3 max-w-[460px] font-inter text-[15px] font-normal leading-[1.65] text-[#8a8a8a] xl:text-base">
            AMZ Self Pub is built for authors who want a finished book in their own name, with a clear scope for editing, design, and release.
          </p>
          <div className="mt-8 grid min-w-0 grid-cols-2 gap-2 xl:mt-10">
            <div className="flex min-w-0 flex-col gap-2">
              {collage.left.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full"
                  style={{ width: "100%", height: "auto" }}
                  sizes="(min-width: 1280px) 232px, 45vw"
                />
              ))}
            </div>
            <div className="flex min-w-0 flex-col gap-2">
              {collage.right.map((image) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full"
                  style={{ width: "100%", height: "auto" }}
                  sizes="(min-width: 1280px) 232px, 45vw"
                />
              ))}
            </div>
          </div>
        </div>

        <ul className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 xl:gap-x-[64px] xl:gap-y-[80px]">
          {features.map((feature) => (
            <li key={feature.n} className="min-w-0">
              <div className="flex size-16 items-center justify-center rounded-tl-[6px] rounded-tr-[6px] rounded-br-[18px] rounded-bl-[6px] bg-white shadow-[0px_9px_27px_0px_rgba(104,117,161,0.1)] xl:size-[72px]">
                <span className="font-inter text-[22px] leading-normal font-bold text-brand italic xl:text-[24px]">
                  {feature.n}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-[20px] leading-[1.3] font-semibold text-black xl:mt-7 xl:text-[22px]">
                {feature.title}
              </h3>
              <p className={`mt-3 text-[15px] leading-[1.6] font-normal text-[#8a8a8a] xl:text-base ${feature.bodyClass}`}>
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
