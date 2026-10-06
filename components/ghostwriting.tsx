const features = [
  {
    title: "Skilled Storytellers at Your Service",
    body: "Our seasoned ghostwriters are more than just writers they’re storytellers with a knack for bringing your ideas to life. Whether it’s fiction, nonfiction, or memoirs, they craft compelling narratives tailored to your voice and vision.",
    tone: "bg-teal",
    icon: "M7 16V8m0 0 4 4m-4-4-4 4M17 8v8m0 0-4-4m4 4 4-4",
  },
  {
    title: "Deep-Dive Research Expertise",
    body: "Great books start with thorough research. Our team goes the extra mile to gather credible sources, understand your topic, and ensure your content is informative, accurate, and engaging for readers in any niche or genre.",
    tone: "bg-teal",
    icon: "M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h8M4 10h2M10 4v2M10 16v2",
  },
  {
    title: "Precision-Driven Quality Control",
    body: "Every manuscript undergoes a meticulous quality assurance process led by experienced editors. From grammar to structure, we guarantee that your book meets the highest publishing standards before it reaches the shelves.",
    tone: "bg-navy",
    icon: "M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z",
  },
  {
    title: "Fast, Reliable Turnarounds",
    body: "We understand deadlines matter. Our professional ghostwriters deliver on time—every time—without compromising on creativity or quality, ensuring your book is ready for fast-track publication.",
    tone: "bg-navy",
    icon: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c.4.4.7.9.8 1.5h4.4c.1-.6.4-1.1.8-1.5A6 6 0 0 0 12 3z",
  },
];

export function Ghostwriting() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff4e6_0%,#ffffff_48%,#ffffff_100%)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="mx-auto max-w-4xl text-center font-heading text-4xl leading-tight text-navy sm:text-5xl">
          Looking for Professional <span className="text-teal">Ghostwriting</span> Services? Here’s What You Can Expect
        </h2>
        <ul className="relative mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          <span className="absolute top-6 bottom-6 left-[11%] hidden w-3 rounded-full bg-[#e6e6e6] md:block" />
          <span className="absolute top-6 right-[39%] bottom-6 hidden w-3 rounded-full bg-[#e6e6e6] md:block" />
          {features.map((feature) => (
            <li key={feature.title} className="relative flex gap-5">
              <span className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white ${feature.tone}`}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d={feature.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#66707a]">{feature.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
