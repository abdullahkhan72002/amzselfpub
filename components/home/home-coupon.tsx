"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { submitLead } from "@/lib/submit-lead";

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
] as const;

const fieldClass =
  "h-[50px] w-full rounded-[10px] border border-black/10 bg-white px-5 font-sans text-[15px] font-light text-[#2b2b2b] outline-none placeholder:font-light placeholder:text-[#a0a0a0] focus:border-brand";

export function HomeCoupon() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSent(false);
    setPending(true);
    try {
      await submitLead(form, "Activate Your Coupon");
      form.reset();
      setSent(true);
    } catch {
      setError("We could not send that just now. Please email info@amzselfpub.com.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/home/imgRectangle4175.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1140px] grid-cols-1 items-center gap-10 px-5 py-[60px] xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-0 xl:py-[100px]">
        <form onSubmit={onSubmit} className="relative z-10 w-full">
          <h2 className="text-center font-tinos text-[32px] font-bold leading-[1.2] text-white xl:text-left xl:text-[44px]">
            Request a Free Consultation
          </h2>
          <p className="mt-3 text-left font-sans text-[15px] leading-[1.65] text-white xl:mt-4 xl:text-base">
            Tell us the genre, where your manuscript stands right now, and which services you need. A member of our team will follow up to walk you through the scope and pricing for your specific project.
          </p>

          <div className="mt-5 flex flex-col gap-3.5 xl:mt-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label className="sr-only" htmlFor={`coupon-${field.name}`}>
                  {field.label}
                </label>
                <input
                  id={`coupon-${field.name}`}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  required
                  placeholder={field.label}
                  className={fieldClass}
                />
              </div>
            ))}
            <div>
              <label className="sr-only" htmlFor="coupon-message">
                Write A Message
              </label>
              <textarea
                id="coupon-message"
                name="message"
                required
                placeholder="Write A Message"
                className="h-[120px] w-full resize-none rounded-[10px] border border-black/10 bg-white px-5 pt-3.5 font-sans text-[15px] font-light text-[#2b2b2b] outline-none placeholder:font-light placeholder:text-[#a0a0a0] focus:border-brand"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-4 flex h-12 w-[176px] items-center justify-center rounded-[10px] bg-brand font-sans text-base font-medium text-white transition hover:bg-[#e58612] disabled:opacity-70"
          >
            {pending ? "Sending..." : "Submit"}
          </button>
          {error ? (
            <p className="mt-4 text-sm text-red-300" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="mt-4 text-sm text-white" role="status">
              Thanks. A publishing expert will be in touch.
            </p>
          ) : null}
        </form>

        <div className="relative z-0 h-[210px] w-full overflow-hidden sm:h-[300px] xl:-ml-16 xl:h-[520px] xl:w-[calc(100%+64px)]">
          <Image
            src="/images/home/imgUnsplash.png"
            alt="Stack of published books"
            fill
            sizes="(min-width: 1280px) 680px, 100vw"
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
