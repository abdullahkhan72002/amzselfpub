import Image from "next/image";

const features = ["Manuscript review", "Editing", "Cover and layout", "Publishing setup"];

function FeatureItem({ label }: { label: string }) {
  return (
    <li className="flex min-w-0 items-center gap-3.5">
      <span className="relative size-10 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/home/imgVector.svg" alt="" className="size-full" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/imgVector1.svg"
          alt=""
          className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2"
        />
      </span>
      <span className="font-sans text-sm font-medium leading-[1.3] tracking-[-0.2px] text-white sm:text-base">
        {label}
      </span>
    </li>
  );
}

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative z-10 mx-auto grid w-full max-w-[1140px] items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-[3px] w-10 shrink-0 bg-brand" />
            <p className="font-inter text-sm font-bold tracking-[0.12em] text-white sm:text-base">About Us</p>
          </div>
          <h2 className="mt-3 max-w-[520px] font-tinos text-[30px] font-bold leading-[1.2] text-white sm:text-[36px] lg:text-[42px]">
            A Streamlined Path to Self-Publishing
          </h2>
          <p className="mt-4 max-w-[520px] font-sans text-base leading-[1.65] text-white/75">
            AMZSelfPub provides a simple, flexible, and author-focused self-publishing experience tailored to your
            goals. From manuscript development to publishing, distribution, and marketing, we support you throughout
            the process while keeping your creative vision at the center of every step.
          </p>
          <ul className="mt-8 grid max-w-[520px] grid-cols-1 gap-4 min-[420px]:grid-cols-2">
            {features.map((label) => (
              <FeatureItem key={label} label={label} />
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
          <div className="absolute -right-4 -bottom-6 size-36 rotate-12 rounded-[36px] bg-brand sm:size-44" aria-hidden />
          <Image
            src="/images/second-sec.png"
            alt="Stack of books resting on a laptop"
            width={807}
            height={682}
            className="relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
