"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submit-lead";

export function HeroLeadForm({
  id = "hire",
  source = "Hire A Book Publisher",
  title = "Hire A Book Publisher",
  subtitle = "Discuss your project with our publishing expert",
}: {
  id?: string;
  source?: string;
  title?: string;
  subtitle?: string;
}) {
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
      await submitLead(form, source);
      form.reset();
      setSent(true);
    } catch {
      setError("We could not send that just now. Please email info@amzselfpub.com.");
    } finally {
      setPending(false);
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-black/10 bg-white px-4 font-sans text-[15px] font-light text-ink outline-none placeholder:font-light placeholder:text-placeholder focus:border-brand sm:px-5 sm:text-base";

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="flex w-full flex-col rounded-[30px] bg-[#ffe6c9] px-6 py-8 sm:px-8 lg:rounded-[46px] lg:px-8 lg:py-10"
    >
      <h2 className="text-center font-heading text-[30px] font-bold leading-[1.2] text-ink sm:text-[32px] xl:text-[40px]">
        {title}
      </h2>
      <p className="mt-2 text-center font-sans text-[15px] leading-relaxed text-black xl:text-base">{subtitle}</p>

      <div className="mt-6 flex flex-col gap-3.5">
        <label className="sr-only" htmlFor={`${id}-name`}>
          Name
        </label>
        <input id={`${id}-name`} name="name" required placeholder="Name" autoComplete="name" className={`h-[50px] ${fieldClass}`} />
        <label className="sr-only" htmlFor={`${id}-phone`}>
          Phone Number
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          autoComplete="tel"
          className={`h-[50px] ${fieldClass}`}
        />
        <label className="sr-only" htmlFor={`${id}-email`}>
          Email Address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          placeholder="Email Address"
          autoComplete="email"
          className={`h-[50px] ${fieldClass}`}
        />
        <label className="sr-only" htmlFor={`${id}-message`}>
          Write A Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          placeholder="Write A Message"
          className={`h-[120px] py-3.5 ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mx-auto mt-8 flex h-12 w-full max-w-[176px] items-center justify-center rounded-[10px] bg-brand px-7 font-sans text-base font-medium text-white transition hover:bg-[#e58612] disabled:opacity-70"
      >
        {pending ? "Sending..." : "Submit"}
      </button>
      {error ? (
        <p className="mt-4 text-center font-sans text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-4 text-center font-sans text-sm text-ink" role="status">
          Thanks. A publishing expert will be in touch.
        </p>
      ) : null}
    </form>
  );
}
